// definition
const errorColor = "#ff4040";
const contrastColor = "#c0c0c0";
const answerType1 = ["s", "i", "p", "a", "r"];
const answerType2 = ["i", "s", "a", "p", "r"];
const answerType3 = ["p", "r", "a", "i", "s"];
const answerType4 = ["a", "r", "i", "s", "p"];
const answerType5 = ["i", "p", "s", "r", "a"];
const answerType6 = ["r", "s", "i", "p", "a"];
const keyTotal = "the_art_of_thinking.total.";
const keyRadioButton = "the_art_of_thinking.radio_button.";

const questionnaire = [
    {
      item:"A",
      question:"When there is a conflict between people over ideas, I tend to favor the side that:",
      answers: [
          "Identifies and tries to bring out the conflict.",
          "Best expresses the values and ideals invloved.",
          "Best reflect my personal opinions and experience.",
          "Approaches the situation with the most logic and consistency.",
          "Expresses the argument most forcefully and concisely."
      ],
      type:answerType1
    },
    {
      item:"B",
      question:"When I begin work on a group project, what is most important to me is:",
      answers: [
          "Understanding the purposes and value of the project.",
          "Discovering the goals and values of individuals in the group.",
          "Determining how we are to go about doing the project.",
          "Understanding how the project can be of benefit to the group.",
          "Getting the project organized and under way."
      ],
      type:answerType2
    },
    {
      item:"C",
      question:"Generally speaking, I absorb new ideas best by:",
      answers: [
          "Relating them to current or future activities.",
          "Applying them to concrete situations.",
          "Concentration and careful analysis.",
          "Understanding how they are similar to familiar ideas.",
          "Contrasting them to other ideas."
      ],
      type:answerType3
    },
    {
      item:"D",
      question:"For me, charts and graphs in a book or article are usually:",
      answers: [
          "More useful than the narrative, if they are accurate.",
          "Useful, if they clearly display the important facts.",
          "Useful, if supported and explained by the narrative.",
          "Useful, if they raise questions about the narrative.",
          "No more and no less useful than other material."
      ],
      type:answerType4
    },
    {
      item:"E",
      question:"If I were asked to do a research project, I would probably start by:",
      answers: [
          "Trying to fit the project into a broad perspective.",
          "Deciding if I can do it alone or will need help.",
          "Speculating about what the possible outcomes might be.",
          "Determining whether or not the project should be done.",
          "Trying to fomulate the problem as thoroughly as possible."
      ],
      type:answerType5
    },
    {
      item:"F",
      question:"If I were to gather information from neighbors about a community concern, I would prefer to:",
      answers: [
          "Meet with them individually and ask specific questions.",
          "Hold an open meeting and ask them to air their views.",
          "Interview them in small groups and ask general questions.",
          "Meet informally with key people to get their ideas.",
          "Ask them to bring me all the relevant information that they have."
      ],
      type:answerType6
    },
    {
      item:"G",
      question:"I am likely to believe that something is true if it:",
      answers: [
          "Has held up against opposition.",
          "Fits with other things that I believe.",
          "Has been shown to hold up in practice.",
          "Makes sense logically and scientifically.",
          "Can be personally verified by observable facts."
      ],
      type:answerType1
    },
    {
      item:"H",
      question:"When I read a magazine article in my leisure time, it is likely to be about:",
      answers: [
          "How someone resolved a personal or social problem.",
          "A controversial social and political issue.",
          "An account of scientific or historical research.",
          "An interesting, humorous person or event.",
          "A true account of someone's interesting experience."
      ],
      type:answerType2
    },
    {
      item:"I",
      question:"When I read a report at work, I am likely to pay the most attention to:",
      answers: [
          "The relation of the conclusion to my own experience.",
          "Whether or not the recommendations can be accomplished.",
          "The validity of the findings, backed up by data.",
          "The writer's understanding of goals and objectives.",
          "The inferences that are drawn from the data."
      ],
      type:answerType3
    },
    {
      item:"J",
      question:"When I have a task to do, the first thing I want to know is:",
      answers: [
          "What the best method is for getting the task done.",
          "Who wants the task done and when.",
          "Why the task is worth doing.",
          "What effect it may have on other tasks that have to be done.",
          "What the immediate benefit is for doing the task."
      ],
      type:answerType4
    },
    {
      item:"K",
      question:"I ususally learn the most about how to do something new by:",
      answers: [
          "Understanding how it is related to other things I know.",
          "Starting in to practice it as soon as possible.",
          "Listening to differing views about how it is done.",
          "Have someone show me how to do it.",
          "Analyzing how to do it the best way."
      ],
      type:answerType5
    },
    {
      item:"L",
      question:"If I were to be tested or examined, I would prefer:",
      answers: [
          "An objective, problem-oriented set of questions on the subject.",
          "A debate with others who are also being tested.",
          "An oral-visual presentation covering what I known.",
          "An informal report on how I have applied what I have learned.",
          "A written report covering background, theory, and method."
      ],
      type:answerType6
    },
    {
      item:"M",
      question:"People whose abilities I respect the most are likely to be:",
      answers: [
          "Philosophers and statesman.",
          "Writers and teachers.",
          "Business and government leaders.",
          "Economists and engineers.",
          "Farmers and journalists."
      ],
      type:answerType1
    },
    {
      item:"N",
      question:"Generally speaking, I find a theory useful if it:",
      answers: [
          "Seems related to other theories or ideas that I have learned.",
          "Explains things to me in a new way.",
          "Can systematically explain a number of related situations.",
          "Serves to clarify my own experience and observations.",
          "Has a practical and concrete application."
      ],
      type:answerType2
    },
    {
      item:"O",
      question:"When I read an article on a controversial subject, I prefer that it:",
      answers: [
          "Show the benefits to me for choosing a point of view.",
          "Set forth all the facts in the controversy.",
          "Logically outline the issues involved.",
          "Identify the values supported by the writer.",
          "Highlight both sides of the issue and clarify the conflict."
      ],
      type:answerType3
    },
    {
      item:"P",
      question:"If I read a book outside my field, I am most likely to do so because of:",
      answers: [
          "An interest in improving my professional knowledge.",
          "Having been told it would be useful by someone I respect.",
          "A desire to extend my general knowledge.",
          "A desire to get outside my field for a change.",
          "Curiosity to learn more about the specific subject."
      ],
      type:answerType4
    },
    {
      item:"Q",
      question:"When I first approach a technical problem, I am most likely to:",
      answers: [
          "Try to relate it to a broader problem or theory.",
          "Look for ways to get the problem solved quickly.",
          "Think of a number of opposing ways to solve it.",
          "Look for ways that others might have solved it.",
          "Try to find the best procedure for solving it."
      ],
      type:answerType5
    },
    {
      item:"R",
      question:"Generally speaking, I am most inclined to:",
      answers: [
          "Find existing methods that work, and use them as well as possible.",
          "Speculate about how dissimilar methods might work together.",
          "Discover new and better methods.",
          "Find ways to make existing methods work in new and better way.",
          "Figure out how existing methods ought to work."
      ],
      type:answerType6
    }
]

