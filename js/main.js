//last HTML modification
function lastModified() {
    document.getElementById('modified').textContent = `Modified: ${document.lastModified}`;
}

window.onload = function() {
    lastModified();
}

// if local storage: visited != true,
// then set localStorage: visited = true
// localStorage.setItem("visited", true);
// generateWelcomeMessage() 