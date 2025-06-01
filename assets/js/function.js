function hamburger() {
    let menuTl = gsap.timeline({ paused: true });

    menuTl.from(".mobileheader ul a", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
    });

    let header = document.querySelector(".mobileheader")
    document.querySelector(".opennav").addEventListener("click", () => {
        header.style.width = "100%"
        menuTl.play(0);
    });

    document.querySelector(".closenav").addEventListener("click", () => {
        header.style.width = "0%"
    })
}


function showimages() {
    let showimagebox = document.querySelector(".showfullimages");
    let fullimage = document.querySelector(".showfullimages div #showfullimages");
    let allimages = document.querySelectorAll(".images");
    let closebox = document.querySelector(".showfullimages .closebox");

    allimages.forEach((images) => {
        images.addEventListener("click", function () {
            showimagebox.style.scale = "1";
            fullimage.src = images.src;

        })
    });

    closebox.addEventListener("click", function () {
        showimagebox.style.scale = "0";
    })
}

hamburger()
showimages()