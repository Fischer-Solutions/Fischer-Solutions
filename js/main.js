
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");


if(menuButton && navigation){


    menuButton.addEventListener("click",()=>{


        navigation.classList.toggle("open");


        menuButton.classList.toggle("active");


    });


}



/*
    Close Mobile Menu
*/


document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(navigation){

            navigation.classList.remove("open");

        }


    });


});



/*
    Sticky Header Effect
*/


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(!header) return;


    if(window.scrollY > 50){


        header.classList.add("scrolled");


    }else{


        header.classList.remove("scrolled");


    }


});



/*
    Scroll Reveal Animations
*/


const revealElements = document.querySelectorAll(
    ".card, .service-card, .project-card, .step, .plan, .testimonial, .about-grid, .contact-grid"
);



const revealObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("active");


            revealObserver.unobserve(entry.target);


        }


    });


},


{

    threshold:.15

}


);



revealElements.forEach(element=>{


    element.classList.add("reveal");


    revealObserver.observe(element);


});



/*
    Smooth Anchor Scrolling
*/


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});



/*
    Dark / Light Theme Toggle
*/


const themeButton =
document.querySelector(".theme-toggle");


const savedTheme =
localStorage.getItem("theme");



if(savedTheme === "light"){


    document.body.classList.add("light");


}



if(themeButton){


    themeButton.addEventListener("click",()=>{


        document.body.classList.toggle("light");


        let theme =
        document.body.classList.contains("light")
        ? "light"
        : "dark";


        localStorage.setItem(
            "theme",
            theme
        );


    });


}



/*
    Animated Counters
*/


const counters =
document.querySelectorAll(".counter");



const counterObserver =
new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const counter =
            entry.target;


            const target =
            Number(
                counter.dataset.target
            );


            let count = 0;


            const update = ()=>{


                const increment =
                target / 100;


                if(count < target){


                    count += increment;


                    counter.innerText =
                    Math.ceil(count);


                    requestAnimationFrame(update);


                }else{


                    counter.innerText =
                    target;


                }


            };


            update();


            counterObserver.unobserve(counter);


        }


    });


});



counters.forEach(counter=>{


    counterObserver.observe(counter);


});



/*
    FAQ Accordion
*/


document.querySelectorAll(".faq-item button")
.forEach(button=>{


    button.addEventListener("click",()=>{


        const item =
        button.parentElement;


        item.classList.toggle("active");


    });


});



/*
    Contact Form Demo
*/


const contactForm =
document.querySelector("#contactForm");


const formMessage =
document.querySelector("#formMessage");



if(contactForm){


    contactForm.addEventListener(
        "submit",
        function(e){


            e.preventDefault();



            if(formMessage){


                formMessage.innerText =
                "Thanks! Your message has been received. We'll get back to you soon.";


                formMessage.style.color =
                "#38bdf8";


            }


            contactForm.reset();


        }

    );


}



/*
    Current Year Footer
*/


const year =
document.querySelector(".year");



if(year){


    year.innerText =
    new Date().getFullYear();


}



/*
    Page Loading Animation
*/


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
        "loaded"
    );


});



/*
    Prevent Empty Links
*/


document.querySelectorAll('a[href="#"]')
.forEach(link=>{


    link.addEventListener(
        "click",
        e=>{


            e.preventDefault();


        }

    );


});