const report = [
    {
        type:"Synthesist",
        characterized:[
            "Integrative view",
            "Sees likeness in apparent unlikes",
            "Seeks conflict & synthesis",
            "Interested in change",
            "Speculative",
            "Data meaningless without interpretation"
        ],
        strengths:[
            "Focus on underlying assumptions",
            "Points out abstract conceptual aspects",
            "Good at preventing over-agreement",
            "Best in controversial, conflict-laden situations",
            "Provides debate & creativity"
        ],
        liabilities:[
            "May screen out agreement",
            "May seek conflict unnecesssarily",
            "May try too hard for change & newness",
            "May theorize excessively",
            "Can appear uncommitted"
        ]
    },
    {
        type:"Idealist",
        characterized:[
            "Assimilative or holistic view",
            "Broad range of views welcomed",
            "Seeks ideal solutions",
            "Interested in values",
            "Receptive",
            "Data & theory of equal value"
        ],
        strengths:[
            "Focus on process, relationships",
            "Points out values & aspirations",
            "Good at articulating goals",
            "Best in unstructured, value-laden situations",
            "Provides broad view, goals & standards"
        ],
        liabilities:[
            "May screen out \"hard\" data",
            "May delay from too many choices",
            "May try too hard for \"perfect\" solutions",
            "May overlook details",
            "Can appear overly sentimental"
        ]
    },
    {
        type:"Pragmatist",
        characterized:[
            "Eclectic view",
            "\"Whatever works\"",
            "Seeks shortest route to payoff",
            "Interested in innovation",
            "Adaptive",
            "Any data or theory that gets us there"
        ],
        strengths:[
            "Focus on payoff",
            "Points out tactics & strategies",
            "Good at identifying impacts",
            "Best in complex, incremental situations",
            "Provides experiment & innovation"
        ],
        liabilities:[
            "May screen out long-range aspects",
            "May rush too quickly to payoff",
            "May try too hard for expediency",
            "May rely too much on what \"sells\"",
            "Can appear over-compromising"
        ]
    },
    {
        type:"Analyst",
        characterized:[
            "Formal logic & deduction",
            "Seeks \"one best way\"",
            "Seeks models & formulas",
            "Interested in \"scientific\" solutions",
            "Prescriptive",
            "Theory and method over data"
        ],
        strengths:[
            "Focus on methods & plan",
            "Points out data & details",
            "Good at model-building & planning",
            "Best in structured, calculatable situations",
            "Provides stability & structure"
        ],
        liabilities:[
            "May screen out values & subjectives",
            "May over-plan, over-analyze",
            "May try too hard for predictability",
            "May be inflexible, overly cautious",
            "Can appear tunnel-visioned"
        ]
    },
    {
        type:"Realist",
        characterized:[
            "Empirical view & induction",
            "Relies on \"facts\" & expert opinion",
            "Seeks solutions that meet current needs",
            "Interested in concrete results",
            "Corrective",
            "Data over theory"
        ],
        strengths:[
            "Focus on facts & results",
            "Points out realities & resources",
            "Good at simplifying, \"cutting through\"",
            "Best in well-defined, objective situations",
            "Provides drive & momentum"
        ],
        liabilities:[
            "May screen out disagreement",
            "May rush to over-simplified solutions",
            "May try too hard for consensus & immediate response",
            "May over-emphasize perceived \"facts\"",
            "Can appear too result-oriented"
        ]
    }
]

