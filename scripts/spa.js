let  menu = document.querySelectorAll('.menuItem');
window.addEventListener('locationchange',() => {
    checkLocation();
})

const paths = {
    '':'pages/main.html',
    '#map':'pages/map.html',
    '#timer':'pages/timer.html'
}

const checkLocation = async () => {
    const html = await fetch(paths[window.location.hash]).then((data) => data.text());
    main.innerHTML = html;
    if (paths[window.location.hash] === 'pages/map.html') {
        menuSelected(menu[1]);
        ymaps.ready(init);
        clearInterval(intervalId);
    }
    else if (paths[window.location.hash] === 'pages/timer.html') {
        menuSelected(menu[2]);
        intervalId = setInterval(writeTimer,1000);
        writeTimer()
    }
    else {
        menuSelected(menu[0]);
        clearInterval(intervalId);
    }
}
window.onpopstate = checkLocation;
checkLocation();