( function () {
    "use strict";

    const theSunglasses = document.getElementById("mySunglasses");
    const theAirpods = document.getElementById("myAirpods");
    const theHydroflask = document.getElementById("myHydroflask");
    const exit = document.getElementById("close");

    /* color changes with mouse hover */
    theSunglasses.addEventListener("mouseenter", function(event) {
        event.preventDefault();
        mySunglasses.setAttribute("src", `images/newsunglasses-02.png`);
    });

    theAirpods.addEventListener("mouseenter", function(event) {
        event.preventDefault();
        myAirpods.setAttribute("src", `images/newairpods-01.png`);
    });

    theHydroflask.addEventListener("mouseenter", function(event) {
        event.preventDefault();
        myHydroflask.setAttribute("src", `images/newhydroflask-03.png`);
    });

    theSunglasses.addEventListener("mouseleave", function(event) {
        event.preventDefault();
        mySunglasses.setAttribute("src", `images/sunglasses-02.png`);
    });

    theAirpods.addEventListener("mouseleave", function(event) {
        event.preventDefault();
        myAirpods.setAttribute("src", `images/airpods-01.png`);
    });

    theHydroflask.addEventListener("mouseleave", function(event) {
        event.preventDefault();
        myHydroflask.setAttribute("src", `images/hydroflask-03.png`);
    });

    /* popups when clicked */
    theSunglasses.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("popup").style.display="flex";
        var myTitle = document.getElementById("title");
        var myAbout = document.getElementById("about");
        myTitle.innerHTML="<h2>sunglasses</h>";
        myAbout.innerHTML="<p>you never know when you're gonna need to block out the sun and protect your eyes, so I like to always have them on me, just in case.</p>";
    });

    theAirpods.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("popup").style.display="flex";
        var myTitle = document.getElementById("title");
        var myAbout = document.getElementById("about");
        myTitle.innerHTML="<h2>headphones</h>";
        myAbout.innerHTML="<p>I can't go anywhere without my headphones! especially because I walk everywhere and I enjoy listening to music during the walk. I'm always listening to something, and I need my headphones for that.</p>";
    });
    
    theHydroflask.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("popup").style.display="flex";
        var myTitle = document.getElementById("title");
        var myAbout = document.getElementById("about");
        myTitle.innerHTML="<h2>waterbottle</h>";
        myAbout.innerHTML="<p>gotta stay hydrated! so I always carry my waterbottle in  my bag.</p>";
    });

    exit.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("popup").style.display="none";
    });
     
} () )