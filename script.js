document.addEventListener("DOMContentLoaded", () => {
    gsap.to("nav .left a", {
        duration: 2,
        y: 100, // Changed to 100px
        opacity: 1,
        stagger: 0.2,
        ease: "linear"
    });

    gsap.to("nav .right", {
        duration: 2,
        y: 100, // Changed to 100px
        opacity: 1,
        ease: "power2.out"
    });

    setTimeout(() => {
        gsap.to("#vid-content", {
            duration: 0.1,
            x: 0, // Moves the element to its original position
            opacity: 1,
            stagger: 0.2, // Stagger the animation for each element
            ease: "power2.out"
        });
    }, 21000); // 21000 milliseconds = 21 seconds

    const video = document.getElementById("video");
    video.playbackRate = 2.5;

    gsap.to(".icon", {
        duration: 8,
        x: 0, // Moves the element to its original position
        opacity: 1,
        stagger: 0.2, // Stagger the animation for each element
        ease: "power2.out"
    });

    const main = document.getElementById('About');  // Target 'About' as per your main element's id
    main.addEventListener("click", (e) => {
        const Colors = ["#F5F5DC", "#FFF8DC", "#A52A2A", "#FF4500", "#000000", "#8B4513", "#FFD700", "#800080", "#00FF00", "#FFC0CB", "#0000FF", "#FFFF00", "#FFA500", "#DC143C", "#E6E6FA"];

        const lines = [''];

        const circle = document.createElement('div');
        circle.setAttribute('class', 'circle');

        const heading = document.createElement('h1');
        heading.setAttribute('class','hading')
        heading.textContent = lines[Math.floor(Math.random() * lines.length)];

        circle.style.backgroundColor = Colors[Math.floor(Math.random() * Colors.length)];

        const x = e.clientX + main.offsetLeft;
        const y = e.clientY + main.offsetTop;

        circle.style.left = `${x}px`; 
        circle.style.top = `${y}px`;   

        circle.appendChild(heading);

        main.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 2000);
    });
});


var initialPath = 'M 0 20 Q 250 20 500 20';
var finalPath = 'M 0 20 Q 250 20 500 20'; // Keeping the finalPath same for reset
var string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets) {
    var rect = string.getBoundingClientRect();
    var relativeX = dets.clientX - rect.left;
    var relativeY = dets.clientY - rect.top;

    var path = `M 0 20 Q ${relativeX} ${relativeY} 500 20`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function() {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.5,
        ease: "elastic.out(1, 0.2)"
    });
});










