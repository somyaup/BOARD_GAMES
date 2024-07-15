// Define the games data
const games = [
    { name: "Agricola", imagePath: "images/Agricola.webp" },
    { name: "Bharat", imagePath: "images/bharat.jpg" },
    { name: "Cluedo", imagePath: "images/cluedo.jpg" },
    { name: "Codenames", imagePath: "images/codenames.jpg" },
    { name: "Dominant Species", imagePath: "images/Dominant-species.avif" },
    { name: "Dune", imagePath: "images/dune.jpg" },
    { name: "Pandemic", imagePath: "images/pandemic.webp" },
    { name: "Risk", imagePath: "images/risk.jpg" },
    { name: "Risk (WebP)", imagePath: "images/risk.webp" },
    { name: "Scotland Yard", imagePath: "images/schotlandyard.jpg" },
    { name: "Splendor", imagePath: "images/splender.webp" },
    { name: "Watergate", imagePath: "images/watergate.webp" }
];

// Function to generate game cards
function generateGameCards(containerId, games) {
    const container = document.getElementById(containerId);
    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game";
        gameCard.innerHTML = `
            <img src="${game.imagePath}" alt="${game.name}">
            <p>${game.name}</p>
        `;
        gameCard.addEventListener("click", () => openFullscreen(game.imagePath));
        container.appendChild(gameCard);
    });
}

// Function to open image in fullscreen
function openFullscreen(imagePath) {
    const overlay = document.getElementById("fullscreen-overlay");
    const fullscreenImage = document.getElementById("fullscreen-image");
    fullscreenImage.src = imagePath;
    overlay.style.display = "flex";
}

// Function to close fullscreen
document.getElementById("fullscreen-overlay").addEventListener("click", () => {
    document.getElementById("fullscreen-overlay").style.display = "none";
});

// Functions to scroll left and right
function scrollLeft(containerId) {
    const container = document.getElementById(containerId);
    container.scrollBy(-400, 0);// Adjust this value as needed
}

function scrollRight(containerId) {
    const container = document.getElementById(containerId);
    container.scrollBy(400,0); // Adjust this value as needed
}

// Generate game cards for featured games (first 3 games)
generateGameCards("featured-games-container", games);//.slice(0, 3));

// Generate game cards for games list
generateGameCards("games-list-container", games);
