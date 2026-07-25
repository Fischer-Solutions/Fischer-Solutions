const filterButtons =
document.querySelectorAll(".portfolio-filter button");


const projects =
document.querySelectorAll(".project-card");



if(filterButtons.length && projects.length){


    filterButtons.forEach(button=>{


        button.addEventListener(
        "click",
        ()=>{


            const filter =
            button.dataset.filter;



            filterButtons.forEach(btn=>{

                btn.classList.remove(
                    "active"
                );

            });



            button.classList.add(
                "active"
            );



            projects.forEach(project=>{


                const category =
                project.dataset.category;



                if(
                    filter === "all" ||
                    category === filter
                ){


                    project.style.display =
                    "block";


                    setTimeout(()=>{


                        project.classList.add(
                            "active"
                        );


                    },50);


                }
                else{


                    project.style.display =
                    "none";


                }


            });


        });


    });


}



/*
    Project Hover Preview
*/


projects.forEach(project=>{


    project.addEventListener(
    "mouseenter",
    ()=>{


        project.classList.add(
            "hover"
        );


    });



    project.addEventListener(
    "mouseleave",
    ()=>{


        project.classList.remove(
            "hover"
        );


    });


});



/*
    Portfolio Modal
*/


const modal =
document.querySelector(
    ".project-modal"
);



const modalTitle =
document.querySelector(
    ".modal-title"
);



const modalDescription =
document.querySelector(
    ".modal-description"
);



const closeModal =
document.querySelector(
    ".modal-close"
);



const projectButtons =
document.querySelectorAll(
    ".view-project"
);



if(modal && projectButtons.length){


    projectButtons.forEach(button=>{


        button.addEventListener(
        "click",
        ()=>{


            const project =
            button.closest(
                ".project-card"
            );



            const title =
            project.querySelector(
                "h2"
            ).innerText;



            const description =
            project.querySelector(
                "p"
            ).innerText;



            modalTitle.innerText =
            title;


            modalDescription.innerText =
            description;



            modal.classList.add(
                "show"
            );


            document.body.style.overflow =
            "hidden";


        });


    });


}



/*
    Close Modal
*/


if(closeModal){


    closeModal.addEventListener(
    "click",
    ()=>{


        modal.classList.remove(
            "show"
        );


        document.body.style.overflow =
        "";


    });


}



/*
    Close Modal Outside Click
*/


if(modal){


    modal.addEventListener(
    "click",
    e=>{


        if(
            e.target === modal
        ){


            modal.classList.remove(
                "show"
            );


            document.body.style.overflow =
            "";


        }


    });


}



/*
    Project Image Lazy Loading
*/


const projectImages =
document.querySelectorAll(
    ".project-image img"
);



const imageObserver =
new IntersectionObserver(
entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const image =
            entry.target;



            image.src =
            image.dataset.src;



            image.classList.add(
                "loaded"
            );



            imageObserver.unobserve(
                image
            );


        }


    });


});



projectImages.forEach(image=>{


    imageObserver.observe(
        image
    );


});



/*
    Portfolio Scroll Animation
*/


const portfolioSection =
document.querySelector(
    ".portfolio-grid"
);



if(portfolioSection){


    window.addEventListener(
    "scroll",
    ()=>{


        const position =
        portfolioSection
        .getBoundingClientRect()
        .top;



        if(
            position <
            window.innerHeight - 150
        ){


            portfolioSection.classList.add(
                "visible"
            );


        }


    });


}
