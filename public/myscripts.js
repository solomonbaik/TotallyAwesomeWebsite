var derp = "DERP";
var derp = 3 + 'derp';
console.log(derp);

var moves = [Math.floor(Math.random() * (4)) + 1];
var turn = 0;
var size = 1;

function lightUp(number){
  var id = "button" + number;
  var element = document.getElementById(id);
  element.classList.add("clicked");
  setTimeout(() => {lightDown(element)}, 1000);
}

function lightDown(element) {
  //var element2 = document.getElementById(element);//why does this only work when i use a variable?
  element.classList.remove("clicked");
}

function callLightUp(number){
  setTimeout(() => {lightUp(moves[number])}, (number + 2) * 2000);
}

function displayMoves(){
  for (var i = 0; i < moves.length; i++) {
    callLightUp(i);
  }
}

document.getElementById("button0").addEventListener("click", function(){
  moves = [Math.floor(Math.random() * (4)) + 1];
  size = 1;
  turn = 0;
  displayMoves();
});

document.getElementById("button1").addEventListener("click", function(){
  console.log(moves);
  lightUp(1);
  turn++;
  if(turn >= size){
    //1 update moves size and player turn variables
    size++;
    turn = 0;
    console.log("moving on to level " + size);
    //2 update moves array
    moves.push(Math.floor(Math.random() * (4)) + 1);
    //3
    //display new moves array
    displayMoves();
  }else{
    if(moves[turn - 1] != 1){
      console.log("you lose");
      moves = [Math.floor(Math.random() * (4)) + 1];
      turn = 0; size = 1;
    }else{
      console.log('good');
    }
  }
});

document.getElementById("button2").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  lightUp(2);
  turn++;
  if(turn >= size){
    //1 update moves size and player turn variables
    size++;
    turn = 0;
    console.log("moving on to level " + size);
    //2 update moves array
    moves.push(Math.floor(Math.random() * (4)) + 1);
    //3
    //display new moves array
    displayMoves();
  }else{
    if(moves[turn - 1] != 2){
      console.log("you lose");
      moves = [Math.floor(Math.random() * (4)) + 1];
      turn = 0; size = 1;
    }else{
      console.log('good');
    }
  }
});

document.getElementById("button3").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  lightUp(3);
  turn++;
  if(turn >= size){
    //1 update moves size and player turn variables
    size++;
    turn = 0;
    console.log("moving on to level " + size);
    //2 update moves array
    moves.push(Math.floor(Math.random() * (4)) + 1);
    //3
    //display new moves array
    displayMoves();
  }else{
    if(moves[turn - 1] != 3){
      console.log("you lose");
      moves = [Math.floor(Math.random() * (4)) + 1];
      turn = 0; size = 1;
    }else{
      console.log('good');
    }
  }
});

document.getElementById("button4").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  lightUp(4);
  turn++;
  if(turn >= size){
    //1 update moves size and player turn variables
    size++;
    turn = 0;
    console.log("moving on to level " + size);
    //2 update moves array
    moves.push(Math.floor(Math.random() * (4)) + 1);
    //3
    //display new moves array
    displayMoves();
  }else{
    if(moves[turn - 1] != 4){
      console.log("you lose");
      moves = [Math.floor(Math.random() * (4)) + 1];
      turn = 0; size = 1;
    }else{
      console.log('good');
    }
  }
});

const arr = [];
