import { movies } from '../movies.js'
import { games } from '../games.js'
import { cards } from '../cards.js'

const gamesStart = document.getElementById("gameStart")
const mainMenu = document.getElementById("menu")
const gameFrame = document.getElementById("gameFrame")
const textResult = document.getElementById("textResult")
const menuLink = document.getElementById("menuLink")

gamesStart.addEventListener('click', () => {
    axios.get('/games/start').then((res => {
        textResult.textContent = ''
        const img1 = document.createElement('img')
        const img2 = document.createElement('img')
        img1.classList.add('fadeIn')
        img2.classList.add('fadeIn')
        img1.style.height = '700px'
        img1.style.width = '450px'
        img2.style.height = '700px'
        img2.style.width = '450px'
        gamesStart.style.display ="none"
        mainMenu.style.display ="none"
        gameFrame.appendChild(img1)
        gameFrame.appendChild(img2)
        let rand1 = shuffleIds()
        let rand2 = shuffleIds()
        while(rand1 == rand2) {
            rand2 = shuffleIds()
        }
        img1.src = fetchImg(2, rand1)
        img2.src = fetchImg(2, rand2)
        createImageCheck(img1, img2, rand1, rand2, textResult)
    })).catch(e => {
        console.log(e)
    })
})

// add event listeners to newly created images
// need to pass in category to use for everything
function createImageCheck(img1, img2, check1, check2, res) {
    let rand1 = check1
    let rand2 = check2
    let rand3 = shuffleIds()
    let highScore = 0
    let score = 0
    const currentScore = document.getElementById('currentScore')
    currentScore.innerHTML = ('Current Score: ' + score)
        img1.addEventListener('click', () => {
            if(fetchRating(2, rand1) >= fetchRating(2, rand2)) {
                console.log('you are correct')
                res.textContent = ('Correct! The score of ' + fetchName(2, rand1) + ' was ' + fetchRating(2, rand1))
                while(rand3 == rand1 || rand3 == rand2) {
                    rand3 = shuffleIds()
                }
                img1.src = fetchImg(2, rand2)
                img2.src = fetchImg(2, rand3)
                resetFadeIn(img1)
                resetFadeIn(img2)
                setTimeout(() => {
                    new Date().getTime()
                }, 2000)
                rand1 = rand2
                rand2 = rand3
                rand3 = shuffleIds()
                score++
                currentScore.innerHTML = ('Current Score: ' + score)
                console.log(score)
            } else {
                console.log('you are incorrect')
                res.textContent = 'Sorry, that was wrong. Try again?'
                res.appendChild(gamesStart)
                res.appendChild(menuLink)
                gamesStart.style.display ="initial"
                mainMenu.style.display ="initial"
                img1.remove()
                img2.remove()
            }
        })
        img2.addEventListener('click', () => {
            if(fetchRating(2, rand1) <= fetchRating(2, rand2)) {
                console.log('you are correct')
                res.textContent = ('Correct! The score of ' + fetchName(2, rand2) + ' was ' + fetchRating(2, rand2))
                while(rand3 == rand1 || rand3 == rand2) {
                    rand3 = shuffleIds()
                }
                img1.src = fetchImg(2, rand2)
                img2.src = fetchImg(2, rand3)
                resetFadeIn(img1)
                resetFadeIn(img2)
                setTimeout(() => {
                    new Date().getTime()
                }, 2000)
                rand1 = rand2
                rand2 = rand3
                rand3 = shuffleIds()
                score++
                currentScore.innerHTML = ('Current Score: ' + score)
                console.log(score)
            } else {
                console.log('you are incorrect')
                res.textContent = 'Sorry, that was wrong. Try again?'
                res.appendChild(gamesStart)
                res.appendChild(menuLink)
                gamesStart.style.display ="initial"
                mainMenu.style.display ="initial"
                img1.remove()
                img2.remove()
            }
        })
}

function resetFadeIn(req) {
    req.classList.remove('fadeIn')
    req.offsetWidth
    req.classList.add('fadeIn')
}

function shuffleIds() {
    const randomNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const randIndex = Math.floor(Math.random() * randomNums.length)
    const value = randomNums[randIndex]
    return value
}

function fetchImg(category, req) {
    const movieRes = movies.find((item) => {
        return item.id == req
    })
    const gameRes = games.find((item) => {
        return item.id == req
    })
    const cardRes = cards.find((item) => {
        return item.id == req
    })
    if(category == 1) {
        return movieRes.img
    } else if(category == 2) {
        return gameRes.img
    } else {
        return cardRes.img
    }
}

function fetchName(category, req) {
    const movieRes = movies.find((item) => {
        return item.id == req
    })
    const gameRes = games.find((item) => {
        return item.id == req
    })
    const cardRes = cards.find((item) => {
        return item.id == req
    })
    if(category == 1) {
        return movieRes.name
    } else if(category == 2) {
        return gameRes.name
    } else {
        return cardRes.name
    }
}

function fetchId(category, req) {
    const movieRes = movies.find((item) => {
        return item.id == req
    })
    const gameRes = games.find((item) => {
        return item.id == req
    })
    const cardRes = cards.find((item) => {
        return item.id == req
    })
    if(category == 1) {
        return movieRes.id
    } else if(category == 2) {
        return gameRes.id
    } else {
        return cardRes.id
    }
}

function fetchRating(category, req) {
    const movieRes = movies.find((item) => {
        return item.id == req
    })
    const gameRes = games.find((item) => {
        return item.id == req
    })
    const cardRes = cards.find((item) => {
        return item.id == req
    })
    if(category == 1) {
        return movieRes.rating
    } else if(category == 2) {
        return gameRes.rating
    } else {
        return cardRes.rating
    }
}