let currentXP = 320;

let userName = localStorage.getItem("skillpilotName");

if (!userName) {

    userName = prompt("What is your name?");

    if (!userName || userName.trim() === "") {
        userName = "Student";
    }

    userName = userName.trim();

    localStorage.setItem("skillpilotName", userName);
}


function updateUserName() {

    const nameElements = [

        document.getElementById("userName"),

        document.getElementById("topUserName"),

        document.getElementById("profileUserName"),

        document.getElementById("profileName")

    ];


    nameElements.forEach(function(element) {

        if (element) {
            element.textContent = userName;
        }

    });


    const initial =
        document.getElementById("userInitial");


    if (initial) {

        initial.textContent =
            userName.charAt(0).toUpperCase();

    }

}


function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(pageId);


    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    const links =
        document.querySelectorAll(".side-link");


    links.forEach(function(link) {

        link.classList.remove("active");

    });


    const clickedLink =
        Array.from(links).find(function(link) {

            return link.getAttribute("onclick") ===
                "showPage('" + pageId + "')";

        });


    if (clickedLink) {

        clickedLink.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


function completeMission() {

    currentXP += 50;


    if (currentXP > 500) {
        currentXP = 500;
    }


    const xp =
        document.getElementById("currentXP");


    if (xp) {
        xp.textContent = currentXP;
    }


    const sideXP =
        document.getElementById("sideXP");


    if (sideXP) {

        sideXP.textContent =
            currentXP + " / 500 XP";

    }


    const levelProgress =
        document.getElementById("levelProgress");


    if (levelProgress) {

        levelProgress.style.width =
            (currentXP / 500 * 100) + "%";

    }


    const sideXPBar =
        document.getElementById("sideXPBar");


    if (sideXPBar) {

        sideXPBar.style.width =
            (currentXP / 500 * 100) + "%";

    }


    const missionButton =
        document.querySelector(
            ".mission-card .primary"
        );


    if (missionButton) {

        missionButton.textContent =
            "Mission Completed ✓";

        missionButton.disabled = true;

        missionButton.style.opacity = "0.7";

    }

}


function startAssessment() {

    alert(
        "Assessment module is ready for the next update."
    );

}


function createRoadmap() {

    const roadmap = [

        {
            title: "Python",
            status: "✓ Completed"
        },

        {
            title: "NumPy",
            status: "✓ Completed"
        },

        {
            title: "Pandas",
            status: "• In Progress"
        },

        {
            title: "Statistics",
            status: "🔒 Locked"
        },

        {
            title: "Machine Learning",
            status: "🔒 Locked"
        },

        {
            title: "Projects",
            status: "🔒 Locked"
        },

        {
            title: "Portfolio",
            status: "🔒 Locked"
        },

        {
            title: "Internship Preparation",
            status: "🔒 Locked"
        }

    ];


    const container =
        document.getElementById("roadmapList");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    roadmap.forEach(function(item) {

        const div =
            document.createElement("div");


        div.className =
            "roadmap-item";


        div.innerHTML =

            "<b>" +
            item.title +
            "</b>" +

            "<br>" +

            "<small>" +
            item.status +
            "</small>";


        container.appendChild(div);

    });

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateUserName();

        createRoadmap();


        const levelProgress =
            document.getElementById(
                "levelProgress"
            );


        if (levelProgress) {

            levelProgress.style.width =
                (currentXP / 500 * 100) + "%";

        }


        const sideXPBar =
            document.getElementById(
                "sideXPBar"
            );


        if (sideXPBar) {

            sideXPBar.style.width =
                (currentXP / 500 * 100) + "%";

        }

    }
);
