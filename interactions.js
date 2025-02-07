function mouseClicked(){

  switch(kind){
    case "food":
//      fill('#a7a711');
//      noStroke();
//      ellipse(mouseX, mouseY, dotRadius, dotRadius);
      polkaDots.push(new Dot(mouseX, mouseY, "food"));
      break;
    case "danger":
//      fill('#f70000');
//      noStroke();
//      ellipse(mouseX, mouseY, dotRadius, dotRadius);
      polkaDots.push(new Dot(mouseX, mouseY, "danger"));
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
}