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


 Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["close"], // Оставляем только кнопку закрытия справа
    },
  },
  Navigation: {
    display: ["prev", "next"], // Отображаем только кнопки "предыдущий" и "следующий"
  },
});






document.addEventListener("DOMContentLoaded", function() {
  const openBtns = document.querySelectorAll(".open-cart");
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".close-popup");

  // Проверяем, есть ли кнопки открытия
  if (openBtns.length > 0 && popup) {
    openBtns.forEach(button => {
      button.addEventListener("click", function() {
        popup.style.display = "flex";
      });
    });

    // Проверяем, есть ли кнопка закрытия
    if (closeBtn) {
      closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
      });
    }

    // Закрытие при клике вне окна
    popup.addEventListener("click", function(event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  }
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
  function initSlider() {
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
      const slideWidth = items[0].offsetWidth;
      console.log("Slide width:", slideWidth);

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
    const autoSlide = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);

    // Очищаем интервал, если ширина экрана изменилась
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1218) {
        clearInterval(autoSlide);
      }
    });

    // Инициализация слайдера
    showSlide(0);
  }

  function checkScreenSize() {
    if (window.innerWidth <= 1218) {
      initSlider();
    }
  }

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});













document.addEventListener('DOMContentLoaded', function() {
  const swiperCat = new Swiper('.swiper-single-rev', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    breakpoints: {
      1000: { 
        slidesPerView: 6,
        spaceBetween: 20
      },
      900: { 
        slidesPerView: 5
      },
      650: { 
        slidesPerView: 4
      },
      500: { 
        slidesPerView: 3
      },
      0: { 
        slidesPerView: 2
      },
    }
  });
});








document.addEventListener('DOMContentLoaded', function () {
  let swiperCat;

  function initSwiper() {
    if (window.innerWidth < 800) {
      if (!swiperCat) {
        swiperCat = new Swiper('.swiper-single-cont', {
          loop: true,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          slidesPerView: 1,
          breakpoints: {
            800: {
              direction: 'vertical',
              slidesPerView: 6,
            },
            0: {
              direction: 'horizontal',
              slidesPerView: 1,
            },
          },
        });
      }
    } else {
      if (swiperCat) {
        swiperCat.destroy(true, true);
        swiperCat = null;
      }
    }
  }

  initSwiper();
  window.addEventListener('resize', initSwiper);
});












document.addEventListener("DOMContentLoaded", function () {
  const popupRev = document.getElementById("popup-rev");
  const openPopupRev = document.querySelector(".single-rev-open-popup");
  const closePopupRev = document.querySelector(".popup-close-rev");

  openPopupRev.addEventListener("click", function () {
      popupRev.style.display = "flex";
  });

  closePopupRev.addEventListener("click", function () {
      popupRev.style.display = "none";
  });

  // Закрытие попапа при клике вне контента
  popupRev.addEventListener("click", function (event) {
      if (event.target === popupRev) {
          popupRev.style.display = "none";
      }
  });
});









document.addEventListener("DOMContentLoaded", function () {
  const popups = document.querySelectorAll(".popup-rev");
  const openPopupButtons = document.querySelectorAll(".single-rev-open-popup");
  const closePopupButtons = document.querySelectorAll(".popup-close-rev");
  const playButtons = document.querySelectorAll(".play-button-rev");
  const videos = document.querySelectorAll("video");

  openPopupButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
          popups[index].style.display = "flex";
      });
  });

  closePopupButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
          popups[index].style.display = "none";
          videos[index].pause(); // Останавливаем видео при закрытии
      });
  });

  popups.forEach((popup, index) => {
      popup.addEventListener("click", function (event) {
          if (event.target === popup) {
              popup.style.display = "none";
              videos[index].pause();
          }
      });
  });

  playButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
          if (videos[index].paused) {
              videos[index].play();
              button.style.display = "none"; // Скрываем кнопку после запуска
          } else {
              videos[index].pause();
              button.style.display = "block";
          }
      });

      videos[index].addEventListener("play", function () {
          playButtons[index].style.display = "none";
      });

      videos[index].addEventListener("pause", function () {
          playButtons[index].style.display = "block";
      });

      videos[index].addEventListener("ended", function () {
          playButtons[index].style.display = "block"; // Показываем кнопку после завершения видео
      });
  });
});











