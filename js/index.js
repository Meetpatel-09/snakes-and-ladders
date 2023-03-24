var box = document.getElementById("box");
var dice = document.getElementById("dice");
var pred = document.getElementById("pred");

var boxElements = "";
var counter = 1;

for (let i = 1; i <= 10; i++) {
     boxElements += `<div id="boxRow${i}" class="boxrow"> \n`;

     for (let j = 1; j <= 10; j++) {
          boxElements += `<div id="box${counter}" class="boxitem"></div>\n`;
          counter++;
     }
     boxElements += `</div>\n`;
}

box.innerHTML = boxElements;