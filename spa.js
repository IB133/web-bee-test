let  menu = document.querySelectorAll('.menuItem');
window.addEventListener('locationchange',() => {
    checkLocation();
})

const paths = {
    '':'main.html',
    '#map':'map.html',
    '#timer':'timer.html'
}

const checkLocation = async () => {
    const html = await fetch(paths[window.location.hash]).then((data) => data.text());
    main.innerHTML = html;
    if (paths[window.location.hash] === 'map.html') {
        menuSelected(menu[1]);
        ymaps.ready(init);
        clearInterval(intervalId);
    }
    else if (paths[window.location.hash] === 'timer.html') {
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