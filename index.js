let homeScore = 0
let guestScore = 0

let homeCounter = document.getElementById("home-counter")

function add1Home () {
    homeScore += 1
    homeCounter.innerText = homeScore
}

function add2Home () {
    homeScore += 2
    homeCounter.innerText = homeScore
}

function add3Home () {
    homeScore += 3
    homeCounter.innerText = homeScore
}

let guestCounter = document.getElementById("guest-counter")

function add1Guest () {
    guestScore += 1
    guestCounter.innerText = guestScore
}

function add2Guest () {
    guestScore += 2
    guestCounter.innerText = guestScore
}

function add3Guest () {
    guestScore += 3
    guestCounter.innerText = guestScore
}