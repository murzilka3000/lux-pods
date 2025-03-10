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


  document.addEventListener('DOMContentLoaded', function() {
    const swiperCat = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4, // Показывать по одному слайду
      spaceBetween: 20, // Отступ между слайдами
  
      // Navigation arrows
      navigation: {
        nextEl: '.next-2',
        prevEl: '.prev-2',
      },
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