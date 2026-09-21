# Content corrections: v11 design copy vs. verified research

The `Arsu v11` design carries genuinely good editorial writing, and most of it
survives intact. The items below are places where the design's copy states
something that the verified research contradicts. Each one was changed in the
build. Sources are in `research/cities/*.md` and `research/travel-status.md`.

Nothing here is a criticism of the design — a mock is supposed to be written
before the facts are checked. This is the check.

---

## 1. Visa guidance was backwards — highest-impact error

**Design copy:** "Do I need a visa? Almost certainly yes, and for most
passports it is arranged **in advance rather than on arrival**. We issue the
invitation letter and booking confirmation that the application asks for…
Allow four to six weeks."

**Verified:** Syria operates a **reciprocity-based visa-on-arrival system at
both airports and land borders for the majority of visitors**. No
tour-operator sponsorship or letter-of-invitation requirement was found in any
source reviewed (FCDO, In Your Pocket, Government of Canada) for ordinary
tourist entry. A specific list of nationalities does need pre-approval
(3–4 weeks). E-visa status is genuinely contradictory between sources and is
presented as unresolved rather than settled.

**Why it matters:** this is the single most consequential kind of error a
travel site can publish. A reader could plan six weeks around it.

---

## 2. The Syrian pound was redenominated in January 2026

**Design:** `SYP: { rate: 13000 }` in the currency switcher.

**Verified:** The Central Bank of Syria **cut two zeros** from the pound.
100 old pounds = 1 new pound. New banknotes entered circulation on
1 January 2026, public circulation 3 January 2026. A rate of 13,000 is the
pre-redenomination currency.

**Change:** rate corrected to the new-pound order of magnitude, and *every*
converted figure on the site is now labelled indicative rather than quoted as
a live rate.

---

## 3. "Is it safe?" answered too confidently

**Design copy:** "In the regions we run, on the roads we use, with a local
guide: **yes**…"

**Verified:** The US State Department (Level 4, Do Not Travel), UK FCDO
(advises against all travel, page updated 2 September 2026), Germany,
Australia and Canada **all** maintain their highest formal risk tier for
Syria as a whole. None publishes a "safe zone" carve-out at summary level.

**Change:** the answer now leads with what the advisories actually say and
what that means for insurance and consular help, and does not issue a verdict
on the reader's behalf. The design's own good instinct — "that is not a
blanket statement about the country" — is kept and strengthened.

---

## 4. Palmyra — the museum is closed

**Design copy:** "the colonnade at dawn before the heat, **the museum's
recovered fragments**, and a night under the desert sky."

**Verified:** The Palmyra Museum **remains closed to visitors**. The building
was damaged by shelling; an ALIPH-funded restoration was expected to begin
January 2026, with wider site rehabilitation estimated at six to seven years.

**Change:** museum reference removed. The colonnade reference is kept — the
Great Colonnade is largely standing and is the correct thing to point at.

**Also fixed:** the photograph. A genuine Palmyra shot showing the
**Tetrapylon** was rejected, because 12 of its 16 columns were toppled in
January 2017; publishing it as current would misrepresent the site.

---

## 5. Krak des Chevaliers — superlative softened

**Design copy:** "the **best-preserved crusader castle anywhere**."

