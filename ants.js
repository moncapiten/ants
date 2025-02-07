class Ant{
 
  constructor(_x, _y, _vx, _vy){

    this.pos = createVector(_x, _y);
    this.vel = createVector(_vx, _vy);
    this.velLim = 5;

    this.d = 5;
    this.half_d = 2;
    this.senseRadius = 20 ;
    this.senseAngle = PI/4;

    this.status = "idle";
    this.lastStatus = "idle";
    this.stepCounter = 0;
    this.stepsFullnessThr = 150;
    this.stepsDangerThr = 70;
    
//    this.randomStrength = 0;
     this.randomStrength = 0.7;

  }
 





  update(){
    this.lastStatus = this.status;
    if( ( this.status != "full" || (this.status == "full" && this.stepCounter > this.stepsFullnessThr) ) && ( this.status != "inDanger" || (this.status == "inDanger" && this.stepCounter > this.stepsDangerThr))){
      this.status = "idle";
    }

    let velModifier = 10;
//    let velModifier = 500000000;
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier) ), color('#f00'));
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier).rotate(this.senseAngle) ), color('#0f0'));
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier).rotate(-this.senseAngle) ), color('#00f'));




    this.vel.add(p5.Vector.random2D().mult(this.randomStrength));
    this.vel.limit(this.velLim);

    let newPos = p5.Vector.add(this.pos, this.vel);


    if(newPos.x-this.half_d < 0 || newPos.x+this.half_d > width){
      this.vel.x *= -1;
    }
    if(newPos.y-this.half_d < 0 || newPos.y+this.half_d > height){
      this.vel.y *= -1;
    }

    newPos = p5.Vector.add(this.pos, this.vel);
    this.pos = newPos;
    this.stepCounter++;
   
   
    
//    let velModifier = 30;
    


    if(debugMode){
      console.log(this.pos);
      console.log(this.vel);
      console.log(this.status);
      console.log("------");
    }


    
  }



  sense(sensePos, col){
    sensePos.set(int(sensePos.x), int(sensePos.y));
    
    if(senseDebug){
//      stroke(col);
//      noFill();
      webGL.fill(col);
      webGL.ellipse(sensePos.x-0.5*width, sensePos.y-0.5*height, this.senseRadius, this.senseRadius);
    }
    webGL.reset();
    p2d.image(webGL, 0, 0, width, height);

    loadPixels();
    
    let actualPos = createVector(int(this.pos.x), int(this.pos.y));
    let actualRow = actualPos.y * width * 4;
    let actualCol = actualPos.x * 4;
    let posIndex = actualRow + actualCol;

    for(let i = -this.d; i < this.d; i++){
      for(let j = -this.d; j < this.d; j++){
        let posStartingIndex = posIndex + i * width * 4 + j * 4;
        if(pixels[posStartingIndex] == 167 && pixels[posStartingIndex+1] == 167 && pixels[posStartingIndex+2] == 17 && (this.status == "idle" || this.status == "hunting" || this.status == "eating") ){
          if(debugMode){
            console.log(col.toString()); 
            console.log(pixels[posStartingIndex]);
            console.log(".----.");
          }

          let tempDist = p5.Vector.sub(sensePos, this.pos);
          this.vel.add(p5.Vector.mult( tempDist, 1/tempDist.mag));
          this.status = "eating";
          break;
        }
      }
    }



    let tempRow = sensePos.y * width * 4;
    let tempCol = sensePos.x * 4;
    let startingIndex = tempRow + tempCol;

    for(let i = -this.senseRadius; i < this.senseRadius; i++){
      for(let j = -this.senseRadius; j < this.senseRadius; j++){

        let blueIndex = startingIndex + i * width * 4 + j * 4 + 2;
        let redIndex = startingIndex + i * width * 4 + j * 4;
        if(pixels[blueIndex] == 17 && (this.status == "idle" || this.status == "hunting" || this.status == "eating") ){
          if(debugMode){
            console.log(col.toString());
            console.log(pixels[blueIndex]);
            console.log(".----.");
          }

          let tempDist = p5.Vector.sub(sensePos, this.pos);
          this.vel.add(p5.Vector.mult( tempDist, (1/tempDist.mag)**2));
          this.status = "hunting";
          break;
        }

        if(pixels[redIndex] == 247){
          if(debugMode){
            console.log(col.toString());
            console.log(pixels[redIndex]);
            console.log(".----.");
          }

          let tempDist = p5.Vector.sub(this.pos, sensePos);
          this.vel.add(p5.Vector.mult( tempDist, (1/(tempDist.mag*2)**2)));
          this.status = "inDanger";
          this.stepCounter = 0;
          break;
        }

        
      }
    }

    if(this.lastStatus == "eating" && this.status == "idle"){
      this.status = "full";
      this.stepCounter = 0;
    }

    if(debugMode){
      console.log("nope");
    }
  }



  dis(){
    webGL.noStroke();
    switch(this.status){
      case "idle":
        webGL.fill(200); // gray
        break;
      case "hunting":
        webGL.fill(255, 255, 0); // yellow
        break;
      case "eating":
        webGL.fill(0, 255, 0); // green
        break;
      case "inDanger":
        webGL.fill(255, 0, 0); // red
        break;
      case "full":
        webGL.fill(0, 0, 255); // blue
        break;
    }
//    fill(200);
    webGL.ellipse(this.pos.x-0.5*width, this.pos.y-0.5*height, this.d, this.d);
    webGL.reset();
    p2d.image(webGL, 0, 0, width, height);
  }
 
 
 
  
}
