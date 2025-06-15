document.addEventListener('DOMContentLoaded', solve);


function solve() {
    const days = document.querySelector('#days-input');
    const daysBtn = document.querySelector('#days #daysBtn');
    const hours = document.querySelector('#hours-input');
    const hoursBtn = document.querySelector('#hours #hoursBtn');
    const minutes = document.querySelector('#minutes-input');
    const minutesBtn = document.querySelector('#minutes #minutesBtn');
    const seconds = document.querySelector('#seconds-input');
    const secondsBtn = document.querySelector('#seconds #secondsBtn');

    daysBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const daysValue = Number(days.value);

        hours.value = (daysValue * 24).toFixed(2);
        minutes.value = (daysValue * 24 * 60).toFixed(2);
        seconds.value = (daysValue * 24 * 60 * 60).toFixed(2);
    });

    hoursBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const hoursValue = Number(hours.value);

        days.value = (hoursValue / 24).toFixed(2);
        minutes.value = (hoursValue * 60).toFixed(2);
        seconds.value = (hoursValue * 60 * 60).toFixed(2);
    });

    minutesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const minutesValue = Number(minutes.value);

        days.value = (minutesValue / (24 * 60)).toFixed(2);
        hours.value = (minutesValue / 60).toFixed(2);
        seconds.value = (minutesValue * 60).toFixed(2);
    });

    secondsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const secondsValue = Number(seconds.value);

        days.value = (secondsValue / (24 * 60 * 60)).toFixed(2);
        hours.value = (secondsValue / (60 * 60)).toFixed(2);
        minutes.value = (secondsValue / 60).toFixed(2);
    });
}