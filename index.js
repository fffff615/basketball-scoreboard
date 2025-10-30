let homeScoreEl = document.getElementById('home-score')
let homeGuestEl = document.getElementById('guest-score')
let guestScore = 0
let homeScore = 0

function add1Home () {
  homeScore += 1
  homeScoreEl.textContent = homeScore
}

function add2Home () {
  homeScore += 2
  homeScoreEl.textContent = homeScore
}

function add3Home () {
  homeScore += 3
  homeScoreEl.textContent = homeScore
}

function add1Guest () {
  guestScore += 1
  homeGuestEl.textContent = guestScore
}

function add2Guest () {
  guestScore += 2
  homeGuestEl.textContent = guestScore
}

function add3Guest () {
  guestScore += 3
  homeGuestEl.textContent = guestScore
}

function newGame () {
  homeScore = 0
  homeScoreEl.textContent = homeScore

  guestScore = 0
  homeGuestEl.textContent = guestScore
}
