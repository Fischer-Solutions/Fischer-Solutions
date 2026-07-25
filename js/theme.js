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



if(savedTheme){


    applyTheme(
        savedTheme
    );


}else{


    const systemTheme =
    window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches
    ? "light"
    : "dark";



    applyTheme(
        systemTheme
    );


}



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
    Watch System Theme Changes
*/


window
.matchMedia(
    "(prefers-color-scheme: light)"
)
.addEventListener(
"change",
e=>{


    const userChoice =
    localStorage.getItem(
        "theme"
    );



    if(!userChoice){


        applyTheme(
            e.matches
            ? "light"
            : "dark"
        );


    }


});



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