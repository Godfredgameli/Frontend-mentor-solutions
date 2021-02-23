//get question
let question1 = document.querySelector("#first");
question1.addEventListener("click", function () {
    //get arrow and answer
    let answer1 = document.querySelector(".one");
    let arrow1 = document.querySelector(".arrow1");
    if (answer1.style.display === "none") {
        //arrow rotates and answer shows when clicked
        answer1.style.display = "block";
        question1.style.color = "hsl(238, 29%, 16%)";
        question1.style.fontWeight = 700;
        arrow1.style.transform = "rotate(180deg)" ;
    } else{
        //Arrow and answer go to default state when clicked again
        answer1.style.display = "none";
        question1.style.color = "hsl(237, 12%, 33%)";
        question1.style.fontWeight = 400;
        arrow1.style.transform = "rotate(0deg)" ;

    }
});
//get question
let question2 = document.querySelector("#second");
question2.addEventListener("click", function () {
    //get arrow and answer
    let answer2 = document.querySelector(".two");
    let arrow2 = document.querySelector(".arrow2");
    if (answer2.style.display === "none") {
        //arrow rotates and answer shows when clicked
        answer2.style.display = "block";
        question2.style.color = "hsl(238, 29%, 16%)";
        question2.style.fontWeight = 700;
        arrow2.style.transform = "rotate(180deg)" ;
    } else{
        //Arrow and answer go to default state when clicked again
        answer2.style.display = "none";
        question2.style.color = "hsl(237, 12%, 33%)";
        question2.style.fontWeight = 400;
        arrow2.style.transform = "rotate(0deg)" ;
        
    }
});
//get question
let question3 = document.querySelector("#third");
question3.addEventListener("click", function () {
    //get arrow and answer
    let answer3 = document.querySelector(".three");
    let arrow3 = document.querySelector(".arrow3");
    if (answer3.style.display === "none") {
        //arrow rotates and answer shows when clicked
        answer3.style.display = "block";
        question3.style.color = "hsl(238, 29%, 16%)";
        question3.style.fontWeight = 700;
        arrow3.style.transform = "rotate(180deg)" ;
    } else{
        //Arrow and answer go to default state when clicked again
        answer3.style.display = "none";
        question3.style.color = "hsl(237, 12%, 33%)";
        question3.style.fontWeight = 400;
        arrow3.style.transform = "rotate(0deg)" ;

    }
});
//get question
let question4 = document.querySelector("#forth");
question4.addEventListener("click", function () {
    //get arrow and answer
    let answer4 = document.querySelector(".four");
    let arrow4 = document.querySelector(".arrow4");
    if (answer4.style.display === "none") {
        //arrow rotates and answer shows when clicked
        answer4.style.display = "block";
        question4.style.color = "hsl(238, 29%, 16%)";
        question4.style.fontWeight = 700;
        arrow4.style.transform = "rotate(180deg)" ;
    } else{
        //Arrow and answer go to default state when clicked again
        answer4.style.display = "none";
        question4.style.color = "hsl(237, 12%, 33%)";
        question4.style.fontWeight = 400;
        arrow4.style.transform = "rotate(0deg)" ;

    }
});
//get question
let question5 = document.querySelector("#fifth");
question5.addEventListener("click", function () {
    //get arrow and answer
    let answer5 = document.querySelector(".five");
    let arrow5 = document.querySelector(".arrow5");
    if (answer5.style.display === "none") {
        //arrow rotates and answer shows when clicked
        answer5.style.display = "block";
        question5.style.color = "hsl(238, 29%, 16%)";
        question5.style.fontWeight = 700;
        arrow5.style.transform = "rotate(180deg)" ;
    } else{
        //Arrow and answer go to default state when clicked again
        answer5.style.display = "none";
        question5.style.color = "hsl(237, 12%, 33%)";
        question5.style.fontWeight = 400;
        arrow5.style.transform = "rotate(0deg)" ;

    }
});