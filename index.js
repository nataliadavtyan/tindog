import { dogsData } from "/data.js"
import Dog from "/Dog.js"


const profileContainer = document.getElementById('profile-container')
const badgeLike = document.getElementById('badge-like')
const badgeNope = document.getElementById('badge-nope')

document.getElementById("swipe-left").addEventListener("click", function() {
    displayMatchStatus(badgeNope)})
document.getElementById("swipe-right").addEventListener('click', function() {
    displayMatchStatus(badgeLike)})
    
let isWaiting = false

function displayMatchStatus(badge){
    if (!isWaiting) {
        if (badge === badgeLike) {
            currentDog.setMatchStatus(true)
        } 
        badge.classList.toggle('hidden')
        isWaiting = true
        
        setTimeout(() => {
            badge.classList.toggle('hidden')
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

function getNewDog(){
    const nextDogData = dogsData.shift()
    return nextDogData ? new Dog(nextDogData) : {}
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