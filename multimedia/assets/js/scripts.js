/*var secciones = document.getElementById('primera');
//var seccion = secciones[0];
var alto = secciones.style.height;

console.log(alto);*/
/*$seccion = $('.primera')[0].css("top");
console.log($seccion);
if($seccion < "20px"){
    console.log("es cero");
}*/
//console.log(window.location.hash);
/*$link1 = $("#link1");


$menu = $("#myMenu");

if(window.location.hash == "#firstPage"){//$link1.hasClass("active")){
    $menu.css("top", "100vh");
} else if(window.location.hash == "#secondPage"){
    $menu.css("top", "50vh");
} else {
    $menu.css("top", "0");
}*/
//'use strict';
//(function(){
    var modalContent = ["uno","dos","tres","cuatro","cinco <br> seis"];
    $contModal = $('.cont-reading');
    var modalCont = document.getElementById('modal-body_parrafo');
    
    $contModal.each(function(index, content){
        $(this).click(function(){
            //console.log(index);
            modalCont.innerHTML = modalContent[index];
        });
    });
    //console.log($contModal);
//}());