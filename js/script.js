window.addEventListener("load", () => {

    const sideBar = document.querySelector(".menu-bar .right"),
        btn = document.querySelector(".side-bar .fa-bars");

        let count = false

        btn.addEventListener("click", () => {
            if(count) {
                sideBar.style.display = "none"
            }
        })

})