import { dogsData } from "/data.js"
import Dog from "/Dog.js"


const profileContainer = document.getElementById('profile-container')
const badgeLike = document.getElementById('badge-like')
const badgeNope = document.getElementById('badge-nope')

document.getElementById("swipe-left").addEventListener("click", nope)
document.getElementById("swipe-right").addEventListener('click', like)

function getNewDog(){
    const nextDogData = dogsData.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

let isWaiting = false

function like() {
    if (!isWaiting) {
        currentDog.setMatchStatus(true)
        badgeLike.classList.toggle('hidden')
        isWaiting = true
        
        setTimeout(() => {
            badgeLike.classList.toggle('hidden')
            isWaiting = false
            
            if (dogsData.length > 0) {
                currentDog = getNewDog()
                render()
            }
            else {
                end()
            }
        }, 1000)
    }
}

function nope() {
    if (!isWaiting) {
        badgeNope.classList.toggle('hidden')
        isWaiting = true
        
        setTimeout(() => {
            badgeNope.classList.toggle('hidden')
            isWaiting = false
            
            if (dogsData.length > 0) {
                currentDog = getNewDog()
                render()
            }
            else {
                end()
            }
        }, 1000)
    }
}       

function end() {
    profileContainer.innerHTML = `
        <div class="end-message">
            <h3>There are no more dogs in your area 
            <br><br> Please change your search settings or come back later</h3>
        </div>
    `
    document.getElementById('btn-container').style.display = "none"
}

function render() {
    profileContainer.innerHTML = currentDog.getDogHtml()
}

let currentDog = getNewDog()
render()