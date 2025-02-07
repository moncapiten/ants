

let OGAntCounter = 5;
let OGDotCounter = 50;

let antCounter = OGAntCounter, formicary = [];
let dotCounter = OGDotCounter, polkaDots = [];

//let ant;

let dotRadius = 15;


let debugMode = false;
let senseDebug = false;

let kind = "food";
let evolution = true;


function setup() {
  //ant = new Ant(500, 500, 0, 0.0000001);
  //frameRate(24);
  
  //createCanvas(1900, 1050);

  let container = document.getElementById('holder');
  var cnv = createCanvas(1800, 900);
  //cnv.style('display', 'block', 'border-radius: 20px');
  cnv.parent(container)


  pixelDensity(1);
  background(0);
  
  startOver();
  
  
  
}


function draw() {
  background(0);


  for(let i = 0; i < polkaDots.length; i++){
    polkaDots[i].show();
  }


  for(let i = 0; i < antCounter; i++){
    if(evolution){
      formicary[i].update();
    }
    formicary[i].dis();
//    ant.update();
//    ant.dis();
  }

  

}
