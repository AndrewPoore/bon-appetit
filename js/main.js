//last HTML modification
function lastModified() {
    document.getElementById('modified').textContent = `Last Modification: ${document.lastModified}`;
}

window.onload = function() {
    lastModified();
}