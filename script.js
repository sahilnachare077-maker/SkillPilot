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
/* =====================================
   SKILLPILOT ASSESSMENT
===================================== */

const assessmentQuestions = [
  {
    question: "Which language is mainly used to structure a webpage?",
    options: ["Python", "HTML", "Java", "SQL"],
    answer: 1
  },
  {
    question: "Which language is used for webpage styling?",
    options: ["CSS", "Python", "C++", "SQL"],
    answer: 0
  },
  {
    question: "Which language adds interactivity to webpages?",
    options: ["HTML", "CSS", "JavaScript", "XML"],
    answer: 2
  },
  {
    question: "Which one is a programming language?",
    options: ["Python", "HTML", "CSS", "JSON"],
    answer: 0
  },
  {
    question: "What does SQL mainly work with?",
    options: ["Images", "Databases", "Videos", "Animations"],
    answer: 1
  },
  {
    question: "Which data structure stores key-value pairs in Python?",
    options: ["List", "Tuple", "Dictionary", "String"],
    answer: 2
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Internet",
      "Application Process Input",
      "Applied Programming Information"
    ],
    answer: 0
  },
  {
    question: "Which tool is commonly used to track code changes?",
    options: ["Git", "Chrome", "Excel", "Photoshop"],
    answer: 0
  },
  {
    question: "What is debugging?",
    options: [
      "Designing a logo",
      "Finding and fixing errors",
      "Writing documentation",
      "Creating a database"
    ],
    answer: 1
  },
  {
    question: "Which is important for becoming job-ready?",
    options: [
      "Only watching videos",
      "Only memorizing theory",
      "Building projects and practicing",
      "Avoiding practice"
    ],
    answer: 2
  }
];

let assessmentIndex = 0;
let assessmentScore = 0;


/* START ASSESSMENT */

function startAssessment() {

  assessmentIndex = 0;
  assessmentScore = 0;

  showPage("assessment");

  renderAssessmentQuestion();
}


/* SHOW QUESTION */

function renderAssessmentQuestion() {

  const questionBox = document.getElementById("assessmentQuestion");
  const optionsBox = document.getElementById("assessmentOptions");
  const progressBox = document.getElementById("assessmentProgress");

  if (!questionBox || !optionsBox) {
    return;
  }

  const q = assessmentQuestions[assessmentIndex];

  questionBox.textContent = q.question;

  if (progressBox) {
    progressBox.textContent =
      `Question ${assessmentIndex + 1} of ${assessmentQuestions.length}`;
  }

  optionsBox.innerHTML = "";

  q.options.forEach(function(option, index) {

    const button = document.createElement("button");

    button.className = "assessment-option";
    button.textContent = option;

    button.onclick = function() {

      if (index === q.answer) {
        assessmentScore++;
      }

      assessmentIndex++;

      if (assessmentIndex < assessmentQuestions.length) {

        renderAssessmentQuestion();

      } else {

        showAssessmentResult();

      }

    };

    optionsBox.appendChild(button);
  });
}


/* RESULT */

function showAssessmentResult() {

  const questionBox = document.getElementById("assessmentQuestion");
  const optionsBox = document.getElementById("assessmentOptions");
  const progressBox = document.getElementById("assessmentProgress");
  const resultBox = document.getElementById("assessmentResult");

  if (questionBox) questionBox.style.display = "none";
  if (optionsBox) optionsBox.style.display = "none";
  if (progressBox) progressBox.style.display = "none";

  let level = "Beginner";

  if (assessmentScore >= 8) {
    level = "Advanced";
  } else if (assessmentScore >= 5) {
    level = "Intermediate";
  }

  localStorage.setItem("skillpilotLevel", level);
  localStorage.setItem("skillpilotScore", assessmentScore);

  if (resultBox) {

    resultBox.style.display = "block";

    resultBox.innerHTML = `
      <div class="result-icon">🎉</div>

      <h2>Assessment Complete!</h2>

      <div class="assessment-score">
        ${assessmentScore}/10
      </div>

      <h3>Your Level: ${level}</h3>

      <p>
        ${getAssessmentMessage(level)}
      </p>

      <button class="primary-btn" onclick="generatePersonalRoadmap()">
        Create My Roadmap →
      </button>
    `;
  }
}


/* LEVEL MESSAGE */

function getAssessmentMessage(level) {

  if (level === "Advanced") {
    return "Excellent! You already have a strong foundation. Let's move toward advanced projects.";
  }

  if (level === "Intermediate") {
    return "Good job! You have a solid foundation. Let's strengthen your skills with practice and projects.";
  }

  return "No problem! We'll start from the basics and build your skills step by step.";
}


/* PERSONALIZED ROADMAP */

function generatePersonalRoadmap() {

  const level =
    localStorage.getItem("skillpilotLevel") || "Beginner";

  const roadmapBox =
    document.getElementById("roadmapContent");

  if (!roadmapBox) {
    showPage("roadmap");
    return;
  }

  let roadmap = [];

  if (level === "Beginner") {

    roadmap = [
      "Programming Basics",
      "Python Fundamentals",
      "HTML & CSS",
      "JavaScript Basics",
      "Git & GitHub",
      "Practice Problems",
      "Mini Projects",
      "Portfolio Project"
    ];

  } else if (level === "Intermediate") {

    roadmap = [
      "Advanced Python",
      "JavaScript",
      "APIs",
      "Databases",
      "Git & GitHub",
      "Problem Solving",
      "Real-World Projects",
      "Portfolio & Resume"
    ];

  } else {

    roadmap = [
      "Advanced Programming",
      "System Design Basics",
      "APIs & Backend",
      "Advanced Databases",
      "Open Source",
      "Advanced Projects",
      "Portfolio",
      "Internship Preparation"
    ];
  }

  roadmapBox.innerHTML = "";

  roadmap.forEach(function(skill, index) {

    const item = document.createElement("div");

    item.className = "roadmap-item";

    item.innerHTML = `
      <div>
        <span class="roadmap-number">
          ${index + 1}
        </span>

        <div class="roadmap-info">
          <h3>${skill}</h3>
          <p>Learn → Practice → Mini Project → Test</p>
        </div>
      </div>

      <span class="roadmap-status">
        ${index === 0 ? "Start Here" : "Locked"}
      </span>
    `;

    roadmapBox.appendChild(item);
  });

  showPage("roadmap");
    }
