const array = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const imageDom = document.querySelector('.images');

const imageContainerDom = document.querySelector('.image-container');

let columnContent = "";

let imageContent = ""; 

for (let i = 0; i < array.length; i++) {
    const card = `<div class="card-image">
                        <img class="img" src="${array[i]}" />
                  </div>`;

    const newImage = `<div class="image-back">
                            <img class="img-back" src="${array[i]}" />
                       </div>`;

    imageContent += newImage;

    columnContent += card;       
}

console.log(array)

imageDom.innerHTML = columnContent;
imageContainerDom.innerHTML = imageContent;

const cardContainer = document.getElementsByClassName('card-image');
const imageBackDom = document.getElementsByClassName('image-back');

let activeImage = 0;

cardContainer[activeImage].classList.add('d-block'); 
imageBackDom[activeImage].classList.add('current');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 
    function() {
        if (activeImage < cardContainer.length - 1) {

            cardContainer[activeImage].classList.remove('d-block');
            imageBackDom[activeImage].classList.remove('current');
            activeImage++;
            cardContainer[activeImage].classList.add('d-block');
            imageBackDom[activeImage].classList.add('current');

        }else{
            cardContainer[activeImage].classList.remove('d-block');
            imageBackDom[activeImage].classList.remove('current');
            activeImage = 0;
            cardContainer[activeImage].classList.add('d-block');
            imageBackDom[activeImage].classList.add('current');
        }
    }
);

prevDom.addEventListener('click', 
    function() {
        if (activeImage > 0) {

            cardContainer[activeImage].classList.remove('d-block');
            imageBackDom[activeImage].classList.remove('current');
            activeImage--;
            cardContainer[activeImage].classList.add('d-block');
            imageBackDom[activeImage].classList.add('current');

        }else{
            cardContainer[activeImage].classList.remove('d-block');
            imageBackDom[activeImage].classList.remove('current');
            activeImage = [4];
            cardContainer[activeImage].classList.add('d-block');
            imageBackDom[activeImage].classList.add('current');
        }   
    }
);