// header 
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // kontak
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector(".form-input[name='name']").value;
    const email = document.querySelector(".form-input[name='email']").value;
    const message = document.querySelector(".form-textarea").value;

    if (!name || !email || !message) {
        alert("Harap lengkapi semua kolom wajib!");
    } else {
        alert("Pesan Anda telah berhasil dikirim!");
        this.reset(); 
    }
});
//   galeri 
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");

function changeCarousel() {
    currentIndex = (currentIndex + 1) % items.length;
    const offset = -100 * currentIndex;
    document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
    updateDots();
}

function goToSlide(index) {
    currentIndex = index;
    const offset = -100 * currentIndex;
    document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

setInterval(changeCarousel, 5000); // Change image every 5 seconds

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        goToSlide(parseInt(dot.getAttribute("data-index")));
    });
});

updateDots();
