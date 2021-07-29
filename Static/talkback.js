 document.getElementById("btn-talk").addEventListener("click",function(e){

    if (document.getElementById('btn-talk').checked){
        // A simple IIFE function. 
(function() {
    "use strict"; // For the sake of practice.
  
    if (typeof speechSynthesis === 'undefined')
      return;
  
    // Some config stuffs... 
    var voiceSelect = document.getElementById("voice");
    var myPhrase = 'Talback activado';
    var voices = [];
    
    // This is essentially similar to jQuery's $.ready.
    var ready = function(callback) { 
      var d = document, s = d.readyState;
  
      // DOMContentLoaded was fired
      if (s == "complete" || s == "loaded" || s == "interactive") {
        callback();
      } else {
        if (d.addEventListener) {
          d.addEventListener("DOMContentLoaded", callback, false);
        } else {
          d.attachEvent("onDOMContentLoaded", callback);
        }
      }
    };
  
    // This is a function to display all possible voice options. 
    function populateVoiceList() {
      voices = speechSynthesis.getVoices();
      for (var i = 0; i < voices.length; i++) {
       }
     }
    // This is the handler for when the select tag is changed. 
    function handler() {
      var utterThis = new SpeechSynthesisUtterance(myPhrase);
      var selectedOption = arguments;
  
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      speechSynthesis.speak(utterThis);
    };
    // This is your code to get the selected text.
    function getSelectionText() {
      var text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
        // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
      }
      return text;
    }
  
    // This is the on mouse up event, no need for jQuery to do this. 
    document.onmouseup = function(e) {
      setTimeout(function() {
        speechSynthesis.cancel();
        myPhrase = getSelectionText();
        handler();
      }, 1);
    };
  
    // Some place for the application to start. 
    function start() {
      populateVoiceList();
      if (speechSynthesis.onvoiceschanged !== undefined)
        

      voiceSelect.onchange = handler;
      setTimeout(handler, 75);
    }
  
    // Run the start function. 
    ready(start);
  })();
      
    } else{

    }
});