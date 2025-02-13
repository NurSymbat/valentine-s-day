document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const btnContainer = document.getElementById("btnContainer");
    const textElement = document.querySelector(".text p");
    
    let noClickCount = 0;
    const noTexts = ["Are you sure?", "Are you really sure?", "Pookie please...", "Just think about it!", "I will be sad!", ":(", "I khow you want"];

    noButton.addEventListener("click", function () {
        if (noClickCount < noTexts.length) {
            noButton.textContent = noTexts[noClickCount];
            noClickCount++;
        }
        if (noClickCount === noTexts.length) {
            noButton.style.visibility = "hidden";
        }
    });

    yesButton.addEventListener("click", function () {
        yesButton.style.visibility = "hidden";
        noButton.style.display = "none";
        textElement.textContent = "That was easy, wasn't it? <3 ❤️";
    });
    
});

