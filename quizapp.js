// Start quiz and scroll right from prep info page to the question page
function scrollRight(){  
    let introPage = document.getElementById("intro");
    introPage.style.marginLeft = "-100vw";
}
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", scrollRight);

//Scroll to next question
function scrollToQuestion2(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-100vw";
}
function scrollToQuestion3(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-200vw";
}
function scrollToQuestion4(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-300vw";
}
function scrollToQuestion5(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-400vw";
}
function scrollToQuestion6(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-500vw";
}
function scrollToQuestion7(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-600vw";
}
function scrollToQuestion8(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-700vw";
}
function scrollToQuestion9(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-800vw";
}
function scrollToQuestion10(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-900vw";
}
function scrollToResult(){
    let questionPage = document.getElementsByTagName("section");
    questionPage[0].style.marginLeft = "-1000vw";
}


let result = 0
function correctOption(){
    newResult = result += 1
    document.getElementById("score").innerHTML = "You got " + newResult + " out of 10";
}
let optionButtons = document.getElementsByClassName("option");

optionButtons[0].addEventListener("click", scrollToQuestion2);
optionButtons[1].addEventListener("click", scrollToQuestion2);
optionButtons[2].addEventListener("click", scrollToQuestion2);
optionButtons[3].addEventListener("click", scrollToQuestion2);
optionButtons[4].addEventListener("click", scrollToQuestion2);

optionButtons[5].addEventListener("click", scrollToQuestion3);
optionButtons[6].addEventListener("click", scrollToQuestion3);
optionButtons[7].addEventListener("click", scrollToQuestion3);
optionButtons[8].addEventListener("click", scrollToQuestion3);
optionButtons[9].addEventListener("click", scrollToQuestion3);

optionButtons[10].addEventListener("click", scrollToQuestion4);
optionButtons[11].addEventListener("click", scrollToQuestion4);
optionButtons[12].addEventListener("click", scrollToQuestion4);
optionButtons[13].addEventListener("click", scrollToQuestion4);
optionButtons[14].addEventListener("click", scrollToQuestion4);

optionButtons[15].addEventListener("click", scrollToQuestion5);
optionButtons[16].addEventListener("click", scrollToQuestion5);
optionButtons[17].addEventListener("click", scrollToQuestion5);
optionButtons[18].addEventListener("click", scrollToQuestion5);
optionButtons[19].addEventListener("click", scrollToQuestion5);

optionButtons[20].addEventListener("click", scrollToQuestion6);
optionButtons[21].addEventListener("click", scrollToQuestion6);
optionButtons[22].addEventListener("click", scrollToQuestion6);
optionButtons[23].addEventListener("click", scrollToQuestion6);
optionButtons[24].addEventListener("click", scrollToQuestion6);

optionButtons[25].addEventListener("click", scrollToQuestion7);
optionButtons[26].addEventListener("click", scrollToQuestion7);
optionButtons[27].addEventListener("click", scrollToQuestion7);
optionButtons[28].addEventListener("click", scrollToQuestion7);
optionButtons[29].addEventListener("click", scrollToQuestion7);

optionButtons[30].addEventListener("click", scrollToQuestion8);
optionButtons[31].addEventListener("click", scrollToQuestion8);
optionButtons[32].addEventListener("click", scrollToQuestion8);
optionButtons[33].addEventListener("click", scrollToQuestion8);
optionButtons[34].addEventListener("click", scrollToQuestion8);

optionButtons[35].addEventListener("click", scrollToQuestion9);
optionButtons[36].addEventListener("click", scrollToQuestion9);
optionButtons[37].addEventListener("click", scrollToQuestion9);
optionButtons[38].addEventListener("click", scrollToQuestion9);
optionButtons[39].addEventListener("click", scrollToQuestion9);

optionButtons[40].addEventListener("click", scrollToQuestion10);
optionButtons[41].addEventListener("click", scrollToQuestion10);
optionButtons[42].addEventListener("click", scrollToQuestion10);
optionButtons[43].addEventListener("click", scrollToQuestion10);
optionButtons[44].addEventListener("click", scrollToQuestion10);

optionButtons[45].addEventListener("click", scrollToResult);
optionButtons[46].addEventListener("click", scrollToResult);
optionButtons[47].addEventListener("click", scrollToResult);
optionButtons[48].addEventListener("click", scrollToResult);
optionButtons[49].addEventListener("click", scrollToResult);