**Verified:** The castle took direct war damage — August 2012 shelling damaged
the chapel; further shelling and a July 2013 airstrike damaged towers, the
Hall of the Knights' staircase and carved elements. It is a joint UNESCO
inscription (2006, with Qal'at Salah El-Din) and has been on the Danger List
since 2013.

**Change:** reads as one of the best-preserved, with the damage and the
restoration stated plainly.

---

## 6. Apamea — "usually empty except for shepherds"

**Design copy** presents Apamea as romantically deserted.

**Verified:** Apamea suffered **extensive, satellite-documented looting** after
2011. The standing colonnade and theatre are intact, but the emptiness is not
picturesque — it is the aftermath of the site being dug over.

**Change:** the quiet is still described, because it is real, but the looting
is named rather than aestheticised.

---

## 7. Bosra — "near intact"

**Verified:** The Roman theatre was restored 1947–1970, and September 2026
reporting describes restoration as complete. But Bosra is in Daraa
Governorate, was a battleground, and UNESCO documented specific war damage in
December 2015; the Al-Omari Mosque took a shell strike through the roof in
2014. It remains on the Danger List.

**Change:** "near intact" replaced with the restoration history. The acoustics
claim is kept — it is genuinely well attested.

---

## 8. Damascus — "the oldest continuously inhabited capital"

**Verified:** The claim is **contested** and shared with Aleppo, Byblos and
Jericho. Carbon-14 dating at nearby Tell Ramad points to occupation from
around 6300 BC; the walled city is conventionally dated to the 3rd millennium
BC.

**Change:** stated as one of a handful of cities with a genuine but contested
claim — which is both accurate and, as a sentence, more interesting.

---

## 9. Cash and cards — the design was right until August 2026

**Design copy:** "Cash. Foreign cards do not work, there is no reliable ATM
access for visitors."

**Verified:** Still broadly true for planning purposes, but **Visa and
Mastercard each completed their first international card transactions in Syria
in late August 2026**, with acceptance at a rolling set of participating
hotels and restaurants. Guidance is still to bring cash.

**Change:** kept the practical advice, added the change, dated it.

---

## 10. Distances corrected

| Route | Design / first-pass | Verified |
|---|---|---|
| Damascus → Lebanese border | ~80 km | **~40 km** via Jdeidat Yabous (80 km was the distance to Beirut) |
| Damascus → Aleppo | — | ~355–360 km, 4–4.75 h via M5 |
| Damascus → Tartus | ~220 km | **~250–255 km** |
| Damascus → Latakia | — | ~310–320 km, ~4 h |
| Damascus → Bosra | — | ~140 km |
| Damascus → Krak | — | ~160 km to Homs, then ~40 km west |

---

## 11. Smaller fixes carried out of the adversarial pass

- **Tourism police**: a figure of 518 officers was a *training cohort* that
  graduated in Tartous, not officers deployed in Damascus. The documented
  Damascus deployment was 60 officers at the Damascus International Fair,
  August 2025.
- **Souq al-Hamidiyya roof**: described factually — the metal roof bears holes
  attributed to French artillery fire during the 1925 Great Syrian Revolt —
  rather than as scenic "light shafts". War damage is not decoration.
- **Saladin's sarcophagus**: attribution to Sultan Abdulhamid II vs. Kaiser
  Wilhelm II is genuinely contested between sources; presented as contested.
- **Qalb Lozeh "inspired Notre-Dame"**: traces to a single early-20th-century
  opinion (Gertrude Bell), not architectural-historical consensus. Dropped.
- **Dead Cities village count**: sources disagree (36 inscribed vs. UNESCO's
  "around 40" vs. 700–800 sites across the wider limestone massif). The site
  gives the range, not a false precision.
- **Maaloula**: not a World Heritage Site. On the Tentative List since
  8 June 1999. The design did not claim otherwise; stated here so nobody adds it.
- **Ugarit**: "world's oldest alphabet" narrowed to the **earliest known
  ordered alphabet** — which is the defensible version of the claim.
- **Tartus cathedral-museum**: reported **closed for structural restoration**
  as of 22 May 2026, tied to a DGAM–Aga Khan Trust agreement. No reopening date.
- **Hama**: damage from 1982 and damage from the post-2011 war are separate
  events and are not conflated. One noria was deliberately burned in 2014.

---

## 12. Things the design invented, which a demo must not assert

The mock states organisational facts that no research can verify, because the
company does not exist: "45 craft guilds", "$120k into workshop repairs, 2025",
"3 of 8 seats open", named departure dates, and a journal written by "our
Aleppo guide".

The design already labelled some of these "(unverified)", which was the right
instinct. In the build **every one of them is labelled as illustrative**, the
enquiry form never claims anything was sent, and a site-wide notice plus a
`/demo` page state plainly that this is a demonstration and not a tour
operator.
