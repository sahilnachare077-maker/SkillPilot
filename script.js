/* =====================================
   SKILLPILOT V6 - MAIN JAVASCRIPT
===================================== */


/* =====================================
   USER NAME
===================================== */

let userName = localStorage.getItem("skillpilotUserName");

if (!userName) {

    userName = prompt(
        "Welcome to SkillPilot! Enter your name:"
    );

    if (!userName || userName.trim() === "") {
        userName = "Student";
    }

    userName = userName.trim();

    localStorage.setItem(
        "skillpilotUserName",
        userName
    );
}


/* =====================================
   USER PROGRESS
===================================== */

let xp = 320;
let streak = 5;
let progress = 42;


/* =====================================
   PAGE NAVIGATION
===================================== */

function showPage(page) {

    document.querySelectorAll(".page").forEach(function(item) {
        item.classList.remove("active");
    });

    const target =
        document.getElementById(page);

    if (target) {
        target.classList.add("active");
    }

    document.querySelectorAll(".side-link").forEach(function(item) {
        item.classList.remove("active");
    });

    if (page === "home") {

        const homeButton =
            document.querySelector(".side-link");

        if (homeButton) {
            homeButton.classList.add("active");
        }
    }

    if (page === "roadmap") {
        renderRoadmap();
    }

    if (page === "dashboard") {
        updateDashboard();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================
   DAILY MISSION
===================================== */

function completeMission() {

    xp += 50;

    updateXPDisplay();

    /*
       No popup here.
       XP updates silently.
    */
}


/* =====================================
   UPDATE XP
===================================== */

function updateXPDisplay() {

    const currentXP =
        document.getElementById("currentXP");

    if (currentXP) {
        currentXP.innerText = xp;
    }


    const sideXP =
        document.getElementById("sideXP");

    if (sideXP) {
        sideXP.innerText =
            xp + " / 500 XP";
    }


    const sideXPBar =
        document.getElementById("sideXPBar");

    if (sideXPBar) {

        sideXPBar.style.width =
            Math.min(
                (xp / 500) * 100,
                100
            ) + "%";
    }


    const levelProgress =
        document.getElementById("levelProgress");

    if (levelProgress) {

        levelProgress.style.width =
            Math.min(
                (xp / 500) * 100,
                100
            ) + "%";
    }
}


/* =====================================
   ROADMAP DATA
===================================== */

const roadmapData = [

    {
        title: "Python Foundations",

        description:
            "Learn Python syntax, variables, functions and problem solving.",

        status: "completed"
    },


    {
        title: "NumPy Fundamentals",

        description:
            "Work with arrays and numerical data using NumPy.",

        status: "completed"
    },


    {
        title: "Pandas DataFrame",

        description:
            "Learn how to load, clean and analyze datasets using Pandas.",

        status: "current"
    },


    {
        title: "Statistics",

        description:
            "Understand probability, averages, distributions and data patterns.",

        status: "locked"
    },


    {
        title: "Machine Learning",

        description:
            "Learn datasets, models, training and evaluation.",

        status: "locked"
    },


    {
        title: "Real World Projects",

        description:
            "Build portfolio-ready AI and ML projects.",

        status: "locked"
    }

];


/* =====================================
   RENDER ROADMAP
===================================== */

function renderRoadmap() {

    const container =
        document.getElementById("roadmapList");

    if (!container) {
        return;
    }

    container.innerHTML = "";


    roadmapData.forEach(function(item, index) {

        const div =
            document.createElement("div");

        div.className =
            "roadmap-item";


        let statusText =
            "🔒 Locked";


        if (item.status === "completed") {

            statusText =
                "✅ Completed";
        }


        if (item.status === "current") {

            statusText =
                "🟡 In Progress";
        }


        div.innerHTML = `

            <div class="roadmap-number">

                ${
                    item.status === "completed"
                    ? "✓"
                    : index + 1
                }

            </div>


            <div>

                <h3>
                    ${item.title}
                </h3>


                <p>
                    ${item.description}
                </p>


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

function updateDashboard() {

    const progressText =
        document.getElementById(
            "dashboardProgressText"
        );


    const progressBar =
        document.getElementById(
            "dashboardProgress"
        );


    if (progressText) {

        progressText.innerText =
            progress + "%";
    }


    if (progressBar) {

        progressBar.style.width =
            progress + "%";
    }
}


/* =====================================
   TODAY'S PLAN
===================================== */

document.addEventListener(
    "change",
    function(event) {

        if (
            event.target.matches(
                ".check-item input"
            )
        ) {

            if (event.target.checked) {

                xp += 10;

                updateXPDisplay();
            }
        }

    }
);


/* =====================================
   USER NAME DISPLAY
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const greetingName =
            document.getElementById(
                "userName"
            );


        const topName =
            document.getElementById(
                "topUserName"
            );


        if (greetingName) {

            greetingName.innerText =
                userName;
        }


        if (topName) {

            topName.innerText =
                userName;
        }


        updateXPDisplay();

        updateDashboard();

    }
);


/* =====================================
   SEARCH
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const searchInput =
            document.querySelector(
                ".search input"
            );


        if (!searchInput) {
            return;
        }


        searchInput.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    const value =
                        searchInput.value.trim();


                    if (value !== "") {

                        console.log(
                            "Searching for:",
                            value
                        );

                    }

                }

            }
        );

    }
);


/* =====================================
   TODAY'S PLAN CHECKBOXES
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const checkboxes =
            document.querySelectorAll(
                ".check-item input"
            );


        checkboxes.forEach(
            function(checkbox) {

                checkbox.addEventListener(
                    "change",
                    function() {

                        const item =
                            checkbox.closest(
                                ".check-item"
                            );


                        if (checkbox.checked) {

                            if (item) {

                                item.classList.add(
                                    "checked"
                                );
                            }

                        } else {

                            if (item) {

                                item.classList.remove(
                                    "checked"
                                );
                            }

                        }

                    }
                );

            }
        );

    }
);


/* =====================================
   START APP
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const pages =
            document.querySelectorAll(
                ".page"
            );


        if (pages.length > 0) {

            pages.forEach(
                function(page) {

                    page.classList.remove(
                        "active"
                    );

                }
            );


            const home =
                document.getElementById(
                    "home"
                );


            if (home) {

                home.classList.add(
                    "active"
                );
            }

        }


        updateXPDisplay();

        updateDashboard();

    }
);
