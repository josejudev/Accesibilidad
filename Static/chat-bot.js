// Chat Collapsible
var coll = document.getElementsByClassName("collapsible_down");
var element = document.getElementById("chat-button");
var contentBig = document.getElementsByClassName("chat-bar-collapsible ");

// Ocultar y mostrar elementos
document.getElementById("oculAsis").style.display = "none";

setTimeout(function() {document.getElementById("bubble").style.display = "none";},10000)

// Comportamiento de la ventana al momento de abrir y cerrar
$(document).ready(function () {
  if (element.clientWidth < 100) {
    $(contentBig).css("box-shadow", "none");
  }
});
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // Cuando la ventana esta cerrada
      content.style.maxHeight = null;
      element.className = "collapsible_down";
      $(contentBig).css("box-shadow", "none");
      document.getElementById("oculAsis").style.display = "none";
      document.getElementById("bubble").style.display = "none";
      document.getElementById("chat-icon").style.display = "block";
      
    } else {
      // Cuando la ventana esta abierta

      content.style.maxHeight = content.scrollHeight + "px";
      element.className = "collapsible_up";
      $(contentBig).css("box-shadow", "0 8px 16px 0 rgba(0, 0, 0, 0.2)");
      document.getElementById("oculAsis").style.display = "block";
      document.getElementById("bubble").style.display = "none";
      document.getElementById("chat-icon").style.display = "none";
    }
  });
}

//Obtener el tiempo y plasmarlo
function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Obtener el primer mensaje
function firstBotMessage() {
  let firstMessage =
    "Bienvenido, soy la asistente virtual <b> Wendy </b>  <br>A continuacion puede seleccionar una respuesta o escribirla ";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText" id = "initialMessage"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);

  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Obtener respuestas
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Obtener el texto del recuadro para ingresar datoa y procesarlo
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = document.getElementById("examp").value;
  }
  let userHtml = `<p class="userText"><span>  ${userText} </span></p>`;

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

function estadia() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = document.getElementById("estadia").value;
  }
  let userHtml = `<p class="userText"><span>  ${userText} </span></p>`;

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
  
}

function estancia() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = document.getElementById("estancia").value;
  }
  let userHtml = `<p class="userText"><span>  ${userText} </span></p>`;

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

function reinscripcion() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = document.getElementById("reinscripcion").value;
  }
  let userHtml = `<p class="userText"><span>  ${userText} </span></p>`;

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

function getBotResponse(input) {
  if (input == "hola" || input == "Info") {
    return "¿Qué deseas hacer?";
  }

  if (
    input == "Proceso de estadia" ||
    input == "proceso de estadía" ||
    input == "Proceso de estadía" ||
    input == "estadia" ||
    input == "estadía"
  ) {
    return (
      "Para iniciar el trámite el alumno debe: <br> Realizar el registro y subir los siguientes documentos al sistema SIGA" +
      `<a href="#">(AQUÍ)</a>` +
      " <br> 1.-Documento de Solicitud de Estadía <br> 2.-Carta de Exclusión de Responsabilidad Covid, para la realización de Estadía <br> 3.-Identificación con fotografía del padre y/o tutor legal <br> 4.-Constancia de vigencia del IMSS. <br> 5.-Carta de Exclusión de Responsabilidad (DVEU-RG.16) o carta de exclusión de responsabilidad  (DVEU-RG.17) si el alumno es su propio tutor. Con los soportes de identificación con fotografía del tutor legal. <br>" +
      `<a href="#">Presiona aquí para mas informacion</a>`
    );
  }
  if (
    input == "Proceso de estancia" ||
    input == "proceso de estancia" ||
    input == "estancia" ||
    input == "estancias"
  ) {
    return "Para iniciar el trámite el alumno debe: <br> Realizar el registro y subir los siguientes documentos al sistema SIGA" +
    `<a href="#">(AQUÍ)</a>` +
    " <br> 1.-Documento de Solicitud de Estancia <br> 2.-Carta de Exclusión de Responsabilidad Covid, para la realización de Estadía <br> 3.-Identificación con fotografía del padre y/o tutor legal <br> 4.-Constancia de vigencia del IMSS. <br> 5.-Carta de Exclusión de Responsabilidad (DVEU-RG.16) o carta de exclusión de responsabilidad  (DVEU-RG.17) si el alumno es su propio tutor. Con los soportes de identificación con fotografía del tutor legal." +
    `<a href="#">Presiona aquí para mas informacion</a>`;
  }
  if (
    input == "Proceso de reinscripcion" ||
    input == "proceso de reinscripción" ||
    input == "reinscripcion" ||
    input == "reinscripción"
  ) {
    return "Proceso de reiscripcion:  ";
  } else {
    return "Opcion incorrecta, intente nuevamente";
  }
}
