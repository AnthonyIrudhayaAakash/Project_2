const previous_btn = document.getElementById("previous-btn");
const next_btn = document.getElementById("next-btn");

const cards = document.getElementById("card-caraousals")

const card_container = document.getElementById("card-container");

cards.addEventListener("wheel", (event) => {
    event.preventDefault();
    cards.scrollLeft += event.deltaY;
})

previous_btn.addEventListener("click", () =>{
    const maxscrollercard = cards.scrollWidth - cards.clientWidth; 
    
    cards.scrollLeft -=1175;
   
    if(cards.scrollLeft===0){
       
        cards.scrollLeft = maxscrollercard;
    }
})

next_btn.addEventListener("click", () => {
    const maxScrollLeft = cards.scrollWidth - cards.clientWidth;
    const scrollAmount = 1175;

    if (cards.scrollLeft + scrollAmount >= maxScrollLeft) {
        // If reaching the end, loop back to the beginning
        cards.scrollLeft = 0;
    } else {
        cards.scrollLeft += scrollAmount;
    }
});