$(document).ready(function(){
    console.log("Documento cargado");

      // Hace que funcione el botón de return
      let PlayLink = $("#play");
      PlayLink.click(function(){
          window.location.href="../JuegoHTML/play.html";
      }); 
      let SettingsLink = $("#settings");
      SettingsLink.click(function(){
          window.location.href="../JuegoHTML/settings.html";
      }); 
      let CostumesLink = $("#costumes");
      CostumesLink.click(function(){
          window.location.href="../JuegoHTML/costumes.html";
      }); 
      let PageLink = $("#quit");
      PageLink.click(function(){
          window.location.href="../JuegoHTML/inde.html";
          st
      }); 
})