# Palmyra (Tadmur) — Fact-Checked Tourism Card

**Verdict: CORRECTED** — the source card was largely accurate and well-sourced. Independent verification against Wikipedia, UN News, the Syrians for Heritage (SIMAT) January 2025 field report, phys.org's coverage of that report, and reporting on the Syrian–Russian restoration agreement confirmed nearly every date, figure and condition claim. Two corrections were made (see below); everything else stood up.

---

## Corrections

1. **Tower tombs: "damaged" understates what happened.** The original card's `conservationNote` said ISIS "damaged several tower tombs." Multiple sources (Al Jazeera, CBC, Wikipedia's Tower of Elahbel article) confirm ISIS **destroyed** at least seven tower tombs with explosives in two phases between roughly late June and early September 2015, including the well-known Tower of Elahbel (built 103 CE), demolished between 27 August and 2 September 2015. Changed "damaged" to "destroyed" and added the Elahbel example for specificity.

2. **The 2022 Syrian–Russian Arch of Triumph agreement is real and dated — the card's hedge can be tightened, not removed.** Search confirmed: in October 2022, Syria's Directorate-General of Antiquities and Museums signed an agreement with Russia's Institute for the History of Material Culture (Russian Academy of Sciences) to begin phases 2 and 3 of the Arch's restoration (the Hermitage Museum and a Russian stone-manufacturing firm are also named partners). A 2023 Interfax report has the Russian team expecting to begin on-site work around September 2023, with restoration projected to take about three years. No source found (via the sources fetched) confirms whether this project is still active under Syria's post-transition authorities — that part of the original hedge stands and is kept in `riskyClaims`.

No other date, name, Arabic transliteration, UNESCO status, superlative or distance claim required correction. Specifically verified and confirmed as stated in the original card:
- UNESCO inscription: 1980, "Site of Palmyra," criteria (i), (ii), (iv) — confirmed via Wikipedia.
- Danger List: added 2013, alongside five other Syrian sites, "due to the ongoing conflict" — confirmed via UN News (June 20, 2013 story).
- ISIS occupation: two periods, May 2015–March 2016 and December 2016–March 2017 — confirmed.
- Temple of Baalshamin: destroyed 23 August 2015. Temple of Bel cella: destroyed 30 August 2015 (exterior walls/temenos survive) — confirmed.
- Monumental Arch: destroyed/damaged October 2015 — confirmed.
- Tetrapylon: 12 of 16 columns toppled 20 January 2017 — confirmed.
- ~200 museum artifacts smashed — confirmed ("around 200 artifacts... with hammers").
- Great Colonnade: ~1.1 km, largely standing, not directly ISIS-targeted — confirmed.
- Temple of Bel consecrated 32 CE, dedicated to the Mesopotamian god Bel — confirmed.
- Fakhr al-Din al-Ma'ani Castle: Mamluk-built (13th century), later associated with/expanded under 16th-century Druze emir Fakhr al-Din II; entrance stairway/tower damaged by retreating ISIS fighters; currently closed to public visitors — confirmed via Wikipedia's Palmyra Castle article.
- Tadmur town repopulation: ~10,000 of ~100,000 pre-war residents returned; ~80% of buildings destroyed or at risk of collapse — confirmed verbatim against the phys.org report on the SIMAT/Syrians for Heritage January 2025 field assessment.
- Arch of Triumph restoration status (rubble sorted, stones numbered, physical reconstruction not yet begun) as of the January 2025 SIMAT report — confirmed; report published 2 January 2025.
- Arsu: Palmyrene caravan-protector deity, depicted riding a camel, twin brother Azizos, equated in pre-Islamic Arabia with Ruda — confirmed via Wikipedia's Arsu article. The claimed Ares equivalence remains unconfirmed by the sources fetched, consistent with the original card's own flag.
- Distance Damascus–Palmyra: Wikipedia states 215 km (134 mi) northeast; the card's "210–240 km, roughly 3 hours" range comfortably contains this and was not changed, though 215 km is the more precise commonly-cited figure.
- Night tours / reopening: multiple 2025 reports (NPR, and other outlets) confirm Syria's Ministry of Tourism has introduced illuminated night tours at Palmyra as part of a post-Assad tourism push; the site museum remains closed with no confirmed reopening date — confirmed, consistent with the card's `accessNote`.

