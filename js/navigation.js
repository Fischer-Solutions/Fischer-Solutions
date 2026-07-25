const menuToggle =
document.querySelector(".menu-toggle");


const nav =
document.querySelector("nav");


const body =
document.querySelector("body");



if(menuToggle && nav){


    menuToggle.addEventListener("click",()=>{


        nav.classList.toggle("open");


        menuToggle.classList.toggle("active");


        body.classList.toggle(
            "menu-open"
        );


    });


}



/*
    Close Menu When Clicking Link
*/


const navLinks =
document.querySelectorAll("nav a");



navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        if(nav){


            nav.classList.remove(
                "open"
            );


        }


        if(menuToggle){


            menuToggle.classList.remove(
                "active"
            );


        }


        body.classList.remove(
            "menu-open"
        );


    });


});



/*
    Close Menu When Clicking Outside
*/


document.addEventListener(
"click",
(e)=>{


    if(!nav || !menuToggle)
        return;



    const clickedInside =
    nav.contains(e.target) ||
    menuToggle.contains(e.target);



    if(!clickedInside){


        nav.classList.remove(
            "open"
        );


        menuToggle.classList.remove(
            "active"
        );


        body.classList.remove(
            "menu-open"
        );


    }


});



/*
    Escape Key Close
*/


document.addEventListener(
"keydown",
(e)=>{


    if(e.key === "Escape"){


        if(nav){

            nav.classList.remove(
                "open"
            );

        }


        if(menuToggle){

            menuToggle.classList.remove(
                "active"
            );

        }


    }


});



/*
    Header Scroll Effect
*/


const header =
document.querySelector("header");



window.addEventListener(
"scroll",
()=>{


    if(!header)
        return;



    if(window.scrollY > 30){


        header.classList.add(
            "scrolled"
        );


    }else{


        header.classList.remove(
            "scrolled"
        );


    }


});



/*
    Active Page Detection
*/


const currentPage =
window.location.pathname
.split("/")
.pop();



navLinks.forEach(link=>{


    const linkPage =
    link
    .getAttribute("href")
    .split("/")
    .pop();



    if(
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ){


        link.classList.add(
            "active"
        );


    }


});



/*
    Smooth Page Transition
*/


navLinks.forEach(link=>{


    link.addEventListener(
        "click",
        function(e){


            const href =
            this.getAttribute(
                "href"
            );


            if(
                href &&
                !href.startsWith("#") &&
                !href.startsWith("http")
            ){


                e.preventDefault();



                document.body.classList.add(
                    "page-leaving"
                );


                setTimeout(()=>{


                    window.location.href =
                    href;


                },250);


            }


        }

    );


});



/*
    Disable Scroll While Menu Open
*/


const style =
document.createElement("style");


style.innerHTML = `

.menu-open {

    overflow:hidden;

}


header.scrolled {

    box-shadow:
    0 10px 40px rgba(0,0,0,.35);

}


.menu-toggle.active span:nth-child(1){

    transform:
    translateY(8px)
    rotate(45deg);

}


.menu-toggle.active span:nth-child(2){

    opacity:0;

}


.menu-toggle.active span:nth-child(3){

    transform:
    translateY(-8px)
    rotate(-45deg);

}


.page-leaving {

    opacity:0;

    transition:.25s ease;

}

`;


document.head.appendChild(style);