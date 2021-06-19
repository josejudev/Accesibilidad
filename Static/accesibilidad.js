let contador_1 = 1;
let contador_2;
// document.getElementById("btn-byno").addEventListener("click",function(e){



//   if (document.getElementById('btn-byno').checked){
   
//     blancoNegro();

//   } else{
//     noByN();
//   }
// });




// $(document).ready(function(){
  
//     $("#small").click(function(event){
//       event.preventDefault();
//       $("h1").animate({"font-size":"24px"});
//       $("h2").animate({"font-size":"16px"});
//       $("p").animate({"font-size":"12px", "line-height":"16px"});
//       console.log("Funciona")
      
//     });
    
//     $("#medium").click(function(event){
//       event.preventDefault();
//       $("h1").animate({"font-size":"36px"});
//       $("h2").animate({"font-size":"24px"});
//       $("p").animate({"font-size":"14px", "line-height":"20px"});
      
//     });
    
//     $("#large").click(function(event){
//       event.preventDefault();
//       $("h1").animate({"font-size":"48px"});
//       $("h2").animate({"font-size":"30px"});
//       $("p").animate({"font-size":"16px", "line-height":"20px"});
      
//     });
    
//     $("#max").click(function(event){
//       event.preventDefault();
//       $("h1").animate({"font-size":"56px"});
//       $("h2").animate({"font-size":"42px"});
//       $("p").animate({"font-size":"24px", "line-height":"26px"});
      
//     });
  
//     $( "a" ).click(function() {
//      $("a").removeClass("selected");
//     $(this).addClass("selected");
    
//    });
  
//   });






//  Blanco y negro
 document.getElementById("btn-byno").addEventListener("click", (e) => {
   contador_1 += 1;
   contador_2 = contador_1 % 2;
   if (contador_2 == 0) {
     blancoNegro();
   } else {
     noByN();
     contador_1 = 1;
   }
 });

// Resaltar Links
document.getElementById("btn-resalt").addEventListener("click", (e) => {
  contador_1 += 1;
  contador_2 = contador_1 % 2;
  if (contador_2 == 0) {
    underline();
  } else {
    noUnderline();
    contador_1 = 1;
  }
});

// Contraste alto
document.getElementById("btn-contra").addEventListener("click", (e) => {
  contador_1 += 1;
  contador_2 = contador_1 % 2;
  if (contador_2 == 0) {
    contrast();
  } else {
    noContrast();
    contador_1 = 1;
  }
});

// Fuente Legible
document.getElementById("btn-legible").addEventListener("click", (e) => {
  contador_1 += 1;
  contador_2 = contador_1 % 2;
  if (contador_2 == 0) {
    legible();
  } else {
    noLegible();
    contador_1 = 1;
  }
});

//Restablecer cambios

document.getElementById("btn-reload").addEventListener("click", (e) => {
  noByN();
  noUnderline();
  noContrast();
  noLegible();
});

// Blanco y negro a toda la pagina completa

let black_white = document.getElementsByTagName("html");
function blancoNegro() {
  for (let i = 0; i < black_white.length; i++) {

    black_white[i].style.filter = "grayscale(100%)";
  }
}
function noByN() {
  for (let i = 0; i < black_white.length; i++) {
    black_white[i].style.filter = "grayscale(0%)";
  }
}

// Underline a todos los elementos con links

let link_resalt = document.getElementsByTagName("a");
function underline() {
  for (let i = 0; i < link_resalt.length; i++) {
    link_resalt[i].style.textDecoration = "underline 2px";
  }
}
function noUnderline() {
  for (let i = 0; i < link_resalt.length; i++) {
    link_resalt[i].style.textDecoration = "none";
  }
}

// High Contrast a todos los elementos con url, divs y parrafos
let high_contrast = document.getElementsByTagName("a");

function contrast() {
  $( "div" ).css( "color", "white" );
  $( "span" ).css( "color", "white" );
  $( "p" ).css( "color", "white" );
  $( ".flat-event" ).css( "background", "#0D1117" );
  $( ".wrap-quote " ).css( "background", "#0D1117" );
  $( ".latest-blog .post-bg" ).css( "background", "#2B3240" );
  $( ".card" ).css( "background", "#0D1117" );



  document.body.style.backgroundColor = "#0D1117";
  for (let i = 0; i < high_contrast.length; i++) {
    high_contrast[i].style.color = "#66D1D1";
      $(high_contrast[i]).hover(function(){
        $(this).css("color", "yellow");
        }, function(){
        $(this).css("color", "#66D1D1");
      });
  }
}
function noContrast() {
  document.body.style.backgroundColor = "#fff";
  $( "div" ).css( "color", "" );
  $( "span" ).css( "color", "" );
  $( "p" ).css( "color", "" );
  $( ".flat-event" ).css( "background", "inherit" );
  $( ".wrap-quote " ).css( "background", "inherit" );
  $( ".latest-blog .post-bg" ).css( "background", "" );
  $( ".card" ).css( "background", "" );
  
  for (let i = 0; i < high_contrast.length; i++) {
    high_contrast[i].style.color = "";
    $(high_contrast[i]).hover(function(){
      $(this).css("color", "");
      }, function(){
      $(this).css("color", "");
    });
  }
}

//Propiedades para la fuente legible
let legible_font = document.getElementsByTagName("p");
let legible_font_2 = document.getElementsByTagName("span");

function legible() {
for (let i = 0; i < legible_font.length; i++ ){
  legible_font[i].style.fontWeight = "bold";
}

for (let i = 0; i < legible_font_2.length; i++){
  legible_font_2[i].style.fontWeight = "bold";
}

}
function noLegible() {
  for (let i = 0; i < legible_font.length; i++ ){
    legible_font[i].style.fontWeight = "normal";
  }
  for (let i = 0; i < legible_font_2.length; i++){
    legible_font_2[i].style.fontWeight = "normal";
  }

}