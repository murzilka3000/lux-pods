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
      breakpoints: {
        1085: { 
          slidesPerView: 3,
        },
        700: { 
          slidesPerView: 2,
        },
        0: { 
          slidesPerView: 1.1,
        },
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper-container').forEach((slider, index) => {
        const prevButton = slider.parentElement.querySelector('.prev-2');
        const nextButton = slider.parentElement.querySelector('.next-2');
        let swiperInstance = null; // Variable to hold the Swiper instance

        function initSwiper() {
            if (window.innerWidth > 700 && !swiperInstance) { // Only initialize if screen width is > 700 and swiper isn't already initialized
                swiperInstance = new Swiper(slider, {
                    direction: 'horizontal',
                    loop: true,
                    slidesPerView: 4,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: nextButton,
                        prevEl: prevButton,
                    },
                    breakpoints: {
                      1360: { 
                        slidesPerView: 4,
                      },
                      1050: { 
                        slidesPerView: 3,
                      },
                      0: { 
                        slidesPerView: 2,
                      },
                    }
                });
            } else if (window.innerWidth <= 700 && swiperInstance) { // Destroy Swiper instance if screen width is <= 700 and Swiper is initialized
                swiperInstance.destroy();
                swiperInstance = null;
                // Optional:  Add a class to the slider to enable grid layout
                slider.classList.add('grid-layout'); // You will need to define CSS for this class to create the grid layout
            } else if (window.innerWidth > 700 && swiperInstance && slider.classList.contains('grid-layout')) {
                slider.classList.remove('grid-layout');
            }
        }

        // Initial call to initialize or destroy Swiper based on screen width
        initSwiper();

        // Listen for window resize events
        window.addEventListener('resize', initSwiper);
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
      breakpoints: {
        1060: { 
          slidesPerView: 4
        },
        801: { 
          slidesPerView: 3
        },
        542: { 
          slidesPerView: 2
        },
        0: { 
          slidesPerView: 1
        },
      }
      
    });
  });




  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1312: { 
        slidesPerView: 6
      },
      1114: { 
        slidesPerView: 5
      },
      801: { 
        slidesPerView: 4
      },
      650: { 
        slidesPerView: 3
      },
      0: { 
        slidesPerView: 2
      },
    }
});





document.addEventListener("DOMContentLoaded", function() {
  const openBtns = document.querySelectorAll(".open-cart");  // Все кнопки
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".close-popup");

  openBtns.forEach(button => {
    button.addEventListener("click", function() {
      popup.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
  });

  // Закрытие при клике вне окна
  popup.addEventListener("click", function(event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});





document.addEventListener('DOMContentLoaded', function() {
  const openMiniCartButtons = document.querySelectorAll('.open-mini-cart'); // Выбираем все элементы с классом .open-mini-cart
  const miniCart = document.querySelector('.mini-cart');

  if (openMiniCartButtons.length > 0 && miniCart) { // Проверяем, что хотя бы одна кнопка найдена и корзина существует
    openMiniCartButtons.forEach(button => { // Проходимся по каждой кнопке
      button.addEventListener('click', function(event) {
        event.preventDefault();

        miniCart.classList.toggle('active');

        function closeMiniCart(event) {
          if (!miniCart.contains(event.target) && !Array.from(openMiniCartButtons).includes(event.target)) { // Проверяем, что клик был не внутри корзины и не на одной из кнопок открытия
            miniCart.classList.remove('active');
            document.removeEventListener('click', closeMiniCart);
          }
        }

        if (miniCart.classList.contains('active')) {
          document.addEventListener('click', closeMiniCart);
        } else {
          document.removeEventListener('click', closeMiniCart);
        }
      });
    });
  } else {
    console.warn("Не найден элемент с классом .open-mini-cart или .mini-cart. Проверьте HTML структуру.");
  }
});







document.addEventListener('DOMContentLoaded', function() {
  const swiperCat = new Swiper('.categories-cont', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4, // Показывать по одному слайду
    spaceBetween: 80, // Отступ между слайдами
    breakpoints: {
      1103: { 
        slidesPerView: 4,
        spaceBetween: 80
      },
      869: {
        slidesPerView: 3,
      },
      0: { 
        spaceBetween: 40
      },
    }
  });
});














document.addEventListener('DOMContentLoaded', function() {
  const saleBlock = document.querySelector('.sale-block2');
  const items = document.querySelectorAll('.sale-block-item-2, .sale-block-item-3, .sale-block-item-4');
  const bulletsContainer = document.querySelector('.slider-bullets');
  let currentSlide = 0;

  if (!saleBlock || !items.length || !bulletsContainer) {
    console.warn("Не найдены элементы для слайдера.");
    return;
  }

  const bullets = document.querySelectorAll('.slider-bullets .bullet');

  function showSlide(slideIndex) {
    if (slideIndex < 0) {
      slideIndex = items.length - 1;
    } else if (slideIndex >= items.length) {
      slideIndex = 0;
    }

    currentSlide = slideIndex;

    // Убираем класс 'active' у всех буллетов
    bullets.forEach(bullet => bullet.classList.remove('active'));

    // Добавляем класс 'active' текущему буллету
    bullets[slideIndex].classList.add('active');

    // Вычисляем ширину слайда
    const slideWidth = items[0].offsetWidth; // Получаем ширину ПЕРВОГО слайда
    console.log("Slide width:", slideWidth); // Для отладки

    items.forEach(item => {
      item.style.transform = `translateX(${Math.floor(-slideIndex * slideWidth)}px)`;
    });
  }

  // Обработчики кликов на буллеты
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', function() {
      showSlide(index);
    });
  });

  // Автоматическая прокрутка (опционально)
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000000000000);

  // Инициализация слайдера
  showSlide(0);
});