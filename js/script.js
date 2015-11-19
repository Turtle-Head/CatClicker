//-------------------------
// global variables go here
var canvas_x, canvas_y = 0;

//-------------------------
// functions go here

// initialize the mousedown eventlistener
function init(){
  var canvas = document.getElementByID("cvs");
  cnv.addEventListener("mousedown", doMouseDown, false);
}
//update the co-ordinates of the mousedown event
function doMouseDown(event){
  canvas_x = event.pageX;
  canvas_y = event.pageY;
}
