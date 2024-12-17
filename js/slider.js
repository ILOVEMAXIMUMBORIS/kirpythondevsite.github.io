const texts = ["HTML", "CSS", "JS", "PYTHON", "ARDUINO"];
let currentIndex = 0;

const updateText = () => {
    const previousIndex = (currentIndex - 1 + texts.length) % texts.length;
    const nextIndex = (currentIndex + 1) % texts.length;

    document.querySelector('.text_previous').textContent = texts[previousIndex];
    document.querySelector('.text_current').textContent = texts[currentIndex];
    document.querySelector('.text_next').textContent = texts[nextIndex];
};

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    updateText();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % texts.length;
    updateText();
});

// Инициализация текста
updateText();