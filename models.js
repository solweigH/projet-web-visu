// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//draw bulkhead
    //def des coordonnées du bulkhead
let p = 5;
let n = p-1;
let a = [width/p,height/p];
let b = [n*width/p, height/p];
let c = [width/p,n*height/p];
let d = [n*width/p,n*height/p];

function bulkhead(w,h){
    let p = 5;
    let n = p-1;
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillStyle = 'rgb(' + 255 + ',' + 000 + ',' + 000 +')';
    ctx.moveTo(d[0],d[1]);
    ctx.lineTo(c[0],c[1]);
    ctx.lineTo(a[0],a[1]);
    ctx.lineTo(b[0],b[1]);
    ctx.stroke();

}

//class

class NT { //neurotransmitter
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
     }

     draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
     }

     update() {
        if ((this.x + this.size) >= width) {
           this.velX = -(this.velX);
        }
  
        if ((this.x - this.size) <= 0) {
           this.velX = -(this.velX);
        }
  
        if ((this.y + this.size) >= height) {
           this.velY = -(this.velY);
        }
  
        if ((this.y - this.size) <= 0) {
           this.velY = -(this.velY);
        }
  
        this.x += this.velX;
        this.y += this.velY;
     }

}

class closedReceptor {
    constructor(x, y, color, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
     }

     drawS() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fill();
     }
    
}

class openReceptor {
   constructor(x, y, color, size) {
       this.x = x;
       this.y = y;
       this.color = color;
       this.size = size;
    }

    drawR() {
       ctx.beginPath();
       ctx.fillStyle = this.color;
       ctx.fillRect(this.x, this.y, this.sizeW, this.sizeH);
       ctx.fill();
    }

    update() {
      if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
         this.velX = -(this.velX);
      }

      if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }

      if ((this.x + this.size)>=a[0] && (this.x - this.size)<=a[0] && (this.y +this.size)>=a[1] && (this.y -this.size)<= c[1]){
         this.velX = -(this.velX);
      }

      if ((this.y + this.size)>=(a[1]+2) && (this.y - this.size)<=(a[1] +2 ) && (this.x +this.size)>=a[0] && (this.x -this.size)<= b[0]){
       this.velY = -(this.velY);
      }

      if ((this.y - this.size)<=c[1] && (this.y + this.size)>=c[1] && (this.x +this.size)>=c[0] && (this.x -this.size)<= d[0]){
       this.velY = -(this.velY);
      }

      //a modifier pour laisser les nt passer
      if ((this.x - this.size)<=b[0] && (this.x + this.size)>=b[0] && (this.y +this.size)>=b[1] && (this.y -this.size)<= d[1]){
         this.velX = -(this.velX);    
      }
    
      this.x += this.velX;
      this.y += this.velY;
   }
   
}

// function to generate random number

function random(min,max) {
    const num = Math.floor(Math.random()*(max-min)) + min;
    return num;
}

//make neurotransmitters

let NTs = [];

let NTs_nb = random(20,30);

while (NTs.length < NTs_nb) {
   const size = 15;
   let nt = new NT(
      // nt position always drawn at least one nt width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),/*#FF8C00,*/
      'rgb(' + 255 + ',' + 140 + ',' + 000 +')',
      size
   );

  NTs.push(nt);
}

let receptors = [];

let receptors_nb = random(12,18);

while (receptors.length < 25) {
    const size = 40;
    let closedR = new closedReceptor(
       // closedReceptor position always drawn at least one closedReceptor width
       // away from the edge of the canvas, to avoid drawing errors
       random(a[0]+2,b[0] - size-2),
       random(a[1]+2,c[1] - size-2),
       'rgb(' + 100 + ',' + 149 + ',' + 237 +')',
       size
    );
 
   receptors.push(closedR);
 }

function loop() {
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, width, height);
    bulkhead(width,height);
 
    for (let i = 0; i < NTs.length; i++) {
      NTs[i].draw();
      NTs[i].update();
      //NTs[i].collisionDetect();
    }
    for (let j = 0; j < receptors.length;j++){
        receptors[j].drawS();
    }
    
 
    requestAnimationFrame(loop);
 }
 
 loop();
 