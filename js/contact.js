const contactForm =
document.querySelector("#contactForm");


const formMessage =
document.querySelector("#formMessage");



if(contactForm){


    const submitButton =
    contactForm.querySelector(
        "button[type='submit']"
    );



    contactForm.addEventListener(
    "submit",
    async (event)=>{


        event.preventDefault();



        const name =
        document.querySelector("#name")
        ?.value.trim();



        const email =
        document.querySelector("#email")
        ?.value.trim();



        const business =
        document.querySelector("#business")
        ?.value.trim();



        const service =
        document.querySelector("#service")
        ?.value;



        const message =
        document.querySelector("#message")
        ?.value.trim();



        /*
            Validation
        */


        if(
            !name ||
            !email ||
            !message
        ){


            showMessage(
                "Please fill out all required fields.",
                "error"
            );


            return;


        }



        if(!isValidEmail(email)){


            showMessage(
                "Please enter a valid email address.",
                "error"
            );


            return;


        }



        /*
            Loading State
        */


        if(submitButton){


            submitButton.disabled =
            true;


            submitButton.textContent =
            "Sending...";


        }



        /*
            Simulated Submission

            Replace this with:
            - Formspree
            - EmailJS
            - Backend API
            - Supabase
        */


        setTimeout(()=>{


            showMessage(
                "Thanks! Your message has been sent. We'll contact you soon.",
                "success"
            );


            contactForm.reset();


            localStorage.removeItem(
                "contactForm"
            );



            if(submitButton){


                submitButton.disabled =
                false;


                submitButton.textContent =
                "Send Message";


            }


        },1200);



        console.log({

            name,

            email,

            business,

            service,

            message

        });


    });


}



/*
    Email Validation
*/


function isValidEmail(email){


    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);


}



/*
    Message Display
*/


function showMessage(
    text,
    type
){


    if(!formMessage)
        return;



    formMessage.textContent =
    text;



    formMessage.className =
    `form-message ${type}`;


}



/*
    Save Form Progress
*/


const formInputs =
document.querySelectorAll(
    "#contactForm input, #contactForm textarea, #contactForm select"
);



formInputs.forEach(input=>{


    const saved =
    localStorage.getItem(
        input.name
    );


    if(saved){


        input.value =
        saved;


    }



    input.addEventListener(
    "input",
    ()=>{


        localStorage.setItem(
            input.name,
            input.value
        );


    });


});



/*
    Message Character Counter
*/


const messageBox =
document.querySelector("#message");


if(messageBox){


    const counter =
    document.createElement("span");


    counter.className =
    "character-count";


    messageBox.parentElement
    .appendChild(counter);



    function updateCounter(){


        counter.textContent =
        `${messageBox.value.length}/500`;



        if(messageBox.value.length > 500){


            messageBox.value =
            messageBox.value.substring(
                0,
                500
            );


        }


    }



    messageBox.addEventListener(
        "input",
        updateCounter
    );


    updateCounter();


}



/*
    Prevent Spam Double Clicks
*/


let submitted = false;



if(contactForm){


    contactForm.addEventListener(
    "submit",
    e=>{


        if(submitted){


            e.preventDefault();


            return;


        }


        submitted = true;


        setTimeout(()=>{


            submitted = false;


        },3000);


    });


}