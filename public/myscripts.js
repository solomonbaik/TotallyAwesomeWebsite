let SimonGame =
{
  logistics:
  {
    derp: "DERP",
    derp: 3 + "derp",

    moves: [Math.floor(Math.random() * (4)) + 1],
    turn: 0,
    size: 1,
    play: false,

    arr: [],
  },

  boardOptics:
  {
    prepareLightUp: function(number)
    {
      var id = "button" + number;
      var element = document.getElementById(id);
      element.classList.add("clicked");
      setTimeout(() => {lightDown(element)}, 500);
    },

    lightDown: function(element)
    {
      element.classList.remove("clicked");
    },

    lightUp: function(number)
    {
      setTimeout(() => {prepareLightUp(moves[number])}, (number + 2) * 1000);
    },

    commenceLights: function()
    {
      for (var i = 0; i < moves.length; i++)
      {
        lightUp(i);
      }
    },
  },

  buttons:
  {
    document.getElementById("button0").addEventListener("click", function(){
      play = true;
      moves = [Math.floor(Math.random() * (4)) + 1];
      size = 1;
      turn = 0;
      document.getElementById("score").innerHTML = size - 1;
      document.getElementById("highScore").innerHTML = window.localStorage.highScore;
      displayMoves();
    }),

    document.getElementById("button1").addEventListener("click", function(){
      activateButton(1);
    }),

    document.getElementById("button2").addEventListener("click", function() {
      activateButton(2);
    }),

    document.getElementById("button3").addEventListener("click", function() {
      activateButton(3);
    }),

    document.getElementById("button4").addEventListener("click", function() {
      activateButton(4);
    }),

    activateButton: function(num)
    {
      if(play == true){
        prepareLightUp(num);
        if(moves[turn] != num){
          reset();
        }
        turn++;
        if(turn >= size){
          advance();
        }
      }
    },
  },

  gameSettings:
  {
    reset: function()
    {
      window.location.replace('https://google.com');
      moves = [Math.floor(Math.random() * (4)) + 1];
      turn = 0; size = 1;
      play = false;
    },

    advance: function()
    {
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
      }
      document.getElementById("highScore").innerHTML = window.localStorage.highScore;
      displayMoves();
    },
  },
}
