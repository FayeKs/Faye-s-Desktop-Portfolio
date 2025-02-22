// open and close button functions //

const compModal = document.getElementById("compModal");
const compBtn = document.getElementById("compBtn");
const closeBtn = document.getElementById("closeBtn")

// open computer modal button //
compBtn.onclick = function() {
    compModal.style.display = "block";
}
//close computer modal button//
closeBtn.onclick = function() {
    compModal.style.display = "none";
}