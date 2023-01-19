// variables from moment.js - day, full date and current time.
var currentDay = moment().format('dddd');
var currentMonthDayYear = moment().format("MMMM Do YYYY"); 
var currentTime = moment().format('HH:mm:ss');

//TODO remove below once done: fake time variable so I can test the statements and log of current time
var fakeTime = "08:23:33";
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
    //9am textinput colour
        if(currentTime < "09:59:59" && currentTime > "08:59:59"){
            nineamTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "09:59:59") {
            nineamTextInput.attr("class", "form-control textarea past" );
        };

    //10am textinput colour
        if(currentTime < "10:59:59" && currentTime > "09:59:59"){
        tenamTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "10:59:59") {
            tenamTextInput.attr("class", "form-control textarea past" );
        };

    //11am textinput colour
        if(currentTime < "11:59:59" && currentTime > "10:59:59"){
            elevenamTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "11:59:59") {
            elevenamTextInput.attr("class", "form-control textarea past" );
        };

    //12pm textinput colour
        if(currentTime < "12:59:59" && currentTime > "11:59:59"){
            twelvepmTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "12:59:59") {
            twelvepmTextInput.attr("class", "form-control textarea past" );
        };

    //1pm textinput colour
    if(currentTime < "13:59:59" && currentTime > "12:59:59"){
            onepmTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "13:59:59") {
            onepmTextInput.attr("class", "form-control textarea past" );
        };

    //2pm textinput colour
        if(currentTime < "14:59:59" && currentTime > "13:59:59"){
            twopmTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "14:59:59") {
            twopmTextInput.attr("class", "form-control textarea past" );
        };

    //3pm textinput colour
        if(currentTime < "15:59:59" && currentTime > "14:59:59"){
            threepmTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "15:59:59") {
            threepmTextInput.attr("class", "form-control textarea past" );
        };

    //4pm textinput colour
        if(currentTime < "16:59:59" && currentTime > "15:59:59"){
            fourpmTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "16:59:59") {
            fourpmTextInput.attr("class", "form-control textarea past" );
        };

    //5pm textinput colour
        if(currentTime < "17:59:59" && currentTime > "16:59:59"){
            fivepmTextInput.attr("class", "form-control textarea present");
        } else if(currentTime > "17:59:59") {
            fivepmTextInput.attr("class", "form-control textarea past" );
        };