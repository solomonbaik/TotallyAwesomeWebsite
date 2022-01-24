var derp = "DERP";
var derp = 3 + 'derp';
console.log(derp);

var moves = [Math.floor(Math.random() * (4)) + 1];
var turn = 0;
var size = 1;
var play = false;

if(window.localStorage.highScore == "undefined"){
  window.localStorage.highScore = 0;
}
document.getElementById("highScore").innerHTML = window.localStorage.highScore;

function lightUp(number){
  var id = "button" + number;
  var element = document.getElementById(id);
  element.classList.add("clicked");
  setTimeout(() => {lightDown(element)}, 500);
}

function lightDown(element) {
  //var element2 = document.getElementById(element);//why does this only work when i use a variable?
  element.classList.remove("clicked");
}

function callLightUp(number){
  setTimeout(() => {lightUp(moves[number])}, (number + 2) * 1000);
}

function displayMoves(){
  for (var i = 0; i < moves.length; i++) {
    callLightUp(i);
  }
}

document.getElementById("button0").addEventListener("click", function(){
  play = true;
  moves = [Math.floor(Math.random() * (4)) + 1];
  size = 1;
  turn = 0;
  document.getElementById("score").innerHTML = size - 1;
  document.getElementById("highScore").innerHTML = window.localStorage.highScore;
  displayMoves();
});

function reset() {
  window.location.replace('https://google.com');
  moves = [Math.floor(Math.random() * (4)) + 1];
  turn = 0; size = 1;
  play = false;
}

function advance() {
  //1 update moves size and player turn variables
  size++;
  turn = 0;
  console.log("moving on to level " + size);
  //2 update moves array
  moves.push(Math.floor(Math.random() * (4)) + 1);
  //3 display new moves array
  document.getElementById("score").innerHTML = size - 1;
  //4 update high Score
  if(size - 1 > window.localStorage.highScore){
    window.localStorage.highScore = document.getElementById("score").innerHTML; //size - 1
    document.getElementById("highScore").innerHTML = window.localStorage.highScore;
  }
  displayMoves();
}

function activateButton(num){
  if(play == true){
    lightUp(num);
    if(moves[turn] != num){
      reset();
    }
    turn++;
    if(turn >= size){
      advance();
    }
  }
}

document.getElementById("button1").addEventListener("click", function(){
  activateButton(1);
});

document.getElementById("button2").addEventListener("click", function() {
  activateButton(2);
});

document.getElementById("button3").addEventListener("click", function() {
  activateButton(3);
});

document.getElementById("button4").addEventListener("click", function() {
  activateButton(4);
});


function draw(){
  let canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    //let time2 = new Date();
  //  ctx.translate(0, time2.getSeconds()/30);
    ctx.clearRect(0, 0, 1275, 500); // clear canvas
    ctx.save();
 var time2 = new Date();
 ctx.translate(0, time2.getSeconds()/60);
      let time = new Date();
  drawTriangle();
  ctx.ellipse(700, 200, 50, 100, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();
  ctx.ellipse(650,345,62,62,0,0,Math.PI*2);
  ctx.fill();
  ctx.save();
  ctx.translate(700,300);
  ctx.rotate(time.getSeconds()+ time.getMilliseconds() / 1000);
  ctx.fillRect(0,0, 100, 100);

         ctx.restore();
   window.requestAnimationFrame(draw);
}
}

function drawTriangle(){
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
  ctx.beginPath();
    ctx.moveTo(700, 50);
    ctx.lineTo(750, 100);
    ctx.lineTo(650, 100);
    ctx.fill();
    ctx.closePath();
  }
}

function startAnimation() {
window.requestAnimationFrame(draw);
}

startAnimation();
const arr = [];
