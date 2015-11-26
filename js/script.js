//-------------------------
// global variables go here
var points = 0;
var points2 = 0;
var $pointsElem = $("#point");
var $ctx = $("#ctx");
var HTMLcat = '<div id="name">%nnn%</div><div id="point">%p%</div><div id="cat"><img id="pic" src="%img%" width="100px" height="100px" alt="%name%"></div>';
var HTMLlist= '<div class="list-flex" id="%index%">%name%</div>';
var name1 = "Nate";
var name2 = "Jessica";
var current = 0;
var formattedList='';
var cats = {
  "cats":[
      {
        "name" : "Nate",
        "img" : "img/cat.png",
        "points": 0,
        "index": 0
      },
      {
        "name": "Jessica",
        "img": "img/cat.png",
        "points": 0,
        "index": 1
      },
      {
        "name": "Joey",
        "img": "img/cat.png",
        "points": 0,
        "index": 2
      },
      {
        "name": "Abby",
        "img": "img/cat.png",
        "points": 0,
        "index": 3
      },
      {
        "name": "Spaz",
        "img": "img/cat.png",
        "points": 0,
        "index": 4
      }
    ],
  display: function (){

    for (var i=0; i < cats.cats.length; i++){
      formattedList += HTMLlist.replace("%name%",cats.cats[i].name).replace("%index%",cats.cats[i].name);
    }
    $('#catNames').append(formattedList);
  }
};
cats.display();
//-------------------------
// Click handlers

// Cat click handler and image changer rolled together
function setCat(){
  var formattedPic = HTMLcat.replace("%nnn%",cats.cats[current].name).replace("%p%",cats.cats[current].points).replace("%img%",cats.cats[current].img).replace("%name%",cats.cats[current].name);
  // Replace image, points and name
  $("#ctx").replaceWith('<div class="image" id="ctx">' + formattedPic + '</div>');
  console.log(cats.cats[current].name);
  // Count clicks for current cat
  $("#pic").click(function() {
    cats.cats[current].points+=1;
    console.log("p"+current+": "+cats.cats[current].points);
    $("#point").text(cats.cats[current].points);
  });
}

// Name div click handlers
$("#Nate").click(function(){
  current = 0;
  setCat();
});
$("#Jessica").click(function(){
  current = 1;
  setCat();
});
$("#Joey").click(function(){
  current = 2;
  setCat();
});
$("#Abby").click(function(){
  current = 3;
  setCat();
});
$("#Spaz").click(function(){
  current = 4;
  setCat();
});
