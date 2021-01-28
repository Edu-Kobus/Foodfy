const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.revenue');
const modal = document.querySelector(".modal");

for (let revenue of cards ) {
    revenue.addEventListener("click", function(){
        modalOverlay.classList.add('active');
    })
}

