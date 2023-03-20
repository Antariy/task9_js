// Домашнее задание:
// Написать страничку с помощь DOM чтобы в центре был <div> и поле ввода с кнопкой, в поле ввода вводится цвет, по нажатию кнопки див меняет цвет фона на заданый в поле ввода

// const changeColor = document.querySelector('#change-color');

function changeColor() {
    let colorInput = document.getElementById("change-color");
    let color = colorInput.value;
    document.body.style.backgroundColor = color;
}