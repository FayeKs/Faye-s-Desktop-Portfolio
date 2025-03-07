// Splash screen and desktop functions

const splashScreen = document.getElementById("splashScreen");
const desktop = document.getElementById("desktop");
const startBtn = document.getElementById("start-button");

startBtn.addEventListener('click', function() {
  splashScreen.style.display = "none";
  desktop.style.display = "block";
});

// Disabled Input function
const inputUsername = document.getElementById("username").addEventListener("keydown", function(event) {
  event.preventDefault();

});
const inputPwd = document.getElementById("pwd").addEventListener("keydown", function(event) {
  event.preventDefault();

});


// Navbar time widget function //

let now = new Date();
let currenTime = now.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

document.getElementById("navTime").textContent = `${currenTime}`;

//CPU usage widget function //

function updateCPUUsage() {
  const cpuUsage = (Math.random() * (7 - 0) + 0).toFixed(1); //  radnom number between 5% and 10%//
  document.getElementById("cpuWidget").textContent = `CPU: ${cpuUsage}%`;
}

setInterval(updateCPUUsage, 1000); // updates every second //

//Navbar desktop brighntess function //

const range = document.getElementById("range");
const html = document.getElementById("html");

range.addEventListener("change", function () {
  html.style.filter = "brightness(" + range.value + "%)";
});



// Slide-In popup function 

const slideIn = document.getElementById("slideIn")

  
  function slideInModal() {
    slideIn.style.display = "block"
    setTimeout(() => {
      slideIn.style.right = "2px" // slide in the modal
    }, 3000); //delay to trigger the animation
  }
  
  // slide out function 
  
  function slideOutModal() {
    slideIn.style.right = "-300px";
    setTimeout(() => {
      slideIn.style.display = "none"
    }, 500) // wait for the slide-out animation to finsish
  }
  
 
// show modal on page load

startBtn.onclick = () => {
  slideIn.style.display = "block"
  setTimeout(() => {

    slideInModal(); // slide in when page loads
  }, 3000); // 3 seconds delay 
  
  
  setTimeout(() => {
    slideOutModal();
  }, 15000) // modal stays open for a few seconds before sliding out
}






// Utility function to open modal and show taskbar icon

function openModal(modal, taskbar){
  modal.style.display = "block";
  taskbar.style.display = "block"
  setZIndex(modal);
}

// Utiltiy function to close modal and hide taskbar icon

function closeModal(modal, taskbar){
  modal.style.display = "none";
  taskbar.style.display = "none";
}

// Utility function to minimize modal 

function minimizeModal(modal){
  modal.style.display = "none";
  
}

// Utility function to set z-index for active modal
function setZIndex(activeModal){
  const modals = [compModal, projectsModal, tictactoeModal];
  modals.forEach(modal => modal.style.zIndex = modal === activeModal ? 9999 : 1);
}

//Navbar popup
const navPopup = document.getElementById("navPopup");
const navArrow = document.getElementById("navArrow");

navPopup.style.display = "none"; //ensures popup in hidden initially//

// Show/hide navbar popup on hover (click fuction for mobile)
navArrow.addEventListener("mouseover", () => navPopup.style.display = "block");
navPopup.addEventListener("mouseover", () => navPopup.style.display = "block");
navPopup.addEventListener("mouseout", () => navPopup.style.display = "none");

navArrow.addEventListener("click", () => {
  if (navPopup.style.display === "none" || navPopup.style.display === "") {
    navPopup.style.display = "block"
  } else { 
    navPopup.style.display = "none"
  }
});



// Modal and taskbar elements
const modals = {
  compModal: document.getElementById("compModal"),
  projectsModal: document.getElementById("projectsModal"),
  tictactoeModal: document.getElementById("tictactoeModal"),
};


const taskbars = {
  compTaskbar: document.getElementById("compTaskbar"),
  projectsTaskbar: document.getElementById("projectsTaskbar"),
  tictactoeTaskbar: document.getElementById("tictactoeTaskbar"),
}

