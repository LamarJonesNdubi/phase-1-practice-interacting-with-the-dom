// Alright..javascript...again...damn
let counter = 0;
let isPaused = false;
let likeCounts = {};

// ..............
const counterDisplay = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const pauseButton = document.getElementById('pause');
const likesList = document.getElementById('likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsDiv = document.getElementById('comments');

let timer = setInterval(incrementCounter, 1000);

function incrementCounter() {
    if (!isPaused) {
        counter++;
        updateCounterDisplay();
    }
}

function updateCounterDisplay() {
    counterDisplay.textContent = counter;
}

plusButton.addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
});

minusButton.addEventListener('click', () => {
    counter--;
    updateCounterDisplay();
});

pauseButton.addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
        pauseButton.textContent = 'resume';
        disableButtons(true);
    } else {
        pauseButton.textContent = 'pause';
        disableButtons(false);
    }
});

function disableButtons(disabled) {
    plusButton.disabled = disabled;
    minusButton.disabled = disabled;
}

counterDisplay.addEventListener('click', () => {
    if (!likeCounts[counter]) {
        likeCounts[counter] = 0;
    }
    likeCounts[counter]++;
    updateLikesDisplay();
});

function updateLikesDisplay() {
    likesList.innerHTML = '';
    for (let number in likeCounts) {
        const li = document.createElement('li');
        li.textContent = `${number} has been liked ${likeCounts[number]} time${likeCounts[number] > 1 ? 's' : ''}`;
        likesList.appendChild(li);
    }
}

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = commentInput.value.trim();
    if (comment) {
        const p = document.createElement('p');
        p.textContent = comment;
        commentsDiv.appendChild(p);
        commentInput.value = '';
    }
});

// guess its working now...