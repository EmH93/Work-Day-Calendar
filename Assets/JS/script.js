// variables from moment.js - day, full date and current time.
var currentDay = moment().format('dddd');
var currentMonthDayYear = moment().format("MMMM Do YYYY"); 
var currentTime = moment().format('h:mm:ss a');

//Adding current day and full date to jumbotron header
var displayCurrentDayP = $('#currentDay');
displayCurrentDayP.text(currentDay + ', ' + currentMonthDayYear);