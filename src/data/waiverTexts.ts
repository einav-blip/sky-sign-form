import { Language } from '@/contexts/LanguageContext';

export const waiverTexts: Record<Language, any> = {
  he: {
    personalDetails: {
      title: "פרטים אישיים: הצהרת הצונח/ת לפני ביצוע צניחה חופשית טנדם",
      fields: ["שם משפחה", "שם", "נייד", "מייל", "עיר", "טלפון", "מיקוד", "רחוב", "מספר"]
    },
    riskStatistics: {
      title: "סיכונים בצניחה חופשית טנדם - סטטיסטיקת נפגעים",
      content: `כללי - פעילות של צניחה חופשית ממטוס כרוכה בסיכונים העלולים להתפתח לנזקים כבדים לרבות פציעה, נכות קשה, ומוות. תאונות ופציעות עלולות להתרחש בשל גורמים רבים ובשלבים שונים של הפעילות.

חשוב לדעת כי תאונות או פציעות מתרחשות גם במקרים בהם הטיסה והצניחה בוצעו לפי כל ההוראות, הנהלים, דרישות החוק והתקנות.

סטטיסטיקה בעולם: מתוך כ-750,000 צניחות טנדם מדווח מקרה אחת. בצניחת טנדם, חבלות ופציעות מתרחשות באחת לכ-1,100 צניחות.

אני מצהיר/ה כי קראתי והבנתי את האמור לעיל וברור לי שאני זכאי/ת לבחור לבטל או לדחות את הצניחה בלי כל חיוב כספי.`
    },
    waiverDeclaration: {
      title: "הצהרת ויתור ושיחרור",
      content: `• קראתי את המידע על סטטיסטיקת הנפגעים והסיכונים
• ברור לי שפעילות הצניחה בעלת סיכון גבוה
• אני מודע/ת לכל הסיכונים ולוקח/ת אותם על עצמי
• הנני מוותר/ת ויתור מלא על כל טענה כלפי החברה
• אני מקבל/ת אחריות מלאה לכל נזק`
    },
    healthDeclaration: {
      title: "הצהרת בריאות לצונח/ת טנדם",
      intro: "על מנת להימנע מסיכונים מיותרים, אנא מלא/י את הצהרת הבריאות ופרט/י גם מקרים שלא נראים לך משמעותיים.",
      questions: [
        "האם את/ה סובל כרגע ממחלה כלשהי?",
        "פריקת ברך/כתף",
        "שברים או נקעים",
        "בעיות גב ושלד",
        "פריצת דיסק או בלט דיסק",
        "מחלות הקשורות בעצמות",
        "מחלות אוזניים",
        "מחלת ים",
        "אובדן הכרה",
        "נטילת תרופות",
        "נכות כלשהי",
        "האם אושפזת בשלוש שנים האחרונות?",
        "האם את/ה נמצא/ת תחת השפעת אלכוהול ו/או סמים?",
        "האם ביצעת צלילת מכשירים ב-24 השעות האחרונות?",
        "כל בעיה רפואית/נפשית/נוירולוגית אחרת",
        "האם את בהריון כרגע?",
        "האם ילדת בשלושה חודשים האחרונים?",
        "האם עברת תאונה או פציעה בשלוש השנים האחרונות?"
      ]
    }
  },
  en: {
    personalDetails: {
      title: "Personal Details: Skydiver Declaration Before Tandem Jump",
      fields: ["Last Name", "First Name", "Mobile", "Email", "City", "Phone", "Zip", "Street", "Number"]
    },
    riskStatistics: {
      title: "Tandem Skydiving Risks - Casualty Statistics",
      content: `General - Skydiving from an aircraft involves risks that may result in serious injury, severe disability, and death. Accidents and injuries may occur due to various factors at different stages of the activity.

It is important to know that accidents or injuries occur even when the flight and jump were performed according to all instructions, procedures, legal requirements and regulations.

World statistics: Out of approximately 750,000 tandem jumps, one fatality is reported. In tandem skydiving, injuries occur in approximately 1 out of 1,100 jumps.

I declare that I have read and understood the above and it is clear to me that I am entitled to choose to cancel or postpone the jump without any financial obligation.`
    },
    waiverDeclaration: {
      title: "Waiver and Release Declaration",
      content: `• I have read the casualty statistics and risk information
• I understand that skydiving involves high risk
• I am aware of all risks and accept them
• I waive all claims against the company
• I accept full responsibility for any damage`
    },
    healthDeclaration: {
      title: "Health Declaration for Tandem Skydiver",
      intro: "To avoid unnecessary risks, please complete the health declaration and detail even cases that don't seem significant to you.",
      questions: [
        "Are you currently suffering from any illness?",
        "Knee/shoulder dislocation",
        "Fractures or sprains",
        "Back and skeletal problems",
        "Herniated or bulging disc",
        "Bone-related diseases",
        "Ear diseases",
        "Motion sickness",
        "Loss of consciousness",
        "Taking medications",
        "Any disability",
        "Have you been hospitalized in the last three years?",
        "Are you under the influence of alcohol and/or drugs?",
        "Have you done SCUBA diving in the last 24 hours?",
        "Any other medical/mental/neurological issue",
        "Are you currently pregnant?",
        "Have you given birth in the last three months?",
        "Have you had an accident or injury in the last three years?"
      ]
    }
  },
  ru: {
    personalDetails: {
      title: "Личные данные: Заявление парашютиста перед тандемным прыжком",
      fields: ["Фамилия", "Имя", "Мобильный", "Эл. почта", "Город", "Телефон", "Индекс", "Улица", "Номер"]
    },
    riskStatistics: {
      title: "Риски тандемного парашютного спорта - Статистика несчастных случаев",
      content: `Общие сведения - Прыжки с парашютом с самолета связаны с рисками, которые могут привести к серьезным травмам, тяжелой инвалидности и смерти. Несчастные случаи и травмы могут произойти из-за различных факторов на разных этапах деятельности.

Важно знать, что несчастные случаи или травмы происходят даже когда полет и прыжок были выполнены согласно всем инструкциям, процедурам, законодательным требованиям и правилам.

Мировая статистика: Из примерно 750 000 тандемных прыжков зарегистрирован один смертельный случай. При тандемных прыжках травмы происходят примерно в 1 из 1 100 прыжков.

Я заявляю, что прочитал и понял вышеизложенное, и мне ясно, что я имею право отменить или отложить прыжок без каких-либо финансовых обязательств.`
    },
    waiverDeclaration: {
      title: "Заявление об отказе и освобождении от ответственности",
      content: `• Я прочитал статистику несчастных случаев и информацию о рисках
• Я понимаю, что парашютный спорт связан с высоким риском
• Я осведомлен обо всех рисках и принимаю их
• Я отказываюсь от всех претензий к компании
• Я принимаю полную ответственность за любой ущерб`
    },
    healthDeclaration: {
      title: "Медицинское заявление для тандемного парашютиста",
      intro: "Чтобы избежать ненужных рисков, пожалуйста, заполните медицинское заявление и укажите даже случаи, которые вам не кажутся значительными.",
      questions: [
        "Страдаете ли вы в настоящее время каким-либо заболеванием?",
        "Вывих колена/плеча",
        "Переломы или растяжения",
        "Проблемы со спиной и скелетом",
        "Грыжа или протрузия диска",
        "Заболевания, связанные с костями",
        "Заболевания ушей",
        "Морская болезнь",
        "Потеря сознания",
        "Прием лекарств",
        "Любая инвалидность",
        "Были ли вы госпитализированы за последние три года?",
        "Находитесь ли вы под воздействием алкоголя и/или наркотиков?",
        "Занимались ли вы подводным плаванием с аквалангом за последние 24 часа?",
        "Любая другая медицинская/психическая/неврологическая проблема",
        "Вы беременны в настоящее время?",
        "Рожали ли вы за последние три месяца?",
        "Были ли у вас несчастный случай или травма за последние три года?"
      ]
    }
  },
  fr: {
    personalDetails: {
      title: "Détails personnels : Déclaration du parachutiste avant le saut en tandem",
      fields: ["Nom", "Prénom", "Mobile", "E-mail", "Ville", "Téléphone", "Code postal", "Rue", "Numéro"]
    },
    riskStatistics: {
      title: "Risques du parachutisme en tandem - Statistiques des victimes",
      content: `Général - Le parachutisme depuis un avion comporte des risques pouvant entraîner des blessures graves, une invalidité sévère et la mort. Les accidents et blessures peuvent survenir en raison de divers facteurs à différentes étapes de l'activité.

Il est important de savoir que des accidents ou des blessures se produisent même lorsque le vol et le saut ont été effectués conformément à toutes les instructions, procédures, exigences légales et réglementations.

Statistiques mondiales : Sur environ 750 000 sauts en tandem, un décès est signalé. En parachutisme en tandem, les blessures surviennent environ 1 fois sur 1 100 sauts.

Je déclare avoir lu et compris ce qui précède et il m'est clair que j'ai le droit de choisir d'annuler ou de reporter le saut sans aucune obligation financière.`
    },
    waiverDeclaration: {
      title: "Déclaration de renonciation et de décharge",
      content: `• J'ai lu les statistiques des victimes et les informations sur les risques
• Je comprends que le parachutisme comporte des risques élevés
• Je suis conscient de tous les risques et je les accepte
• Je renonce à toute réclamation contre la société
• J'accepte l'entière responsabilité de tout dommage`
    },
    healthDeclaration: {
      title: "Déclaration de santé pour le parachutiste en tandem",
      intro: "Pour éviter les risques inutiles, veuillez remplir la déclaration de santé et détailler même les cas qui ne vous semblent pas significatifs.",
      questions: [
        "Souffrez-vous actuellement d'une maladie quelconque ?",
        "Luxation du genou/de l'épaule",
        "Fractures ou entorses",
        "Problèmes de dos et du squelette",
        "Hernie discale ou bombement discal",
        "Maladies liées aux os",
        "Maladies de l'oreille",
        "Mal des transports",
        "Perte de conscience",
        "Prise de médicaments",
        "Tout handicap",
        "Avez-vous été hospitalisé au cours des trois dernières années ?",
        "Êtes-vous sous l'influence d'alcool et/ou de drogues ?",
        "Avez-vous fait de la plongée sous-marine au cours des dernières 24 heures ?",
        "Tout autre problème médical/mental/neurologique",
        "Êtes-vous actuellement enceinte ?",
        "Avez-vous accouché au cours des trois derniers mois ?",
        "Avez-vous eu un accident ou une blessure au cours des trois dernières années ?"
      ]
    }
  },
  ar: {
    personalDetails: {
      title: "التفاصيل الشخصية: إقرار القافز قبل القفز الترادفي",
      fields: ["اللقب", "الاسم الأول", "الهاتف المحمول", "البريد الإلكتروني", "المدينة", "الهاتف", "الرمز البريدي", "الشارع", "الرقم"]
    },
    riskStatistics: {
      title: "مخاطر القفز الترادفي بالمظلات - إحصائيات الإصابات",
      content: `عام - ينطوي القفز بالمظلات من طائرة على مخاطر قد تؤدي إلى إصابات خطيرة وإعاقة شديدة والموت. قد تحدث الحوادث والإصابات بسبب عوامل مختلفة في مراحل مختلفة من النشاط.

من المهم أن تعرف أن الحوادث أو الإصابات تحدث حتى عندما تم تنفيذ الرحلة والقفزة وفقًا لجميع التعليمات والإجراءات والمتطلبات القانونية واللوائح.

إحصائيات عالمية: من حوالي 750,000 قفزة ترادفية، تم الإبلاغ عن حالة وفاة واحدة. في القفز الترادفي، تحدث الإصابات في حوالي 1 من كل 1,100 قفزة.

أقر بأنني قرأت وفهمت ما ورد أعلاه وأنه من الواضح لي أنني يحق لي اختيار إلغاء أو تأجيل القفزة دون أي التزام مالي.`
    },
    waiverDeclaration: {
      title: "إقرار التنازل والإعفاء",
      content: `• لقد قرأت إحصائيات الإصابات ومعلومات المخاطر
• أفهم أن القفز بالمظلات ينطوي على مخاطر عالية
• أنا على علم بجميع المخاطر وأقبلها
• أتنازل عن جميع المطالبات ضد الشركة
• أتحمل المسؤولية الكاملة عن أي ضرر`
    },
    healthDeclaration: {
      title: "الإقرار الصحي للقافز الترادفي",
      intro: "لتجنب المخاطر غير الضرورية، يرجى إكمال الإقرار الصحي وتفصيل حتى الحالات التي لا تبدو مهمة بالنسبة لك.",
      questions: [
        "هل تعاني حاليًا من أي مرض؟",
        "خلع الركبة/الكتف",
        "كسور أو التواءات",
        "مشاكل الظهر والهيكل العظمي",
        "انزلاق أو بروز غضروفي",
        "أمراض متعلقة بالعظام",
        "أمراض الأذن",
        "دوار الحركة",
        "فقدان الوعي",
        "تناول الأدوية",
        "أي إعاقة",
        "هل تم إدخالك المستشفى في السنوات الثلاث الماضية؟",
        "هل أنت تحت تأثير الكحول و/أو المخدرات؟",
        "هل قمت بالغوص بأجهزة التنفس في الـ 24 ساعة الماضية؟",
        "أي مشكلة طبية/نفسية/عصبية أخرى",
        "هل أنت حامل حاليًا؟",
        "هل ولدت في الأشهر الثلاثة الماضية؟",
        "هل تعرضت لحادث أو إصابة في السنوات الثلاث الماضية؟"
      ]
    }
  },
  it: {
    personalDetails: {
      title: "Dettagli personali: Dichiarazione del paracadutista prima del salto in tandem",
      fields: ["Cognome", "Nome", "Cellulare", "Email", "Città", "Telefono", "CAP", "Via", "Numero"]
    },
    riskStatistics: {
      title: "Rischi del paracadutismo in tandem - Statistiche sugli infortuni",
      content: `Generale - Il paracadutismo da un aereo comporta rischi che possono causare lesioni gravi, disabilità grave e morte. Incidenti e lesioni possono verificarsi a causa di vari fattori in diverse fasi dell'attività.

È importante sapere che incidenti o lesioni si verificano anche quando il volo e il salto sono stati eseguiti secondo tutte le istruzioni, procedure, requisiti legali e regolamenti.

Statistiche mondiali: Su circa 750.000 salti in tandem, viene segnalato un decesso. Nel paracadutismo in tandem, le lesioni si verificano circa 1 su 1.100 salti.

Dichiaro di aver letto e compreso quanto sopra ed è chiaro che ho il diritto di scegliere di cancellare o posticipare il salto senza alcun obbligo finanziario.`
    },
    waiverDeclaration: {
      title: "Dichiarazione di rinuncia e liberatoria",
      content: `• Ho letto le statistiche sugli infortuni e le informazioni sui rischi
• Capisco che il paracadutismo comporta alti rischi
• Sono consapevole di tutti i rischi e li accetto
• Rinuncio a qualsiasi reclamo contro la società
• Accetto la piena responsabilità per qualsiasi danno`
    },
    healthDeclaration: {
      title: "Dichiarazione sanitaria per paracadutista in tandem",
      intro: "Per evitare rischi inutili, si prega di compilare la dichiarazione sanitaria e dettagliare anche i casi che non sembrano significativi.",
      questions: [
        "Soffri attualmente di qualche malattia?",
        "Lussazione di ginocchio/spalla",
        "Fratture o distorsioni",
        "Problemi alla schiena e allo scheletro",
        "Ernia del disco o protrusione discale",
        "Malattie legate alle ossa",
        "Malattie dell'orecchio",
        "Mal di mare",
        "Perdita di coscienza",
        "Assunzione di farmaci",
        "Qualsiasi disabilità",
        "Sei stato ricoverato negli ultimi tre anni?",
        "Sei sotto l'influenza di alcol e/o droghe?",
        "Hai fatto immersioni subacquee nelle ultime 24 ore?",
        "Qualsiasi altro problema medico/mentale/neurologico",
        "Sei attualmente incinta?",
        "Hai partorito negli ultimi tre mesi?",
        "Hai avuto un incidente o un infortunio negli ultimi tre anni?"
      ]
    }
  },
  es: {
    personalDetails: {
      title: "Detalles personales: Declaración del paracaidista antes del salto en tándem",
      fields: ["Apellido", "Nombre", "Móvil", "Correo electrónico", "Ciudad", "Teléfono", "Código postal", "Calle", "Número"]
    },
    riskStatistics: {
      title: "Riesgos del paracaidismo en tándem - Estadísticas de lesionados",
      content: `General - El paracaidismo desde un avión implica riesgos que pueden resultar en lesiones graves, discapacidad severa y muerte. Los accidentes y lesiones pueden ocurrir debido a varios factores en diferentes etapas de la actividad.

Es importante saber que los accidentes o lesiones ocurren incluso cuando el vuelo y el salto se realizaron de acuerdo con todas las instrucciones, procedimientos, requisitos legales y regulaciones.

Estadísticas mundiales: De aproximadamente 750,000 saltos en tándem, se reporta una fatalidad. En paracaidismo en tándem, las lesiones ocurren aproximadamente en 1 de cada 1,100 saltos.

Declaro que he leído y entendido lo anterior y me queda claro que tengo derecho a elegir cancelar o posponer el salto sin ninguna obligación financiera.`
    },
    waiverDeclaration: {
      title: "Declaración de renuncia y liberación",
      content: `• He leído las estadísticas de lesionados y la información sobre riesgos
• Entiendo que el paracaidismo implica alto riesgo
• Estoy consciente de todos los riesgos y los acepto
• Renuncio a todas las reclamaciones contra la empresa
• Acepto la responsabilidad total por cualquier daño`
    },
    healthDeclaration: {
      title: "Declaración de salud para paracaidista en tándem",
      intro: "Para evitar riesgos innecesarios, por favor complete la declaración de salud y detalle incluso casos que no le parezcan significativos.",
      questions: [
        "¿Sufre actualmente de alguna enfermedad?",
        "Dislocación de rodilla/hombro",
        "Fracturas o esguinces",
        "Problemas de espalda y esqueleto",
        "Hernia de disco o abombamiento discal",
        "Enfermedades relacionadas con los huesos",
        "Enfermedades del oído",
        "Mareo por movimiento",
        "Pérdida de consciencia",
        "Toma de medicamentos",
        "Cualquier discapacidad",
        "¿Ha sido hospitalizado en los últimos tres años?",
        "¿Está bajo la influencia de alcohol y/o drogas?",
        "¿Ha buceado con equipo en las últimas 24 horas?",
        "Cualquier otro problema médico/mental/neurológico",
        "¿Está embarazada actualmente?",
        "¿Ha dado a luz en los últimos tres meses?",
        "¿Ha tenido un accidente o lesión en los últimos tres años?"
      ]
    }
  }
};

// Legacy exports for backwards compatibility
export const adultWaiverText = waiverTexts.he;
export const minorWaiverText = {
  note: "טופס זה מיועד לצונחים מתחת לגיל 18 ודורש חתימת אפוטרופוס"
};
