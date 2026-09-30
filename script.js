let selectedGoal = "";
let selectedSkills = [];
let selectedLevel = "";
let selectedTime = "";
let selectedInterests = [];

let currentQuestion = 0;
let answers = [];

const questions = [

    {
        question: "What does HTML mainly define?",
        options: [
            "The structure of a webpage",
            "The database",
            "The server hardware",
            "The internet connection"
        ],
        answer: 0,
        skill: "HTML"
    },

    {
        question: "Which language is mainly used to style webpages?",
        options: [
            "Python",
            "CSS",
            "SQL",
            "Java"
        ],
        answer: 1,
        skill: "CSS"
    },

    {
        question: "Which language adds interactivity to webpages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2,
        skill: "JavaScript"
    },

    {
        question: "What does Git help developers do?",
        options: [
            "Edit images",
            "Track code changes",
            "Create Wi-Fi",
            "Design hardware"
        ],
        answer: 1,
        skill: "Git"
    },

    {
        question: "Which one is a programming language?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "HTTP"
        ],
        answer: 0,
        skill: "Programming"
    },

    {
        question: "What does SQL commonly work with?",
        options: [
            "Images",
            "Databases",
            "CSS animations",
            "Computer screens"
        ],
        answer: 1,
        skill: "SQL"
    },

    {
        question: "Which data type stores True or False?",
        options: [
            "String",
            "Boolean",
            "Array",
            "Float"
        ],
        answer: 1,
        skill: "Programming"
    },

    {
        question: "What is an algorithm?",
        options: [
            "A step-by-step method to solve a problem",
            "A computer screen",
            "A programming font",
            "A type of cable"
        ],
        answer: 0,
        skill: "Problem Solving"
    },

    {
        question: "What does API commonly allow?",
        options: [
            "Different software systems to communicate",
            "A computer to charge",
            "A screen to become larger",
            "A keyboard to type faster"
        ],
        answer: 0,
        skill: "Development"
    },

    {
        question: "What is debugging?",
        options: [
            "Finding and fixing errors in code",
            "Designing a logo",
            "Installing a monitor",
            "Creating a password"
        ],
        answer: 0,
        skill: "Problem Solving"
    }

];


