let boton=document.getElementById("agregar");
let guardar=document.getElementById("guardar");
let lista=document.getElementById("lista");
let data=[];
let cant=0;
boton.addEventListener("click", agregar);
guardar.addEventListener("click",save)

function agregar(){
    let nombre= document.getElementById("nombre").value;
    let precio=parseFloat(document.getElementById("precio").value);
    let cantidad=parseFloat(document.getElementById("cantidad").value);
let total= precio*cantidad;
data.push(
    {
        "id": cant,
        "nombre": nombre,
        "precio": precio,
        "cantidad": cantidad,
        "total": total
    }
);
let id_row="row"+cant;
let fila= "<tr id="+id_row+"><td>"+nombre+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+total+"</td><td><a href=´#´ class=´btn btn-danger´ onclick=´eliminar("+cant+")´;eliminar</a><a href=´#´ class= btn btn-warning´ onclick=´cantidad("+cant+")¨;Cantidad</a></td></tr>";
$("#lista").append(fila);
$("#nombre").val("");
$("#precio").val("");
$("#cantidad").val("");
$("#nombre").focus();
cant++;
// sumar();

}


function save (){

}




