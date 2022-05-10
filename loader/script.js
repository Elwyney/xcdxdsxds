(function(){



  var canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "source-over"; //合成方法
 
  //stats.js
  // var stats = new Stats();
  // 

  var particles = [];
  var pIndex = 0;
  var frameId;

  //Particle作成
  function Particle(radius,vy,gravity){
    this.x = canvas.width*Math.random();
    this.y = canvas.height+getRandom(canvas.height/2,canvas.height*2);
    this.vx = Math.cos(getRandom(0,360)*Math.PI/180)*2;
    this.vy = vy;
    this.gravity = gravity;
    particles[pIndex] = this;
    this.id = pIndex;
    pIndex++;

    this.r = 0;
    this.g = 0;
    this.b = 0;
    
    this.radius = radius;
    this.count = 0;

  };

  
  Particle.prototype.draw = function(){

    this.vy *= this.gravity;
    this.x += this.vx;
    this.y -= this.vy;

    ctx.fillStyle = `rgb(0,0,0)`;
    var grd = ctx.createRadialGradient( this.x+this.radius/2,  this.y+this.radius/2,  0,  this.x+this.radius/2,  this.y+this.radius/2, this.radius/2);
    grd.addColorStop(0, 'rgba(0, 0, 0, 1)');
    grd.addColorStop(1,  'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grd;
    
    ctx.beginPath();
    ctx.fillRect( this.x, this.y, this.radius, this.radius );
    ctx.closePath();
    ctx.fill();

    if(this.y < -canvas.height){
      this.vy = getRandom(0.5,5.5);  
      particles[this.id].x = canvas.width*Math.random();
      particles[this.id].y = canvas.height+getRandom(canvas.height/2,canvas.height*2);
    }
  }

  for (var i = 0; i < 50; i++) {
      new Particle( getRandom(3,15), getRandom(1,20), 1.005);
  }

  // アニメーション
  function loop(){
    ctx.clearRect(0,0, canvas.width, canvas.height);  //画面の更新

    //Particle描画
    for(var i in particles){
      particles[i].draw();
    }
    
    frameId = requestAnimationFrame(loop);
    // if(frameId % 2 == 0) { return; }//60fpsを30fpsにする
    // stats.update();
  }
  loop();

  // 全画面リサイズ
  window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    x = canvas.width / 2;
    y = canvas.height / 2;
  });

  //ランダム
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }


  
  

})();