const canvas =
document.createElement("canvas");


canvas.className =
"particles-canvas";


document.body.prepend(
    canvas
);



const ctx =
canvas.getContext("2d");



let particles = [];

let mouse = {

    x:null,

    y:null,

    radius:150

};



/*
    Canvas Setup
*/


function resizeCanvas(){


    canvas.width =
    window.innerWidth;


    canvas.height =
    window.innerHeight;


}



resizeCanvas();



window.addEventListener(
"resize",
resizeCanvas
);



/*
    Mouse Tracking
*/


window.addEventListener(
"mousemove",
e=>{


    mouse.x =
    e.clientX;


    mouse.y =
    e.clientY;


});



window.addEventListener(
"mouseout",
()=>{


    mouse.x = null;

    mouse.y = null;


});



/*
    Particle Object
*/


class Particle {


    constructor(){


        this.x =
        Math.random()
        *
        canvas.width;



        this.y =
        Math.random()
        *
        canvas.height;



        this.size =
        Math.random()
        *
        3
        +
        1;



        this.speedX =
        Math.random()
        *
        1
        -
        .5;



        this.speedY =
        Math.random()
        *
        1
        -
        .5;


    }



    update(){


        this.x +=
        this.speedX;


        this.y +=
        this.speedY;



        if(
            this.x < 0 ||
            this.x > canvas.width
        ){

            this.speedX *= -1;

        }



        if(
            this.y < 0 ||
            this.y > canvas.height
        ){

            this.speedY *= -1;

        }



        /*
            Mouse Push Effect
        */


        if(mouse.x && mouse.y){


            const dx =
            this.x - mouse.x;


            const dy =
            this.y - mouse.y;


            const distance =
            Math.sqrt(
                dx*dx +
                dy*dy
            );



            if(
                distance <
                mouse.radius
            ){


                this.x +=
                dx / distance * 2;


                this.y +=
                dy / distance * 2;


            }


        }


    }



    draw(){


        ctx.beginPath();


        ctx.arc(

            this.x,

            this.y,

            this.size,

            0,

            Math.PI * 2

        );


        ctx.fillStyle =
        "rgba(56,189,248,.8)";


        ctx.fill();


    }


}



/*
    Create Particles
*/


function createParticles(){


    particles = [];



    let amount =
    window.innerWidth < 700
    ? 35
    : 90;



    for(
        let i = 0;
        i < amount;
        i++
    ){


        particles.push(
            new Particle()
        );


    }


}



createParticles();



window.addEventListener(
"resize",
createParticles
);



/*
    Connect Particles
*/


function connectParticles(){


    for(
        let a = 0;
        a < particles.length;
        a++
    ){


        for(
            let b = a;
            b < particles.length;
            b++
        ){


            let dx =
            particles[a].x -
            particles[b].x;


            let dy =
            particles[a].y -
            particles[b].y;


            let distance =
            Math.sqrt(
                dx*dx +
                dy*dy
            );



            if(distance < 120){


                ctx.beginPath();



                ctx.strokeStyle =
                "rgba(56,189,248,.12)";


                ctx.lineWidth =
                1;



                ctx.moveTo(

                    particles[a].x,

                    particles[a].y

                );



                ctx.lineTo(

                    particles[b].x,

                    particles[b].y

                );



                ctx.stroke();


            }


        }


    }


}



/*
    Animation Loop
*/


function animate(){


    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );



    particles.forEach(
        particle=>{


            particle.update();


            particle.draw();


        }
    );



    connectParticles();



    requestAnimationFrame(
        animate
    );


}



animate();