$(document).ready(function (){
    if($(window).width() > 768) {
        function isElementInViewport(el) {

            // Проверяем на использование jQuery
            if (typeof jQuery === "function" && el instanceof jQuery) {
                el = el[0];
            }

            var rect = el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
            );
        }

        function isElementPartiallyInViewport(el) {
            // Проверяем на использование jQuery
            if (typeof jQuery !== 'undefined' && el instanceof jQuery)
                el = el[0];

            var rect = el.getBoundingClientRect();

            var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            var windowWidth = (window.innerWidth || document.documentElement.clientWidth);


            var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
            var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

            return (vertInView && horInView);
        }

        function fnIsVis(ele, a) {
            var inVpFull = isElementInViewport(ele);
            var inVpPartial = isElementPartiallyInViewport(ele);


            if (inVpPartial) {
                if (typeof jQuery !== 'undefined' && ele instanceof jQuery) {
                    ele.css( "transform", "translate3d(-250px, 0px, 0px)" );

                } else {
                    ele.style.cssText = "transform: translate3d(-250px, 0px, 0px); transition-duration: 1000ms;";
                }

            clearInterval(a);

            }


        }




        let timerId2 = setInterval(() => fnIsVis($('.mySwiper .swiper-wrapper')[0], timerId2), 500);

        let timerId3 = setInterval(() => fnIsVis($('.mySwiper .swiper-wrapper')[1], timerId3), 500);

        let timerId4 = setInterval(() => fnIsVis($('.mySwiper .swiper-wrapper')[2], timerId4), 500);

        let timerId5 = setInterval(() => fnIsVis($('.mySwiper .swiper-wrapper')[3], timerId5), 500);







    }



});


