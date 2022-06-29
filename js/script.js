window.addEventListener("load", () => {

    const menuBar = document.querySelector(".menu-bar .right"),
        btn = document.querySelector(".side-bar"),
        left = document.querySelector(".menu-bar .left"),
        bars = document.querySelector(".side-bar .fa-bars"),
        exit = document.querySelector(".side-bar .fa-x");

        let count = true

        btn.addEventListener("click", () => {
            if(count) {
                menuBar.style.display = "block";
                btn.style.background = "white";
                btn.style.color = "black";
                left.style.background = "#333333";
                bars.style.display = "none";
                exit.style.display = "block"
                count = false
            }
            else {
                menuBar.style.display = "none";
                btn.style.background = "rgba(255, 255, 255, 0.5)";
                left.style.background = "transparent";
                btn.style.color = "white";
                bars.style.display = "block";
                exit.style.display = "none"
                count = true;
            }
            content: "\f0c9";
            content: "\f06e";
        })

})