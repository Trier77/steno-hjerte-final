const translations = {
  /* HER STÅR DE DANSKE TEKSTER TIL DIVERSE SIDER */
  da: {
    rygning: {
      left: {
        label: "Rygning Historisk",
        heading: "Rygning Historisk",
        intro:
          "Læger har vidst siden midten af 1900-tallet, at rygning øger risikoen for hjerte-kar-sygdom. Mænd har historisk set røget mere end kvinder. Derfor blev blodpropper i hjertet opfattet som en mandesygdom eller “direktørsygdom”, fordi det i høj grad var mænd med store cigarer og store maver, der blev ramt.",
        body: "",
        stats: [
          { value: "75%", description: "af mænd røg i 1950" },
          { value: "40%", description: "af kvinder røg i 1950" },
        ],
      },
      right: {
        label: "Rygning i dag og kvinders hjerter",
        heading: "Rygning i dag og kvinders hjerter",
        intro:
          'I dag ryger lige mange kvinder og mænd, men forskning har vist, at rygning er "farligere" for kvinders hjerter. Hvis en kvinde ryger stiger hendes risiko for en hjertekarsygdom med 25 % mere, end en mands gør. Forskere er ikke klar over, hvad årsagen er.',
        body: "",
        stats: [
          { value: "25%", description: "Større risiko for kvinder end mænd" },
        ],
      },
      dragLabel: "Rygning og hjerte-kar-sygdomme - før og nu",
    },
    kraeftbehandling: {
      steps: [
        {
          heading: "Brystkræft og hjertesygdomme",
          body: "Hvis man er blevet behandlet for brystkræft, har man større risiko for senere at udvikle en hjertesygdom. 99 % af patienter med brystkræft er kvinder. 9 ud af 10 af brystkræftpatienter får stråling som en del af deres behandling.",
          hint: "Prøv at fjerne kræftknuden med stråling",
        },
        {
          heading: "Stråling mod brystkræft kan skade hjertet",
          body: "Du fjernede kræftknuden, men der var også en del af strålingen, der ramte hjertet. Det kan give ar på hjertemusklen og føre til sygdom. Forskningen i sammenhængen mellem brystkræft og hjertesygdom er især vokset inden for de seneste 20–25 år.",
          hint: null,
        },
      ],
    },
    startside: {
      heading: "Det Oversete Hjerte",
      body: "Tryk på kroppen og undersøg sammenhænge mellem køn og hjertekarsygdomme.",
    },
    hjerteknap: {
      heading: "Om hjertet",
    },
    depression: {
      neurons: [
        {
          heading: "Depression og hjertet",
          body: "Depression og andre psykiske forhold kan påvirke hjertet negativt. Forskere er først begyndt at undersøge sammenhængen mellem hjernen og hjerte-kar-sygdomme inden for de seneste 20-30 år.",
        },
        {
          heading: "Depression rammer flest kvinder",
          body: "Dobbelt så mange kvinder som mænd bliver ramt af depression i løbet af livet. Derfor er depression særligt en overset risiko for hjerte-kar-sygdom hos kvinder.",
        },
        {
          heading: "Depression kan gøre hjertet sygt",
          body: "Nyere forskning viser, at hvis man bliver ramt af depression, har man større risiko for at blive ramt af hjerte-kar-sygdom senere i livet.",
        },
        {
          heading: "Hjertesygdomme bliver værre af depression",
          body: "Hvis man i forvejen har en hjerte-kar-sygdom, og bliver ramt af depression, vil sygdommen blive værre hurtigere.",
        },
      ],
    },
    blodsukker: {
      men: "Mænd",
      women: "Kvinder",
      sliderLow: "Normalt",
      sliderHigh: "Diabetes",

      steps: [
        {
          heading: "Diabetes og hjertet",
          body: "Diabetes er en sygdom, som gør, at man har for meget sukker i blodet. Sygdommen påvirker mænd og kvinders hjerter på forskellige måder.",
          hint: "Brug slideren og se hvad der sker med risikoen for hjerte-kar-sygdomme, hvis man får diabetes",
        },
        {
          heading: "Risikoen for hjerte-kar-sygdom uden diabetes",
          body: "Hvis 10 mænd omkring 50-60 år uden diabetes bliver ramt af en hjerte-kar-sygdom, vil omkring 7 kvinder uden diabetes blive ramt.",
        },
        {
          heading: "Kvinders hjerter tager større skade af diabetes",
          body: 'Begge køns risiko for at få en hjerte-kar-sygdom stiger meget, hvis de bliver ramt af diabetes. Kvinders risiko stiger mere end mænds. Forskere er ikke sikre på, hvad der gør diabetes "farligere" for kvinder.',
        },
      ],
    },
    hormoner: {
      dragHint: "← Alder (år) →",
      vesselHintStart: "Træk og undersøg, hvad der sker med kvinders blodkar,",
      vesselHintStartBold: "når de bliver ældre",
      vesselHintEnd: "Du har nu set, hvad alderen gør ved blodkarrene!",
      sliderStart: "Før",
      sliderEnd: "Efter",
      stages: [
        {
          heading: "Hormoner og kvinders hjerter",
          body: "Kønshormonet østrogen dannes i æggestokkene. Østrogen beskytter kvinders kroppe mod hjerte-kar-sygdom frem til overgangsalderen. Hvordan kvinders hormoner påvirker hjertet, er først for nylig begyndt at få mere opmærksomhed i forskning.",
        },
        {
          heading: "Kvinder har meget østrogen i blodet",
          body: "Kønshormonet østrogen beskytter hjertet mod forkalkning, stive blodkar og højt blodtryk frem til overgangsalderen.",
          caption: "● Blodårerne er glatte og flowet er godt",
        },
        {
          heading: "Mængden af østrogen falder drastisk",
          body: "De fleste kvinder går i overgangsalderen, når de er mellem 45 og 55 år. Herefter falder mængden af østrogen, og risikoen for hjerte-kar-sygdomme begynder at stige kraftigt. Blodkarrene bliver stivere, og blodtrykket stiger.",
          caption:
            "● Væggene bliver tykkere, og der opstår forkalkninger på indersiden",
        },
        {
          heading: "Kvinders blodtryk bliver højere end mænds",
          body: "Omkring 60-65-årsalderen bliver kvinders blodtryk gennemsnitligt højere end mænds. Forhøjet blodtryk øger risikoen for hjerte-kar-sygdomme.",
          caption: "● Blodtrykket bliver højere",
        },
        {
          heading: "Kvinder og mænds blodkar er lige syge",
          body: "Omtrent 20 år efter, at kvinder går i overgangsalderen, er deres risiko for hjerte-kar-sygdom den samme som mænds.",
          caption:
            "● Endnu stærkere åreforkalkning, stive kar og højt blodtryk",
        },
        {
          heading: "Den oversete sammenhæng",
          body: "Mænd dør syv år tidligere end kvinder af hjerte-kar-sygdom, fordi østrogen beskytter kvinders hjerter. Nyere forskning viser dog, at sygdomme i kvinders hormoner som for eksempel endometriose og PCOS kan øge risikoen for hjerte-kar-sygdom med op til 30 %. Der mangler stadig forskning på området.",
        },
      ],
    },
    graviditet: {
      labels: [
        "Graviditet",
        "Graviditets-\n\ndiabetes",
        "Svangerskabs-\n\nforgiftning",
        "For tidlig\n\nfødsel",
      ],
      steps: [
        {
          heading: "Graviditet og kvinders hjerter",
          body: "Hjerteforskning har historisk været fokuseret på mænd. Derfor er det først inden for de seneste 20-30 år, at forskere er begyndt at dykke ned i sammenhængen mellem kvinders graviditeter og hjerte-kar-sygodom senere i livet.",
          hintStart: "Prøv at trække",
          hintEnd: "i speedometeret",
        },
        {
          heading: "Diabetes under graviditet kan gøre hjertet sygt",
          body: "Omkring 3-4% af alle gravide udvikler diabetes under en graviditet. Sygdommen forsvinder som regel kort tid efter fødslen. Nyere forskning på, at graviditetsdiabetes kan være et vigtigt tegn på hjerte-kar-sygdom senere i livet.",
        },
        {
          heading: "Svangerskabsforgiftning og hjertet",
          body: "Svangerskabsforgiftning er en sygdom, man kan få som gravid. Symptomerne er blandt andet hovedpine og forhøjet blodtryk. Nyere forskning viser, at kvinder, der har haft svangerskabsforgiftning, har større risiko for atfå en hjerte-kar-sygdom senere i livet.",
        },
        {
          heading: "For tidlig fødsel og hjerte-kar-sygdom",
          body: "Ny forskning har vist, at kvinder der føder 3 uger før termin, har cirka 40% øget risiko for senere at udvikle en hjerte-kar-sygdom. Risikoen bliver større jo tidligere fødslen sker.",
        },
      ],
    },
    notFound: {
      log: [
        { type: "sys", text: "SYSTEM BOOT… OK" },
        { type: "sys", text: "Tjekker om alt virker…" },
        { type: "ok", text: "Skærm: TIL" },
        { type: "ok", text: "Strøm: TILSTEDE" },
        { type: "ok", text: "Personale: ET STED DERUDE" },
        { type: "ok", text: "Kaffe: VARM (sandsynligvis)" },
        { type: "sys", text: "Alt ser fint ud. Indlæser side…" },
        { type: "err", text: "FEJL 0x404 — SIDE_IKKE_FUNDET" },
        { type: "sys", text: "Interessant." },
        { type: "warn", text: "Prøver igen, lidt mere seriøst denne gang…" },
        { type: "err", text: "FEJL 0x404 — STADIG_IKKE_FUNDET" },
        {
          type: "sys",
          text: "Imponerende. Vi ved ikke hvordan, men du er på en eller anden måde endt herude.",
        },
        { type: "warn", text: "Sender hjælpeanmodning…" },
        { type: "sys", text: "Hjælpen er gået hjem for i dag." },
        { type: "warn", text: "Googler fejlkoden…" },
        { type: "sys", text: "Google kender den heller ikke. Det er nyt." },
        { type: "warn", text: "Spørger en kollega…" },
        { type: "sys", text: "Kollegaen pegede på en anden kollega." },
        { type: "warn", text: "Spørger den anden kollega…" },
        { type: "sys", text: "Den anden kollega er på frokost." },
        { type: "warn", text: "Genindlæser side (forsøg 1/3)…" },
        { type: "err", text: "MISLYKKET — SIDEN ER STADIG VÆK" },
        { type: "warn", text: "Genindlæser side (forsøg 2/3)…" },
        { type: "err", text: "MISLYKKET — DEN KOMMER IKKE TILBAGE" },
        { type: "warn", text: "Genindlæser side (forsøg 3/3)…" },
        { type: "err", text: "MISLYKKET — VI HOLDER OP MED AT PRØVE" },
        { type: "sys", text: "Analyserer situationen…" },
        { type: "sys", text: "Situationen er: ikke god." },
        { type: "err", text: "KRITISK FEJL: INGEN VED HVAD DER SKER" },
        { type: "sys", text: "Diagnostik afsluttet. Tak for din tålmodighed." },
        { type: "fin", text: "Konklusion: Prøv at gå tilbage til startsiden." },
      ],

      homeBtn: "< TIL FORSIDEN",
      interference: "INTERFERENS REGISTRERET",
    },

    quiz: {
      title: "Quiz",
      intro:
        "Test din viden om hjertet og hjertesygdomme. Du vil blive stillet 7 spørgsmål, og efter hvert svar får du en forklaring. God fornøjelse!",
      startBtn: "Start",
      nextBtn: "Næste spørgsmål",
      resultsTitle: "Resultat",
      resultsText:
        "Fedt, godt klaret! Du gjorde det bedre end {percentile} af alle vores besøgende!",
      playAgainBtn: "Prøv igen",
      correctLabel: "Rigtigt!",
      wrongLabel: "Forkert!",
      quitTitle: "Er du sikker?",
      quitBody: "Hvis du forlader quizzen nu, mister du al din fremgang.",
      quitConfirm: "Forlad quiz",
      quitCancel: "Fortsæt quiz",
      resultsHeading: "Resultat",
      resultsBetterThan: "Du klarede dig bedre end",
      resultsOfVisitors: "af alle andre besøgende",
      resultsBasedOn: "(Baseret på",
      resultsAttempts: "forsøg i alt)",
      completionMessage:
        "Tillykke! Du har gennemført quizzen. Se videoen eller udforsk kroppen for at lære mere om køn og hjerte-kar-sygdomme.",
      resultsCorrect: "rigtige svar",
      questions: [
        {
          question:
            "Mænd dør tidligere af hjerte-kar-sygdomme end kvinder. Hvor mange år tidligere?",
          options: ["3 år", "7 år", "15 år"],
          correct: 1,
          explanation:
            "Mænd dør i gennemsnit 7 år tidligere af hjerte-kar-sygdomme, end kvinder gør. Dog ved vi mindre om de hjertesygdomme, som primært rammer kvinder.",
        },
        {
          question:
            "Hvornår begynder kvinders risiko for at blive ramt af en hjertekarsygdom at stige meget hurtigt?",
          options: [
            "Når menstruationen begynder",
            "Ved overgangsalderen - når østrogen-niveaut falder",
            "Omkring 40-års alderen",
          ],
          correct: 1,
          explanation:
            "Det kvindelige kønshormon - østrogen - kan beskytte én overfor hjertesygdomme. Derfor bliver kvinder inden overgangsalderen sjældnere ramt af hjertesygdom. Efter overgangsalderen begynder kvinders risiko derfor at stige hurtigt.",
        },
        {
          question:
            "Hvor mange procent af danskere dør af en hjerte-kar-sygdom?",
          options: [" Ca. 5% ", " Ca. 50% ", " Ca. 20% "],
          correct: 2,
          explanation:
            "Omkring 20% af danskerne dør i dag af hjerte-kar-sygdomme, og sygdommene rammer næsten lige mange mænd og kvinder. Hjerte-kar-sygdomme er derfor nogle af de dødeligste sygdomme – kun overgået af kræft.",
        },
        {
          question:
            "Der er mange forskellige slags hjerte-kar-sygdomme, men hvilke er de mest almindelige?",
          options: [
            " Åreforkalkning og blodpropper ",
            " Medfødte hjertefejl ",
            " Hjertesygdomme under graviditet ",
          ],
          correct: 0,
          explanation:
            "Åreforkalkning hænger sammen med livsstil og er én af de mest almindelige sygdomme i blodkarrene. Hvis ens blodårer er fyldt op med kalk, har man stor risiko for at få en blodprop i hjertet.",
        },
        {
          question:
            "Hvilken af disse risikofaktor kan lede til en hjertesygdom?",
          options: [
            " Rygning ",
            " Overvægt ",
            " Diabetes under graviditet ",
            " Dårlig fordøjelse ",
            " Depression ",
          ],
          correct: [0, 1, 2, 4],
          isMultiple: true,
          explanation:
            "Man har længe vidst, at rygning og overvægt kan gøre hjertet sygt. Men inden for de seneste år har forskere opdaget, at ting, som især rammer kvinder - for eksempel depression og diabetes under graviditet - også kan øge risikoen for hjerte-kar-sygdom.",
        },
        {
          question:
            " Overvægt øger risikoen for hjertekarsygdom. Men hvor er det særligt farligt at være overvægtig henne? ",
          options: [
            " Omkring arme og hals ",
            " Omkring maven ",
            " På hofterne ",
            " På brysterne ",
          ],
          correct: 1,
          explanation:
            'Det er særligt fedt omkring maven og de indre organer, der er farligt for hjertet. Mænds fedt sætter sig typisk på maven. Deres overvægt er derfor "mere farlig" end yngre kvinders, hvor fedt i højere grad sætter sig på lår, bryster og hofter. Efter overgangsalderen begynder kvinders fedt dog også at sætte sig omkring maven.',
        },
        {
          question:
            "Kvinders hjerter er 'oversete' i forskningen, men på hvilken måde?",
          options: [
            "Forskere har historisk set troet, at mænds og kvinders hjerter havde brug for den samme behandling.",
            "Der er mindre viden om, hvordan fx rygning, depression og diabetes påvirker kvinders hjerter anderledes end mænds.",
            "Der er mindre viden om de hjerte-kar-sygdomme, der oftere rammer kvinder.",
          ],
          correct: [0, 1, 2],
          isMultiple: true,
          explanation:
            "Kvinders hjerter er oversete på flere måder. Vi ved mindre om, hvad der forårsager sygdom i kvinders hjerter, og hvorfor det sker. Vi ved også mindre om de sygdomme, der primært rammer kvinder. Dyk ned i organerne eller se videoen for at lære mere om kvinders oversete hjerter.",
        },
      ],
    },
  },
  /* HER STÅR DE ENGELSKE TEKSTER TIL DIVERSE SIDER */
  en: {
    rygning: {
      left: {
        label: "Smoking — Historic",
        heading: "Smoking — Historic",
        intro:
          'Doctors have known since the mid-20th century that smoking increases the risk of cardiovascular disease. Men have historically smoked more than women. As a result, heart attacks were seen as a male disease — or a "boardroom disease" — because it was largely men with big cigars and big stomachs who were affected.',
        body: "",
        stats: [
          { value: "75%", description: "of men smoked in 1950" },
          { value: "40%", description: "of women smoked in 1950" },
        ],
      },
      right: {
        label: "Smoking today and women's hearts",
        heading: "Smoking today and women's hearts",
        intro:
          "Today, women and men smoke in equal numbers — but research has shown that smoking is more dangerous for women's hearts. If a woman smokes, her risk of cardiovascular disease rises 25% more than a man's does. Researchers are not yet sure what causes this difference.",
        body: "",
        stats: [
          { value: "25%", description: "Higher risk for women than men" },
        ],
      },
      dragLabel: "Smoking and cardiovascular disease — then and now",
    },
    kraeftbehandling: {
      steps: [
        {
          heading: "Breast cancer and heart disease",
          body: "If you have been treated for breast cancer, you have a greater risk of developing heart disease later in life. 99% of breast cancer patients are women.\n\n9 out of 10 breast cancer patients receive radiation as part of their treatment.",
          hint: "Try to remove the tumour with radiation",
        },
        {
          heading: "Radiation for breast cancer can damage the heart",
          body: "You removed the tumour, but some of the radiation also reached the heart. This can cause scarring of the heart muscle and lead to disease.\n\nResearch into the connection between breast cancer (and its treatment) and heart disease has grown particularly over the last 20–25 years.",
          hint: null,
        },
      ],
    },
    startside: {
      heading: "The Overlooked Heart",
      body: "Press on the body and explore connections between the body, gender and cardiovascular disease",
    },
    hjerteknap: {
      heading: "The heart",
    },
    depression: {
      neurons: [
        {
          heading: "Depression and the heart",
          body: "Depression and other mental health conditions can have a negative impact on the heart. Researchers have only begun to investigate the connection between the brain and cardiovascular disease within the last 20–30 years.",
        },
        {
          heading: "Depression affects more women",
          body: "Twice as many women as men are affected by depression during their lifetime. This makes depression a particularly overlooked risk factor for cardiovascular disease in women.",
        },
        {
          heading: "Depression can make the heart sick",
          body: "Newer research shows that if you are affected by depression, you have a greater risk of developing cardiovascular disease later in life.",
        },
        {
          heading: "Heart disease gets worse with depression",
          body: "If you already have cardiovascular disease and then develop depression, the illness will worsen more rapidly. Some studies show that depression can double the risk of heart disease.",
        },
      ],
    },
    blodsukker: {
      men: "Men",
      women: "Women",
      sliderLow: "Normal",
      sliderHigh: "Diabetes",

      steps: [
        {
          heading: "Diabetes and the heart",
          body: "Diabetes is a disease that causes too much sugar in the blood. The disease affects men's and women's hearts in different ways. Around the age of 50–60, more men than women are affected by cardiovascular disease.",
          hint: "Use the slider to see what happens to the risk of cardiovascular disease if you develop diabetes",
        },
        {
          heading: "The risk increases",
          body: "Both more women and more men are affected by cardiovascular disease if they develop diabetes. For every 10 men around age 50–60 without diabetes who develop cardiovascular disease, around 7 women without diabetes will be affected.",
        },
        {
          heading: "Diabetes makes the heart sick",
          body: "The risk of cardiovascular disease rises sharply for both sexes if they develop diabetes — but women's risk rises more than men's. Researchers are not yet sure what makes diabetes more \"dangerous\" for women.",
        },
      ],
    },
    hormoner: {
      dragHint: "← Age (years) →",
      vesselHintStart: "Drag and explore what happens to women's blood vessels",
      vesselHintStartBold: "as they get older",
      vesselHintEnd: "You have now seen what age does to the blood vessels!",
      sliderStart: "Before",
      sliderEnd: "After",
      stages: [
        {
          heading: "Hormones and women's hearts",
          body: "The sex hormone oestrogen is produced in the ovaries. Oestrogen protects women's bodies against cardiovascular disease up until menopause. How women's hormones affect the heart has only recently begun to receive more attention in research.",
        },
        {
          heading: "Women have high levels of oestrogen in the blood",
          body: "The sex hormone oestrogen protects the heart against calcification, stiff blood vessels and high blood pressure up until menopause.",
          caption: "● Blood vessels are smooth and blood flow is good",
        },
        {
          heading: "Oestrogen levels drop drastically",
          body: "Most women go through menopause between the ages of 45 and 55. After this, oestrogen levels fall and the risk of cardiovascular disease begins to rise sharply. Blood vessels become stiffer and blood pressure rises.",
          caption:
            "● The walls become thicker and calcifications develop on the inside",
        },
        {
          heading: "Women's blood pressure becomes higher than men's",
          body: "Around the age of 60–65, women's blood pressure becomes on average higher than men's. High blood pressure increases the risk of cardiovascular disease.",
          caption: "● Blood pressure rises",
        },
        {
          heading: "Women's and men's blood vessels are equally unhealthy",
          body: "Approximately 20 years after a woman has gone through menopause, her risk of cardiovascular disease is the same as a man's.",
          caption:
            "● Even stronger calcification, stiff vessels and high blood pressure",
        },
        {
          heading: "The overlooked connection:",
          body: "Men die seven years earlier than women from cardiovascular disease, because oestrogen protects women's hearts.\n\nNewer research shows, however, that hormonal conditions such as endometriosis and PCOS can increase women's risk of cardiovascular disease by up to 30%. More research is still needed in this area.",
        },
      ],
    },
    graviditet: {
      labels: [
        "Pregnancy",
        "Gestational\n\ndiabetes",
        "Pre-eclampsia",
        "Preterm birth",
      ],
      steps: [
        {
          heading: "Pregnancy and women's hearts",
          body: "Heart research has historically focused on men. It is therefore only within the last 20–30 years that researchers have begun to explore the connection between women's pregnancies and cardiovascular disease later in life.",
          hintStart: "Try dragging",
          hintEnd: "the speedometer",
        },
        {
          heading: "Diabetes during pregnancy can damage the heart",
          body: "Around 3–4% of all pregnant women develop diabetes during pregnancy. The condition usually disappears shortly after birth. Newer research suggests that gestational diabetes may be an important early indicator of cardiovascular disease later in life.",
        },
        {
          heading: "Pre-eclampsia and the heart",
          body: "Pre-eclampsia is a condition that can develop during pregnancy. Symptoms include headaches and high blood pressure. Newer research shows that women who have had pre-eclampsia have a greater risk of developing cardiovascular disease later in life.",
        },
        {
          heading: "Preterm birth and cardiovascular disease",
          body: "New research has shown that women who give birth 3 weeks before their due date have approximately a 40% higher risk of developing cardiovascular disease later in life. The earlier the birth, the greater the risk.",
        },
      ],
    },
    notFound: {
      log: [
        { type: "sys", text: "SYSTEM BOOT… OK" },
        { type: "sys", text: "Checking if everything works…" },
        { type: "ok", text: "Screen: ON" },
        { type: "ok", text: "Power: PRESENT" },
        { type: "ok", text: "Staff: SOMEWHERE OUT THERE" },
        { type: "ok", text: "Coffee: WARM (probably)" },
        { type: "sys", text: "All looks fine. Loading page…" },
        { type: "err", text: "ERROR 0x404 — PAGE_NOT_FOUND" },
        { type: "sys", text: "Interesting." },
        {
          type: "warn",
          text: "Trying again, slightly more seriously this time…",
        },
        { type: "err", text: "ERROR 0x404 — STILL_NOT_FOUND" },
        {
          type: "sys",
          text: "Impressive. We don't know how, but you have somehow ended up out here.",
        },
        { type: "warn", text: "Sending help request…" },
        { type: "sys", text: "Help has gone home for the day." },
        { type: "warn", text: "Googling the error code…" },
        { type: "sys", text: "Google doesn't know either. That's new." },
        { type: "warn", text: "Asking a colleague…" },
        { type: "sys", text: "The colleague pointed at another colleague." },
        { type: "warn", text: "Asking the other colleague…" },
        { type: "sys", text: "The other colleague is at lunch." },
        { type: "warn", text: "Reloading page (attempt 1/3)…" },
        { type: "err", text: "FAILED — PAGE IS STILL GONE" },
        { type: "warn", text: "Reloading page (attempt 2/3)…" },
        { type: "err", text: "FAILED — IT IS NOT COMING BACK" },
        { type: "warn", text: "Reloading page (attempt 3/3)…" },
        { type: "err", text: "FAILED — WE ARE DONE TRYING" },
        { type: "sys", text: "Analysing the situation…" },
        { type: "sys", text: "The situation is: not great." },
        { type: "err", text: "CRITICAL ERROR: NOBODY KNOWS WHAT IS HAPPENING" },
        {
          type: "sys",
          text: "Diagnostics complete. Thank you for your patience.",
        },
        { type: "fin", text: "Conclusion: Try going back to the front page." },
      ],

      homeBtn: "<TO THE FRONT PAGE",
    },

    quiz: {
      title: "Quiz",
      intro:
        "Test your knowledge about the heart and heart disease. You will be asked 7 questions, and after each answer you will receive an explanation. Good luck!",
      startBtn: "Start",
      nextBtn: "Next question",
      resultsTitle: "Results",
      resultsText:
        "Well done! You did better than {percentile} of all our visitors!",
      playAgainBtn: "Try again",
      correctLabel: "Correct!",
      wrongLabel: "Wrong!",
      quitTitle: "Are you sure?",
      quitBody: "If you leave the quiz now, you will lose all your progress.",
      quitConfirm: "Leave quiz",
      quitCancel: "Continue quiz",
      resultsHeading: "Results",
      resultsBetterThan: "You did better than",
      resultsOfVisitors: "of all other visitors",
      resultsBasedOn: "(Based on",
      resultsAttempts: "attempts in total)",
      completionMessage:
        "Congratulations! You have completed the quiz. Watch the video or explore the body to learn more about gender and cardiovascular disease.",
      resultsCorrect: "correct answers",
      questions: [
        {
          question:
            "Men die earlier from cardiovascular disease than women. How many years earlier?",
          options: ["3 years", "7 years", "15 years"],
          correct: 1,
          explanation:
            "On average, men die 7 years earlier from cardiovascular disease than women. Surprisingly, we know less about the cardiovascular diseases that almost only affect women.",
        },
        {
          question:
            "When does a woman’s risk of cardiovascular disease begin to rise rapidly?",
          options: [
            "When menstruation begins in the teenage years",
            "During menopause, around 50 years of age",
            "Around 40 years of age",
          ],
          correct: 1,
          explanation:
            "The female sex hormone, estrogen, can protect women against cardiovascular disease. After menopause, women’s risk therefore begins to rise rapidly as their levels of estrogen decrease.",
        },
        {
          question:
            "What percentage of Danes will die of cardiovascular disease?",
          options: ["About 5%", "About 50%", "About 20%"],
          correct: 2,
          explanation:
            "About 20% of Danes die of cardiovascular disease today. Cardiovascular diseases are therefore among the deadliest diseases, only surpassed by cancer.",
        },
        {
          question:
            "There are many types of cardiovascular diseases, but which are the most common?",
          options: [
            "Blood clots",
            "Congenital heart defects",
            "Heart disease during pregnancy",
          ],
          correct: 0,
          explanation:
            "Blood clots are one of the most common diseases in blood vessels. If your blood vessels become clogged with plaque, you have a greater chance of blood clots in the heart.",
        },
        {
          question:
            "Which of these risk factors can lead to cardiovascular disease?",
          options: [
            "Smoking",
            "Obesity",
            "Diabetes during pregnancy",
            "Bad digestion",
            "Depression",
          ],
          correct: [0, 1, 2, 4],
          isMultiple: true,
          explanation:
            "It has long been known that smoking and obesity can damage the heart. However, in recent years, researchers have discovered that factors which especially affect women, like gestational diabetes and depression, can also increase the risk of cardiovascular disease.",
        },
        {
          question:
            "Obesity increases the risk of cardiovascular disease. Where on the body is it especially dangerous to be obese?",
          options: [
            "Around the stomach area",
            "Around the arms and neck",
            "On the hips",
            "On the breasts",
          ],
          correct: 0,
          explanation:
            "Fat around the stomach area and the internal organs is especially harmful to the heart. Men’s fat typically sits around the stomach while women’s fat also sits onthe hips, thighs, and breasts. Men’s obesity is therefore, on average, more dangerous than women’s obesity.",
        },
        {
          question:
            "Women’s hearts are “overlooked” in research, but in what way?",
          options: [
            "Researchers have historically believed that men and women’s hearts needed the same treatment.",
            "There is less knowledge on how e.g. smoking, depression, and diabetes affect women’s hearts differently than men’s hearts.",
            "There is less knowledge on the cardiovascular diseases that more often affect women.",
          ],
          correct: [0, 1, 2],
          isMultiple: true,
          explanation:
            "Women’s hearts are overlooked in several ways. We know less about what causes disease in women’s hearts, and why it happens. We also know less about the diseases that primarily affect women. Dive into the organs or watch the video to learn more about women’s overlooked hearts.",
        },
      ],
    },
  },
};

export default translations;
