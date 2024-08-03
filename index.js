function SayGreetings() {
    let three = document.getElementById("3");
    three.innerHTML='';

    // Play audio
    let audio = document.getElementById("backgroundAudio");
    audio.play();
}

// Butterfly Animation Code
var x = 0;
var y = 0;
var size = 0;
var rotation = 0;
var transitiontimer;
var wingtimer;
var nexttimer;

function flutter(vartimer, wrapperId) {
    var wrapper = document.getElementById(wrapperId);

    nexttimer = vartimer + (generaterandomno(-200, 200));
    nexttimer = (nexttimer < 1500 || nexttimer > 3000 ? 1500 : nexttimer);

    x += generaterandomno(-80, 80);
    y += generaterandomno(-80, 80);

    x = (x < 20 ? 30 : x);
    y = (y < 20 ? 30 : y);
    x = (x > 250 ? 240 : x);
    y = (y > 250 ? 240 : y);

    size += generaterandomno(-10, 10);
    size = (size < 10 ? 20 : size);
    size = (size > 50 ? 40 : size);

    rotation += generaterandomno(-10, 10);
    rotation = (rotation < -20 ? 0 : rotation);
    rotation = (rotation > 20 ? 0 : rotation);

    transitiontimer = generaterandomno(20, 50) / 10;

    wrapper.style.marginLeft = x + "px";
    wrapper.style.marginTop = y + "px";
    wrapper.style.width = size + "px";
    wrapper.style.height = size + "px";
    wrapper.style.transform = "rotate(" + rotation + "deg)";
    wrapper.style.webkitTransform = "rotate(" + rotation + "deg)";
    wrapper.style.transition = "all " + transitiontimer + "s";
    wrapper.style.webkitTransition = "all " + transitiontimer + "s";

    wingtimer = generaterandomno(1, 5);
    var upperwings = wrapper.getElementsByClassName("upperwing");
    var lowerwings = wrapper.getElementsByClassName("lowerwing");

    for (var k = 0; k <= 1; k++) {
        upperwings[k].style.animationDuration = "0." + wingtimer + "s";
        upperwings[k].style.webkitAnimationDuration = "0." + wingtimer + "s";
        lowerwings[k].style.animationDuration = "0." + wingtimer + "s";
        lowerwings[k].style.webkitAnimationDuration = "0." + wingtimer + "s";
    }

    setTimeout(function() { flutter(nexttimer, wrapperId); }, vartimer);
}

function generaterandomno(varmin, varmax) {
    return Math.floor((Math.random() * (varmax - varmin + 1)) + varmin);
}

function initButterflies() {
    flutter(1500, "butterfly_wrapper1");
    flutter(1500, "butterfly_wrapper2");
    flutter(1500, "butterfly_wrapper3");
    flutter(1500, "butterfly_wrapper4");
}

window.onload = initButterflies;
