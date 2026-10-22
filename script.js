/* ==================================
   WISHIE BIRTHDAY WEBSITE
   Interactive features 🎀
================================== */

// 1. Select the HTML elements we need.

const celebrateButton = document.getElementById("celebrateButton");

const celebrationSection = document.getElementById("celebration");

const wishButton = document.getElementById("wishButton");

const wishMessage = document.getElementById("wishMessage");

const giftButton = document.getElementById("giftButton");

const giftSurprise = document.getElementById("giftSurprise");

const backButton = document.getElementById("backButton");

const confettiContainer = document.getElementById("confettiContainer");


// 2. Create colourful confetti.

function createConfetti(amount = 60) {

    const colors = [
        "#ff8fb3",
        "#ffd166",
        "#cdb5ff",
        "#ffb4d1",
        "#b8ead8",
        "#ffffff"
    ];

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "%";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.animationDuration =
            (2.5 + Math.random() * 2) + "s";

        piece.style.width =
            (6 + Math.random() * 7) + "px";

        piece.style.height =
            (9 + Math.random() * 9) + "px";

        confettiContainer.appendChild(piece);

        // Remove each piece after its animation ends.

        piece.addEventListener("animationend", function () {
            piece.remove();
        });

    }

}


// 3. Celebrate button.
// Clicking it scrolls to the celebration section
// and launches confetti.

celebrateButton.addEventListener("click", function () {

    celebrationSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createConfetti(90);

});


// 4. Birthday wish button.
// Clicking it reveals the birthday wish.

wishButton.addEventListener("click", function () {

    wishMessage.hidden = false;

    wishButton.textContent = "Wish Sent with Love! 💖";

    wishButton.disabled = true;

    wishButton.style.opacity = "0.75";

    createConfetti(45);

});


// 5. Gift button.
// Clicking it opens the surprise.

giftButton.addEventListener("click", function () {

    if (!giftSurprise.hidden) {
        return;
    }

    giftSurprise.hidden = false;

    giftButton.classList.add("gift-opened");

    giftButton.setAttribute("aria-expanded", "true");

    giftButton.querySelector(".gift-tap").textContent =
        "YOUR GIFT IS OPEN! 💗";

    createConfetti(100);

    // Scroll to the revealed surprise.

    setTimeout(function () {

        giftSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

});


// 6. Back-to-top button.

backButton.addEventListener("click", function () {

    document.getElementById("home").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// 7. Small welcome celebration on page load.

window.addEventListener("load", function () {

    setTimeout(function () {
        createConfetti(25);
    }, 700);

});
