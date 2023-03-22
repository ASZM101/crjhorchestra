/* eslint-disable @typescript-eslint/no-unused-vars */
function compactNavLogic(element: HTMLElement) {
    if (element.className === "nav") {
        element.className += " responsive";
    } else {
        element.className = "nav";
    }
}
function compactNav() {
    const element = document.getElementById("topNav");
    if (element === null) return;
    compactNavLogic(element);
}
function compactNav2() {
    const element = document.getElementById("topNav2");
    if (element === null) return;
    compactNavLogic(element);
}
function compactNav3() {
    const element = document.getElementById("topNav3");
    if (element === null) return;
    compactNavLogic(element);
}
function compactNav4() {
    const element = document.getElementById("topNav4");
    if (element === null) return;
    compactNavLogic(element);
}
function compactNav5() {
    const element = document.getElementById("topNav5");
    if (element === null) return;
    compactNavLogic(element);
}
function compactNav6() {
    const element = document.getElementById("topNav6");
    if (element === null) return;
    compactNavLogic(element);
}
function compactNav7() {
    const element = document.getElementById("topNav7");
    if (element === null) return;
    compactNavLogic(element);
}

const survey = document.getElementById("survey");
let answer1 = "", answer2 = "", sound = "", size = "";
function nextQ0() {
    if (survey === null) { return }
    survey.innerHTML = '<p class="paragraph"><i>Answer a few questions to find out which instrument is better for you!</i></p><br><p class="paragraph" id="question">Listen to each of the recordings below. Which of the following do you like better?</p><br><form class="surveyQ1"><div class="survey-recording"><input type="radio" id="violin-recording" name="recording" value="violin" class="optionsQ1 violin">&#9;<iframe width="200" height="100" src="https://www.youtube.com/embed/_sRhvueunEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="survey-recording"><input type="radio" id="viola-recording" name="recording" value="viola" class="optionsQ1 viola">&#9;<iframe width="200" height="100" src="https://www.youtube.com/embed/VMMheCbJ6l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="survey-recording"><input type="radio" id="cello-recording" name="recording" value="cello" class="optionsQ1 cello">&#9;<iframe width="200" height="100" src="https://www.youtube.com/embed/xwsWx3Au6DE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="survey-recording"><input type="radio" id="bass-recording" name="recording" value="bass" class="optionsQ1 bass">&#9;<iframe width="200" height="100" src="https://www.youtube.com/embed/Zook_bGHT3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br></form><a href="#surveySection"><button class="question1 third-section" id="next1" onclick="nextQ1()">Next</button></a>';
}
function nextQ1(): string {
    if (survey === null) { return ""; }
    const optionChecked = document.querySelector('input[name = "recording"]:checked');
    if (optionChecked === null) { return ""; }
    document.getElementById("question");
    const optionsQ1 = optionChecked.className;

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
        survey.innerHTML = '<p class="paragraph" id="question"> What type of sounds do you like better?</p><br><form class="surveyQ2"><label for="high-sound" class="paragraph"><input type="radio" id="high-sound" name="sound" value="high" class="optionsQ2 high">&#9;High</label><br><label for="medium-sound" class="paragraph"><input type="radio" id="medium-sound" name="sound" value="medium" class="optionsQ2 medium">&#9;Medium</label><br><label for="low-sound" class="paragraph"><input type="radio" id="low-sound" name="sound" value="low" class="optionsQ2 low">&#9;Low</label><br></form><a href="#surveySection"><button class="question2 third-section" id="next2" onclick="nextQ2()">Next</button></a>';
    }
    return answer1;
}
answer1 = nextQ1();
function nextQ2() : string {
    if (survey === null) { return ""; }
    const options = document.querySelector('input[name = "sound"]:checked');
    if (options === null) {return "";}
    document.getElementById("question");
    const optionsQ2 = options.className;
    if (optionsQ2 === "optionsQ2 high") {
        sound = "high";
    } else if (optionsQ2 === "optionsQ2 medium") {
        sound = "medium";
    } else if (optionsQ2 === "optionsQ2 low") {
        sound = "low";
    }
    if (sound !== "") {
        survey.innerHTML = '<p class="paragraph" id="question">What size would you like better for an instrument?</p><br><form class="surveyQ3"><label for="small-size" class="paragraph"><input type="radio" id="small-size" name="size" value="small" class="optionsQ3 small">&#9;Small</label><br><label for="large-size" class="paragraph"><input type="radio" id="large-size" name="size" value="large" class="optionsQ3 large">&#9;Large</label><br></form><a href="#surveySection"><button class="question3 third-section" id="next2" onclick="nextQ3()">Next</button></a>';
    }
    return sound;
}
sound = nextQ2();
function nextQ3(){
    if (survey === null) { return; }
    const options = document.querySelector('input[name = "size"]:checked');
    if (options === null) {return;}
    document.getElementById("question");
    const optionsQ3 = options.className;
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
            survey.innerHTML = '<img class="third-section pics" src="img/musicalNotes.png" alt="Musical Notes"><br><p class="paragraph">Results: <b>' + answer1 + '</b></p><br><p class="paragraph">Your answers to the survey suggest that the ' + answer1 + ' would really suit you! You preferred the recording of the ' + answer1 + ', and the ' + answer1 + ' has a ' + sound + ' sound and ' + size + ' size, like what you said you liked better in the survey. You should consider trying out the ' + answer1 + ' to see if you like it!</p><br><p class="paragraph"><i><b>Please note:</b> This survey is not the most accurate method of choosing an orchestra instrument. This is simply a recommendation based on your preferences from the survey. You should choose the instrument that you like best so that you will enjoy playing it!</i></p><br><a href="#surveySection"><button class="question0 third-section" id="next0" onclick="nextQ0()">Retake Survey</button></a>';
        }
        if (answer1 !== answer2 && answer2 !== "mix") {
            survey.innerHTML = '<img class="third-section pics" src="img/musicalNotes.png" alt="Musical Notes"><br><p class="paragraph">Results: <b>' + answer1 + ' or ' + answer2 + '</b></p><br><p class="paragraph">Your answers to the survey show that you preferred the recording of the ' + answer1 + ', but you like a ' + sound + ' sound and ' + size + ' size better, like the ' + answer2 + '. You should consider trying out both the ' + answer1 + ' and the ' + answer2 + ' to see which one you like better!</p><br><p class="paragraph"><i><b>Please note:</b> This survey is not the most accurate method of choosing an orchestra instrument. This is simply a recommendation based on your preferences from the survey. You should choose the instrument that you like best so that you will enjoy playing it!</i></p><br><a href="#surveySection"><button class="question0 third-section" id="next0" onclick="nextQ0()">Retake Survey</button></a>';
        }
        if (answer2 === "mix") {
            survey.innerHTML = '<img class="third-section pics" src="img/musicalNotes.png" alt="Musical Notes"><br><p class="paragraph">Results: <b>' + answer1 + '</b></p><br><p class="paragraph">Your answers to the survey suggest that the ' + answer1 + ' would suit you! You preferred the recording of the ' + answer1 + ', so you seem to like how the ' + answer1 + ' sounds. You should consider trying out the ' + answer1 + ' to see if you like it!</p><br><p class="paragraph"><i><b>Please note:</b> This survey is not the most accurate method of choosing an orchestra instrument. This is simply a recommendation based on your preferences from the survey. You should choose the instrument that you like best so that you will enjoy playing it!</i></p><br><a href="#surveySection"><button class="question0 third-section" id="next0" onclick="nextQ0()">Retake Survey</button></a>';
        }
    }
}
/* eslint-enable @typescript-eslint/no-unused-vars
 */
