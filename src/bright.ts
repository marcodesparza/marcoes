document.addEventListener("DOMContentLoaded", () => {
    const colorDiv = document.getElementsByClassName("notes") 

    if (colorDiv) {
        colorDiv.addEventListener("mouseenter", () => {
            colorDiv.style.backgroundColor = "lightgreen";
        });

        colorDiv.addEventListener("mouseleave", () => {
            colorDiv.style.backgroundColor = "lightblue";
        });
    }
});
