// начальное состояние кнопки — не кликнута
var isClicked = false;
// javascript здесь нашёл и выбрал элемент кнопки
var button = document.getElementsByTagName('button')[0];

// при клике по кнопке скрипт начинает выбирать
button.onclick = function() {
  if (isClicked) {
    // если состояние кнопки — кликнута, делай это

  } else {
    // если состояние кнопки — не кликнута, делай это
    button.classList.add('clicked');
    isClicked = true;
  }
};
alert("WORKS");
