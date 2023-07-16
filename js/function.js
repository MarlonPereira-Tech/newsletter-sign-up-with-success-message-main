$(function(){
    cta();

    ctaDesmissMessage();

    submitFunction(); 

    returnToPage();
    
});



function returnToPage() {
    $('.info-sucess-box').click(function () {
        $('.sucess-box').fadeOut();
        $('.container').fadeIn();

        return false;

    });
}

function submitFunction() {
    $('form').submit(function () {
        var erro = false;
        var email = $('form input[name=email]').val();
        if (email == '') {
            erro = true;
            $('.submit span').css('display', 'inline-block');
            $('form input[type=email]').css({ 'background-color': 'hsl(4, 88%, 77%)','border': '1px solid hsl(4, 100%, 67%)' });
            
            setTimeout(function () {
                $('.submit span').css('display', 'none');
                $('form input[type=email]').css({ 'background-color': 'white','border': '1px solid #ccc' });


            }, 2000);
        }
        if (erro == false) {
            $('.container').fadeOut();
            $('.sucess-box').fadeIn();

        }
        return false;

    });
}

function ctaDesmissMessage() {
    var el2 = $('.info-sucess-box input[type=submit]');
    el2.mouseenter(function () {
        $(this).css('background-color', 'hsl(4, 100%, 67%)');
    });
    el2.mouseout(function () {
        $(this).css('background-color', 'hsl(234, 29%, 20%)');
    });
}

function cta() {
    var el = $('form input[type=email]');
    el.mouseenter(function () {
        $('form input[type=submit]').css('background-color', 'hsl(4, 100%, 67%)');

    });
    el.mouseout(function () {
        $('form input[type=submit]').css('background-color', 'hsl(235, 18%, 26%)');
    });
}
  