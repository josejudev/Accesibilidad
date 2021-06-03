
/*Downloaded from https://www.codeseek.co/AlvaroFelipe/aumentar-y-disminuir-tamaandxf1o-de-fuente-con-javascript-wjvwww */
var getFontSize = function getFontSize() {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size'));
  };
  
  var fontUp = function fontUp(element) {
    element.addEventListener('click', function () {
      var fontSize = getFontSize();
      document.documentElement.style.setProperty('--font-size', '' + fontSize * 1.1);
    });
  };
  
  var fontDown = function fontDown(element) {
    element.addEventListener('click', function () {
      var fontSize = getFontSize();
      document.documentElement.style.setProperty('--font-size', '' + fontSize * 0.9);
    });
  };
  


  fontUp(document.getElementById('font-up'));
  fontDown(document.getElementById('font-down'));