(function () {
    "use strict";

    var myForm = document.querySelector("form");
    const exit = document.getElementById("close");
    const restart = document.getElementById("button");

    myForm.addEventListener("submit", function(e) {
        e.preventDefault();

        var inputOne = document.getElementById("musician").value;
        var inputTwo = document.getElementById("number").value;
        var inputThree = document.getElementById("name").value;
        var inputFour = document.getElementById("verb").value;
        var inputFive = document.getElementById("adjective").value;
        var inputSix = document.getElementById("adverb").value;
        var inputSeven = document.getElementById("noun").value;
        var inputEight = document.getElementById("otheradjective").value;
        

        /* displays the madlib paragraph with user's inputs */
        document.getElementById("popup").style.display="flex";
        var myTitle = document.getElementById("title");
        var myFinal = document.getElementById("final");
        
        myTitle.innerHTML="<h2>My First Concert!</h>";
        exit.innerHTML="x";
        myFinal.innerHTML = `The first concert I ever went to was a ${inputOne} concert!! I was ${inputTwo} years old and I went with my best friend ${inputThree}!! At first, we were running late for the opening, so we had to ${inputFour} from the venue’s parking lot to make it on time!! But once we got in, we had so much fun listening to the ${inputFive} music, dancing ${inputSix}, and after the concert, I even went to the merchandise stand and bought myself a ${inputSeven}!! What a ${inputEight} experience I’ll never forget!!`
        
    });

    exit.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("popup").style.display="none";
    });

    restart.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("popup").style.display="none";
        document.getElementById("theForm").reset();
        
    })

    ScrollReveal().reveal('.headline', {delay: 750});
   

} ())