//  Blanco y negro
document.getElementById("btn-byno").addEventListener("click", function (e) {
  if (document.getElementById("btn-byno").checked) {
    blancoNegro();
  } else {
    noByN();
  }
});

// Resaltar Links
document.getElementById("btn-resalt").addEventListener("click", function (e) {
  if (document.getElementById("btn-resalt").checked) {
    underline();
  } else {
    noUnderline();
  } 
});

// Contraste alto
document.getElementById("btn-contra").addEventListener("click", function (e) {
  if (document.getElementById("btn-contra").checked) {
    contrast();
  } else {
    noContrast();
  }
});

// Fuente Legible
document.getElementById("btn-legible").addEventListener("click", function (e) {
  if (document.getElementById("btn-legible").checked) {
    legible();
  } else {
    noLegible();
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
  var checkbox = document.getElementById("btn-byno");
  localStorage.setItem("btn-byno", checkbox.checked);
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
  $("div").css("color", "white");
  $("span").css("color", "white");
  $("p").css("color", "white");
  $(".flat-event").css("background", "#0D1117");
  $(".wrap-quote ").css("background", "#0D1117");
  $(".latest-blog .post-bg").css("background", "#2B3240");
  $(".card").css("background", "#0D1117");

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
