// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Form handling
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});