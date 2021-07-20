//Botones para agrandar y disminuir el tamaño de la fuente
//Aumentar y disminuir texto


let minimun = 16;
let maximun = 20;
let reset = $("p").css("fontSize");
let elm = $("p,a");
let size = str_replace(reset, "px", "");

$("#fontSizePlus").click(function () {
  if (size <= maximun) {
    size++;
    elm.css({ fontSize: size });
  }
  return false;
});

$("#fontSizeMinus").click(function () {
  if (size >= minimun) {
    size--;
    elm.css({ fontSize: size });
  }

  return false;
});
$("a.fontReset").click(function () {
  elm.css({ fontSize: reset });
});

function str_replace(haystack, needle, replacement) {
  var temp = haystack.split(needle);
  return temp.join(replacement);
}

//Funcion para que el texto hable (Fase de pruebas)
txt = document.getElementsByTagName("p");


$("p").hover(function(){

  decir(txt[1].innerHTML);
  });



function decir(){
  speechSynthesis.speak(new SpeechSynthesisUtterance(txt[1].innerHTML));
}



//Boton al ser presionado se quede en pause la grabacion




 

// Blanco y negro a toda la pagina completa
function blancoNegro() {
  document.getElementsByTagName("html")[0].style.filter = "grayscale(100%)";
}
function noByN() {
  document.getElementsByTagName("html")[0].style.filter = "grayscale(0%)";
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
  $("div").css("color", "white");

  $("p").css("color", "white");
  $(".flat-event").css("background", "#0D1117");
  $(".wrap-quote ").css("background", "#0D1117");
  $(".latest-blog .post-bg").css("background", "#2B3240");
  $(".card").css("background", "#0D1117");
  $(".chat-bar-input-block").css("background", "#51718C");
  $(".full-chat-block").css("background", "#2B3240");
  $("#initialMessage").css("color", "black");
  $("#loading-overlay").css("background", "#0D1117");
  $(".TEXTOGLITCH").css("color", "black");
  $(".detail-event").css("color", "white");
  $(".icon-event").css("color", "white");
  $(".widget").css("background", "#0D1117");


  document.body.style.backgroundColor = "#0D1117";
  for (let i = 0; i < high_contrast.length; i++) {
    high_contrast[i].style.color = "#66D1D1";
    $(high_contrast[i]).hover(
      function () {
        $(this).css("color", "yellow");
      },
      function () {
        $(this).css("color", "#66D1D1");
      }
    );
  }
}
function noContrast() {
  document.body.style.backgroundColor = "#fff";
  $("div").css("color", "");
  $("span").css("color", "");
  $("p").css("color", "");
  $(".flat-event").css("background", "inherit");
  $(".wrap-quote ").css("background", "inherit");
  $(".latest-blog .post-bg").css("background", "");
  $(".card").css("background", "");
  $(".full-chat-block").css("background", "");
  $(".chat-bar-input-block").css("background", "");
  $("#loading-overlay").css("background", "");
  $(".TEXTOGLITCH").css("color", "");
  $(".detail-event").css("color", "");
  $(".icon-event").css("color", "");
  $(".widget").css("background", "");

  for (let i = 0; i < high_contrast.length; i++) {
    high_contrast[i].style.color = "";
    $(high_contrast[i]).hover(
      function () {
        $(this).css("color", "");
      },
      function () {
        $(this).css("color", "");
      }
    );
  }
}

//Propiedades para la fuente legible
let legible_font = document.getElementsByTagName("p");
let legible_font_2 = document.getElementsByTagName("span");

function legible() {
  for (let i = 0; i < legible_font.length; i++) {
    legible_font[i].style.fontWeight = "bold";
  }

  for (let i = 0; i < legible_font_2.length; i++) {
    legible_font_2[i].style.fontWeight = "bold";
  }
}
function noLegible() {
  for (let i = 0; i < legible_font.length; i++) {
    legible_font[i].style.fontWeight = "normal";
  }
  for (let i = 0; i < legible_font_2.length; i++) {
    legible_font_2[i].style.fontWeight = "normal";
  }
}
//Local Strorage

