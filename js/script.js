$(function(){

    var model = {
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
      "HTMLcat" : '<div id="name">%nnn%</div><div id="point">%p%</div><div id="cat"><img id="pic" src="%img%" width="100px" height="100px" alt="%name%"></div>',
      "HTMLlist" : '<div class="list-flex" id="%index%">%name%</div>',
      "current" : 0
    };


    var octopus = {
        init: function() {
          view.init(model);
          octopus.menuListener();
        },
        listenerMain: function() {
          $("#pic").click(function() {
            model.cats[model.current].points+=1;
            $("#point").text(model.cats[model.current].points);
          });
          $("#admin").click(function(){

          });
        },
        menuListener: function(){
          for (var i=0;i<model.cats.length;i++){
            octopus.addListener(i);
          }
        },
        addListener: function(i){
          $("#"+model.cats[i].name).click(function(){
            model.current = model.cats[i].index;
            console.log(this.id);
            view.renderCatCurrent(model);
          });
        },
        addAdminListener: function(){
          $('#adminB').show();
          $("#adminB").click(function(){
            view.adminView(model.cats[model.current]);
          });
          $("#submit-btn").click(function(){
            octopus.adminSubmit();
          });
          $("#cancel-btn").click(function(){
            view.hideAdmin();
          });
        },
        adminSubmit: function(){
          console.log('Submit started');
          if($('#noc').val() !== ""){
              var noc = Number($('#noc').val());
              model.cats[model.current].points = noc;
              console.log(noc);
            }
          if($('#noCat').val() !== ""){
            var noCat = $('#noCat').val();
            for(var c=0; c < model.cats.length; c++){
              $('#'+model.cats[c].name).remove();
            }
            model.cats[model.current].name = noCat;
            console.log(noCat);
            $('#noCat').text = "";
          }
          if($('#imageSource').val() !== ""){
            var img = $('#imageSource').val();
            model.cats[model.current].img = img;
            console.log(img);
          }
          view.init(model);
          console.log('init');
          view.renderCatCurrent(model);
          console.log('render');
          octopus.menuListener();
        }
    };


    var view = {
        init: function(obj) {
          var formattedList = '';
          for (var i=0;i < obj.cats.length; i++){
            formattedList += obj.HTMLlist.replace("%name%",obj.cats[i].name).replace("%index%",obj.cats[i].name);
          }
          $('#catNames').append(formattedList);
          $('#adminB').hide();
          $('#adminForm').hide();
        },
        renderCatCurrent: function(obj){
          var formattedPic = obj.HTMLcat.replace("%nnn%",obj.cats[obj.current].name).replace("%p%",obj.cats[obj.current].points).replace("%img%",obj.cats[obj.current].img).replace("%name%",obj.cats[obj.current].name);
            // Replace image, points and name
          $("#ctx").replaceWith('<div class="image" id="ctx">' + formattedPic + '</div>');
          octopus.listenerMain();
          view.adminButton();
        },
        adminButton: function(){
          $("#adminB").replaceWith('<div id="adminB">Admin</div>');
          octopus.addAdminListener();
        },
        adminView: function(obj){
          $('#adminForm').show();
          console.log(obj);
          $('#noc').val(obj.points);
          $('#noCat').val(obj.name);
          $('#imageSource').val(obj.img);
        },
        hideAdmin: function(){
          $('#adminForm').hide();
        }
    };

    octopus.init();
});
