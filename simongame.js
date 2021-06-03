
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
// #########   this fadein fadeout use for blinking any box or content
  $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  // var audio = new Audio("E:/project/simon game/sounds/" + name + ".mp3");
  var audio = new Audio("E:/new webdevelopement files/jquery allwork.html/Simon+Game+Challenge+Starting+Files/Simon Game Challenge Starting Files/Simon Game Challenge Step 2 Answer/sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}





//
// var arr=["g","r","y","b"];
// var i=1
// for (i;i<=100;i++){
//   var c=0;
//   var s=""
//   while (c<=i){
//     var n=math.floor(math.random()*4)+1;
//     s+=arr[n-1];
//     c+=1;
//   var k=0;
//   while (k<=i){
//     var f=false
//     document.addEventListener("keypress",function('event'){
//       var b=event.key;
//       if b==s[0]{
//         s=s[1:]
//       }else{
//         f=true
//         break;
//       }
//     })
//     if (f==false){
//       i+=1
//
//     }else{
//       i=1
//       break;
//     }
//   }
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // var a=math.floor(math.random()*4)+1;
// // var arr=["green","red","yellow","blue"];
// // $("body").keypress(function(event){
// //   console.log('start')
// //   c=1
// //   console.log("level",c)
// //   while (c!=0){
// //     flag=False;
// //     i=c
// //     while (i!=0){
// //       var a=math.floor(math.random()*4)+1;
// //       s=arr[a-1]
// //       if (s=="green"){
// //         $("body").css("color","green");
// //
// //       }
// //       else if (s=="red"){
// //         $("body").css("color","red");
// //       }
// //       else if (s=="yellow"){
// //         $("body").css("color","yellow");
// //       }
// //       else{
// //         $("body").css("color","blue");
// //       }
// //     }
// //
// //   }
// // })
