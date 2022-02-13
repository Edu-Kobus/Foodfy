const recipesCards = document.querySelector('.revenue');

for (let recipe of recipesCards ) {
    recipe.addEventListener("click", function(){

        const revenueId = recipe.getAttribute("index")
       window.location.href = `/recipes/${revenueId}`
    })
}