const buttons = {
  compBtn: document.getElementById("compBtn"),
  compCloseBtn: document.getElementById("compCloseBtn"),
  compMinBtn: document.getElementById("minBtn"),
  projectsBtn: document.getElementById("projectsBtn"),
  projectsCloseBtn: document.getElementById("projectsCloseBtn"),
  projectsMinBtn: document.getElementById("projectMinBtn"),
  tictactoeBtn: document.getElementById("tictactoeBtn"),
  tictactoeCloseBtn: document.getElementById("tictactoeCloseBtn"),
  tictactoeMinBtn: document.getElementById("tictactoeMinBtn"),
}



// Initialize taskbar visbility


Object.values(taskbars).forEach(taskbar => taskbar.style.display = "none");

// Open Modals

buttons.compBtn.onclick = () => openModal(modals.compModal, taskbars.compTaskbar);
buttons.projectsBtn.onclick = () => openModal(modals.projectsModal, taskbars.projectsTaskbar);
buttons.tictactoeBtn.onclick = () => openModal(modals.tictactoeModal, taskbars.tictactoeTaskbar);


// Close Modals

buttons.compCloseBtn.onclick = () => closeModal(modals.compModal, taskbars.compTaskbar);
buttons.projectsCloseBtn.onclick = () => closeModal(modals.projectsModal, taskbars.projectsTaskbar);
buttons.tictactoeCloseBtn.onclick = () => closeModal(modals.tictactoeModal, taskbars.tictactoeTaskbar);



// Minimize modals

buttons.compMinBtn.onclick = () => minimizeModal(modals.compModal);
buttons.projectsMinBtn.onclick = () => minimizeModal(modals.projectsModal);
buttons.tictactoeMinBtn.onclick = () => minimizeModal(modals.tictactoeModal);



// Click on taskbar to open modal


taskbars.compTaskbar.onclick = () => openModal(modals.compModal, taskbars.compTaskbar);
taskbars.projectsTaskbar.onclick = () => openModal(modals.projectsModal, taskbars.projectsTaskbar);
taskbars.tictactoeTaskbar.onclick = () => openModal(modals.tictactoeModal, taskbars.tictactoeTaskbar);


// Modal overlap handling 

Object.values(modals).forEach(modal => {
  modal.onclick = () => setZIndex(modal);
})


// Ensures compTaskbar is showing intially

window.addEventListener('DOMContentLoaded', function() {
  compTaskbar.style.display = "block";
})


//project under maintenence alert function //
const projectButtons = document.querySelectorAll(".project");

projectButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Sorry! This project is under maintenence.");
  });
});











// pink mode/default mode desktop theme function //

const pinkThemeBtn = document.getElementById("pinkTheme");
const defaultThemeBtn = document.getElementById("defaultTheme");
const body = document.body;
const myCompTheme = document.getElementById("myCompTheme");
const projectsTheme = document.getElementById("projectsTheme");
const calcTheme = document.getElementById("calcTheme");
const githubTheme = document.getElementById("githubTheme");
const profilePic = document.getElementById("profilePic");
const tictactoeTheme = document.getElementById("tictactoeTheme");

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
  profilePic.src = "/assets/images/profilepic.jpg";
  tictactoeTheme.src = "/assets/icons/icons8-tic-tac-toe-53 (1).png"
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
  tictactoeTheme.src = "/assets/icons/icons8-tic-tac-toe-53.png";
  // profilePic.src = "/assets/images/IMG_0034 (2).jpg";
}

pinkThemeBtn.onclick = activatePinkTheme;
defaultThemeBtn.onclick = activateDefaultTheme;


// Shut Down Crt Screen Function 
 const shutDownBtn = document.getElementById("shutDownBtn");
 const shutDownScreen = document.getElementById("shutDownScreen");

 shutDownBtn.addEventListener('click', function() {
  desktop.style.display = "none";
  shutDownScreen.style.display = "block";

 })

// Reboot Button function 

document.getElementById("rebootBtn").addEventListener('click', function(){
  location.reload()
})
  

