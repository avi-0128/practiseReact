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
cards.forEach(card=>{
    observer.observe(card)
})
