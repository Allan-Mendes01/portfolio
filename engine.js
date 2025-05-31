;(function () {
    const btnMenu = document.getElementById("btnMenu")
    const nav = document.querySelector("nav")

    btnMenu.addEventListener("click", function () {
        const list = document.querySelector(".list_nav")
        
        if (list.style.left) {
            list.style.left = ""
            btnMenu.style.position = ""
            btnMenu.style.right = ""
        }else{
            list.style.left = "0"
            btnMenu.style.position = "fixed"
            btnMenu.style.left = "80vw"
        }

    })

    function handleScrollUp(event) {
        nav.style.position = "fixed"
        nav.style.top = ""

    }
    function handleScrollDown(event) {
        nav.style.top = "-80px"
        nav.style.position = "fixed"
    }
    
    let lastScrollPosition = window.pageYOffset;
    
    function determineScrollDirection(event) {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition) {
        handleScrollDown(event);
        } else {
        handleScrollUp(event);
        }
        
        lastScrollPosition = currentScrollPosition;
    }
    window.addEventListener("scroll", determineScrollDirection);
    
})()
