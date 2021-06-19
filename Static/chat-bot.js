
    // Chat Collapsible
    var coll = document.getElementsByClassName("collapsible_down");
    var element = document.getElementById("chat-button");
    var contentBig = document.getElementsByClassName("chat-bar-collapsible ");
    
    // Ocultar y mostrar elementos
    document.getElementById("oculAsis").style.display = "none";
    setTimeout(() => {
        document.getElementById("bubble").style.display = "none";
    }, 1000);
    setTimeout(() => {
        document.getElementById("bubble").style.display = "block";
    }, 5000);
    setTimeout(() => {
        document.getElementById("bubble").style.display = "none";
    }, 10000);

    
    
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
                // document.getElementById("bubble").style.display = "block";
                // setTimeout(() => {
                //     document.getElementById("bubble").style.display = "block";
                // }, 7000);
                // setTimeout(() => {
                //     document.getElementById("bubble").style.display = "none";
                // }, 40000);
            } else {
                // Cuando la ventana esta abierta
    
                content.style.maxHeight = content.scrollHeight + "px";
                element.className = "collapsible_up";
                $(contentBig).css("box-shadow", "0 8px 16px 0 rgba(0, 0, 0, 0.2)");
                document.getElementById("oculAsis").style.display = "block";
                document.getElementById("bubble").style.display = "none";
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
            '<p class="botText"><span>' + firstMessage + "</span></p>";
    
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
            input == "estadia" ||
            input == "estadía"
        ) {
            return "Deberás presentar tus papeles a las oficinas y cargar tus documentos.";
        }
        if (
            input == "Proceso de estancia" ||
            input == "proceso de estancia" ||
            input == "estancia" ||
            input == "estancias"
        ) {
            return "Deberás subir tus documentos en orden en las fechas establecidas ";
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
    
    