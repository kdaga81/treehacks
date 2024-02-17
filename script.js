const cardContainer = document.getElementById('cardContainer');
let currentIndex = 0;

// Sample data (images)
const images = [
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg',
    'image4.jpeg',
    'image5.jpeg'
];
//test
// Load initial cards
loadCards();

function loadCards() {
    for (let i = currentIndex; i < currentIndex + 2; i++) {
        if (i < images.length) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.zIndex = images.length - i;
            const imagePath = 'images/' + images[i]; // Updated image path
            card.innerHTML = `<img src="${imagePath}" alt="Card Image">`; // Updated image path
            card.addEventListener('click', handleCardClick);
            cardContainer.appendChild(card);
        }
    }
}

function handleCardClick(event) {
    const card = event.target.closest('.card');
    if (!card) return;

    const x = event.clientX - card.getBoundingClientRect().left;
    const cardCenterX = card.offsetWidth / 2;

    if (x < cardCenterX) {
        card.classList.add('left');
        setTimeout(() => card.remove(), 300);
    } else {
        card.classList.add('right');
        setTimeout(() => card.remove(), 300);
    }

    currentIndex++;
    if (currentIndex + 1 > images.length) {
        currentIndex = 0;
    }
    loadCards();
}
