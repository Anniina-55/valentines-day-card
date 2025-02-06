
// Style heart button
const heartButton = document.getElementById("button1")
heartButton.style.backgroundColor = "pink";
heartButton.textContent = "\u2764\uFE0F";

// Add call-to-action paragraph to banner for the button
const banner = document.querySelector(".banner");
const newParagraph = document.createElement("p")
newParagraph.textContent = "Klikkaa tästä -->";
newParagraph.style.fontSize = "1.2rem";
newParagraph.style.padding = "20px";

// CTA animation to appear after 3 seconds
setTimeout(() => {
    banner.insertBefore(newParagraph, heartButton); 
    newParagraph.style.marginLeft = "auto";
}, 3000);

// Add event listeners to the heart button

// While hovering
heartButton.addEventListener("mouseover", function() {
    heartButton.style.backgroundColor = "white";
    heartButton.style.cursor = "pointer";
});
heartButton.addEventListener("mouseout", function() {
    heartButton.style.backgroundColor = "pink";
})

// Clicking evokes a pop up heart animation
heartButton.addEventListener("click", function(){
    const popUpCanvas = document.createElement("canvas");
    popUpCanvas.width = 400;
    popUpCanvas.height = 400;
    popUpCanvas.style.backgroundColor = "pink";
    popUpCanvas.style.borderRadius = "10%";
    popUpCanvas.style.position = "fixed";
    popUpCanvas.style.top = "50%";
    popUpCanvas.style.left = "50%";
    popUpCanvas.style.transform = "translate(-50%, -50%)";

    // Add pop-up-canvas to body
    document.body.appendChild(popUpCanvas);
    const canvasContent = popUpCanvas.getContext("2d");

    canvasContent.font = "40px Ribeye Marrow";
    canvasContent.fillStyle = "rgb(194, 24, 91)";
    canvasContent.textAlign = "center";
    canvasContent.textBaseline ="middle";
    canvasContent.fillText("Olet ihana!", popUpCanvas.width / 2, popUpCanvas.height / 4);
    
    let scale = 1;
    
    // PopUpCanvas animation
    function animateHeart() {
        canvasContent.clearRect(0, 0, popUpCanvas.width, popUpCanvas.height);

        canvasContent.fillStyle = "white";
        canvasContent.font = "35px Ribeye Marrow";  
        canvasContent.fillText("Olet ihana!", popUpCanvas.width / 2, popUpCanvas.height / 4);
        // Add heart emoji
        canvasContent.font = "160px Arial";
        canvasContent.textAlign = "center";
        canvasContent.textBaseline = "middle";
        canvasContent.save();
        canvasContent.translate(popUpCanvas.width / 2, popUpCanvas.height / 2);
        canvasContent.scale(scale, scale);
        canvasContent.fillText("\u2764\uFE0F", 0, 30);
        canvasContent.restore();

        scale = scale === 1 ? 1.2 : 1;
    }

    const animation = setInterval(animateHeart, 200);

    // Stop animation and remove canvas after clicking
    popUpCanvas.addEventListener("click", function() {
        clearInterval(animation);
        document.body.removeChild(popUpCanvas);
    })
})

// Creating heading to wish happy Valentine's Day
const heading = querySelector("h1");
heading.textContent = "Hyvää ystävänpäivää!"; 
heading.style.color = "rgb(194, 24, 91)";
heading.style.fontFamily = "Ribeye Marrow";
heading.style.display = "flex";
heading.style.justifyContent = "center";
heading.style.letterSpacing = "5px";

// Heading animation
window.onload = function() {;
    heading.style.opacity = "0";
    heading.style.transform = "scale(0)";
    heading.style.transition = "opacity 1s ease-in, transform 1s ease-out";

    setTimeout(() => {
        heading.style.opacity = "1";
        heading.style.transform = "scale(1)";
    }, 1500);

    setTimeout(() => {
        // Fade out
        heading.style.opacity = "0";  
        // Scale down
        heading.style.transform = "scale(0)";  
    }, 7500);

    // Create canvas and add it to the body
    const heartBox = document.createElement("canvas");
    document.body.appendChild(heartBox);
    heartBox.style.position = "absolute";
    heartBox.style.top = "10vh";
    heartBox.style.zIndex = "-1";
    heartBox.width = window.innerWidth;
    heartBox.height = window.innerHeight*0.9;
    heartBox.style.backgroundColor = "transparent";

    // Get the context for drawing on the canvas
    const context = heartBox.getContext("2d");

    // Hearts array to store heart data
    let hearts = [];

    // Function to create a new heart
    function createHeart() {
        const heart = {
            // Random x position
            x: Math.random() * heartBox.width,
            // Random y position 
            y: Math.random() * heartBox.height, 
            // Random size (10px - 20px)
            size: Math.random() * 10 + 10, 
            // Random growth speed
            speed: Math.random() * 2 + 1, 
            // Random transparency
            opacity: Math.random() * 0.5 + 0.5, 
            // Different pink shades
            color: `rgb(${Math.random() * 50 + 200}, ${Math.random() * 50 + 50}, ${Math.random() * 50 + 100})` 
        };
        hearts.push(heart);
    }

    // Function to draw a heart on the canvas
    function drawHeart(heart) {
        context.fillStyle = heart.color;
        context.globalAlpha = heart.opacity;
        context.beginPath();
        context.moveTo(heart.x, heart.y);
        context.bezierCurveTo(heart.x - heart.size / 2, heart.y - heart.size, heart.x - heart.size, heart.y + heart.size / 2, heart.x, heart.y + heart.size);
        context.bezierCurveTo(heart.x + heart.size, heart.y + heart.size / 2, heart.x + heart.size / 2, heart.y - heart.size, heart.x, heart.y);
        context.fill();
        context.globalAlpha = 1;
    }

    // Animation function to animate hearts
    function animate() {
        // Clear canvas before redrawing
        context.clearRect(0, 0, heartBox.width, heartBox.height); 

        // Update and draw hearts
        hearts.forEach((heart, index) => {
            heart.size += heart.speed; // Increase size
            heart.opacity -= 0.02; // Slowly fade out
            drawHeart(heart);

            if (heart.size > 400) {
                hearts.splice(index, 1);
            }
        });
        // Call animate again for smooth animation
        requestAnimationFrame(animate); 
    }

    // Create new hearts every 200ms
    setTimeout(() => {
        setInterval(createHeart, 200);
        animate();
    }, 3000);

};