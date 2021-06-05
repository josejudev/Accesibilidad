
//Botones para agrandar y disminuir el tamaño de la fuente
var zoom=1;

document.getElementById("font-up").addEventListener("click",function(e){
if(zoom<=1.55){
    zoom+=.05;
    resize();
}
});
document.getElementById("font-down").addEventListener("click",function(e){
    if(zoom>1) {
        zoom-=.10;
        resize();
    }
});
 
function resize() {
    document.getElementById("text").style.zoom=zoom;
    document.getElementById("value").innerHTML="x"+zoom.toFixed(2);
}

//Cambiar a filtro blanco y negro


  document.getElementById("btn-check-2-outlined").addEventListener("click",function(e){



    if (document.getElementById('btn-check-2-outlined').checked){
      document.getElementById("imagen-A").style.filter = "grayscale(100%)"
      document.getElementById("cuerpo").style.filter = "grayscale(100%)"
      
    } else{
      document.getElementById("imagen-A").style.filter = "none"
      document.getElementById("cuerpo").style.filter = "none"
    }

    


});



