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

function translateContent() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'content');
}

function renderDirection() {
    document.write("<span class=\"notranslate\"><h1><big>inQ</big></h1></span>");
    document.write("<h2>PREFERENCES IN WAYS OF ASKING QUESTIONS AND MAKING DECISIONS</h2>");
    document.write("<h5>by Allen F. Harrison, M.P.A. & Robert M. Bramson, Ph.D.</h5>");

    document.write("<table style=\"background-color:" + contrastColor +"; padding:10px;\">");
    document.write("<tr><th><h3>DIRECTIONS</h3></th></tr>");

    document.write("<tr><td>");
    document.write("<p>This quesionnaire has no right or wrong answers.  It is a tool which can help you identify your preferred modes of thinking, asking questions and making decisions.  To be of maximum value to you, it is important that you respond as accurate as possible in terms of the way you believe you actually behave, not as you think you should.</p>");
    document.write("<p>Each item in this questionnaire is made up of a statement followed by five possible endings.  Indicate the order in which you believe each ending applies to you.  In the radio buttons to the right of each ending, choose a rank between 1 to 5, indicating the degree to which an ending is most like you (5) and least like you (1).  Do not use any number more than once for any group of give endings.  Even if two or more endings seems equally like you, rank them anyway.  Each ending must be ranked 5, 4, 3, 2 or 1.</p>");
    document.write("</td></tr>");
    document.write("</table>");
}

function renderQuestionnaire() {
    document.write("<h3>QUESTIONNAIRE</h3>");
    document.write("<table border=0>");
    for (let i = 0; i < questionnaire.length; i++) {
        const object = questionnaire[i];

        document.write("<tr><td></td><td colspan=\"7\"><div id=\"q" + i + "\" style=\"background-color:" + errorColor + "; text-align:right;\"></div></td></tr>");
        document.write("<tr><th valign=\"top\"><span class=\"notranslate\">" + object.item + ".</span></th><th align=\"left\">" + object.question + "<th></th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>");

        for (let j = 0; j < object.answers.length; j++) {
            const n = j+1;
            const name = i + "-" + j;
            const id = object.type[j];

            document.write("<tr><td></td><td><span class=\"notranslate\">" + n + ". </span>" + object.answers[j] + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"1\"></td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"2\"></td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"3\"></td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"4\"></td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"5\"></td></tr>");
        }

        document.write("<tr><td>&nbsp;</td></tr>");
    }

    document.write("</table>");
    document.write("<table><tr>");
    document.write("<td><button type=\"button\" onclick=\"resetResult();\">Reset</button></td>");
    document.write("<td></td>");
    document.write("<td><button type=\"button\" onclick=\"evaluateResult();\">Submit</button></td>");
    document.write("</tr></table>");
    document.write("<br/><br/>");
}

function renderReport() {
    document.write("<div id=\"reportContainer\" style=\"background-color:" + contrastColor +"; padding:10px;\">");
    document.write("<h3>REPORT</h3>");
    document.write("<div id=\"piechart\" style=\"width:100%; height:300px;\"></div>");
    document.write("<br/>");
    document.write("<table>");

    for (let i = 0; i < report.length; i++) {
        const object = report[i];
        const characterized = object.characterized;
        const strengths = object.strengths;
        const liabilities = object.liabilities;

        document.write("<tr><th colspan=\"3\">" + object.type + "</th></tr>");
        document.write("<tr valign=\"top\">");
        document.write("<td width=\"33%\"><dl><dt>Characterized by:</dt>");

        for (let j = 0; j < characterized.length; j++)
            document.write("- " + characterized[j] + "<br/>");

        document.write("</dl></td>");

        document.write("<td width=\"33%\"><dl><dt>Strengths:</dt>");

        for (let j = 0; j < strengths.length; j++)
            document.write("- " + strengths[j] + "<br/>");

        document.write("</dl></td>");

        document.write("<td width=\"33%\"><dl><dt>Liabilities:</dt>");

        for (let j = 0; j < liabilities.length; j++)
            document.write("- " + liabilities[j] + "<br/>");

        document.write("</dl></td>");
        document.write("</tr>");
    }

    document.write("</table>");
    document.write("</div>");
    document.getElementById("reportContainer").style.display = "none";
}

