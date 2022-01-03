var derp = "DERP";
var derp = 3 + 'derp';
console.log(derp);

var moves = [Math.floor(Math.random() * (4 + 1))];

function exampleFunction(){
  console.log('example method');
  var element = document.getElementById("button1");
  element.classList.add("mystyle");
}

function lightDown(element) {
  //var element2 = document.getElementById(element);//why does this only work when i use a variable?
  element.classList.remove("clicked");
}

document.getElementById("button1").addEventListener("click", function() {
  var element = document.getElementById("button1");
  element.classList.add("clicked");
  setTimeout(() => {lightDown(element)}, 1000);
  console.log("lol 1");
  console.log(document.getElementById("button1").classList);
  console.log(moves);
});

document.getElementById("button2").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  var element = document.getElementById("button2");
  element.classList.add("clicked");
  setTimeout(() => {lightDown(element)}, 1000);
  console.log("lol 2");

});

document.getElementById("button3").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  var element = document.getElementById("button3");
  element.classList.add("clicked");
  setTimeout(() => {lightDown(element)}, 1000);
  console.log("lol 3");

});

document.getElementById("button4").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  var element = document.getElementById("button4");
  element.classList.add("clicked");
  setTimeout(() => {lightDown(element)}, 1000);
  console.log("lol 4");

});

const arr = [];
