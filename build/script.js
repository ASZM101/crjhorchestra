"use strict";
//Is "use strict" necessary? It gives me an error saying to "use the function form of 'use strict'", and apparently, the only way to fix the error is to write "use strict" at the beginning of every function, but I'm not sure if this is really necessary.

/* eslint-disable @typescript-eslint/no-unused-vars */
function compactNavLogic(element) {
    if (element.className === "nav") {
        element.className += " responsive";
    } else {
        element.className = "nav";
    }
}
function compactNav() {
    var element = document.getElementById("topNav");
    compactNavLogic(element);
}
function compactNav2() {
    var element = document.getElementById("topNav2");
    compactNavLogic(element);
}
function compactNav3() {
    var element = document.getElementById("topNav3");
    compactNavLogic(element);
}
function compactNav4() {
    var element = document.getElementById("topNav4");
    compactNavLogic(element);
}
function compactNav5() {
    var element = document.getElementById("topNav5");
    compactNavLogic(element);
}
function compactNav6() {
    var element = document.getElementById("topNav6");
    compactNavLogic(element);
}
function compactNav7() {
    var element = document.getElementById("topNav7");
    compactNavLogic(element);
}

var survey = document.getElementById("survey");
var answer1 = "";
var answer2 = "";
var recording = "";
var sound = "";
var size = "";
function nextQ0() {
    survey.innerHTML = '<p class="paragraph"><i>Answer a few questions to find out which instrument is better for you!</i></p><br><p class="paragraph" id="question">Listen to each of the recordings below. Which of the following do you like better?</p><br><form class="surveyQ1"><div class="survey-recording"><input type="radio" id="violin-recording" name="recording" value="violin" class="optionsQ1 violin">&#9;<iframe width="200" height="100" src="https://www.youtube.com/embed/_sRhvueunEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="survey-recording"><input type="radio" id="viola-recording" name="recording" value="viola" class="optionsQ1 viola">&#9;<iframe width="200" height="100" src="https://www.youtube.com/embed/VMMheCbJ6l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="survey-recording"><input type="radio" id="cello-recording" name="recording" value="cello" class="optionsQ1 cello">&#9;<iframe width="200" height="100" src="https://www.youtube.com/embed/xwsWx3Au6DE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="survey-recording"><input type="radio" id="bass-recording" name="recording" value="bass" class="optionsQ1 bass">&#9;<iframe width="200" height="100" src="https://www.youtube.com/embed/Zook_bGHT3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br></form><button class="question1 third-section" id="next1" onclick="nextQ1()">Next</button></div>';
}
function nextQ1() {
    var question = document.getElementById("question"), optionsQ1 = document.querySelector('input[name = "recording"]:checked').className;
    if (optionsQ1 === "optionsQ1 violin") {
        answer1 = "violin";
    } else if (optionsQ1 === "optionsQ1 viola") {
        answer1 = "viola";
    } else if (optionsQ1 === "optionsQ1 cello") {
        answer1 = "cello";
    } else if (optionsQ1 === "optionsQ1 bass") {
        answer1 = "bass";
    }
    if (answer1 !== "") {
        survey.innerHTML = '<p class="paragraph" id="question"> What type of sounds do you like better?</p><br><form class="surveyQ2"><label for="high-sound" class="paragraph"><input type="radio" id="high-sound" name="sound" value="high" class="optionsQ2 high">&#9;High</label><br><label for="medium-sound" class="paragraph"><input type="radio" id="medium-sound" name="sound" value="medium" class="optionsQ2 medium">&#9;Medium</label><br><label for="low-sound" class="paragraph"><input type="radio" id="low-sound" name="sound" value="low" class="optionsQ2 low">&#9;Low</label><br></form><button class="question2 third-section" id="next2" onclick="nextQ2()">Next</button>';
    }
    return answer1;
}
answer1 = nextQ1();
function nextQ2() {
    var question = document.getElementById("question"), optionsQ2 = document.querySelector('input[name = "sound"]:checked').className;
    if (optionsQ2 === "optionsQ2 high") {
        sound = "high";
    } else if (optionsQ2 === "optionsQ2 medium") {
        sound = "medium";
    } else if (optionsQ2 === "optionsQ2 low") {
        sound = "low";
    }
    if (sound !== "") {
        survey.innerHTML = '<p class="paragraph" id="question">What size would you like better for an instrument?</p><br><form class="surveyQ3"><label for="small-size" class="paragraph"><input type="radio" id="small-size" name="size" value="small" class="optionsQ3 small">&#9;Small</label><br><label for="large-size" class="paragraph"><input type="radio" id="large-size" name="size" value="large" class="optionsQ3 large">&#9;Large</label><br></form><button class="question3 third-section" id="next2" onclick="nextQ3()">Next</button>';
    }
    return sound;
}
sound = nextQ2();
function nextQ3() {
    var question = document.getElementById("question"), optionsQ3 = document.querySelector('input[name = "size"]:checked').className;
    if (optionsQ3 === "optionsQ3 small") {
        size = "small";
    } else if (optionsQ3 === "optionsQ3 large") {
        size = "large";
    }
    if (size !== "") {
        if (sound === "high" && size === "small") {
            answer2 = "violin";
        } else if (sound === "medium" && size === "small") {
            answer2 = "viola";
        } else if (sound === "medium" && size === "large") {
            answer2 = "cello";
        } else if (sound === "low" && size === "large") {
            answer2 = "bass";
        } else {
            answer2 = "mix";
        }
        if (answer1 === answer2) {
            survey.innerHTML = '<img class="third-section pics" src="img/musicalNotes.png" alt="Musical Notes"><br><p class="paragraph">Results: <b>' + answer1 + '</b></p><br><p class="paragraph">Your answers to the survey suggest that the ' + answer1 + ' would really suit you! You preferred the recording of the ' + answer1 + ', and the ' + answer1 + ' has a ' + sound + ' sound and ' + size + ' size, like what you said you liked better in the survey. You should consider trying out the ' + answer1 + ' to see if you like it!</p><br><p class="paragraph"><i><b>Please note:</b> This survey is not the most accurate method of choosing an orchestra instrument. This is simply a recommendation based on your preferences from the survey. You should choose the instrument that you like best so that you will enjoy playing it!</i></p><br><button class="question0 third-section" id="next0" onclick="nextQ0()">Retake Survey</button>';
        }
        if (answer1 !== answer2 && answer2 !== "mix") {
            survey.innerHTML = '<img class="third-section pics" src="img/musicalNotes.png" alt="Musical Notes"><br><p class="paragraph">Results: <b>' + answer1 + ' or ' + answer2 + '</b></p><br><p class="paragraph">Your answers to the survey show that you preferred the recording of the ' + answer1 + ', but you like a ' + sound + ' sound and ' + size + ' size better, like the ' + answer2 + '. You should consider trying out both the ' + answer1 + ' and the ' + answer2 + ' to see which one you like better!</p><br><p class="paragraph"><i><b>Please note:</b> This survey is not the most accurate method of choosing an orchestra instrument. This is simply a recommendation based on your preferences from the survey. You should choose the instrument that you like best so that you will enjoy playing it!</i></p><br><button class="question0 third-section" id="next0" onclick="nextQ0()">Retake Survey</button>';
        }
        if (answer2 === "mix") {
            survey.innerHTML = '<img class="third-section pics" src="img/musicalNotes.png" alt="Musical Notes"><br><p class="paragraph">Results: <b>' + answer1 + '</b></p><br><p class="paragraph">Your answers to the survey suggest that the ' + answer1 + ' would suit you! You preferred the recording of the ' + answer1 + ', so you seem to like how the ' + answer1 + ' sounds. You should consider trying out the ' + answer1 + ' to see if you like it!</p><br><p class="paragraph"><i><b>Please note:</b> This survey is not the most accurate method of choosing an orchestra instrument. This is simply a recommendation based on your preferences from the survey. You should choose the instrument that you like best so that you will enjoy playing it!</i></p><br><button class="question0 third-section" id="next0" onclick="nextQ0()">Retake Survey</button>';
        }
    }
}
/* eslint-enable @typescript-eslint/no-unused-vars
 */
