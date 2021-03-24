// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
      if (direction) {
        pos -= 20;
        img.style.left = pos + 'px';
      } else {
        pos += 20;
        img.style.left = pos + 'px';
      }
}
// TODO: Add a setInterval call to run every 200 milliseconds. Note: in the video, Dr. Williams uses setTimeout, but here we are going to use a slightly different
//function call of setInterval, so that you can have practice using this function call. This will also have us add a couple of extra arguments, pos (position), which was declared 
//on line 2, and pageWidth, which is declared on line 4. 

//Had to enter this for nextTech - the instructions say to add the other arguement - i will add them below commented
setInterval(Run, 200);
//setInterval(Run, 200, pos, pageWidth);

// This function determines the direction of PacMan based on screen edge detection. 

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  let leftSide = 0;
  let rightSide = pageWidth - imgWidth;


if (direction === 0 && pos >= rightSide){
    direction = 1;
} else if (direction === 1 && pos < leftSide){
    direction = 0;
}

  return direction;
}


//Please do not change
module.exports = checkPageBounds;