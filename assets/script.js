const alternatives = [
    {
        text: "HOOW DARE😭",
        images: "./assets/images/1.gif"
    },
    {
        text: "Bro… try again before I beat you 😒",
        images: "./assets/images/2.gif"
    },
    {
        text: "MFFFF 😤",
        images: "./assets/images/3.gif"
    },
    {
        text: "Adi please… don’t make me give you a bjj 😩😂",
        images: "./assets/images/4.gif"
    },
    {
        text: "You're really testing my patience huh 😌",
        images: "./assets/images/1.gif"
    },
    {
        text: "Fine. I’ll just sit here and cry then 😭",
        images: "./assets/images/2.gif"
    }
];

const ohyes = {
    text: "Knew you'd say YES, MY POOKIE FOR A REASON 😎❤️\nNow come gimme a hug.",
    images: "./assets/images/yes.gif"
};

const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;

function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'YES'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});
