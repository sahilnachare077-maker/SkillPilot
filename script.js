let selectedGoal = "";
let selectedSkills = [];
let selectedLevel = "";
let selectedTime = "";
let selectedInterests = [];

let currentQuestion = 0;
let answers = [];

let xp = 0;
let streak = 1;
let completedSkills = [];

const questions = [

{
question:"What does HTML mainly define?",
options:[
"The structure of a webpage",
"The database",
"The server hardware",
"The internet connection"
],
answer:0,
skill:"HTML"
},

{
question:"Which language is mainly used to style webpages?",
options:[
"Python",
"CSS",
"SQL",
"Java"
],
answer:1,
skill:"CSS"
},

{
question:"Which language adds interactivity to webpages?",
options:[
"HTML",
"CSS",
"JavaScript",
"SQL"
],
answer:2,
skill:"JavaScript"
},

{
question:"What does Git help developers do?",
options:[
"Edit images",
"Track code changes",
"Create Wi-Fi",
"Design hardware"
],
answer:1,
skill:"Git"
},

{
question:"Which one is a programming language?",
options:[
"Python",
"HTML",
"CSS",
"HTTP"
],
answer:0,
skill:"Programming"
},

{
question:"What does SQL commonly work with?",
options:[
"Images",
"Databases",
"CSS animations",
"Computer screens"
],
answer:1,
skill:"SQL"
},

{
question:"Which data type stores True or False?",
options:[
"String",
"Boolean",
"Array",
"Float"
],
answer:1,
skill:"Programming"
},

{
question:"What is an algorithm?",
options:[
"A step-by-step method to solve a problem",
"A computer screen",
"A programming font",
"A type of cable"
],
answer:0,
skill:"Problem Solving"
},

{
question:"What does API commonly allow?",
options:[
"Different software systems to communicate",
"A computer to charge",
"A screen to become larger",
"A keyboard to type faster"
],
answer:0,
skill:"Development"
},

{
question:"What is debugging?",
options:[
"Finding and fixing errors in code",
"Designing a logo",
"Installing a monitor",
"Creating a password"
],
answer:0,
skill:"Problem Solving"
}

];


