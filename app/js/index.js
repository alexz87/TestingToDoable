/**
 * 
 * --- DESING MENU FUNCTION ---
 * 
 */

$('.info-first .bottom').click(function() {
    act_info('.info-first');

    dis_info('.info-second');
    dis_info('.info-third');
    dis_info('.info-fourth');
    dis_info('.info-fifth');
});

$('.info-second .bottom').click(function() {
    act_info('.info-second');

    dis_info('.info-first');
    dis_info('.info-third');
    dis_info('.info-fourth');
    dis_info('.info-fifth');
});

$('.info-third .bottom').click(function() {
    act_info('.info-third');

    dis_info('.info-first');
    dis_info('.info-second');
    dis_info('.info-fourth');
    dis_info('.info-fifth');
});

$('.info-fourth .bottom').click(function() {
    act_info('.info-fourth');

    dis_info('.info-first');
    dis_info('.info-second');
    dis_info('.info-third');
    dis_info('.info-fifth');
});

$('.info-fifth .bottom').click(function() {
    act_info('.info-fifth');

    dis_info('.info-first');
    dis_info('.info-second');
    dis_info('.info-third');
    dis_info('.info-fourth');
});

$('.top').click(function() {
    dis_info('.info-first');
    dis_info('.info-second');
    dis_info('.info-third');
    dis_info('.info-fourth');
    dis_info('.info-fifth');
});

function act_info(info) {
    $(info + ' .p-first').css({
        "font-size" : "21px",
        "font-weight" : "700",
        "line-height" : "26.25px",
        "color" : "#111"
    });
    $(info + ' .block-second').css({"display" : "inline"});
    $(info + ' .sphere-blue').css({"display" : "inline"});
    $(info + ' .sphere-green').css({"display" : "none"});
    $(info + ' .top').css({"display" : "inline"});
    $(info + ' .bottom').css({"display" : "none"});
}

function dis_info(info) {
    $(info + ' .p-first').css({
        "font-size" : "",
        "font-weight" : "",
        "line-height" : "",
        "color" : ""
    });
    $(info + ' .block-second').css({"display" : ""});
    $(info + ' .sphere-blue').css({"display" : ""});
    $(info + ' .sphere-green').css({"display" : ""});
    $(info + ' .top').css({"display" : ""});
    $(info + ' .bottom').css({"display" : ""});
}


/**
 * 
 * --- SLIDER ---
 * 
 */
 var position = 0;
function positions(num) {
    position += num;

    if(position < 1) {
        $('.slide-first').css({"left" : ""});
        $('.slide-second').css({"left" : ""});
        $('.slide-third').css({"left" : ""});
        $('.slide-fourth').css({"left" : ""});
        $('.slide-fifth').css({"left" : ""});
    } else if(position == 1) {
        $('.slide-first').css({"left" : "calc(50% - (336px + (50px + 672px)))"});
        $('.slide-second').css({"left" : "calc(50% - 336px)"});
        $('.slide-third').css({"left" : "calc(50% + (336px + 50px))"});
        $('.slide-fourth').css({"left" : "calc(50% + (336px + 50px) + (672px + 50px))"});
        $('.slide-fifth').css({"left" : "calc(50% + (336px + 50px) + (672px + 50px) * 2)"});
    } else if(position == 2) {
        $('.slide-first').css({"left" : "calc(50% - (336px + (50px + 672px) * 2))"});
        $('.slide-second').css({"left" : "calc(50% - (336px + (50px + 672px)))"});
        $('.slide-third').css({"left" : "calc(50% - 336px)"});
        $('.slide-fourth').css({"left" : "calc(50% + (336px + 50px))"});
        $('.slide-fifth').css({"left" : "calc(50% + (336px + 50px) + (672px + 50px))"});
    } else if(position == 3) {
        $('.slide-first').css({"left" : "calc(50% - (336px + (50px + 672px) * 3))"});
        $('.slide-second').css({"left" : "calc(50% - (336px + (50px + 672px) * 2))"});
        $('.slide-third').css({"left" : "calc(50% - (336px + (50px + 672px)))"});
        $('.slide-fourth').css({"left" : "calc(50% - 336px)"});
        $('.slide-fifth').css({"left" : "calc(50% + (336px + 50px))"});
    } else if(position == 4) {
        $('.slide-first').css({"left" : "calc(50% - (336px + (50px + 672px) * 4))"});
        $('.slide-second').css({"left" : "calc(50% - (336px + (50px + 672px) * 3))"});
        $('.slide-third').css({"left" : "calc(50% - (336px + (50px + 672px) * 2))"});
        $('.slide-fourth').css({"left" : "calc(50% - (336px + (50px + 672px)))"});
        $('.slide-fifth').css({"left" : "calc(50% - 336px)"});
    }
    if(position <= 0) {
        position = 0;
    } else if(position >= 4) {
        position = 4;
    }
}


/*
 * 
 * --- FORM ---
 * 
 */
$('#name').focus(function() {
    $(this).attr("placeholder", "Введите Имя");
});
$('#tel').focus(function() {
    $(this).attr("placeholder", "Введите Tелефон");
});
$('#email').focus(function() {
    $(this).attr("placeholder", "Введите Email");
});


$('#name').keyup(function() {
    let name = $(this).val();

    if (name.length <= 3) {
        $(this).css({"color" : "red"});
    } else {
        $(this).css({"color" : ""});
    }
});
$('#tel').keyup(function() {
    let tel = $(this).val();

    if (tel.length != 10 || tel.match("[a-zA-Z]")) {
        $(this).css({"color" : "red"});
    } else {
        $(this).css({"color" : ""});
    }
});


$('.btn-form').click(function() {
    if (!$('#email').val().includes("@") || !$('#email').val().includes(".")) {
        $('#email').css({"color" : "red"});
    } else {
        $('#name').val(null);
        $('#tel').val(null);
        $('#email').val(null);
    }
});