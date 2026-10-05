function showPage(pageId) {

  // Hide all pages
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active-page");
    page.style.display = "none";
  });

  // Show selected page
  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active-page");
    selectedPage.style.display = "block";
  }

  // Sidebar active button
  const buttons = document.querySelectorAll(".side-btn");

  buttons.forEach(function(button) {
    button.classList.remove("active");
  });

  const pageOrder = [
    "home",
    "profile",
    "assessment",
    "roadmap",
    "skills",
    "practice",
    "projects",
    "planner",
    "dashboard",
    "career",
    "portfolio",
    "achievements"
  ];

  const index = pageOrder.indexOf(pageId);

  if (index !== -1 && buttons[index]) {
    buttons[index].classList.add("active");
  }

  window.scrollTo(0, 0);
}


// Start Learning button
function startLearning() {
  showPage("learning");
}


// Back button
function goHome() {
  showPage("home");
}


// Page load
document.addEventListener("DOMContentLoaded", function() {

  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.style.display = "none";
  });

  const home = document.getElementById("home");

  if (home) {
    home.style.display = "block";
    home.classList.add("active-page");
  }

});
