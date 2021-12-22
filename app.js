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
let id_row='row'+cant;
  let fila='<tr id='+id_row+'><td>'+nombre+'</td><td>'+precio+'</td><td>'+cantidad+'</td><td>'+total+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a><a href="#" class="btn btn-danger" onclick="cantidad('+cant+')";>Cantidad</a></td></tr>';
  //agregar fila a la tabla
  $("#lista").append(fila);
  $("#nombre").val('');
  $("#precio").val('');
  $("#cantidad").val('');
  $("#nombre").focus();
  cant++;
  sumar();
}
function save (){

}
function sumar(){
    let tot=0;
    for(x of data){
        tot=tot+x.total;
    }
    document.getElementById("total").innerHTML="Total "+tot;

}
function cantidad(row){
    var canti=parseInt(prompt("Nueva cantidad"));
    data[row].cantidad=canti;
    data[row].total=data[row].cantidad*data[row].precio;
    var filaid=document.getElementById("row"+row);
    celda=filaid.getElementsByTagName('td');
    celda[2].innerHTML=canti;
    celda[3].innerHTML= data[row].total;
    console.log(data);
    sumar();
}


function eliminar(row){
    $("#row"+row).remove();
    let i=0;
    let pos=0;
    for (x of data){
        if(x.id==row){
            pos=i;
        }
        i++;
    }
    data.splice(pos,1);
    sumar();
}


