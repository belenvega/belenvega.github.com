(function () {
    "use strict";

    var myForm = document.querySelector("form");

    myForm.addEventListener("submit", function(e) {
        e.preventDefault();

        var inputOne = document.getElementById("musician").value;
        var inputTwo = document.getElementById("number").value;
        var inputThree = document.getElementById("name").value;
        var inputFour = document.getElementById("verb").value;
        var inputFive = document.getElementById("adjective").value;
        var inputSix = document.getElementById("adverb").value;
        var inputSeven = document.getElementById("noun").value;
        var inputEight = document.getElementById("adjective").value;
        var paragraph = document.querySelector("p");

        paragraph.innerHTML = `The first concert I ever went to was a ${inputOne} concert!! I was ${inputTwo} years old and I went with my best friend ${inputThree}!! At first, we were running late for the opening, so we had to ${inputFour} from the venue’s parking lot to make it on time!!But once we got in, we had so much fun listening to the ${inputFive} music, dancing ${inputSix}, and after the concert, I even went to the merchandise stand and bought myself a ${inputSeven}!! What a ${inputEight} experience I’ll never forget!!`

        var cont = document.getElementById("one");
        

        cont.removeChild(cont.childNodes);

    })

} ())

    

        
            