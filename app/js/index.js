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