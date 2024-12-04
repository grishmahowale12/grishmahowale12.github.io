$(document).ready(function () {
    // Array of images and captions
    const imageList = [
        { src: "images/giraffe.jpeg", caption: "G - Giraffe" },
        { src: "images/lemonade.jpeg", caption: "R - Raspberry Lemonade" },
        { src: "images/ice.jpeg", caption: "I - Ice" },
        { src: "images/shrimp.jpeg", caption: "S - Shrimp" },
        { src: "images/henna.jpeg", caption: "H - Henna" },
        { src: "images/magickingdom.jpeg", caption: "M - Magic Kingdom" },
        { src: "images/airplaneview.jpeg", caption: "A - Airplane View" },
        { src: "images/hummus.jpeg", caption: "H - Hummus" },
        { src: "images/orangemarker.jpeg", caption: "O - Orange Marker" },
        { src: "images/waterfall.jpeg", caption: "W - Waterfall" },
        { src: "images/axebodyspray.jpeg", caption: "A - Axe Body Spray" },
        { src: "images/lake.jpeg", caption: "L - Lake" },
        { src: "images/elephant.jpeg", caption: "E - Elephant" }
    ];

    // Dynamically load images into the slideshow
    imageList.forEach((image) => {
        $(".slideshow-container .slides").append(`
            <div class="slide">
                <img src="${image.src}" alt="${image.caption}">
                <div class="caption">${image.caption}</div>
            </div>
        `);
    });

    let currentSlide = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;

    // Function to show a specific slide
    function showSlide(index) {
        slides.hide();
        $(slides[index]).fadeIn(300);
    }

    // Next/Previous navigation
    $(".next").click(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    $(".prev").click(function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // Initialize slideshow
    showSlide(currentSlide);
});
