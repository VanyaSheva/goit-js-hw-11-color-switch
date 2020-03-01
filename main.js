const colors = [
    "#ff0d00",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
];

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
let timerId;
let switcher = false;

start.addEventListener("click", bodyThemeChange);
stop.addEventListener("click", bodyThemeChangeStop);

function bodyThemeChange() {
    if (switcher) {
        return;
    }
    switcher = true;
    timerId = setInterval(function tick() {
        const index = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.backgroundColor = colors[index];
    }, 1000);
}

function bodyThemeChangeStop() {
    clearTimeout(timerId);
    switcher = false;
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
