'use strict';

// --------------------
//   Github Project
// --------------------
const githubUsername = "OshekharO";
const projectsList = document.getElementById("projects-list");

fetch(`https://api.github.com/users/${githubUsername}/repos`)
  .then(res => res.json())
  .then(repos => {
    // Filter repos with stargazers_count or watchers_count > 10
    const popularRepos = repos.filter(repo => repo.stargazers_count > 10);

    projectsList.innerHTML = "";

    if (popularRepos.length === 0) {
      projectsList.innerHTML = '<li>No popular projects to display.</li>';
      return;
    }

    popularRepos.forEach(repo => {
      const li = document.createElement("li");
      li.className = "project-item active";

      li.innerHTML = `
        <a href="${repo.html_url}" target="_blank" rel="noopener">
          <figure class="project-img">
            <div class="project-item-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
            <img src="https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}" alt="${repo.name}" loading="lazy" />
          </figure>
          <h3 class="project-title">${repo.name}</h3>
          <p class="project-category">${repo.language || "Unknown"}</p>
          <p class="project-stars">⭐ ${repo.stargazers_count} | 👀 ${repo.watchers_count}</p>
        </a>
      `;
      projectsList.appendChild(li);
    });
  })
  .catch(err => {
    console.error("GitHub API Error:", err);
    projectsList.innerHTML = '<li>Failed to load projects.</li>';
  });

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
