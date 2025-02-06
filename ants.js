class Ant{
 
  constructor(_x, _y, _vx, _vy){

    this.pos = createVector(_x, _y);
    this.vel = createVector(_vx, _vy);

    this.d = 5;
    this.senseRadius = 10;
    this.senseAngle = PI/4;
    
    this.randomStrength = 0;
  //   this.randomStrength = 0.2;

  }
 





  update(){

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
   
   
    let velModifier = 500000000;
//    let velModifier = 30;
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier) ), color('#f00'));
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier).rotate(this.senseAngle) ), color('#0f0'));
    this.sense( p5.Vector.add( this.pos, p5.Vector.mult(this.vel, velModifier).rotate(-this.senseAngle) ), color('#00f'));


    if(debugMode){
      console.log(this.pos);
      console.log(this.vel);
    }


    
  }



  sense(sensePos, col){
    sensePos.set(int(sensePos.x), int(sensePos.y));
    
    if(debugMode){
      fill(col);
      ellipse(sensePos.x, sensePos.y, this.senseRadius, this.senseRadius);
    }

    loadPixels();
    let tempRow = sensePos.y * width * 4;
    let tempCol = sensePos.x * 4;
    let blueIndex = tempRow + tempCol + 2;
    if(pixels[blueIndex] == 17){
      console.log(col.toString());
      console.log(pixels[blueIndex]);
      console.log("------");
    }

  }



  dis(){
    noStroke();
    fill(200);
    ellipse(this.pos.x, this.pos.y, this.d, this.d);
  }
 
 
 
  
}
