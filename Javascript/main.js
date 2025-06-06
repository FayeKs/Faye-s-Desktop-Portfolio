// Splash screen and desktop functions

const splashScreen = document.getElementById("splashScreen");
const desktop = document.getElementById("desktop");
const startBtn = document.getElementById("startButton");

startBtn.addEventListener('click', function() {
  splashScreen.style.display = "none";
  desktop.style.display = "block";
});

// Splash screen input typing animation 
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("pwd");

const usernameText = "FayeS";
const passwordText = "****";

let usernameIndex= 0;
let passwordIndex = 0;

function typeWriter(input, text, index, speed, callback){
  if (index < text.length) {
    input.value += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(input, text, index, speed, callback), speed);
  } else if (callback) {
    callback();
  }
}

typeWriter(usernameInput, usernameText, usernameIndex, 300, () => {
  typeWriter(passwordInput, passwordText, passwordIndex, 300, () => {
    startBtn.classList.add("btn-press");
  });
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
  const cpuUsage = (Math.random() * (6 - 0) + 0).toFixed(1); //  radnom number between 0% and 6%//
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
    }, 2000); //delay to trigger the animation
  }
  
  // slide out function 
  
  function slideOutModal() {
    slideIn.style.right = "-300px";
    setTimeout(() => {
      slideIn.style.display = "none"
    }, 500) // wait for the slide-out animation to finsish
  }
  
 
// show modal on desktop load

startBtn.onclick = () => {
  slideIn.style.display = "block"
  setTimeout(() => {

    slideInModal(); // slide in when page loads
  }, 500); // delay 
  
  
  setTimeout(() => {
    slideOutModal();
  }, 6000) // modal stays open for a few seconds before sliding out
}


//Navbar brightness popup
const brightnessBtn = document.getElementById("brightnessBtn");
const brightnessPopup = document.getElementById("brightnessPopup")

brightnessPopup.style.display = "none";

//show/hide range popup on hover (click function for mobile)
brightnessBtn.addEventListener("mouseover", () => brightnessPopup.style.display = "block")
brightnessPopup.addEventListener("mouseover", () => brightnessPopup.style.display = "block");
brightnessPopup.addEventListener("mouseout", () => brightnessPopup.style.display = "none");
brightnessBtn.addEventListener('mouseout', () => brightnessPopup.style.display = "none")
brightnessPopup.addEventListener('mouseover', () => navPopup.style.display = "block")
// sunIcon.addEventListener("mouseout",() => brightnessPopup.style.display = "none")

brightnessBtn.addEventListener("click", () => {
 brightnessPopup.style.display = brightnessPopup.style.display === "none" || brightnessPopup.style.display === "" ? "block" : "none"
});
  

desktop.addEventListener("click", function() {
  if (brightnessPopup.style.display === "block") {
    brightnessPopup.style.display = "none";
  }
})


//Navbar down arrow popup
const navPopup = document.getElementById("navPopup");
const navArrow = document.getElementById("navArrow");

navPopup.style.display = "none"; //ensures popup in hidden initially//

// Show/hide navbar popup on hover (click fuction for mobile) and hide when click desktop or arrow icon
navArrow.addEventListener("mouseover", () => navPopup.style.display = "block");
navPopup.addEventListener("mouseover", () => navPopup.style.display = "block");
navPopup.addEventListener("mouseout", () => navPopup.style.display = "none");
// navArrow.addEventListener("mouseout", () => navPopup.style.display = "none")

navArrow.addEventListener("click", () => {
  navPopup.style.display = navPopup.style.display === "none" || navPopup.style.display === "" ? "block" : "none";
});



desktop.addEventListener("click", function() {
  if (navPopup.style.display === "block") {
    navPopup.style.display = "none";
  }
})

const themes = document.getElementById("themes")
const themesPopup = document.getElementById("themesPopup");

themesPopup.style.display = "none";

