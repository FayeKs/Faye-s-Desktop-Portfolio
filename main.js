// navbar popup function //
const navPopup = document.getElementById("navPopup");
const navArrow =document.getElementById("navArrow")


navArrow.addEventListener("mouseover", function(e){
    navPopup.style.display = "block";
});

navPopup.addEventListener("mouseover", function(e){
    navPopup.style.display = "block";
})

navPopup.addEventListener("mouseout", function(e){
    navPopup.style.display = "none";
})








// open, close, minimize button functions, taskbar icons funtion //

const compCloseBtn = document.getElementById("compCloseBtn")
const minBtn = document.getElementById("minBtn")

const compModal = document.getElementById("compModal");
const compBtn = document.getElementById("compBtn");
const compTaskbar = document.getElementById("compTaskbar");


// open computer modal button, show taskbar icon //
compBtn.onclick = function() {
    compModal.style.display = "block";
    compTaskbar.style.display = "block";
}
//close computer modal button, hide taskbar icon//
compCloseBtn.onclick = function() {
    compModal.style.display = "none"; 
    compTaskbar.style.display = "none";
}

//minimize computer modal button funtion//
minBtn.onclick = function(){
    compModal.style.display = "none"
}

//open modal from taskbar icon function//
compTaskbar.onclick = function(){
    compModal.style.display = "block";
}


const projectMinBtn = document.getElementById("projectMinBtn");
const projectsModal = document.getElementById("projectsModal");
const projectsBtn =document.getElementById("projectsBtn");
const projectsCloseBtn = document.getElementById("projectsCloseBtn");
const projectsTaskbar = document.getElementById("projectsTaskbar");

// open projects modal button, show taskbar icon//
projectsBtn.onclick = function () {
    projectsModal.style.display = "block"
    projectsTaskbar.style.display = "block"
}

// close projects modal button, hide taskbar icon//
projectsCloseBtn.onclick = function(){
    projectsModal.style.display = "none";
    projectsTaskbar.style.display = "none";
}

// minimize projects modal //
projectMinBtn.onclick = function() {
    projectsModal.style.display = "none";
}

//open projects modal from taskbar icon function//
projectsTaskbar.onclick = function(){
    projectsModal.style.display = "block";
}



// modal overlap function //


projectsModal.onclick = function(){
    projectsModal.style.zIndex = 9999;
    compModal.style.zIndex = 1;
}
compModal.onclick = function() {
    compModal.style.zIndex = 9999;
    projectsModal.style.zIndex = 1;
}





//CPU usage widget function //


function updateCPUUsage(){
    
    const cpuUsage = (Math.random() * (7- 0) + 0).toFixed(1); //  radnom number between 5% and 10%//
    document.getElementById("cpuWidget").textContent = `CPU: ${cpuUsage}%`
}

setInterval(updateCPUUsage, 1000); // updates every second //





// navbar time widget function //


let now = new Date();
let currenTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit'});

document.getElementById("navTime").textContent = `${currenTime}`;

 //navbar desktop brighntess function //

 const range = document.getElementById("range");
const html = document.getElementById("html")

range.addEventListener("change", function(){
    html.style.filter = "brightness(" + range.value + "%)";
});