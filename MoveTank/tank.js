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
var marginPosition = [400, 400, 400, 400];
var index = 0;
var waarde = false;
var direction = ['left'];
var width1 = body1.style.width;
console.log(width1);

function checkKey(e) {
  console.log(width1);
  console.log("key nr = " + e.keyCode);

  e = e || window.event;
  if (e.keyCode == 82) {
    setTimeout(styles3, 1);
    bullet.style.transition = 'none';
    bullet.style.transitionDuration = 'none';
  }
  if (e.keyCode == 32){
    bullet.style.background = "url('tank.png') 330px 170px";
    bullet.style.transition = 'ease';
    bullet.style.transitionDuration = '1s';
    waarde = false;
    border();
    console.log("spacebar");
  } else if (e.keyCode == '38') { // up arrow
    image.style.transform = "rotate(0deg)";
    bullet.style.transform = "rotate(0deg)";
    marginPosition[0] -= 20;
    image.style.top = marginPosition[0] + 'px';
    console.log(marginPosition[0]);
  } else if (e.keyCode == '40') { // down arrow
    image.style.transform = "rotate(180deg)";
    bullet.style.transform = "rotate(180deg)";
    marginPosition[0] += 20;
    image.style.top = marginPosition[0] + 'px';
    console.log("down arrow");
  } else if (e.keyCode == '37') { // left arrow
    image.style.transform = "rotate(270deg)";
    bullet.style.transform = "rotate(270deg)";
    marginPosition[1] -= 20;
    image.style.left = marginPosition[1] + 'px';
    console.log("left arrow");
  } else if (e.keyCode == '39') { // right arrow
    image.style.transform = "rotate(90deg)";
    bullet.style.transform = "rotate(90deg)";
    console.log("right arrow");
    marginPosition[1] += 20;
    image.style.left = marginPosition[1] + 'px';
  }
  image.style.backgroundPosition = startGetal[innerIndex] + `px 0px`; // check goed de rupsband
  imageBorder()
  innerIndex++
  if (innerIndex == 7) {
    marginCounter += 20;
    innerIndex = 0;
  }
}

function styles3() {
  marginPosition[2] = marginPosition[1];
  bullet.style.left = marginPosition[2] + 'px';
  marginPosition[3] = marginPosition[0];
  bullet.style.top = marginPosition[3] + 'px';
  bullet.style.background = "url('tank.png') 330px 170px)";
}

function styles2(position) {
  index = 2;
  if (position == 'rotate(0deg)') {
    marginPosition[index] -= 50;
    bullet.style.top = marginPosition[index] + 'px';
    position = marginPosition[index]

  } else if (position == 'rotate(180deg)') {
    marginPosition[index] += 50;
    bullet.style.top = marginPosition[index] + 'px';
    position = marginPosition[index]
  }
  index++
  if (position == 'rotate(90deg)') {
    marginPosition[index] += 50;
    bullet.style.left = marginPosition[index] + 'px';
    position = marginPosition[index]
  } else if (position == 'rotate(270deg)') {
    marginPosition[index] -= 50;
    bullet.style.left = marginPosition[index] + 'px';
    position = marginPosition[index]
  }
  index = 0;
}

function imageBorder() {
  index = 1;
  if (marginPosition[1] <= 0) {
    marginPosition[1] = 740;
    image.style.left = marginPosition[1] + 'px';
  } else if (marginPosition[1] >= 750) {
    marginPosition[1] = 5;
    image.style.left = marginPosition[1] + 'px';
  }
  if (marginPosition[0] <= 0) {
    marginPosition[0] = 740;
    image.style.left = marginPosition[1] + 'px';
  } else if (marginPosition[0] >= 750) {
    marginPosition[0] = 25;
    image.style.top = marginPosition[0] + 'px';
  }
}

function border() {
  if (marginPosition[2] >= 0 && marginPosition[2] <= 750 && marginPosition[3] >= 0 && marginPosition[3] <= 750) {
    styles2(image.style.transform);
  } else {
    setTimeout(function() {
      bullet.style.transition = 'none';
      bullet.style.transitionDuration = 'none';
      bullet.style.background = "url('Explode.gif')";
      waarde = true;
      console.log(waarde);
    }, 500);
  }
}
var getallen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
function map() {
  for (var i = 0; i < 40; i++) {
    var gridRandom =  Math.floor(Math.random()* getallen.length);
    var gridRandom2 =  Math.floor(Math.random()* getallen.length);
    var gridRandom3=  Math.floor(Math.random()* getallen.length);
    var gridRandom4 =  Math.floor(Math.random()* getallen.length);
    console.log(gridRandom);
    var wall =  document.createElement('DIV');
    wall.style.width = '50px';
    wall.style.height = '50px';
    wall.style.backgroundColor = 'black';
    wall.style.display = 'inline-block';
    wall.style.gridColumn = gridRandom + '/'+ gridRandom2;
    wall.style.gridRow =  gridRandom3 + '/'+ gridRandom4;
    demo.appendChild(wall);
  }
}
map();

function colis() {
if (bullet.) {

}
}
colis()
//  bullet = {x: 5, y: 5, width: 50, height: 50}
//  wall = {x: 20, y: 10, width: 10, height: 10}
//
// if (bullet.x < wall.x + wall.width &&
//    bullet.x + bullet.width > wall.x &&
//    bullet.y < wall.y + wall.height &&
//    bullet.y + bullet.height > wall.y) {
//     // collision detected!
// }

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}
