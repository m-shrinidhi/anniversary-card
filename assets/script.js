const alternatives = [
    {
        text: "Wow… you really clicked 💩? KNEW IT",
        images: "./assets/images/1.gif"
    },
    {
        text: "Think again, stinky. 💩",
        images: "./assets/images/2.gif"
    },
    {
        text: "Of cource you're still clicking on poop",
        images: "./assets/images/3.gif"
    },
    {
        text: "Last chance before I cry 😭",
        images: "./assets/images/4.gif"
    }
];

const ohyes = {
    text: "I KNEW you'd choose ❤️ You're stuck with me forever 😘",
    images: "./assets/images/yes.gif"
};

const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;

function updateDisplay(item) {
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[0]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.textContent.trim();

        if (val.includes("YES") || val.includes("❤️")) {
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }

        if (val.includes("NO") || val.includes("💩")) {
            count++;
            if (count < alternatives.length) {
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});
