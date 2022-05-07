// Questions pop-ups
const questionsBtn = document.querySelectorAll('.questions__item-btn'),
      questionsDescr = document.querySelectorAll('.questions__item-descr');

const btnToClose = (btn) => {
    btn.classList.toggle('close');
}

questionsBtn.forEach((item,i) => {
    item.addEventListener('click', () => {
        btnToClose(item);
        questionsDescr[i].classList.toggle('hidden');
    });
});

// Talks Slider (Slick)

$(document).ready(function() {
    $('.talks__slider-wrapper').slick({
      arrows: true,
      prevArrow: `
        <div class="talks__slider-btns-prev">
            <svg viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7762 0.634764L0.634767 18.6348L17.7762 36.6348L20.6348 33.6351L6.3479 18.6348L20.6348 3.63441L17.7762 0.634764Z" fill="white"/>
            </svg>
        </div>
      `,
      nextArrow: `
        <div class="talks__slider-btns-next">
            <svg viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7762 0.634764L0.634767 18.6348L17.7762 36.6348L20.6348 33.6351L6.3479 18.6348L20.6348 3.63441L17.7762 0.634764Z" fill="white"/>
            </svg>
        </div>
      `,
      appendArrows: $('.talks__slider-btns')
    });
});

// Func Slider (Slick)

$(document).ready(function() {
    $('.func__slider-item').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: `
        <svg viewBox="0 0 61 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5208 0L0 16L16.5208 32L18.3178 30.2597L4.86475 17.2308H61V14.7692H4.86475L18.3178 1.74031L16.5208 0Z"/>
        </svg>
      `,
      nextArrow: `
        <svg viewBox="0 0 61 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5208 0L0 16L16.5208 32L18.3178 30.2597L4.86475 17.2308H61V14.7692H4.86475L18.3178 1.74031L16.5208 0Z"/>
        </svg>
      `,
      appendArrows: $('.func__slider-btns')
    });
});