let dragValue;

function drag() {
  let elements = document.querySelectorAll(".draggable-emoji");
  elements.forEach(function(element) {
    element.style.position = "absolute";
    element.onmousedown = function() {
      dragValue = element.cloneNode(true);
      document.body.appendChild(dragValue);
    }
  });
}

document.onmouseup = function(e){
  if (dragValue !== null) {
    dragValue = null;
  }
}

document.onmousemove = function(e){
  if (dragValue !== null) {
    let x = e.pageX;
    let y = e.pageY;

    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";
  }
}

document.ondrop = function(e) {
  e.preventDefault();
  dragValue.style.left = e.pageX + "px";
  dragValue.style.top = e.pageY + "px";
}

document.ondragover = function(e) {
  e.preventDefault();
}