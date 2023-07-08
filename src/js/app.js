"use strict"
// //<Spoller>-------------------------------------------------------------------------------------------------------
// const spollersArray = document.querySelectorAll('[data-spollers]');
// if (spollersArray.length > 0) {

//     const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
//         return !item.dataset.spollers.split(",")[0];
//     });

//     if (spollersRegular.length > 0) {
//         initSpollers(spollersRegular);
//     }

//     const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
//         return item.dataset.spollers.split(',')[0];
//     });

//     if (spollersMedia.length > 0) {
//         const breakpointsArray = [];
//         spollersMedia.forEach(item => {
//             const params = item.dataset.spollers;
//             const breakpoint = {};
//             const paramsArray = params.split(',');
//             breakpoint.value = paramsArray[0];
//             breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
//             breakpoint.item = item;
//             breakpointsArray.push(breakpoint);
//         });

//         let mediaQueries = breakpointsArray.map(function (item) {
//             return '(' + item.type + '-width: ' + item.value + "px)," + item.value + "," + item.type;
//         });
//         mediaQueries = mediaQueries.filter(function (item, index, self) {
//             return self.indexOf(item) === index;
//         });

//         mediaQueries.forEach(breakpoint => {
//             const paramsArray = breakpoint.split(",");
//             const mediaBreakpoint = paramsArray[1];
//             const mediaType = paramsArray[2];
//             const matchMedia = window.matchMedia(paramsArray[0]);
//             const spollersArray = breakpointsArray.filter(function (item) {
//                 if (item.value === mediaBreakpoint && item.type === mediaType) {
//                     return true;
//                 }
//             });
//             matchMedia.addListener(function () {
//                 initSpollers(spollersArray, matchMedia);
//             });
//             initSpollers(spollersArray, matchMedia);
//         });
//     }

//     function initSpollers(spollersArray, matchMedia = false) {
//         spollersArray.forEach(spollersBlock => {
//             spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
//             if (matchMedia.matches || !matchMedia) {
//                 spollersBlock.classList.add('_init');
//                 initSpollerBody(spollersBlock);
//                 spollersBlock.addEventListener('click', setSpollerAction);
//             } else {
//                 spollersBlock.classList.remove('_init');
//                 initSpollerBody(spollersBlock, false);
//                 spollersBlock.removeEventListener('click', setSpollerAction);
//             }
//         });
//     }

//     function initSpollerBody(spollersBlock, hideSpollerBody = true) {
//         const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
//         if (spollerTitles.length > 0) {
//             spollerTitles.forEach(spollerTitle => {
//                 if (hideSpollerBody) {
//                     spollerTitle.removeAttribute('tabindex');
//                     if (!spollerTitle.classList.contains('_active')) {
//                         spollerTitle.nextElementSibling.hidden = true;
//                     }
//                 } else {
//                     spollerTitle.setAttribute('tabindex', "-1");
//                     spollerTitle.nextElementSibling.hidden = false;
//                 }
//             });
//         }
//     }

//     function setSpollerAction(e) {
//         const el = e.target;
//         if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
//             const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
//             const spollersBlock = spollerTitle.closest('[data-spollers]');
//             const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
//             if (!spollersBlock.querySelectorAll('._slide').length) {
//                 if (oneSpoller && !spollerTitle.classList.contains('_active')) {
//                     hideSpollersBody(spollersBlock);
//                 }
//                 spollerTitle.classList.toggle('_active');
//                 _slideToggle(spollerTitle.nextElementSibling, 500);
//             }
//             e.preventDefault();
//         }
//     }
//     function hideSpollersBody(spollersBlock) {
//         const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
//         if (spollerActiveTitle) {
//             spollerActiveTitle.classList.remove('_active');
//             _slideUp(spollerActiveTitle.nextElementSibling, 500);
//         }
//     }
// }

