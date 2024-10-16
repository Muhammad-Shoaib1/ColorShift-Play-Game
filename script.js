function ClickHandler(color, colorName) {
  return function () {
    document.body.style.backgroundColor = color;
    document.getElementById('current-color').textContent = `Current Color: ${colorName}`;
  };
}

document.getElementById('red').onclick = ClickHandler('red', 'Red');
document.getElementById('orange').onclick = ClickHandler('orange', 'Orange');
document.getElementById('yellow').onclick = ClickHandler('yellow', 'Yellow');
document.getElementById('green').onclick = ClickHandler('green', 'Green');
document.getElementById('blue').onclick = ClickHandler('blue', 'Blue');
document.getElementById('indigo').onclick = ClickHandler('indigo', 'Indigo');
document.getElementById('violet').onclick = ClickHandler('violet', 'Violet');
document.getElementById('reset').onclick = ClickHandler('#f0f0f0', 'Default');

document.body.style.backgroundColor = '#f0f0f0';