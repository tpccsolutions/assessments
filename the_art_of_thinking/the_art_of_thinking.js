// implementation
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

    document.write("<h5>Copyright inQ &#169; 1977, 1980. Bramson, Parlette, Harrison and Associates.  All Rights Reserved.</h5>");
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
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"1\" onchange=\"storeResponse('" + name + "', 1);\"></td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"2\" onchange=\"storeResponse('" + name + "', 2);\"></td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"3\" onchange=\"storeResponse('" + name + "', 3);\"></td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"4\" onchange=\"storeResponse('" + name + "', 4);\"></td>");
            document.write("<td><input type=\"radio\" name=\"" + name + "\" + id=\"" + id + "\" value=\"5\" onchange=\"storeResponse('" + name + "', 5);\"></td>");
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

function storeResponse(name, value) {
    localStorage.setItem(keyRadioButton + name, value);
}

function restoreResponse() {
    const elements = document.getElementsByTagName("input");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.type == "radio") {
            if (localStorage.getItem(keyRadioButton + element.name) == element.value) {
                element.checked = true;
            }
        }
    }

    if (validateResult()) {
        evaluateResult();
    }
}

function validateResult() {
    const totalS = parseInt(localStorage.getItem(keyTotal + "s"));
    const totalI = parseInt(localStorage.getItem(keyTotal + "i"));
    const totalP = parseInt(localStorage.getItem(keyTotal + "p"));
    const totalA = parseInt(localStorage.getItem(keyTotal + "a"));
    const totalR = parseInt(localStorage.getItem(keyTotal + "r"));
    console.log("s = " + totalS + ", i = " + totalI + ", p = " + totalP + ", a = " + totalA + ", r = " + totalR);

    if ((totalS+totalI+totalP+totalA+totalR) == 270) {
        return true;
    } else {
        return false;
    }
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

    for (let i = 0; i < questionnaire.length; i++) {
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
                localStorage.setItem(keyTotal + id, results[id].count);
            }
        }
    }

    for (let i = 0; i < responseMap.length; i++) {
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

    if (validateResult()) {
        reportContainer.style.display = "block";
    } else {
        reportContainer.style.display = "none";
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

    for (let i = 0; i < questionnaire.length; i++) {
        document.getElementById("q" + i).innerHTML = "";        // reseting marked questions
    }

    document.getElementById("reportContainer").style.display = "none";
}

