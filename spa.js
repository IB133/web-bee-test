let  menu = document.querySelectorAll('.menuItem')
menu.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault()
        path(e)
    })
})

const paths = {}
paths['']='main.html'
paths['#map']='map.html'
paths['#timer']='timer.html'

const path = (e) => {
    window.history.pushState({}, '', e.target.href)
    checkLocation()
}

let intervalId

const checkLocation = async () => {
    let loc =window.location.hash
    const html = await fetch(paths[loc]).then((data) => data.text())
    main.innerHTML = html
    if (paths[loc] === 'map.html') {
        menuSelected(menu[1])
        ymaps.ready(init);
    }
    else if (paths[loc] === 'timer.html') {
        menuSelected(menu[2])
        intervalId = setInterval(printTimer, 1000)
    }
    else {
        menuSelected(menu[0])
        clearInterval(intervalId)
    }
}
window.onpopstate = checkLocation
window.route = path
checkLocation()