themes.addEventListener("mouseover", () => themesPopup.style.display = "block");
themesPopup.addEventListener("mouseover", () => navPopup.style.display = "block")
themesPopup.addEventListener("mouseover", () => themesPopup.style.display = "block");
themesPopup.addEventListener("mouseout", () => themesPopup.style.display = "none")
themesPopup.addEventListener("mouseout", () => navPopup.style.display = "none");
navPopup.addEventListener("mouseout", () => themesPopup.style.display ="none")

// Modal and taskbar elements
const modals = {
  compModal: document.getElementById("compModal"),
  projectsModal: document.getElementById("projectsModal"),
  tictactoeModal: document.getElementById("tictactoeModal"),
  learnMoreModal: document.getElementById("learnMoreModal"),
  terminalModal: document.getElementById("terminalModal"),
  calculatorModal: document.getElementById("calculatorModal")
};


const taskbars = {
  compTaskbar: document.getElementById("compTaskbar"),
  projectsTaskbar: document.getElementById("projectsTaskbar"),
  tictactoeTaskbar: document.getElementById("tictactoeTaskbar"),
  terminalTaskbar: document.getElementById("terminalTaskbar"),
  calculatorTaskbar: document.getElementById("calculatorTaskbar")
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
  learnMoreBtn: document.getElementById("learnMoreBtn"),
  learnMoreCloseBtn: document.getElementById("learnMoreCloseBtn"),
  terminalBtn: document.getElementById("terminalBtn"),
  terminalCloseBtn:document.getElementById("terminalCloseBtn"),
  terminalMinBtn: document.getElementById("terminalMinBtn"),
  calcBtn: document.getElementById("calcBtn"),
  calcCloseBtn: document.getElementById("calcCloseBtn"),
  calcMinBtn: document.getElementById("calcMinBtn")
}


// Utility function to open modal and show taskbar icon

function openModal(modal, taskbars){
  modal.style.display = "block";
  taskbars.style.display = "block";
  setZIndex(modal);
}

// Utiltiy function to close modal and hide taskbar icon

function closeModal(modal, taskbars){
  modal.style.display = "none";
  taskbars.style.display = "none";
}

// Utility function to minimize modal 

function minimizeModal(modal){
  modal.style.display = "none";
  
}

// Utility function to set z-index for active modal
function setZIndex(activeModal){
  const modals = [compModal, projectsModal, tictactoeModal, learnMoreModal, terminalModal, calculatorModal];
  modals.forEach(modal => modal.style.zIndex = modal === activeModal ? 9999 : 1);
}

// Initialize taskbar visbility


Object.values(taskbars).forEach(taskbar => taskbar.style.display = "none");

// Open Modals/Make draggable

buttons.compBtn.onclick = () => {
  openModal(modals.compModal, taskbars.compTaskbar);
  dragModal(modals.compModal);
  }
buttons.projectsBtn.onclick = () => {
  openModal(modals.projectsModal, taskbars.projectsTaskbar);
  dragModal(modals.projectsModal);
}
buttons.tictactoeBtn.onclick = () => {
  openModal(modals.tictactoeModal, taskbars.tictactoeTaskbar);
  dragModal(modals.tictactoeModal);
}
buttons.learnMoreBtn.onclick = () => {
  openModal(modals.learnMoreModal);
  dragModal(modals.learnMoreModal);
}
buttons.terminalBtn.onclick = () => {
  openModal(modals.terminalModal, taskbars.terminalTaskbar);
  dragModal(modals.terminalModal);
  document.getElementById('terminalInput').focus(); // fixes input typing issue by setting the input focus when terminal opens
}
buttons.calcBtn.onclick = () => {
  openModal(modals.calculatorModal, taskbars.calculatorTaskbar);
  dragModal(modals.calculatorModal);

}

// Close Modals

