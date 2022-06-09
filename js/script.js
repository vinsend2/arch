$(document).ready(function (){


    function sliderInit($swiper_container){
        if(true == true) {


            const swiper = new Swiper(".slider-block > .mySwiper", {
                speed: 1000,
                resistanceRatio: 0,
                spaceBetween: 10,
                slidesPerView: 'auto',
            });



        }
    }




    function scrollInit(){
        if($(window).width() > 700) {


            var win = $(window);
            var isResizing = false;
            win.bind(
                'resize',
                function()
                {
                    if (!isResizing) {
                        isResizing = true;
                        var container = $('.wrapper');
                        container.css(
                            {
                                'width': 1,
                                'height': 1
                            }
                        );
                        container.css(
                            {
                                'width': win.width(),
                                'height': win.height()
                            }
                        );
                        isResizing = false;
                    }
                }
            ).trigger('resize');

            $('body').css('overflow', 'hidden');

            // IE Tweak
            if ($('.wrapper').width() != win.width()) {
                win.trigger('resize');
            }
            /*  $(".programs__item").is(":mcsInSight");*/
            $('.wrapper').mCustomScrollbar({
                theme: "dark",
                scrollbarPosition: "inside",
                mouseWheelPixels: 370



            });

        }
    }




  scrollInit();
  sliderInit();

  










  const tabsColorChange = () => {
    let label = document.querySelectorAll('.catalog__tabs label');


    btn.onclick = function(e) {
      e.preventDefault();
      label.classList.toggle('active');
    };

  };

 $(document).on('click', '.catalog__tabs .tab', function () {
   $('.catalog__tabs .tab').removeClass('active');
   $(this).addClass('active');
   $('.catalog__content').removeClass('active');
   $('#' + $(this).attr('data-id')).addClass('active');
   var node = document.querySelector('#content-2');
   ScrollReveal().reveal(node);
 });





  $('.menu__btn').on('click', function() {

    $('body').toggleClass('no-scroll');
    $('.menu__btn').toggleClass('open-burger');
    /*  $('.footer .callback-bt').toggleClass('callback-bt--top');*/
  });

  document.addEventListener(
      "DOMContentLoaded",
      function () {
        tabsColorChange();

      },
      false
  );






  if ($('.catalog-item').length) {
    ScrollReveal().reveal('.catalog-item', {distance: '50px'}, {delay: 500});
  }

  //Переменная для включения/отключения индикатора загрузки
  spinner = $('.ymap-container').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)

  //Запускаем основную функцию
  ymap();


  var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init() {
    console.log(123321);
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.187882,61.373879],
      zoom: 17,
      controls: ['zoomControl'],
    });
    var myPlacemarkTemp = new ymaps.Placemark([55.187882,61.373879], {
      balloonContent: "Здесь может быть ваш адрес",
    }, {
      // Опции.
      iconLayout: 'default#image',
      iconImageHref: '/images/point.png',
      iconImageSize: [60, 73],
      iconImageOffset: [-10, -87],
      cursor: 'default'
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
            layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
            || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){

    var script = document.createElement("script");

    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
            script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  function ymap() {

    $(document).on('click', '.ymap-container', function(){

          if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

            // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
            check_if_load = true;
            // Показываем индикатор загрузки до тех пор, пока карта не загрузится
            spinner.addClass('is-active');

            // Загружаем API Яндекс.Карт
            loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
              // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
              ymaps.load(init);
            });
          }
        }
    );
  }



});


