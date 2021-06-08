//Botones para agrandar y disminuir el tamaño de la fuente
var zoom = 1;

document.getElementById("font-up").addEventListener("click", function (e) {
  if (zoom <= 1.55) {
    zoom += 0.05;
    resize();
  }
});
document.getElementById("font-down").addEventListener("click", function (e) {
  if (zoom > 1) {
    zoom -= 0.05;
    resize();
  }
});

function resize() {
  document.getElementById("text").style.zoom = zoom;
  document.getElementById("holis").style.zoom = zoom;
}

let y = 1;
let x;
//nuevo blanco y negro
document.getElementById("btn-byno").addEventListener("click", function (e) {
  y += 1;
  x = y % 2;
  if (x == 0) {
    blancoNegro();
  } else {
    noByN();
    y = 1;
  }
});



// nuevo Resaltar Links
document.getElementById("btn-resalt").addEventListener("click", function (e) {
  y += 1;
  x = y % 2;
  if (x == 0) {
    underline();
  } else {
    noUnderline();
    document.getElementById("link-ref").style.textDecoration = "none";
    document.getElementById("link-ref").style.fontWeight = "normal";
    y = 1;
  }
});



// nuevo Contraste alto
document.getElementById("btn-contra").addEventListener("click", function (e) {
  y += 1;
  x = y % 2;
  if (x == 0) {
    contrast();
  } else {
    noContrast();
    y = 1;
  }
});



//Restablecer cambios
document.getElementById("btn-reload").addEventListener("click", function (e) {
  zoom = 1;
  resize();
  noByN();
  noUnderline();
  noContrast();
});


// Functions
// Blanco y negro
function blancoNegro() {
  document.getElementById("imagen-A").style.filter = "grayscale(100%)";
  document.getElementById("cuerpo").style.filter = "grayscale(100%)";
  document.getElementById("link-ref").style.filter = "grayscale(100%)";
}

function noByN() {
  document.getElementById("imagen-A").style.filter = "none";
  document.getElementById("cuerpo").style.filter = "none";
  document.getElementById("link-ref").style.filter = "none";
}

// Underline
function underline() {
  document.getElementById("link-ref").style.textDecoration = "underline 2px";
  document.getElementById("link-ref").style.fontWeight = "bolder";
}

function noUnderline() {
  document.getElementById("link-ref").style.textDecoration = "none";
  document.getElementById("link-ref").style.fontWeight = "normal";
}

// High Contrast
function contrast() {
  document.getElementById("link-ref").style.color = "yellow";
  document.getElementById("text").style.color = "yellow";
  document.body.style.backgroundColor = "#0D1117";
  document.getElementById("cuerpo").style.backgroundColor = "#0D1117";
  document.getElementById("text-contra").style.backgroundColor = "#0D1117";
}

function noContrast() {
  document.getElementById("link-ref").style.color = "black";
  document.getElementById("text").style.color = "black";
  document.body.style.backgroundColor = "white";
  document.getElementById("cuerpo").style.backgroundColor = "white";
  document.getElementById("text-contra").style.backgroundColor = "white";
}