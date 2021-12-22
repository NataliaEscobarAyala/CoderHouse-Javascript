$(document).ready(function(){
    $.ajax({
        url: 'https://apis.datos.gob.ar/georef/api/provincias',
        type:'GET',
        success: function (str) {// Función de devolución de llamada exitosa
          listarprovincias(str.provincias)
       },
        error: function (err) {// Función de devolución de llamada fallida
     }
       })
    
})


   function listarprovincias(options) {
    let elemento = $("#provincias")[0];
    
    for (let i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        option.value = options[i].id;
        option.text = options[i].nombre;
        elemento.appendChild(option);
        }
        }