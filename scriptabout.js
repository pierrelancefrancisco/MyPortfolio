const btn = document
  .querySelector('.read-more-btn');

const text = document
.querySelector('.card__read-more');

const cardHolder = document
.querySelector('.card-holder');

cardHolder
.addEventListener('click', e =>{
  const current = e.target;

  const isReadMoreBtn = current.className.includes('read-more-btn');

  if(!isReadMoreBtn)
    return;

    const currentText = e.target.parentNode.querySelector('.card__read-more');

    currentText.classList.toggle('card__read-more--open');

    current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'ReadMore...';
})

let slideIndex = 0;
showSlides();

function showSlides() {
 let i;
 let slides = document.getElementsByClassName("card__img__slides");
 for (i = 0; i < slides.length; i++) {
   slides[i].style.opacity = 0;
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}
 slides[slideIndex-1].style.opacity = 1;
 setTimeout(showSlides, 3000); // Change image every 3 seconds
}