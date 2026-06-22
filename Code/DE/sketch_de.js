let particle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  for( let i = 0; i < 10000; i++){
    let p = new Particle(random(width), random(height));
    particle.push(p);
  }

}

// Adjust canvas size when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,30);
  //background(0,40);

  for(let i = 0; i < particle.length; i++){
    particle[i].update();
    particle[i].display();
  }
  
}

class Particle{

  constructor(x,y){
    this.r = random(100,255);
    this.pos = createVector(x,y);
    this.prevPos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
  }

  update(){
let noiseValue = noise(this.pos.x * 0.01, this.pos.y * 0.01, frameCount*0.005);
let angle = map(noiseValue,0,1,0,TWO_PI);

this.acc = p5.Vector.fromAngle(angle*10);


    this.vel.add(this.acc);
    this.vel.limit(3);
    
    this.prevPos = this.pos.copy()

    this.pos.add(this.vel);

    if (this.pos.x > width) {
      this.pos.x = random(width);
      this.pos.y = random(height);

      this.prevPos.x = this.pos.copy();
    }

    if(this.pos.x < 0){
      this.pos.x = random(width);
      this.pos.y = random(height);

      this.prevPos.x = this.pos.copy();
    }

    if (this.pos.y > height) {
      this.pos.y = random(height);
      this.pos.x = random(width);

      this.prevPos.y = this.pos.copy();
    }

    if (this.pos.y < 0){
      this.pos.y = random(height);
      this.pos.x = random(width);

      this.prevPos.y = this.pos.copy();
    }
  }

  display(){
    
    //stroke(this.color, 20);
    //stroke(noise(this.pos.x * 0.1,this.pos.y * 0.01),this.r,200,20);
    noStroke();

    //fill(this.r, 255-noise(this.pos.x * 0.01,this.pos.y * 0.01),noise(this.pos.x * 0.01,this.pos.y * 0.1), 2);
    fill(this.r, noise(this.pos.x * 0.01,this.pos.y * 0.01)-100,this.r, 1);
    ellipse(this.pos.x, this.pos.y, 25, 25)

    //fill(this.r, noise(this.pos.x * 0.1,this.pos.y * 0.01),noise(this.pos.x * 0.1,this.pos.y * 0.01), 20);
    //ellipse(this.pos.x, this.pos.y, this.r, this.r);
    
    fill(this.r-20, noise(this.pos.x * 0.2,this.pos.y * 0.02),this.r+50, 20);
    ellipse(this.pos.x, this.pos.y, 10, 10)

    fill(255,0,255 ,50);
    ellipse(this.pos.x, this.pos.y, 5,5 );
    //ellipse(this.pos.x + random(-5,5), this.pos.y + random(-5,5), 1, 1)

    //fill(this.r, 255 - noise(this.pos.x * 0.1,this.pos.y * 0.01),this.r , 60);
    //ellipse(this.pos.x, this.pos.y, this.r - 50, this.r - 50);
    
    //strokeWeight(randomGaussian(1,0.5));
    //line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    
  }
}