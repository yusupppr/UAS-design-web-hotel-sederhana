// milestone
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
  
    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
  
        const increment = target / 200; // Speed of the count
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
  });

  // toggle 
document.addEventListener("scroll", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarCollapse.classList.contains("show")) {
    navbarToggler.click();
  }
});