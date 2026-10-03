let userName = localStorage.getItem("skillpilotUserName");

if (!userName) {
    userName = prompt("Welcome to SkillPilot! Enter your name:");

    if (!userName || userName.trim() === "") {
        userName = "Student";
    }

    userName = userName.trim();

    localStorage.setItem("skillpilotUserName", userName);
}

document.addEventListener("DOMContentLoaded", function(){

    const greetingName =
        document.getElementById("userName");

    const topName =
        document.getElementById("topUserName");

    if(greetingName){
        greetingName.innerText = userName;
    }

    if(topName){
        topName.innerText = userName;
    }

});

let xp = 320;
let streak = 5;
let progress = 42;


/* =====================================
   PAGE NAVIGATION
===================================== */

function showPage(page){

    document.querySelectorAll(".page").forEach(function(item){
        item.classList.remove("active");
    });

    const target = document.getElementById(page);

    if(target){
        target.classList.add("active");
    }

    document.querySelectorAll(".side-link").forEach(function(item){
        item.classList.remove("active");
    });

    if(page === "home"){
        document.querySelector(".side-link").classList.add("active");
    }

    if(page === "roadmap"){
        renderRoadmap();
    }

    if(page === "dashboard"){
        updateDashboard();
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* =====================================
   DAILY MISSION
===================================== */

function completeMission(){

    xp += 50;

    document.getElementById("currentXP").innerText = xp;
    document.getElementById("sideXP").innerText =
        xp + " / 500 XP";

    document.getElementById("sideXPBar").style.width =
        Math.min((xp / 500) * 100,100) + "%";

    document.getElementById("levelProgress").style.width =
        Math.min((xp / 500) * 100,100) + "%";

    alert("Mission completed! +50 XP 🎉");
}


/* =====================================
   ROADMAP
===================================== */

const roadmapData = [

    {
        title:"Python Foundations",
        description:"Learn Python syntax, variables, functions and problem solving.",
        status:"completed"
    },

    {
        title:"NumPy Fundamentals",
        description:"Work with arrays and numerical data using NumPy.",
        status:"completed"
    },

    {
        title:"Pandas DataFrame",
        description:"Learn how to load, clean and analyze datasets using Pandas.",
        status:"current"
    },

    {
        title:"Statistics",
        description:"Understand probability, averages, distributions and data patterns.",
        status:"locked"
    },

    {
        title:"Machine Learning",
        description:"Learn datasets, models, training and evaluation.",
        status:"locked"
    },

    {
        title:"Real World Projects",
        description:"Build portfolio-ready AI and ML projects.",
        status:"locked"
    }

];


function renderRoadmap(){

    const container =
        document.getElementById("roadmapList");

    if(!container){
        return;
    }

    container.innerHTML = "";

    roadmapData.forEach(function(item,index){

        const div =
            document.createElement("div");

        div.className =
            "roadmap-item";

        let statusText = "🔒 Locked";

        if(item.status === "completed"){
            statusText = "✅ Completed";
        }

        if(item.status === "current"){
            statusText = "🟡 In Progress";
        }

        div.innerHTML = `
            <div class="roadmap-number">
                ${item.status === "completed" ? "✓" : index + 1}
            </div>

            <div>
                <h3>${item.title}</h3>

                <p>${item.description}</p>

                <span class="skill-status">
                    ${statusText}
                </span>
            </div>
        `;

        container.appendChild(div);

    });
}


/* =====================================
   DASHBOARD
===================================== */

function updateDashboard(){

    const progressText =
        document.getElementById("dashboardProgressText");

    const progressBar =
        document.getElementById("dashboardProgress");

    if(progressText){
        progressText.innerText =
            progress + "%";
    }

    if(progressBar){
        progressBar.style.width =
            progress + "%";
    }
}


/* =====================================
   CHECKBOX PLAN
===================================== */

document.addEventListener("change",function(event){

    if(event.target.matches(".check-item input")){

        if(event.target.checked){

            xp += 10;

            const xpElement =
                document.getElementById("currentXP");

            if(xpElement){
                xpElement.innerText = xp;
            }
        }

    }

});


/* =====================================
   QUICK ACTIONS
===================================== */

document.addEventListener("DOMContentLoaded",function(){

    const quickButtons =
        document.querySelectorAll(".quick-grid button");

    quickButtons.forEach(function(button,index){

        button.addEventListener("click",function(){

            if(index === 0){
                alert("Practice section is ready for the next update! 💻");
            }

            if(index === 1){
                alert("Resources section is coming next! 📚");
            }

            if(index === 2){
                alert("AI Assistant will help you learn step-by-step! 🤖");
            }

            if(index === 3){
                alert("Reminder feature will be added soon! 🔔");
            }

        });

    });

});
