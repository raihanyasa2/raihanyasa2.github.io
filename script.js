function executeCode() {
    var code = document.getElementById("input").value;
    eval(code);
}

function setContent(content) {
    document.getElementById("content").innerHTML = content;
}

function openWindow(url) {
    window.open(url, "_blank");
}
