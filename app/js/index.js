

setInterval(function() {
    let screenWidth = window.screen.width;
    let offsetWidthCard = document.querySelector('.card').offsetWidth;
    let offsetHeightExamplesBox = document.querySelector('.examples-box').offsetWidth;

    let offsetHeightCard = offsetWidthCard / 1.3;
    $('.card').css({"height" : offsetHeightCard});

    if (screenWidth < 550) {
        $('.examples').css({"padding-bottom" : (offsetHeightExamplesBox + 260)});
    } else if (screenWidth < 992) {
        $('.examples').css({"padding-bottom" : (offsetHeightExamplesBox + 150)});
    }
}, 200);

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

    if (position < 1) {
        $('.slide-first').css({"left" : ""});
        $('.slide-second').css({"left" : ""});
        $('.slide-third').css({"left" : ""});
        $('.slide-fourth').css({"left" : ""});
        $('.slide-fifth').css({"left" : ""});
    } else if (position == 1) {
        $('.slide-first').css({"left" : "calc(50% - (336px + (50px + 672px)))"});
        $('.slide-second').css({"left" : "calc(50% - 336px)"});
        $('.slide-third').css({"left" : "calc(50% + (336px + 50px))"});
        $('.slide-fourth').css({"left" : "calc(50% + (336px + 50px) + (672px + 50px))"});
        $('.slide-fifth').css({"left" : "calc(50% + (336px + 50px) + (672px + 50px) * 2)"});
    } else if (position == 2) {
        $('.slide-first').css({"left" : "calc(50% - (336px + (50px + 672px) * 2))"});
        $('.slide-second').css({"left" : "calc(50% - (336px + (50px + 672px)))"});
        $('.slide-third').css({"left" : "calc(50% - 336px)"});
        $('.slide-fourth').css({"left" : "calc(50% + (336px + 50px))"});
        $('.slide-fifth').css({"left" : "calc(50% + (336px + 50px) + (672px + 50px))"});
    } else if (position == 3) {
        $('.slide-first').css({"left" : "calc(50% - (336px + (50px + 672px) * 3))"});
        $('.slide-second').css({"left" : "calc(50% - (336px + (50px + 672px) * 2))"});
        $('.slide-third').css({"left" : "calc(50% - (336px + (50px + 672px)))"});
        $('.slide-fourth').css({"left" : "calc(50% - 336px)"});
        $('.slide-fifth').css({"left" : "calc(50% + (336px + 50px))"});
    } else if (position == 4) {
        $('.slide-first').css({"left" : "calc(50% - (336px + (50px + 672px) * 4))"});
        $('.slide-second').css({"left" : "calc(50% - (336px + (50px + 672px) * 3))"});
        $('.slide-third').css({"left" : "calc(50% - (336px + (50px + 672px) * 2))"});
        $('.slide-fourth').css({"left" : "calc(50% - (336px + (50px + 672px)))"});
        $('.slide-fifth').css({"left" : "calc(50% - 336px)"});
    }
    if (position <= 0) {
        position = 0;
    } else if (position >= 4) {
        position = 4;
    }
}

function mobPositions(num) {
    position += num;
    let screenWidth = window.screen.width;
    let fifst_position = "214px";
    let second_position = "429px";
    
    if (screenWidth < 440) {
        fifst_position = "150px";
        second_position = "300px";
    } else if (screenWidth < 480) {
        fifst_position = "195px";
        second_position = "390px";
    }

    if (position < 1) {
        $('.slide-first').css({"left" : ""});
        $('.slide-second').css({"left" : ""});
        $('.slide-third').css({"left" : ""});
        $('.slide-fourth').css({"left" : ""});
        $('.slide-fifth').css({"left" : ""});
    } else if (position == 1) {
        $('.slide-first').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ")))"});
        $('.slide-second').css({"left" : "calc(50% - " + fifst_position + ")"});
        $('.slide-third').css({"left" : "calc(50% + (" + fifst_position + " + 50px))"});
        $('.slide-fourth').css({"left" : "calc(50% + (" + fifst_position + " + 50px) + (" + second_position + " + 50px))"});
        $('.slide-fifth').css({"left" : "calc(50% + (" + fifst_position + " + 50px) + (" + second_position + " + 50px) * 2)"});
    } else if (position == 2) {
        $('.slide-first').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ") * 2))"});
        $('.slide-second').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ")))"});
        $('.slide-third').css({"left" : "calc(50% - " + fifst_position + ")"});
        $('.slide-fourth').css({"left" : "calc(50% + (" + fifst_position + " + 50px))"});
        $('.slide-fifth').css({"left" : "calc(50% + (" + fifst_position + " + 50px) + (" + second_position + " + 50px))"});
    } else if (position == 3) {
        $('.slide-first').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ") * 3))"});
        $('.slide-second').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ") * 2))"});
        $('.slide-third').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ")))"});
        $('.slide-fourth').css({"left" : "calc(50% - " + fifst_position + ")"});
        $('.slide-fifth').css({"left" : "calc(50% + (" + fifst_position + " + 50px))"});
    } else if (position == 4) {
        $('.slide-first').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ") * 4))"});
        $('.slide-second').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ") * 3))"});
        $('.slide-third').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ") * 2))"});
        $('.slide-fourth').css({"left" : "calc(50% - (" + fifst_position + " + (50px + " + second_position + ")))"});
        $('.slide-fifth').css({"left" : "calc(50% - " + fifst_position + ")"});
    }
    if (position <= 0) {
        position = 0;
    } else if (position >= 4) {
        position = 4;
    }
}

function cardPositions(left_right) {
    if (left_right == 1) {
        $('.examples-box').css({
            "left" : "-100%"
        })
    } else if (left_right == 0) {
        $('.examples-box').css({
            "left" : "0"
        })
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


/**
 * 
 * --- MOBILE MENU ---
 * 
 */
let menu = false;
$('.mob-nav').click(function() {
    if (!menu) {
        $('.mob-menu').css({"display" : "flex"});
        menu = true;
    } else {
        $('.mob-menu').css({"display" : "none"});
        menu = false;
    }
})


/**
 * 
 * --- BURGER MENU ---
 * 
 */
$('.services').click(function() {
    let desing = document.querySelector('.desing');
    desing.scrollIntoView();
});

$('.portfolio').click(function() {
    let dev_stage = document.querySelector('.dev-stage');
    dev_stage.scrollIntoView();
});

$('.stages').click(function() {
    let examples = document.querySelector('.examples');
    examples.scrollIntoView();
});

$('.desings').click(function() {
    let information = document.querySelector('.information');
    information.scrollIntoView();
});

$('.label').click(function() {
    var div = document.querySelector('.internet-shop');
    div.scrollIntoView();
});