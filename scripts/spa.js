let  menu = document.querySelectorAll('.menu-item');
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
    if (paths[window.location.hash] === paths['#map']) {
        menuSelected(menu[1]);
        ymaps.ready(init);
        clearInterval(startPrint);
    }
    else if (paths[window.location.hash] === paths['#timer']) {
        menuSelected(menu[2]);
        startPrint = setInterval(writeTimer,1000);
        writeTimer()
    }
    else if (paths[window.location.hash] === paths['']) {
        menuSelected(menu[0]);
        clearInterval(startPrint);
    }
}
window.onpopstate = checkLocation;
checkLocation();