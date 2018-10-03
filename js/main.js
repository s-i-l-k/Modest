document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Dzień dobry :)");

    //active navigation element

    const navMenu = document.querySelector(".navMenu");
    const navElements = navMenu.querySelectorAll("li > a");

    for (let i = 0; i < navElements.length; i++) {
        navElements[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");
          if (current.length > 0) { 
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += "active";
        });
      }

      //show me more button 

      const showMoreBtn = document.querySelector(".showMore > button");

      showMoreBtn.addEventListener("click", function() {
         const showDiv = document.querySelectorAll(".toshow");
         for (let i = 0; i < showDiv.length; i++) {
             showDiv[i].classList.toggle("hidden");
         }

         if (this.innerText === "SHOW ME MORE") {
             this.innerText = "SHOW ME LESS"
         } else {
             this.innerText = "SHOW ME MORE"
         }

      })

});