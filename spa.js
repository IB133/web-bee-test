document.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        path(e)
    }
    e.preventDefault()
})

const paths = {}
paths[window.location.origin + '/']='main.html'
paths[window.location.origin + '/map']='map.html'
paths[window.location.origin + '/timer']='timer.html'
let loc = paths[window.location.origin + '/']

const path = (e) => {
    loc = paths[e.target.href]
    checkLocation()
}



let intervalId

const checkLocation = async () => {
    const html = await fetch(loc).then((data) => data.text())
    main.innerHTML = html
    if (loc === 'map.html') {
        ymaps.ready(init);
    }
    if (loc === 'timer.html') {
        intervalId = setInterval(printTimer, 1000)
    }
    else {
        clearInterval(intervalId)
    }
}
checkLocation()
