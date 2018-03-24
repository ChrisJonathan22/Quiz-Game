
function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "Providence") {
        correct++;
    }

    if (question2 == "Hartford") {
        correct++;
    }

    if (question3 == "Albany") {
        correct++;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").textContent = "You got " + correct + " correct.";
}

var button = document.getElementById("button");


button.addEventListener("click", check, false);









/*


var questions = [
    
    {
        prompt: "What color are Apples?\n(a) Red/Green\n\
                (b) Purple\n(c) Orange",

        answer: "a"        

    },

    {
        prompt: "What color are Bananas?\n(a) Teal\n\
        (b) Magenta\n(c) Yellow",
        answer: "c"
    },

    {
        prompt: "What color are Strawberries?\n(a) Yellow\n\
        (b) Red\n(c) Blue",
        answer: "b"
    }


];

var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct!");
    }

    else{
        alert("WRONG!");
    }
}

alert("You got " + score + "/" + questions.length + " Correct");


*/
