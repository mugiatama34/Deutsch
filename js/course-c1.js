// C1: Fach- und Wissenschaftssprache, verdichteter Stil, Nuancen.
window.COURSE = (window.COURSE || []).concat([
{
  id: "m15", lvl: "C1", stage: "C1", title: "Nominalstil ↔ Verbalstil",
  goal: "Yan cümleleri isim gruplarına (ve tersine) dönüştürerek resmî/teknik üslup kurmak.",
  theory: `
<p>Raporlar, sözleşmeler ve haberler <b>isim ağırlıklıdır</b>. C1'de iki yönde de dönüşüm yapabilmelisiniz.</p>
<div class="scroll"><table><thead><tr><th>Verbalstil (yan cümle)</th><th>Nominalstil (edat + isim)</th></tr></thead><tbody>
<tr><td>weil / da …</td><td><b>wegen / aufgrund</b> + G</td></tr>
<tr><td>obwohl …</td><td><b>trotz</b> + G</td></tr>
<tr><td>wenn / falls …</td><td><b>bei</b> + D, <b>im Falle</b> + G</td></tr>
<tr><td>wenn nicht … / ohne dass</td><td><b>ohne</b> + A</td></tr>
<tr><td>während / als …</td><td><b>während / bei</b></td></tr>
<tr><td>nachdem …</td><td><b>nach</b> + D</td></tr>
<tr><td>bevor …</td><td><b>vor</b> + D</td></tr>
<tr><td>um … zu / damit …</td><td><b>zu / zwecks / für</b></td></tr>
<tr><td>indem …</td><td><b>durch</b> + A</td></tr>
<tr><td>sodass …</td><td><b>infolge</b> + G</td></tr>
</tbody></table></div>
<p><b>İsim yapımı:</b> -ung (senken → Senkung), mastar (das Testen), kök (steigen → Anstieg, kaufen → Kauf), -e (prüfen → Prüfung, suchen → Suche), -heit/-keit (sicher → Sicherheit).</p>
<p><b>Özne/nesne nereye gider?</b> Özne → Genitiv veya <i>durch</i>: <i>Die Firma investiert → die Investition <b>der Firma</b></i>. Nesne → Genitiv: <i>Man senkt die Kosten → die Senkung <b>der Kosten</b></i>. Zarf → sıfat: <i>schnell liefern → die <b>schnelle</b> Lieferung</i>.</p>
<p class="tip">Dönüşüm sırası: (1) bağlaç → edat, (2) fiil → isim, (3) özne/nesne → Genitiv, (4) zarf → sıfat, (5) yan cümle fiilini sil.</p>`,
  examples: [
    ["Weil die Nachfrage gesunken ist, … → Aufgrund der gesunkenen Nachfrage …", "Talep düştüğü için … → Düşen talep nedeniyle …"],
    ["Wenn man das Bauteil falsch montiert, … → Bei falscher Montage des Bauteils …", "Parça yanlış monte edilirse … → Parçanın yanlış montajında …"],
    ["Nachdem der Vorstand zugestimmt hatte, … → Nach Zustimmung des Vorstands …", "Yönetim kurulu onayladıktan sonra … → Yönetim kurulunun onayından sonra …"],
    ["Indem wir Prozesse automatisieren, … → Durch die Automatisierung der Prozesse …", "Süreçleri otomatikleştirerek … → Süreçlerin otomasyonu yoluyla …"]
  ],
  ex: [
    { t: "gap", q: "Weil es stark regnete, … → Wegen des starken ___ …", a: ["regens"], ex: "regnen → der Regen → des Regens." },
    { t: "mc", q: "Obwohl die Kosten gestiegen sind, … →", o: ["Trotz der gestiegenen Kosten …", "Trotz die gestiegenen Kosten …", "Obwohl der gestiegenen Kosten …", "Wegen der gestiegenen Kosten …"], a: 0, ex: "obwohl → trotz + Genitiv." },
    { t: "mc", q: "Nachdem das Projekt abgeschlossen war, … →", o: ["Nach Abschluss des Projekts …", "Nach dem Abschließen das Projekt …", "Nachdem Abschluss des Projekts …", "Vor Abschluss des Projekts …"], a: 0, ex: "abschließen → der Abschluss; nach + D." },
    { t: "gap", q: "Wir müssen die Emissionen reduzieren. → Die ___ der Emissionen ist notwendig.", a: ["reduzierung", "reduktion"], ex: "reduzieren → die Reduzierung / Reduktion." },
    { t: "mc", q: "Bei Verlust der Karte … =", o: ["Wenn man die Karte verliert, …", "Weil man die Karte verliert, …", "Obwohl man die Karte verliert, …", "Damit man die Karte verliert, …"], a: 0, ex: "bei = wenn/falls (koşul)." },
    { t: "mc", q: "Indem man regelmäßig investiert, … →", o: ["Durch regelmäßiges Investieren …", "Mit regelmäßigem Investieren …", "Indem regelmäßigen Investierens …", "Wegen regelmäßig investieren …"], a: 0, ex: "indem → durch + Akk." },
    { t: "gap", q: "Die Preise steigen. → Der ___ der Preise (Kökten isim)", a: ["anstieg"], ex: "steigen → der Anstieg." },
    { t: "mc", q: "Verbalisieren: 'Vor Beginn der Sitzung …'", o: ["Bevor die Sitzung beginnt, …", "Nachdem die Sitzung begonnen hat, …", "Während die Sitzung beginnt, …", "Wenn die Sitzung nicht beginnt, …"], a: 0, ex: "vor + D → bevor." }
  ],
  vocab: [["die Nachfrage", "talep"], ["der Anstieg", "artış"], ["die Zustimmung", "onay"], ["der Vorstand", "yönetim kurulu"], ["die Montage", "montaj"], ["der Abschluss", "tamamlama; bilanço"], ["die Emission", "emisyon; (finans) ihraç"], ["zwecks (+G)", "amacıyla"]],
  write: { task: "Aşağıdaki cümleleri Nominalstil'e çevirin ve bunlarla 4 cümlelik bir yönetim özeti yazın: 'Weil die Energiepreise gestiegen sind…', 'Nachdem wir die Linie umgebaut hatten…', 'Indem wir Ausschuss reduzieren…'", hints: ["Aufgrund der gestiegenen …", "Nach dem Umbau der …", "Durch die Reduzierung des …"] }
},
{
  id: "m16", lvl: "C1", stage: "C1", title: "Partizipialattribute",
  goal: "Teknik metinlerdeki uzun isim öncesi yapıları çözmek ve kendiniz kurmak.",
  theory: `
<p>Almanca ilgi cümlesini isim önüne sıkıştırabilir – tıpkı Türkçedeki <b>'-en/-an', '-dığı'</b> gibi! Bu yüzden Türkler için aslında doğal bir yapı.</p>
<table><thead><tr><th>Partizip</th><th>Anlam</th><th>Örnek</th></tr></thead><tbody>
<tr><td><b>Partizip I</b> (Inf + d)</td><td>aktif, eş zamanlı (-en)</td><td>die <b>steigenden</b> Preise = yükselen fiyatlar</td></tr>
<tr><td><b>Partizip II</b></td><td>pasif / tamamlanmış (-ilmiş, -miş)</td><td>die <b>gestiegenen</b> Preise = yükselmiş fiyatlar; das <b>gelieferte</b> Teil = teslim edilmiş parça</td></tr>
<tr><td><b>zu + Partizip I</b></td><td>yapılması gereken (-ilecek)</td><td>die <b>zu prüfenden</b> Teile = test edilecek parçalar</td></tr>
</tbody></table>
<p><b>Genişletme:</b> Bilgiler artikel ile Partizip arasına girer (Türkçede olduğu gibi):</p>
<p><i>die <u>im letzten Quartal von unserem Werk in Bursa</u> <b>gelieferten</b> Getriebe</i><br>= son çeyrekte Bursa'daki fabrikamız tarafından teslim edilmiş şanzımanlar</p>
<p><b>Çözme tekniği:</b> (1) Artikeli bul → (2) ona ait ismi bul (atlayarak) → (3) isimden hemen önceki Partizip = fiil → (4) aradaki her şeyi ilgi cümlesine taşı: <i>die Getriebe, <b>die</b> im letzten Quartal … <b>geliefert wurden</b></i>.</p>
<p>Sıfat çekimi normal sıfat kuralına uyar (m04).</p>`,
  examples: [
    ["Die seit Jahren steigende Nachfrage nach E-Autos verändert die Branche.", "Yıllardır artan elektrikli araç talebi sektörü değiştiriyor."],
    ["Der vom Kunden reklamierte Fehler konnte nicht reproduziert werden.", "Müşterinin şikâyet ettiği hata tekrarlanamadı."],
    ["Die bis Ende des Jahres umzusetzenden Maßnahmen wurden festgelegt.", "Yıl sonuna kadar uygulanacak önlemler belirlendi."],
    ["Der stark schwankende Kurs schreckt viele Anleger ab.", "Çok dalgalanan kur birçok yatırımcıyı caydırıyor."]
  ],
  ex: [
    { t: "gap", q: "die ___ Kosten (Kosten, die steigen) – Partizip I", a: ["steigenden"], ex: "steigen + d + Endung -en." },
    { t: "gap", q: "das ___ Auto (Auto, das repariert wurde)", a: ["reparierte"], ex: "Partizip II + -e (das, Nom)." },
    { t: "mc", q: "die zu erledigenden Aufgaben =", o: ["die Aufgaben, die erledigt werden müssen", "die Aufgaben, die erledigt wurden", "die Aufgaben, die man erledigt hat", "die Aufgaben, die nicht erledigt werden"], a: 0, ex: "zu + Partizip I = müssen/sollen + Passiv." },
    { t: "mc", q: "Der Sensor, der im Labor getestet wurde, … →", o: ["Der im Labor getestete Sensor …", "Der im Labor testende Sensor …", "Der getestete im Labor Sensor …", "Der im Labor getestet Sensor …"], a: 0, ex: "Pasif → Partizip II, eklemeler artikelle Partizip arasına." },
    { t: "mc", q: "die schlafenden Kinder =", o: ["die Kinder, die schlafen", "die Kinder, die geschlafen haben", "die Kinder, die geweckt wurden", "die Kinder, die schlafen müssen"], a: 0, ex: "Partizip I = eş zamanlı aktif." },
    { t: "gap", q: "Die Anleger, die in Panik verkaufen … → Die in Panik ___ Anleger …", a: ["verkaufenden"], ex: "Aktif, eş zamanlı → Partizip I + -en." },
    { t: "mc", q: "die von der EU beschlossene Norm – Wer hat beschlossen?", o: ["die EU", "die Norm", "unbekannt", "der Hersteller"], a: 0, ex: "von + Dativ = eylemi yapan." },
    { t: "gap", q: "der noch zu ___ Vertrag (Vertrag, der noch unterschrieben werden muss)", a: ["unterschreibende"], ex: "zu + Partizip I + -e: der zu unterschreibende Vertrag." }
  ],
  vocab: [["das Getriebe", "şanzıman"], ["reklamieren", "şikâyet etmek (ürün)"], ["reproduzieren", "tekrarlamak (hata)"], ["die Maßnahme", "önlem"], ["festlegen", "belirlemek"], ["der Anleger", "yatırımcı"], ["abschrecken", "caydırmak"], ["die Branche", "sektör"]],
  write: { task: "Bir 8D/hata raporunun ilk paragrafını yazın (4–5 cümle). En az 3 genişletilmiş Partizipialattribut kullanın (ör. 'der vom Kunden reklamierte …').", hints: ["Der am … vom Kunden reklamierte Fehler …", "Die betroffenen, in Werk … produzierten Teile …", "Die zu ergreifenden Sofortmaßnahmen …"] }
},
{
  id: "m17", lvl: "C1", stage: "C1", title: "Konjunktiv I & indirekte Rede",
  goal: "Haberlerde ve raporlarda başkasının sözünü tarafsızca aktarmak.",
  theory: `
<p>Haber ve raporlarda başkasının sözünü aktarırken <b>Konjunktiv I</b> kullanılır: 'bunu ben değil o söylüyor' mesafesi.</p>
<p><b>Biçim:</b> Infinitiv kökü + Konj-I eki. Pratikte en çok <b>3. tekil</b> kullanılır:</p>
<table><thead><tr><th>Fiil</th><th>er/sie/es</th><th>Not</th></tr></thead><tbody>
<tr><td>sein</td><td><b>sei</b></td><td>(ich sei, wir seien)</td></tr>
<tr><td>haben</td><td><b>habe</b></td><td></td></tr>
<tr><td>werden</td><td><b>werde</b></td><td>Futur/Passiv aktarımı</td></tr>
<tr><td>können / müssen</td><td><b>könne / müsse</b></td><td></td></tr>
<tr><td>kommen / geben</td><td><b>komme / gebe</b></td><td>düzenli: -e</td></tr>
</tbody></table>
<p><b>Altın kural:</b> Konj I formu Indikativ ile <b>aynıysa</b> (özellikle çoğulda: <i>sie haben</i>), <b>Konjunktiv II</b>'ye geçin: <i>Die Experten sagen, die Kunden <b>hätten</b> (✗ haben) kein Vertrauen.</i></p>
<p><b>Zamanlar:</b></p>
<ul><li>Şimdi: <i>Er sagt, er <b>sei</b> krank.</i></li>
<li>Geçmiş: <i>Er sagt, er <b>sei</b> gestern krank <b>gewesen</b> / er <b>habe</b> angerufen.</i></li>
<li>Gelecek: <i>Er sagt, er <b>werde</b> morgen kommen.</i></li>
<li>Emir: <i>Er sagt, ich <b>solle</b> warten.</i> Soru: <i>Sie fragt, <b>ob</b> … / <b>wann</b> …</i></li></ul>
<p class="tip">Zamirleri ve zaman/yer ifadelerini kaydırmayı unutmayın: 'ich' → er, 'hier' → dort, 'morgen' → am nächsten Tag.</p>`,
  examples: [
    ["Der CEO erklärte, das Unternehmen sei gut aufgestellt.", "CEO, şirketin iyi konumlandığını açıkladı."],
    ["Laut Analysten habe der Konzern seine Ziele verfehlt.", "Analistlere göre şirket hedeflerini kaçırmış."],
    ["Die Gewerkschaft fordert, die Löhne müssten steigen.", "Sendika ücretlerin artması gerektiğini talep ediyor."],
    ["Der Sprecher betonte, man werde keine Stellen abbauen.", "Sözcü, hiçbir kadronun kaldırılmayacağını vurguladı."]
  ],
  ex: [
    { t: "gap", q: "Er sagt: „Ich bin zufrieden.“ → Er sagt, er ___ zufrieden.", a: ["sei"], ex: "sein → sei." },
    { t: "gap", q: "Sie sagt: „Ich habe keine Zeit.“ → Sie sagt, sie ___ keine Zeit.", a: ["habe"], ex: "haben → habe." },
    { t: "mc", q: "„Wir haben die Ziele erreicht.“ → Die Manager sagen, sie ___ die Ziele erreicht.", o: ["hätten", "haben", "habe", "hatten"], a: 0, ex: "Konj I (sie haben) = Indikativ → Konj II: hätten." },
    { t: "mc", q: "„Wir werden investieren.“ → Der Vorstand kündigte an, man ___ investieren.", o: ["werde", "wird", "würde", "wurde"], a: 0, ex: "man → werde (Konj I ≠ Indikativ)." },
    { t: "mc", q: "„Kommen Sie morgen!“ → Er sagte, ich ___ am nächsten Tag kommen.", o: ["solle", "soll", "sollte", "sei"], a: 0, ex: "Emir → sollen (Konj I: solle)." },
    { t: "gap", q: "„Der Fehler ist gestern aufgetreten.“ → Er sagt, der Fehler ___ gestern aufgetreten.", a: ["sei"], ex: "Geçmiş: sei + P II." },
    { t: "mc", q: "„Kann ich früher gehen?“ → Er fragt, ___", o: ["ob er früher gehen könne.", "dass er früher gehen könne.", "ob er früher gehen kann könne.", "kann er früher gehen."], a: 0, ex: "Evet/hayır sorusu → ob + Konj I." },
    { t: "gap", q: "Laut Bericht ___ der Absatz um 3 % gesunken. (sein)", a: ["sei"], ex: "Haber aktarımı: sei gesunken." }
  ],
  vocab: [["aufgestellt sein", "konumlanmış olmak"], ["verfehlen", "kaçırmak (hedef)"], ["die Gewerkschaft", "sendika"], ["fordern", "talep etmek"], ["Stellen abbauen", "kadro azaltmak"], ["betonen", "vurgulamak"], ["der Absatz", "satış (adet)"], ["laut (+G/D)", "-e göre"]],
  write: { task: "Okuduğunuz bir ekonomi/otomotiv haberini (gerçek veya hayalî) 5 cümlede Konjunktiv I ile aktarın: sagte, betonte, kündigte an, laut … kullanın.", hints: ["Wie der Konzern mitteilte, sei …", "Der Finanzvorstand betonte, man habe …", "Laut Analysten werde …"] }
},
{
  id: "m18", lvl: "C1", stage: "C1", title: "Passiversatzformen",
  goal: "Pasifin alternatiflerini (sich lassen, -bar, sein zu, bekommen) bilmek ve tanımak.",
  theory: `
<p>Hep 'werden' kullanmak metni monotonlaştırır. C1'de şu alternatifler beklenir:</p>
<table><thead><tr><th>Yapı</th><th>Anlam</th><th>Örnek → Passiv</th></tr></thead><tbody>
<tr><td><b>sich lassen</b> + Inf</td><td>yapılabilir</td><td>Das Problem <b>lässt sich</b> lösen. = kann gelöst werden</td></tr>
<tr><td><b>-bar / -lich</b> sıfat</td><td>yapılabilir</td><td>Das Teil ist <b>austauschbar</b>. = kann ausgetauscht werden</td></tr>
<tr><td><b>sein + zu</b> + Inf</td><td>yapılmalı / yapılabilir</td><td>Die Regeln <b>sind</b> einzuhalten. = müssen eingehalten werden</td></tr>
<tr><td><b>es gilt</b> + zu + Inf</td><td>gerekir</td><td><b>Es gilt</b>, Kosten zu senken. = Kosten müssen gesenkt werden</td></tr>
<tr><td><b>bekommen / erhalten</b> + P II</td><td>Dativ pasifi</td><td>Ich <b>bekomme</b> das Paket geliefert. = Mir wird das Paket geliefert.</td></tr>
<tr><td><b>man</b></td><td>genel özne</td><td><b>Man</b> testet jedes Teil.</td></tr>
<tr><td>Fonksiyon fiilleri</td><td>pasif anlam</td><td>zur Anwendung <b>kommen</b> = angewendet werden; Kritik <b>erfahren</b> = kritisiert werden</td></tr>
</tbody></table>
<p class="tip">'sein + zu' bağlama göre 'müssen' veya 'können' olur: <i>Der Lärm ist kaum <b>zu ertragen</b>.</i> = kann kaum ertragen werden. Resmî talimatlarda hemen hep 'müssen'.</p>`,
  examples: [
    ["Die Ursache ließ sich schnell eingrenzen.", "Neden hızla daraltılabildi."],
    ["Die Batterie ist vollständig recycelbar.", "Batarya tamamen geri dönüştürülebilir."],
    ["Die Schutzbrille ist in der Halle jederzeit zu tragen.", "Koruyucu gözlük holde her zaman takılmalıdır."],
    ["Hierbei gilt es, die Risiken genau abzuwägen.", "Burada risklerin dikkatle tartılması gerekir."]
  ],
  ex: [
    { t: "mc", q: "Das Ergebnis kann nicht erklärt werden. =", o: ["Das Ergebnis ist nicht erklärbar.", "Das Ergebnis ist nicht zu erklärt.", "Das Ergebnis lässt nicht erklären.", "Das Ergebnis wird nicht erklärbar."], a: 0, ex: "kann nicht … werden → nicht …bar." },
    { t: "gap", q: "Das Formular ___ bis Freitag auszufüllen. (= muss ausgefüllt werden)", a: ["ist"], ex: "sein + zu + Inf." },
    { t: "mc", q: "Die Schraube lässt sich leicht lösen. =", o: ["Die Schraube kann leicht gelöst werden.", "Die Schraube muss gelöst werden.", "Die Schraube wurde gelöst.", "Jemand lässt die Schraube lösen."], a: 0, ex: "sich lassen = kann … werden." },
    { t: "gap", q: "Die Daten lassen ___ einfach exportieren.", a: ["sich"], ex: "sich lassen." },
    { t: "mc", q: "Mir wurde ein neuer Laptop zur Verfügung gestellt. =", o: ["Ich bekam einen neuen Laptop zur Verfügung gestellt.", "Ich wurde einen neuen Laptop gestellt.", "Ich habe einen Laptop zur Verfügung.", "Ich lasse mir einen Laptop stellen."], a: 0, ex: "Dativ pasifi → bekommen + P II." },
    { t: "mc", q: "Die Anweisungen sind unbedingt zu befolgen. =", o: ["müssen befolgt werden", "können befolgt werden", "wurden befolgt", "sind befolgt"], a: 0, ex: "Talimat → müssen." },
    { t: "gap", q: "Das Konzept kam erstmals 2019 zur ___. (= wurde angewendet)", a: ["anwendung"], ex: "zur Anwendung kommen." },
    { t: "mc", q: "Welches Adjektiv bedeutet 'kann nicht vermieden werden'?", o: ["unvermeidbar", "vermeidlich", "unvermieden", "vermeidend"], a: 0, ex: "un- + vermeid + bar (unvermeidlich de doğru)." }
  ],
  vocab: [["eingrenzen", "daraltmak"], ["recycelbar", "geri dönüştürülebilir"], ["die Schutzbrille", "koruyucu gözlük"], ["abwägen", "tartmak, değerlendirmek"], ["einhalten", "uymak"], ["befolgen", "uymak (talimat)"], ["zur Verfügung stellen", "sağlamak, tahsis etmek"], ["austauschbar", "değiştirilebilir"]],
  write: { task: "Bir iş güvenliği talimatı yazın (6 madde). Her maddede farklı bir pasif alternatifi kullanın (ist zu, lässt sich, -bar, es gilt, man, bekommen).", hints: ["In der Halle ist … zu tragen.", "Defekte Werkzeuge lassen sich …", "Es gilt, …"] }
},
{
  id: "m19", lvl: "C1", stage: "C1", title: "Nomen-Verb-Verbindungen",
  goal: "İş ve resmî dilin sabit kalıplarını (Funktionsverbgefüge) aktif kullanmak.",
  theory: `
<p>Funktionsverbgefüge = anlamı isim taşıyan, fiilin sadece 'işlev' gördüğü sabit kalıplar. Resmî dilin temel taşıdır ve <b>kelime kelime çevrilemez</b>.</p>
<div class="scroll"><table><thead><tr><th>Kalıp</th><th>= basit fiil</th><th>Türkçe</th></tr></thead><tbody>
<tr><td>eine Entscheidung <b>treffen</b></td><td>entscheiden</td><td>karar vermek</td></tr>
<tr><td>in Kraft <b>treten</b></td><td>gültig werden</td><td>yürürlüğe girmek</td></tr>
<tr><td>zur Verfügung <b>stehen / stellen</b></td><td>verfügbar sein / geben</td><td>hazır olmak / sağlamak</td></tr>
<tr><td>in Frage <b>kommen</b> / in Frage <b>stellen</b></td><td>möglich sein / bezweifeln</td><td>söz konusu olmak / sorgulamak</td></tr>
<tr><td>zum Ausdruck <b>bringen</b></td><td>ausdrücken</td><td>ifade etmek</td></tr>
<tr><td>in Betracht <b>ziehen</b></td><td>erwägen</td><td>göz önünde bulundurmak</td></tr>
<tr><td>Bezug <b>nehmen</b> auf</td><td>sich beziehen</td><td>atıfta bulunmak</td></tr>
<tr><td>Kritik <b>üben</b> an</td><td>kritisieren</td><td>eleştirmek</td></tr>
<tr><td>Maßnahmen <b>ergreifen</b></td><td>handeln</td><td>önlem almak</td></tr>
<tr><td>in Anspruch <b>nehmen</b></td><td>nutzen, beanspruchen</td><td>yararlanmak; (zaman) almak</td></tr>
<tr><td>eine Rolle <b>spielen</b></td><td>wichtig sein</td><td>rol oynamak</td></tr>
<tr><td>Rücksicht <b>nehmen</b> auf</td><td>berücksichtigen</td><td>dikkate almak</td></tr>
<tr><td>einen Beitrag <b>leisten</b> zu</td><td>beitragen</td><td>katkıda bulunmak</td></tr>
<tr><td>in Gang <b>setzen / kommen</b></td><td>starten</td><td>başlatmak / başlamak</td></tr>
<tr><td>an Wert <b>verlieren / gewinnen</b></td><td>fallen / steigen</td><td>değer kaybetmek / kazanmak</td></tr>
</tbody></table></div>`,
  examples: [
    ["Der Vorstand hat noch keine Entscheidung getroffen.", "Yönetim kurulu henüz karar vermedi."],
    ["Ich nehme Bezug auf Ihre E-Mail vom 3. März.", "3 Mart tarihli e-postanıza atıfta bulunuyorum."],
    ["Die Lira hat gegenüber dem Euro stark an Wert verloren.", "Lira avroya karşı ciddi değer kaybetti."],
    ["Wir müssen sofort Maßnahmen ergreifen, um die Lieferkette zu sichern.", "Tedarik zincirini güvenceye almak için derhal önlem almalıyız."]
  ],
  ex: [
    { t: "gap", q: "Wir müssen bis Montag eine Entscheidung ___.", a: ["treffen"], ex: "eine Entscheidung treffen." },
    { t: "mc", q: "Diese Lösung kommt für uns nicht in ___.", o: ["Frage", "Betracht", "Kraft", "Gang"], a: 0, ex: "in Frage kommen." },
    { t: "gap", q: "Wir sollten auch andere Lieferanten in Betracht ___.", a: ["ziehen"], ex: "in Betracht ziehen." },
    { t: "mc", q: "Für Rückfragen ___ ich Ihnen gerne zur Verfügung.", o: ["stehe", "stelle", "bin", "komme"], a: 0, ex: "zur Verfügung stehen." },
    { t: "mc", q: "Das Gesetz ___ nächstes Jahr in Kraft.", o: ["tritt", "kommt", "geht", "stellt"], a: 0, ex: "in Kraft treten." },
    { t: "gap", q: "Mit dieser Spende möchten wir einen Beitrag zum Umweltschutz ___.", a: ["leisten"], ex: "einen Beitrag leisten." },
    { t: "mc", q: "Die Gewerkschaft ___ scharfe Kritik an den Plänen.", o: ["übte", "machte", "nahm", "gab"], a: 0, ex: "Kritik üben an." },
    { t: "gap", q: "Der Umbau wird etwa drei Monate in ___ nehmen.", a: ["anspruch"], ex: "in Anspruch nehmen (zaman almak)." }
  ],
  vocab: [["die Lieferkette", "tedarik zinciri"], ["der Beitrag", "katkı"], ["die Rückfrage", "ek soru"], ["die Spende", "bağış"], ["der Umbau", "dönüşüm, tadilat"], ["das Gesetz", "yasa"], ["erwägen", "düşünmek, tartmak"], ["die Kenntnis", "bilgi"]],
  write: { task: "Bir tedarikçiye resmî e-posta yazın: teslimat gecikmesine atıfta bulunun, önlem alınmasını talep edin, alternatif tedarikçileri düşündüğünüzü belirtin. En az 5 Nomen-Verb-Verbindung kullanın.", hints: ["Ich nehme Bezug auf …", "Wir bitten Sie, umgehend Maßnahmen zu ergreifen.", "Andernfalls müssen wir … in Betracht ziehen."] }
},
{
  id: "m20", lvl: "C1", stage: "C1", title: "Subjektive Modalverben",
  goal: "Modal fiillerle tahmin, iddia ve aktarılan bilgi derecelerini ifade etmek.",
  theory: `
<p>Modal fiillerin ikinci hayatı: konuşanın bilgiye ne kadar güvendiğini gösterirler.</p>
<table><thead><tr><th>Modal</th><th>Anlam</th><th>Örnek</th></tr></thead><tbody>
<tr><td><b>muss</b></td><td>~95% eminim (çıkarım)</td><td>Er <b>muss</b> krank sein. – Kesin hasta.</td></tr>
<tr><td><b>dürfte</b></td><td>~75% muhtemelen</td><td>Das <b>dürfte</b> teuer werden.</td></tr>
<tr><td><b>kann / könnte</b></td><td>~50% olabilir</td><td>Das <b>könnte</b> am Sensor liegen.</td></tr>
<tr><td><b>kann nicht</b></td><td>imkânsız</td><td>Das <b>kann nicht</b> stimmen.</td></tr>
<tr><td><b>soll</b></td><td>başkalarından duyduğum (iddiaya göre)</td><td>Das Werk <b>soll</b> geschlossen werden.</td></tr>
<tr><td><b>will</b></td><td>öznenin kendisi iddia ediyor</td><td>Er <b>will</b> nichts gewusst haben.</td></tr>
</tbody></table>
<p><b>Geçmişe dair:</b> modal + <b>Partizip II + haben/sein</b> (Infinitiv Perfekt):</p>
<ul><li><i>Er <b>muss</b> den Fehler <b>übersehen haben</b>.</i> (hatayı gözden kaçırmış olmalı)</li>
<li><i>Sie <b>soll</b> früher bei Bosch <b>gearbeitet haben</b>.</i> (söylendiğine göre çalışmış)</li>
<li><i>Er <b>will</b> das Problem allein <b>gelöst haben</b>.</i> (kendisi öyle iddia ediyor)</li></ul>
<p class="tip">Fark: <i>Er <b>musste</b> arbeiten</i> (çalışmak zorundaydı – objektif) ↔ <i>Er <b>muss</b> gearbeitet haben</i> (çalışmış olmalı – tahmin).</p>`,
  examples: [
    ["Der Hersteller soll Abgaswerte manipuliert haben.", "Üreticinin egzoz değerlerini manipüle ettiği iddia ediliyor."],
    ["Bei diesem Verbrauch muss die Einspritzung defekt sein.", "Bu tüketimde enjeksiyon kesin arızalı olmalı."],
    ["Die Zinswende dürfte den Immobilienmarkt belasten.", "Faiz dönüşü muhtemelen konut piyasasını zorlayacak."],
    ["Er will die Aktie vor dem Crash verkauft haben.", "Hisseyi çöküşten önce sattığını iddia ediyor."]
  ],
  ex: [
    { t: "mc", q: "„Man sagt, dass sie sehr reich ist.“ =", o: ["Sie soll sehr reich sein.", "Sie will sehr reich sein.", "Sie muss sehr reich sein.", "Sie darf sehr reich sein."], a: 0, ex: "Başkalarından duyulan → sollen." },
    { t: "mc", q: "„Er behauptet, dass er das allein geschafft hat.“ =", o: ["Er will das allein geschafft haben.", "Er soll das allein geschafft haben.", "Er muss das allein geschafft haben.", "Er wollte das allein schaffen."], a: 0, ex: "Öznenin kendi iddiası → wollen." },
    { t: "mc", q: "„Ich bin ziemlich sicher, dass er den Bus verpasst hat.“ =", o: ["Er muss den Bus verpasst haben.", "Er musste den Bus verpassen.", "Er soll den Bus verpasst haben.", "Er kann den Bus nicht verpasst haben."], a: 0, ex: "Güçlü çıkarım → muss + Inf. Perfekt." },
    { t: "gap", q: "Das ___ nicht stimmen – die Zahlen sind unmöglich. (können)", a: ["kann"], ex: "İmkânsız → kann nicht." },
    { t: "mc", q: "„Wahrscheinlich ist das Paket schon angekommen.“ =", o: ["Das Paket dürfte schon angekommen sein.", "Das Paket soll schon ankommen.", "Das Paket will angekommen sein.", "Das Paket musste ankommen."], a: 0, ex: "Muhtemelen → dürfte." },
    { t: "gap", q: "Sie soll früher in München gewohnt ___.", a: ["haben"], ex: "wohnen → haben ile Perfekt." },
    { t: "gap", q: "Er muss schon nach Hause gegangen ___.", a: ["sein"], ex: "gehen → sein ile Perfekt." },
    { t: "mc", q: "„Es ist möglich, dass der Fehler an der Software liegt.“ =", o: ["Der Fehler könnte an der Software liegen.", "Der Fehler muss an der Software liegen.", "Der Fehler soll an der Software liegen.", "Der Fehler will an der Software liegen."], a: 0, ex: "Olasılık → könnte." }
  ],
  vocab: [["der Abgaswert", "egzoz emisyon değeri"], ["die Einspritzung", "enjeksiyon"], ["der Verbrauch", "tüketim"], ["die Zinswende", "faiz politikasında dönüş"], ["belasten", "yük olmak, zorlamak"], ["behaupten", "iddia etmek"], ["übersehen", "gözden kaçırmak"], ["der Immobilienmarkt", "konut piyasası"]],
  write: { task: "Bir arızanın teşhisini yazın (5–6 cümle): belirti → olası nedenler. muss, dürfte, könnte, kann nicht ve en az bir geçmiş tahmin (muss … haben) kullanın.", hints: ["Bei diesen Symptomen muss …", "Es könnte auch an … liegen.", "Der Fahrer dürfte …", "Der Sensor kann nicht … sein, weil …"] }
},
{
  id: "m21", lvl: "C1", stage: "C1", title: "Konnektoren für Argumentation (C1)",
  goal: "Akademik/resmî metinlerde ince anlam farklarını taşıyan bağlaçları kullanmak.",
  theory: `
<div class="scroll"><table><thead><tr><th>Anlam</th><th>Yan cümle (fiil sonda)</th><th>Zarf (fiil hemen sonra)</th><th>Edat</th></tr></thead><tbody>
<tr><td>Karşıtlık (-e rağmen)</td><td>obwohl, <b>obgleich</b>, <b>wenngleich</b></td><td>trotzdem, <b>dennoch</b>, <b>nichtsdestotrotz</b></td><td>trotz</td></tr>
<tr><td>Zıtlık (oysa)</td><td>während, <b>wohingegen</b></td><td>hingegen, <b>dagegen</b>, jedoch</td><td>im Gegensatz zu</td></tr>
<tr><td>Koşul</td><td>wenn, falls, <b>sofern</b>, <b>vorausgesetzt, dass</b></td><td>andernfalls, sonst</td><td>bei, im Falle</td></tr>
<tr><td>Araç/yol (-arak)</td><td><b>indem</b>, dadurch, dass</td><td>dadurch, so</td><td>durch, mittels</td></tr>
<tr><td>Sonuç</td><td><b>sodass</b>, so … dass</td><td>folglich, <b>somit</b>, demzufolge</td><td>infolge</td></tr>
<tr><td>Kısıtlama</td><td><b>soweit</b>, <b>insofern</b> (als)</td><td>allerdings</td><td>—</td></tr>
<tr><td>Ekleme</td><td>—</td><td>außerdem, zudem, <b>darüber hinaus</b>, ferner</td><td>neben, zusätzlich zu</td></tr>
</tbody></table></div>
<p><b>jedoch</b> esnektir: pozisyon 0 (<i>…, jedoch <b>ist</b> das teuer</i>), pozisyon 1 (<i>Jedoch <b>ist</b> …</i>) veya orta alanda (<i>Das ist jedoch teuer</i>).</p>
<p><b>indem vs. sodass:</b> <i>Man spart Geld, <b>indem</b> man vergleicht.</i> (karşılaştırarak) ↔ <i>Die Preise sanken, <b>sodass</b> die Nachfrage stieg.</i> (öyle ki)</p>
<p class="tip">C1 sınavında (Goethe/telc) yazma bölümünde bağlaç çeşitliliği doğrudan puanlanır. Her metinde en az 5 farklı bağlaç hedefleyin.</p>`,
  examples: [
    ["Wenngleich die Nachfrage sinkt, bleibt die Marge stabil.", "Talep düşse de marj sabit kalıyor."],
    ["Die Fixkosten sind hoch, wohingegen die variablen Kosten gering sind.", "Sabit maliyetler yüksek, oysa değişken maliyetler düşük."],
    ["Sofern keine Einwände bestehen, starten wir die Produktion am Montag.", "İtiraz olmadığı sürece üretimi pazartesi başlatıyoruz."],
    ["Die Lieferung verzögerte sich; folglich mussten wir die Linie stoppen.", "Teslimat gecikti; dolayısıyla hattı durdurmak zorunda kaldık."]
  ],
  ex: [
    { t: "mc", q: "Man kann viel Geld sparen, ___ man Angebote vergleicht.", o: ["indem", "sodass", "sofern", "wohingegen"], a: 0, ex: "Yol/araç → indem." },
    { t: "mc", q: "Der Motor überhitzte, ___ das Fahrzeug liegen blieb.", o: ["sodass", "indem", "obgleich", "sofern"], a: 0, ex: "Sonuç → sodass." },
    { t: "mc", q: "Die Ergebnisse sind gut. ___ gibt es Verbesserungspotenzial.", o: ["Dennoch", "Obgleich", "Sofern", "Indem"], a: 0, ex: "Zarf + fiil hemen sonra → Dennoch gibt es." },
    { t: "mc", q: "___ das Budget genehmigt wird, beginnen wir im Mai.", o: ["Sofern", "Wohingegen", "Folglich", "Dennoch"], a: 0, ex: "Koşul → sofern." },
    { t: "mc", q: "Diesel ist günstig, ___ Strom teurer ist.", o: ["wohingegen", "indem", "sodass", "dennoch"], a: 0, ex: "Zıtlık → wohingegen (fiil sonda)." },
    { t: "gap", q: "Die Firma hat Verluste gemacht; ___ wurden keine Dividenden gezahlt. (folglich)", a: ["folglich"], ex: "Sonuç zarfı." },
    { t: "mc", q: "Welcher Satz ist korrekt?", o: ["Darüber hinaus bietet das Modell mehr Platz.", "Darüber hinaus das Modell bietet mehr Platz.", "Darüber hinaus das Modell mehr Platz bietet.", "Darüber hinaus, das Modell bietet mehr Platz."], a: 0, ex: "Zarf 1. pozisyonda → fiil 2." },
    { t: "gap", q: "___ die Maschine alt ist, arbeitet sie präzise. (wenngleich)", a: ["wenngleich"], ex: "wenngleich = obwohl (resmî)." }
  ],
  vocab: [["die Marge", "kâr marjı"], ["die Fixkosten", "sabit maliyetler"], ["der Einwand", "itiraz"], ["genehmigen", "onaylamak"], ["das Verbesserungspotenzial", "iyileştirme potansiyeli"], ["überhitzen", "aşırı ısınmak"], ["der Verlust", "zarar, kayıp"], ["sich verzögern", "gecikmek"]],
  write: { task: "C1 tarzı tartışma metni (150–200 kelime): 'Sollten Unternehmen eine Vier-Tage-Woche einführen?' En az 6 farklı C1 bağlacı kullanın, giriş–argümanlar–karşı argümanlar–sonuç yapısına uyun.", hints: ["Die Frage, ob …, wird derzeit kontrovers diskutiert.", "Befürworter argumentieren, dass …, wohingegen …", "Sofern …, …", "Abschließend lässt sich festhalten, dass …"] }
}
]);
