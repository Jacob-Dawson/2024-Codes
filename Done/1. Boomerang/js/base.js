// js goes here

var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var cssCheck = document.getElementById("cssCheck");
var svgCheck = document.getElementById("svgCheck");
var canvasCheck = document.getElementById("canvasCheck");
var p5Check = document.getElementById("p5Check");
let cssClick = document.getElementById("placeholder");
let svgClick = document.getElementById("mainSVG");
let canvasClick = document.getElementById("myCanvas");
let p5Click = document.getElementById("myP5");
let canvasInterval;
let p5Interval;
let p5Iterations = 0;

cssCheck.addEventListener("change",cssCheckEvent,false);
svgCheck.addEventListener("change",svgCheckEvent,false);
canvasCheck.addEventListener("change",canvasCheckEvent,false);
p5Check.addEventListener("change",p5CheckEvent,false);

cssClick.addEventListener("click",cssClickEvent,false);
svgClick.addEventListener("click",svgClickEvent,false);
canvasClick.addEventListener("click",canvasClickEvent,false);
p5Click.addEventListener("click",p5ClickEvent,false);

function cssCheckEvent(e){

    if(cssCheck.checked){

        document.getElementById("cssSection").style.display = "flex";

    } else {

        document.getElementById("cssSection").style.display = "none";

    }

}

function svgCheckEvent(e){

    if(svgCheck.checked){

        document.getElementById("svgSection").style.display = "flex";

    } else {

        document.getElementById("svgSection").style.display = "none";

    }

}

function canvasCheckEvent(e){

    if(canvasCheck.checked){

        document.getElementById("canvasSection").style.display = "flex";

    } else {

        document.getElementById("canvasSection").style.display = "none";

    }

}

function p5CheckEvent(e){

    if(p5Check.checked){

        document.getElementById("p5Section").style.display = "flex";

    } else {

        document.getElementById("p5Section").style.display = "none";

    }

}

function cssClickEvent(e){

    cssClick.style.transition = "transform 2.5s"
    cssClick.style.transform = "translate(300px,-150px) rotate(900deg)"

    setTimeout(() => {

        cssClick.style.transition = "transform 2.5s"
        cssClick.style.transform = "translate(0px,0px) rotate(0deg)"

    },2500);

}

function svgClickEvent(e){

    document.getElementById("svgAni1").beginElement();
    document.getElementById("svgAni2").beginElement();

}

function canvasClickEvent(e){

    let canvasIterations = 0;
    clearInterval(canvasInterval)

    canvasInterval = setInterval(() => {

        if(canvasIterations == 360){

            clearInterval(canvasInterval)

        } else {

            drawCanvas(900*Math.sin(canvasIterations*Math.PI/360))
            canvasIterations++;

        }
    
    },10)

}

function p5ClickEvent(e){

    clearInterval(p5Interval);
    p5Iterations = 0;

    p5Interval = setInterval(() => {

        if(p5Iterations == 360){

            clearInterval(p5Interval)

        } else {

            drawCanvas(900*Math.sin(p5Iterations*Math.PI/360))
            p5Iterations++;

        }
    
    },10)

}

drawCanvas(0);

function drawCanvas(n){

    let w = myCanvas.width;
    let h = myCanvas.height;

    let wingL = 150; // wing length
    let wingT = wingL/5; // wing thickness
    let ang = 100+90;

    context.clearRect(0,0,w,h);

    context.save();
    context.translate(w/2,h/2);
    context.rotate(n*Math.PI/180)
    context.translate(-w/2,-h/2);

    context.save();
    context.translate(w/2,h/2);

    // base

    context.fillStyle = "burlywood";

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,wingL);
    context.lineTo(-wingT,wingL);
    context.lineTo(-wingT,wingT);
    context.lineTo(wingL*Math.cos(ang*Math.PI/180),(wingL*Math.sin(ang*Math.PI/180))+wingT);
    context.lineTo(wingL*Math.cos(ang*Math.PI/180),wingL*Math.sin(ang*Math.PI/180));
    context.closePath();
    context.fill();
    context.stroke();

    // stripes

    let stripeH = 8;

    context.fillStyle = "firebrick";

    context.beginPath();

    context.rect(-wingT,wingL-30,wingT,stripeH);

    context.closePath();
    context.fill();

    context.fillStyle = "yellow";

    context.beginPath();

    context.rect(-wingT,wingL-16,wingT,stripeH);

    context.closePath();
    context.fill();

    context.save();
    context.translate(-5,5);
    context.rotate((92)*Math.PI/180); // 87
    context.translate(5,-5);

    context.beginPath();

    context.rect(-wingT,wingL-16,wingT,stripeH);

    context.closePath();
    context.fill();

    context.fillStyle = "firebrick";

    context.beginPath();

    context.rect(-wingT,wingL-30,wingT,stripeH);

    context.closePath();
    context.fill();

    context.restore();

    context.restore();
    context.restore();
}

function setup(){

    p5Canvas = createCanvas(300,300);
    p5Canvas.parent("myP5");

}

function draw(){

    clear();
    
    let w = 300;
    let h = 300;

    let wingL = 75; // wing length
    let wingT = wingL/5; // wing thickness
    let ang = 100+90;

    stroke(0);

    push();
    rotate(p5Iterations*Math.PI/180)

    push();
    translate(w/2,h/2);

    // base

    fill("burlywood");

    beginShape();
    vertex(0,0);
    vertex(0,wingL);
    vertex(-wingT,wingL);
    vertex(-wingT,wingT);
    vertex(wingL*Math.cos(ang*Math.PI/180),(wingL*Math.sin(ang*Math.PI/180))+wingT);
    vertex(wingL*Math.cos(ang*Math.PI/180),(wingL*Math.sin(ang*Math.PI/180)));
    endShape(CLOSE);

    // stripes

    noStroke();

    let stripeH = 4;

    fill("firebrick");

    rect(-wingT,wingL-15,wingT,stripeH);

    fill("yellow");

    rect(-wingT,wingL-8,wingT,stripeH);

    push();
    translate(-5,5);
    rotate((96)*Math.PI/180);
    translate(5,-5);

    rect(-wingT,wingL-8,wingT,stripeH);

    fill("firebrick");

    rect(-wingT,wingL-15,wingT,stripeH);

    pop();

    pop();

}

/* Structure:

    - angle between wings 100 deg

    Source: https://emojipedia.org/lotus#designs

*/