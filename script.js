/* =====================================
   SKILLPILOT - MAIN JAVASCRIPT
===================================== */

let userName = localStorage.getItem("skillpilotName");

if (!userName) {
  userName = prompt("Enter your name:");

  if (!userName || userName.trim() === "") {
    userName = "Student";
  }

  localStorage.setItem("skillpilotName", userName);
}


/* =====================================
   USER NAME
===================================== */

function loadUser(){

  const name = userName.trim();

  const elements = [
    "userName",
    "topUserName",
    "profileName"
  ];

  elements.forEach(id => {
    const el = document.getElementById(id);

    if(el){
      el.textContent = name;
    }
  });

  const initial = name.charAt(0).toUpperCase();

  const avatar = document.getElementById("avatar");
  const profileAvatar = document.getElementById("profileAvatar");

  if(avatar) avatar.textContent = initial;
  if(profileAvatar) profileAvatar.textContent = initial;
}


/* =====================================
   PAGE NAVIGATION
===================================== */

function showPage(pageId){

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  const target = document.getElementById(pageId);

  if(target){
    target.classList.add("active-page");
  }

  const buttons = document.querySelectorAll(".side-btn");

  buttons.forEach(btn => {
    btn.classList.remove("active");
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

  if(index >= 0 && buttons[index]){
    buttons[index].classList.add("active");
  }

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


/* =====================================
   START LEARNING
===================================== */

function startLearning(){
  showPage("learning");
}


/* =====================================
   COMPLETE LEARNING
===================================== */

function completeLearning(){

  let xp = Number(localStorage.getItem("skillpilotXP")) || 350;

  xp += 50;

  localStorage.setItem("skillpilotXP", xp);

  const xpElement = document.getElementById("xp");
  const profileXP = document.getElementById("profileXP");

  if(xpElement){
    xpElement.textContent = xp;
  }

  if(profileXP){
    profileXP.textContent = xp;
  }

  alert("Learning completed! +50 XP 🎉");

  showPage("home");
}


/* =====================================
   PRACTICE
===================================== */

function practiceAnswer(button){

  button.classList.add("selected");

  setTimeout(() => {
    button.textContent = "✓ Correct! Keep going.";
  }, 300);
}


/* =====================================
   ASSESSMENT QUESTIONS
===================================== */

const questions = [

  {
    question:"What does HTML stand for?",
    answers:[
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Machine Language"
    ],
    correct:0
  },

  {
    question:"Which language is mainly used to style web pages?",
    answers:[
      "Python",
      "CSS",
      "Java",
      "SQL"
    ],
    correct:1
  },

  {
    question:"Which language is used to add interactivity to a webpage?",
    answers:[
      "HTML",
      "CSS",
      "JavaScript",
      "XML"
    ],
    correct:2
  },

  {
    question:"Which keyword creates a variable in modern JavaScript?",
    answers:[
      "var",
      "let",
      "Both var and let",
      "define"
    ],
    correct:2
  },

  {
    question:"Which one is a programming language?",
    answers:[
      "Python",
      "HTML",
      "CSS",
      "All of these"
    ],
    correct:0
  }

];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


/* =====================================
   LOAD QUESTION
===================================== */

function loadQuestion(){

  const q = questions[currentQuestion];

  document.getElementById("questionNumber").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  document.getElementById("questionText").textContent =
    q.question;

  const answersBox = document.getElementById("answers");

  answersBox.innerHTML = "";

  selectedAnswer = null;

  q.answers.forEach((answer,index) => {

    const button = document.createElement("button");

    button.className = "answer-option";

    button.textContent = answer;

    button.onclick = function(){

      document
        .querySelectorAll(".answer-option")
        .forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");

      selectedAnswer = index;
    };

    answersBox.appendChild(button);
  });
}


/* =====================================
   NEXT QUESTION
===================================== */

function nextQuestion(){

  if(selectedAnswer === null){
    return;
  }

  if(selectedAnswer === questions[currentQuestion].correct){
    score++;
  }

  currentQuestion++;

  if(currentQuestion < questions.length){

    loadQuestion();

  }else{

    showAssessmentResult();

  }
}


/* =====================================
   RESULT
===================================== */

function showAssessmentResult(){

  document.getElementById("questionArea").classList.add("hidden");

  document.getElementById("resultArea").classList.remove("hidden");

  document.getElementById("scoreText").textContent =
    `${score}/${questions.length}`;

  let level = "Beginner";
  let message = "Start with the basics and build your foundation.";

  if(score >= 4){

    level = "Advanced";
    message = "Great knowledge! You can move towards advanced projects.";

  }else if(score >= 3){

    level = "Intermediate";
    message = "Good foundation! Keep practicing and build projects.";

  }

  document.getElementById("levelText").textContent = level;
  document.getElementById("resultMessage").textContent = message;

  localStorage.setItem("skillpilotLevel",level);
}


/* =====================================
   START / RESET ASSESSMENT
===================================== */

function startAssessment(){

  currentQuestion = 0;
  score = 0;

  document.getElementById("questionArea").classList.remove("hidden");
  document.getElementById("resultArea").classList.add("hidden");

  loadQuestion();

  showPage("assessment");
}


/* =====================================
   PERSONALIZED ROADMAP
===================================== */

function createRoadmap(){

  const level =
    localStorage.getItem("skillpilotLevel") || "Beginner";

  const roadmap = document.getElementById("roadmapList");

  let skills = [];

  if(level === "Beginner"){

    skills = [
      ["Python Basics","Completed"],
      ["Programming Logic","Completed"],
      ["NumPy","In Progress"],
      ["Pandas","Locked"],
      ["Data Visualization","Locked"],
      ["Machine Learning","Locked"],
      ["Projects","Locked"]
    ];

  }else if(level === "Intermediate"){

    skills = [
      ["Python","Completed"],
      ["NumPy & Pandas","Completed"],
      ["Data Visualization","In Progress"],
      ["Machine Learning","Locked"],
      ["Projects","Locked"],
      ["Portfolio","Locked"]
    ];

  }else{

    skills = [
      ["Python","Completed"],
      ["Data Analysis","Completed"],
      ["Machine Learning","Completed"],
      ["Deep Learning","In Progress"],
      ["Advanced Projects","Locked"],
      ["Portfolio & Internship","Locked"]
    ];

  }

  roadmap.innerHTML = "";

  skills.forEach((skill,index) => {

    const item = document.createElement("div");

    item.className = "roadmap-item";

    item.innerHTML = `
      <div>
        <h2>${index + 1}. ${skill[0]}</h2>
        <p>Learn → Practice → Project → Test</p>
      </div>

      <span class="badge ${
        skill[1] === "In Progress" ? "current-badge" : ""
      }">
        ${skill[1]}
      </span>
    `;

    roadmap.appendChild(item);
  });

  showPage("roadmap");
}


/* =====================================
   INITIALIZE
===================================== */

document.addEventListener("DOMContentLoaded", function(){

  loadUser();

  const savedXP =
    Number(localStorage.getItem("skillpilotXP")) || 350;

  const xp = document.getElementById("xp");
  const profileXP = document.getElementById("profileXP");

  if(xp) xp.textContent = savedXP;
  if(profileXP) profileXP.textContent = savedXP;

  loadQuestion();

  createRoadmapSilently();
});


/* =====================================
   INITIAL ROADMAP
===================================== */

function createRoadmapSilently(){

  const roadmap = document.getElementById("roadmapList");

  if(!roadmap) return;

  const skills = [
    ["Python","Completed"],
    ["NumPy","Completed"],
    ["Pandas","In Progress"],
    ["Data Visualization","Locked"],
    ["Machine Learning","Locked"],
    ["Projects","Locked"]
  ];

  roadmap.innerHTML = "";

  skills.forEach((skill,index) => {

    const item = document.createElement("div");

    item.className = "roadmap-item";

    item.innerHTML = `
      <div>
        <h2>${index + 1}. ${skill[0]}</h2>
        <p>Learn → Practice → Mini Project → Test</p>
      </div>

      <span class="badge ${
        skill[1] === "In Progress" ? "current-badge" : ""
      }">
        ${skill[1]}
      </span>
    `;

    roadmap.appendChild(item);
  });
      }
