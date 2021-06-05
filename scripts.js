
var zoom=1;
 
document.getElementById("font-up").addEventListener("click",function(e){
if(zoom<=1.55){
    zoom+=.30;
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


