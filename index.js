var userClickedPattern = []
var buttonColor = ["red", "blue", "green", "yellow"]
var gamePattern = []

function nextSequence(){
    var randomNumber = Math.floor((Math.random()*3)+1);
    var randomChossenColor = buttonColor[randomNumber];
    gamePattern.push(randomChossenColor);
    $('#'+randomChossenColor).attr('.pressed');
    playSound(randomChossenColor)
}

$('.btn').click( function () {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    buttonAnimation(userChosenColour);

})

function playSound(sound){
    var audio = new Audio('sound/'+sound+'.mp3');
    audio.play();
}

function buttonAnimation (currentAnimation){
    $('#'+currentAnimation).addClass('pressed');
    setTimeout(function (){
        $('#'+currentAnimation).removeClass('pressed')
    }, 100);
}
