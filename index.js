var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=0;
var k=0;
var i=0;

$(".btn").on("click",function(){
var userChosenColour=$(this).attr("id");
var audio1=new Audio("sounds/"+userChosenColour+".mp3")
audio1.play();
animatePress(userChosenColour);
userClickedPattern.push(userChosenColour);
checkAnswer();
});


{
$(document).keypress(function(){
    if(k==0)
    {
    $("h1").text("level "+level);
    nextSequence();
    k=1;
    }
});
}
            
function nextSequence()
{
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
     gamePattern.push(randomChosenColour);
     $("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
     var audio=new Audio("sounds/"+randomChosenColour+".mp3");
     audio.play();
     level++;
     $("h1").text("level "+level);

}
function animatePress(currentColour)
{    
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $(".pressed").removeClass("pressed");
    },100);
}
function checkAnswer()
{
  if(userClickedPattern[i]==gamePattern[i])
  {
   if(i==gamePattern.length-1)
   {setTimeout(function(){nextSequence();
    i=0;
    userClickedPattern=[];},500);
   }
   else
   {
    i++;
   }

  }
  else
  {
    $("h1").text("game over, press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },500);
    k=0;
    level=0;
    i=0;
    gamePattern=[];
    userClickedPattern=[];
  }
}
