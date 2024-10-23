let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivial-answer");
    
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth eh?";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}

function truth1() {
    let lieoptions = document.getElementById("lieoptions");

    let dogSelected = document.getElementById("dog").checked;
    let lieSelected = document.getElementById("lie").checked;
    let bornSelected = document.getElementById ("born").checked;    

    if (dogSelected) {
        lieoptions.innerHTML = fname + ", this is a truth. One of my favorite animals is the dog and I have one named Bingo.";
    }
    else if (lieSelected) {
        lieoptions.innerHTML = fname + ", you are correct! My family loves travelling and we go on multiple trips a year!";
    }
    else if(bornSelected) {
        lieoptions.innerHTML = fname + ", this is a truth. I was indeed born in New Jersey.";
    }
}
