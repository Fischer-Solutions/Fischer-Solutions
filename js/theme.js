const themeToggle =
document.querySelector(".theme-toggle");


const themeIcon =
document.querySelector(".theme-icon");


const body =
document.body;



/*
    Icons
*/


const darkIcon = "☾";

const lightIcon = "☀";



/*
    Apply Theme
*/


function applyTheme(theme){


    if(theme === "light"){


        body.classList.add(
            "light"
        );


        if(themeIcon){

            themeIcon.textContent =
            lightIcon;

        }


    }else{


        body.classList.remove(
            "light"
        );


        if(themeIcon){

            themeIcon.textContent =
            darkIcon;

        }


    }


}



/*
    Load Saved Theme
*/


const savedTheme =
localStorage.getItem(
    "theme"
);



/*
    Fischer Solutions is designed as a dark
    site by default. We only switch to light
    mode if the visitor has explicitly chosen
    it with the toggle button below — we don't
    follow the OS/browser preference, since the
    light palette isn't the primary design.
*/

applyTheme(
    savedTheme === "light" ? "light" : "dark"
);



/*
    Toggle Theme
*/


if(themeToggle){


    themeToggle.addEventListener(
    "click",
    ()=>{


        const newTheme =
        body.classList.contains(
            "light"
        )
        ? "dark"
        : "light";



        applyTheme(
            newTheme
        );



        localStorage.setItem(
            "theme",
            newTheme
        );


    });


}



/*
    Prevent Flash During Load
*/


window.addEventListener(
"load",
()=>{


    body.classList.add(
        "theme-loaded"
    );


});