buttons.compCloseBtn.onclick = () => closeModal(modals.compModal, taskbars.compTaskbar);
buttons.projectsCloseBtn.onclick = () => closeModal(modals.projectsModal, taskbars.projectsTaskbar);
buttons.tictactoeCloseBtn.onclick = () => closeModal(modals.tictactoeModal, taskbars.tictactoeTaskbar);
buttons.learnMoreCloseBtn.onclick = () => closeModal(modals.learnMoreModal);
buttons.terminalCloseBtn.onclick = () => closeModal(modals.terminalModal, taskbars.terminalTaskbar);
buttons.calcCloseBtn.onclick = () => closeModal(modals.calculatorModal, taskbars.calculatorTaskbar);


// Minimize modals

buttons.compMinBtn.onclick = () => minimizeModal(modals.compModal);
buttons.projectsMinBtn.onclick = () => minimizeModal(modals.projectsModal);
buttons.tictactoeMinBtn.onclick = () => minimizeModal(modals.tictactoeModal);
buttons.terminalMinBtn.onclick = () => minimizeModal(modals.terminalModal);
buttons.calcMinBtn.onclick = () => minimizeModal(modals.calculatorModal);

// Click on taskbar to open modal


taskbars.compTaskbar.onclick = () => openModal(modals.compModal, taskbars.compTaskbar);
taskbars.projectsTaskbar.onclick = () => openModal(modals.projectsModal, taskbars.projectsTaskbar);
taskbars.tictactoeTaskbar.onclick = () => openModal(modals.tictactoeModal, taskbars.tictactoeTaskbar);
taskbars.terminalTaskbar.onclick = () => openModal(modals.terminalModal, taskbars.terminalTaskbar);
taskbars.calculatorTaskbar.onclick = () => openModal(modals.calculatorModal, taskbars.calculatorTaskbar);

// Modal overlap handling 

Object.values(modals).forEach(modal => {
  modal.onclick = () => setZIndex(modal);
})


// Ensures compTaskbar is showing and is draggable intially

window.addEventListener('DOMContentLoaded', function() {
  compTaskbar.style.display = "block";
  dragModal(modals.compModal)
})


//Draggable modals function (window.event is depriciated)


