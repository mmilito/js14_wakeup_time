$(document).on('ready', function() {
  
var outerShell = $('<div class="outerShell"></div>');
var innerShell = $('<div class="innerShell"></div>');
var clockScreen = $('<div class="clockScreen"></div>');
var clockText = $('<p class="clockText">0455</p>')


//create outerShell
$('.container').append(outerShell);
$('.outerShell').append(innerShell);
$('.innerShell').append(clockScreen);
$('.clockScreen').append(clockText);


// bottom of page
});