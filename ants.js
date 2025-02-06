class Ant{
 
  constructor(_x, _y, _vx, _vy){

    this.pos = createVector(_x, _y);
    this.vel = createVector(_vx, _vy);

    this.d = 5;
    this.senseRadius = 15 ;
    this.senseAngle = PI/4;
    
//    this.randomStrength = 0;
     this.randomStrength = 0.1;

  }
 





  update(){

    let velModifier = 30;
//    let velModifier = 500000000;
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier) ), color('#f00'));
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier).rotate(this.senseAngle) ), color('#0f0'));
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier).rotate(-this.senseAngle) ), color('#00f'));




    this.vel.add(p5.Vector.random2D().mult(this.randomStrength));
    this.vel.limit(1);

    let newPos = p5.Vector.add(this.pos, this.vel);


    if(newPos.x < 0 || newPos.x > width){
      this.vel.x *= -1;
    }
    if(newPos.y < 0 || newPos.y > height){
      this.vel.y *= -1;
    }

    newPos = p5.Vector.add(this.pos, this.vel);
    this.pos = newPos;
   
   
    
//    let velModifier = 30;
    


    if(debugMode){
      console.log(this.pos);
      console.log(this.vel);
      console.log("------");
    }


    
  }



  sense(sensePos, col){
    sensePos.set(int(sensePos.x), int(sensePos.y));
    
    if(senseDebug){
      fill(col);
      ellipse(sensePos.x, sensePos.y, this.senseRadius, this.senseRadius);
    }

    loadPixels();
    let tempRow = sensePos.y * width * 4;
    let tempCol = sensePos.x * 4;
    let startingIndex = tempRow + tempCol;
    
    for(let i = -this.senseRadius; i < this.senseRadius; i++){
      for(let j = -this.senseRadius; j < this.senseRadius; j++){
        let blueIndex = startingIndex + i * width * 4 + j * 4 + 2;
        let redIndex = startingIndex + i * width * 4 + j * 4;
        if(pixels[blueIndex] == 17){
          console.log(col.toString());
          console.log(pixels[blueIndex]);
          console.log(".----.");

          let tempDist = p5.Vector.sub(sensePos, this.pos);
          this.vel.add(p5.Vector.mult( tempDist, tempDist.mag));
        }

        if(pixels[redIndex] == 255){
          console.log(col.toString());
          console.log(pixels[redIndex]);
          console.log(".----.");

          let tempDist = p5.Vector.sub(this.pos, sensePos);
          this.vel.add(p5.Vector.mult( tempDist, tempDist.mag));
        }
      }
    }
/*    
    if(pixels[blueIndex] == 17){
      console.log(col.toString());
      console.log(pixels[blueIndex]);
      console.log(".----.");

      let tempDist = p5.Vector.sub(sensePos, this.pos);
      this.vel.add(p5.Vector.mult( tempDist, tempDist.mag));
    }
*/
  }



  dis(){
    noStroke();
    fill(200);
    ellipse(this.pos.x, this.pos.y, this.d, this.d);
  }
 
 
 
  
}
