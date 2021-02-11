var demo = document.getElementById('demo')
var image = document.getElementById("image");
var bullet = document.getElementById('bullet');
var body1 = document.getElementById('body');
body1.style.width = '100vw';
document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)";
var startGetal = [82, 164, 246, 328, 410, 492, 574];
var innerIndex = [1];
var marginCounter = 0;
var marginPosition = [400, 400, 400, 400]
var index = 0;
  // position()
var direction = ['left']
var width1 = body1.style.width;
console.log(width1);

function checkKey(e) {
  console.log(width1);
  console.log("key nr = " + e.keyCode);
  e = e || window.event;
  if (e.keyCode == 32) {
    bullet.style.background = "url('tank.png') 330px 170px)"
    bullet.style.transition = 'ease';
    bullet.style.transitionDuration = '1s';
    // Style();
    // styles();
    border();
    // \;
    // console.log(marginPosition[0]);
    // console.log(marginPosition[1]);
    console.log("spacebar");
  } else if (e.keyCode == '38') { // up arrow
    image.style.transform = "rotate(0deg)";
    bullet.style.transform = "rotate(0deg)";
    marginPosition[0] -= 20;
    image.style.top = marginPosition[0] + 'px';
    // bullet.style.top = marginPosition[0] + 'px';
    console.log(marginPosition[0]);
  } else if (e.keyCode == '40') { // down arrow
    image.style.transform = "rotate(180deg)";
    bullet.style.transform = "rotate(180deg)";
    marginPosition[0] += 20;
    image.style.top = marginPosition[0] + 'px';
    // bullet.style.top = marginPosition[0] + 'px';
    console.log("down arrow");
  } else if (e.keyCode == '37') { // left arrow
    image.style.transform = "rotate(270deg)";
    bullet.style.transform = "rotate(270deg)";
    marginPosition[1] -= 20;
    image.style.left = marginPosition[1] + 'px';
    // bullet.style.left = marginPosition[1] + 'px';
    console.log("left arrow");
  } else if (e.keyCode == '39') { // right arrow
    image.style.transform = "rotate(90deg)";
    bullet.style.transform = "rotate(90deg)";
    console.log("right arrow");
    marginPosition[1] += 20;
    image.style.left = marginPosition[1] + 'px';
    // if (bullet.style.left == image.style.left || bullet.style.left == image.style.left) {
    // bullet.style.top = marginPosition[3] + 'px';
    // bullet.style.left = marginPosition[1] + 'px';
    // }

  }
  image.style.backgroundPosition = startGetal[innerIndex] + `px 0px`; // check goed de rupsband
  left()
  innerIndex++
  if (innerIndex == 7) {
    marginCounter += 20;
    innerIndex = 0;
  }
}

// function Style() {
//   bullet.style.left = image.style.left;
//   bullet.style.top = image.style.top;
//   marginPosition[2] = marginPosition[0]
//   marginPosition[3] = marginPosition[1];
// }

// function styles(position) {
//   // if (index == position) {
//   index = 2;
//   // }
//   // if (position == 'rotate(0deg)') {
//   bullet.style.top = marginPosition[index] + 'px';
//   marginPosition[index] -= 50;
//   // } else if (position == 'rotate(90deg)') {
//   marginPosition[index] += 50;
//   bullet.style.top = marginPosition[index] + 'px';
//   index++
//   marginPosition[index] += 50;
//   bullet.style.left = marginPosition[index] + 'px';
//   // } else if (position == 'rotate(180deg)') {
//
//   // } else {
//   marginPosition[index] -= 50;
//   bullet.style.left = marginPosition[index] + 'px';
//   // }
//   index = 0;
// }

function styles2(position) {
  // if (index == position) {
    index = 2;
  if (position == 'rotate(0deg)') {
    marginPosition[2] -= 50;
    bullet.style.top = marginPosition[2] + 'px';

  }
  else if (position == 'rotate(180deg)') {
    marginPosition[2] += 50;
    bullet.style.top = marginPosition[2] + 'px';
  }
   else if (position == 'rotate(90deg)') {
   marginPosition[3] += 50;
   bullet.style.left = marginPosition[3] + 'px';
 }
  else if (position == 'rotate(270deg)'){
    marginPosition[3] -= 50;
    bullet.style.left = marginPosition[3] + 'px';
  }


  index = 0;
}

console.log(image.style.left);

function left() {
  if (marginPosition[1] <= 0) {
    marginPosition[1] = 740;
    image.style.left = marginPosition[1] + 'px'
  } else if (marginPosition[1] >= 750) {
    marginPosition[1] = 5;
    image.style.left = marginPosition[1] + 'px'
  }
  if (marginPosition[0] <= 0) {
    marginPosition[0] = 740;
    image.style.left = marginPosition[1] + 'px'
   }
   else if (marginPosition[0]>=750) {
    marginPosition[0] = 25;
    image.style.top = marginPosition[0] + 'px'
  }

}

function position() {
  marginPosition[0] = image.style.left;
  marginPosition[1] = image.style.top;

}
// var myvar = setInterval(border,1)
function border() {
  if (marginPosition[1] != 0 || marginPosition[1] != 750 || marginPosition[0] != 0 || marginPosition[0] != 750) {
    styles2(bullet.style.transform);
    if (marginPosition[0] <= 0) {
      setTimeout(function() {
        bullet.style.transition = 'none';
        bullet.style.transitionDuration = 'none';
        // var time = setInterval(function() {
        bullet.style.background = "url('Explode.gif')";
      }, 500);
      setTimeout(clearInterval(time), 500)

    }
    // }
  }
  if (marginPosition[2] <= '0' || marginPosition[2] >= '750' || marginPosition[3] <= '0' || marginPosition[3] >= '750') {

  }
}
