// alert('test');
$(document).ready(function (){
  var nbclick=0;
  var checkedCase=0;
  var J1score =0;
  var J2score =0;
  var Morpion= Array ();
  var game = "";
  var current_player = "J1";
  var new_game = null;
  function restart_game () {
    $(".morpion-case").removeClass("cross");
    $(".morpion-case").removeClass("circle");
    $(".morpion-case").css("background-color", "white");
    Morpion = Array();
    checkedCase = 0;
    game="";
    $("#info").html("<font style='color:orange'>Début de la partie</font><br>");
    if (current_player == "J1") {
      $('#info').html($('#info').html() + " <font style='color:blue'>Tour du joueur 2</font> <br>");
      current_player = "J2";
    }
    else {
      $('#info').html($('#info').html() + " <font style='color:red'>Tour du joueur 1</font> <br>");
      current_player = "J1";
    }
  }
  $("#info").html("<font style='color:orange'>Début de la partie</font><br>");
  $("#info").html($("#info").html() + " <font style='color:red'>Tour du joueur 1</font> <br>");
  $('.morpion-case').click(function() {
    if (game != "end") {
      if ($(this).hasClass('cross') === false && $(this).hasClass('circle') === false) {
        if (current_player == "J1") {
          $(this).addClass('cross');
          $(this).css("background-color", "red");
          Morpion[$(this).attr("id")]= "cross";
        }
        else {
          $(this).addClass('circle');
          $(this).css("background-color", "blue");
          Morpion[$(this).attr("id")]= "circle";
        }
        nbclick++;
        checkedCase++;
        // check rows
        var row1a = Morpion["case_0"]== "cross" && Morpion["case_1"]=="cross" && Morpion["case_2"]=="cross";
        var row1b = Morpion["case_0"]== "circle" && Morpion["case_1"]=="circle" && Morpion["case_2"]=="circle";
        var row2a = Morpion["case_3"]== "cross" && Morpion["case_4"]=="cross" && Morpion["case_5"]=="cross";
        var row2b = Morpion["case_3"]== "circle" && Morpion["case_4"]=="circle" && Morpion["case_5"]=="circle";
        var row3a = Morpion["case_6"]== "cross" && Morpion["case_7"]=="cross" && Morpion["case_8"]=="cross";
        var row3b = Morpion["case_6"]== "circle" && Morpion["case_7"]=="circle" && Morpion["case_8"]=="circle";
        // check columns
        var column1a = Morpion["case_0"]== "cross" && Morpion["case_3"]=="cross" && Morpion["case_6"]=="cross";
        var column1b = Morpion["case_0"]== "circle" && Morpion["case_3"]=="circle" && Morpion["case_6"]=="circle";
        var column2a = Morpion["case_1"]== "cross" && Morpion["case_4"]=="cross" && Morpion["case_7"]=="cross";
        var column2b = Morpion["case_1"]== "circle" && Morpion["case_4"]=="circle" && Morpion["case_7"]=="circle";
        var column3a = Morpion["case_2"]== "cross" && Morpion["case_5"]=="cross" && Morpion["case_8"]=="cross";
        var column3b = Morpion["case_2"]== "circle" && Morpion["case_5"]=="circle" && Morpion["case_8"]=="circle";
        // check diagonals
        var diagonal1a = Morpion["case_0"]== "cross" && Morpion["case_4"]=="cross" && Morpion["case_8"]=="cross";
        var diagonal1b = Morpion["case_0"]== "circle" && Morpion["case_4"]=="circle" && Morpion["case_8"]=="circle";
        var diagonal2a = Morpion["case_2"]== "cross" && Morpion["case_4"]=="cross" && Morpion["case_6"]=="cross";
        var diagonal2b = Morpion["case_2"]== "circle" && Morpion["case_4"]=="circle" && Morpion["case_6"]=="circle";

        if (row1a || row2a || row3a || column1a || column2a || column3a || diagonal1a || diagonal2a) {
          game="end";
          J1score++;
          $('#morpion-score').html("<font style='color:red;'>" + J1score +"</font> - <font style='color:blue;'>" + J2score + "</font>");
          $('#info').html($('#info').html() + " <font style='color:orange'>Joueur 1 a gagné</font> <br>");
          alert("Joueur 1 a gagné");
          $('#info').html($('#info').html() + " <font class='new_game' style='color:orange'>Cliquez ici pour relancer une partie.</font>");
        }
        else if (row1b || row2b || row3b || column1b || column2b || column3b || diagonal1b || diagonal2b) {
          game="end";
          J2score++;
          $('#morpion-score').html("<font style='color:red;'>" + J1score +"</font> - <font style='color:blue;'>" + J2score + "</font>");
          $('#info').html($('#info').html() + " <font style='color:orange'>Joueur 2 a gagné</font> <br>");
          alert("Joueur 2 a gagné");
          $('#info').html($('#info').html() + " <font class='new_game' style='color:orange'>Cliquez ici pour relancer une partie.</font>");
        }
        else if (checkedCase == 9){
          game="end";
          $('#info').html($('#info').html() + " <font style='color:orange'>Match nul</font> <br>");
          alert("Match nul");
          $('#info').html($('#info').html() + " <font class='new_game' style='color:orange'>Cliquez ici pour relancer une partie.</font>");

        }

        if (game != "end") {
          if (current_player == "J1") {
            $('#info').html($('#info').html() + " <font style='color:blue'>Tour du joueur 2</font> <br>");
            current_player = "J2";
          }
          else {
            $('#info').html($('#info').html() + " <font style='color:red'>Tour du joueur 1</font> <br>");
            current_player = "J1";
          }
        }
        else {
          var restart = confirm("Recommencer une partie ?");
          if (restart) {
            restart_game ();
          }
        }
        $(".new_game").click(function () {
          restart_game();
        });
      }
    }
  });
});
