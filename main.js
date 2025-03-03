// navbar time widget function //

let now = new Date();
let currenTime = now.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

document.getElementById("navTime").textContent = `${currenTime}`;

//navbar desktop brighntess function //

const range = document.getElementById("range");
const html = document.getElementById("html");

range.addEventListener("change", function () {
  html.style.filter = "brightness(" + range.value + "%)";
});

// navbar popup function //
const navPopup = document.getElementById("navPopup");
const navArrow = document.getElementById("navArrow");

navPopup.style.display = "none"; //ensures popup in hidden initially//

navArrow.addEventListener("mouseover", function (e) {
  navPopup.style.display = "block";
});

navPopup.addEventListener("mouseover", function (e) {
  navPopup.style.display = "block";
});

navPopup.addEventListener("mouseout", function (e) {
  navPopup.style.display = "none";
});

// open, close, minimize button functions, taskbar icons funtion //

const compCloseBtn = document.getElementById("compCloseBtn");
const compMinBtn = document.getElementById("minBtn");

const compModal = document.getElementById("compModal");
const compBtn = document.getElementById("compBtn");
const compTaskbar = document.getElementById("compTaskbar");

// open computer modal button, show taskbar icon //
compBtn.onclick = function () {
  compModal.style.display = "block";
  compTaskbar.style.display = "block";
};
//close computer modal button, hide taskbar icon//
compCloseBtn.onclick = function () {
  compModal.style.display = "none";
  compTaskbar.style.display = "none";
};

//minimize computer modal button funtion//
compMinBtn.onclick = function () {
  compModal.style.display = "none";
};


const projectMinBtn = document.getElementById("projectMinBtn");
const projectsModal = document.getElementById("projectsModal");
const projectsBtn = document.getElementById("projectsBtn");
const projectsCloseBtn = document.getElementById("projectsCloseBtn");
const projectsTaskbar = document.getElementById("projectsTaskbar");

projectsTaskbar.style.display = "none";

//open projects modal from taskbar icon function//
projectsTaskbar.onclick = function () {
  projectsModal.style.display = "block";
  projectsModal.style.zIndex = 9999;
  compModal.style.zIndex = 1;
  tictactoeModal.style.zIndex = 1;
};
// open projects modal button, show taskbar icon//
projectsBtn.onclick = function () {
  projectsModal.style.display = "block";
  projectsTaskbar.style.display = "block";
};

//open modal from taskbar icon function//
compTaskbar.onclick = function () {
  compModal.style.display = "block";
  compModal.style.zIndex = 9999;
  projectsModal.style.zIndex = 1;
  tictactoeModal.style.zIndex = 1;
};
// close projects modal button function, hide taskbar icon//
projectsCloseBtn.onclick = function () {
  projectsModal.style.display = "none";
  projectsTaskbar.style.display = "none";
};

// minimize projects modal function//
projectMinBtn.onclick = function () {
  projectsModal.style.display = "none";
};


//project under maintenence alert function //
const projectButtons = document.querySelectorAll(".project");

projectButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Sorry! This project is under maintenence.");
  });
});





// Tic-Tac-Toe modal 

const tictactoeModal = document.getElementById("tictactoeModal");
const tictactoeBtn = document.getElementById("tictactoeBtn");
const tictactoeTaskbar = document.getElementById("tictactoeTaskbar");
const tictactoeCloseBtn = document.getElementById("tictactoeCloseBtn");
const tictactoeMinBtn = document.getElementById("tictactoeMinBtn");

tictactoeTaskbar.style.display = "none"

// open tictactoe modal, show taskbar icon 

tictactoeBtn.onclick = function() {
  tictactoeModal.style.display = "block"
  tictactoeTaskbar.style.display = "block"
}

// open tictactoe modal from taskbar function

tictactoeTaskbar.onclick = function() {
  tictactoeModal.style.display = "block";
  tictactoeModal.style.zIndex = "9999";
  projectsModal.style.zIndex = 1;
  compModal.style.zIndex =1;
}

// close tictactoe modal function 

tictactoeCloseBtn.onclick = function(){
  tictactoeModal.style.display = "none"
  tictactoeTaskbar.style.display = "none"
}

tictactoeMinBtn.onclick = function() {
  tictactoeModal.style.display = "none";
}




// modal overlap function //

projectsModal.onclick = function() {
  projectsModal.style.zIndex = 9999;
  compModal.style.zIndex = 1;
  tictactoeModal.style.zIndex = 1;
};
compModal.onclick = function () {
  compModal.style.zIndex = 9999;
  projectsModal.style.zIndex = 1;
  tictactoeModal.style.zIndex = 1;
};

tictactoeModal.onclick = function (){
  tictactoeModal.style.zIndex = 9999;
  projectsModal.style.zIndex = 1;
  compModal.style.zIndex = 1;
}

//CPU usage widget function //

function updateCPUUsage() {
  const cpuUsage = (Math.random() * (7 - 0) + 0).toFixed(1); //  radnom number between 5% and 10%//
  document.getElementById("cpuWidget").textContent = `CPU: ${cpuUsage}%`;
}

setInterval(updateCPUUsage, 1000); // updates every second //

// pink mode/default mode desktop theme function //

const pinkThemeBtn = document.getElementById("pinkTheme");
const defaultThemeBtn = document.getElementById("defaultTheme");
const body = document.body;
const myCompTheme = document.getElementById("myCompTheme");
const projectsTheme = document.getElementById("projectsTheme");
const calcTheme = document.getElementById("calcTheme");
const githubTheme = document.getElementById("githubTheme");


defaultThemeBtn.style.display = "none";

function activatePinkTheme() {
  pinkThemeBtn.style.display = "none";
  defaultThemeBtn.style.display = "block";
  body.classList.add("pink-theme");
  body.classList.remove("default-theme");
  myCompTheme.src = "/assets/icons/icons8-old-computer-80 (2).png";
  projectsTheme.src = "/assets/icons/icons8-folder-40 (1).png";
  calcTheme.src = "/assets/icons/icons8-calculator-64 (1).png";
  githubTheme.src = "/assets/icons/icons8-github-40.png";
}

function activateDefaultTheme() {
  defaultThemeBtn.style.display = "none";
  pinkThemeBtn.style.display = "block";
  body.classList.add("default-theme");
  body.classList.remove("pink-theme");
  myCompTheme.src = "/assets/icons/icons8-old-computer-80 (1).png";
  projectsTheme.src = "/assets/icons/icons8-folder-40.png";
  calcTheme.src = "/assets/icons/icons8-calculator-64.png";
  githubTheme.src = "/assets/icons/icons8-github-80.png";
}

pinkThemeBtn.onclick = activatePinkTheme;
defaultThemeBtn.onclick = activateDefaultTheme;
