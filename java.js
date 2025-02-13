document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const btnContainer = document.getElementById("btnContainer");
    const textDiv = document.querySelector(".text");

    let noButtonTexts = ["Are you sure?", "Are you really sure?", "Pookie please..." , "Just think about it!!", " I will be sad...", ":("];
    let noClickCount = 0;

    yesButton.addEventListener("click", function () {
        textDiv.innerHTML = "<p>Omg I knew it! <3 ❤️</p>"; 
        btnContainer.style.display = "none";
    });

    noButton.addEventListener("click", function () {
        if (noClickCount < noButtonTexts.length) {
            noButton.innerText = noButtonTexts[noClickCount]; 
            noClickCount++;
        } else {
            noButton.style.display = "none";
        }
    });
});
