class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    
    setMatchStatus(boolean) {
        this.hasBeenSwiped = true
        this.hasBeenLiked = boolean
    }
    
    
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <img class="dog-photo" src="${avatar}" alt="Dog profile">
            <div class="dog-main-text">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
            </div>
            <img class="badge hidden" id="badge-like" src="images/badge-like.png">
            <img class="badge hidden" id="badge-nope" src="images/badge-nope.png">
        `
    }
}

export default Dog