// let _slideUp = (target, duration = 500) => {
//     if (!target.classList.contains('_slide')) {
//         target.classList.add('_slide');
//         target.style.transitionProperty = 'height, margin, padding';
//         target.style.transitionDuration = duration + 'ms';
//         target.style.height = target.offsetHeight + 'px';
//         target.offsetHeight;
//         target.style.overflow = 'hidden';
//         target.style.height = 0;
//         target.style.paddingTop = 0;
//         target.style.paddingBottom = 0;
//         target.style.marginTop = 0;
//         target.style.marginBottom = 0;
//         window.setTimeout(() => {
//             target.hidden = true;
//             target.style.removeProperty('height');
//             target.style.removeProperty('padding-top');
//             target.style.removeProperty('padding-bottom');
//             target.style.removeProperty('margin-top');
//             target.style.removeProperty('margin-bottom');
//             target.style.removeProperty('overflow');
//             target.style.removeProperty('transition-duration');
//             target.style.removeProperty('transition-property');
//             target.classList.remove('_slide');
//         }, duration);
//     }
// }

// let _slideDown = (target, duration = 500) => {
//     if (!target.classList.contains('_slide')) {
//         target.classList.add('_slide');
//         if (target.hidden) {
//             target.hidden = false;
//         }
//         let height = target.offsetHeight;
//         target.style.overflow = 'hidden';
//         target.style.height = 0;
//         target.style.paddingTop = 0;
//         target.style.paddingBottom = 0;
//         target.style.marginTop = 0;
//         target.style.marginBottom = 0;
//         target.offsetHeight;
//         target.style.transitionProperty = "height, margin, padding";
//         target.style.transitionDuration = duration + "ms";
//         target.style.height = height + "px";
//         target.style.removeProperty('padding-top');
//         target.style.removeProperty('padding-bottom');
//         target.style.removeProperty('margin-top');
//         target.style.removeProperty('margin-bottom');
//         window.setTimeout(() => {
//             target.style.removeProperty('height');
//             target.style.removeProperty('overflow');
//             target.style.removeProperty('transition-duration');
//             target.style.removeProperty('transition-property');
//             target.classList.remove('_slide');
//         }, duration);
//     }
// }

// let _slideToggle = (target, duration = 500) => {
//     if (target.hidden) {
//         return _slideDown(target, duration);
//     } else {
//         return _slideUp(target, duration);
//     }
// }
// //<Other>-------------------------------------------------------------------------------------------------------
// window.onload = function () {
//     document.addEventListener("click", documentActions);

//     function documentActions(e) {
//         const targetElement = e.target;
//         if (window.innerWidth > 768 && isMobile.any()) {
//             if (targetElement.classList.contains('menu__arrow')) {
//                 targetElement.closest('.menu__item').classList.toggle('_hover');
//             }
//             if (!targetElement.closest(".menu__item") && document.querySelectorAll(".menu__item._hover").length > 0) {
//                 _removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
//             }
//         }
//         if (targetElement.classList.contains('search-form__icon')) {
//             document.querySelector('.search-form').classList.toggle('_active');
//         } else if (!targetElement.closest('.search-form') && document.querySelector(".search-form._active")) {
//             document.querySelector('.search-form').classList.remove('_active');
//         }
//     }
// }
//<Menu burger>-------------------------------------------------------------------------------------------------------
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (isMobile.any()) {
    document.documentElement.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            })
        }
    }
} else {
    document.documentElement.classList.add('_pc');
}












//----------------------------------------------------------------
const headerBurger = document.querySelector('.header-burger');
const iconMenu = document.querySelector('.header__burger-button');
const contactUs = document.querySelector('.header__contactUs');
const phoneToggle = document.querySelector('._icon-phone');
const emailToggle = document.querySelector('._icon-email');
const locationToggle = document.querySelector('._icon-location');
const header__navigation = document.querySelector('.header__navigation');
const headerButtons = document.querySelector('.header__logo-buttons');
const headerBottomNav = document.querySelector('.header__bottom-nav');
const linkListener = document.querySelector('.link__photo');
const header = document.querySelector('.header');
const footerBlocks = document.querySelectorAll('.footer__blocks');
const headerWrapper = document.querySelector('.header__wrapper');
if (document.querySelector('.main-swiper')) {
    var backGroundBt = document.querySelectorAll('.background__button');
    var backGround = document.querySelector('.background');
    var textContainer = document.querySelector('.text-container__contents');
}
const mainContent = document.querySelector('.main');
const navigationList = document.querySelector('.navigation__list');
const navigationHidList = document.querySelectorAll('.navigation__hidden');

