// open, close, minimize button functions, taskbar icons funtion //

const closeBtn = document.getElementById("closeBtn")
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
closeBtn.onclick = function() {
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




// CPU usage widget function //


function updateCPUUsage(){
    const cpuUsage = (Math.random() * (5- 0) + 0).toFixed(1); //  radnom number between 5% and 10%//
    document.getElementById("cpuWidget").textContent = `CPU: ${cpuUsage}%;`
}

setInterval(updateCPUUsage, 1000); // updates every second //