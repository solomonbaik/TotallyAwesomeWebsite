var derp = "DERP";
var derp = 3 + 'derp';
console.log(derp);

function exampleFunction(){
  console.log('example method');
  var element = document.getElementById("button1");
  element.classList.add("mystyle");
}

document.getElementById("button1").addEventListener("click", function() {
  document.getElementById("button1").classList.add("mystyle");
  console.log("lol 1");
});

document.getElementById("button2").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  console.log("lol 2");

});

document.getElementById("button3").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  console.log("lol 3");

});

document.getElementById("button4").addEventListener("click", function() {
  //document.getElementById("demo").innerHTML = "You Lost";
  console.log("lol 4");

});

const arr = [];
