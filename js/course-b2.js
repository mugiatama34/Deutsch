// Aufbau B2: die Strukturen, die B2-Prüfungen und den Berufsalltag tragen.
window.COURSE = (window.COURSE || []).concat([
{
  id: "m08", lvl: "B2", stage: "B2", title: "Passiv in allen Zeiten",
  goal: "Teknik süreç ve raporlarda pasifi tüm zamanlarda ve modal fiillerle kurmak.",
  theory: `
<p>Teknik Almanca pasifle yaşar: kimin yaptığı değil, <b>ne yapıldığı</b> önemlidir.</p>
<div class="scroll"><table><thead><tr><th>Zaman</th><th>Vorgangspassiv (süreç): werden + P II</th></tr></thead><tbody>
<tr><td>Präsens</td><td>Das Teil <b>wird</b> geprüft.</td></tr>
<tr><td>Präteritum</td><td>Das Teil <b>wurde</b> geprüft.</td></tr>
<tr><td>Perfekt</td><td>Das Teil <b>ist</b> geprüft <b>worden</b>. (geworden değil!)</td></tr>
<tr><td>Plusquamperfekt</td><td>Das Teil <b>war</b> geprüft <b>worden</b>.</td></tr>
<tr><td>Futur</td><td>Das Teil <b>wird</b> geprüft <b>werden</b>.</td></tr>
<tr><td>mit Modalverb</td><td>Das Teil <b>muss</b> geprüft <b>werden</b>.</td></tr>
<tr><td>Modal + Präteritum</td><td>Das Teil <b>musste</b> geprüft <b>werden</b>.</td></tr>
<tr><td>Nebensatz</td><td>…, dass das Teil geprüft werden <b>muss</b>.</td></tr>
</tbody></table></div>
<p><b>Yapan kişi/neden:</b> <b>von</b> + Dativ (kişi, kurum): <i>von dem Ingenieur</i>; <b>durch</b> + Akk (araç, süreç): <i>durch einen Kurzschluss</i>.</p>
<p><b>Zustandspassiv (durum): sein + P II</b> – sürecin sonucu: <i>Das Teil <b>ist</b> geprüft.</i> (test edilmiş durumda) ↔ <i>Das Teil <b>wird</b> geprüft.</i> (şu an test ediliyor).</p>
<p><b>Öznesiz pasif:</b> Akk nesne yoksa özne de yoktur: <i>Hier <b>wird</b> nicht geraucht. / Dem Kunden <b>wurde</b> geholfen.</i> (Dativ pasifte Dativ kalır!)</p>`,
  examples: [
    ["Die Bremsen werden bei jedem Fahrzeug einzeln getestet.", "Frenler her araçta tek tek test edilir."],
    ["Der Fehler ist durch eine falsche Kalibrierung verursacht worden.", "Hata yanlış bir kalibrasyon nedeniyle oluşmuştur."],
    ["Die Dividende soll im Mai ausgezahlt werden.", "Temettünün mayısta ödenmesi planlanıyor."],
    ["Das Werk ist seit Montag geschlossen.", "Fabrika pazartesiden beri kapalı."]
  ],
  ex: [
    { t: "gap", q: "Die Schweißnähte ___ jeden Tag kontrolliert. (Präsens)", a: ["werden"], ex: "Çoğul özne → werden." },
    { t: "gap", q: "Das neue Modell ist letztes Jahr vorgestellt ___.", a: ["worden"], ex: "Perfekt Passiv: ist … worden." },
    { t: "mc", q: "Die Daten müssen bis morgen ___.", o: ["ausgewertet werden", "ausgewertet worden", "auswerten werden", "ausgewertet sein werden"], a: 0, ex: "Modal + P II + werden." },
    { t: "mc", q: "Der Schaden wurde ___ einen Wasserrohrbruch verursacht.", o: ["durch", "von", "mit", "bei"], a: 0, ex: "Neden/olay → durch." },
    { t: "mc", q: "Dem Mitarbeiter ___ gekündigt.", o: ["wurde", "wurden", "ist", "hat"], a: 0, ex: "Dativ pasif, özne yok → 3. tekil: wurde." },
    { t: "mc", q: "Achtung, die Tür ___ frisch gestrichen! (Zustand)", o: ["ist", "wird", "wurde", "hat"], a: 0, ex: "Sonuç durumu → sein." },
    { t: "gap", q: "Mir wurde gesagt, dass der Termin verschoben ___ ist. (Perfekt)", a: ["worden"], ex: "Yan cümlede: verschoben worden ist." },
    { t: "mc", q: "Aktiv → Passiv: 'Man hat die Anlage modernisiert.'", o: ["Die Anlage ist modernisiert worden.", "Die Anlage hat modernisiert worden.", "Die Anlage wurde modernisiert worden.", "Die Anlage ist modernisiert geworden."], a: 0, ex: "Perfekt Passiv: ist + P II + worden." }
  ],
  vocab: [["die Schweißnaht", "kaynak dikişi"], ["die Kalibrierung", "kalibrasyon"], ["auswerten", "değerlendirmek (veri)"], ["verursachen", "neden olmak"], ["die Dividende", "temettü"], ["auszahlen", "ödemek"], ["der Schaden", "hasar"], ["vorstellen", "tanıtmak"]],
  write: { task: "Bildiğiniz bir üretim sürecini (ör. bir parçanın boyanması veya montajı) pasifle 6 adımda anlatın. En az bir Modal-Passiv ve bir Perfekt-Passiv kullanın.", hints: ["Zuerst wird das Blech …", "Danach müssen die Teile … werden.", "Zum Schluss ist das Fahrzeug … worden."] }
},
{
  id: "m09", lvl: "B2", stage: "B2", title: "Konjunktiv II: höflich, irreal, hypothetisch",
  goal: "Nazik rica, gerçek dışı koşul, tavsiye ve geçmişe dair pişmanlığı ifade etmek.",
  theory: `
<p><b>Biçim:</b> Çoğu fiil için <b>würde + Infinitiv</b>. Ama şu fiiller kendi formuyla kullanılır: <b>wäre, hätte, könnte, müsste, dürfte, sollte, wollte</b>, ayrıca sık: <b>käme, ginge, wüsste, bräuchte, gäbe, ließe</b>.</p>
<table><thead><tr><th>Kullanım</th><th>Örnek</th></tr></thead><tbody>
<tr><td>Nazik rica</td><td><b>Könnten</b> Sie mir die Unterlagen schicken? <b>Hätten</b> Sie kurz Zeit?</td></tr>
<tr><td>Tavsiye</td><td>Du <b>solltest</b> diversifizieren. An deiner Stelle <b>würde</b> ich …</td></tr>
<tr><td>Dilek</td><td><b>Wenn</b> ich nur mehr Zeit <b>hätte</b>! / Ich <b>wäre</b> gern …</td></tr>
<tr><td>Gerçek dışı koşul</td><td>Wenn der Zins höher <b>wäre</b>, <b>würde</b> ich sparen.</td></tr>
<tr><td>Gerçek dışı karşılaştırma</td><td>Er tut so, als ob er alles <b>wüsste</b>. / … als <b>wüsste</b> er alles.</td></tr>
</tbody></table>
<p><b>Geçmiş (Vergangenheit):</b> <b>hätte/wäre + Partizip II</b>: <i>Wenn wir früher getestet <b>hätten</b>, <b>wäre</b> der Fehler nicht <b>passiert</b>.</i></p>
<p><b>Geçmiş + Modal (çift mastar):</b> <i>Wir <b>hätten</b> früher testen <b>sollen</b>.</i> (test etmeliydik) – Yan cümlede: <i>…, dass wir früher <b>hätten</b> testen sollen.</i> (hätte çift mastarın <em>önünde</em>!)</p>
<p class="tip">wenn'siz koşul (yazı dili): fiil başa gelir: <i><b>Hätte</b> ich das gewusst, wäre ich gekommen.</i></p>`,
  examples: [
    ["Wenn ich damals in den Index investiert hätte, wäre mein Depot heute doppelt so groß.", "O zaman endekse yatırım yapsaydım, portföyüm bugün iki kat büyük olurdu."],
    ["Könnten Sie mir bitte bis Freitag Bescheid geben?", "Bana cuma gününe kadar haber verebilir misiniz lütfen?"],
    ["Wir hätten die Toleranzen enger auslegen müssen.", "Toleransları daha dar tasarlamamız gerekirdi."],
    ["An Ihrer Stelle würde ich das Angebot noch einmal prüfen.", "Yerinizde olsam teklifi bir kez daha incelerdim."]
  ],
  ex: [
    { t: "gap", q: "Wenn ich du ___, würde ich die Stelle annehmen. (sein)", a: ["wäre"], ex: "sein → wäre." },
    { t: "gap", q: "___ Sie mir bitte helfen? (können, höflich)", a: ["könnten"], ex: "Sie → könnten." },
    { t: "mc", q: "Wenn der Zug pünktlich gewesen wäre, ___ ich den Termin geschafft.", o: ["hätte", "wäre", "würde", "habe"], a: 0, ex: "schaffen → haben ile Perfekt → hätte … geschafft." },
    { t: "mc", q: "Wir ___ früher reagieren sollen.", o: ["hätten", "wären", "würden", "haben"], a: 0, ex: "Geçmiş + Modal: hätten + reagieren sollen." },
    { t: "mc", q: "Er redet, als ___ er der Chef.", o: ["wäre", "ist", "sei", "würde"], a: 0, ex: "als + Konj II + fiil hemen sonra." },
    { t: "mc", q: "Ich weiß, dass ich mehr ___.", o: ["hätte üben müssen", "üben müssen hätte", "hätte müssen üben", "geübt hätte müssen"], a: 0, ex: "Çift mastarlı yan cümle: hätte en önde: hätte üben müssen." },
    { t: "gap", q: "___ ich das gewusst, hätte ich anders entschieden. (haben)", a: ["hätte"], ex: "wenn'siz koşul: fiil başta." },
    { t: "gap", q: "Du ___ mehr Sport machen. (sollen, Ratschlag)", a: ["solltest"], ex: "Tavsiye: du solltest." }
  ],
  vocab: [["diversifizieren", "çeşitlendirmek"], ["das Depot", "portföy hesabı"], ["Bescheid geben", "haber vermek"], ["die Toleranz", "tolerans"], ["auslegen", "tasarlamak, boyutlandırmak"], ["die Stelle", "pozisyon, iş yeri"], ["annehmen", "kabul etmek"], ["die Rendite", "getiri"]],
  write: { task: "'Wenn ich 100.000 Euro hätte …' konulu 6–8 cümlelik bir metin yazın. Bir de geçmişe dair pişmanlık cümlesi (hätte … sollen) ekleyin.", hints: ["Wenn ich 100.000 Euro hätte, würde ich zuerst …", "Ich würde nicht alles in … stecken, sondern …", "Rückblickend hätte ich früher … sollen."] }
},
{
  id: "m10", lvl: "B2", stage: "B2", title: "Relativsätze: der, dem, dessen, wo, was",
  goal: "Bilgiyi tek cümlede yoğunlaştırmak: edatlı ve Genitiv'li ilgi cümleleri kurmak.",
  theory: `
<p><b>İki soru, iki karar:</b> (1) Cinsiyet ve sayı → <b>öncül isimden</b>. (2) Hal → <b>yan cümledeki fiil/edattan</b>.</p>
<div class="scroll"><table class="cases"><thead><tr><th></th><th>m</th><th>f</th><th>n</th><th>Pl</th></tr></thead><tbody>
<tr><th class="k-nom">Nom</th><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><th class="k-akk">Akk</th><td>den</td><td>die</td><td>das</td><td>die</td></tr>
<tr><th class="k-dat">Dat</th><td>dem</td><td>der</td><td>dem</td><td><b>denen</b></td></tr>
<tr><th class="k-gen">Gen</th><td><b>dessen</b></td><td><b>deren</b></td><td><b>dessen</b></td><td><b>deren</b></td></tr>
</tbody></table></div>
<p><b>Edatlı:</b> edat ilgi zamirinin önüne gelir: <i>Das Projekt, <b>an dem</b> ich arbeite, … / Die Kollegen, <b>mit denen</b> ich …</i></p>
<p><b>Genitiv:</b> <i>Der Lieferant, <b>dessen</b> Teile fehlerhaft waren, …</i> (onun parçaları). dessen/deren'den sonraki isim kendi artikelini kaybeder.</p>
<p><b>was:</b> alles, nichts, etwas, vieles, das (-Pronomen), en üstünlük ve tüm cümleye atıf: <i>Das ist alles, <b>was</b> ich weiß. / Er hat gekündigt, <b>was</b> alle überrascht hat.</i></p>
<p><b>wo:</b> yer ve şehir/ülke: <i>Stuttgart, <b>wo</b> ich wohne, …</i> Edatlı fiillerde wo(r)+edat: <i>Das ist etwas, <b>worüber</b> ich nachdenke.</i></p>
<p><b>wer … (der):</b> genel kişi: <i><b>Wer</b> früh investiert, (der) profitiert vom Zinseszins.</i></p>`,
  examples: [
    ["Der Sensor, den wir letzte Woche eingebaut haben, liefert falsche Werte.", "Geçen hafta taktığımız sensör yanlış değerler veriyor."],
    ["Das ist die Kollegin, mit der ich das Projekt leite.", "Bu, projeyi birlikte yönettiğim meslektaş."],
    ["Unternehmen, deren Schulden stark steigen, sind riskant.", "Borçları hızla artan şirketler risklidir."],
    ["Wer langfristig denkt, lässt sich von Kursschwankungen nicht beunruhigen.", "Uzun vadeli düşünen, kur dalgalanmalarından tedirgin olmaz."]
  ],
  ex: [
    { t: "gap", q: "Der Kunde, ___ wir das Angebot geschickt haben, hat abgesagt.", a: ["dem"], ex: "schicken jdm → Dativ, maskulin." },
    { t: "gap", q: "Die Maschinen, mit ___ wir arbeiten, sind 20 Jahre alt.", a: ["denen"], ex: "mit + Dativ çoğul → denen." },
    { t: "gap", q: "Der Ingenieur, ___ Idee umgesetzt wurde, bekam einen Preis.", a: ["dessen"], ex: "Sahiplik, maskulin → dessen." },
    { t: "mc", q: "Das Beste, ___ du tun kannst, ist früh anzufangen.", o: ["was", "das", "dass", "welches"], a: 0, ex: "En üstünlük (das Beste) → was." },
    { t: "mc", q: "Das ist das Werk, ___ ich meine Ausbildung gemacht habe.", o: ["in dem", "in das", "wo das", "worin das"], a: 0, ex: "Konum → in dem (veya wo)." },
    { t: "mc", q: "Es gibt nichts, ___ ich mich mehr freue als auf den Urlaub.", o: ["worauf", "auf das", "was", "darauf"], a: 0, ex: "nichts + sich freuen auf → worauf." },
    { t: "mc", q: "Die Firma, ___ Aktien ich gekauft habe, zahlt eine hohe Dividende.", o: ["deren", "dessen", "die", "der"], a: 0, ex: "die Firma (f) → deren." },
    { t: "gap", q: "Die Projekte, an ___ ich beteiligt war, waren erfolgreich.", a: ["denen"], ex: "beteiligt an + Dativ çoğul." }
  ],
  vocab: [["einbauen", "monte etmek, takmak"], ["umsetzen", "uygulamaya koymak"], ["die Schulden", "borçlar"], ["die Kursschwankung", "kur dalgalanması"], ["der Zinseszins", "bileşik faiz"], ["absagen", "iptal etmek"], ["beteiligt sein an", "katılmış olmak, payı olmak"], ["die Ausbildung", "mesleki eğitim"]],
  write: { task: "Şirketinizi veya bir hisse senedini tanıtın: 5 cümle, her birinde farklı bir ilgi zamiri (den, dem, dessen/deren, mit dem/denen, was).", hints: ["Ich arbeite bei einer Firma, die …", "…, deren Umsatz …", "…, was mich besonders überzeugt."] }
},
{
  id: "m11", lvl: "B2", stage: "B2", title: "Infinitivsätze: zu, um … zu, ohne … zu, statt … zu",
  goal: "Mastarlı yapılarla akıcı ve kısa cümleler kurmak.",
  theory: `
<p><b>zu + Infinitiv</b> şu kalıplardan sonra: vergessen, versuchen, beginnen, planen, vorhaben, empfehlen, bitten, es ist wichtig/möglich/schwer, Lust/Zeit/die Absicht haben…</p>
<p><b>Ayrılabilen fiilde</b> zu ortaya girer: an<b>zu</b>fangen, ein<b>zu</b>kaufen. <b>Modal fiillerle ve</b> lassen, sehen, hören, gehen, bleiben ile <b>zu yok</b>.</p>
<table><thead><tr><th>Yapı</th><th>Anlam</th><th>Özneler farklıysa</th></tr></thead><tbody>
<tr><td><b>um … zu</b></td><td>amaç (-mek için)</td><td>damit</td></tr>
<tr><td><b>ohne … zu</b></td><td>-meden</td><td>ohne dass</td></tr>
<tr><td><b>(an)statt … zu</b></td><td>-mek yerine</td><td>(an)statt dass</td></tr>
</tbody></table>
<p><b>Geçmiş mastar:</b> <i>Ich bin froh, die Prüfung bestanden <b>zu haben</b>. / Er behauptet, pünktlich gekommen <b>zu sein</b>.</i></p>
<p><b>Pasif mastar:</b> <i>Ich hoffe, befördert <b>zu werden</b>.</i> / geçmiş: <i>Das Teil scheint beschädigt <b>worden zu sein</b>.</i></p>
<p class="tip">Sık hata: <i>„Ich gehe nach Deutschland für zu arbeiten“</i> ✗ → <b>um</b> in Deutschland <b>zu</b> arbeiten ✓. Türkçe '-mek için' = um … zu.</p>`,
  examples: [
    ["Wir haben vor, das Werk bis 2028 klimaneutral zu machen.", "Fabrikayı 2028'e kadar iklim nötr hale getirmeyi planlıyoruz."],
    ["Um Kosten zu sparen, kaufen wir die Teile in größeren Mengen ein.", "Maliyet tasarrufu için parçaları daha büyük miktarlarda alıyoruz."],
    ["Er hat das Projekt verlassen, ohne die Dokumentation abzuschließen.", "Belgelemeyi bitirmeden projeden ayrıldı."],
    ["Statt das Geld auf dem Girokonto liegen zu lassen, investiere ich es.", "Parayı vadesiz hesapta bekletmek yerine yatırıyorum."]
  ],
  ex: [
    { t: "gap", q: "Es ist wichtig, die Sicherheitsregeln ___ beachten.", a: ["zu"], ex: "es ist wichtig + zu." },
    { t: "gap", q: "Vergiss nicht, die Maschine ___. (abschalten)", a: ["abzuschalten"], ex: "Ayrılabilen: ab-zu-schalten." },
    { t: "mc", q: "Ich lerne Deutsch, ___ beruflich weiterzukommen.", o: ["um", "damit", "für", "ohne"], a: 0, ex: "Amaç, aynı özne → um … zu." },
    { t: "mc", q: "Ich erkläre es dir noch einmal, ___ du es verstehst.", o: ["damit", "um", "ohne", "statt"], a: 0, ex: "Özneler farklı (ich / du) → damit." },
    { t: "mc", q: "Er hat unterschrieben, ___ den Vertrag zu lesen.", o: ["ohne", "um", "statt dass", "damit"], a: 0, ex: "-meden → ohne … zu." },
    { t: "mc", q: "Wir müssen das Problem ___.", o: ["lösen", "zu lösen", "gelöst", "lösen zu"], a: 0, ex: "Modal fiil → zu yok." },
    { t: "gap", q: "Ich freue mich, Sie kennengelernt zu ___.", a: ["haben"], ex: "Geçmiş mastar: kennengelernt zu haben." },
    { t: "gap", q: "Er hofft, nächstes Jahr befördert zu ___.", a: ["werden"], ex: "Pasif mastar: befördert zu werden." }
  ],
  vocab: [["vorhaben", "planlamak, niyet etmek"], ["klimaneutral", "iklim nötr"], ["einkaufen", "satın almak (şirket)"], ["das Girokonto", "vadesiz hesap"], ["befördern", "terfi ettirmek"], ["beachten", "dikkate almak"], ["abschalten", "kapatmak"], ["weiterkommen", "ilerlemek"]],
  write: { task: "Gelecek 2 yıl için hedeflerinizi yazın (6 cümle): um…zu, ohne…zu, statt…zu ve 'Ich habe vor, …' kullanın.", hints: ["Ich habe vor, …", "Um … zu …, werde ich …", "Statt nur … zu …, möchte ich …"] }
},
{
  id: "m12", lvl: "B2", stage: "B2", title: "Zweiteilige Konnektoren & je … desto",
  goal: "Argümanları dengeli ve bağlantılı kurmak (B2 yazma/konuşma sınavının belkemiği).",
  theory: `
<table><thead><tr><th>Konnektor</th><th>Anlam</th><th>Örnek</th></tr></thead><tbody>
<tr><td><b>sowohl … als auch</b></td><td>hem … hem de</td><td>sowohl Benziner als auch E-Autos</td></tr>
<tr><td><b>nicht nur … sondern auch</b></td><td>sadece … değil, aynı zamanda</td><td>nicht nur günstig, sondern auch sicher</td></tr>
<tr><td><b>weder … noch</b></td><td>ne … ne de</td><td>weder Zeit noch Geld</td></tr>
<tr><td><b>entweder … oder</b></td><td>ya … ya da</td><td>Entweder wir senken die Kosten, oder …</td></tr>
<tr><td><b>zwar … aber</b></td><td>gerçi … ama</td><td>Das ist zwar teuer, aber es lohnt sich.</td></tr>
<tr><td><b>einerseits … andererseits</b></td><td>bir yandan … öte yandan</td><td>tartışma metinleri</td></tr>
<tr><td><b>je … desto/umso</b></td><td>ne kadar … o kadar</td><td>Je länger, desto besser.</td></tr>
</tbody></table>
<p><b>je … desto kelime sırası:</b> <i><b>Je</b> + karşılaştırma + … + fiil (sonda), <b>desto</b> + karşılaştırma + <b>fiil</b> + özne …</i></p>
<p><i>Je früher man <b>anfängt</b>, desto mehr <b>profitiert</b> man vom Zinseszins.</i></p>
<p class="tip">'zwar' 2. kısımda 'aber' ister; 'einerseits' ise 'andererseits' (yanında genelde 'aber' de olabilir).</p>`,
  examples: [
    ["Das neue Modell ist nicht nur sparsamer, sondern auch leiser.", "Yeni model sadece daha tasarruflu değil, aynı zamanda daha sessiz."],
    ["Je höher das Risiko, desto höher die erwartete Rendite.", "Risk ne kadar yüksekse beklenen getiri de o kadar yüksek."],
    ["Einerseits bietet die Firma ein gutes Gehalt, andererseits sind die Arbeitszeiten lang.", "Bir yandan şirket iyi maaş veriyor, öte yandan çalışma saatleri uzun."],
    ["Wir haben weder genug Personal noch die passenden Werkzeuge.", "Ne yeterli personelimiz ne de uygun aletlerimiz var."]
  ],
  ex: [
    { t: "mc", q: "Ich spreche ___ Türkisch ___ Deutsch und Englisch.", o: ["sowohl – als auch", "weder – noch", "zwar – aber", "je – desto"], a: 0, ex: "hem … hem → sowohl … als auch." },
    { t: "gap", q: "Das Auto ist zwar alt, ___ es fährt zuverlässig.", a: ["aber"], ex: "zwar … aber." },
    { t: "mc", q: "Je mehr wir testen, ___", o: ["desto weniger Fehler finden die Kunden.", "desto die Kunden finden weniger Fehler.", "desto weniger Fehler die Kunden finden.", "weniger Fehler finden die Kunden."], a: 0, ex: "desto + karşılaştırma + fiil + özne." },
    { t: "mc", q: "___ du kommst pünktlich, ___ wir fangen ohne dich an.", o: ["Entweder – oder", "Weder – noch", "Sowohl – als auch", "Zwar – aber"], a: 0, ex: "Ya … ya da → entweder … oder." },
    { t: "gap", q: "Er hat ___ angerufen noch eine E-Mail geschrieben.", a: ["weder"], ex: "weder … noch." },
    { t: "gap", q: "Diese Aktie ist nicht nur riskant, ___ auch teuer.", a: ["sondern"], ex: "nicht nur … sondern auch." },
    { t: "mc", q: "Je ___ das Wetter ist, desto mehr Leute fahren Rad.", o: ["besser", "gut", "am besten", "guter"], a: 0, ex: "je + Komparativ." },
    { t: "gap", q: "Einerseits will ich sparen, ___ möchte ich reisen.", a: ["andererseits"], ex: "einerseits … andererseits (fiil hemen sonra)." }
  ],
  vocab: [["sparsam", "tasarruflu"], ["sich lohnen", "değmek"], ["das Personal", "personel"], ["das Risiko", "risk"], ["erwartet", "beklenen"], ["der Benziner", "benzinli araç"], ["profitieren von", "yararlanmak"], ["zuverlässig", "güvenilir"]],
  write: { task: "'Elektroauto oder Verbrenner?' konusunda 8 cümlelik bir görüş metni yazın. En az 4 farklı iki parçalı bağlaç ve bir je … desto kullanın.", hints: ["Einerseits …, andererseits …", "E-Autos sind zwar …, aber …", "Je mehr Ladestationen …, desto …"] }
},
{
  id: "m13", lvl: "B2", stage: "B2", title: "Genitiv & n-Deklination",
  goal: "Resmî yazıda Genitiv'i ve 'der Kunde → den Kunden' tipini hatasız kullanmak.",
  theory: `
<p><b>Genitiv formları:</b> des/eines + isim<b>-(e)s</b> (m/n), der/einer (f, Pl). <i>des Motors, des Werkes, der Abteilung, der Kunden.</i></p>
<p><b>Genitiv edatları</b> (resmî dilde çok sık): wegen, trotz, während, aufgrund, infolge, innerhalb, außerhalb, anstelle, bezüglich, hinsichtlich, mithilfe, angesichts.</p>
<p>Konuşmada <i>von + Dativ</i> sık kullanılır (<i>das Auto von meinem Bruder</i>), ama B2/C1 yazıda Genitiv beklenir.</p>
<p><b>n-Deklination:</b> Bazı <b>maskulin</b> isimler Nominativ dışında her yerde <b>-(e)n</b> alır:</p>
<ul><li><b>-e ile biten canlılar:</b> der Kunde, Kollege, Junge, Experte, Franzose, Türke, Neffe</li>
<li><b>yabancı son ekler:</b> -ent (Student, Präsident), -ant (Lieferant, Praktikant), -ist (Journalist, Polizist), -oge (Biologe), -at (Kandidat, Automat), -graf (Fotograf)</li>
<li><b>birkaç tek:</b> der Mensch, Herr (-n, Pl. -en), Nachbar, Bauer, Bär</li></ul>
<p><i>Ich habe <b>den Kunden</b> angerufen. / mit <b>dem Kollegen</b> / das Büro <b>des Präsidenten</b></i></p>
<p class="tip">Özel durum: der Name, Gedanke, Glaube, Wille → Genitiv'de <b>-ns</b>: des Namens, des Gedankens.</p>`,
  examples: [
    ["Aufgrund des starken Wettbewerbs müssen wir die Preise senken.", "Güçlü rekabet nedeniyle fiyatları düşürmeliyiz."],
    ["Innerhalb eines Jahres hat sich der Umsatz verdoppelt.", "Bir yıl içinde ciro iki katına çıktı."],
    ["Der Praktikant hat dem Experten eine Frage gestellt.", "Stajyer uzmana bir soru sordu."],
    ["Während der Testphase dürfen keine Änderungen vorgenommen werden.", "Test aşaması boyunca değişiklik yapılamaz."]
  ],
  ex: [
    { t: "gap", q: "Trotz ___ Regens fand das Event statt. (der)", a: ["des"], ex: "trotz + Genitiv, maskulin." },
    { t: "gap", q: "Die Leistung ___ Motors ist beeindruckend. (der)", a: ["des"], ex: "Genitiv m: des Motors." },
    { t: "mc", q: "Ich habe gestern mit dem ___ gesprochen.", o: ["Präsidenten", "Präsident", "Präsidents", "Präsidente"], a: 0, ex: "-ent → n-Deklination." },
    { t: "mc", q: "Kennst du den neuen ___?", o: ["Kollegen", "Kollege", "Kolleges", "Kollegem"], a: 0, ex: "der Kollege → den Kollegen." },
    { t: "mc", q: "___ der Pandemie arbeiteten viele im Homeoffice.", o: ["Während", "Seit", "Nach dem", "Bei"], a: 0, ex: "während + Genitiv." },
    { t: "gap", q: "Wir müssen das Problem innerhalb ___ Woche lösen. (eine)", a: ["einer"], ex: "innerhalb + Genitiv, feminin." },
    { t: "mc", q: "Das ist das Auto ___", o: ["meines Nachbarn", "meinem Nachbar", "meines Nachbars", "mein Nachbar"], a: 0, ex: "Nachbar → n-Deklination: des Nachbarn." },
    { t: "mc", q: "Der Name ___ ist mir entfallen.", o: ["des Lieferanten", "des Lieferants", "der Lieferant", "dem Lieferant"], a: 0, ex: "Lieferant (-ant) → des Lieferanten." }
  ],
  vocab: [["der Wettbewerb", "rekabet"], ["sich verdoppeln", "iki katına çıkmak"], ["die Testphase", "test aşaması"], ["vornehmen", "yapmak, gerçekleştirmek (resmî)"], ["der Experte", "uzman"], ["der Praktikant", "stajyer"], ["hinsichtlich (+G)", "bakımından"], ["angesichts (+G)", "karşısında, göz önüne alındığında"]],
  write: { task: "Kısa bir iç rapor yazın (5 cümle): bir projedeki gecikmeyi aufgrund, trotz, während, innerhalb ile açıklayın ve en az iki n-Deklination ismi kullanın (Kunde, Lieferant, Kollege …).", hints: ["Aufgrund des … hat sich das Projekt verzögert.", "Trotz der Unterstützung des Lieferanten …", "Innerhalb der nächsten … werden wir …"] }
},
{
  id: "m14", lvl: "B2", stage: "B2", title: "Futur I & II, Vermutungen",
  goal: "Plan, tahmin ve olasılık derecelerini ifade etmek.",
  theory: `
<p><b>Futur I:</b> werden + Infinitiv. Almanlar gelecek için çoğu zaman <b>Präsens + zaman ifadesi</b> kullanır (<i>Morgen fahre ich.</i>). Futur I asıl olarak <b>söz, kehanet</b> ve <b>şimdiki zamana dair tahmin</b> içindir:</p>
<ul><li><i>Ich <b>werde</b> das bis Freitag <b>erledigen</b>.</i> (söz)</li>
<li><i>Er <b>wird</b> (wohl) im Meeting <b>sein</b>.</i> (muhtemelen toplantıdadır)</li></ul>
<p><b>Futur II:</b> werden + Partizip II + haben/sein. (1) Gelecekte tamamlanmış: <i>Bis 2030 <b>werden</b> wir die Produktion umgestellt <b>haben</b>.</i> (2) <b>Geçmişe dair tahmin</b>: <i>Er <b>wird</b> den Zug verpasst <b>haben</b>.</i> (muhtemelen treni kaçırmıştır)</p>
<p><b>Olasılık skalası</b> (zarflarla):</p>
<table><thead><tr><th>Kesinlik</th><th>Zarf</th></tr></thead><tbody>
<tr><td>~100%</td><td>bestimmt, sicher(lich), zweifellos</td></tr>
<tr><td>~80%</td><td>wahrscheinlich, vermutlich, wohl</td></tr>
<tr><td>~50%</td><td>vielleicht, möglicherweise, eventuell</td></tr>
</tbody></table>
<p>Modal fiillerle tahmin için bkz. C1 modülü m20.</p>`,
  examples: [
    ["Die Zentralbank wird die Zinsen voraussichtlich im Herbst senken.", "Merkez bankası faizleri muhtemelen sonbaharda düşürecek."],
    ["Bis Jahresende werden wir alle Prototypen getestet haben.", "Yıl sonuna kadar tüm prototipleri test etmiş olacağız."],
    ["Sie ist nicht da – sie wird wohl schon nach Hause gegangen sein.", "Burada değil – muhtemelen eve gitmiştir."],
    ["Ich werde mich nächste Woche darum kümmern, versprochen!", "Gelecek hafta bununla ilgileneceğim, söz!"]
  ],
  ex: [
    { t: "gap", q: "Keine Sorge, ich ___ dir morgen helfen. (Futur I)", a: ["werde"], ex: "Söz → ich werde." },
    { t: "mc", q: "Er antwortet nicht. Er ___ wohl krank sein.", o: ["wird", "ist", "würde", "hat"], a: 0, ex: "Şimdiye dair tahmin: wird … sein." },
    { t: "mc", q: "Bis Montag werden wir den Bericht fertiggestellt ___.", o: ["haben", "sein", "werden", "hatten"], a: 0, ex: "Futur II: … fertiggestellt haben." },
    { t: "mc", q: "Der Zug ist weg. Er wird schon abgefahren ___.", o: ["sein", "haben", "werden", "worden"], a: 0, ex: "abfahren → sein ile Perfekt → Futur II mit sein." },
    { t: "mc", q: "Welches Wort drückt die größte Sicherheit aus?", o: ["zweifellos", "vermutlich", "vielleicht", "eventuell"], a: 0, ex: "zweifellos ≈ %100." },
    { t: "gap", q: "Er ___ den Termin wohl vergessen haben.", a: ["wird"], ex: "Futur II: wird … vergessen haben." },
    { t: "mc", q: "Natürlichste Form: 'Yarın Münih'e gidiyorum.'", o: ["Morgen fahre ich nach München.", "Morgen werde ich nach München fahren werden.", "Morgen ich fahre nach München.", "Ich werde morgen nach München gefahren."], a: 0, ex: "Gelecek planı → Präsens + zaman." },
    { t: "gap", q: "Die Preise werden ___ weiter steigen. (wahrscheinlich)", a: ["wahrscheinlich"], ex: "Tahmin zarfı." }
  ],
  vocab: [["voraussichtlich", "öngörülene göre"], ["die Zentralbank", "merkez bankası"], ["der Prototyp", "prototip"], ["umstellen", "dönüştürmek, geçiş yapmak"], ["erledigen", "halletmek"], ["vermutlich", "tahminen"], ["zweifellos", "şüphesiz"], ["die Prognose", "tahmin, öngörü"]],
  write: { task: "2035'te otomotiv sektörü nasıl olacak? 6 cümlelik bir tahmin metni (Futur I + II, en az 3 olasılık zarfı).", hints: ["Bis 2035 werden die meisten Hersteller … umgestellt haben.", "Vermutlich wird …", "Zweifellos …"] }
}
]);
