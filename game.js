$(document).ready(function(){
  //alert(document.getElementById('gameTab'))

  setupGame();




});


var options = {
  rows: 15,
  cols: 15
}

var setupGame = function(){
  addClicks();
}

var addClicks = function(){

  for (var i = 1; i <= options.rows; i++) {
    for (var j = 1; j <= options.cols; j++) {
      var iString, jString;
      if (i<10) {
        iString = '0'+i;
      }else {
        iString = ''+i;
      }
      if (j<10) {
        jString = '0'+j;
      }else {
        jString = ''+j;
      }
      new Clickable(document.getElementById('td'+iString+''+jString));
    }
  }
}

var Clickable = function(element) {

  this.handleEvent = function(event) {
    switch(event.type) {
      case 'click':
        alert(event.target.id)

        break;
      case 'dblclick':
        //alert(event.pageY)
        break;
    }
  };

  element.addEventListener('click', this);
  element.addEventListener('dblclick', this, false);
}