if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
        iconMenu.classList.toggle('_active');
        contactUs.classList.toggle('_active');
        phoneToggle.classList.toggle('_icon-phone_mod');
        emailToggle.classList.toggle('_icon-email_mod');
        locationToggle.classList.toggle('_icon-location_mod');
        if (headerBottomNav.classList.contains('_active')) {
            headerBottomNav.classList.remove('_active');
            document.body.classList.remove('_lock');
            header.classList.remove('_active');
            headerWrapper.classList.remove('_active');
        }
    });
}
document.body.addEventListener('click', removeMenus);
function removeMenus(e) {
    if (iconMenu.classList.contains('_active') && !e.target.closest('.header__burger')) {
        iconMenu.classList.remove('_active');
        contactUs.classList.remove('_active');
        phoneToggle.classList.remove('_icon-phone_mod');
        emailToggle.classList.remove('_icon-email_mod');
        locationToggle.classList.remove('_icon-location_mod');
    }
    if (headerBottomNav.classList.contains('_active') && !e.target.closest('.header__bottom-nav')) {
        headerBottomNav.classList.remove('_active');
        document.body.classList.remove('_lock');
        header.classList.remove('_active');
        headerWrapper.classList.remove('_active');
    }
    if (e.target.closest('.footer__title')) {
        for (let i = 0; i < footerBlocks.length; i++) {
            if (footerBlocks[i].classList.contains('active')) footerBlocks[i].classList.remove('active');
        }
        e.target.parentElement.classList.toggle('active');
    }
    else {
        for (let i = 0; i < footerBlocks.length; i++) {
            if (footerBlocks[i].classList.contains('active')) footerBlocks[i].classList.remove('active');
        }
    }
    if (document.querySelector('.main-swiper')) {
        if (e.target.closest(`.background__button`) == backGroundBt[1]) {
            backGround.classList.add('active');
            textContainer.innerHTML = `Fugiat architecto cupiditate autem,
            deleniti iste consequuntur nulla officia fugit asperiores a !`
            e.preventDefault();
        }
        if (e.target.closest(`.background__button`) == backGroundBt[0]) {
            backGround.classList.remove('active');
            textContainer.innerHTML = `ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ
            ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!`;
            e.preventDefault();
        }
    }
    if (window.innerWidth < 920 && window.innerHeight < window.innerWidth && is_touch_enabled()) {
        if (headerWrapper.classList.contains('_active')) {
            for (let i = 0; i < navigationHidList.length; i++) {
                navigationHidList[i].classList.add('_active');
            }
        }
    }
}
//<Swipe>--------------------------------
if (document.querySelector('.main-swiper')) {
    let touchArea = document.querySelector('.main__picture');
    let mouseX, initialX = 0;
    let mouseY, initialY = 0;
    let isSwiped;
    let events = {
        mouse: {
            down: 'mousedown',
            move: 'mousemove',
            up: 'mouseup',
        },
        touch: {
            down: 'touchstart',
            move: 'touchmove',
            up: 'touchend',
        },
    };
    let deviceType = '';
    const isTouchDevice = () => {
        try {
            document.createEvent('TouchEvent');
            deviceType = 'touch';
            return true;
        } catch (e) {
            deviceType = 'mouse';
            return false;
        }
    };
    let rectLeft = touchArea.getBoundingClientRect().left;
    let rectTop = touchArea.getBoundingClientRect().top;
    const getXY = (e) => {
        mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
        mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
    };
    isTouchDevice();
    touchArea.addEventListener(events[deviceType].down, (e) => {
        isSwiped = true;
        getXY(e);
        initialX = mouseX;
        initialY = mouseY;
    });
    touchArea.addEventListener(events[deviceType].move, (e) => {
        if (!isTouchDevice()) e.preventDefault();
        if (isSwiped) {
            getXY(e);
            let diffX = mouseX - initialX;
            let diffY = mouseY - initialY;
            if (Math.abs(diffY) > Math.abs(diffX)) {
            } else {
                if (window.innerWidth <= 767) {
                    if ((diffX > 0 ? 'Right' : 'Left') == 'Left') {
                        backGround.classList.add('active');
                        textContainer.innerHTML = `Fugiat architecto cupiditate autem,
            deleniti iste consequuntur nulla officia fugit asperiores a !`
                        e.preventDefault();
                    }
                    if ((diffX > 0 ? 'Right' : 'Left') == 'Right') {
                        backGround.classList.remove('active');
                        textContainer.innerHTML = `ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ
                    ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!`;
                        e.preventDefault();
                    }
                }
            }
        }
    });
    touchArea.addEventListener(events[deviceType].up, () => {
        isSwiped = false;
    });
    touchArea.addEventListener('mouseleave', () => {
        isSwiped = false;
    });
    window.onload = () => {
        isSwiped = false;
    };
}

