const revealItems =
document.querySelectorAll(
    ".reveal, .card, .service-card, .project-card, .step, .plan, .testimonial"
);



const revealObserver =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "active"
            );


            revealObserver.unobserve(
                entry.target
            );


        }


    });


},
{
    threshold:.15
});



revealItems.forEach((item,index)=>{


    item.style.transitionDelay =
    `${index * 0.08}s`;


    item.classList.add(
        "reveal"
    );


    revealObserver.observe(
        item
    );


});



/*
    Hero Entrance
*/


window.addEventListener(
"load",
()=>{


    const heroElements =
    document.querySelectorAll(
        ".hero h1, .hero p, .hero-buttons, .hero-card"
    );


    heroElements.forEach(
    (element,index)=>{


        setTimeout(()=>{


            element.classList.add(
                "active"
            );


        }, index * 150);


    });


});



/*
    Parallax Effect
*/


const parallaxElements =
document.querySelectorAll(
    ".hero-card, .page-hero"
);



window.addEventListener(
"scroll",
()=>{


    const scroll =
    window.scrollY;


    parallaxElements.forEach(
    element=>{


        const speed =
        element.dataset.speed || .2;


        element.style.transform =
        `translateY(${scroll * speed}px)`;


    });


});



/*
    Animated Counter
*/


const counters =
document.querySelectorAll(
    "[data-count]"
);



const counterObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        const counter =
        entry.target;


        const target =
        Number(
            counter.dataset.count
        );


        let value = 0;


        const update = ()=>{


            value +=
            Math.ceil(target / 80);


            if(value >= target){


                counter.innerText =
                target;


                return;


            }


            counter.innerText =
            value;


            requestAnimationFrame(
                update
            );


        };


        update();


        counterObserver.unobserve(
            counter
        );


    }


});


},
{
    threshold:.5
});



counters.forEach(
counter=>
counterObserver.observe(counter)
);



/*
    Card Tilt Effect
*/


const tiltCards =
document.querySelectorAll(
    ".card, .project-card, .service-card"
);



tiltCards.forEach(card=>{


    card.addEventListener(
    "mousemove",
    e=>{


        const rect =
        card.getBoundingClientRect();


        const x =
        e.clientX - rect.left;


        const y =
        e.clientY - rect.top;


        const centerX =
        rect.width / 2;


        const centerY =
        rect.height / 2;


        const rotateX =
        ((y-centerY)/centerY)*-5;


        const rotateY =
        ((x-centerX)/centerX)*5;



        card.style.transform =
        `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;


    });


    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform =
        "";


    });


});



/*
    Typewriter Effect
*/


const typingElement =
document.querySelector(
    ".typing"
);



if(typingElement){


    const words =
    JSON.parse(
        typingElement.dataset.words
    );


    let wordIndex = 0;

    let charIndex = 0;


    function type(){


        if(
            charIndex <
            words[wordIndex].length
        ){


            typingElement.innerHTML +=
            words[wordIndex][charIndex];


            charIndex++;


            setTimeout(
                type,
                100
            );


        }
        else{


            setTimeout(
                erase,
                1500
            );


        }


    }



    function erase(){


        if(
            typingElement.innerHTML.length
        ){


            typingElement.innerHTML =
            typingElement.innerHTML.slice(
                0,-1
            );


            setTimeout(
                erase,
                50
            );


        }
        else{


            wordIndex =
            (wordIndex+1)
            % words.length;


            charIndex=0;


            type();


        }


    }


    type();


}



/*
    Cursor Glow Effect
*/


const glow =
document.createElement(
    "div"
);


glow.className =
"cursor-glow";


document.body.appendChild(
    glow
);



document.addEventListener(
"mousemove",
e=>{


    glow.style.left =
    `${e.clientX}px`;


    glow.style.top =
    `${e.clientY}px`;


});



/*
    Page Load Animation
*/


document.body.classList.add(
    "page-loaded"
);
