var nextButtons = document.getElementsByClassName('nxt');
var questionBox = document.getElementsByClassName('question')

for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener("click", function scrollRight(){  
            questionBox[i].style.marginLeft = "-98vw";
    })
}
