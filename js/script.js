/*********
Script.js
*********/

$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    $('#slogan-p').fadeIn(3000);

    $(".link").click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    });
    
    $("#top-link").click(function(event) {
        $("#top-p").slideToggle();
    });
    
    $('#speaker-link').click(function(event) {
        $("#speaker-p").slideToggle();
    });
    
    $("#mid-link").click(function(event) {
        $("#mid-p").slideToggle();
    });
});

function newpage() {
    window.location = newLocation;
}