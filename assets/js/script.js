'use strict';

// --------------------
// Sidebar toggle
// --------------------
const elementToggleFunc = (elem) => elem.classList.toggle("active");
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn?.addEventListener("click", () => elementToggleFunc(sidebar));

// --------------------
// Form validation + redirect
// --------------------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Handle submission and redirect
form?.addEventListener("submit", (e) => {
    if (!form.checkValidity()) return; // Let browser show validation messages

    // Allow Formspree to submit normally
    // Redirect using _next works automatically
    // If redirect fails, you can manually do:
    // setTimeout(() => { window.location.href = "https://saksham.thedev.id/thank-you.html"; }, 100);
});

// --------------------
// Page navigation
// --------------------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        const pageName = link.innerText.toLowerCase();
        pages.forEach(page => {
            page.dataset.page === pageName
                ? page.classList.add("active")
                : page.classList.remove("active");
        });

        navigationLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        window.scrollTo(0, 0);
    });
});