Tone check: the card meets all four constraints in the brief. It never calls Syria blanket "safe" or "dangerous" (uses "reopening," "access varies," cites advisories). War damage is described factually — dates, actors (ISIS named explicitly), and mechanisms — without romanticising ruins. The Temple of Bel and Temple of Baalshamin are treated as historic sanctuaries/religious buildings that were destroyed, not as curiosities. Arsu is presented strictly as pre-Islamic heritage and naming inspiration, with an explicit disclaimer against implying any living-faith connection or worship — no changes needed there.

---

## Corrected Card

```json
{
  "slug": "palmyra-tadmur",
  "nameEn": "Palmyra",
  "nameAr": "تدمر (Tadmur)",
  "region": "Homs Governorate, central Syria — an oasis in the Syrian Desert (al-Badiya), roughly 210–240 km (about 215 km by the most commonly cited figure) northeast of Damascus.",
  "oneLiner": "Zenobia's caravan capital: colonnades still standing, temples still rubble.",
  "summary": "Palmyra (Arabic: Tadmur) was a wealthy caravan city that grew rich taxing Silk Road and incense-route trade between Rome and Persia, reaching its height in the 1st-3rd centuries CE under rulers including Queen Zenobia. Its ruins - a fusion of Greco-Roman, Persian and local Aramean styles - were inscribed as a UNESCO World Heritage Site in 1980 and placed on the List of World Heritage in Danger in 2013 as Syria's civil war escalated. Between 2015 and 2017, ISIS occupied the site twice and deliberately destroyed some of its most significant monuments, including the Temple of Baalshamin (23 August 2015) and the cella of the Temple of Bel (30 August 2015), while destroying the Monumental Arch, toppling most of the Tetrapylon's columns, demolishing at least seven tower tombs - including the Tower of Elahbel, built 103 CE - and smashing roughly 200 objects in the site museum. The Great Colonnade, the Roman theatre's cavea, and the Camp of Diocletian survive, though not undamaged. Since the fall of the Assad government in December 2024, Syrian authorities have begun cautiously reopening the site to visitors, including illuminated night tours, even as the modern town around it - badly damaged by years of fighting - is still only partly repopulated and full restoration of the destroyed monuments has barely begun.",
  "highlights": [
    {
      "name": "Great Colonnade",
      "nameAr": "الشارع المعمد",
      "blurb": "The 1,100-metre monumental avenue lined with limestone columns that once ran through the city's commercial and religious heart. It is Palmyra's best-preserved large-scale feature and the site's signature view.",
      "condition": "largely standing; some columns lost or destabilized by nearby conflict damage, not ISIS-targeted directly"
    },
    {
      "name": "Temple of Bel",
      "nameAr": "معبد بل",
      "blurb": "Dedicated to the Mesopotamian god Bel and consecrated in 32 CE, this was Palmyra's principal sanctuary and one of the best-preserved 1st-century religious buildings in the Middle East before 2015.",
      "condition": "cella destroyed by ISIS on 30 August 2015; monumental entrance arch and parts of the outer temenos wall survive; interior largely rubble"
    },
    {
      "name": "Monumental Arch (Arch of Triumph)",
      "nameAr": "قوس النصر",
      "blurb": "A triple-bayed triumphal arch from the reign of Septimius Severus, framing the view down the colonnade and long used as Palmyra's most-photographed symbol.",
      "condition": "destroyed by ISIS in October 2015; as of the most recent documented assessment (Jan 2025), rubble has been sorted and stones numbered under a Syrian-Russian restoration agreement (signed October 2022), but physical rebuilding had not yet begun and the project's status under Syria's post-transition government is unconfirmed"
    },
    {
      "name": "Tetrapylon",
      "nameAr": "رباعي الأعمدة",
      "blurb": "A monumental four-sided pavilion of grouped granite columns marking a crossing point on the colonnade, one of the site's most recognizable set-pieces.",
      "condition": "12 of its 16 columns toppled by ISIS on 20 January 2017; reduced largely to rubble and scattered fragments, with no restoration reported as of early 2025"
    },
    {
      "name": "Roman Theatre",
      "nameAr": "المسرح الروماني",
      "blurb": "A well-preserved 2nd-century Roman theatre that hosted performances and, before the war, music festivals; it was also used by ISIS for public executions during its occupation.",
      "condition": "stage facade damaged/partially collapsed from bombing and occupation-era use; the seating structure (cavea) largely stands"
    },
    {
      "name": "Fakhr al-Din al-Ma'ani Castle (Qalaat Shirkuh)",
      "nameAr": "قلعة فخر الدين المعاني",
      "blurb": "A Mamluk-era hilltop fortress overlooking the ruins, later associated with 16th-century Druze emir Fakhr al-Din II, prized today for its panoramic view over the archaeological site.",
      "condition": "largely intact but with its entrance stairway and tower damaged by retreating ISIS fighters; currently closed to public visitors"
    }
  ],
  "facts": [
    {
      "label": "UNESCO inscription",
      "value": "1980, as the \"Site of Palmyra,\" cultural criteria (i), (ii), (iv)",
      "source": "https://en.wikipedia.org/wiki/Palmyra"
    },
    {
      "label": "World Heritage in Danger listing",
      "value": "2013, due to the Syrian civil war; still on the Danger List as of 2026",
      "source": "https://news.un.org/en/story/2013/06/442802"
    },
    {
      "label": "ISIS occupation of Palmyra",
      "value": "Two periods: May 2015-March 2016, and December 2016-March 2017",
      "source": "https://en.wikipedia.org/wiki/Palmyra"
    },
    {
      "label": "Tower tombs destroyed",
      "value": "At least seven tower tombs demolished with explosives by ISIS, including the Tower of Elahbel (built 103 CE), destroyed between 27 August and 2 September 2015",
      "source": "https://en.wikipedia.org/wiki/Tower_of_Elahbel"
    },
    {
      "label": "Modern town repopulation",
      "value": "Only an estimated 10,000 of roughly 100,000 pre-war residents had returned to Tadmur town as of early 2025; ~80% of the modern town's buildings reported destroyed or at risk of collapse",
      "source": "https://phys.org/news/2025-02-documents-devastation-ancient-city-palmyra.html"
    },
    {
      "label": "Arch of Triumph restoration status",
      "value": "Rubble sorting and stone numbering completed by Jan 2025; a Syrian-Russian agreement signed October 2022 covers restoration phases 2-3, with Russian teams expecting to begin on-site work around September 2023 and a roughly three-year timeline - but the project's status after the change of government is unclear",
      "source": "https://syriansforheritage.org/?p=6506"
    },
    {
      "label": "Arsu at Palmyra",
      "value": "Palmyrene caravan-protector deity, depicted riding a camel with twin brother Azizos; equated in Arabia with the god Ruda",
      "source": "https://en.wikipedia.org/wiki/Arsu"
    }
  ],
  "unescoStatus": "Inscribed 1980 (Site of Palmyra, cultural criteria i, ii, iv); placed on the List of World Heritage in Danger in 2013 because of the Syrian civil war, and remains on that list as of 2026.",
  "conservationNote": "War damage at Palmyra was deliberate and severe: ISIS destroyed the Temple of Baalshamin outright, gutted the cella of the Temple of Bel, destroyed the Monumental Arch, toppled most of the Tetrapylon's columns, destroyed at least seven tower tombs (including the Tower of Elahbel), and smashed roughly 200 museum artifacts between 2015 and 2017. The Great Colonnade, the theatre's cavea, and the Camp of Diocletian survive but are not undamaged. As of the most recent documented field assessment (January 2025, Syrians for Heritage/SIMAT), most destroyed monuments remain largely as ISIS left them - the one exception being the Arch of Triumph, where preparatory rubble-sorting and stone-numbering for an eventual reconstruction had begun under a Syrian-Russian agreement signed in October 2022. That agreement predates the fall of the Assad government, and its status under Syria's new authorities was unresolved at time of reporting. We found no reliable, dated source confirming full demining of the site or a completed restoration timeline as of 2026 - treat any such claim as unverified.",
  "accessNote": "Syria began reopening to international visitors after the Assad government fell in December 2024, and Palmyra's archaeological site has resumed limited access - accessible sectors open roughly sunrise to sunset, with illuminated night tours introduced by Syria's Ministry of Tourism as part of the site's recovery push. The site museum remains closed (building damage, no confirmed reopening date), and Fakhr al-Din Castle is currently closed to the public. The modern town of Tadmur is still heavily damaged and only partly repopulated, so services (fuel, lodging, food) directly around the site are limited. From Damascus, Palmyra is roughly 210-240 km by road via Homs (Wikipedia cites 215 km specifically), commonly described as a 3-hour-plus drive, though checkpoints and road conditions in this transition period can add time - check current conditions before travel. This is a reopening, not a normalized destination: consult current Syrian tourism authority guidance and your own government's travel advisory for Syria before planning a visit, rather than assuming blanket \"safe\" or \"unsafe\" status.",
  "localFlavour": "Tadmur grew up as a desert oasis and caravan stop - its wealth came from taxing merchants moving silk, spices and incense between the Mediterranean and the East, protected in local belief by caravan gods like Arsu and his twin Azizos, both depicted riding camels. That caravan-protector tradition - hospitality to travelers crossing hard desert distances - is the honest, non-religious thread connecting the ancient site to a modern travel brand named after Arsu: it names the guardian of the road, not a living object of worship.",
  "riskyClaims": [
    "Could not confirm current (2026) demining status at the Palmyra archaeological site from any dated source - do not claim the site is fully cleared of ordnance.",
    "The October 2022 Syrian-Russian restoration agreement for the Arch of Triumph is confirmed as real and dated, and a 2023 report had Russian teams targeting a September 2023 start with a ~3-year timeline - but no source fetched confirms whether that project is still active, paused, or renegotiated under Syria's post-transition government as of September 2026.",
    "Road travel time/distance from Damascus to Palmyra (Wikipedia cites 215 km; commonly rounded to 210-240 km, ~3 hours) may vary with current checkpoint and road conditions in the transition period - not freshly verified against a 2025-2026 road-conditions source.",
    "Wikipedia's Arsu article did not confirm the commonly cited scholarly identification of Arsu with the Greek war god Ares (via name resemblance) - treat that specific equivalence as unverified by the sources fetched, though it appears elsewhere in the literature.",
    "Exact current (Sept 2026) museum reopening date, ticketing procedures, and whether foreign tourists can visit unescorted are not confirmed by a source dated later than mid-2025.",
    "Tadmur town's population-return figure (~10,000 of ~100,000) and the 80% building-damage figure are both from a January 2025 field report and likely have shifted by Sept 2026; not re-verified with a newer source."
  ],
  "sources": [
    "https://en.wikipedia.org/wiki/Palmyra",
    "https://en.wikipedia.org/wiki/Arsu",
    "https://en.wikipedia.org/wiki/Palmyra_Castle",
    "https://en.wikipedia.org/wiki/Tower_of_Elahbel",
    "https://en.wikipedia.org/wiki/Monumental_Arch_of_Palmyra",
    "https://phys.org/news/2025-02-documents-devastation-ancient-city-palmyra.html",
    "https://syriansforheritage.org/?p=6506",
    "https://news.un.org/en/story/2013/06/442802",
    "https://interfax.com/newsroom/top-stories/92393/",
    "https://www.npr.org/2025/04/17/g-s1-59683/palmyra-syria-heritage-sites-war-restoration",
    "https://www.aljazeera.com/news/2015/9/4/isil-blows-up-ancient-tower-tombs-in-syrias-palmyra"
  ]
}
```
