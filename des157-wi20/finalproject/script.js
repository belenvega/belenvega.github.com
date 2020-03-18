(function () {
    "use strict";

    /* ADD A NEW RECIPE BUTTON */
    const restart = document.getElementById("add");
    restart.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("popup").style.display="flex";
        document.getElementById("theForm").reset();
    });

    /* ADD A NEW INGREDIENT INPUT */
    const divTag = document.getElementById('ingred');
    const btn = document.getElementById('plus');
    
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        const newInput = document.createElement('input');
        divTag.appendChild(newInput);
    });

    /* ADD A NEW INGSTRUCTION INPUT */
    const divTagg = document.getElementById('instru');
    const otherBtn = document.getElementById('mas');
    otherBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const newInput = document.createElement('input');
        divTagg.appendChild(newInput);
    });

    /* CANCELS ADDING A NEW RECIPE */
    const cancel = document.getElementById("cancel");
    cancel.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("popup").style.display="none";
    });

    /* SUBMITS A NEW RECIPE */
    const theForm = document.querySelector("form");
    theForm.addEventListener("submit", function(e) {
        e.preventDefault();

        var inputOne = document.getElementById("recipeName").value;
        var inputTwo = document.getElementById("cookTime").value;
        /* var inputThree = document.getElementById("ingredients").value;
        var inputFour = document.getElementById("instructions").value; */

        document.getElementById("popup").style.display="none";
        
        document.getElementById("newItems").style.display="flex";
        var newTitle = document.getElementById("newTitles");
        var newMinute = document.getElementById("newMinutes");
        
        newTitle.innerHTML = `${inputOne}`
        newMinute.innerHTML = `${inputTwo}`
        document.getElementById("theImage").src = "images/newimage.png";
        

    });

} ());