//----------------------------------
headerButtons.addEventListener('click', screenSize);
function screenSize(e) {
    if (window.innerWidth <= 1150 && iconMenu.classList.contains('_active')) {
        if (e.target.closest('.header__logo')) {
            iconMenu.classList.remove('_active');
            contactUs.classList.remove('_active');
            phoneToggle.classList.remove('_icon-phone_mod');
            emailToggle.classList.remove('_icon-email_mod');
            locationToggle.classList.remove('_icon-location_mod');
            headerBottomNav.classList.toggle('_active');
            headerWrapper.classList.toggle('_active');
            document.body.classList.toggle('_lock');
            header.classList.toggle('_active');
        }
    } else if (window.innerWidth <= 1150) {
        if (e.target.closest('.header__logo')) {
            headerBottomNav.classList.toggle('_active');
            document.body.classList.toggle('_lock');
            header.classList.toggle('_active');
            headerWrapper.classList.toggle('_active');
        }
    }
}
function is_touch_enabled() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}
if (window.innerWidth < 920 && window.innerHeight < window.innerWidth && is_touch_enabled()) {
    headerWrapper.style.cssText = 'top: -22%';
    mainContent.style.cssText = 'top: 90px;';
}
const linkOriginCopy = linkListener.innerHTML;
window.addEventListener('resize', () => {
    if (window.innerWidth < 920 && window.innerHeight < window.innerWidth && is_touch_enabled()) {
        headerWrapper.style.cssText = 'top: -23%;';
        mainContent.style.cssText = 'top: 90px;';
        if (headerWrapper.classList.contains('_active')) {
            for (let i = 0; i < navigationHidList.length; i++) {
                navigationHidList[i].classList.add('_active');
            }
        }
    } else {
        headerWrapper.style.cssText = 'top: 0%';
        mainContent.style.cssText = 'top: 190px;';
        for (let i = 0; i < navigationHidList.length; i++) {
            navigationHidList[i].classList.remove('_active');
        }
    }
    if (window.innerWidth > 1150) {
        headerWrapper.classList.remove('_active');
        headerBottomNav.classList.remove('_active');
        document.body.classList.remove('_lock');
        header.classList.remove('_active');
        headerWrapper.classList.remove('_active');
    }
    if (window.innerWidth <= 480) {
        linkListener.innerHTML = `<img src="img/icons/index/Globe.svg" alt="" width="35">`;
    }
    if (window.innerWidth > 480) {
        linkListener.innerHTML = linkOriginCopy;
    }
    if (window.innerWidth >= 764 && iconMenu.classList.contains('_active')) {
        iconMenu.classList.remove('_active');
        contactUs.classList.remove('_active');
        phoneToggle.classList.remove('_icon-phone_mod');
        emailToggle.classList.remove('_icon-email_mod');
        locationToggle.classList.remove('_icon-location_mod');

    }
});
if (window.innerWidth <= 480) {
    linkListener.innerHTML = `<img src="img/icons/index/Globe.svg" alt="" width="35">`;
}
if (window.innerWidth > 480) {
    linkListener.innerHTML = linkOriginCopy;
}































// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });

//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

//             if (iconMenu.classList.contains('_active')) {
//                 document.documentElement.classList.remove('_lock');
//                 iconMenu.classList.remove('_active');
//                 menuBody.classList.remove('_active');
//             }

//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: 'smooth',
//             });
//             e.preventDefault();
//         }
//     }
// }


