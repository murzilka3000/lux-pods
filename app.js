document.addEventListener('DOMContentLoaded', function() {
    const swiperCat = new Swiper('.swiper-cat', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3, // Показывать по одному слайду
      spaceBetween: 10, // Отступ между слайдами
  
      // Navigation arrows
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper-container').forEach((slider, index) => {
        const prevButton = slider.parentElement.querySelector('.prev-2');
        const nextButton = slider.parentElement.querySelector('.next-2');

        new Swiper(slider, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },
        });
    });
});


  document.addEventListener('DOMContentLoaded', function() {
    const swiperCat = new Swiper('.swiper-advantages', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4, // Показывать по одному слайду
      spaceBetween: 20, // Отступ между слайдами
  
      // Navigation arrows
      navigation: {
        nextEl: '.next-3',
        prevEl: '.prev-3',
      },
    });
  });




  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});