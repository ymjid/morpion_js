var nbclick=0;
var checkedCase=0;
var J1score =0;
var J2score =0;
var Morpion= Array ();
var game = "";
document.getElementById('info').innerHTML = "<font style='color:orange'>Début de la partie</font><br>";
document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:red'>Tour du joueur 1</font> <br>";
function Playcase (id) {
  if (game != "end") {
    var test = document.getElementById('case_'+id).className.indexOf('cross');
    var test2 = document.getElementById('case_'+id).className.indexOf('circle');
    if (test == -1 && test2 == -1) {
      var elem = "";
      if (nbclick % 2 == 0) {
        elem = "cross";
        color = "red";
      }
      else {
        elem = "circle";
        color = "blue";
      }
      document.getElementById('case_'+id).className = document.getElementById('case_'+id).className + " " + elem;
      document.getElementById('case_'+id).style="background-color:"+color;
      nbclick++;
      Morpion[id]= elem;
      checkedCase++;
      // check rows
      var row1a = Morpion[0]== "cross" && Morpion[1]=="cross" && Morpion[2]=="cross";
      var row1b = Morpion[0]== "circle" && Morpion[1]=="circle" && Morpion[2]=="circle";
      var row2a = Morpion[3]== "cross" && Morpion[4]=="cross" && Morpion[5]=="cross";
      var row2b = Morpion[3]== "circle" && Morpion[4]=="circle" && Morpion[5]=="circle";
      var row3a = Morpion[6]== "cross" && Morpion[7]=="cross" && Morpion[8]=="cross";
      var row3b = Morpion[6]== "circle" && Morpion[7]=="circle" && Morpion[8]=="circle";
      // check columns
      var column1a = Morpion[0]== "cross" && Morpion[3]=="cross" && Morpion[6]=="cross";
      var column1b = Morpion[0]== "circle" && Morpion[3]=="circle" && Morpion[6]=="circle";
      var column2a = Morpion[1]== "cross" && Morpion[4]=="cross" && Morpion[7]=="cross";
      var column2b = Morpion[1]== "circle" && Morpion[4]=="circle" && Morpion[7]=="circle";
      var column3a = Morpion[2]== "cross" && Morpion[5]=="cross" && Morpion[8]=="cross";
      var column3b = Morpion[2]== "circle" && Morpion[5]=="circle" && Morpion[8]=="circle";
      // check diagonals
      var diagonal1a = Morpion[0]== "cross" && Morpion[4]=="cross" && Morpion[8]=="cross";
      var diagonal1b = Morpion[0]== "circle" && Morpion[4]=="circle" && Morpion[8]=="circle";
      var diagonal2a = Morpion[2]== "cross" && Morpion[4]=="cross" && Morpion[6]=="cross";
      var diagonal2b = Morpion[2]== "circle" && Morpion[4]=="circle" && Morpion[6]=="circle";

      if (row1a || row2a || row3a || column1a || column2a || column3a || diagonal1a || diagonal2a) {
        game="end";
        J1score++;
        document.getElementById('morpion-score').innerHTML = "<font style='color:red;'>" + J1score +"</font> - <font style='color:blue;'>" + J2score + "</font>";
        document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:orange'>Joueur 1 a gagné</font> <br>";
        alert("Joueur 1 a gagné");
        document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:orange'>Cliquez sur le plateau de jeu pour relancer une partie.</font>";
      }
      else if (row1b || row2b || row3b || column1b || column2b || column3b || diagonal1b || diagonal2b) {
        game="end";
        J2score++;
        document.getElementById('morpion-score').innerHTML = "<font style='color:red;'>" + J1score +"</font> - <font style='color:blue;'>" + J2score + "</font>";
        document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:orange'>Joueur 2 a gagné</font> <br>";
        alert("Joueur 2 a gagné");
        document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:orange'>Cliquez sur le plateau de jeu pour relancer une partie.</font>";
      }
      else if (checkedCase == 9){;
        game="end";
        alert("Match nul");
        document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:orange'>Match nul</font> <br>";
        document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:orange'>Cliquez sur le plateau de jeu pour relancer une partie.</font>";
      }

      if (game != "end") {
        if (elem == "cross") {
          document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:blue'>Tour du joueur 2</font> <br>";
        }
        else {
          document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:red'>Tour du joueur 1</font> <br>";
        }
      }
    }
  }
}

function rebootgame () {
  if (game == "end") {
    var restart = confirm("Recommencer une partie ?");
    if (restart) {
      for (var i=0; i<9; i++) {
        Morpion[i]="";
        document.getElementById('case_'+i).className ="";
        document.getElementById('case_'+i).className ="morpion-case";
        document.getElementById('case_'+i).style ="background-color:none;";
      }
      checkedCase=0;
      document.getElementById('info').innerHTML ="<font style='color:orange'>Début de la partie</font><br>";
      if (nbclick % 2 == 0) {
        document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:red'>Tour du joueur 1</font> <br>";
      }
      else {
        document.getElementById('info').innerHTML = document.getElementById('info').innerHTML + " <font style='color:blue'>Tour du joueur 2</font> <br>";
      }
      game="";
    }
  }
}
