function setup() {
    var myCanvas = createCanvas(800, 250);
    frameRate(10);
    noStroke();
    background(255);
    myCanvas.parent(mySketch);
  }
  
  function draw() {
    fill(255, 60);
    rect(0, 0, width, height);

    fill(0);
    var circSize = random(50);
    rect(mouseX, mouseY, circSize, circSize * 2);
    /* $("rect").fadeOut("slow"); */
  }