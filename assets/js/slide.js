
const imageContainer = document.getElementById("image-container");
const images = document.querySelectorAll("#image-container img");
let currentIndex = 0;
const totalImages = images.length;

// Duplicate the first image and append it to the end of the container
const firstImageClone = images[0].cloneNode(true);
imageContainer.appendChild(firstImageClone);

function changeImage() {
    // Increment the index
    currentIndex++;

    // Slide to the next image
    imageContainer.style.transition = "transform 2.5s ease-in-out"; // Smooth transition
    imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // If we're at the duplicated first image, reset back to the original first image
    if (currentIndex === totalImages) {
        setTimeout(() => {
            imageContainer.style.transition = "none"; // Disable transition for instant jump
            imageContainer.style.transform = "translateX(0%)"; // Jump back to the start
            currentIndex = 0; // Reset index
        }, 2500); // Match the transition duration
    }
}

// Start the loop
setInterval(changeImage, 5000); // Change image every 5 seconds




// const imageContainer = document.getElementById("image-container");
// let currentIndex = 0;
// const totalImages = document.querySelectorAll("#image-container img").length;

// function changeImage() {
//     // Calculate the translateX value for the next image
//     const translateXValue = -(currentIndex * 100);

//     // Update the transform style to slide to the next image
//     imageContainer.style.transform = `translateX(${translateXValue}%)`;

//     // Increment the index and loop back if needed
//     currentIndex = (currentIndex + 1) % totalImages;
// }

// // Start the loop
// setInterval(changeImage, 5000); // Change image every 5 seconds
