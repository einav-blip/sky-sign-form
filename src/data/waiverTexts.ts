import { Language } from '@/contexts/LanguageContext';

export const waiverTexts: Record<Language, any> = {
  he: {
    personalDetails: {
      title: "פרטים אישיים: הצהרת הצונח/ת לפני ביצוע צניחה חופשית טנדם",
      fields: ["שם משפחה", "שם", "נייד", "מייל", "עיר", "טלפון", "מיקוד", "רחוב", "מספר"]
    },
    riskStatistics: {
      title: "סיכונים בצניחה חופשית טנדם - סטטיסטיקת נפגעים",
      content: `כללי - פעילות של צניחה חופשית ממטוס כרוכה בסיכונים העלולים להתפתח לנזקים כבדים לרבות פציעה, נכות קשה, ומוות. תאונות ופציעות עלולות להתרחש בשל גורמים רבים ובשלבים שונים של הפעילות, כגון: בדרך למטוס, בשהיה בסביבת המטוס, בעליה למטוס, בשלבי הטיסה השונים, ביציאה מהמטוס, במהלך הנפילה החופשית, בפתיחת המצנח, בשלב גלישה תחת המצנח, בנחיתה, בשהיה בשטח הנחיתה ועוד.

חשוב לדעת כי תאונות או פציעות מתרחשות גם במקרים בהם הטיסה והצניחה בוצעו לפי כל ההוראות, הנהלים, דרישות החוק והתקנות.

BPA - British Parachute Association - סטטיסטיקה בעולם על פי מאמר שפורסם באתר איגוד הצניחה הבריטי - מתוך כ-750,000 צניחות טנדם מדווח מקרה אחד של מוות. בצניחת טנדם, חבלות ופציעות מתרחשות באחת לכ-1,100 צניחות. מספר הפציעות גבוה פי אצל נשים. בצניחת טנדם, מספר וסוג הפציעות תלויים בגיל הצונח/ת, במשקל הצונח/ת, ובמצבם הבריאותי. ככל שישנה עליה בגיל ובמשקל הצונח/ת, וככל שהצונח/ת בעל/ת כושר גופני נמוך יותר, ישנה עלייה בשיעור הפציעות. הפציעות אצל נשים גבוהות פי 2-2.5 לעומת גברים.

סטטיסטיקת פציעות בפרדייב (עד סוף שנת 2021) - החל משנת 2000 בוצעו בפרדייב מעל 170,000 צניחות טנדם. במהלך התקופה לא התרחשו תאונות אשר גרמו למוות, אך תקריות שונות הסתיימו בפציעות של צונחים, חלקן חמורות.

סיכום הפציעות:
כ-20 מקרים של שברים - שלד/שן/גפיים/גב (1 ל-8,500 צניחות)
כ-20 מקרים של פריקות מפרקים - לסת/ברך/כתף (1 ל-8,500 צניחות)
כ-50 מקרים של חתכים ופצעים - פנים/גפיים/גוף (1 ל-3,400 צניחות)
כ-10 מקרים של פגיעה או קרע בעור התוף (1 ל-17,000 צניחות)

במקרים רבים צונחים דיווחו על שפשופים, שריטות ומכות יבשות אשר לוו בכאבים חזקים וממושכים. במקרים רבים צונחים לא חשו בטוב לאחר צניחה בגלל סחרחורות, תחושת בחילות ובהקאות שהיו מלוות ואף באובדן הכרה.

אני מצהיר/ה כי קראתי והבנתי את האמור לעיל וברור לי שאני זכאי/ת לבחור לבטל או לדחות את הצניחה בלי כל חיוב כספי מכך.`
    },
    waiverDeclaration: {
      title: "הצהרת ויתור ושיחרור",
      content: `אני הח"מ _______ תאריך לידה: __________________ מצהיר/ה כי:

• פניתי לחברת אייר פרדייב בע"מ (להלן: "החברה") בבקשה להשתתף בפעילות הצניחה החופשית ובשאר פעילויות שונות שעושה החברה (להלן: "פעילות החברה"). יובהר כי פעילות החברה מתייחסת גם לשימוש במטוסים, בציוד הצניחה וביתר המתקנים והאביזרים. פעילות החברה עשויה להתקיים בכל מקום לרבות בשטחה ו/או מחוצה לו.

• קראתי את המידע על סטטיסטיקת הנפגעים, התיירתי היטב במה כרוכה פעילות החברה לרבות הסיכונים והנזקים שעלולים להיגרם לי כתוצאה מכך וכן קיבלתי הסברים מאנשי החברה. ברור לי היטב שפעילות החברה והשימוש במצנח היא בעלת סיכון גבוה ועלולים להיגרם לי מחלה ו/או נזק, לרבות נזקי גוף, נפש, פציעה, מוות ו/או נזק לרכוש (להלן: "הנזק"), למרות המאמצים שהחברה נוקטת.

• אני מאשר/ת כי צפיתי בסרטון ההדרכה והבנתי אותו. ברור לי כי הנחיתה אמורה להתבצע על רגלי המדריך בלבד. כדי לצמצם את הסיכון שאפצע במהלך הנחיתה, עלי להרים שתי רגלי גבוה מעל רגלי המדריך ולא להוריד אותן עד לעצירה המוחלטת. אם אוריד את רגלי אני צפוי/ה להיפגע פגיעה חמורה.

• אני מודע/ת לכל הסיכונים הכרוכים בפעילות החברה, ולוקח/ת על עצמי מרצון אלה סיכונים. אני בוחר/ת להשתתף בפעילות החברה, למרות הסיכונים.

• אני מודע/ת לכך כי הישיבה במטוס מתקיימת בקרבה לעד 18 איש נוספים וכי הפעילות מתקיימת בצמידות לצונחים נוספים לרבות מדריך הטנדם. אני מתחייב/ת לדאוג לעצמי למיגון מתאים והגיינה, ואני מודע/ת שעל אף מאמצי קיימת אפשרות כי אדבק במחלה לרבות קורונה.

• אני מקבל/ת על עצמי אחריות מלאה לכל נזק שייגרם לי במהלך פעילות החברה ו/או כתוצאה ממנה ודואג/ת לבטח עצמי בכיסויים המתאימים לי.

• הנני מוותר/ת ויתור מלא, סופי ומוחלט על כל טענה ו/או זכות תביעה מכל סוג שהוא כלפי החברה, מנהליה, העובדיה, ושלוחיה (להלן: "החברה ועובדיה") בקשר לכל נזק שייגרם לי.

• הנני מתחייב/ת להחזיר לחברה ו/או לשפות אותם בגין כל סכום אותו ישלמו או ידרשו לשלם בקשר לכל נזק שייגרם לי.

אני מאשר/ת כי קראתי, הבנתי ואני מסכים/מה לאמור בסעיפי הצהרת הויתור והשחרור לעיל`
    },
    healthDeclaration: {
      title: "הצהרת בריאות לצונח/ת טנדם",
      intro: "על מנת להימנע מסיכונים מיותרים, אנא מלא/י את הצהרת הבריאות ופרט/י גם מקרים שלא נראים לך משמעותיים מהעבר. יש לציין את המצב הנוכחי כמו גם אירועים מהעבר בכל אחד מהסעיפים. פרדייב שומר לעצמו את הזכות לבטל צניחה חופשית בכל שלב במקרה ומתעורר חשד שישנו סיכון גבוה מהרגיל.",
      questions: [
        "האם את/ה סובל כרגע ממחלה כלשהי? (נא לציין גם צינון, כאב ראש, בחילות וכו')",
        "פריקת ברך/כתף",
        "שברים או נקעים",
        "בעיות גב ושלד (לא ניתן לצנוח ללא אישור רפואי)",
        "פריצת דיסק או בלט דיסק (לא ניתן לצנוח ללא אישור רפואי)",
        "מחלות הקשורות בעצמות (לא ניתן לצנוח ללא אישור רפואי)",
        "מחלות אוזניים",
        "מחלת ים",
        "אובדן הכרה",
        "נטילת תרופות",
        "נכות כלשהי",
        "האם אושפזת בשלוש שנים האחרונות?",
        "האם את/ה נמצא/ת תחת השפעת אלכוהול ו/או סמים? (לא ניתן לצנוח)",
        "האם ביצעת צלילת מכשירים (SCUBA) ב-24 השעות האחרונות? (לא ניתן לצנוח)",
        "נא פרט/י כל בעיה או אירוע אשר איננו מוזכר בטופס זה הקשור למצבך הרפואי/נפשי/נוירולוגי",
        "האם את בהריון כרגע? (לא ניתן לצנוח)",
        "האם ילדת בשלושה חודשים האחרונים? (לא ניתן לצנוח)",
        "האם עברת תאונה או פציעה בשלוש השנים האחרונות?"
      ],
      additionalDeclaration: `הנני מצהיר/ה כי: מבלי לגרוע מכל ההצהרות, ההתחייבויות, השחרור ולקיחת האחריות המלאה והמוחלטת שאני מקבל/ת על עצמי במסמך הויתור והשחרור:

- תשובותיי לכל השאלות בהצהרה הרפואית מלאות וכנות. ביררתי ואני מבינ/ה ומכיר/ה את מצבי הבריאותי ו/או המגבלות שציינתי בהצהרת הבריאות
- אני מרגיש/ה טוב, אין לי חום או חשד למחלה כלשהי, ולא ידוע לי כי נמצאתי בשבוע האחרון בקרבת אדם החשוד כחולה במחלה מידבקת לרבות קורונה.
- במקרה שאדביק אדם במחלה מידבקת לרבות קורונה במהלך פעילות החברה, אני מתחייב/ת לשפות את החברה ו/או מי מטעמה בגין כל נזק שייגרם להם ו/או לפצותו
- אני מצהיר/ה כי נתתי תשובות מלאות וכנות בהצהרתות הבריאות ואני מתחייב/ת לדווח לפרדייב על כל שינוי במצבי הבריאותי ו/או רפואיים כתוצאה מהשתתפותי בפעילות הצניחה.
- ברור לי כי פרדייב אינו גורם מוסמך לתת חוות דעת בעניינים רפואיים ו/או בריאותיים.
- אני מבינ/ה את ההשלכות שיכולות להיות לפעילות צניחה חופשית בהקשר למצבי הבריאותי.
- אני לוקח/ת על עצמי אחריות מלאה ומוחלטת על כל החמרה, מחלה ו/או כל נזק שייגרם לי כתוצאה מפעילות הצניחה בקשר למצבי הרפואי ו/או המגבלות הנ"ל.
- אני מצהיר/ה כי תשובותיי לכל השאלות בהצהרת הבריאות מלאות וכנות ואני מתחייב/ת לדווח לפרדייב על כל שינוי במצבי כתוצאה מהשתתפותי בפעילות הצניחה.`
    }
  },
  en: {
    personalDetails: {
      title: "Personal Details: Skydiver Declaration Before Tandem Skydive",
      fields: ["Last Name", "First Name", "Mobile", "Email", "City", "Phone", "Zip", "Street", "Number"]
    },
    riskStatistics: {
      title: "Tandem Skydiving Risks - Casualty Statistics",
      content: `General - Skydiving from an aircraft involves risks that may develop into serious damages including injury, severe disability, and death. Accidents and injuries may occur due to numerous factors and at various stages of the activity, such as: on the way to the aircraft, while near the aircraft, boarding the aircraft, during various flight stages, exiting the aircraft, during freefall, parachute deployment, gliding under the parachute, landing, staying in the landing area, and more.

It is important to know that accidents or injuries occur even in cases where the flight and jump were performed according to all instructions, procedures, legal requirements, and regulations.

BPA - British Parachute Association - World statistics according to an article published on the British Parachute Association website - out of approximately 750,000 tandem jumps, one death is reported. In tandem skydiving, injuries occur approximately once every 1,100 jumps. The injury rate is higher among women. In tandem skydiving, the number and type of injuries depend on the skydiver's age, weight, and health condition. As age and weight increase, and as physical fitness decreases, the injury rate increases. Injuries among women are 2-2.5 times higher than among men.

Paradive Injury Statistics (until the end of 2021) - Since 2000, over 170,000 tandem jumps have been performed at Paradive. During this period, no fatal accidents occurred, but various incidents resulted in injuries to skydivers, some of them severe.

Injury Summary:
Approximately 20 cases of fractures - skeleton/teeth/limbs/back (1 per 8,500 jumps)
Approximately 20 cases of joint dislocations - jaw/knee/shoulder (1 per 8,500 jumps)
Approximately 50 cases of cuts and wounds - face/limbs/body (1 per 3,400 jumps)
Approximately 10 cases of eardrum damage or rupture (1 per 17,000 jumps)

In many cases, skydivers reported abrasions, scratches, and bruises accompanied by strong and prolonged pain. In many cases, skydivers felt unwell after jumping due to dizziness, nausea, vomiting, and even loss of consciousness.

I declare that I have read and understood the above and it is clear to me that I am entitled to choose to cancel or postpone the jump without any financial obligation.`
    },
    waiverDeclaration: {
      title: "Waiver and Release Declaration",
      content: `I, the undersigned _______ Date of Birth: __________________ hereby declare that:

• I have approached Air Paradive Ltd (hereinafter: "the Company") with a request to participate in skydiving activities and other various activities conducted by the Company (hereinafter: "Company Activities"). It is clarified that Company Activities also refer to the use of aircraft, skydiving equipment, and other facilities and accessories. Company Activities may take place anywhere, including on and/or off Company premises.

• I have read the information about casualty statistics, thoroughly examined what Company Activities involve, including the risks and damages that may be caused to me as a result, and I have received explanations from Company personnel. It is clear to me that Company Activities and the use of a parachute involve high risk and may cause me illness and/or damage, including physical damage, mental harm, injury, death, and/or property damage (hereinafter: "the Damage"), despite the Company's efforts.

• I confirm that I have watched the instructional video and understood it. It is clear to me that landing should be performed on the instructor's legs only. To minimize the risk of injury during landing, I must lift both my legs high above the instructor's legs and not lower them until complete stop. If I lower my legs, I am likely to suffer serious injury.

• I am aware of all risks involved in Company Activities, and I voluntarily assume these risks. I choose to participate in Company Activities despite the risks.

• I am aware that seating in the aircraft takes place in close proximity to up to 18 other people and that the activity takes place in close contact with other skydivers, including the tandem instructor. I commit to ensuring appropriate protection and hygiene for myself, and I am aware that despite my efforts, there is a possibility that I may contract a disease including COVID-19.

• I accept full responsibility for any damage caused to me during and/or as a result of Company Activities and I ensure to insure myself with appropriate coverage.

• I hereby waive fully, finally, and absolutely any claim and/or right of action of any kind against the Company, its managers, employees, and agents (hereinafter: "the Company and its employees") in connection with any damage caused to me.

• I hereby commit to reimburse the Company and/or indemnify them for any amount they pay or are required to pay in connection with any damage caused to me.

I confirm that I have read, understood, and agree to the provisions of the Waiver and Release Declaration above`
    },
    healthDeclaration: {
      title: "Health Declaration for Tandem Skydiver",
      intro: "To avoid unnecessary risks, please complete the health declaration and detail even cases that don't seem significant to you from the past. Please indicate your current condition as well as past events in each section. Paradive reserves the right to cancel a skydive at any stage if there is suspicion of higher than normal risk.",
      questions: [
        "Are you currently suffering from any illness? (please also note cold, headache, nausea, etc.)",
        "Knee/shoulder dislocation",
        "Fractures or sprains",
        "Back and skeletal problems (cannot jump without medical approval)",
        "Herniated disc or bulging disc (cannot jump without medical approval)",
        "Bone-related diseases (cannot jump without medical approval)",
        "Ear diseases",
        "Motion sickness",
        "Loss of consciousness",
        "Taking medications",
        "Any disability",
        "Have you been hospitalized in the last three years?",
        "Are you under the influence of alcohol and/or drugs? (cannot jump)",
        "Have you done SCUBA diving in the last 24 hours? (cannot jump)",
        "Please detail any problem or event not mentioned in this form related to your medical/mental/neurological condition",
        "Are you currently pregnant? (cannot jump)",
        "Have you given birth in the last three months? (cannot jump)",
        "Have you had an accident or injury in the last three years?"
      ],
      additionalDeclaration: `I hereby declare that: Without detracting from all declarations, commitments, release, and assumption of full and absolute responsibility that I accept upon myself in the Waiver and Release document:

- My answers to all questions in the medical declaration are complete and honest. I have clarified and understand my health condition and/or limitations that I indicated in the health declaration
- I feel well, I have no fever or suspicion of any illness, and I am not aware of being in close proximity to a person suspected of being ill with a contagious disease including COVID-19 in the past week.
- In case I infect a person with a contagious disease including COVID-19 during Company Activities, I commit to compensate the Company and/or anyone on its behalf for any damage caused to them
- I declare that I have given complete and honest answers in the health declarations and I commit to report to Paradive any change in my health and/or medical condition as a result of my participation in skydiving activity.
- It is clear to me that Paradive is not an authorized entity to provide opinions on medical and/or health matters.
- I understand the implications that skydiving activity may have in relation to my health condition.
- I assume full and absolute responsibility for any deterioration, illness, and/or any damage caused to me as a result of skydiving activity in relation to my medical condition and/or the above-mentioned limitations.
- I declare that my answers to all questions in the health declaration are complete and honest and I commit to report to Paradive any change in my condition as a result of my participation in skydiving activity.`
    }
  },
  ru: {
    personalDetails: {
      title: "Личные данные: Заявление парашютиста перед тандемным прыжком",
      fields: ["Фамилия", "Имя", "Мобильный", "Эл. почта", "Город", "Телефон", "Индекс", "Улица", "Номер"]
    },
    riskStatistics: {
      title: "Риски тандемного парашютного спорта - Статистика пострадавших",
      content: `Общие сведения - Прыжки с парашютом с самолета связаны с рисками, которые могут привести к серьезным повреждениям, включая травмы, тяжелую инвалидность и смерть. Несчастные случаи и травмы могут произойти из-за множества факторов и на различных этапах деятельности, например: по дороге к самолету, находясь рядом с самолетом, при посадке в самолет, на различных этапах полета, при выходе из самолета, во время свободного падения, при раскрытии парашюта, при планировании под парашютом, при приземлении, при нахождении в зоне приземления и т.д.

Важно знать, что несчастные случаи или травмы происходят даже в тех случаях, когда полет и прыжок были выполнены в соответствии со всеми инструкциями, процедурами, требованиями закона и правилами.

BPA - Британская парашютная ассоциация - Мировая статистика согласно статье, опубликованной на сайте Британской парашютной ассоциации - из примерно 750 000 тандемных прыжков сообщается об одном смертельном случае. При тандемных прыжках травмы происходят примерно один раз на 1 100 прыжков. Уровень травматизма выше среди женщин. При тандемных прыжках количество и тип травм зависят от возраста, веса и состояния здоровья парашютиста. С увеличением возраста и веса, а также при снижении физической подготовки уровень травматизма повышается. Травматизм среди женщин в 2-2,5 раза выше, чем среди мужчин.

Статистика травм в Парадайв (до конца 2021 года) - С 2000 года в Парадайв было выполнено более 170 000 тандемных прыжков. За этот период не произошло аварий со смертельным исходом, но различные инциденты закончились травмами парашютистов, некоторые из которых были серьезными.

Сводка травм:
Примерно 20 случаев переломов - скелет/зубы/конечности/спина (1 на 8 500 прыжков)
Примерно 20 случаев вывихов суставов - челюсть/колено/плечо (1 на 8 500 прыжков)
Примерно 50 случаев порезов и ран - лицо/конечности/тело (1 на 3 400 прыжков)
Примерно 10 случаев повреждения или разрыва барабанной перепонки (1 на 17 000 прыжков)

Во многих случаях парашютисты сообщали о ссадинах, царапинах и ушибах, сопровождавшихся сильной и продолжительной болью. Во многих случаях парашютисты плохо себя чувствовали после прыжка из-за головокружения, тошноты, рвоты и даже потери сознания.

Я заявляю, что прочитал и понял вышеизложенное, и мне ясно, что я имею право отменить или отложить прыжок без каких-либо финансовых обязательств.`
    },
    waiverDeclaration: {
      title: "Заявление об отказе и освобождении от ответственности",
      content: `Я, нижеподписавшийся _______ Дата рождения: __________________ настоящим заявляю, что:

• Я обратился в компанию Air Paradive Ltd (далее: «Компания») с просьбой об участии в деятельности по прыжкам с парашютом и других различных мероприятиях, проводимых Компанией (далее: «Деятельность Компании»). Разъясняется, что Деятельность Компании также относится к использованию самолетов, парашютного оборудования и других объектов и аксессуаров. Деятельность Компании может осуществляться в любом месте, в том числе на территории Компании и/или за её пределами.

• Я прочитал информацию о статистике пострадавших, тщательно изучил, что включает в себя Деятельность Компании, включая риски и ущерб, которые могут быть причинены мне в результате, а также получил разъяснения от персонала Компании. Мне совершенно ясно, что Деятельность Компании и использование парашюта связаны с высоким риском и могут причинить мне болезнь и/или ущерб, включая физический ущерб, психический вред, травмы, смерть и/или ущерб имуществу (далее: «Ущерб»), несмотря на усилия Компании.

• Я подтверждаю, что просмотрел обучающее видео и понял его. Мне ясно, что приземление должно осуществляться только на ноги инструктора. Чтобы минимизировать риск травмы при приземлении, я должен поднять обе ноги высоко над ногами инструктора и не опускать их до полной остановки. Если я опущу ноги, я могу получить серьезную травму.

• Я осознаю все риски, связанные с Деятельностью Компании, и добровольно принимаю на себя эти риски. Я выбираю участие в Деятельности Компании, несмотря на риски.

• Я осознаю, что размещение в самолете происходит в непосредственной близости до 18 других человек и что деятельность осуществляется в тесном контакте с другими парашютистами, включая тандемного инструктора. Я обязуюсь обеспечить себе надлежащую защиту и гигиену, и я осознаю, что, несмотря на мои усилия, существует возможность заражения болезнью, включая COVID-19.

• Я принимаю на себя полную ответственность за любой ущерб, причиненный мне во время и/или в результате Деятельности Компании, и обеспечиваю себе соответствующее страхование.

• Настоящим я полностью, окончательно и безоговорочно отказываюсь от любых претензий и/или права на иск любого рода против Компании, её руководителей, сотрудников и представителей (далее: «Компания и её сотрудники») в связи с любым ущербом, причиненным мне.

• Настоящим я обязуюсь возместить Компании и/или компенсировать им любую сумму, которую они выплатят или будут обязаны выплатить в связи с любым ущербом, причиненным мне.

Я подтверждаю, что прочитал, понял и согласен с положениями Заявления об отказе и освобождении от ответственности, изложенными выше`
    },
    healthDeclaration: {
      title: "Медицинское заявление для тандемного парашютиста",
      intro: "Чтобы избежать ненужных рисков, пожалуйста, заполните медицинское заявление и укажите даже случаи, которые не кажутся вам значительными из прошлого. Пожалуйста, укажите ваше текущее состояние, а также прошлые события в каждом разделе. Парадайв оставляет за собой право отменить прыжок на любом этапе, если возникнет подозрение на повышенный риск.",
      questions: [
        "Страдаете ли вы в настоящее время каким-либо заболеванием? (пожалуйста, укажите также простуду, головную боль, тошноту и т.д.)",
        "Вывих колена/плеча",
        "Переломы или растяжения",
        "Проблемы со спиной и скелетом (прыжок невозможен без медицинского разрешения)",
        "Грыжа диска или протрузия диска (прыжок невозможен без медицинского разрешения)",
        "Заболевания, связанные с костями (прыжок невозможен без медицинского разрешения)",
        "Заболевания ушей",
        "Морская болезнь",
        "Потеря сознания",
        "Прием лекарств",
        "Любая инвалидность",
        "Были ли вы госпитализированы за последние три года?",
        "Находитесь ли вы под воздействием алкоголя и/или наркотиков? (прыжок невозможен)",
        "Занимались ли вы дайвингом (SCUBA) за последние 24 часа? (прыжок невозможен)",
        "Пожалуйста, укажите любую проблему или событие, не упомянутое в этой форме, связанное с вашим медицинским/психическим/неврологическим состоянием",
        "Вы беременны в настоящее время? (прыжок невозможен)",
        "Рожали ли вы за последние три месяца? (прыжок невозможен)",
        "Были ли у вас несчастный случай или травма за последние три года?"
      ],
      additionalDeclaration: `Настоящим я заявляю, что: Без ущерба для всех заявлений, обязательств, освобождения от ответственности и принятия полной и абсолютной ответственности, которую я принимаю на себя в документе об отказе и освобождении от ответственности:

- Мои ответы на все вопросы в медицинском заявлении полные и честные. Я выяснил и понимаю свое состояние здоровья и/или ограничения, которые я указал в медицинском заявлении
- Я чувствую себя хорошо, у меня нет температуры или подозрения на какое-либо заболевание, и мне не известно, что я находился в непосредственной близости от человека, подозреваемого в заболевании инфекционной болезнью, включая COVID-19, на прошлой неделе.
- В случае если я заражу человека инфекционной болезнью, включая COVID-19, во время Деятельности Компании, я обязуюсь компенсировать Компании и/или любому лицу от её имени любой ущерб, причиненный им
- Я заявляю, что дал полные и честные ответы в медицинских заявлениях и обязуюсь сообщать Парадайв о любых изменениях в моем здоровье и/или медицинском состоянии в результате моего участия в парашютной деятельности.
- Мне ясно, что Парадайв не является уполномоченной организацией для предоставления заключений по медицинским и/или вопросам здоровья.
- Я понимаю последствия, которые парашютная деятельность может иметь в отношении моего состояния здоровья.
- Я принимаю на себя полную и абсолютную ответственность за любое ухудшение, болезнь и/или любой ущерб, причиненный мне в результате парашютной деятельности в связи с моим медицинским состоянием и/или вышеуказанными ограничениями.
- Я заявляю, что мои ответы на все вопросы в медицинском заявлении полные и честные, и я обязуюсь сообщать Парадайв о любых изменениях в моем состоянии в результате моего участия в парашютной деятельности.`
    }
  },
  fr: {
    personalDetails: {
      title: "Détails personnels : Déclaration du parachutiste avant le saut en tandem",
      fields: ["Nom", "Prénom", "Mobile", "E-mail", "Ville", "Téléphone", "Code postal", "Rue", "Numéro"]
    },
    riskStatistics: {
      title: "Risques du parachutisme en tandem - Statistiques des victimes",
      content: `Général - Le parachutisme depuis un avion comporte des risques pouvant entraîner des dommages graves, notamment des blessures, une invalidité sévère et la mort. Les accidents et blessures peuvent survenir en raison de nombreux facteurs et à différentes étapes de l'activité, comme : sur le chemin vers l'avion, à proximité de l'avion, lors de l'embarquement, pendant les différentes phases du vol, à la sortie de l'avion, pendant la chute libre, à l'ouverture du parachute, lors du vol sous voile, à l'atterrissage, dans la zone d'atterrissage, etc.

Il est important de savoir que des accidents ou des blessures se produisent même lorsque le vol et le saut ont été effectués conformément à toutes les instructions, procédures, exigences légales et réglementations.

BPA - British Parachute Association - Statistiques mondiales selon un article publié sur le site de l'Association britannique de parachutisme - sur environ 750 000 sauts en tandem, un décès est signalé. En parachutisme en tandem, les blessures surviennent environ une fois sur 1 100 sauts. Le taux de blessures est plus élevé chez les femmes. En parachutisme en tandem, le nombre et le type de blessures dépendent de l'âge, du poids et de l'état de santé du parachutiste. Plus l'âge et le poids augmentent, et plus la condition physique diminue, plus le taux de blessures augmente. Les blessures chez les femmes sont 2 à 2,5 fois plus élevées que chez les hommes.

Statistiques des blessures chez Paradive (jusqu'à fin 2021) - Depuis 2000, plus de 170 000 sauts en tandem ont été effectués chez Paradive. Pendant cette période, aucun accident mortel ne s'est produit, mais divers incidents ont entraîné des blessures de parachutistes, certaines graves.

Résumé des blessures :
Environ 20 cas de fractures - squelette/dents/membres/dos (1 pour 8 500 sauts)
Environ 20 cas de luxations articulaires - mâchoire/genou/épaule (1 pour 8 500 sauts)
Environ 50 cas de coupures et plaies - visage/membres/corps (1 pour 3 400 sauts)
Environ 10 cas de lésion ou rupture du tympan (1 pour 17 000 sauts)

Dans de nombreux cas, les parachutistes ont signalé des éraflures, des égratignures et des ecchymoses accompagnées de douleurs fortes et prolongées. Dans de nombreux cas, les parachutistes ne se sont pas sentis bien après le saut en raison de vertiges, de nausées, de vomissements et même de perte de connaissance.

Je déclare avoir lu et compris ce qui précède et il m'est clair que j'ai le droit de choisir d'annuler ou de reporter le saut sans aucune obligation financière.`
    },
    waiverDeclaration: {
      title: "Déclaration de renonciation et de décharge",
      content: `Je soussigné(e) _______ Date de naissance : __________________ déclare par la présente que :

• Je me suis adressé(e) à Air Paradive Ltd (ci-après : « la Société ») avec une demande de participation aux activités de parachutisme et autres activités diverses menées par la Société (ci-après : « Activités de la Société »). Il est précisé que les Activités de la Société se réfèrent également à l'utilisation d'avions, d'équipements de parachutisme et d'autres installations et accessoires. Les Activités de la Société peuvent avoir lieu n'importe où, y compris sur les lieux de la Société et/ou en dehors.

• J'ai lu les informations sur les statistiques des victimes, j'ai examiné attentivement ce qu'impliquent les Activités de la Société, y compris les risques et les dommages qui peuvent m'être causés en conséquence, et j'ai reçu des explications du personnel de la Société. Il m'est parfaitement clair que les Activités de la Société et l'utilisation d'un parachute comportent des risques élevés et peuvent me causer une maladie et/ou des dommages, y compris des dommages corporels, mentaux, des blessures, la mort et/ou des dommages matériels (ci-après : « le Dommage »), malgré les efforts de la Société.

• Je confirme avoir visionné la vidéo d'instruction et l'avoir comprise. Il m'est clair que l'atterrissage doit être effectué uniquement sur les jambes de l'instructeur. Pour minimiser le risque de blessure lors de l'atterrissage, je dois lever mes deux jambes bien au-dessus des jambes de l'instructeur et ne pas les baisser jusqu'à l'arrêt complet. Si je baisse mes jambes, je risque de subir une blessure grave.

• Je suis conscient(e) de tous les risques liés aux Activités de la Société et j'assume volontairement ces risques. Je choisis de participer aux Activités de la Société malgré les risques.

• Je suis conscient(e) que les places assises dans l'avion sont à proximité immédiate de jusqu'à 18 autres personnes et que l'activité se déroule en contact étroit avec d'autres parachutistes, y compris l'instructeur tandem. Je m'engage à assurer ma propre protection et hygiène appropriées, et je suis conscient(e) que malgré mes efforts, il existe une possibilité de contracter une maladie, y compris le COVID-19.

• J'accepte l'entière responsabilité de tout dommage qui me serait causé pendant et/ou à la suite des Activités de la Société et je m'assure d'être couvert(e) par une assurance appropriée.

• Par la présente, je renonce pleinement, définitivement et absolument à toute réclamation et/ou droit d'action de quelque nature que ce soit contre la Société, ses dirigeants, employés et représentants (ci-après : « la Société et ses employés ») en relation avec tout dommage qui me serait causé.

• Par la présente, je m'engage à rembourser la Société et/ou à les indemniser pour tout montant qu'ils paieraient ou seraient tenus de payer en relation avec tout dommage qui me serait causé.

Je confirme avoir lu, compris et accepté les dispositions de la Déclaration de renonciation et de décharge ci-dessus`
    },
    healthDeclaration: {
      title: "Déclaration de santé pour le parachutiste en tandem",
      intro: "Pour éviter les risques inutiles, veuillez remplir la déclaration de santé et détailler même les cas qui ne vous semblent pas significatifs du passé. Veuillez indiquer votre état actuel ainsi que les événements passés dans chaque section. Paradive se réserve le droit d'annuler un saut à tout moment si un risque supérieur à la normale est suspecté.",
      questions: [
        "Souffrez-vous actuellement d'une maladie quelconque ? (veuillez également noter rhume, maux de tête, nausées, etc.)",
        "Luxation du genou/de l'épaule",
        "Fractures ou entorses",
        "Problèmes de dos et du squelette (saut impossible sans autorisation médicale)",
        "Hernie discale ou bombement discal (saut impossible sans autorisation médicale)",
        "Maladies liées aux os (saut impossible sans autorisation médicale)",
        "Maladies de l'oreille",
        "Mal des transports",
        "Perte de conscience",
        "Prise de médicaments",
        "Tout handicap",
        "Avez-vous été hospitalisé(e) au cours des trois dernières années ?",
        "Êtes-vous sous l'influence d'alcool et/ou de drogues ? (saut impossible)",
        "Avez-vous fait de la plongée sous-marine (SCUBA) au cours des dernières 24 heures ? (saut impossible)",
        "Veuillez détailler tout problème ou événement non mentionné dans ce formulaire lié à votre condition médicale/mentale/neurologique",
        "Êtes-vous actuellement enceinte ? (saut impossible)",
        "Avez-vous accouché au cours des trois derniers mois ? (saut impossible)",
        "Avez-vous eu un accident ou une blessure au cours des trois dernières années ?"
      ],
      additionalDeclaration: `Je déclare par la présente que : Sans préjudice de toutes les déclarations, engagements, décharge et prise de responsabilité pleine et absolue que j'accepte dans le document de renonciation et de décharge :

- Mes réponses à toutes les questions de la déclaration médicale sont complètes et honnêtes. J'ai vérifié et je comprends mon état de santé et/ou les limitations que j'ai indiquées dans la déclaration de santé
- Je me sens bien, je n'ai pas de fièvre ni de suspicion de maladie, et je ne suis pas au courant d'avoir été en contact étroit avec une personne suspectée d'être malade d'une maladie contagieuse, y compris le COVID-19, au cours de la semaine dernière.
- Dans le cas où j'infecterais une personne avec une maladie contagieuse, y compris le COVID-19, pendant les Activités de la Société, je m'engage à indemniser la Société et/ou toute personne en son nom pour tout dommage qui leur serait causé
- Je déclare avoir donné des réponses complètes et honnêtes dans les déclarations de santé et je m'engage à signaler à Paradive tout changement dans mon état de santé et/ou médical résultant de ma participation à l'activité de parachutisme.
- Il m'est clair que Paradive n'est pas une entité autorisée à fournir des avis sur des questions médicales et/ou de santé.
- Je comprends les implications que l'activité de parachutisme peut avoir par rapport à mon état de santé.
- J'assume l'entière et absolue responsabilité pour toute détérioration, maladie et/ou tout dommage qui me serait causé à la suite de l'activité de parachutisme en relation avec mon état médical et/ou les limitations mentionnées ci-dessus.
- Je déclare que mes réponses à toutes les questions de la déclaration de santé sont complètes et honnêtes et je m'engage à signaler à Paradive tout changement dans mon état résultant de ma participation à l'activité de parachutisme.`
    }
  },
  ar: {
    personalDetails: {
      title: "التفاصيل الشخصية: إقرار القافز قبل القفز الترادفي",
      fields: ["اللقب", "الاسم الأول", "الهاتف المحمول", "البريد الإلكتروني", "المدينة", "الهاتف", "الرمز البريدي", "الشارع", "الرقم"]
    },
    riskStatistics: {
      title: "مخاطر القفز الترادفي بالمظلات - إحصائيات المصابين",
      content: `عام - ينطوي القفز بالمظلات من طائرة على مخاطر قد تتطور إلى أضرار جسيمة بما في ذلك الإصابة والإعاقة الشديدة والموت. قد تحدث الحوادث والإصابات بسبب عوامل عديدة وفي مراحل مختلفة من النشاط، مثل: في الطريق إلى الطائرة، أثناء التواجد بالقرب من الطائرة، عند الصعود إلى الطائرة، خلال مراحل الطيران المختلفة، عند الخروج من الطائرة، أثناء السقوط الحر، عند فتح المظلة، أثناء الانزلاق تحت المظلة، عند الهبوط، أثناء التواجد في منطقة الهبوط، وغير ذلك.

من المهم معرفة أن الحوادث أو الإصابات تحدث حتى في الحالات التي تم فيها تنفيذ الرحلة والقفزة وفقًا لجميع التعليمات والإجراءات والمتطلبات القانونية واللوائح.

BPA - الجمعية البريطانية للمظلات - إحصائيات عالمية وفقًا لمقال نُشر على موقع الجمعية البريطانية للمظلات - من حوالي 750,000 قفزة ترادفية، يُبلغ عن حالة وفاة واحدة. في القفز الترادفي بالمظلات، تحدث الإصابات تقريبًا مرة واحدة في كل 1,100 قفزة. معدل الإصابات أعلى بين النساء. في القفز الترادفي، يعتمد عدد ونوع الإصابات على عمر القافز ووزنه وحالته الصحية. كلما زاد العمر والوزن، وكلما انخفضت اللياقة البدنية، يزداد معدل الإصابات. الإصابات بين النساء أعلى بـ 2-2.5 مرة من الرجال.

إحصائيات الإصابات في باراديف (حتى نهاية 2021) - منذ عام 2000، تم تنفيذ أكثر من 170,000 قفزة ترادفية في باراديف. خلال هذه الفترة، لم تقع حوادث أدت إلى الوفاة، لكن حوادث مختلفة أسفرت عن إصابات للقافزين، بعضها خطيرة.

ملخص الإصابات:
حوالي 20 حالة كسور - هيكل عظمي/أسنان/أطراف/ظهر (1 لكل 8,500 قفزة)
حوالي 20 حالة خلع مفاصل - فك/ركبة/كتف (1 لكل 8,500 قفزة)
حوالي 50 حالة جروح وقطوع - وجه/أطراف/جسم (1 لكل 3,400 قفزة)
حوالي 10 حالات تلف أو تمزق طبلة الأذن (1 لكل 17,000 قفزة)

في كثير من الحالات، أبلغ القافزون عن سحجات وخدوش وكدمات مصحوبة بألم شديد ومطول. في كثير من الحالات، لم يشعر القافزون بتحسن بعد القفز بسبب الدوخة والغثيان والقيء وحتى فقدان الوعي.

أقر بأنني قرأت وفهمت ما ورد أعلاه وأنه من الواضح لي أنني يحق لي اختيار إلغاء أو تأجيل القفزة دون أي التزام مالي.`
    },
    waiverDeclaration: {
      title: "إقرار التنازل والإعفاء",
      content: `أنا الموقع أدناه _______ تاريخ الميلاد: __________________ أقر بموجب هذا أن:

• لقد توجهت إلى شركة Air Paradive Ltd (فيما يلي: "الشركة") بطلب للمشاركة في نشاط القفز بالمظلات والأنشطة المختلفة الأخرى التي تقوم بها الشركة (فيما يلي: "نشاط الشركة"). يوضح أن نشاط الشركة يشير أيضًا إلى استخدام الطائرات ومعدات القفز بالمظلات والمرافق والملحقات الأخرى. قد يتم نشاط الشركة في أي مكان بما في ذلك داخل و/أو خارج مباني الشركة.

• لقد قرأت المعلومات حول إحصائيات المصابين، وفحصت بدقة ما ينطوي عليه نشاط الشركة بما في ذلك المخاطر والأضرار التي قد تلحق بي نتيجة لذلك، وقد تلقيت توضيحات من موظفي الشركة. من الواضح تمامًا لي أن نشاط الشركة واستخدام المظلة ينطوي على مخاطر عالية وقد يسبب لي مرضًا و/أو ضررًا، بما في ذلك الأضرار الجسدية والنفسية والإصابة والموت و/أو الأضرار في الممتلكات (فيما يلي: "الضرر")، على الرغم من جهود الشركة.

• أؤكد أنني شاهدت فيديو التعليمات وفهمته. من الواضح لي أن الهبوط يجب أن يتم على أرجل المدرب فقط. لتقليل خطر الإصابة أثناء الهبوط، يجب علي رفع كلتا رجلي عاليًا فوق أرجل المدرب وعدم خفضهما حتى التوقف التام. إذا خفضت رجلي، فمن المحتمل أن أتعرض لإصابة خطيرة.

• أنا على دراية بجميع المخاطر المرتبطة بنشاط الشركة، وأتحمل طوعًا هذه المخاطر. أختار المشاركة في نشاط الشركة على الرغم من المخاطر.

• أنا على دراية بأن الجلوس في الطائرة يتم على مقربة من ما يصل إلى 18 شخصًا آخرين وأن النشاط يتم في اتصال وثيق مع قافزين آخرين بما في ذلك مدرب التاندم. أتعهد بضمان الحماية والنظافة المناسبة لنفسي، وأنا على علم بأنه على الرغم من جهودي، هناك احتمال للإصابة بمرض بما في ذلك كوفيد-19.

• أتحمل المسؤولية الكاملة عن أي ضرر يلحق بي أثناء و/أو نتيجة نشاط الشركة وأضمن تأمين نفسي بالتغطية المناسبة.

• بموجب هذا أتنازل بشكل كامل ونهائي ومطلق عن أي مطالبة و/أو حق في رفع دعوى من أي نوع ضد الشركة ومديريها وموظفيها ووكلائها (فيما يلي: "الشركة وموظفوها") فيما يتعلق بأي ضرر يلحق بي.

• بموجب هذا أتعهد بتعويض الشركة و/أو تعويضهم عن أي مبلغ يدفعونه أو يُطلب منهم دفعه فيما يتعلق بأي ضرر يلحق بي.

أؤكد أنني قرأت وفهمت وأوافق على أحكام إقرار التنازل والإعفاء أعلاه`
    },
    healthDeclaration: {
      title: "الإقرار الصحي للقافز الترادفي",
      intro: "لتجنب المخاطر غير الضرورية، يرجى إكمال الإقرار الصحي وتفصيل حتى الحالات التي لا تبدو مهمة بالنسبة لك من الماضي. يرجى الإشارة إلى حالتك الحالية وكذلك الأحداث السابقة في كل قسم. تحتفظ باراديف بالحق في إلغاء القفزة في أي مرحلة إذا كان هناك اشتباه في وجود خطر أعلى من المعتاد.",
      questions: [
        "هل تعاني حاليًا من أي مرض؟ (يرجى ذكر البرد والصداع والغثيان وما إلى ذلك أيضًا)",
        "خلع الركبة/الكتف",
        "كسور أو التواءات",
        "مشاكل الظهر والهيكل العظمي (لا يمكن القفز بدون موافقة طبية)",
        "انزلاق غضروفي أو بروز غضروفي (لا يمكن القفز بدون موافقة طبية)",
        "أمراض متعلقة بالعظام (لا يمكن القفز بدون موافقة طبية)",
        "أمراض الأذن",
        "دوار الحركة",
        "فقدان الوعي",
        "تناول الأدوية",
        "أي إعاقة",
        "هل تم إدخالك المستشفى في السنوات الثلاث الماضية؟",
        "هل أنت تحت تأثير الكحول و/أو المخدرات؟ (لا يمكن القفز)",
        "هل قمت بالغوص بأجهزة التنفس (SCUBA) في الـ 24 ساعة الماضية؟ (لا يمكن القفز)",
        "يرجى تفصيل أي مشكلة أو حدث غير مذكور في هذا النموذج يتعلق بحالتك الطبية/النفسية/العصبية",
        "هل أنت حامل حاليًا؟ (لا يمكن القفز)",
        "هل ولدت في الأشهر الثلاثة الماضية؟ (لا يمكن القفز)",
        "هل تعرضت لحادث أو إصابة في السنوات الثلاث الماضية؟"
      ],
      additionalDeclaration: `أقر بموجب هذا أن: دون الانتقاص من جميع الإقرارات والالتزامات والإعفاء وتحمل المسؤولية الكاملة والمطلقة التي أقبلها على نفسي في وثيقة التنازل والإعفاء:

- إجاباتي على جميع الأسئلة في الإقرار الطبي كاملة وصادقة. لقد تحققت وأفهم حالتي الصحية و/أو القيود التي أشرت إليها في الإقرار الصحي
- أشعر بصحة جيدة، ليس لدي حمى أو اشتباه في أي مرض، ولست على علم بأنني كنت على مقربة من شخص يشتبه في إصابته بمرض معدٍ بما في ذلك كوفيد-19 في الأسبوع الماضي.
- في حال أصبت شخصًا بمرض معدٍ بما في ذلك كوفيد-19 أثناء نشاط الشركة، أتعهد بتعويض الشركة و/أو أي شخص نيابة عنها عن أي ضرر يلحق بهم
- أقر بأنني قدمت إجابات كاملة وصادقة في الإقرارات الصحية وأتعهد بإبلاغ باراديف عن أي تغيير في حالتي الصحية و/أو الطبية نتيجة مشاركتي في نشاط القفز بالمظلات.
- من الواضح لي أن باراديف ليست جهة مخولة لتقديم آراء في المسائل الطبية و/أو الصحية.
- أفهم التداعيات التي قد تترتب على نشاط القفز بالمظلات فيما يتعلق بحالتي الصحية.
- أتحمل المسؤولية الكاملة والمطلقة عن أي تدهور أو مرض و/أو أي ضرر يلحق بي نتيجة نشاط القفز بالمظلات فيما يتعلق بحالتي الطبية و/أو القيود المذكورة أعلاه.
- أقر بأن إجاباتي على جميع الأسئلة في الإقرار الصحي كاملة وصادقة وأتعهد بإبلاغ باراديف عن أي تغيير في حالتي نتيجة مشاركتي في نشاط القفز بالمظلات.`
    }
  },
  it: {
    personalDetails: {
      title: "Dettagli personali: Dichiarazione del paracadutista prima del salto in tandem",
      fields: ["Cognome", "Nome", "Cellulare", "Email", "Città", "Telefono", "CAP", "Via", "Numero"]
    },
    riskStatistics: {
      title: "Rischi del paracadutismo in tandem - Statistiche degli infortuni",
      content: `Generale - Il paracadutismo da un aereo comporta rischi che possono svilupparsi in danni gravi, tra cui lesioni, disabilità grave e morte. Incidenti e lesioni possono verificarsi a causa di numerosi fattori e in varie fasi dell'attività, come: sulla strada per l'aereo, nelle vicinanze dell'aereo, durante l'imbarco, durante le varie fasi del volo, all'uscita dall'aereo, durante la caduta libera, all'apertura del paracadute, durante la planata sotto il paracadute, all'atterraggio, nella zona di atterraggio, ecc.

È importante sapere che incidenti o lesioni si verificano anche nei casi in cui il volo e il lancio sono stati eseguiti secondo tutte le istruzioni, procedure, requisiti legali e regolamenti.

BPA - British Parachute Association - Statistiche mondiali secondo un articolo pubblicato sul sito dell'Associazione britannica di paracadutismo - su circa 750.000 salti in tandem, viene segnalato un decesso. Nel paracadutismo in tandem, le lesioni si verificano circa una volta ogni 1.100 salti. Il tasso di infortuni è più alto tra le donne. Nel paracadutismo in tandem, il numero e il tipo di lesioni dipendono dall'età, dal peso e dalle condizioni di salute del paracadutista. All'aumentare dell'età e del peso, e al diminuire della forma fisica, aumenta il tasso di infortuni. Gli infortuni tra le donne sono 2-2,5 volte superiori rispetto agli uomini.

Statistiche degli infortuni di Paradive (fino alla fine del 2021) - Dal 2000, oltre 170.000 salti in tandem sono stati effettuati presso Paradive. Durante questo periodo, non si sono verificati incidenti mortali, ma vari incidenti hanno provocato lesioni ai paracadutisti, alcune gravi.

Riepilogo delle lesioni:
Circa 20 casi di fratture - scheletro/denti/arti/schiena (1 ogni 8.500 salti)
Circa 20 casi di lussazioni articolari - mandibola/ginocchio/spalla (1 ogni 8.500 salti)
Circa 50 casi di tagli e ferite - viso/arti/corpo (1 ogni 3.400 salti)
Circa 10 casi di danno o rottura del timpano (1 ogni 17.000 salti)

In molti casi, i paracadutisti hanno segnalato abrasioni, graffi e contusioni accompagnati da dolore forte e prolungato. In molti casi, i paracadutisti non si sono sentiti bene dopo il salto a causa di vertigini, nausea, vomito e persino perdita di coscienza.

Dichiaro di aver letto e compreso quanto sopra e mi è chiaro che ho il diritto di scegliere di cancellare o posticipare il salto senza alcun obbligo finanziario.`
    },
    waiverDeclaration: {
      title: "Dichiarazione di rinuncia e liberatoria",
      content: `Io sottoscritto/a _______ Data di nascita: __________________ dichiaro con la presente che:

• Mi sono rivolto/a ad Air Paradive Ltd (di seguito: "la Società") con richiesta di partecipare all'attività di paracadutismo e alle altre varie attività svolte dalla Società (di seguito: "Attività della Società"). Si precisa che le Attività della Società si riferiscono anche all'uso di aeromobili, attrezzature per il paracadutismo e altre strutture e accessori. Le Attività della Società possono svolgersi ovunque, incluso nei locali della Società e/o al di fuori di essi.

• Ho letto le informazioni sulle statistiche degli infortuni, ho esaminato attentamente cosa comportano le Attività della Società, compresi i rischi e i danni che potrebbero essermi causati di conseguenza, e ho ricevuto spiegazioni dal personale della Società. Mi è perfettamente chiaro che le Attività della Società e l'uso di un paracadute comportano rischi elevati e possono causarmi malattia e/o danno, inclusi danni fisici, mentali, lesioni, morte e/o danni materiali (di seguito: "il Danno"), nonostante gli sforzi della Società.

• Confermo di aver visionato il video di istruzioni e di averlo compreso. Mi è chiaro che l'atterraggio deve essere effettuato solo sulle gambe dell'istruttore. Per ridurre al minimo il rischio di infortunio durante l'atterraggio, devo sollevare entrambe le gambe ben al di sopra delle gambe dell'istruttore e non abbassarle fino all'arresto completo. Se abbasso le gambe, sono soggetto/a a lesioni gravi.

• Sono consapevole di tutti i rischi connessi alle Attività della Società e assumo volontariamente questi rischi. Scelgo di partecipare alle Attività della Società nonostante i rischi.

• Sono consapevole che i posti a sedere sull'aereo sono nelle immediate vicinanze di altre 18 persone e che l'attività si svolge a stretto contatto con altri paracadutisti, incluso l'istruttore tandem. Mi impegno a garantire una protezione e un'igiene adeguate per me stesso/a, e sono consapevole che nonostante i miei sforzi, esiste la possibilità di contrarre una malattia, incluso il COVID-19.

• Accetto la piena responsabilità per qualsiasi danno causatomi durante e/o a seguito delle Attività della Società e provvedo ad assicurarmi con coperture adeguate.

• Con la presente rinuncio pienamente, definitivamente e assolutamente a qualsiasi pretesa e/o diritto di azione di qualsiasi tipo nei confronti della Società, dei suoi dirigenti, dipendenti e rappresentanti (di seguito: "la Società e i suoi dipendenti") in relazione a qualsiasi danno causatomi.

• Con la presente mi impegno a rimborsare la Società e/o a tenerli indenni per qualsiasi somma che paghino o siano tenuti a pagare in relazione a qualsiasi danno causatomi.

Confermo di aver letto, compreso e di accettare le disposizioni della Dichiarazione di rinuncia e liberatoria sopra riportate`
    },
    healthDeclaration: {
      title: "Dichiarazione sanitaria per paracadutista in tandem",
      intro: "Per evitare rischi inutili, si prega di compilare la dichiarazione sanitaria e dettagliare anche i casi che non sembrano significativi dal passato. Si prega di indicare la propria condizione attuale così come gli eventi passati in ogni sezione. Paradive si riserva il diritto di annullare un salto in qualsiasi momento se si sospetta un rischio superiore al normale.",
      questions: [
        "Soffri attualmente di qualche malattia? (indicare anche raffreddore, mal di testa, nausea, ecc.)",
        "Lussazione di ginocchio/spalla",
        "Fratture o distorsioni",
        "Problemi alla schiena e allo scheletro (non è possibile saltare senza autorizzazione medica)",
        "Ernia del disco o protrusione discale (non è possibile saltare senza autorizzazione medica)",
        "Malattie legate alle ossa (non è possibile saltare senza autorizzazione medica)",
        "Malattie dell'orecchio",
        "Mal di mare/cinetosi",
        "Perdita di coscienza",
        "Assunzione di farmaci",
        "Qualsiasi disabilità",
        "Sei stato/a ricoverato/a negli ultimi tre anni?",
        "Sei sotto l'influenza di alcol e/o droghe? (non è possibile saltare)",
        "Hai fatto immersioni subacquee (SCUBA) nelle ultime 24 ore? (non è possibile saltare)",
        "Si prega di dettagliare qualsiasi problema o evento non menzionato in questo modulo relativo alla propria condizione medica/mentale/neurologica",
        "Sei attualmente incinta? (non è possibile saltare)",
        "Hai partorito negli ultimi tre mesi? (non è possibile saltare)",
        "Hai avuto un incidente o un infortunio negli ultimi tre anni?"
      ],
      additionalDeclaration: `Dichiaro con la presente che: Fatto salvo quanto previsto da tutte le dichiarazioni, impegni, liberatoria e assunzione di piena e assoluta responsabilità che accetto nel documento di rinuncia e liberatoria:

- Le mie risposte a tutte le domande nella dichiarazione medica sono complete e oneste. Ho verificato e comprendo la mia condizione di salute e/o le limitazioni che ho indicato nella dichiarazione sanitaria
- Mi sento bene, non ho febbre né sospetto di alcuna malattia, e non sono a conoscenza di essere stato/a a stretto contatto con una persona sospettata di essere malata di una malattia contagiosa, incluso il COVID-19, nell'ultima settimana.
- Nel caso in cui infettassi una persona con una malattia contagiosa, incluso il COVID-19, durante le Attività della Società, mi impegno a risarcire la Società e/o chiunque per suo conto per qualsiasi danno causato loro
- Dichiaro di aver dato risposte complete e oneste nelle dichiarazioni sanitarie e mi impegno a segnalare a Paradive qualsiasi cambiamento nella mia salute e/o condizione medica derivante dalla mia partecipazione all'attività di paracadutismo.
- Mi è chiaro che Paradive non è un'entità autorizzata a fornire pareri su questioni mediche e/o sanitarie.
- Comprendo le implicazioni che l'attività di paracadutismo può avere in relazione alla mia condizione di salute.
- Assumo la piena e assoluta responsabilità per qualsiasi peggioramento, malattia e/o qualsiasi danno che mi sia causato a seguito dell'attività di paracadutismo in relazione alla mia condizione medica e/o alle limitazioni sopra menzionate.
- Dichiaro che le mie risposte a tutte le domande nella dichiarazione sanitaria sono complete e oneste e mi impegno a segnalare a Paradive qualsiasi cambiamento nella mia condizione derivante dalla mia partecipazione all'attività di paracadutismo.`
    }
  },
  es: {
    personalDetails: {
      title: "Detalles personales: Declaración del paracaidista antes del salto en tándem",
      fields: ["Apellido", "Nombre", "Móvil", "Correo electrónico", "Ciudad", "Teléfono", "Código postal", "Calle", "Número"]
    },
    riskStatistics: {
      title: "Riesgos del paracaidismo en tándem - Estadísticas de lesionados",
      content: `General - El paracaidismo desde un avión implica riesgos que pueden desarrollarse en daños graves, incluyendo lesiones, discapacidad severa y muerte. Los accidentes y lesiones pueden ocurrir debido a numerosos factores y en varias etapas de la actividad, tales como: en el camino al avión, cerca del avión, al abordar el avión, durante las diferentes etapas del vuelo, al salir del avión, durante la caída libre, al abrir el paracaídas, al planear bajo el paracaídas, al aterrizar, en la zona de aterrizaje, etc.

Es importante saber que los accidentes o lesiones ocurren incluso en casos donde el vuelo y el salto se realizaron de acuerdo con todas las instrucciones, procedimientos, requisitos legales y regulaciones.

BPA - British Parachute Association - Estadísticas mundiales según un artículo publicado en el sitio web de la Asociación Británica de Paracaidismo - de aproximadamente 750,000 saltos en tándem, se reporta una muerte. En paracaidismo en tándem, las lesiones ocurren aproximadamente una vez cada 1,100 saltos. La tasa de lesiones es mayor entre las mujeres. En paracaidismo en tándem, el número y tipo de lesiones dependen de la edad, peso y condición de salud del paracaidista. A medida que aumenta la edad y el peso, y disminuye la condición física, aumenta la tasa de lesiones. Las lesiones entre mujeres son 2-2.5 veces mayores que entre hombres.

Estadísticas de lesiones en Paradive (hasta finales de 2021) - Desde 2000, se han realizado más de 170,000 saltos en tándem en Paradive. Durante este período, no ocurrieron accidentes fatales, pero varios incidentes resultaron en lesiones de paracaidistas, algunas graves.

Resumen de lesiones:
Aproximadamente 20 casos de fracturas - esqueleto/dientes/extremidades/espalda (1 por cada 8,500 saltos)
Aproximadamente 20 casos de dislocaciones articulares - mandíbula/rodilla/hombro (1 por cada 8,500 saltos)
Aproximadamente 50 casos de cortes y heridas - cara/extremidades/cuerpo (1 por cada 3,400 saltos)
Aproximadamente 10 casos de daño o ruptura del tímpano (1 por cada 17,000 saltos)

En muchos casos, los paracaidistas reportaron abrasiones, rasguños y moretones acompañados de dolor fuerte y prolongado. En muchos casos, los paracaidistas no se sintieron bien después del salto debido a mareos, náuseas, vómitos e incluso pérdida de conciencia.

Declaro que he leído y entendido lo anterior y me queda claro que tengo derecho a elegir cancelar o posponer el salto sin ninguna obligación financiera.`
    },
    waiverDeclaration: {
      title: "Declaración de renuncia y liberación",
      content: `Yo, el/la abajo firmante _______ Fecha de nacimiento: __________________ declaro por la presente que:

• Me he dirigido a Air Paradive Ltd (en adelante: "la Empresa") con una solicitud para participar en la actividad de paracaidismo y otras diversas actividades realizadas por la Empresa (en adelante: "Actividades de la Empresa"). Se aclara que las Actividades de la Empresa también se refieren al uso de aeronaves, equipos de paracaidismo y otras instalaciones y accesorios. Las Actividades de la Empresa pueden llevarse a cabo en cualquier lugar, incluyendo dentro y/o fuera de las instalaciones de la Empresa.

• He leído la información sobre estadísticas de lesionados, he examinado cuidadosamente lo que implican las Actividades de la Empresa, incluyendo los riesgos y daños que pueden causarme como resultado, y he recibido explicaciones del personal de la Empresa. Me queda perfectamente claro que las Actividades de la Empresa y el uso de un paracaídas implican alto riesgo y pueden causarme enfermedad y/o daño, incluyendo daño físico, mental, lesiones, muerte y/o daño a la propiedad (en adelante: "el Daño"), a pesar de los esfuerzos de la Empresa.

• Confirmo que he visto el video de instrucciones y lo he comprendido. Me queda claro que el aterrizaje debe realizarse solo sobre las piernas del instructor. Para minimizar el riesgo de lesiones durante el aterrizaje, debo levantar ambas piernas bien por encima de las piernas del instructor y no bajarlas hasta la parada completa. Si bajo mis piernas, es probable que sufra lesiones graves.

• Soy consciente de todos los riesgos relacionados con las Actividades de la Empresa, y asumo voluntariamente estos riesgos. Elijo participar en las Actividades de la Empresa a pesar de los riesgos.

• Soy consciente de que los asientos en el avión están muy cerca de hasta 18 otras personas y que la actividad se realiza en contacto cercano con otros paracaidistas, incluyendo el instructor de tándem. Me comprometo a asegurar mi propia protección e higiene adecuadas, y soy consciente de que a pesar de mis esfuerzos, existe la posibilidad de contraer una enfermedad, incluyendo COVID-19.

• Acepto la responsabilidad total por cualquier daño que me sea causado durante y/o como resultado de las Actividades de la Empresa y me aseguro de contar con la cobertura de seguro apropiada.

• Por la presente renuncio total, final y absolutamente a cualquier reclamo y/o derecho de acción de cualquier tipo contra la Empresa, sus directivos, empleados y representantes (en adelante: "la Empresa y sus empleados") en relación con cualquier daño que me sea causado.

• Por la presente me comprometo a reembolsar a la Empresa y/o indemnizarlos por cualquier suma que paguen o estén obligados a pagar en relación con cualquier daño que me sea causado.

Confirmo que he leído, entendido y acepto las disposiciones de la Declaración de renuncia y liberación anteriores`
    },
    healthDeclaration: {
      title: "Declaración de salud para paracaidista en tándem",
      intro: "Para evitar riesgos innecesarios, por favor complete la declaración de salud y detalle incluso casos que no le parezcan significativos del pasado. Por favor indique su condición actual así como eventos pasados en cada sección. Paradive se reserva el derecho de cancelar un salto en cualquier etapa si se sospecha un riesgo mayor al normal.",
      questions: [
        "¿Sufre actualmente de alguna enfermedad? (por favor indique también resfriado, dolor de cabeza, náuseas, etc.)",
        "Dislocación de rodilla/hombro",
        "Fracturas o esguinces",
        "Problemas de espalda y esqueleto (no se puede saltar sin aprobación médica)",
        "Hernia de disco o abombamiento discal (no se puede saltar sin aprobación médica)",
        "Enfermedades relacionadas con los huesos (no se puede saltar sin aprobación médica)",
        "Enfermedades del oído",
        "Mareo por movimiento",
        "Pérdida de consciencia",
        "Toma de medicamentos",
        "Cualquier discapacidad",
        "¿Ha sido hospitalizado en los últimos tres años?",
        "¿Está bajo la influencia de alcohol y/o drogas? (no se puede saltar)",
        "¿Ha buceado con equipo (SCUBA) en las últimas 24 horas? (no se puede saltar)",
        "Por favor detalle cualquier problema o evento no mencionado en este formulario relacionado con su condición médica/mental/neurológica",
        "¿Está embarazada actualmente? (no se puede saltar)",
        "¿Ha dado a luz en los últimos tres meses? (no se puede saltar)",
        "¿Ha tenido un accidente o lesión en los últimos tres años?"
      ],
      additionalDeclaration: `Por la presente declaro que: Sin perjuicio de todas las declaraciones, compromisos, liberación y asunción de responsabilidad plena y absoluta que acepto en el documento de renuncia y liberación:

- Mis respuestas a todas las preguntas en la declaración médica son completas y honestas. He verificado y entiendo mi condición de salud y/o limitaciones que indiqué en la declaración de salud
- Me siento bien, no tengo fiebre ni sospecha de ninguna enfermedad, y no tengo conocimiento de haber estado en contacto cercano con una persona sospechosa de estar enferma con una enfermedad contagiosa, incluyendo COVID-19, en la última semana.
- En caso de que infecte a una persona con una enfermedad contagiosa, incluyendo COVID-19, durante las Actividades de la Empresa, me comprometo a compensar a la Empresa y/o a cualquier persona en su nombre por cualquier daño causado a ellos
- Declaro que he dado respuestas completas y honestas en las declaraciones de salud y me comprometo a informar a Paradive sobre cualquier cambio en mi salud y/o condición médica como resultado de mi participación en la actividad de paracaidismo.
- Me queda claro que Paradive no es una entidad autorizada para proporcionar opiniones sobre asuntos médicos y/o de salud.
- Entiendo las implicaciones que la actividad de paracaidismo puede tener en relación con mi condición de salud.
- Asumo la responsabilidad plena y absoluta por cualquier deterioro, enfermedad y/o cualquier daño que me sea causado como resultado de la actividad de paracaidismo en relación con mi condición médica y/o las limitaciones mencionadas anteriormente.
- Declaro que mis respuestas a todas las preguntas en la declaración de salud son completas y honestas y me comprometo a informar a Paradive sobre cualquier cambio en mi condición como resultado de mi participación en la actividad de paracaidismo.`
    }
  }
};

// Legacy exports for backwards compatibility
export const adultWaiverText = waiverTexts.he;
export const minorWaiverText = {
  note: "טופס זה מיועד לצונחים מתחת לגיל 18 ודורש חתימת אפוטרופוס"
};
