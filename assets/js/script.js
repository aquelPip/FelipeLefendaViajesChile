$(function(){ // Document Ready

    $('[data-bs-toggle="tooltip"]').tooltip();   //Inicio método para tooltip
    
    $("#enviarContacto").click(function(){  //Función para activar alerta al enviar mensaje de contacto
        alert("¡Su mensaje ha sido enviado!");
    });

    $(".card-title").click(function(){ // Función que oculta todos los textos de las cartas al clickear cualquier título de las mismas
        $(".card-text").toggle();
      });


});