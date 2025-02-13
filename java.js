document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const btnContainer = document.getElementById("btnContainer");
    const textElement = document.querySelector(".text p");
    
    let noClickCount = 0;
    const noTexts = ["Are you sure?", "Are you really sure?", "Pookie please...", "Just think about it!", "I will be sad!", ":("];

    noButton.addEventListener("click", function () {
        if (noClickCount < noTexts.length) {
            noButton.textContent = noTexts[noClickCount];
            noClickCount++;
        }
        if (noClickCount === noTexts.length) {
            noButton.style.display = "none";
        }
    });

    yesButton.addEventListener("click", function () {
        yesButton.style.display = "none";
        noButton.style.display = "none";
        textElement.textContent = "That was easy, wasn't it? <3 ❤️";
    });

    // Адаптация 
    function adjustButtonLayout() {
        if (window.innerWidth < 600) {
            btnContainer.style.display = "flex";
            btnContainer.style.flexDirection = "column";
            btnContainer.style.alignItems = "center";
        } else {
            btnContainer.style.display = "flex";
            btnContainer.style.flexDirection = "row";
        }
    }
    
    adjustButtonLayout();
    window.addEventListener("resize", adjustButtonLayout);
});
