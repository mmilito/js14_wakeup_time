$(document).on('ready', function() {
  
var outerShell = $('<div class="outerShell"></div>');
var innerShell = $('<div class="innerShell"></div>');
var clockScreen = $('<div class="clockScreen"></div>');
var clockText = $('<p class="clockText">12:17</p>');
var leftPMLabel =$('<p class="leftPMLabel">PM</p>');
var leftAutoLabel = $('<p class="leftAutoLabel">Auto</p>');
var indicator = $('<button class="button"></button>');
var AM = $('<p class="AM">AM &nbsp; &nbsp; &nbsp;  53 &nbsp; &nbsp;  60 &nbsp; &nbsp; 90 &nbsp; &nbsp; 110 &nbsp; &nbsp;140&nbsp; &nbsp; 170 &nbsp; &nbsp; &nbsp; KHz</p>');
var PM = $('<p class="FM">FM &nbsp; &nbsp; &nbsp; 88 &nbsp; &nbsp; 92&nbsp; &nbsp; 96&nbsp; &nbsp; 102&nbsp; &nbsp; 106&nbsp; &nbsp;108 &nbsp; &nbsp; &nbsp; &nbsp; MHz</p>');



//create clock physical appearance
$('.container').append(outerShell);
$('.outerShell').append(innerShell);
$('.innerShell').append(clockScreen);
$('.innerShell').append(leftAutoLabel);
$('.innerShell').append(leftPMLabel);
$('.clockScreen').append(clockText);
$('.clockScreen').append(indicator);
$('.innerShell').append(AM);
$('.innerShell').append(PM);


//functional clock
// var currentHours=$(date).getHours();
// console.log(currentHours());

// bottom of page
});