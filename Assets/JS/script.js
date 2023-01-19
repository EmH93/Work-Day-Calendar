// variables from moment.js - day, full date and current time.
    var currentDay = moment().format('dddd');
    var currentMonthDayYear = moment().format("MMMM Do YYYY"); 
    var currentTime = moment().format('HH:mm:ss');

//variables for each row's save button 
    var saveBtnNine = $('#saveBtn9am');
    var saveBtnTen = $('#saveBtn10am');
    var saveBtnEleven = $('#saveBtn11am');
    var saveBtnTwelve = $('#saveBtn12pm');
    var saveBtnOne = $('#saveBtn1pm');
    var saveBtnTwo = $('#saveBtn2pm');
    var saveBtnThree = $('#saveBtn3pm');
    var saveBtnFour = $('#saveBtn4pm');
    var saveBtnFive = $('#saveBtn5pm');

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

//On load add existing events to calendar
    addEventNine();
    addEventTen();
    addEventEleven();
    addEventTwelve();
    addEventOne();
    addEventTwo();
    addEventThree();
    addEventFour();
    addEventFive();

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

//grab text input from textinput field and save to localStorage then push text to row.

//9am save button event and push text to textbox
    saveBtnNine.on("click", function(event){
        event.preventDefault();
        nineUserValue = nineamTextInput.val();
        localStorage.setItem("9am Event", nineUserValue);
            addEventNine();
    });

        function addEventNine() {
            var historicEventNine = localStorage.getItem("9am Event");
            nineamTextInput.attr("placeholder", historicEventNine);
        };

//10am save button event and push text to textbox
    saveBtnTen.on("click", function(event){
        event.preventDefault();
        tenUserValue = tenamTextInput.val();
        localStorage.setItem("10am Event", tenUserValue);
        addEventTen();
    });

        function addEventTen() {
            var historicEventTen = localStorage.getItem("10am Event");
            tenamTextInput.attr("placeholder", historicEventTen);
        };

//11am save button event and push text to textbox
    saveBtnEleven.on("click", function(event){
        event.preventDefault();
        elevenUserValue = elevenamTextInput.val();
        localStorage.setItem("11am Event", elevenUserValue);
        addEventEleven();
    });

        function addEventEleven() {
            var historicEventEleven = localStorage.getItem("11am Event");
            elevenamTextInput.attr("placeholder", historicEventEleven);
        };

//12pm save button event and push text to textbox
    saveBtnTwelve.on("click", function(event){
        event.preventDefault();
        twelveUserValue = twelvepmTextInput.val();
        localStorage.setItem("12pm Event", twelveUserValue);
            addEventTwelve();
    });

        function addEventTwelve() {
            var historicEventTwelve = localStorage.getItem("12pm Event");
            twelvepmTextInput.attr("placeholder", historicEventTwelve);
        };

//1pm save button event and push text to textbox
    saveBtnOne.on("click", function(event){
        event.preventDefault();
        oneUserValue = onepmTextInput.val();
        localStorage.setItem("1pm Event", oneUserValue);
        addEventOne();
    });

        function addEventOne() {
            var historicEventOne = localStorage.getItem("1pm Event");
            onepmTextInput.attr("placeholder", historicEventOne);
        };

//2pm save button event and push text to textbox
    saveBtnTwo.on("click", function(event){
        event.preventDefault();
        twoUserValue = twopmTextInput.val();
        localStorage.setItem("2pm Event", twoUserValue);
        addEventTwo();
    });

        function addEventTwo() {
            var historicEventTwo = localStorage.getItem("2pm Event");
            twopmTextInput.attr("placeholder", historicEventTwo);
        };

//3pm save button event and push text to textbox
    saveBtnThree.on("click", function(event){
        event.preventDefault();
        threeUserValue = threepmTextInput.val();
        localStorage.setItem("3pm Event", threeUserValue);
        addEventThree();
    });

        function addEventThree() {
            var historicEventThree = localStorage.getItem("3pm Event");
            threepmTextInput.attr("placeholder", historicEventThree);
        };

//4pm save button event and push text to textbox
    saveBtnFour.on("click", function(event){
        event.preventDefault();
        fourUserValue = fourpmTextInput.val();
        localStorage.setItem("4pm Event", fourUserValue);
        addEventFour();
    });

        function addEventFour() {
            var historicEventFour = localStorage.getItem("4pm Event");
            fourpmTextInput.attr("placeholder", historicEventFour);
        };

//5pm save button event and push text to textbox
    saveBtnFive.on("click", function(event){
        event.preventDefault();
        fiveUserValue = fivepmTextInput.val();
        localStorage.setItem("5pm Event", fiveUserValue);
        addEventFive();
    });

        function addEventFive() {
            var historicEventFive = localStorage.getItem("5pm Event");
            fivepmTextInput.attr("placeholder", historicEventFive);
        };