function evaluateResult() {
    const reportContainer = document.getElementById("reportContainer");
    const responseMap = [];
    const results = {
        s:{ label:"Synthesist", count:0 },
        i:{ label:"Idealist", count:0 },
        p:{ label:"Pragmatist", count:0 },
        a:{ label:"Analyst", count:0 },
        r:{ label:"Realist", count:0 },
    };

    reportContainer.style.display = "block";

    for (let i = 0; i < questionnaire.length; i++)
    {
        responseMap[i] = [ 0, 0, 0, 0, 0 ];                     // initialize duplicate check
        document.getElementById("q" + i).innerHTML = "";        // reseting marked questions
    }

    const elements = document.getElementsByTagName("input");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.type == "radio") {
            const id = element.id;
            const value = parseInt(element.value);
            const qIndex = parseInt(element.name.split("-")[0]);

            if (element.checked)
            {
                const rIndex = value-1;

                responseMap[parseInt(qIndex)][rIndex] = responseMap[parseInt(qIndex)][rIndex]+1;
                results[id].count = parseInt(results[id].count)+value;
                localStorage.setItem(keyTotal + id, results[id].count);  // test
                localStorage.setItem(keyRadioButton + element.name, value);  // test
            }
        }
    }

    for (let i = 0; i < responseMap.length; i++)
    {
        const response = responseMap[i];
        const currentElement = document.getElementById("q" + i);
        let missingRank = [];
        let duplicateRank = [];

        for (let j = 0; j < response.length; j++) {
            const rank = parseInt(j+1);

            if (response[j] == 0) {
                missingRank[missingRank.length] = rank;
            } else if (response[j] > 1) {
                duplicateRank[duplicateRank.length] = rank;
            }
        }

        var issueElement;

        if (missingRank.length > 0) {
            missingRank = missingRank.join(", ");
            currentElement.innerHTML = currentElement.innerHTML + "<div><font color=\"white\">&nbsp;== Rank " + missingRank + " missing! ==&nbsp;</font></div>";

            if (!issueElement) {
                issueElement = currentElement;
            }
        }

        if (duplicateRank.length > 0) {
            duplicateRank = duplicateRank.join(", ");
            currentElement.innerHTML = currentElement.innerHTML + "<div><font color=\"white\">&nbsp;== Rank " + duplicateRank + " duplicated! ==&nbsp;</font></div>";

            if (!issueElement) {
                issueElement = currentElement;
            }
        }

        if (issueElement) {
            issueElement.scrollIntoView();
        }
    }

    const chart = new CanvasJS.Chart("piechart", {
        title:{ text: "The Art of Thinking Result" },
        data: [
            {
                type: "pie",
                //showInLegend: true,
                //legendText: "{indexLabel}",
                dataPoints: [
                    { y: localStorage.getItem(keyTotal + "s"), indexLabel: results["s"].label + " (" + localStorage.getItem(keyTotal + "s") + ")" },
                    { y: localStorage.getItem(keyTotal + "i"), indexLabel: results["i"].label + " (" + localStorage.getItem(keyTotal + "i") + ")" },
                    { y: localStorage.getItem(keyTotal + "p"), indexLabel: results["p"].label + " (" + localStorage.getItem(keyTotal + "p") + ")" },
                    { y: localStorage.getItem(keyTotal + "a"), indexLabel: results["a"].label + " (" + localStorage.getItem(keyTotal + "a") + ")" },
                    { y: localStorage.getItem(keyTotal + "r"), indexLabel: results["r"].label + " (" + localStorage.getItem(keyTotal + "r") + ")" }
                ]
            }
        ]
    });

    chart.render();

    if (isResultValidate()) {
        reportContainer.style.display = "block";
    } else {
        reportContainer.style.display = "none";
    }
}

function populateExistingData() {
    const elements = document.getElementsByTagName("input");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.type == "radio") {
            if (localStorage.getItem(keyRadioButton + element.name) == element.value) {
                element.checked = true;
            }
        }
    }

    if (isResultValidate()) {
        evaluateResult();
    }
}

function isResultValidate() {
    const totalS = parseInt(localStorage.getItem(keyTotal + "s"));
    const totalI = parseInt(localStorage.getItem(keyTotal + "i"));
    const totalP = parseInt(localStorage.getItem(keyTotal + "p"));
    const totalA = parseInt(localStorage.getItem(keyTotal + "a"));
    const totalR = parseInt(localStorage.getItem(keyTotal + "r"));
    console.log("s = " + totalS + ", i = " + totalI + ", p = " + totalP + ", a = " + totalA + ",r = " + totalR);

    if ((totalS+totalI+totalP+totalA+totalR) == 270) {
        return true;
    } else {
        return false;
    }
}

function resetResult() {
    localStorage.clear();
    const elements = document.getElementsByTagName("input");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.type == "radio") {
            element.checked = false;
        }
    }

    document.getElementById("reportContainer").style.display = "none";
}
