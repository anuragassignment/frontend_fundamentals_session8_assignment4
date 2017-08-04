$(document).ready(function() {
    //function displays preloader while page loads 
    $(window).load(function() {
        $('#preloader').fadeOut('fast');
        $('#bg').fadeOut('slow');
    });
    //function to hide Jumbotron content
    $(".jumbotron p #hide").click(function() {
        $('#jumbotron-content').slideUp();
    });
    //function to show Jumbotron content
    $(".jumbotron p #show").click(function() {
        $('#jumbotron-content').slideDown();
    });
    //function that toggles between font-size of Jumbotron Content
    $("#jumbotron-content p #font-size").click(function() {
        $("#jumbotron-content p").toggleClass('font-size');
    });
    //function that toggles between font colors of Jumbotron Content
    $("#jumbotron-content p #font-color").click(function() {
        $("#jumbotron-content p").toggleClass('font-color');
    });
});