function showPage(page){

document.querySelectorAll(".page").forEach(function(section){
section.classList.remove("active");
});

document.getElementById(page).classList.add("active");

if(page === "dashboard"){
updateDashboard();
}

if(page === "roadmap"){
renderRoadmap();
}

window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* PROFILE */

function selectGoal(element,goal){

document.querySelectorAll(".goal").forEach(function(item){
item.classList.remove("selected");
});

element.classList.add("selected");

selectedGoal=goal;

const custom=document.getElementById("customGoal");

custom.style.display=
goal==="Other" ? "block" : "none";

}


function goSkills(){

if(selectedGoal===""){
alert("Please select your career goal first.");
return;
}

if(selectedGoal==="Other"){

const custom=
document.getElementById("customGoal").value.trim();

if(custom===""){
alert("Please enter your custom goal.");
return;
}

selectedGoal=custom;
}

showPage("skills");

}


function toggleSkill(element){

const skill=element.innerText;

element.classList.toggle("selected");

if(element.classList.contains("selected")){

if(skill==="None"){

document.querySelectorAll(".skill").forEach(function(item){
item.classList.remove("selected");
});

selectedSkills=["None"];

element.classList.add("selected");

}else{

document.querySelectorAll(".skill").forEach(function(item){

if(item.innerText==="None"){
item.classList.remove("selected");
}

});

selectedSkills=
selectedSkills.filter(item=>item!=="None");

if(!selectedSkills.includes(skill)){
selectedSkills.push(skill);
}

}

}else{

selectedSkills=
selectedSkills.filter(item=>item!==skill);

}

}


function goLevel(){

if(selectedSkills.length===0){
alert("Please select at least one skill.");
return;
}

showPage("level");

}


function selectLevel(element,level){

document.querySelectorAll(".level").forEach(function(item){
item.classList.remove("selected");
});

element.classList.add("selected");

selectedLevel=level;

}


function goTime(){

if(selectedLevel===""){
alert("Please select your current level.");
return;
}

showPage("time");

}


function selectTime(element,time){

document.querySelectorAll(".time").forEach(function(item){
item.classList.remove("selected");
});

element.classList.add("selected");

selectedTime=time;

}


function goInterests(){

if(selectedTime===""){
alert("Please select your available learning time.");
return;
}

showPage("interests");

}


function toggleInterest(element){

const interest=element.innerText.trim();

element.classList.toggle("selected");

if(element.classList.contains("selected")){

if(!selectedInterests.includes(interest)){
selectedInterests.push(interest);
}

}else{

selectedInterests=
selectedInterests.filter(item=>item!==interest);

}

}


function finishSetup(){

if(selectedInterests.length===0){
alert("Please select at least one interest.");
return;
}

document.getElementById("resultGoal").innerText=selectedGoal;
document.getElementById("resultLevel").innerText=selectedLevel;
document.getElementById("resultTime").innerText=selectedTime;
document.getElementById("resultSkills").innerText=
selectedSkills.length+" selected";

showPage("result");

}


/* ASSESSMENT */

function startAssessment(){

currentQuestion=0;

answers=new Array(questions.length).fill(null);

showPage("assessment");

loadQuestion();

}


function loadQuestion(){

const question=questions[currentQuestion];

document.getElementById("questionCounter").innerText=
"Question "+(currentQuestion+1)+" of "+questions.length;

document.getElementById("questionText").innerText=
question.question;

const optionsBox=
document.getElementById("options");

optionsBox.innerHTML="";

question.options.forEach(function(option,index){

const button=document.createElement("button");

button.className="option";

button.innerText=
String.fromCharCode(65+index)+". "+option;

button.onclick=function(){
selectAnswer(index);
};

if(answers[currentQuestion]===index){
button.classList.add("selected");
}

optionsBox.appendChild(button);

});

const progress=
((currentQuestion+1)/questions.length)*100;

document.getElementById("progressBar").style.width=
progress+"%";

document.getElementById("prevBtn").style.visibility=
currentQuestion===0 ? "hidden" : "visible";

document.getElementById("nextBtn").innerText=
currentQuestion===questions.length-1
?"Finish Assessment ✓"
:"Next →";

}


function selectAnswer(index){

answers[currentQuestion]=index;

document.querySelectorAll(".option").forEach(function(option,index2){

option.classList.toggle(
"selected",
index2===index
);

});

}


function nextQuestion(){

if(answers[currentQuestion]===null){

alert("Please select an answer first.");
return;

}

if(currentQuestion<questions.length-1){

currentQuestion++;

loadQuestion();

}else{

finishAssessment();

}

}


function previousQuestion(){

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

}


/* ASSESSMENT RESULT */

function finishAssessment(){

let correct=0;
let weakSkills=[];

questions.forEach(function(question,index){

if(answers[index]===question.answer){

correct++;

}else{

if(!weakSkills.includes(question.skill)){
weakSkills.push(question.skill);
}

}

});

const percentage=
Math.round((correct/questions.length)*100);

let level;

if(percentage>=80){
level="Advanced";
}else if(percentage>=50){
level="Intermediate";
}else{
level="Beginner";
}

document.getElementById("scoreNumber").innerText=
percentage+"%";

document.getElementById("assessmentLevel").innerText=
level;

document.getElementById("correctCount").innerText=
correct;

document.getElementById("wrongCount").innerText=
questions.length-correct;

document.getElementById("focusCount").innerText=
weakSkills.length;

document.getElementById("weakTopics").innerText=
weakSkills.length
?weakSkills.join(" • ")
:"Excellent! No major focus areas found.";

document.getElementById("assessmentMessage").innerText=
getAssessmentMessage(percentage);

xp+=correct*10;

showPage("assessmentResult");

}


function getAssessmentMessage(score){

if(score>=80){

return "Excellent foundation! Your roadmap can focus on advanced skills and projects.";

}

if(score>=50){

return "Good foundation! Your roadmap will strengthen your weak areas and build practical skills.";

}

return "We'll start with the fundamentals and gradually build your skills through practice and projects.";

}


/* ROADMAP */

function getRoadmap(goal){

if(goal==="Web Development"){

return [

{
title:"HTML & CSS Foundations",
description:"Build webpage structure, styling and responsive layouts."
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
description:"Explore APIs, frameworks and full-stack development."
}

];

}


if(goal==="AI / ML"){

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


if(goal==="Data Science"){

return [

{
title:"Python for Data",
description:"Learn Python fundamentals for data work."
},

{
title:"Statistics",
description:"Understand probability, averages and distributions."
},

{
title:"Pandas & Data Analysis",
description:"Clean and analyze datasets."
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


if(goal==="Cybersecurity"){

return [

{
title:"Computer Fundamentals",
description:"Understand operating systems and computing basics."
},

{
title:"Networking",
description:"Learn IP addresses, protocols, ports and networks."
},

{
title:"Linux Fundamentals",
description:"Build command-line and system administration skills."
},

{
title:"Security Fundamentals",
description:"Learn authentication, vulnerabilities and defensive concepts."
},

{
title:"Security Projects",
description:"Practice cybersecurity concepts in safe environments."
}

];

}


return [

{
title:"Fundamentals",
description:"Build the basic concepts required for your career goal."
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
description:"Move toward advanced topics and real-world work."
}

];

}


function renderRoadmap(){

const roadmap=
document.getElementById("roadmapList");

roadmap.innerHTML="";

const data=getRoadmap(selectedGoal);

document.getElementById("roadmapTitle").innerText=
selectedGoal+" Roadmap";

document.getElementById("roadmapSubtitle").innerText=
"Your personalized path from fundamentals to real-world projects.";

data.forEach(function(item,index){

const isCompleted=
completedSkills.includes(index);

const isCurrent=
!isCompleted &&
index===completedSkills.length;

const div=document.createElement("div");

div.className=
"roadmap-item "+
(isCompleted?"completed ":"")+
(isCurrent?"current":"");

let status="🔒 Locked";

if(isCompleted){
status="✅ Completed";
}else if(isCurrent){
status="🔵 In Progress";
}

div.innerHTML=`

<div class="roadmap-number">
${isCompleted?"✓":index+1}
</div>

<div style="flex:1">

<h3>${item.title}</h3>

<p>${item.description}</p>

<span class="skill-status">${status}</span>

${isCurrent ? `
<br>
<button class="roadmap-action"
onclick="completeSkill(${index})">
Complete Skill +100 XP
</button>
`:""}

</div>
`;

roadmap.appendChild(div);

});

}


/* SKILL COMPLETION */

function completeSkill(index){

if(index!==completedSkills.length){

alert("Complete the previous skill first.");
return;

}

completedSkills.push(index);

xp+=100;

updateDashboard();

renderRoadmap();

}


function getProgress(){

const total=getRoadmap(selectedGoal).length;

if(total===0){
return 0;
}

return Math.round(
(completedSkills.length/total)*100
);

}


/* DASHBOARD */

function updateDashboard(){

const progress=getProgress();

document.getElementById("xpValue").innerText=xp;

document.getElementById("streakValue").innerText=
streak+" day";

document.getElementById("progressValue").innerText=
progress+"%";

document.getElementById("progressPercent").innerText=
progress+"%";

document.getElementById("dashboardProgress").style.width=
progress+"%";

document.getElementById("dashboardGoal").innerText=
selectedGoal
?selectedGoal+" · "+selectedLevel
:"Complete your setup to begin.";

document.getElementById("badgeValue").innerText=
getBadgeCount();

updateMission();

updateBadges();

}


function updateMission(){

if(!selectedGoal){

document.getElementById("missionTitle").innerText=
"Complete your profile";

document.getElementById("missionDescription").innerText=
"Set your goal, skills and interests to unlock your daily mission.";

return;

}

const roadmap=getRoadmap(selectedGoal);

const current=completedSkills.length;

if(current>=roadmap.length){

document.getElementById("missionTitle").innerText=
"🏆 Roadmap Complete!";

document.getElementById("missionDescription").innerText=
"You completed your current learning roadmap. Great work!";

document.getElementById("missionTime").innerText=
"Done";

return;

}

document.getElementById("missionTitle").innerText=
roadmap[current].title;

document.getElementById("missionDescription").innerText=
roadmap[current].description;

document.getElementById("missionTime").innerText=
selectedTime || "15 min";

}


function completeMission(){

if(!selectedGoal){

alert("Complete your profile first.");
return;

}

const progress=getProgress();

if(progress>=100){

alert("Your roadmap is already complete! 🏆");
return;

}

xp+=50;

streak++;

updateDashboard();

alert("Mission completed! +50 XP 🎉");

}


function getBadgeCount(){

let count=0;

if(completedSkills.length>=1){
count++;
}

if(completedSkills.length>=3){
count++;
}

if(streak>=3){
count++;
}

if(getProgress()>=100){
count++;
}

return count;

}


function updateBadges(){

const first=document.getElementById("badgeFirst");

if(completedSkills.length>=1){
first.classList.add("unlocked");
}

}

</script>

</body>
</html>
