function mouseClicked(){

  switch(kind){
    case "food":
      addFoodDot();
      break;
    case "danger":
      addDangerDot();
      break
  }
  
  
}


function keyPressed(){
  if(key == 'd'){
    debugMode = !debugMode;
  }
  if(key == 's'){
    senseDebug = !senseDebug;
  }
  if(key == ' '){
    evolution = !evolution;
  }
  if(key == 'c'){
    startOver();
  }
  if(key == 'f'){
    kind = "food";
  }
  if(key == 'g'){
    kind = "danger";
  }
  if(key == 'ArrowUp'){
    addAnt();
  }
  if(key == 'ArrowDown'){
    removeAnt();
  }
  if(key == 'ArrowLeft'){
    console.log("WIP REMOVE POLKADOT - NEED MERGE ARRAYS")
  }
  if(key == 'ArrowRight'){
    console.log("ADD REMOVE POLKADOT - NEED MERGE ARRAYS")
  }
}