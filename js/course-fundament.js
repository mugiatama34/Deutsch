// Fundament (A2 → B1): die Grundlagen, auf denen B2/C1 aufbaut.
// Format eines Moduls:
//   theory: HTML (Türkisch erklärt), examples: [Deutsch, Türkisch]
//   ex: Übungen — {t:"mc", q, o, a, ex} oder {t:"gap", q, a:[akzeptierte Antworten], ex}
//   vocab: [Wort mit Artikel, Bedeutung], write: Schreibaufgabe
window.COURSE = (window.COURSE || []).concat([
{
  id: "m01", lvl: "B1", stage: "Fundament", title: "Satzbau: Wo steht das Verb?",
  goal: "Ana cümle, yan cümle ve soru cümlesinde fiilin yerini otomatik doğru koymak.",
  theory: `
<p>Almancada kelime sırası serbest <em>görünür</em> ama fiilin yeri kesindir. Türkçede fiil hep sondadır; Almancada üç kalıp vardır:</p>
<table><thead><tr><th>Kalıp</th><th>Pozisyon 1</th><th>Pozisyon 2 (çekimli fiil)</th><th>Orta alan</th><th>Son (Satzklammer)</th></tr></thead><tbody>
<tr><td>Ana cümle</td><td>Ich</td><td><b>muss</b></td><td>heute den Bericht</td><td><b>schreiben</b>.</td></tr>
<tr><td>Inversion</td><td>Heute</td><td><b>muss</b></td><td>ich den Bericht</td><td><b>schreiben</b>.</td></tr>
<tr><td>Perfekt</td><td>Wir</td><td><b>haben</b></td><td>den Motor gestern</td><td><b>getestet</b>.</td></tr>
<tr><td>Ayrılabilen fiil</td><td>Der Zug</td><td><b>fährt</b></td><td>um 7 Uhr</td><td><b>ab</b>.</td></tr>
</tbody></table>
<p><b>Kural 1 – V2:</b> Ana cümlede çekimli fiil <b>2. pozisyondadır</b>. 1. pozisyona ne koyarsanız koyun (zaman, yer, nesne, hatta bütün bir yan cümle), özne fiilin <em>arkasına</em> geçer.</p>
<p><b>Kural 2 – Satzklammer (cümle parantezi):</b> İkinci fiil parçası (mastar, Partizip II, ayrılabilen ön ek) en <b>sona</b> gider. Bilgi bu parantezin içine yerleşir.</p>
<p><b>Kural 3 – Yan cümle:</b> weil, dass, ob, wenn … ile başlayan cümlede çekimli fiil <b>en sona</b> gider: <i>…, weil ich den Bericht schreiben <b>muss</b>.</i></p>
<p><b>Kural 4 – Yan cümle önde:</b> Yan cümle 1. pozisyonu doldurur → ana cümle <b>fiille</b> başlar: <i>Weil ich krank bin, <b>komme</b> ich nicht.</i></p>
<p class="tip">Orta alanda pratik sıra: <b>TeKaMoLo</b> – Temporal (wann) → Kausal (warum) → Modal (wie) → Lokal (wo). <i>Ich fahre <u>morgen</u> <u>wegen des Termins</u> <u>mit dem Auto</u> <u>nach Stuttgart</u>.</i></p>`,
  examples: [
    ["Nächste Woche beginnt die Serienproduktion.", "Gelecek hafta seri üretim başlıyor."],
    ["Wegen der Lieferprobleme konnten wir das Fahrzeug nicht rechtzeitig fertigstellen.", "Tedarik sorunları yüzünden aracı zamanında bitiremedik."],
    ["Ich glaube, dass die Zinsen nächstes Jahr sinken werden.", "Faizlerin gelecek yıl düşeceğini düşünüyorum."],
    ["Wenn die Prüfung bestanden ist, geben wir das Bauteil frei.", "Test geçilirse parçayı onaylarız."]
  ],
  ex: [
    { t: "mc", q: "Welcher Satz ist korrekt?", o: ["Gestern ich habe mit dem Lieferanten telefoniert.", "Gestern habe ich mit dem Lieferanten telefoniert.", "Gestern habe ich telefoniert mit dem Lieferanten.", "Ich habe gestern telefoniert mit dem Lieferanten."], a: 1, ex: "V2 + Partizip II sonda." },
    { t: "mc", q: "Welcher Satz ist korrekt?", o: ["Ich weiß, dass er hat recht.", "Ich weiß, dass hat er recht.", "Ich weiß, dass er recht hat.", "Ich weiß, er recht hat."], a: 2, ex: "dass → çekimli fiil sonda." },
    { t: "mc", q: "Weil der Prüfstand defekt war, ___", o: ["wir mussten den Test verschieben.", "mussten wir den Test verschieben.", "wir den Test verschieben mussten.", "den Test wir mussten verschieben."], a: 1, ex: "Yan cümle 1. pozisyon → ana cümle fiille başlar." },
    { t: "gap", q: "Die Konferenz fängt um 9 Uhr ___. (anfangen)", a: ["an"], ex: "Ayrılabilen ön ek sona gider: fängt … an." },
    { t: "gap", q: "Ich kann morgen leider nicht ___. (kommen, Infinitiv)", a: ["kommen"], ex: "Modal fiil 2. pozisyonda, mastar sonda." },
    { t: "mc", q: "Welche Reihenfolge ist am natürlichsten?", o: ["Ich fahre nach Wolfsburg morgen mit dem Zug.", "Ich fahre morgen mit dem Zug nach Wolfsburg.", "Ich fahre mit dem Zug nach Wolfsburg morgen.", "Morgen ich fahre mit dem Zug nach Wolfsburg."], a: 1, ex: "TeKaMoLo: morgen (Te) – mit dem Zug (Mo) – nach Wolfsburg (Lo)." },
    { t: "mc", q: "Er hat gesagt, dass er den Bericht morgen ___", o: ["schicken wird.", "wird schicken.", "schicken werden.", "wird zu schicken."], a: 0, ex: "Yan cümlede çekimli fiil (wird) en sonda, mastar ondan önce." },
    { t: "gap", q: "Hast du die Datei schon ___? (speichern, Partizip II)", a: ["gespeichert"], ex: "Soru cümlesinde de Satzklammer: Hast … gespeichert?" }
  ],
  vocab: [["die Serienproduktion", "seri üretim"], ["der Lieferant", "tedarikçi"], ["der Prüfstand", "test standı"], ["das Bauteil", "parça, bileşen"], ["die Freigabe", "onay, serbest bırakma"], ["der Zins", "faiz"], ["verschieben", "ertelemek"], ["fertigstellen", "tamamlamak"]],
  write: { task: "İş gününüzü 5–6 cümleyle anlatın. En az iki cümleye zaman ifadesiyle başlayın (Morgens, Nach der Besprechung …) ve bir 'weil' cümlesi kullanın.", hints: ["Morgens prüfe ich zuerst …", "Nach der Besprechung …", "…, weil …"] }
},
{
  id: "m02", lvl: "B1", stage: "Fundament", title: "Kasus: Nominativ, Akkusativ, Dativ",
  goal: "Kim/ne, kimi/neyi, kime sorularını hızla artikel değişimine çevirmek.",
  theory: `
<p>Türkçede hal ekleri ismin sonuna gelir (-i, -e, -in). Almancada hal bilgisi çoğunlukla <b>artikelde</b> taşınır. Bu yüzden artikel = ek gibi düşünün.</p>
<div class="scroll"><table class="cases"><thead><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr></thead><tbody>
<tr><th class="k-nom">Nom. (wer/was?)</th><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die / –</td></tr>
<tr><th class="k-akk">Akk. (wen/was? = -i)</th><td><b>den / einen</b></td><td>die / eine</td><td>das / ein</td><td>die / –</td></tr>
<tr><th class="k-dat">Dat. (wem? = -e)</th><td><b>dem / einem</b></td><td><b>der / einer</b></td><td><b>dem / einem</b></td><td><b>den</b> / – + <b>-n</b></td></tr>
<tr><th class="k-gen">Gen. (wessen? = -in)</th><td>des / eines + -s</td><td>der / einer</td><td>des / eines + -s</td><td>der / –</td></tr>
</tbody></table></div>
<p><b>Akkusativ'te sadece maskulin değişir</b> (der → den). Bu, kontrol listenizin ilk maddesi olsun.</p>
<p><b>Dativ çoğulda isim -n alır:</b> mit den Kunde<b>n</b>, in den Werke<b>n</b> (zaten -n/-s ile bitmiyorsa).</p>
<p><b>Dativ isteyen sık fiiller</b> (Türkçe karşılığı -i olsa bile!): helfen, danken, gratulieren, gehören, gefallen, passen, fehlen, folgen, antworten, glauben (jdm), vertrauen.</p>
<p><b>Akk + Dat birlikte:</b> geben, schicken, zeigen, erklären, empfehlen → <i>Ich schicke <span class="k-dat">dem Kunden</span> <span class="k-akk">das Angebot</span>.</i> Kural: kişi Dativ, şey Akkusativ. İkisi de zamir ise Akk önce: <i>Ich schicke <b>es ihm</b>.</i></p>`,
  examples: [
    ["Der Kunde hat den Vertrag unterschrieben.", "Müşteri sözleşmeyi imzaladı."],
    ["Ich erkläre dem neuen Kollegen den Prozess.", "Yeni meslektaşa süreci açıklıyorum."],
    ["Das Angebot gefällt meiner Chefin nicht.", "Teklif şefimin hoşuna gitmiyor."],
    ["Wir danken den Mitarbeitern für ihren Einsatz.", "Çalışanlara emekleri için teşekkür ediyoruz."]
  ],
  ex: [
    { t: "gap", q: "Ich brauche ___ neuen Laptop. (ein)", a: ["einen"], ex: "brauchen + Akk, der Laptop → einen." },
    { t: "gap", q: "Kannst du ___ Kollegin helfen? (die)", a: ["der"], ex: "helfen + Dativ, feminin → der." },
    { t: "gap", q: "Das Auto gehört ___ Firma. (die)", a: ["der"], ex: "gehören + Dativ." },
    { t: "mc", q: "Ich habe ___ Kollegin eine E-Mail geschrieben.", o: ["die", "der", "den", "dem"], a: 1, ex: "jdm (Dat) etw (Akk) schreiben. die Kollegin → der Kollegin." },
    { t: "mc", q: "Wir sprechen mit den ___.", o: ["Kunde", "Kunden", "Kundes", "Kundin"], a: 1, ex: "mit + Dativ Plural → den Kunden." },
    { t: "mc", q: "Ich zeige ___ (der Chef / die Präsentation).", o: ["dem Chef die Präsentation", "den Chef der Präsentation", "der Chef die Präsentation", "die Präsentation den Chef"], a: 0, ex: "Kişi Dativ (dem Chef), şey Akkusativ." },
    { t: "gap", q: "Hast du ___ Bericht gelesen? (der)", a: ["den"], ex: "lesen + Akk, maskulin → den." },
    { t: "mc", q: "Ich schicke ___ morgen. (das Dokument / ihm)", o: ["es ihm", "ihm es", "ihn es", "es ihn"], a: 0, ex: "İki zamir: Akkusativ önce → es ihm." }
  ],
  vocab: [["der Vertrag", "sözleşme"], ["das Angebot", "teklif"], ["die Rechnung", "fatura"], ["der Mitarbeiter", "çalışan"], ["der Einsatz", "emek, kullanım"], ["die Abteilung", "departman"], ["vertrauen (+D)", "güvenmek"], ["gehören (+D)", "ait olmak"]],
  write: { task: "Bir müşteriye kısa e-posta: teklifi gönderdiğinizi, ürünü açıkladığınızı ve yardım için teşekkür ettiğinizi yazın (schicken, erklären, danken, helfen kullanın).", hints: ["Sehr geehrte Frau …,", "anbei schicke ich Ihnen …", "Vielen Dank für …"] }
},
{
  id: "m03", lvl: "B1", stage: "Fundament", title: "Präpositionen & Wechselpräpositionen",
  goal: "Edatın hangi hali istediğini bilmek; wo?/wohin? ayrımını yapmak.",
  theory: `
<table><thead><tr><th>Hal</th><th>Edatlar</th><th>Hafıza</th></tr></thead><tbody>
<tr><td class="k-akk">Hep Akkusativ</td><td>durch, für, gegen, ohne, um, (bis, entlang)</td><td>„DOGFU“</td></tr>
<tr><td class="k-dat">Hep Dativ</td><td>aus, bei, mit, nach, seit, von, zu, gegenüber, ab</td><td>„aus-bei-mit-nach-seit-von-zu“ şarkısı</td></tr>
<tr><td>Wechsel (Akk/Dat)</td><td>an, auf, hinter, in, neben, über, unter, vor, zwischen</td><td>9 tane, konum edatları</td></tr>
<tr><td class="k-gen">Genitiv</td><td>wegen, trotz, während, aufgrund, innerhalb, außerhalb, statt</td><td>bkz. modül m13</td></tr>
</tbody></table>
<p><b>Wechselpräpositionen:</b> <b>Wohin?</b> (hareket, yön değişimi) → Akkusativ. <b>Wo?</b> (konum, aynı alanda) → Dativ.</p>
<p>Fiil çiftleri birlikte ezberlenir:</p>
<ul><li><b>legen</b> (yatırmak, Akk) ↔ <b>liegen</b> (yatıyor olmak, Dat)</li>
<li><b>stellen</b> (dikmek, Akk) ↔ <b>stehen</b> (duruyor olmak, Dat)</li>
<li><b>hängen</b> (asmak, Akk) ↔ <b>hängen</b> (asılı olmak, Dat)</li>
<li><b>setzen</b> (oturtmak) ↔ <b>sitzen</b> (oturuyor olmak)</li></ul>
<p class="tip">Zaman ifadeleri: <i>am Montag, im Mai, um 8 Uhr, in der Nacht, vor einem Jahr (=bir yıl önce, Dativ!), seit drei Jahren (=üç yıldır).</i></p>
<p>Kaynaşmalar: in dem → <b>im</b>, in das → <b>ins</b>, an dem → <b>am</b>, zu dem → <b>zum</b>, zu der → <b>zur</b>, bei dem → <b>beim</b>, von dem → <b>vom</b>.</p>`,
  examples: [
    ["Ich arbeite seit fünf Jahren bei einem Automobilhersteller.", "Beş yıldır bir otomobil üreticisinde çalışıyorum."],
    ["Stell die Kiste bitte neben die Maschine!", "Kutuyu lütfen makinenin yanına koy!"],
    ["Die Kiste steht neben der Maschine.", "Kutu makinenin yanında duruyor."],
    ["Ohne einen Plan investiere ich kein Geld.", "Bir plan olmadan para yatırmam."]
  ],
  ex: [
    { t: "gap", q: "Ich fahre jeden Tag mit ___ Auto zur Arbeit. (das)", a: ["dem"], ex: "mit + Dativ." },
    { t: "gap", q: "Das ist ein Geschenk für ___ Chef. (mein)", a: ["meinen"], ex: "für + Akkusativ, maskulin." },
    { t: "mc", q: "Ich hänge das Poster an ___ Wand.", o: ["die", "der", "den", "dem"], a: 0, ex: "hängen (Akk, yön) → an die Wand." },
    { t: "mc", q: "Das Poster hängt an ___ Wand.", o: ["die", "der", "den", "dem"], a: 1, ex: "Konum → Dativ, feminin: der Wand." },
    { t: "gap", q: "Wir treffen uns ___ Bahnhof. (bei + dem)", a: ["beim"], ex: "bei dem = beim." },
    { t: "mc", q: "Ich arbeite hier ___ 2019.", o: ["seit", "vor", "für", "ab"], a: 0, ex: "Hâlâ süren durum → seit (-den beri)." },
    { t: "mc", q: "Er geht ___ Kantine. (in)", o: ["in die", "in der", "im", "ins"], a: 0, ex: "Wohin? → in die Kantine." },
    { t: "gap", q: "Der Bericht liegt schon auf ___ Schreibtisch. (dein)", a: ["deinem"], ex: "liegen → Wo? → Dativ maskulin." }
  ],
  vocab: [["der Automobilhersteller", "otomobil üreticisi"], ["die Kantine", "yemekhane"], ["das Werk", "fabrika, tesis"], ["die Halle", "hol, üretim holü"], ["der Standort", "lokasyon"], ["die Kiste", "kasa, kutu"], ["legen / liegen", "koymak / durmak (yatay)"], ["stellen / stehen", "koymak / durmak (dikey)"]],
  write: { task: "Çalışma yerinizi (ofis veya üretim holü) 5 cümleyle tarif edin. En az 4 farklı Wechselpräposition kullanın.", hints: ["Neben dem Eingang steht …", "Über der Linie hängt …", "Ich lege meine Unterlagen auf …"] }
},
{
  id: "m04", lvl: "B1", stage: "Fundament", title: "Adjektivdeklination ohne Angst",
  goal: "Sıfat çekimini tablo ezberlemeden, tek bir mantıkla çözmek.",
  theory: `
<p>Tek soru sorun: <b>Artikel, cinsiyet + hal bilgisini zaten gösteriyor mu?</b></p>
<ol><li><b>Evet</b> (der, die, das, dem, den, des … veya ein'in açık sonları) → sıfat zayıf: <b>-e</b> veya <b>-en</b>.</li>
<li><b>Hayır</b> (artikel yok veya <i>ein</i> çıplak kalıyor) → sıfat sinyali kendisi verir: <b>-er, -es, -em, -en, -e</b> (der/das/dem… sonları).</li></ol>
<p><b>Belirli artikelden sonra</b> (der/die/das): Nominativ tekil + Akk feminin/neutral → <b>-e</b>. Geri kalan her şey → <b>-en</b>.</p>
<div class="scroll"><table class="cases"><thead><tr><th></th><th>mask.</th><th>fem.</th><th>neutr.</th><th>Pl.</th></tr></thead><tbody>
<tr><th class="k-nom">Nom</th><td>der neu<b>e</b> Motor</td><td>die neu<b>e</b> Anlage</td><td>das neu<b>e</b> Werk</td><td>die neu<b>en</b> Teile</td></tr>
<tr><th class="k-akk">Akk</th><td>den neu<b>en</b> Motor</td><td>die neu<b>e</b> Anlage</td><td>das neu<b>e</b> Werk</td><td>die neu<b>en</b> Teile</td></tr>
<tr><th class="k-dat">Dat</th><td>dem neu<b>en</b></td><td>der neu<b>en</b></td><td>dem neu<b>en</b></td><td>den neu<b>en</b></td></tr>
</tbody></table></div>
<p><b>ein-Artikelden sonra:</b> sadece 3 boşluk farklı: <i>ein neu<b>er</b> Motor</i> (Nom m), <i>ein neu<b>es</b> Werk</i> (Nom/Akk n). Diğerleri belirli artikel gibi.</p>
<p><b>Artikel yoksa:</b> sıfat artikelin sonunu alır: <i>mit hoh<b>em</b> Druck, bei gut<b>em</b> Wetter, frisch<b>es</b> Kapital, steigend<b>e</b> Zinsen</i>. (İstisna: Genitiv m/n → -en: <i>trotz stark<b>en</b> Wettbewerbs</i>.)</p>`,
  examples: [
    ["Wir suchen einen erfahrenen Ingenieur mit gutem Englisch.", "İyi İngilizcesi olan deneyimli bir mühendis arıyoruz."],
    ["Die neue Anlage spart viel Energie.", "Yeni tesis çok enerji tasarrufu sağlıyor."],
    ["Bei steigenden Zinsen werden Anleihen attraktiver.", "Yükselen faizlerde tahviller daha cazip hale gelir."],
    ["Das ist ein kostengünstiges, aber zuverlässiges Modell.", "Bu, ucuz ama güvenilir bir model."]
  ],
  ex: [
    { t: "gap", q: "Der neu___ Kollege kommt aus Polen.", a: ["e"], ex: "der → bilgi var, Nom → -e." },
    { t: "gap", q: "Ich kaufe einen gebraucht___ Wagen.", a: ["en"], ex: "einen → bilgi var → -en." },
    { t: "gap", q: "Das ist ein teur___ Projekt.", a: ["es"], ex: "ein (nötr, Nom) → sinyal yok → -es. (teuer → teures)" },
    { t: "gap", q: "Mit freundlich___ Grüßen", a: ["en"], ex: "Artikelsiz Dativ çoğul → den → -en." },
    { t: "mc", q: "Wir arbeiten mit ___ Technik.", o: ["moderner", "modernen", "moderne", "modernes"], a: 0, ex: "Artikelsiz Dativ feminin → der → -er." },
    { t: "mc", q: "Die Firma hat ___ Ergebnisse veröffentlicht.", o: ["gute", "guten", "guter", "gutes"], a: 0, ex: "Artikelsiz Akk çoğul → die → -e." },
    { t: "mc", q: "Ich spreche mit der ___ Leiterin.", o: ["neue", "neuen", "neuer", "neues"], a: 1, ex: "der (Dat) → -en." },
    { t: "gap", q: "Er trinkt jeden Morgen schwarz___ Kaffee.", a: ["en"], ex: "Artikelsiz Akk maskulin → den → -en." }
  ],
  vocab: [["erfahren", "deneyimli"], ["zuverlässig", "güvenilir"], ["kostengünstig", "maliyeti uygun"], ["gebraucht", "ikinci el"], ["die Anlage", "tesis / yatırım"], ["die Anleihe", "tahvil"], ["nachhaltig", "sürdürülebilir"], ["leistungsstark", "güçlü, performanslı"]],
  write: { task: "Kendi arabanızı veya ideal bir elektrikli aracı 5 cümlede tanıtın; her cümlede en az bir sıfat kullanın.", hints: ["Ich fahre einen … Wagen mit …", "Das Auto hat einen … Motor und …", "Besonders gefällt mir das … Design."] }
},
{
  id: "m05", lvl: "B1", stage: "Fundament", title: "Vergangenheit: Perfekt & Präteritum",
  goal: "Konuşmada Perfekt, yazıda Präteritum; haben/sein seçimini otomatikleştirmek.",
  theory: `
<p><b>Ne zaman hangisi?</b> Konuşma ve e-posta → <b>Perfekt</b>. Rapor, haber, hikâye → <b>Präteritum</b>. <i>sein, haben</i> ve modal fiiller konuşmada da genelde Präteritum: <i>ich war, ich hatte, ich musste</i>.</p>
<p><b>Perfekt = haben/sein (2. pozisyon) + Partizip II (sonda).</b></p>
<p><b>sein</b> kullanılır: (1) yer değiştirme: fahren, gehen, fliegen, kommen; (2) durum değişimi: aufstehen, werden, sterben, wachsen, steigen/sinken (!); (3) sein, bleiben, passieren.</p>
<p class="tip">Finans örneği: <i>Der Kurs <b>ist</b> um 5 % gestiegen.</i> Ama: <i>Die Firma <b>hat</b> den Preis erhöht.</i> (geçişli fiil → haben)</p>
<p><b>Partizip II:</b></p>
<ul><li>düzenli: <b>ge</b>…<b>t</b>: gemacht, getestet</li>
<li>düzensiz: <b>ge</b>…<b>en</b> (+ ünlü değişimi): gefahren, geschrieben, gestiegen</li>
<li>ayrılabilen: ab<b>ge</b>schlossen, ein<b>ge</b>kauft</li>
<li><b>ge- yok:</b> be-/ver-/er-/ent-/zer-/ge- ile başlayan ve <b>-ieren</b> fiiller: bestellt, verkauft, entwickelt, investiert, analysiert</li></ul>
<p><b>Präteritum:</b> düzenli: -te (ich kauf<b>te</b>, wir kauf<b>ten</b>). Düzensiz: kök değişir (ging, fuhr, schrieb, stieg). ich = er/sie/es formu aynı.</p>`,
  examples: [
    ["Ich habe den Fehler sofort analysiert.", "Hatayı hemen analiz ettim."],
    ["Der Umsatz ist im dritten Quartal deutlich gestiegen.", "Ciro üçüncü çeyrekte belirgin biçimde arttı."],
    ["Das Unternehmen wurde 1937 gegründet und entwickelte zunächst Kleinwagen.", "Şirket 1937'de kuruldu ve önce küçük otomobiller geliştirdi."],
    ["Ich konnte gestern nicht kommen, weil ich krank war.", "Dün gelemedim çünkü hastaydım."]
  ],
  ex: [
    { t: "mc", q: "Wir ___ das Projekt letzte Woche abgeschlossen.", o: ["haben", "sind", "hatten", "wurden"], a: 0, ex: "abschließen geçişli → haben." },
    { t: "mc", q: "Die Aktie ___ stark gefallen.", o: ["hat", "ist", "wird", "war"], a: 1, ex: "fallen (durum değişimi) → sein." },
    { t: "gap", q: "Ich habe gestern zwei Bauteile ___. (bestellen)", a: ["bestellt"], ex: "be- → ge- yok." },
    { t: "gap", q: "Das Team hat die Daten ___. (analysieren)", a: ["analysiert"], ex: "-ieren → ge- yok." },
    { t: "gap", q: "Er ist um 6 Uhr ___. (aufstehen)", a: ["aufgestanden"], ex: "Ayrılabilen + düzensiz: auf-ge-standen." },
    { t: "gap", q: "Gestern ___ ich keine Zeit. (haben, Präteritum)", a: ["hatte"], ex: "haben → hatte." },
    { t: "mc", q: "Präteritum von 'schreiben' (er):", o: ["schreibte", "schrieb", "schrob", "geschrieben"], a: 1, ex: "schreiben – schrieb – geschrieben." },
    { t: "gap", q: "Der Zug ___ pünktlich angekommen. (sein/haben?)", a: ["ist"], ex: "ankommen → yer değişimi → sein." }
  ],
  vocab: [["der Umsatz", "ciro"], ["das Quartal", "çeyrek"], ["gründen", "kurmak"], ["steigen – stieg – ist gestiegen", "artmak"], ["sinken – sank – ist gesunken", "düşmek"], ["abschließen", "tamamlamak, sonuçlandırmak"], ["der Kurs", "kur, fiyat (hisse)"], ["entwickeln", "geliştirmek"]],
  write: { task: "Geçen haftanızı anlatın (Perfekt, 6 cümle). Sonra şirketinizin tarihini 3 cümlede Präteritum ile yazın.", hints: ["Letzte Woche habe ich …", "Am Mittwoch bin ich nach … gefahren.", "Die Firma wurde … gegründet."] }
},
{
  id: "m06", lvl: "B1", stage: "Fundament", title: "Nebensätze: weil, dass, ob, wenn/als, obwohl",
  goal: "En sık yan cümle bağlaçlarını doğru seçmek ve fiili sona göndermek.",
  theory: `
<table><thead><tr><th>Bağlaç</th><th>Anlam</th><th>Not</th></tr></thead><tbody>
<tr><td><b>weil / da</b></td><td>çünkü, -dığı için</td><td>da genelde cümle başında, bilinen sebep</td></tr>
<tr><td><b>dass</b></td><td>-dığını</td><td>Ich denke, dass …</td></tr>
<tr><td><b>ob</b></td><td>-ip -mediğini</td><td>evet/hayır belirsizliği</td></tr>
<tr><td><b>wenn</b></td><td>-ince, -se</td><td>koşul, tekrar, şimdi/gelecek</td></tr>
<tr><td><b>als</b></td><td>-dığında</td><td>geçmişte <b>tek</b> olay/dönem</td></tr>
<tr><td><b>obwohl</b></td><td>-e rağmen</td><td>trotzdem ana cümlede aynı anlam</td></tr>
<tr><td><b>während</b></td><td>-iken; oysa</td><td>süre veya karşıtlık</td></tr>
<tr><td><b>bevor / nachdem</b></td><td>-den önce / sonra</td><td>nachdem + bir zaman daha geçmiş</td></tr>
<tr><td><b>damit</b></td><td>-sın diye</td><td>özneler farklı (aynıysa um…zu)</td></tr>
</tbody></table>
<p><b>Dikkat – üç farklı kelime türü, aynı anlam:</b></p>
<ul><li>Yan cümle bağlacı (fiil sonda): <i>…, <b>weil</b> der Preis zu hoch <b>ist</b>.</i></li>
<li>Bağlaç, pozisyon 0 (fiil 2.): <i>…, <b>denn</b> der Preis <b>ist</b> zu hoch.</i> (und, aber, oder, denn, sondern)</li>
<li>Zarf, pozisyon 1 (fiil hemen sonra): <i><b>Deshalb ist</b> der Preis zu hoch.</i> (deshalb, trotzdem, dann, außerdem)</li></ul>
<p class="tip">Kontrol tekniği: Bağlaçtan sonra fiili gördüğünüz yere bakın. weil/dass/obwohl → fiil kuyrukta olmalı.</p>`,
  examples: [
    ["Obwohl die Rohstoffe teurer geworden sind, halten wir den Preis.", "Hammaddeler pahalanmasına rağmen fiyatı koruyoruz."],
    ["Als ich mein erstes Gehalt bekam, habe ich ein Depot eröffnet.", "İlk maaşımı aldığımda bir yatırım hesabı açtım."],
    ["Können Sie mir sagen, ob die Teile schon geliefert wurden?", "Parçaların teslim edilip edilmediğini söyleyebilir misiniz?"],
    ["Nachdem wir die Ursache gefunden hatten, änderten wir die Konstruktion.", "Nedeni bulduktan sonra konstrüksiyonu değiştirdik."]
  ],
  ex: [
    { t: "mc", q: "___ ich Zeit habe, lese ich Fachartikel.", o: ["Wenn", "Als", "Ob", "Dass"], a: 0, ex: "Tekrar eden durum → wenn." },
    { t: "mc", q: "___ ich 2018 bei der Firma anfing, war alles neu.", o: ["Wenn", "Als", "Wann", "Nachdem"], a: 1, ex: "Geçmişte tek olay → als." },
    { t: "mc", q: "Die Maschine läuft, ___ sie alt ist.", o: ["obwohl", "trotzdem", "weil", "deshalb"], a: 0, ex: "Fiil sonda + karşıtlık → obwohl." },
    { t: "mc", q: "Die Maschine ist alt. ___ läuft sie gut.", o: ["Trotzdem", "Obwohl", "Weil", "Denn"], a: 0, ex: "Fiil hemen sonra → zarf: trotzdem." },
    { t: "gap", q: "Ich frage den Meister, ___ wir heute länger arbeiten müssen.", a: ["ob"], ex: "Evet/hayır sorusu dolaylı → ob." },
    { t: "mc", q: "Ich spare Geld, ___ meine Kinder später studieren können.", o: ["damit", "um", "dass", "weil"], a: 0, ex: "Özneler farklı (ich / meine Kinder) → damit." },
    { t: "mc", q: "Er kommt heute nicht, denn ___", o: ["er ist krank.", "er krank ist.", "ist er krank.", "krank er ist."], a: 0, ex: "denn → normal sıra (fiil 2.)." },
    { t: "gap", q: "Ich glaube, dass die Lieferung morgen ___. (kommen, Präsens)", a: ["kommt"], ex: "dass → fiil sonda." }
  ],
  vocab: [["der Rohstoff", "hammadde"], ["das Gehalt", "maaş"], ["das Depot", "yatırım hesabı"], ["die Ursache", "neden"], ["die Konstruktion", "tasarım, konstrüksiyon"], ["der Meister", "usta, ustabaşı"], ["die Lieferung", "teslimat"], ["der Fachartikel", "teknik makale"]],
  write: { task: "Neden Almanca öğrendiğinizi ve neden yatırım yaptığınızı anlatan 6 cümle yazın. weil, obwohl, wenn, als, damit, dass kelimelerinin her birini bir kez kullanın.", hints: ["Ich lerne Deutsch, weil …", "Als ich nach Deutschland kam, …", "Ich investiere, damit …"] }
},
{
  id: "m07", lvl: "B1", stage: "Fundament", title: "Verben mit Präpositionen & da-/wo-Wörter",
  goal: "Sabit edatlı fiilleri öbek olarak öğrenmek; darauf/worüber gibi yapıları kurmak.",
  theory: `
<p>Birçok fiil sabit bir edatla gelir ve bu edat Türkçeden tahmin edilemez. Fiili her zaman <b>edat + hal</b> ile birlikte ezberleyin.</p>
<div class="scroll"><table><thead><tr><th>Fiil</th><th>Türkçe</th><th>Fiil</th><th>Türkçe</th></tr></thead><tbody>
<tr><td>warten <b>auf</b> + A</td><td>beklemek</td><td>sich kümmern <b>um</b> + A</td><td>ilgilenmek</td></tr>
<tr><td>sich freuen <b>auf</b> + A</td><td>(gelecek) dört gözle beklemek</td><td>sich freuen <b>über</b> + A</td><td>(olmuş) sevinmek</td></tr>
<tr><td>sich interessieren <b>für</b> + A</td><td>ilgilenmek</td><td>teilnehmen <b>an</b> + D</td><td>katılmak</td></tr>
<tr><td>abhängen <b>von</b> + D</td><td>bağlı olmak</td><td>sich beschäftigen <b>mit</b> + D</td><td>uğraşmak</td></tr>
<tr><td>sich beschweren <b>über</b> + A</td><td>şikâyet etmek</td><td>sich verlassen <b>auf</b> + A</td><td>güvenmek</td></tr>
<tr><td>denken <b>an</b> + A</td><td>düşünmek, hatırlamak</td><td>sich bewerben <b>um</b> + A / <b>bei</b> + D</td><td>başvurmak</td></tr>
<tr><td>sprechen <b>über</b> + A</td><td>hakkında konuşmak</td><td>investieren <b>in</b> + A</td><td>yatırım yapmak</td></tr>
</tbody></table></div>
<p><b>Şeyler için zamir:</b> da(r) + edat → <i>Ich warte <b>darauf</b>.</i> Soru: wo(r) + edat → <i><b>Worauf</b> wartest du?</i> (ünlüyle başlayan edatta araya -r-: dar-auf, wor-über).</p>
<p><b>Kişiler için:</b> edat + zamir → <i>Ich warte <b>auf ihn</b>. <b>Auf wen</b> wartest du?</i></p>
<p><b>da-Wort + Nebensatz:</b> <i>Ich freue mich <b>darauf</b>, dass du kommst. / Es hängt <b>davon</b> ab, ob …</i></p>
<p><b>Reflexif:</b> mich/dich/sich/uns/euch/sich. Akkusativ'te nesne yoksa <b>mich</b>, başka Akk nesne varsa <b>mir</b>: <i>Ich wasche <b>mich</b>. / Ich wasche <b>mir</b> die Hände. / Ich merke <b>mir</b> das.</i></p>`,
  examples: [
    ["Der Erfolg hängt davon ab, wie schnell wir reagieren.", "Başarı ne kadar hızlı tepki verdiğimize bağlı."],
    ["Ich kümmere mich um die Qualitätsprobleme.", "Kalite sorunlarıyla ben ilgileniyorum."],
    ["Worüber habt ihr in der Besprechung gesprochen?", "Toplantıda ne hakkında konuştunuz?"],
    ["Ich habe mich um eine Stelle als Entwicklungsingenieur beworben.", "Geliştirme mühendisi pozisyonuna başvurdum."]
  ],
  ex: [
    { t: "gap", q: "Ich freue mich ___ den Urlaub nächsten Monat.", a: ["auf"], ex: "Gelecekteki şey → sich freuen auf." },
    { t: "gap", q: "Wir nehmen ___ der Messe in Hannover teil.", a: ["an"], ex: "teilnehmen an + Dativ." },
    { t: "mc", q: "___ interessierst du dich? – Für Elektromobilität.", o: ["Wofür", "Woran", "Für was", "Worauf"], a: 0, ex: "interessieren für → wofür." },
    { t: "mc", q: "Denkst du an den Termin? – Ja, ich denke ___.", o: ["daran", "an ihn", "darüber", "damit"], a: 0, ex: "Şey (Termin) → da-r-an." },
    { t: "mc", q: "Wartest du auf deinen Kollegen? – Ja, ich warte ___.", o: ["auf ihn", "darauf", "worauf", "auf es"], a: 0, ex: "Kişi → edat + zamir." },
    { t: "gap", q: "Das hängt ___ der Marktlage ab.", a: ["von"], ex: "abhängen von + Dativ." },
    { t: "mc", q: "Ich merke ___ die neue Nummer.", o: ["mir", "mich", "sich", "mein"], a: 0, ex: "Başka Akk nesne var (die Nummer) → mir." },
    { t: "gap", q: "Der Kunde hat sich ___ die lange Lieferzeit beschwert.", a: ["über"], ex: "sich beschweren über + Akk." }
  ],
  vocab: [["die Messe", "fuar"], ["die Elektromobilität", "elektrikli mobilite"], ["die Marktlage", "piyasa durumu"], ["die Lieferzeit", "teslim süresi"], ["die Besprechung", "toplantı"], ["sich bewerben um", "başvurmak"], ["sich verlassen auf", "güvenmek, bel bağlamak"], ["sich beschäftigen mit", "uğraşmak"]],
  write: { task: "Mesleki ilgi alanlarınızı anlatın (6 cümle): sich interessieren für, sich beschäftigen mit, abhängen von, sich freuen auf, teilnehmen an kullanın; en az bir da-Wort + dass/ob cümlesi kurun.", hints: ["Ich interessiere mich besonders für …", "Zurzeit beschäftige ich mich mit …", "Ob …, hängt davon ab, …"] }
}
]);
