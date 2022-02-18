const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)
        //if once the target is observed and animation is completed and further we dont need any animation we use unobserve
       // if(entry.isIntersecting) observer.unobserve(entry.target)
    })
    
},{
threshold:1,

})

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0]
    if(!lastCard.isIntersecting) return
    loadNewcards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector(".card:last-child"))
},{
    rootMargin: "100px",
})

lastCardObserver.observe(document.querySelector(".card:last-child"))

cards.forEach(card=>{
    observer.observe(card)
})

const cardContainer = document.querySelector(".card-container")

function loadNewcards(){
    
    for(let i=0;i<10;i++){
        const card = document.createElement("div")
        card.textContent = "New Card"
        card.classList.add("card")
        observer.observe(card)
        cardContainer.append(card)

    }
}
