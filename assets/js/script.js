'use strict';

// --------------------
// Sidebar toggle (for future use if sidebar is added)
// --------------------
const elementToggleFunc = (elem) => elem.classList.toggle("active");
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn?.addEventListener("click", () => elementToggleFunc(sidebar));

// --------------------
// Form validation + redirect (for future use if form is added)
// --------------------
const form = document.querySelector("[data-form]");

// Handle submission and redirect
form?.addEventListener("submit", (e) => {
    if (!form.checkValidity()) return; // Let browser show validation messages

    // Allow form to submit normally (e.g., via Formspree)
});

// --------------------
// Page navigation (for future use if multi-page navigation is added)
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
