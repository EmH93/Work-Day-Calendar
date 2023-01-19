// variables from moment.js - day, full date and current time.
var currentDay = moment().format('dddd');
var currentMonthDayYear = moment().format("MMMM Do YYYY"); 
var currentTime = moment().format('HH:mm:ss');

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

//if else statement that changes colour of input box - time dependant

//fake time variable so I can test the statements:
var fakeTime = "08:23:33";

//9am textinput colour
    if(fakeTime < "09:59:59" && fakeTime > "08:59:59"){
        nineamTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "09:59:59") {
        nineamTextInput.attr("class", "form-control textarea past" );
    };

//10am textinput colour
    if(fakeTime < "10:59:59" && fakeTime > "09:59:59"){
       tenamTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "10:59:59") {
        tenamTextInput.attr("class", "form-control textarea past" );
    };

//11am textinput colour
    if(fakeTime < "11:59:59" && fakeTime > "10:59:59"){
        elevenamTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "11:59:59") {
        elevenamTextInput.attr("class", "form-control textarea past" );
    };

//12pm textinput colour
    if(fakeTime < "12:59:59" && fakeTime > "11:59:59"){
        twelvepmTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "12:59:59") {
        twelvepmTextInput.attr("class", "form-control textarea past" );
    };

//1pm textinput colour
if(fakeTime < "13:59:59" && fakeTime > "12:59:59"){
        onepmTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "13:59:59") {
        onepmTextInput.attr("class", "form-control textarea past" );
    };

//2pm textinput colour
    if(fakeTime < "14:59:59" && fakeTime > "13:59:59"){
        twopmTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "14:59:59") {
        twopmTextInput.attr("class", "form-control textarea past" );
    };

//3pm textinput colour
    if(fakeTime < "15:59:59" && fakeTime > "14:59:59"){
        threepmTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "15:59:59") {
        threepmTextInput.attr("class", "form-control textarea past" );
    };

//4pm textinput colour
    if(fakeTime < "16:59:59" && fakeTime > "15:59:59"){
        fourpmTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "16:59:59") {
        fourpmTextInput.attr("class", "form-control textarea past" );
    };

//5pm textinput colour
    if(fakeTime < "17:59:59" && fakeTime > "16:59:59"){
        fivepmTextInput.attr("class", "form-control textarea present");
    } else if(fakeTime > "17:59:59") {
        fivepmTextInput.attr("class", "form-control textarea past" );
    };