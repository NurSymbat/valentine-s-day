document.addEventListener("DOMContentLoaded", function () {
    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");
    let btnContainer = document.getElementById("btnContainer"); 

    let noTexts = ["Are you sure?", "Are you really sure?", "Pookie please...", "Just think about it!!", "I will be sad...", ":("];
    let count = 0;

    yesButton.onclick = function () {
        btnContainer.innerHTML = "<p class='big-text'>Omg! I knew so <3 ❤️</p>";
    };

    noButton.onclick = function () {
        if (count < noTexts.length) {
            noButton.innerText = noTexts[count];
            count++;
        } else {
            noButton.style.display = "none"; 
        }
    };
});
