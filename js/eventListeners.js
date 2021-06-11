import {$, SAVINGS, MONTHS_PER_YEAR} from './global.js';
import {router} from './app.js'
import { CountUp } from './libs/countUp.js';

async function clickListener(e) {
    let target = e.target;

    function targetIs(_) {
        if (target.dataset.target) {
            return target.dataset.target === `${_}`;
        }
    }

    if (targetIs('menu')) {
        const closeButtonClicked = $('body').classList.contains('menu-open'); // If X is clicked
        const headerClassList = $('#header').classList;

        // TODO
        if (headerClassList.contains('hide')) headerClassList.remove('hide');

        // Prevents scrolling when open
        $('body').classList.toggle('menu-open');
         
        if (closeButtonClicked) { 
            setTimeout(() => {
                headerClassList.add('hide');
            }, 500); // Let animation finish
        }
    }


    if (targetIs('go to faq')) {
        window.location.hash = 'solutions';
        setTimeout(() => {
            let faq = $('#faq');
            faq.scrollIntoView(true);
        }, 300);
    }

    if (targetIs('contact form')) {

        if (location.hash != '') {
            $('#app').style.transition = 'opacity 0.2s';
            $('body').style.background = 'var(--secondary)';
            $('#app').style.opacity = '0';

            await new Promise((resolve)=>setTimeout(() => {
                resolve();
            }, 100));  // time to finish opacity change

            location.hash = '';
            setTimeout(() => {
                window.scrollIntoView(document.getElementById('contact'))
                // document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                $('#app').style.opacity = '1';
                $('#app').style.transition = 'opacity 0s';
                $('body').style.background = 'var(--white)';
            }, 300);
        } else {
            window.scrollIntoView(document.getElementById('contact'))
        }
  
    }

}

function changeListener(e) {
    let target = e.target;

    function targetIs(_) {
        if (target.dataset.target) {
            return target.dataset.target === `${_}`;
        }
    }

}

function inputListener(e) {
    let target = e.target;

    function targetIs(_) {
        if (target.dataset.target) {
            return target.dataset.target === `${_}`;
        }
    }

    if (targetIs('slider')) {
        $('#slider-output').textContent = target.value;
        $('#slider-output-month').textContent = Math.floor(target.value * SAVINGS);
        $('#slider-output-year').textContent = Math.floor(target.value * SAVINGS * MONTHS_PER_YEAR);
    }
}

function setListeners() {
    const bodyListeners = {  
        'click': clickListener,
        'change': changeListener,
        'input': inputListener
    }
    const windowListeners = {  
        'scroll': scrollListener
    }
   
    const body = $('body');

    for (const listener in bodyListeners) {
        body.addEventListener(listener, (e) => {
            bodyListeners[listener](e);
        });
    }

    for (const listener in windowListeners) {
        window.addEventListener(listener, (e) => {
            windowListeners[listener](e);
        });
    }
}


let hasNotViewedPage = true;

function scrollListener() {
    const isInViewport = function(element) {
        let bounding = element.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const hash = window.location.hash;
    if (hash === '') {
        let counter = $('#counter');
        let duration = 0;
        if (isInViewport(counter) && hasNotViewedPage) {
            duration = 2; // 2 seconds
            hasNotViewedPage = false;
        }
        (new CountUp('counter-1', 30, {suffix: '+', duration: duration})).start();
        (new CountUp('counter-2', 0, {startVal: 100, suffix: '-Down', duration: duration})).start();
        (new CountUp('counter-3', 30, {suffix: '-Year', duration: duration})).start();
    }



    // const distanceScrolled = document.body.scrollTop || document.documentElement.scrollTop;

    // if (distanceScrolled > 50) {
    //     $('#header').classList.add('scrolled');
    //     sessionStorage.setItem('header scrolled', true);
    // } else {
    //     $('#header').classList.remove('scrolled');
    //     sessionStorage.setItem('header scrolled', false);

    // }
}

export { setListeners }