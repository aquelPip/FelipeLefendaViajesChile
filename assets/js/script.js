$(function(){

    $('[data-bs-toggle="tooltip"]').tooltip();   
    
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });

    $("h3").dblclick(function(){
        $(this).css("color","red");
    });

    $(".card-title").click(function(){
        $(".card-text").toggle();
      });


});