// open and close button functions, taskbar icons funtion //

const compModal = document.getElementById("compModal");
const compBtn = document.getElementById("compBtn");
const closeBtn = document.getElementById("closeBtn")
const compTaskbar = document.getElementById("compTaskbar");

// open computer modal button, show taskbar icon //
compBtn.onclick = function() {
    compModal.style.display = "block";
    compTaskbar.style.display = "block";
}
//close computer modal button, hide taskbar icon//
closeBtn.onclick = function() {
    compModal.style.display = "none"; 
    compTaskbar.style.display = "none";
}




