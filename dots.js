class Dot{
  
  
  constructor(x, y, type){
    this.pos = createVector(x, y);
    this.d = 15;
    this.type = type;
    
    
  }
  
  show(){
    switch(this.type){
      case "food":
        webGL.fill('#a7a711');
        webGL.noStroke();
        webGL.ellipse(this.pos.x-width*0.5, this.pos.y-height*0.5, this.d, this.d);
        break;
      case "danger":
        webGL.fill('#f70000');
        webGL.noStroke();
        webGL.ellipse(this.pos.x - width*0.5, this.pos.y-height*0.5, this.d, this.d);
        break;
    }
    webGL.reset();
    p2d.image(webGL, 0, 0, width, height);
  }
  
  
  
}
