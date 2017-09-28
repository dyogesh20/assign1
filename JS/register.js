$("document").ready(function () {
      var ValidationPass=0;
//    $("p").css("border", "3px solid red");
    $("p").css("color", "red");
    $("#form").submit(function (e) {
        e.preventDefault();
    });
    $('[name=username]').focusout(
        function () {
            checkUser();
        }
    );
    $('[name=password]').focusout(
        function () {
            checkPassword();
        }
    );
    $('[name=verifypw]').focusout(
        function () {
            checkVerify();
        }
    );
    $('[name=firstname]').focusout(
        function () {
            checkFirst();
        }
    );
    $('[name=lastname]').focusout(
        function () {

            checkLast();
        }
    );
    $('[name=adline1]').focusout(
        function () {

            checkAddLine();
        }
    );
    $('[name=city]').focusout(
        function () {
            checkCity();
        }
    );
    $('[name=state]').focusout(
        function () {
            checkState();
        }
    );
    $('[name=zip]').focusout(
        function () {

            checkZip();
        }
    );
    $('[name=country]').focusout(
        function () {
            checkCountry();
        }
    );
    $('[name=phone]').focusout(
        function () {
            checkPhone();
        }
    );
    $('[name=email]').focusout(
        function () {
            checkEmail();
        }
    );

    function checkUser() {
        var userName = $('[name=username]').val();
        if(userName && userName.length>5){
            $("#wrongUser").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongUser").show();
            $("#wrongUser").text("Username must be at least 5 characters");
            ValidationPass=0;
        }
    }

    function checkPassword() {
        var password = $('[name=password]').val();
        var count = 0;
        count += /[a-z]/.test(password) ? 1 : 0;
        count += /[A-Z]/.test(password) ? 1 : 0;
        count += /\d/.test(password) ? 1 : 0;
        count += /[^\w\d\s]/.test(password) ? 1 : 0;
        count += !/[\s]+/.test(password)? 1:0;

        //(count>2 & !/[\s]+/.test(pass)) ? $("#wrongUser").text("Username must be at least 5 characters"):$('[name=password]').css('background-color','orange');
        if (count> 4 && password.length >7){
            $("#wrongPass").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongPass").show();
            $("#wrongPass").text("Password must be at least one Uppercase, Lower case and digit and special character");
            ValidationPass=0;
        }

    }
    function checkVerify() {

        var password = $('[name=password]').val();
        var passwordVerify = $('[name=verifypw]').val();
        var count = 0;
        count += /[a-z]/.test(password) ? 1 : 0;
        count += /[A-Z]/.test(password) ? 1 : 0;
        if(passwordVerify && (password == passwordVerify) && (count>1)){
            $("#wrongVerify").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongVerify").show();
            $("#wrongVerify").text("Password and verifyPassword must match");
            ValidationPass=0;
        }
    }

    function checkFirst() {
        var firstName = $('[name=firstname]').val();
        var count = 0;
        count += /[a-z]/.test(firstName) ? 1 : 0;
        count += /[A-Z]/.test(firstName) ? 1 : 0;
        if(firstName && count>0){
            $("#wrongFirst").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongFirst").show();
            $("#wrongFirst").text("FirstName msut be character");
            ValidationPass=0;
        }
    }
    function checkLast() {
        var lastName = $('[name=lastname]').val();
        var count = 0;
        count += /[a-z]/.test(lastName) ? 1 : 0;
        count += /[A-Z]/.test(lastName) ? 1 : 0;
        if(lastName && count>0){
            $("#wrongLast").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongLast").show();
            $("#wrongLast").text("LastName msut be character");
            ValidationPass=0;
        }
    }
    function checkPhone() {
        var phoneNo = $('[name=phone]').val();
        var count = 0;
        count += /^\d{3}-?\d{3}-?\d{4}$/.test(phoneNo) ? 1 : 0;
        if(phoneNo && (count>0) && (phoneNo.length==12)){
            $("#wrongPhone").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongPhone").show();
            $("#wrongPhone").text("phone number must be correct");
            ValidationPass=0;
        }
    }
    function checkEmail() {
        var email = $('[name=email]').val();
        var count = 0;
        count += /^[a-z0-9.]+\@[a-z0-9.]+$/.test(email) ? 1 : 0;
        if(email && (count>0) && (email.length>4)){
            $("#wrongEmail").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongEmail").show();
            $("#wrongEmail").text("Enter correct email");
            ValidationPass=0;
        }
    }
    function checkZip() {
        var zip = $('[name=zip]').val();
        var count = 0;
        count += /d/.test(zip) ? 1 : 0;
        if(zip && (count>0) && (zip.length==5)){
            $("#wrongZip").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongZip").show();
            $("#wrongZip").text("zip number must be 5 digit");
            ValidationPass=0;
        }
    }
    function checkCity() {
        var city = $('[name=city]').val();
        if(city && city.length>1){
            $("#wrongCity").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongCity").show();
            $("#wrongCity").text("Select correct city");
            ValidationPass=0;
        }
    }
    function checkCountry() {
        var country = $('[name=country]').val();
        var count = 0;
        count += /[A-E]/.test(country) ? 1 : 0;
        if(country && count>0){
            $("#wrongCountry").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongCountry").show();
            $("#wrongCountry").text("Select correct city");
            ValidationPass=0;
        }
    }
    function checkState() {
        var state = $('[name=state]').val();
        var count = 0;

        count += /[A-E]/.test(state) ? 1 : 0;
        if(state && count>0){
            $("#wrongState").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongState").show();
            $("#wrongState").text("Select correct State");
            ValidationPass=0;
        }
    }
    function checkAddLine() {
        var addLine = $('[name=addLine]').val();

        if(addLine && addLine.length>3){
            $("#wrongAddress").hide();
            ValidationPass+=1;
        }
        else{
            $("#wrongAddress").show();
            $("#wrongAddress").text("Wrong Address!");
            ValidationPass=0;
        }

    }

    $("#submitteddd").click(function () {

            checkUser();
            checkPassword();
            checkVerify();
            checkFirst();
            checkLast();
            checkAddLine();
            checkCity();
            checkState();
            checkZip();
            checkCountry();
            checkPhone();
            checkEmail();
            if (ValidationPass>11){
                $("#Validation").text("form Submitted");
            }
            else{
                $("#Validation").text("form can not Submitted");
            }

    });

});



