function mostraHora() {
    let data = new Date
    return data.setHours(0, 0, 0, 0)
}

function funcaoInterval() {
    console.log(mostraHora())
}


const timerr = setInterval(function () {
    console.log(mostraHora())

}, 1000)

setTimeout(function () {
    clearInterval(timer)

}, 3000)

setTimeout(function () {
    console.log('ola mundo')


}, 5000)

const relogio = document.querySelector('.timer')

function mostraHora(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0
let timer


function inicia() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = mostraHora(segundos)

    }, 1000)
}





const start = document.querySelector('.start')
start.addEventListener('click', function (e) {
    relogio.classList.remove('pause')
    clearInterval(timer)
    inicia()

})

const pause = document.querySelector('.pause')
pause.addEventListener('click', function (e) {
    clearInterval(timer)
    relogio.classList.add('pause')

})
const zerar = document.querySelector('.zerar')
zerar.addEventListener('click', function (e) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0

})