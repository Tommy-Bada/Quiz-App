
// var nextButtons = document.getElementsByClassName('nxt');
// for (let i = 0; i < nextButtons.length; i++) {
//     nextButtons[i].addEventListener("click", function scrollRight(){  
//         let questionBox = document.getElementsByClassName('question')
//             questionBox[i].style.marginLeft = "-98vw";
//     })
// }

// var options = document.getElementsByClassName('option');
//     options[i].addEventListener("click", function scrollRight(i){  
//         let questionBox = document.getElementsByClassName('question')
//             questionBox[i].style.marginLeft = "-98vw";
//     })

    var startButton = document.getElementById("start-button")
        startButton.addEventListener("click", function scrollRight(){  
            let introPage = document.getElementById("intro")
            introPage.style.marginLeft = "-90vw";
        })