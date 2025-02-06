class Ant{
 
  constructor(_x, _y, _vx, _vy){
    this.x = _x;
    this.y = _y;
    this.vx = _vx;
    this.vy = _vy;
    
    this.d = 5;
    this.senseRadius = 10;
    this.senseAngle = PI/4;
//    this.senseAngle = PI/4;
    
    this.randomStrength = 0.;
    console.log(height);
    
  }
 
  
  
  
  
  sense(senseX, senseY, col){
    senseX = int(senseX);
    senseY = int(senseY);  
   fill(col);
//   ellipse(senseX, senseY, this.senseRadius, this.senseRadius);
   loadPixels();
   let row = (senseY) * width * 4;
   let cols = senseX * 4;
   let blueIndex = row + cols + 2;
   if( pixels[blueIndex] == 17 ){
     console.log(col.toString());
     console.log(pixels[blueIndex]);
//     console.log(blueIndex);
     console.log(".------.");
//     pixels[blueIndex] = 255;
//     updatePixels();
   }
   
 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 update(){
   this.vx += random(-1, 1) * this.randomStrength;
   this.vy += random(-1, 1) * this.randomStrength;
   if(this.vx > 3){ this.vx = 3; }
   if(this.vx < -3){ this.vx = -3; }
   if(this.vy > 3){ this.vy = 3; }
   if(this.vy < -3){ this.vy = -3; }
   
   let newx = this.x + this.vx;
   let newy = this.y + this.vy;
   
   if(newx < 0 || newx > width){
     this.vx *= -1;
     newx = this.x + this.vx;
   }
   if(newy < 0 || newy > height){
     this.vy *= -1;
     newy = this.y + this.vy;
   }
   
   
   
   
   
   
   let velModifier = 50000000;
   this.sense(this.x + (this.vx*velModifier * cos(this.senseAngle) + this.vy*velModifier * -sin(this.senseAngle)), this.y + (this.vx*velModifier*sin(this.senseAngle) + this.vy*velModifier*cos(this.senseAngle)), color("#0f0") );
   this.sense(this.x + this.vx*velModifier, this.y + this.vy*velModifier, color("#f00"));
//   this.sense(this.x + (this.vx*velModifier * cos(this.senseAngle) + this.vy*velModifier * sin(this.senseAngle)), this.y + (this.vy*velModifier*-sin(this.senseAngle) + this.vx*velModifier*cos(this.senseAngle)), color("#00f") );
   this.sense(this.x + (this.vx*velModifier * cos(this.senseAngle) + this.vy*velModifier * sin(this.senseAngle)), this.y + (this.vx*velModifier*-sin(this.senseAngle) + this.vy*velModifier*cos(this.senseAngle)), color("#00f") );
   
   
   
   this.x = newx;
   this.y = newy; 
   
   
   
   //console.log(this.vx);
   //console.log(this.vy);
   //console.log("------");
   
 }
 
 dis(){
   noStroke();
   fill(200);
   ellipse(this.x, this.y, this.d, this.d);
 }
 
 
 
  
}