function dragModal(modal) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  
  if (modal) {
    // if present, the header is where you move the DIV from:
    modal.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    modal.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    modal.style.top = (modal.offsetTop - pos2) + "px";
    modal.style.left = (modal.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}













// pink mode/default mode desktop theme function //

const pinkThemeBtn = document.getElementById("pinkThemeBtn");
const defaultThemeBtn = document.getElementById("defaultThemeBtn");
const cyberThemeBtn = document.getElementById("cyberThemeBtn");
const body = document.body;
const myCompTheme = document.getElementById("myCompTheme");
const projectsTheme = document.getElementById("projectsTheme");
const calcTheme = document.getElementById("calcTheme");
const githubTheme = document.getElementById("githubTheme");
const profilePic = document.getElementById("profilePic");
const tictactoeTheme = document.getElementById("tictactoeTheme");
const terminalTheme = document.getElementById("terminalTheme");
const portfolioTheme = document.getElementById("portfolioTheme");
const batteryTheme = document.getElementById("batteryTheme");
const questionTheme = document.getElementById("questionTheme");

// defaultThemeBtn.style.display = "none";

function activatePinkTheme() {
  // pinkThemeBtn.style.display = "none";
  // defaultThemeBtn.style.display = "block";
  body.classList.add("pink-theme");
  body.classList.remove("default-theme");
  body.classList.remove("cyber-theme");
  myCompTheme.src = "assets/icons/icons8-old-computer-80 (2).png";
  projectsTheme.src = "assets/icons/icons8-folder-40 (1).png";
  calcTheme.src = "assets/icons/icons8-calculator-64 (1).png";
  githubTheme.src = "assets/icons/icons8-github-40.png";
  profilePic.src = "assets/images/IMG_0645.JPG";
  tictactoeTheme.src = "assets/icons/icons8-tic-tac-toe-53 (1).png";
  terminalTheme.src = "assets/icons/icons8-terminal-80.png";
  portfolioTheme.src = "assets/icons/icons8-portfolio-48 (2).png";
  navArrow.src = "assets/icons/icons8-arrow-down-24.png";
  batteryTheme.src = "assets/icons/icons8-battery-30.png";
  questionTheme.src = "assets/icons/icons8-question-mark-30.png";
}

function activateDefaultTheme() {
  // defaultThemeBtn.style.display = "none";
  // pinkThemeBtn.style.display = "block";
  body.classList.add("default-theme");
  body.classList.remove("pink-theme");
  body.classList.remove("cyber-theme");
  myCompTheme.src = "assets/icons/icons8-old-computer-80 (3).png";
  projectsTheme.src = "assets/icons/icons8-folder-40.png";
  calcTheme.src = "assets/icons/icons8-calculator-64.png";
  githubTheme.src = "assets/icons/icons8-github-80.png";
  tictactoeTheme.src = "assets/icons/icons8-tic-tac-toe-53.png";
  profilePic.src = "assets/images/IMG_0645.JPG";
  terminalTheme.src = "assets/icons/icons8-console-40.png";
  portfolioTheme.src = "assets/icons/icons8-portfolio-48.png";
  navArrow.src = "assets/icons/icons8-arrow-down-24.png"
  batteryTheme.src = "assets/icons/icons8-battery-30.png";
  questionTheme.src = "assets/icons/icons8-question-mark-30.png";
}

function activateCyberTheme() {
  body.classList.add("cyber-theme");
  body.classList.remove("pink-theme");
  body.classList.remove("default-theme");
  myCompTheme.src = "assets/icons/icons8-old-computer-40.png";
  projectsTheme.src = "assets/icons/icons8-folder-40 (2).png";
  calcTheme.src = "assets/icons/icons8-calculator-64 (2).png";
  githubTheme.src = "assets/icons/icons8-github-40 (1).png";
  tictactoeTheme.src = "assets/icons/icons8-tic-tac-toe-53 (2).png";
  terminalTheme.src = "assets/icons/icons8-terminal-40.png";
  portfolioTheme.src = "assets/icons/icons8-portfolio-48 (1).png";
  navArrow.src = "assets/icons/icons8-sort-down-24.png";
  batteryTheme.src = "assets/icons/icons8-battery-30 (1).png"
  questionTheme.src = "assets/icons/icons8-question-mark-30 (1).png"
}

pinkThemeBtn.onclick = activatePinkTheme;
defaultThemeBtn.onclick = activateDefaultTheme;
cyberThemeBtn.onclick = activateCyberTheme;


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
  



// Calculator functions

function dis(val) {
  document.getElementById("result").value += val
}

function myFunction(event) {
  if (event.key == '0' || event.key == '1'
      || event.key == '2' || event.key == '3'
      || event.key == '4' || event.key == '5'
      || event.key == '6' || event.key == '7'
      || event.key == '8' || event.key == '9'
      || event.key == '+' || event.key == '-'
      || event.key == '*' || event.key == '/'
      || event.key == '%')
      document.getElementById("result").value += event.key;
}
const cal = document.getElementById("calcu");

cal.onkeydown= myFunction;
cal.onkeyup = function (event) {
  if (event.keyCode === 13) {
      console.log("Enter");
      let x = document.getElementById("result").value;
      console.log(x);
      solve();
  }
}

// function that evaluates the digit and return result(added math.js library)

function solve() {
let x = document.getElementById("result").value
let y = math.evaluate(x)
document.getElementById("result").value = y
}

//function that clears the display

function clr() {
  document.getElementById("result").value = ""
}

// function that handles the backspace

function backspace() {
  let currentValue = document.getElementById("result").value;
  let newValue = currentValue.slice(0, -1);

  document.getElementById("result").value = newValue;
}



//Tic-Tac-Toe Game function 

const tiles = document.querySelectorAll('.tile')
const resetBtn = document.querySelector('#reset');
const playerDisplay = document.querySelector('.display-player');
const announcer = document.querySelector('.announcer');

let board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X';
let isGameActive = true;

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';

//index-based win conditions
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

playerDisplay.textContent = "Let's play! You'll be Player X"  // initial msg before first game

//event listener for player moves
tiles.forEach((tile, index) => {
  tile.addEventListener('click', () => playerMove(index))
})

// function to handle player's move

function playerMove(index) {
  if (isGameActive && board[index] === ''){
    board[index] = 'X';
    tiles[index].textContent = 'X';
    checkGameStatus();
    if (isGameActive) {
      setTimeout(() => {
        playerDisplay.textContent = `Player O's move`
      }, 1000)
      setTimeout(() => {
        compuerMove();
      }, 3000); // 3 second delay before computer's move
    }
  }
}

// function to handle computer's move

function compuerMove(){
  if (!isGameActive) return;
  setTimeout(() => {
    playerDisplay.textContent = `Player X's move`
  }, 1000); // 1 second delay for msg

   //Randomly pick an empty cell for the compuer to play
   let availableTile = board
   .map((value, index) =>  value === '' ? index : null)
   .filter(index => index !== null);

   const randomIndex = availableTile[Math.floor(Math.random() * availableTile.length)]
  board[randomIndex] = 'O'
  tiles[randomIndex].textContent = 'O'
  checkGameStatus();

}

// function to check if there is a winner

function checkGameStatus() {
  let winner = null;

  //check for winning combination
  winningConditions.forEach(condition => {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]){
      winner = board[a];
    }
  });

  // if we found a winner

  if(winner) {
    isGameActive = false;
    setTimeout(() => {
      playerDisplay.textContent = `Player ${winner} wins! Let's play again!`
    }, 1000); // 1 second delay for msg
    return;
  }

  // if there is a draw (no empty cells left)

  if (!board.includes('')) {
    isGameActive = false;
    playerDisplay.textContent = "It's a draw!"
    setTimeout(() => {
      playerDisplay.textContent = `Let's play again!`
    }, 2000) // 1 second delay for msg
    return;
  }

  // switch to new player if game is still active

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  
}

