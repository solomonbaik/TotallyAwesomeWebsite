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
      var id;

      if (number == 1)
      {
        var id = "green";
      }

      if (number == 2)
      {
        var id = "blue";
      }

      if (number == 3)
      {
        var id = "red";
      }

      if (number == 4)
      {
        var id = "yellow";
      }

      var element = document.getElementById(id);
      element.classList.add("clicked");
      setTimeout(() => {SimonGame.boardOptics.lightDown(element)}, 500);
    },

    lightDown: function(element)
    {
      element.classList.remove("clicked");
    },

    lightUp: function(number)
    {
      setTimeout(() => {SimonGame.boardOptics.prepareLightUp(moves[number])}, (number + 2) * 1000);
    },

    commenceLights: function()
    {
      for (var i = 0; i < moves.length; i++)
      {
        SimonGame.boardOptics.lightUp(i);
      }
    },
  },

  buttons:
  {
    play : document.getElementById("play"),

    green : document.getElementById("green"),

    blue : document.getElementById("blue"),

    red : document.getElementById("red"),

    yellow : document.getElementById("yellow"),

    activateButton: function(num)
    {
      if(play == true){
        SimonGame.boardOptics.prepareLightUp(num);
        if(moves[turn] != num){
          reset();
        }
        turn++;
        if(turn >= size){
          SimonGame.gameSettings.advance();
        }
      }
    },
  },

    buttonActions:
    {
      play : function(){
        play = true;
        moves = [Math.floor(Math.random() * (4)) + 1];
        size = 1;
        turn = 0;
        document.getElementById("score").innerHTML = size - 1;
        document.getElementById("highScore").innerHTML = window.localStorage.highScore;
        SimonGame.boardOptics.commenceLights();
      },

      green : function(){
        SimonGame.buttons.activateButton(1);
      },

      blue : function(){
        SimonGame.buttons.activateButton(2);
      },

      red : function(){
        SimonGame.buttons.activateButton(3);
      },

      red : function(){
        SimonGame.buttons.activateButton(4);
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
      SimonGame.boardOptics.commenceLights();
    },
  },
};

SimonGame.buttons.play.addEventListener("click", SimonGame.buttonActions.play);
SimonGame.buttons.green.addEventListener("click", SimonGame.buttonActions.green);
SimonGame.buttons.blue.addEventListener("click", SimonGame.buttonActions.blue);
SimonGame.buttons.red.addEventListener("click", SimonGame.buttonActions.red);
SimonGame.buttons.yellow.addEventListener("click", SimonGame.buttonActions.yellow);
