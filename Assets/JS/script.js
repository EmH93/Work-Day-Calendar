// variables from moment.js - day, full date and current time.
var currentDay = moment().format('dddd');
var currentMonthDayYear = moment().format("MMMM Do YYYY"); 
var currentTime = moment().format('H:mm:ss');

console.log(currentTime);


//variables for each textinput box on calendar.
var nineamTextInput = $('#textEntry9am');
var tenamTextInput = $('#textEntry10am');
var elevenamTextInput = $('#textEntry11am');
var twelvepmTextInput = $('#textEntry12pm');
var onepmTextInput = $('#textEntry1pm');
var twopmTextInput = $('#textEntry2pm');
var threepmTextInput = $('#textEntry3pm');
var fourpmTextInput = $('#textEntry4pm');
var fivepmTextInput = $('#textEntry5pm');

//Adding current day and full date to jumbotron header
var displayCurrentDayP = $('#currentDay');
displayCurrentDayP.text(currentDay + ', ' + currentMonthDayYear);

//if else for color of input box

if(currentTime < "17:59:59" && currentTime > "16:59:59"){
    console.log("yes");
}
    else {
        console.log("no");
    }