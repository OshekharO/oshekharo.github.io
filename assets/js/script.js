'use strict';

// --------------------
// Sidebar toggle
// --------------------
const elementToggleFunc = (elem) => elem.classList.toggle("active");
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn?.addEventListener("click", () => elementToggleFunc(sidebar));

// --------------------
// Modal (if used)
// --------------------
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = () => {
    modalContainer?.classList.toggle("active");
    overlay?.classList.toggle("active");
};

testimonialsItem.forEach(item => {
    item.addEventListener("click", () => {
        modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
    });
});

modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
overlay?.addEventListener("click", testimonialsModalFunc);

// --------------------
// Custom select filter
// --------------------
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select?.addEventListener("click", () => elementToggleFunc(select));

selectItems.forEach(item => {
    item.addEventListener("click", () => {
        const value = item.innerText.toLowerCase();
        selectValue.innerText = item.innerText;
        elementToggleFunc(select);
        filterFunc(value);
    });
});

const filterFunc = (selectedValue) => {
    filterItems.forEach(item => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

let lastClickedBtn = filterBtn[0];
filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        const value = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(value);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
});

// --------------------
// Form validation + redirect
// --------------------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable/disable submit button based on validity
formInputs.forEach(input => {
    input.addEventListener("input", () => {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
});

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
