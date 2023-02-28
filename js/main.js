const array = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const imageDom = document.querySelector('.images');

let columnContent = "";

for (let i = 0; i < array.length; i++) {
    const card = `<div class="card-image">
                        <img class="img" src="${array[i]}" />
                  </div>`;

    columnContent += card;       
}

console.log(array)

imageDom.innerHTML = columnContent;

const cardContainer = document.getElementsByClassName('card-image');

let activeImage = 0;

cardContainer[activeImage].classList.add('d-block'); 

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 
    function() {
        if (activeImage < cardContainer.length - 1) {

            cardContainer[activeImage].classList.remove('d-block');
            activeImage++;
            cardContainer[activeImage].classList.add('d-block');

            prevDom.classList.remove('d-none');

            if (activeImage == cardContainer.length - 1) {
                nextDom.classList.add('d-none');
            }

        }
    }
);

prevDom.addEventListener('click', 
    function() {
        if (activeImage > 0) {

            cardContainer[activeImage].classList.remove('d-block');
            activeImage--;
            cardContainer[activeImage].classList.add('d-block');

            nextDom.classList.remove('d-none');

            if (activeImage == 0) {
                prevDom.classList.add('d-none');
            }

        }
    }
);