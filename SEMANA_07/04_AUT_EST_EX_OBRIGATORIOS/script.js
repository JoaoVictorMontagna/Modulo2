﻿
$(document).ready(function(){
    $("#exp").click(function(){
      $("#cont").slideToggle("slow");
      $("#cont2").slideToggle("slow");
    });
  });


$(document).ready(function(){
    $("#botao").click(function(){
      $("#hab1").fadeToggle("slow");
      $("#hab2").fadeToggle("slow");
      $("#hab3").fadeToggle("slow");
    });
  });

  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("ajax").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "ajax_cont.txt");
    xhttp.send();
  }


