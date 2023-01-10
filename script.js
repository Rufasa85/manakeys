
const setupEl = document.querySelector("#setup");
const punchlineEl = document.querySelector("#punchline");
const showPunchEl = document.querySelector("#punchline");
const showPunchBtn = document.querySelector("#show-punchline");
const showNewBtn = document.querySelector("#new-joke");

showPunchBtn.addEventListener("click", function () {
    setupEl.setAttribute("style", "display:none;");
    punchlineEl.setAttribute("style", "display:block;");
    showPunchBtn.setAttribute("style", "display:none;");
    showNewBtn.setAttribute("style", "display:block;");
});