const check = document.getElementById("btn-byno");

if (localStorage.getItem("mod-gray") === null) {
  localStorage.setItem("mod-gray", "false");
}

checkStatus();

function checkStatus() {
  if (localStorage.getItem("mod-gray") === "false") {
    check.checked = false;
    noByN();
  } else {
    check.checked = true;
    blancoNegro();
  }
}

function changeStatus() {
  if (localStorage.getItem("mod-gray") === "false") {
    localStorage.setItem("mod-gray", "true");
    blancoNegro();
  } else {
    localStorage.setItem("mod-gray", "false");
    noByN();
  }
}

const check_2 = document.getElementById("btn-resalt");

if (localStorage.getItem("mod-underline") === null) {
  localStorage.setItem("mod-underline", "false");
}

checkStatus_2();

function checkStatus_2() {
  if (localStorage.getItem("mod-underline") === "false") {
    check_2.checked = false;
    noUnderline();
  } else {
    check_2.checked = true;
    underline();
  }
}

function changeStatus_2() {
  if (localStorage.getItem("mod-underline") === "false") {
    localStorage.setItem("mod-underline", "true");
    underline();
  } else {
    localStorage.setItem("mod-underline", "false");
    noUnderline();
  }
}

const check_3 = document.getElementById("btn-contra");

if (localStorage.getItem("mod-contrast") === null) {
  localStorage.setItem("mod-contrast", "false");
}

checkStatus_3();

function checkStatus_3() {
  if (localStorage.getItem("mod-contrast") === "false") {
    check_3.checked = false;
    noContrast();
  } else {
    check_3.checked = true;
    contrast();
  }
}

function changeStatus_3() {
  if (localStorage.getItem("mod-contrast") === "false") {
    localStorage.setItem("mod-contrast", "true");
    contrast();
  } else {
    localStorage.setItem("mod-contrast", "false");
    noContrast();
  }
}

const check_4 = document.getElementById("btn-legible");

if (localStorage.getItem("mod-bold") === null) {
  localStorage.setItem("mod-bold", "false");
}

checkStatus_4();

function checkStatus_4() {
  if (localStorage.getItem("mod-bold") === "false") {
    check_4.checked = false;
    noLegible();
  } else {
    check_4.checked = true;
    legible();
  }
}

function changeStatus_4() {
  if (localStorage.getItem("mod-bold") === "false") {
    localStorage.setItem("mod-bold", "true");
    legible();
  } else {
    localStorage.setItem("mod-bold", "false");
    noLegible();
  }
}

//Fin del Local Storage

//Restablecer cambios

document.getElementById("btn-reload").addEventListener("click", (e) => {
  elm.css({ fontSize: reset });
  noByN();
  noUnderline();
  noContrast();
  noLegible();
  localStorage.clear();
});



tippy('#fontSizePlus', {
  content: 'Aumentar Texto',
  followCursor: true,
  placement: 'right',
  hideOnClick: false
});
tippy('#fontSizeMinus', {
  content: 'Disminuir Texto',
  followCursor: true,
  placement: 'right',
  hideOnClick: false
});
tippy('.fa-underline', {
  content: 'Subrayar Links',
  followCursor: true,
  placement: 'right',
  hideOnClick: false
});
tippy('.fa-bol', {
  content: 'Letras En Negritas',
  followCursor: true,
  placement: 'right',
  hideOnClick: false
});
tippy('.fa-adjust', {
  content: 'Modo Alto Contraste',
  followCursor: true,
  placement: 'right',
  hideOnClick: false,
  zIndex: 9999,
});
tippy('.fa-tint', {
  content: 'Modo Blanco y Negro',
  followCursor: true,
  placement: 'right',
  hideOnClick: false
});
tippy('#btn-reload', {
  content: 'Deshacer',
  followCursor: true,
  placement: 'right',
  hideOnClick: false
});
tippy('.btn-mas', {
  content: 'Accesibilidad',
  followCursor: true,
  placement: 'right',
  hideOnClick: false
});



// txt = document.getElementById("texto_examp");
// console.log(texto_examp.innerHTML);