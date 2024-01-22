
var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var start=false;
var level=0;
var len;
var currentIndex=0;


$(document).keydown(function(){
      if(!start)  
        $("#level-title").text("Level "+level);
        nextSequence();
        start=true;
        
        
    }
);
 

$(".btn").click(function(){
    
    var userChosenColour = $(this.id); 
    userClickedPattern.push(this.id);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(gamePattern.length);
});



function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    var randomVariable=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomVariable];
    
    gamePattern.push(randomChosenColour);
    

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);


    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    // return randomVariable;
}



//Play sound on click
function playSound(name) {
    console.log(name);
    var audi=new Audio("sounds/"+ name +".mp3");
    audi.play();
}


//Animation on click
function animatePress(currentColour) {
     $("#"+currentColour).addClass("pressed");
   setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   }, 100); 
}

function checkAnswer(len){
        if(userClickedPattern[currentIndex]===gamePattern[currentIndex])
        {
            console.log("correct");
            currentIndex++;
            if(currentIndex===len)
              {
              currentIndex=0;
              
              userClickedPattern=[];
              nextSequence();
              }
        }
        else
        {
            playSound("wrong");
             $("body").addClass("game-over");
            $("#level-title").text("Game Over🫠, Press Any Key to Restart");

            setTimeout(function () {
                  $("body").removeClass("game-over");
             }, 200);

             startOver();
        }
    
}

function startOver(){
    level=0;gamePattern=[];start=false;
    
}
