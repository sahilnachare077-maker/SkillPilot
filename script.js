let selectedGoal = "";
let selectedSkills = [];
let selectedLevel = "";
let selectedTime = "";
let selectedInterests = [];


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

    const interest = element.innerText;

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
