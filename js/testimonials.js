const testimonialSlider =
document.querySelector(".testimonial-slider");


const testimonials =
document.querySelectorAll(".testimonial");


const nextButton =
document.querySelector(".testimonial-next");


const previousButton =
document.querySelector(".testimonial-prev");


const dotsContainer =
document.querySelector(".testimonial-dots");



let currentTestimonial = 0;

let autoPlay;



if(testimonials.length){



    /*
        Create Dots
    */


    testimonials.forEach((item,index)=>{


        if(dotsContainer){


            const dot =
            document.createElement("button");


            dot.className =
            "testimonial-dot";


            if(index === 0){

                dot.classList.add(
                    "active"
                );

            }


            dot.addEventListener(
            "click",
            ()=>{


                showTestimonial(
                    index
                );


            });


            dotsContainer.appendChild(
                dot
            );


        }


    });



    const dots =
    document.querySelectorAll(
        ".testimonial-dot"
    );



    function showTestimonial(index){


        testimonials.forEach(item=>{


            item.classList.remove(
                "active"
            );


        });



        dots.forEach(dot=>{


            dot.classList.remove(
                "active"
            );


        });



        testimonials[index]
        .classList.add(
            "active"
        );



        if(dots[index]){


            dots[index]
            .classList.add(
                "active"
            );


        }



        currentTestimonial =
        index;


    }



    function nextTestimonial(){


        currentTestimonial++;


        if(
            currentTestimonial >=
            testimonials.length
        ){


            currentTestimonial = 0;


        }


        showTestimonial(
            currentTestimonial
        );


    }



    function previousTestimonial(){


        currentTestimonial--;


        if(
            currentTestimonial < 0
        ){


            currentTestimonial =
            testimonials.length - 1;


        }


        showTestimonial(
            currentTestimonial
        );


    }



    /*
        Buttons
    */


    if(nextButton){


        nextButton.addEventListener(
            "click",
            nextTestimonial
        );


    }



    if(previousButton){


        previousButton.addEventListener(
            "click",
            previousTestimonial
        );


    }



    /*
        Auto Play
    */


    function startAutoPlay(){


        autoPlay =
        setInterval(
            nextTestimonial,
            5000
        );


    }



    function stopAutoPlay(){


        clearInterval(
            autoPlay
        );


    }



    startAutoPlay();



    /*
        Pause On Hover
    */


    if(testimonialSlider){


        testimonialSlider.addEventListener(
            "mouseenter",
            stopAutoPlay
        );


        testimonialSlider.addEventListener(
            "mouseleave",
            startAutoPlay
        );


    }



    /*
        Touch Swipe
    */


    let startX = 0;


    let endX = 0;



    if(testimonialSlider){


        testimonialSlider.addEventListener(
        "touchstart",
        e=>{


            startX =
            e.changedTouches[0].screenX;


        });



        testimonialSlider.addEventListener(
        "touchend",
        e=>{


            endX =
            e.changedTouches[0].screenX;



            if(
                startX - endX > 50
            ){


                nextTestimonial();


            }



            if(
                endX - startX > 50
            ){


                previousTestimonial();


            }


        });


    }


}
