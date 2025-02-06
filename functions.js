function mouseClicked(){

  
  /*
  switch(mouseButton){
    case LEFT:
      fill('#a7a711');
      noStroke();
      ellipse(mouseX, mouseY, dotRadius, dotRadius);
      console.log("left");
      break;
    case CENTER:
      fill('#ff0000');
      noStroke();
      ellipse(mouseX, mouseY, dotRadius, dotRadius);
      console.log("right");
      break;
  }
  */


  switch(kind){
    case "food":
      fill('#a7a711');
      noStroke();
      ellipse(mouseX, mouseY, dotRadius, dotRadius);
      break;
    case "danger":
      fill('#ff0000');
      noStroke();
      ellipse(mouseX, mouseY, dotRadius, dotRadius);
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
  if(key == 'f'){
    kind = "food";
  }
  if(key == 'g'){
    kind = "danger";
  }
}