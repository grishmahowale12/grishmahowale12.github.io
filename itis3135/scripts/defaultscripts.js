// Function definitions first
function processUserInfo() {
    const username = document.getElementById("username").value;
    const feeling = document.getElementById("feeling").value;
    const greeting = document.getElementById("greeting");
    greeting.textContent = `Welcome to Gentle Hawk's Harmonious Feathers, ${username}! We're glad you're feeling ${feeling}.`;
}

function featherMoodMatcher() {
    const moodInput = document.getElementById("feeling").value.toLowerCase(); // Use the "feeling" input
    const moodResponseElement = document.getElementById("mood-response");

    if (!moodInput) { // Check if the input is empty
        moodResponseElement.textContent = "Please enter a mood from the options: calm, creative, adventurous, peaceful, or inspired.";
        return;
    }

    let moodResponse = '';
    switch (moodInput) {
        case 'calm':
            moodResponse = "You seem calm today. A soothing, minimalist feather design might suit your vibe!";
            break;
        case 'creative':
            moodResponse = "You're feeling creative! A vibrant, artistic feather accessory could complement your mood.";
            break;
        case 'adventurous':
            moodResponse = "You're in an adventurous mood! A bold and unique feather design is perfect for you.";
            break;
        case 'peaceful':
            moodResponse = "You seem peaceful today. A soft, gentle feather design could reflect your inner calm.";
            break;
        case 'inspired':
            moodResponse = "You're feeling inspired! A feather design with intricate details might spark your creativity.";
            break;
        default:
            moodResponse = "Please choose a mood from the options: calm, creative, adventurous, peaceful, or inspired.";
    }

    // Display the mood response
    moodResponseElement.textContent = moodResponse;
}


function accessoryDesignIdea() {
    const idea = prompt("What's your ideal feather-inspired accessory design?");
    const resultBox = document.getElementById("result-box");
    resultBox.textContent = idea ? `Your dream design: "${idea}"` : "No design idea provided.";
}

function ecoFactGenerator() {
    const facts = [
        "Feathers are a renewable resource, and we prioritize sustainable practices in every accessory.",
        "Using eco-friendly materials helps reduce the impact on the environment while keeping nature's beauty intact.",
        "Gentle Hawk's Harmonious Feathers is committed to zero-waste production to protect our planet."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const resultBox = document.getElementById("result-box");
    resultBox.textContent = randomFact;
}

function shippingCostCalculator() {
    const region = document.getElementById("shipping").value;
    const resultBox = document.getElementById("result-box");
    if (region === "us") {
        resultBox.textContent = "Shipping cost to the US is free!";
    } else {
        resultBox.textContent = "International shipping rates apply based on destination.";
    }
}

function featherQuiz() {
    const quiz = prompt("What type of feather do you think would suit you best? (e.g., peacock, owl, eagle)");
    const resultBox = document.getElementById("result-box");
    resultBox.textContent = quiz ? `Your ideal feather: ${quiz}` : "No feather type selected.";
}

// Now, attach event listeners
document.addEventListener("DOMContentLoaded", () => {
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    dateTimeElement.textContent = `Today is ${now.toLocaleString("en-US", options)}`;

    // Attach event listeners for form submission
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", processUserInfo);

    // Attach event listeners for other buttons
    document.getElementById("feather-mood-button").addEventListener("click", featherMoodMatcher);
    document.getElementById("accessory-design-button").addEventListener("click", accessoryDesignIdea);
    document.getElementById("eco-fact-button").addEventListener("click", ecoFactGenerator);
    document.getElementById("shipping-calculator-button").addEventListener("click", shippingCostCalculator);
    document.getElementById("feather-quiz-button").addEventListener("click", featherQuiz);
});
