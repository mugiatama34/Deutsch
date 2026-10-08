# Werkstatt Deutsch

Seviye tespit testi + kişiselleştirilmiş Almanca kursu (B1 → B2 → C1).
Açıklamalar Türkçe, örnekler otomotiv mühendisliği ve kişisel finans dünyasından.

## Nasıl çalışır?

1. **Einstufungstest** – 40 soru (her seviyeden 10: A2, B1, B2, C1). Bir seviyede %70 ve üzeri = o seviye sağlam.
   Her soru bir modüle bağlıdır; yanlış cevaplanan konular plana **„Lücke“** olarak girer ve öne alınır.
2. **Lernplan** – Test sonucuna göre haftada 2 modüllük plan. Hedef seviyenin modülleri + alt seviyedeki boşluklar.
3. **Module** (21 adet) – Türkçe teori, Almanca örnekler, 8 alıştırma (%75 = tamam), kelime listesi, yazma görevi.
   Claude içinde açıldığında yazma görevini Claude düzeltir.
4. **Wortschatz** – Leitner kartları ve der/die/das antrenmanı (cinsiyet kurallarıyla).

| Stufe | Module |
|---|---|
| Fundament (A2→B1) | Satzbau, Kasus, Präpositionen, Adjektivdeklination, Perfekt/Präteritum, Nebensätze, Verben mit Präpositionen |
| B2 | Passiv, Konjunktiv II, Relativsätze, Infinitivsätze, zweiteilige Konnektoren, Genitiv & n-Deklination, Futur & Vermutung |
| C1 | Nominalstil, Partizipialattribute, Konjunktiv I, Passiversatz, Nomen-Verb-Verbindungen, subjektive Modalverben, C1-Konnektoren |

## Yapı

- `index.html` – arayüz ve stil
- `js/test-data.js` – seviye testi
- `js/course-fundament.js`, `js/course-b2.js`, `js/course-c1.js` – kurs içeriği
- `js/app.js` – uygulama mantığı (test değerlendirme, plan, alıştırmalar, kartlar)

Yerelde: `npx serve .` ya da `index.html` dosyasını tarayıcıda açın. İlerleme tarayıcıda saklanır.
