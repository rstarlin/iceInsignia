$(document).ready(function(){
  //alert(document.getElementById('gameTab'))
$("#gameTable td").on('click', function()
{
    //Pass cell coordinates to a function as type long, not jQuery objects
    //Board starts at 1,1. Not 0,0
    var x = this.cellIndex + 1;
    var y = this.parentNode.rowIndex + 1;
    coordinates(x, y);
});

function coordinates(x, y)
{
    alert(x + " " + y);
}

});
