(() => {
  "use strict";

  const LEVELS = ["A2", "B1", "B2", "C1"];
  const STAGES = ["Fundament", "B2", "C1"];
  const PASS = 0.7;           // ab 70 % gilt ein Niveau im Test als sicher
  const MODULE_DONE = 0.75;   // ab 75 % in den Übungen gilt ein Modul als geschafft
  const MODS_PER_WEEK = 2;
  const COURSE = window.COURSE;
  const TEST = window.PLACEMENT;
  const byId = Object.fromEntries(COURSE.map(m => [m.id, m]));
  const $app = document.getElementById("app");
  const STORE_KEY = "werkstatt-deutsch-v1";

  // ---------- Zustand ----------
  const blank = () => ({ v: 1, updatedAt: 0, test: null, mods: {}, cards: {}, drafts: {} });
  let S = blank();
  try { const raw = localStorage.getItem(STORE_KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) {}

  let db = null, dbOff = false, dbTimer = null;
  function save() {
    S.updatedAt = Date.now();
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) {}
    if (db && !dbOff) {
      clearTimeout(dbTimer);
      dbTimer = setTimeout(() => {
        db.doc("progress/main").set({ ...S, summary: summary() }).catch(() => { dbOff = true; });
      }, 1500);
    }
  }
  function summary() {
    const r = S.test ? result(S.test.answers) : null;
    return {
      level: r ? r.current : null, target: r ? r.target : null,
      gaps: r ? [...r.gaps] : [],
      done: Object.keys(S.mods).filter(k => S.mods[k].done),
      scores: Object.fromEntries(Object.entries(S.mods).map(([k, v]) => [k, Math.round((v.best || 0) * 100)]))
    };
  }

  // ---------- Hilfsfunktionen ----------
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = s => String(s).toLowerCase().trim()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[.,!?;:„“"']/g, "").replace(/\s+/g, " ");
  const pct = x => Math.round(x * 100) + " %";
  const KEYS = ["A", "B", "C", "D"];
  // Antwortoptionen werden gemischt, damit die richtige Lösung nicht immer an derselben Stelle steht
  const shuffled = n => {
    const a = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  function artClass(word) {
    const m = /^(der|die|das)\s/.exec(word);
    return m ? "art-" + m[1] : "";
  }
  function deWord(word) {
    const m = /^(der|die|das)\s(.*)$/.exec(word);
    return m ? `<span class="${artClass(word)}">${m[1]}</span> ${esc(m[2])}` : esc(word);
  }

  // ---------- Auswertung des Tests ----------
  function result(answers) {
    const per = {};
    LEVELS.forEach(l => per[l] = { c: 0, n: 0 });
    const gaps = new Set();
    TEST.forEach((q, i) => {
      per[q.lvl].n++;
      if (answers[i] === q.a) per[q.lvl].c++; else gaps.add(q.m);
    });
    let k = 0;
    while (k < LEVELS.length && per[LEVELS[k]].c / per[LEVELS[k]].n >= PASS) k++;
    const current = k === 0 ? "A2" : LEVELS[k - 1];
    const target = k <= 1 ? "B1" : k === 2 ? "B2" : "C1";
    const stageIdx = k <= 1 ? 0 : k === 2 ? 1 : 2;
    return { per, k, current, secure: k > 0, target, stageIdx, gaps };
  }

  function stageOf(m) { return STAGES.indexOf(m.stage); }

  function buildPlan(r) {
    const main = [], optional = [];
    COURSE.forEach(m => {
      const s = stageOf(m);
      if (s < r.stageIdx) (r.gaps.has(m.id) ? main : optional).push(m);
    });
    COURSE.forEach(m => { if (stageOf(m) === r.stageIdx) main.push(m); });
    COURSE.forEach(m => { if (stageOf(m) > r.stageIdx) main.push(m); });
    // Lücken der Zielstufe zuerst, Reihenfolge sonst wie im Kurs
    const firstStage = main.filter(m => stageOf(m) <= r.stageIdx);
    const later = main.filter(m => stageOf(m) > r.stageIdx);
    firstStage.sort((a, b) => (r.gaps.has(b.id) - r.gaps.has(a.id)) || (COURSE.indexOf(a) - COURSE.indexOf(b)));
    return { main: firstStage.concat(later), optional };
  }

  function status(m, r) {
    if (S.mods[m.id] && S.mods[m.id].done) return ["done", "✓ geschafft " + pct(S.mods[m.id].best)];
    if (r && r.gaps.has(m.id)) return ["gap", "Lücke"];
    if (r && stageOf(m) < r.stageIdx) return ["opt", "Wiederholung"];
    if (S.mods[m.id]) return ["todo", "begonnen " + pct(S.mods[m.id].best || 0)];
    return ["todo", "offen"];
  }

  // ---------- Router ----------
  let view = "home", param = null;
  function go(v, p) {
    const h = p || v;
    if (location.hash.slice(1) !== h) location.hash = h; else route();
  }
  function route() {
    const h = location.hash.slice(1) || "home";
    if (byId[h]) { view = "module"; param = h; }
    else if (["home", "test", "plan", "vocab"].includes(h)) { view = h; param = null; }
    else { view = "home"; }
    document.querySelectorAll("#nav button").forEach(b => {
      const active = b.dataset.view === view || (view === "module" && b.dataset.view === "plan");
      if (active) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
    });
    render();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  document.getElementById("nav").addEventListener("click", e => {
    const b = e.target.closest("button[data-view]");
    if (b) go(b.dataset.view);
  });

  function render() {
    ({ home: renderHome, test: renderTest, plan: renderPlan, vocab: renderVocab, module: renderModule })[view]();
  }

  // ---------- Übersicht ----------
  function scaleHTML(r) {
    return `<div class="scale">${LEVELS.map((l, i) => {
      const p = r.per[l].c / r.per[l].n;
      const cls = ["tick", p >= PASS && i < r.k ? "pass" : "", r.secure && l === r.current ? "here" : "", l === r.target ? "goal" : ""].join(" ");
      return `<div class="${cls}"><span class="name">${l}</span><span class="bar"><i style="width:${p * 100}%"></i></span><span class="pct">${r.per[l].c}/${r.per[l].n}</span></div>`;
    }).join("")}</div>`;
  }

  function renderHome() {
    if (!S.test) {
      $app.innerHTML = `
      <section class="sheet">
        <span class="label">Schritt 1 von 2 · Einstufung</span>
        <h1>Erst messen, dann lernen.</h1>
        <div class="prose">
          <p>Bu kurs seviyeni tahmin etmiyor, <b>ölçüyor</b>. 40 soruluk test A2'den C1'e kadar dilbilgisi ve resmî dil yapılarını kontrol eder. Her soru bir kurs modülüne bağlı: yanlış cevapladığın her konu ders planında <b>„Lücke“</b> (boşluk) olarak işaretlenir ve en başa alınır.</p>
          <p>Süre: yaklaşık 15 dakika. Emin değilsen <b>„Weiß ich nicht“</b> seç; tahmin etmek sonucu bozar ve plan yanlış yerden başlar.</p>
        </div>
        <div class="row"><button class="btn" id="start">Einstufungstest starten</button><span class="muted small">Sonuç bu tarayıcıda saklanır.</span></div>
      </section>
      <section class="sheet">
        <span class="label">Was dich erwartet</span>
        <h2>21 Module in drei Stufen</h2>
        <div class="grid2">
          ${STAGES.map(s => `<div class="prose"><h3>${s === "Fundament" ? "Fundament (A2 → B1)" : s === "B2" ? "Aufbau B2" : "Fachsprache C1"}</h3>
          <ul>${COURSE.filter(m => m.stage === s).map(m => `<li>${esc(m.title)}</li>`).join("")}</ul></div>`).join("")}
        </div>
        <p class="muted small">Açıklamalar Türkçe, örnekler otomotiv mühendisliği ve kişisel finans dünyasından. Her modülde: teori, örnekler, 8 alıştırma, kelime listesi ve yazma görevi.</p>
      </section>`;
      document.getElementById("start").onclick = () => go("test");
      return;
    }
    const r = result(S.test.answers);
    const plan = buildPlan(r);
    const next = plan.main.find(m => !(S.mods[m.id] && S.mods[m.id].done));
    const doneCount = plan.main.filter(m => S.mods[m.id] && S.mods[m.id].done).length;
    const wrong = TEST.map((q, i) => ({ q, i, a: S.test.answers[i] })).filter(x => x.a !== x.q.a);
    const verdict = !r.secure
      ? `A2 seviyesi de henüz oturmamış. Bu kötü bir haber değil: plan <b>Fundament</b> modülleriyle başlıyor ve B2/C1'in üzerine kurulacağı temeli sağlamlaştırıyor.`
      : r.k === 4
        ? `Tüm seviyeler sağlam: <b>C1</b>. Plan, kalan boşluklarını kapatıp C1 yazı/üslup yapılarını cilalamaya odaklanıyor.`
        : `Sağlam seviyen: <b>${r.current}</b>. Hedef: <b>${r.target}</b>. ${r.gaps.size} konuda boşluk bulundu; plan bunlarla başlıyor.`;
    $app.innerHTML = `
      <section class="sheet">
        <span class="label">Einstufung vom ${new Date(S.test.date).toLocaleDateString("de-DE")}</span>
        <h1>Dein Niveau: ${r.secure ? r.current : "unter B1"}</h1>
        ${scaleHTML(r)}
        <div class="prose"><p>${verdict}</p></div>
        <div class="row">
          ${next ? `<button class="btn" id="next">Weiter: ${esc(next.title)}</button>` : `<span>Alle Module im Plan geschafft. Stark!</span>`}
          <button class="btn ghost" id="toplan">Lernplan ansehen</button>
          <span class="muted small">${doneCount}/${plan.main.length} Module geschafft</span>
        </div>
      </section>
      <section class="sheet">
        <span class="label">Deine Lücken</span>
        <h2>${r.gaps.size ? "Hier hakt es" : "Keine Lücken gefunden"}</h2>
        <div class="mods">${[...r.gaps].sort().map(id => modRow(byId[id], r)).join("")}</div>
        ${wrong.length ? `<details><summary>Falsch beantwortete Testfragen (${wrong.length}) mit Erklärung</summary>
          <div class="prose" style="margin-top:12px">${wrong.map(x => `<p><span class="lvl ${x.q.lvl}">${x.q.lvl}</span> ${esc(x.q.q)}<br>
          <span class="muted small">Deine Antwort: ${x.a === -1 ? "weiß ich nicht" : esc(x.q.o[x.a])} · richtig: <b>${esc(x.q.o[x.q.a])}</b></span><br><span class="small">${x.q.ex}</span></p>`).join("")}</div></details>` : ""}
      </section>
      <section class="sheet">
        <span class="label">Wie du mit dem Kurs arbeitest</span>
        <div class="prose">
          <ol>
            <li>Haftada 5 gün, günde 30–45 dakika. Bir modül ≈ 2–3 oturum: 1) teori + örnekleri sesli oku, 2) alıştırmalar, 3) yazma görevi.</li>
            <li>Alıştırmalarda %75 ve üzeri = modül tamam. Altındaysa ertesi gün tekrar et.</li>
            <li>Her gün 10 dakika <b>Wortschatz</b>: kartlar ve der/die/das antrenmanı.</li>
            <li>Yazma görevini her zaman yap. Sınavlarda ve iş hayatında farkı yaratan aktif üretimdir.</li>
            <li>Planı bitirdiğinde veya 6–8 hafta sonra testi tekrar yap.</li>
          </ol>
        </div>
        <div class="row"><button class="btn ghost" id="retest">Test wiederholen</button></div>
      </section>`;
    if (next) document.getElementById("next").onclick = () => go("module", next.id);
    document.getElementById("toplan").onclick = () => go("plan");
    document.getElementById("retest").onclick = () => { testRun = null; go("test"); };
    bindModRows();
  }

  function modRow(m, r) {
    const [st, label] = status(m, r);
    return `<button class="mod ${st === "done" ? "done" : ""}" data-mod="${m.id}">
      <span class="lvl ${m.lvl}">${m.lvl}</span><span class="t">${esc(m.title)}</span><span class="s state-${st}">${label}</span></button>`;
  }
  function bindModRows() {
    $app.querySelectorAll("[data-mod]").forEach(b => b.onclick = () => go("module", b.dataset.mod));
  }

  // ---------- Einstufungstest ----------
  let testRun = null;
  function renderTest() {
    if (!testRun) {
      $app.innerHTML = `
      <section class="sheet">
        <span class="label">Einstufungstest · 40 Fragen · ca. 15 Min.</span>
        <h1>Bereit?</h1>
        <div class="prose">
          <p>Sorular kolaydan zora gidiyor (A2 → C1). Test sırasında doğru cevabı göstermiyoruz; açıklamalar sonunda gelir.</p>
          <p>Klavye: <b>1–4</b> seçenekler, <b>0</b> = „Weiß ich nicht“.</p>
          ${S.test ? `<p class="muted">Yeni test eskisinin yerine geçer. Modül ilerlemen silinmez.</p>` : ""}
        </div>
        <div class="row"><button class="btn" id="go">Los geht's</button></div>
      </section>`;
      document.getElementById("go").onclick = () => { testRun = { i: 0, answers: [], orders: [] }; renderTest(); };
      return;
    }
    const i = testRun.i, q = TEST[i];
    const order = testRun.orders[i] || (testRun.orders[i] = shuffled(q.o.length));
    $app.innerHTML = `
      <section class="sheet">
        <div class="row" style="justify-content:space-between"><span class="qcount">Frage ${i + 1} / ${TEST.length}</span><span class="lvl ${q.lvl}">${q.lvl}</span></div>
        <div class="progress"><i style="width:${i / TEST.length * 100}%"></i></div>
        <p class="question">${esc(q.q)}</p>
        <div class="opts">
          ${order.map((j, p) => `<button class="opt" data-a="${j}"><span class="key">${p + 1}</span><span>${esc(q.o[j])}</span></button>`).join("")}
          <button class="opt" data-a="-1"><span class="key">0</span><span class="muted">Weiß ich nicht</span></button>
        </div>
        ${i > 0 ? `<div><button class="btn ghost" id="back">Zurück</button></div>` : ""}
      </section>`;
    $app.querySelectorAll(".opt").forEach(b => b.onclick = () => answer(+b.dataset.a));
    const back = document.getElementById("back");
    if (back) back.onclick = () => { testRun.i--; renderTest(); };
  }
  function answer(a) {
    testRun.answers[testRun.i] = a;
    testRun.i++;
    if (testRun.i >= TEST.length) {
      S.test = { date: Date.now(), answers: testRun.answers.slice() };
      testRun = null;
      save();
      go("home");
    } else renderTest();
  }
  document.addEventListener("keydown", e => {
    if (view !== "test" || !testRun || e.target.matches("input, textarea")) return;
    const n = "01234".indexOf(e.key);
    if (n === 0) answer(-1);
    else if (n > 0 && n <= TEST[testRun.i].o.length) answer(testRun.orders[testRun.i][n - 1]);
  });

  // ---------- Lernplan ----------
  function renderPlan() {
    if (!S.test) {
      $app.innerHTML = `<section class="sheet"><span class="label">Lernplan</span><h2>Noch kein Plan</h2>
        <p>Plan, test sonucuna göre oluşturulur.</p><div><button class="btn" id="t">Zum Einstufungstest</button></div></section>
        <section class="sheet"><span class="label">Alle Module</span><div class="mods">${COURSE.map(m => modRow(m, null)).join("")}</div></section>`;
      document.getElementById("t").onclick = () => go("test");
      bindModRows();
      return;
    }
    const r = result(S.test.answers);
    const plan = buildPlan(r);
    const weeks = [];
    for (let i = 0; i < plan.main.length; i += MODS_PER_WEEK) weeks.push(plan.main.slice(i, i + MODS_PER_WEEK));
    const targetWeeks = Math.ceil(plan.main.filter(m => stageOf(m) <= r.stageIdx).length / MODS_PER_WEEK);
    $app.innerHTML = `
      <section class="sheet">
        <span class="label">Lernplan · ${r.secure ? r.current : "A2"} → ${r.target}${r.stageIdx < 2 ? " → C1" : ""}</span>
        <h2>${weeks.length} Wochen, ${plan.main.length} Module</h2>
        <p class="muted">Haftada 2 modül. <b>${r.target}</b> hedefine yaklaşık <b>${targetWeeks}. haftada</b> ulaşırsın; sonrası bir sonraki seviyeye hazırlık.</p>
        <div class="plan">${weeks.map((w, i) => `<div class="week"><span class="wk">Woche ${String(i + 1).padStart(2, "0")}</span><div class="mods">${w.map(m => modRow(m, r)).join("")}</div></div>`).join("")}</div>
      </section>
      ${plan.optional.length ? `<section class="sheet"><span class="label">Optional · Wiederholung</span>
        <p class="muted small">Bu konular testte doğruydu. Emin olmadığında göz at.</p>
        <div class="mods">${plan.optional.map(m => modRow(m, r)).join("")}</div></section>` : ""}`;
    bindModRows();
  }

  // ---------- Modul ----------
  let exState = {};
  function renderModule() {
    const m = byId[param];
    const r = S.test ? result(S.test.answers) : null;
    const idx = COURSE.indexOf(m);
    exState = {};
    const [st, label] = status(m, r);
    $app.innerHTML = `
      <section class="sheet">
        <div class="titleblock">
          <div><span class="label">${esc(m.stage === "Fundament" ? "Fundament" : "Stufe " + m.stage)}</span><h2>${esc(m.title)}</h2></div>
          <div><span class="label">Modul</span><span class="v">${m.id.toUpperCase()}</span></div>
          <div><span class="label">Niveau</span><span class="v">${m.lvl}</span></div>
          <div><span class="label">Status</span><span class="v state-${st}" style="font-size:1rem">${label}</span></div>
        </div>
        <p><b>Ziel:</b> ${esc(m.goal)}</p>
        <div class="prose">${m.theory}</div>
      </section>
      <section class="sheet">
        <span class="label">Beispiele</span>
        <div class="examples">${m.examples.map(([de, tr]) => `<div><div class="ex-de">${esc(de)}</div><div class="ex-tr">${esc(tr)}</div></div>`).join("")}</div>
      </section>
      <section class="sheet">
        <div class="row" style="justify-content:space-between"><span class="label">Übungen · ${m.ex.length}</span><span class="label" id="score"></span></div>
        <div id="exlist">${m.ex.map((x, i) => exHTML(x, i)).join("")}</div>
        <div id="exdone"></div>
      </section>
      <section class="sheet">
        <span class="label">Wortschatz</span>
        <div class="vocab">${m.vocab.map(([de, tr]) => `<div><span class="de">${deWord(de)}</span><span class="tr">${esc(tr)}</span></div>`).join("")}</div>
      </section>
      <section class="sheet">
        <span class="label">Schreibwerkstatt</span>
        <p>${esc(m.write.task)}</p>
        <p class="muted small">Redemittel: ${m.write.hints.map(h => `<i>${esc(h)}</i>`).join(" · ")}</p>
        <textarea id="draft" placeholder="Schreib hier auf Deutsch …"></textarea>
        <div class="row"><button class="btn" id="check" hidden>Text korrigieren lassen</button><button class="btn ghost" id="stop" hidden>Stopp</button><span class="muted small" id="aihint"></span></div>
        <div class="ai-out" id="aiout" hidden></div>
      </section>
      <div class="row" style="justify-content:space-between">
        ${idx > 0 ? `<button class="btn ghost" data-mod="${COURSE[idx - 1].id}">← ${esc(COURSE[idx - 1].id.toUpperCase())}</button>` : "<span></span>"}
        ${idx < COURSE.length - 1 ? `<button class="btn ghost" data-mod="${COURSE[idx + 1].id}">${esc(COURSE[idx + 1].id.toUpperCase())} →</button>` : ""}
      </div>`;
    bindModRows();
    bindExercises(m);
    bindWriting(m);
  }

  function exHTML(x, i) {
    if (x.t === "mc") {
      return `<div class="exercise" data-i="${i}"><p><span class="qcount">${i + 1}.</span> ${esc(x.q)}</p>
        <div class="opts">${shuffled(x.o.length).map((j, p) => `<button class="opt" data-j="${j}"><span class="key">${KEYS[p]}</span><span>${esc(x.o[j])}</span></button>`).join("")}</div>
        <div class="fb"></div></div>`;
    }
    return `<div class="exercise" data-i="${i}"><p><span class="qcount">${i + 1}.</span> ${esc(x.q)}</p>
      <form class="gaprow"><input id="gap-${i}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Antwort"><button class="btn ghost">Prüfen</button></form>
      <div class="fb"></div></div>`;
  }

  function bindExercises(m) {
    $app.querySelectorAll(".exercise").forEach(el => {
      const i = +el.dataset.i, x = m.ex[i], fb = el.querySelector(".fb");
      const done = ok => {
        exState[i] = ok;
        fb.innerHTML = `<div class="feedback ${ok ? "ok" : "no"}">${ok ? "Richtig. " : "Leider falsch. Richtig: <b>" + esc(x.t === "mc" ? x.o[x.a] : x.a[0]) + "</b>. "}${x.ex}</div>`;
        updateScore(m);
      };
      if (x.t === "mc") {
        el.querySelectorAll(".opt").forEach(b => b.onclick = () => {
          if (i in exState) return;
          const j = +b.dataset.j;
          el.querySelectorAll(".opt").forEach(o => { o.disabled = true; });
          el.querySelector(`[data-j="${x.a}"]`).classList.add("right");
          if (j !== x.a) b.classList.add("wrong");
          done(j === x.a);
        });
      } else {
        el.querySelector("form").onsubmit = e => {
          e.preventDefault();
          if (i in exState) return;
          const inp = el.querySelector("input");
          if (!inp.value.trim()) return;
          inp.readOnly = true;
          done(x.a.some(a => norm(a) === norm(inp.value)));
        };
      }
    });
  }

  function updateScore(m) {
    const n = Object.keys(exState).length, c = Object.values(exState).filter(Boolean).length;
    document.getElementById("score").textContent = `${c} / ${n} richtig`;
    if (n < m.ex.length) return;
    const score = c / n;
    const prev = S.mods[m.id] || {};
    S.mods[m.id] = { best: Math.max(prev.best || 0, score), done: !!prev.done || score >= MODULE_DONE };
    save();
    const r = S.test ? result(S.test.answers) : null;
    const next = r ? buildPlan(r).main.find(x => x.id !== m.id && !(S.mods[x.id] && S.mods[x.id].done)) : null;
    const box = document.getElementById("exdone");
    box.innerHTML = `<div class="feedback ${score >= MODULE_DONE ? "ok" : "no"}">
      ${score >= MODULE_DONE ? `<b>${pct(score)}: Modul geschafft.</b> Yazma görevini de yap, sonra devam et.` : `<b>${pct(score)}</b>: %75'in altında. Teoriyi tekrar oku ve yarın alıştırmaları yeniden çöz.`}
      </div><div class="row" style="margin-top:10px"><button class="btn ghost" id="redo">Übungen wiederholen</button>${next ? `<button class="btn" data-mod="${next.id}">Nächstes Modul: ${esc(next.title)}</button>` : ""}</div>`;
    document.getElementById("redo").onclick = () => renderModule();
    bindModRows();
  }

  // ---------- Schreibwerkstatt mit Claude ----------
  let sample = null, ctl = null;
  function bindWriting(m) {
    const ta = document.getElementById("draft");
    if (!ta.value) ta.value = S.drafts[m.id] || "";
    let t;
    ta.oninput = () => { clearTimeout(t); t = setTimeout(() => { S.drafts[m.id] = ta.value; save(); }, 600); };
    const btn = document.getElementById("check"), stop = document.getElementById("stop"),
      out = document.getElementById("aiout"), hint = document.getElementById("aihint");
    if (!sample) { hint.textContent = "Düzeltme için metni Claude sohbetine yapıştırabilirsin."; return; }
    btn.hidden = false;
    hint.textContent = "Claude düzeltir ve açıklar (Claude hesabının kullanımından düşer).";
    stop.onclick = () => ctl && ctl.abort();
    btn.onclick = async () => {
      const text = ta.value.trim();
      if (text.length < 20) { hint.textContent = "Önce birkaç cümle yaz."; return; }
      S.drafts[m.id] = ta.value; save();
      btn.disabled = true; stop.hidden = false; out.hidden = false; out.textContent = "Thinking …";
      ctl = new AbortController();
      const prompt = `Du bist ein erfahrener DaF-Lehrer (Deutsch als Fremdsprache) für einen türkischen Maschinenbauingenieur in der Automobilindustrie.
Modul: ${m.title} (Niveau ${m.lvl}). Lernziel: ${m.goal}
Aufgabe: ${m.write.task}

Text des Lernenden:
"""
${text}
"""

Antworte auf TÜRKISCH (deutsche Beispiele bleiben deutsch), als reiner Text ohne Markdown-Tabellen, in genau diesen Abschnitten:
1) KORRIGIERTER TEXT: der vollständige Text, korrigiert, möglichst nah am Original.
2) FEHLER: jede Korrektur als „falsch → richtig: kurze Regel“ (max. 10, wichtigste zuerst). Markiere Fehler zum Modulthema mit [MODUL].
3) NIVEAU: geschätztes Niveau des Textes (A2/B1/B2/C1) mit einem Satz Begründung.
4) UPGRADE: 2 Formulierungen, die den Text eine Stufe höher klingen lassen.
Sei knapp und konkret.`;
      try {
        await sample(prompt, { signal: ctl.signal, cache: false, onText: ({ text }) => { out.textContent = text; } });
      } catch (e) {
        out.textContent = e.text || "";
        const msg = { not_granted: "Erişim izni verilmedi.", rate_limited: "Çok fazla istek – biraz sonra tekrar dene.", cancelled: "Durduruldu." }[e.code] || "Şu an düzeltme yapılamadı.";
        hint.textContent = msg;
        if (e.code === "not_granted") { btn.hidden = true; }
      } finally { btn.disabled = false; stop.hidden = true; }
    };
  }

  // ---------- Wortschatz: Karteikarten & Artikel ----------
  let vmode = "cards", vscope = "plan", current = null, artCurrent = null, artStats = { c: 0, n: 0 };
  function vocabPool() {
    let mods = COURSE;
    if (vscope === "plan" && S.test) {
      const r = result(S.test.answers);
      const touched = new Set(Object.keys(S.mods));
      mods = buildPlan(r).main.filter((m, i) => i < 4 || touched.has(m.id) || r.gaps.has(m.id));
    }
    const out = [];
    mods.forEach(m => m.vocab.forEach(([de, tr]) => out.push({ de, tr, m: m.id })));
    return out;
  }
  function pickCard(pool) {
    const weight = c => 1 / Math.pow(2, ((S.cards[c.de] && S.cards[c.de].box) || 1) - 1);
    const cand = pool.filter(c => !current || c.de !== current.de);
    const total = cand.reduce((s, c) => s + weight(c), 0);
    let x = Math.random() * total;
    for (const c of cand) { x -= weight(c); if (x <= 0) return c; }
    return cand[0];
  }
  function renderVocab() {
    const pool = vocabPool();
    const nouns = pool.filter(c => /^(der|die|das)\s/.test(c.de));
    const counts = [0, 0, 0, 0, 0];
    pool.forEach(c => counts[((S.cards[c.de] && S.cards[c.de].box) || 1) - 1]++);
    $app.innerHTML = `
      <section class="sheet">
        <div class="row" style="justify-content:space-between">
          <div class="row"><button class="btn ${vmode === "cards" ? "" : "ghost"}" data-vm="cards">Karteikarten</button><button class="btn ${vmode === "art" ? "" : "ghost"}" data-vm="art">der / die / das</button></div>
          <label class="small muted"><input type="checkbox" id="scope" ${vscope === "all" ? "checked" : ""}> alle ${COURSE.length} Module</label>
        </div>
        <div id="vbody"></div>
      </section>
      <section class="sheet">
        <span class="label">Lernkartei · ${pool.length} Wörter</span>
        <div class="boxes">${counts.map((n, i) => `<div><span class="label">Fach ${i + 1}</span><b>${n}</b></div>`).join("")}</div>
        <p class="muted small">Leitner sistemi: bildiğin kelime bir sonraki kutuya geçer ve daha seyrek gelir; bilemediğin 1. kutuya döner. ${vscope === "plan" ? "Kapsam: planındaki ilk modüller, boşlukların ve başladığın modüller." : ""}</p>
      </section>`;
    $app.querySelectorAll("[data-vm]").forEach(b => b.onclick = () => { vmode = b.dataset.vm; current = artCurrent = null; renderVocab(); });
    document.getElementById("scope").onchange = e => { vscope = e.target.checked ? "all" : "plan"; current = artCurrent = null; renderVocab(); };
    const body = document.getElementById("vbody");
    if (vmode === "cards") cardsUI(body, pool); else artUI(body, nouns);
  }
  function cardsUI(body, pool) {
    if (!pool.length) { body.innerHTML = `<p>Noch keine Wörter.</p>`; return; }
    current = current || pickCard(pool);
    let shown = false;
    const draw = () => {
      body.innerHTML = `
        <button class="card" id="card"><span class="label">${current.m.toUpperCase()} · Fach ${(S.cards[current.de] && S.cards[current.de].box) || 1}</span>
          <span class="big">${deWord(current.de)}</span>
          ${shown ? `<span>${esc(current.tr)}</span>` : `<span class="muted small">Tippen zum Aufdecken</span>`}</button>
        <div class="row" ${shown ? "" : "hidden"}><button class="btn ghost" id="no">Nochmal</button><button class="btn" id="yes">Wusste ich</button></div>`;
      document.getElementById("card").onclick = () => { shown = true; draw(); };
      if (shown) {
        const grade = ok => {
          const box = (S.cards[current.de] && S.cards[current.de].box) || 1;
          S.cards[current.de] = { box: ok ? Math.min(5, box + 1) : 1 };
          save();
          current = pickCard(pool);
          renderVocab();
        };
        document.getElementById("yes").onclick = () => grade(true);
        document.getElementById("no").onclick = () => grade(false);
      }
    };
    draw();
  }
  function artUI(body, nouns) {
    if (!nouns.length) { body.innerHTML = `<p>Keine Nomen im Pool.</p>`; return; }
    if (!artCurrent) artCurrent = nouns[Math.floor(Math.random() * nouns.length)];
    const [art, ...rest] = artCurrent.de.split(" ");
    const word = rest.join(" ");
    body.innerHTML = `
      <div class="card" style="cursor:default"><span class="label">Welcher Artikel? · ${artStats.c}/${artStats.n} richtig</span>
        <span class="big">${esc(word)}</span><span class="muted">${esc(artCurrent.tr)}</span></div>
      <div class="artbtns">${["der", "die", "das"].map(a => `<button class="btn ghost art-${a}" data-art="${a}">${a}</button>`).join("")}</div>
      <div id="artfb"></div>`;
    body.querySelectorAll("[data-art]").forEach(b => b.onclick = () => {
      const ok = b.dataset.art === art;
      artStats.n++; if (ok) artStats.c++;
      body.querySelectorAll("[data-art]").forEach(x => x.disabled = true);
      document.getElementById("artfb").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}">${ok ? "Richtig" : "Falsch"}: <b class="art-${art}">${art}</b> ${esc(word)} ${genderHint(word, art)}</div>
        <div class="row" style="margin-top:10px"><button class="btn" id="artnext">Nächstes Wort</button></div>`;
      document.getElementById("artnext").onclick = () => { artCurrent = null; renderVocab(); };
    });
  }
  // Faustregeln für das Genus: helfen beim Merken, ohne Anspruch auf Vollständigkeit
  function genderHint(word, art) {
    const w = word.split(/[\s(]/)[0];
    const rules = [
      [/(ung|heit|keit|schaft|ion|tät|ik|ur|enz|anz|ie)$/i, "die", "-ung, -heit, -keit, -schaft, -ion, -tät, -ik, -enz → hep <b>die</b>"],
      [/(chen|lein|ment|um|ma)$/i, "das", "-chen, -lein, -ment, -um → <b>das</b>"],
      [/^Ge.*e?$/, "das", "Ge- ile başlayan topluluk isimleri çoğu zaman <b>das</b> (das Getriebe, das Gehalt)"],
      [/(er|ling|ismus|or|ant|ent|ist)$/i, "der", "-ling, -ismus, -or, -ant, -ent, -ist ve fiilden yapılan -er → çoğu zaman <b>der</b>"],
      [/e$/, "die", "-e ile biten isimlerin ~%90'ı <b>die</b>"]
    ];
    for (const [re, a, txt] of rules) if (re.test(w)) return `<br><span class="small">${a === art ? "Regel" : "Ausnahme zur Regel"}: ${txt}</span>`;
    return "";
  }

  // ---------- Start ----------
  route();
  (async () => {
    if (!window.claude || !window.claude.use) return;
    try {
      const [d, s] = await Promise.all([window.claude.use("db"), window.claude.use("sample")]);
      sample = s;
      if (sample && view === "module") bindWriting(byId[param]);
      if (!d) return;
      db = d;
      const snap = await db.doc("progress/main").get();
      if (snap.exists) {
        const remote = snap.data();
        if ((remote.updatedAt || 0) > (S.updatedAt || 0)) {
          delete remote.summary;
          S = Object.assign(blank(), remote);
          try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) {}
          if (!(view === "test" && testRun)) render();
        }
      } else if (S.updatedAt) save();
    } catch (e) { dbOff = true; }
  })();
})();