// reset game function

resetBtn.addEventListener('click', () => {
  board = ['', '', '', '', '', '', '', '', ''];
  isGameActive = true;
  tiles.forEach(tile => tile.textContent = '');
  playerDisplay.textContent = 'Player X, your move!'
})




// Terminal functions

document.addEventListener("DOMContentLoaded", function() {
  const terminalInput = document.getElementById("terminalInput");
  const terminalOutput = document.getElementById("terminalOutput");

  const commands = {
    projects: "film-forecast",
    date: new Date().toString(),
    rmrf: "Nice try, but i like existing ",
    skills: "HTML, CSS, JavaScript, React, TypeScript, SCSS, Git, Linux",
    why: "why not?"
  };

  function processCommand(input) {
    let output = "";
    const args = input.split(" ");
    const command = args[0];

    if (command === "echo") {
      output = args.slice(1).join(" ");
    } else if (commands[command]) {
      output = commands[command];
    } else if (command === "clear") {
      terminalOutput.innerHTML = "";
      return;
    } else if (command === "reboot") { 
      location.reload();
    } else if (command === "pink"){
      activatePinkTheme();
    } else if (command === "default"){
      activateDefaultTheme();
    } else if (command === "cybergreen"){
      activateCyberTheme();
    }
    else {
      output = `command not found: ${command}.`;
    }
    terminalOutput.innerHTML += `<div><span class="prompt">guest@fayesdesktop: ~$ </span> ${input}</div>`;
    terminalOutput.innerHTML += `<div>${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
  terminalInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      const input = terminalInput.value.trim();
      if (input) processCommand(input);
      terminalInput.value = "";
    }
  });
});

const portfolioBtn = document.getElementById("portfolioBtn");

portfolioBtn.onclick = () => {
  alert("Sorry! Main portfolio is under maintainence")
}