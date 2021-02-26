var myPix = new Array("imgs/WhatsApp Image 2020-11-23 at 11.46.12 AM.jpeg","IMG_8605.JPG", "IMG_6585.JPG", "IMG_8660.JPG", "IMG_8921.JPG", "IMG_8996.JPG" );

function TimerSwitch(pic) {
    TimerRunning=true;
    var timer = setTimeout(function() { SwitchPic(pic) }, 2000);
    
}
function TimerSwitch1(pic) {
    TimerRunning=true;
    var timer = setTimeout(function() { SwitchPic3(pic) }, 3500);
    
}
function TimerSwitch2(pic) {
    TimerRunning=true;
    var timer = setTimeout(function() { SwitchPic5(pic) }, 4500);
}
function SwitchPic(pic) {
    pic.src = "Imgs/EQMM1448.JPG";
}
 
function SwitchPic3(pic) {
    pic.src = "Imgs/IMG_8660.JPG";
}
function SwitchPic5(pic) {
    pic.src = "Imgs/IMG_8921.JPG";
}

document.setElementById("UsrTxt").placeholder = "Type name here..";