
var nextButtons = document.getElementsByClassName('nxt');
for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener("click", function scrollRight(){  
        let questionBox = document.getElementsByClassName('question')
            questionBox[i].style.marginLeft = "-98vw";
    })
}

var options = document.getElementByclass('option')