function showPage(page){

    document.querySelectorAll(".page").forEach(function(section){
        section.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


function selectGoal(element, goal){

    document.querySelectorAll(".goal").forEach(function(item){
        item.classList.remove("selected");
    });

    element.classList.add("selected");

    selectedGoal = goal;

    const custom = document.getElementById("customGoal");

    if(goal === "Other"){
        custom.style.display = "block";
    }else{
        custom.style.display = "none";
    }
}


function goSkills(){

    if(selectedGoal === ""){
        alert("Please select your career goal first.");
        return;
    }

    if(selectedGoal === "Other"){

        const custom =
            document.getElementById("customGoal").value.trim();

        if(custom === ""){
            alert("Please enter your custom goal.");
            return;
        }

        selectedGoal = custom;
    }

    showPage("skills");
}


function toggleSkill(element){

    const skill = element.innerText;

    element.classList.toggle("selected");

    if(element.classList.contains("selected")){

        if(skill === "None"){

            document.querySelectorAll(".skill").forEach(function(item){
                item.classList.remove("selected");
            });

            selectedSkills = ["None"];

            element.classList.add("selected");

        }else{

            document.querySelectorAll(".skill").forEach(function(item){

                if(item.innerText === "None"){
                    item.classList.remove("selected");
                }

            });

            selectedSkills =
                selectedSkills.filter(item => item !== "None");

            if(!selectedSkills.includes(skill)){
                selectedSkills.push(skill);
            }
        }

    }else{

        selectedSkills =
            selectedSkills.filter(item => item !== skill);
    }
}


function goLevel(){

    if(selectedSkills.length === 0){
        alert("Please select at least one skill.");
        return;
    }

    showPage("level");
}


function selectLevel(element, level){

    document.querySelectorAll(".level").forEach(function(item){
        item.classList.remove("selected");
    });

    element.classList.add("selected");

    selectedLevel = level;
}


function goTime(){

    if(selectedLevel === ""){
        alert("Please select your current level.");
        return;
    }

    showPage("time");
}


function selectTime(element, time){

    document.querySelectorAll(".time").forEach(function(item){
        item.classList.remove("selected");
    });

    element.classList.add("selected");

    selectedTime = time;
}


function goInterests(){

    if(selectedTime === ""){
        alert("Please select your available learning time.");
        return;
    }

    showPage("interests");
}


function toggleInterest(element){

    const interest = element.innerText.trim();

    element.classList.toggle("selected");

    if(element.classList.contains("selected")){

        if(!selectedInterests.includes(interest)){
            selectedInterests.push(interest);
        }

    }else{

        selectedInterests =
            selectedInterests.filter(item => item !== interest);
    }
}


function finishSetup(){

    if(selectedInterests.length === 0){
        alert("Please select at least one interest.");
        return;
    }

    document.getElementById("resultGoal").innerText =
        selectedGoal;

    document.getElementById("resultLevel").innerText =
        selectedLevel;

    document.getElementById("resultTime").innerText =
        selectedTime;

    document.getElementById("resultSkills").innerText =
        selectedSkills.length + " selected";

    showPage("result");
}


/* =========================
   ASSESSMENT
========================= */

function startAssessment(){

    currentQuestion = 0;

    answers = new Array(questions.length).fill(null);

    showPage("assessment");

    loadQuestion();
}


function loadQuestion(){

    const question = questions[currentQuestion];

    document.getElementById("questionCounter").innerText =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    document.getElementById("questionText").innerText =
        question.question;

    const optionsBox =
        document.getElementById("options");

    optionsBox.innerHTML = "";

    question.options.forEach(function(option,index){

        const button =
            document.createElement("button");

        button.className = "option";

        button.innerText =
            String.fromCharCode(65 + index) + ". " + option;

        button.onclick = function(){
            selectAnswer(index);
        };

        if(answers[currentQuestion] === index){
            button.classList.add("selected");
        }

        optionsBox.appendChild(button);
    });

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

    document.getElementById("prevBtn").style.visibility =
        currentQuestion === 0 ? "hidden" : "visible";

    document.getElementById("nextBtn").innerText =
        currentQuestion === questions.length - 1
        ? "Finish Assessment ✓"
        : "Next →";
}


function selectAnswer(index){

    answers[currentQuestion] = index;

    document.querySelectorAll(".option").forEach(function(option,index2){

        option.classList.toggle(
            "selected",
            index2 === index
        );

    });
}


function nextQuestion(){

    if(answers[currentQuestion] === null){

        alert("Please select an answer first.");

        return;
    }

    if(currentQuestion < questions.length - 1){

        currentQuestion++;

        loadQuestion();

    }else{

        finishAssessment();
    }
}


function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();
    }
}


/* =========================
   ASSESSMENT RESULT
========================= */

function finishAssessment(){

    let correct = 0;

    let weakSkills = [];

    questions.forEach(function(question,index){

        if(answers[index] === question.answer){

            correct++;

        }else{

            if(!weakSkills.includes(question.skill)){
                weakSkills.push(question.skill);
            }
        }
    });

    const percentage =
        Math.round((correct / questions.length) * 100);

    let level = "";

    if(percentage >= 80){

        level = "Advanced";

    }else if(percentage >= 50){

        level = "Intermediate";

    }else{

        level = "Beginner";
    }

    document.getElementById("scoreNumber").innerText =
        percentage + "%";

    document.getElementById("assessmentLevel").innerText =
        level;

    document.getElementById("correctCount").innerText =
        correct;

    document.getElementById("wrongCount").innerText =
        questions.length - correct;

    document.getElementById("focusCount").innerText =
        weakSkills.length;

    if(weakSkills.length > 0){

        document.getElementById("weakTopics").innerText =
            weakSkills.join(" • ");

    }else{

        document.getElementById("weakTopics").innerText =
            "Great job! You have a strong foundation across the assessed topics.";
    }

    document.getElementById("assessmentMessage").innerText =
        getAssessmentMessage(percentage);

    showPage("assessmentResult");
}


function getAssessmentMessage(score){

    if(score >= 80){

        return "Excellent foundation! SkillPilot can move you toward advanced projects and real-world challenges.";

    }else if(score >= 50){

        return "You have a good foundation. SkillPilot will strengthen your weak areas before moving to advanced topics.";

    }else{

        return "We'll start with the fundamentals and gradually build your skills through practice and projects.";
    }
}


/* =========================
   ROADMAP
========================= */

function showRoadmap(){

    const roadmap =
        document.getElementById("roadmapList");

    roadmap.innerHTML = "";

    const roadmapData =
        getRoadmap(selectedGoal);

    document.getElementById("roadmapTitle").innerText =
        selectedGoal + " Roadmap";

    document.getElementById("roadmapSubtitle").innerText =
        "Your roadmap is based on your profile and assessment results.";

    roadmapData.forEach(function(item,index){

        const div =
            document.createElement("div");

        div.className = "roadmap-item";

        div.innerHTML = `
            <div class="roadmap-number">${index + 1}</div>
            <div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;

        roadmap.appendChild(div);
    });

    showPage("roadmap");
}


function getRoadmap(goal){

    if(goal === "Web Development"){

        return [

            {
                title:"HTML & CSS Foundations",
                description:"Build strong webpage structure, styling and responsive layouts."
            },

            {
                title:"JavaScript Fundamentals",
                description:"Learn variables, functions, arrays, objects and DOM interaction."
            },

            {
                title:"Git & GitHub",
                description:"Learn version control and publish your projects."
            },

            {
                title:"Frontend Projects",
                description:"Build real websites using HTML, CSS and JavaScript."
            },

            {
                title:"Advanced Web Development",
                description:"Move toward APIs, frameworks and full-stack development."
            }

        ];

    }


    if(goal === "AI / ML"){

        return [

            {
                title:"Python Foundations",
                description:"Learn Python syntax, functions, collections and problem solving."
            },

            {
                title:"Data Handling",
                description:"Learn NumPy, Pandas and basic data analysis."
            },

            {
                title:"Machine Learning Basics",
                description:"Understand datasets, models, training and evaluation."
            },

            {
                title:"ML Projects",
                description:"Build beginner-friendly machine learning projects."
            },

            {
                title:"Advanced AI",
                description:"Explore deep learning and real-world AI applications."
            }

        ];

    }


    if(goal === "Data Science"){

        return [

            {
                title:"Python for Data",
                description:"Learn Python and the fundamentals needed for data work."
            },

            {
                title:"Statistics",
                description:"Understand averages, probability, distributions and correlation."
            },

            {
                title:"Pandas & Data Analysis",
                description:"Clean, analyze and explore datasets."
            },

            {
                title:"Data Visualization",
                description:"Create useful charts and communicate insights."
            },

            {
                title:"Data Science Projects",
                description:"Solve real-world problems using datasets."
            }

        ];

    }


    if(goal === "Cybersecurity"){

        return [

            {
                title:"Computer Fundamentals",
                description:"Understand operating systems, networks and computing basics."
            },

            {
                title:"Networking",
                description:"Learn IP addresses, protocols, ports and network concepts."
            },

            {
                title:"Linux Fundamentals",
                description:"Build command-line and system administration skills."
            },

            {
                title:"Security Fundamentals",
                description:"Learn authentication, vulnerabilities and defensive security concepts."
            },

            {
                title:"Security Projects",
                description:"Practice security concepts in safe learning environments."
            }

        ];

    }


    return [

        {
            title:"Fundamentals",
            description:"Build the basic concepts required for your selected career goal."
        },

        {
            title:"Core Skills",
            description:"Develop the essential skills used in your chosen field."
        },

        {
            title:"Practice",
            description:"Solve exercises and strengthen your understanding."
        },

        {
            title:"Mini Projects",
            description:"Apply your knowledge by building practical projects."
        },

        {
            title:"Advanced Skills",
            description:"Move toward more advanced topics and real-world work."
        }

    ];
            }
