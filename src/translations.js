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
          { value: "75 %", description: "af mænd røg i 1950" },
          { value: "40 %", description: "af kvinder røg i 1950" },
        ],
      },
      right: {
        label: "Rygning i dag og kvinders hjerter",
        heading: "Rygning i dag og kvinders hjerter",
        intro:
          "I dag ryger lige mange kvinder og mænd, men forskning har vist, at rygning gør kvinders hjerter mere syge. Forskere er ikke klar over, hvad årsagen er.",
        body: "",
        stats: [
          {
            value: "25 %",
            description:
              "Rygning øger kvinders risiko for hjerte-kar-sygdom 25 % mere end mænds.",
          },
        ],
      },
      dragLabel: "Rygning og hjerte-kar-sygdomme - før og nu",
    },
    kraeftbehandling: {
      steps: [
        {
          heading: "Brystkræft og hjertesygdomme",
          body: "Hvis man er blevet behandlet for brystkræft, har man større risiko for senere hen at udvikle en hjertesygdom. 99 % af patienter med brystkræft er kvinder. 9 ud af 10 brystkræftpatienter får stråling som en del af deres behandling.",
          hint: "Prøv at fjerne kræftknuden med stråling",
        },
        {
          heading: "Stråling mod brystkræft kan skade hjertet",
          body: "Du fjernede kræftknuden, men der var også en del af strålingen, der ramte hjertet. Det kan give ar på hjertemusklen og føre til sygdom. Forskningen i sammenhængen mellem behandling af brystkræft og hjertesygdom er især vokset indenfor de seneste 20-25 år.",
          hint: "Du fik fjernet kræftknuden, men du kom også til at ramme hjertet!",
        },
      ],
    },
    startside: {
      heading: "Det oversete hjerte",
      body: "Tryk på kroppen, og undersøg sammenhænge mellem køn og hjerte-kar-sygdomme.",
    },
    hjerteknap: {
      heading: "Om hjertet",
      quiz: "Quiz",
    },
    depression: {
      neurons: [
        {
          heading: "Depression og hjertet",
          body: "Depression og andre psykiske forhold kan påvirke hjertet negativt. Forskere er først begyndt at undersøge sammenhængen mellem hjernen og hjerte-kar-sygdomme indenfor de seneste 20-30 år.",
        },
        {
          heading: "Depression rammer flest kvinder",
          body: "Dobbelt så mange kvinder som mænd bliver ramt af depression i løbet af livet. Derfor er depression særligt en overset risikofaktor for hjerte-kar-sygdom hos kvinder.",
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
          hint: "Brug slideren og se, hvad der sker med risikoen for hjerte-kar-sygdomme, hvis man får diabetes",
        },
        {
          heading: "Risikoen for hjerte-kar-sygdom\nuden diabetes",
          body: "Flere mænd bliver ramt af hjerte-kar-sygdom tidligt i livet. Hvis 10 mænd omkring 50-60 år uden diabetes bliver ramt af en hjerte-kar-sygdom, vil omkring 7 kvinder uden diabetes blive ramt.",
        },
        {
          heading: "Kvinders hjerter tager større skade af diabetes",
          body: "Diabetes påvirker både mænd og kvinders hjerter negativt. Mænds risiko for hjerte-kar-sygdomme stiger med 140 %, hvis de får diabetes. Kvinders risiko stiger med 185 %. Forskere er ikke sikre på, hvorfor diabetes gør kvinders hjerter mere syge.",
        },
      ],
    },
    hormoner: {
      dragHint: "← Alder (år) →",
      vesselHintStart: "Træk og undersøg, hvad der sker med kvinders blodkar",
      vesselHintStartBold: "når de bliver ældre.",
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
          caption: "● Blodårerne er glatte og flyder uden modstand.",
        },
        {
          heading: "Mængden af østrogen falder drastisk",
          body: "De fleste kvinder går i overgangsalderen, når de er mellem 45 og 55 år. Herefter falder mængden af østrogen, og risikoen for hjerte-kar-sygdomme begynder at stige kraftigt. Blodkarrene bliver stivere, og blodtrykket stiger.",
          caption:
            "● Blodkarrene bliver stivere, og der opstår forkalkninger på indersiden.",
        },
        {
          heading: "Kvinders blodtryk bliver højere end mænds",
          body: "Omkring 60-65-årsalderen bliver kvinders blodtryk gennemsnitligt højere end mænds. Forhøjet blodtryk øger risikoen for hjerte-kar-sygdomme.",
          caption: "● Blodtrykket bliver højere.",
        },
        {
          heading: "Kvinder og mænds blodkar er lige syge",
          body: "Omtrent 20-25 år efter, at kvinder går i overgangsalderen, er deres risiko for hjerte-kar-sygdomme den samme som mænds.",
          caption: "● Forkalkning af blodkarrene fortsætter.",
        },
        {
          heading: "Den oversete sammenhæng: hormoner og hjertet",
          body: "Mænd dør syv år tidligere end kvinder af hjerte-kar-sygdom, bl.a. fordi østrogen beskytter kvinders hjerter. Nyere forskning viser dog, at sygdomme relateret til kvinders hormoner, som for eksempel endometriose og PCOS, kan øge risikoen for hjerte-kar-sygdom med op til 30 %. Der mangler stadig forskning på området.",
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
          body: "Ny forskning peger på, at forskellige sygdomme under graviditet kan føre til, at kvinder senere i livet bliver ramt af hjerte-kar-sygdom. Træk i speedometeret og få mere viden!",
          hintStart: "Træk i speedometeret",
          hintEnd: "og få mere viden!",
        },
        {
          heading: "Diabetes under graviditet kan gøre hjertet sygt",
          body: "Omkring 3-4% af alle gravide udvikler diabetes under en graviditet. Sygdommen forsvinder som regel kort tid efter fødslen. Forskning tyder på, at graviditetsdiabetes kan øge risikoen for hjerte-kar-sygdom senere hen i livet.",
        },
        {
          heading: "Svangerskabsforgiftning og hjertet",
          body: "Svangerskabsforgiftning er en sygdom, man kan få som gravid. Symptomerne er blandt andet hovedpine og forhøjet blodtryk. Nyere forskning viser, at kvinder, der har haft svangerskabsforgiftning, har større risiko for at få en hjerte-kar-sygdom senere i livet.",
        },
        {
          heading: "For tidlig fødsel og hjerte-kar-sygdom",
          body: "Ny forskning har vist, at kvinder, der føder mere end tre uger før termin, har cirka 40 % øget risiko for senere at udvikle en hjerte-kar-sygdom. Risikoen bliver større, jo tidligere fødslen sker.",
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
        "Test din viden om hjertet og hjerte-kar-sygdomme. Du vil blive stillet syv spørgsmål, og efter hvert svar får du en forklaring. God fornøjelse!",
      startBtn: "Start",
      nextBtn: "Næste spørgsmål",
      resultsTitle: "Resultat",
      resultsText:
        "Fedt, godt klaret! Du gjorde det bedre end {percentile} af alle vores besøgende!",
      playAgainBtn: "Prøv igen",
      correctLabel: "Korrekt!",
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
        "Tillykke! Du har gennemført quizzen. Se videoen om hjertet eller udforsk kroppen for at lære mere om sammenhænge mellem køn og hjerte-kar-sygdomme.",
      resultsCorrect: "rigtige svar",
      questions: [
        {
          question:
            "Mænd dør tidligere af hjerte-kar-sygdomme end kvinder gør. Hvor mange år tidligere?",
          options: ["3 år", "7 år", "15 år"],
          correct: 1,
          explanation:
            "Mænd dør i gennemsnit syv år tidligere af hjerte-kar-sygdomme end kvinder gør. Alligevel ved vi stadig mindre om de hjerte-kar-sygdomme, der næsten udelukkende rammer kvinder.",
        },
        {
          question:
            "Hvornår begynder kvinders risiko for at blive ramt af en hjerte-kar-sygdom at stige meget hurtigt?",
          options: [
            "Når menstruationen begynder i teenageårene",
            "Ved overgangsalderen omkring 50 år",
            "Omkring 40-års alderen",
          ],
          correct: 1,
          explanation:
            "Det kvindelige kønshormon østrogen kan beskytte kvinder imod hjerte-kar-sygdomme. Efter overgangsalderen begynder kvinders risiko at stige meget hurtigt, fordi mængden af østrogen falder.",
        },
        {
          question:
            "Hvor mange procent af danskerne dør af en hjerte-kar-sygdom?",
          options: [" Ca. 5 % ", " Ca. 50 % ", " Ca. 20 % "],
          correct: 2,
          explanation:
            "Omkring 20 % af danskerne dør i dag af hjerte-kar-sygdomme. Hjerte-kar-sygdomme er derfor nogle af de dødeligste sygdomme",
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
            "Åreforkalkning er én af de mest almindelige sygdomme i blodkarrene. Hvis ens blodårer er fyldt op med kalk, har man stor risiko for at få en blodprop i hjertet.",
        },
        {
          question:
            "Hvilken af disse faktorer kan øge risikoen for hjerte-kar-sygdom?",
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
            "Man har længe vidst, at rygning og overvægt kan gøre hjertet sygt. Men inden for de seneste år har forskere opdaget, at faktorer, som især rammer kvinder - for eksempel diabetes under graviditet og depression - også kan øge risikoen for hjerte-kar-sygdom.",
        },
        {
          question:
            " Overvægt øger risikoen for hjerte-kar-sygdom. Men hvor er det særligt farligt at være overvægtig henne? ",
          options: [
            " Omkring arme og hals ",
            " Omkring maven ",
            " På hofterne ",
            " På brysterne ",
          ],
          correct: 1,
          explanation:
            "Fedt omkring maven og de indre organer er særligt skadeligt for hjertet. Mænds fedt sætter sig typisk omkring maven, mens kvinders fedt også sætter sig på lår, hofter og bryster. Derfor er mænds overvægt farligere for hjertet end kvinders overvægt.",
        },
        {
          question:
            "Kvinders hjerter er 'oversete' i forskningen, men på hvilken måde?",
          options: [
            "Forskere har historisk set troet, at mænd og kvinders syge hjerter skulle have samme behandling.",
            "Man ved mindre om, hvordan f.eks. rygning påvirker kvinders hjerter anderledes end mænds",
            "Der er mindre viden om de hjerte-kar-sygdomme, som oftere rammer kvinder.",
          ],
          correct: [0, 1, 2],
          isMultiple: true,
          explanation:
            "Kvinders hjerter er oversete på flere måder. Vi ved mindre om, hvad der gør kvinders hjerter syge, og hvorfor det sker. Vi ved også mindre om de sygdomme, der især rammer kvinder. Dyk ned i organerne, eller se videoen for at få mere viden om kvinders oversete hjerter.",
        },
      ],
    },
  },
  /* HER STÅR DE ENGELSKE TEKSTER TIL DIVERSE SIDER */
  en: {
    rygning: {
      left: {
        label: "Smoking historically",
        heading: "Smoking historically",
        intro:
          "Men have historically smoked more than women. Because of this, blood clots in the heart were considered a male disease, or a “businessman's disease”, as it was predominantly men with cigars and large waistlines who were affected.",
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
          "Today men and women smoke at equal rates, but research has shown that smoking has a more harmful effect on women's hearts. Researchers do not yet know why. If a woman smokes, her risk of developing cardiovascular disease increases with 25% more than a man’s.",
        body: "",
        stats: [
          { value: "25%", description: "increased risk for women than men" },
        ],
      },
      dragLabel: "Smoking and cardiovascular disease — Past and present",
    },
    kraeftbehandling: {
      steps: [
        {
          heading: "Breast cancer and cardiovascular disease",
          body: "People who have received treatment for breast cancer have a higher risk of developing a cardiovascular disease later in life. 99% of patients with breast cancer are women. 9 out of 10 breast cancer patients receive radiation as part of their treatment.",
          hint: "Try to remove the tumour with radiation",
        },
        {
          heading: "Radiation can damage the heart",
          body: "You removed the tumor, but some of the radiation also hit the heart. This can cause scarring on the heart muscle, which can lead to cardiovascular disease. Research on the connection between breast cancer treatment and heart disease has increased over the past 20-25 years.",
          hint: "You removed the tumor - but the heart was also negatively affected!",
        },
      ],
    },
    startside: {
      heading: "The Overlooked Heart",
      body: "Press on the body and dive into connections between gender and cardiovascular diseases.",
    },
    hjerteknap: {
      heading: "On heart disease",
      quiz: "Heart quiz",
    },
    depression: {
      neurons: [
        {
          heading: "Depression and the heart",
          body: "Depression and other psychological conditions can affect the heart negatively. Researchers have only begun researching the connection between the brain and cardiovascular diseases within the last 20-30 years.",
        },
        {
          heading: "Depression mostly affects women",
          body: "Twice as many women as men will experience a depression during their life. Depression is therefore a particularly overlooked risk factor for cardiovascular disease in women.",
        },
        {
          heading: "Depression can make the heart sick",
          body: "New research shows that individuals who experience depression have a higher risk of developing cardiovascular disease later in life.",
        },
        {
          heading: "Cardiovascular disease is worsened by depression",
          body: "Those who already have cardiovascular disease and develop depression will experience a faster progression of the disease.",
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
          body: "Diabetes is a disease that causes elevated blood sugar levels. The disease affects men's and women's hearts differently.",
          hint: "Use the slider to learn more about how diabetes affects the risk of a cardiovascular disease",
        },
        {
          heading: "The risk for cardiovascular disease\nwithout diabetes",
          body: "Cardiovascular disease tends to occur earlier in men than in women. If 10 men without diabetes between the ages of 50 to 60 develop a cardiovascular disease, about 7 women without diabetes will be affected.",
        },
        {
          heading: "Women's hearts are more damaged by diabetes",
          body: "Diabetes has a negative impact on the hearts of both men and women. Men's risk of cardiovascular disease increases by 140% if they develop diabetes. Women's risk increases by 185%. Researchers are not sure why diabetes has a more harmful effect on women's hearts.",
        },
      ],
    },
    hormoner: {
      dragHint: "← Age (years) →",
      vesselHintStart: "Drag and explore what happens to women's blood vessels",
      vesselHintStartBold: "as they get older.",
      vesselHintEnd: "You have now seen how againg affects the blood vessels!",
      sliderStart: "Before",
      sliderEnd: "After",
      stages: [
        {
          heading: "Hormones and women's hearts",
          body: "The sex hormone estrogen is produced in the ovaries. Estrogen protects the female body against cardiovascular diseases until menopause. How women’s hormones affect the heart has only recently begun to receive more attention in research.",
        },
        {
          heading: "Women have high levels of estrogen in their blood",
          body: "The sex hormone estrogen protects the heart against arterial calcification, stiff blood vessels and high blood pressure until menopause.",
          caption: "● Blood vessels are smooth and healthy.",
        },
        {
          heading: "Estrogen levels drop drastically",
          body: "Most women enter menopause between the ages of 45 and 55. Following menopause, estrogen levels fall, and the risk of developing a cardiovascular disease begins to rise significantly.",
          caption:
            "● Blood vessels begin to stiffen and calcifications start to develop.",
        },
        {
          heading: "Women's blood pressure becomes higher than men's",
          body: "Around the ages of 60 to 65, women's average blood pressure becomes higher than men's. High blood pressure increases the risk of cardiovascular disease.",
          caption: "● Blood pressure rises.",
        },
        {
          heading: "Women's and men's blood vessels are equally affected",
          body: "About 20-25 years after women enter menopause, their risk of developing a cardiovascular disease is the same as men's.",
          caption: "● Calcification and stiffening of blood vessels continues.",
        },
        {
          heading: "The overlooked connection",
          body: "Men die seven years earlier than women from cardiovascular disease because estrogen protects women's hearts. However, new research shows that hormonal related conditions, such as endometriosis and PCOS, can increase the risk of developing cardiovascular disease by up to 30%. More research in this area is still needed.",
        },
      ],
    },
    graviditet: {
      labels: [
        "Pregnancy",
        "Gestational\n\ndiabetes",
        "Preeclampsia",
        "Premature birth",
      ],
      steps: [
        {
          heading: "Pregnancy and women's hearts",
          body: "New research suggests that certain health conditions during pregnancy may increase a woman's risk of developing cardiovascular disease later in life. Explore the gauge to learn more!",
          hintStart: "Try dragging",
          hintEnd: "the gauge",
        },
        {
          heading: "Gestational diabetes can damage the heart",
          body: "About 3-4% of all pregnant women develop diabetes during pregnancy. The condition usually disappears shortly after giving birth. New research indicates that gestational diabetes can be an important indicator of increased risk of cardiovascular disease later in life.",
        },
        {
          heading: "Preeclampsia and the heart",
          body: "Preeclampsia is a condition you can develop while pregnant. Some of the symptoms include headaches and high blood pressure. New research shows that women who have had preeclampsia have a higher risk of developing a cardiovascular disease later in life.",
        },
        {
          heading: "Premature birth and cardiovascular disease",
          body: "New research has shown that women who give birth more than 3 weeks before their due date have about a 40% higher risk of developing a cardiovascular disease later in life. The earlier the birth occurs, the greater the risk.",
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
        "Test your knowledge of the heart and cardiovascular disease. You will be asked seven questions, and you will receive an explanation after each answer. Have fun!",
      startBtn: "Start",
      nextBtn: "Next question",
      resultsTitle: "Results",
      resultsText:
        "Well done! You did better than {percentile} of all our visitors!",
      playAgainBtn: "Try again",
      correctLabel: "Correct!",
      wrongLabel: "Incorrect!",
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
        "Congratulations! You have completed the quiz. Watch the video or explore the different body parts to find out more about gender differences in cardiovascular disease",
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
            "Fat around the stomach area and the internal organs is especially harmful to the heart. Men’s fat typically sits around the stomach while women’s fat also sits on the hips, thighs, and breasts. Men’s obesity is therefore, on average, more dangerous than women’s obesity.",
        },
        {
          question:
            "Women’s hearts are “overlooked” in research, but in what way?",
          options: [
            "Researchers have historically believed that men and women’s hearts needed the same treatment.",
            "There is less knowledge on how e.g. smoking, affect women’s hearts differently than men’s hearts.",
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
