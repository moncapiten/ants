class Dot{
  
  
  constructor(x, y, type){
    this.pos = createVector(x, y);
    this.d = 15;
    this.type = type;
    
    
  }
  
  show(){
    switch(this.type){
      case "food":
        fill('#a7a711');
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.d, this.d);
        break;
      case "danger":
        fill('#f70000');
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.d, this.d);
        break;
    }
  }
  
  
  
}
