const recipesCards = document.querySelectorAll('.revenue');

for (let recipe of recipesCards ) {
    recipe.addEventListener("click", function(){

        const revenueId = recipe.getAttribute("id")
       window.location.href = `/recipes/${revenueId}`
    })
}


var btn = document.querySelectorAll(".btn_steps");

btn.addEventListener("click", function() {
    var invokeShow = document.querySelectorAll(".show_and_hide");
    
  if(invokeShow.style.display === "none") {
        invokeShow.style.display = "block";
    } else {
      invokeShow.style.display = "none";
  }
    
});
