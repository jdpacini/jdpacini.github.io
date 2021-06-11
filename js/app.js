import {$, $$} from './global.js'

import { Home } from './pages/Home.js'
import {About} from './pages/About.js'
import {Services} from './pages/Services.js'
import {Solutions} from './pages/Solutions.js'
import {Payment} from './pages/Payment.js'
import {Contact} from './pages/Contact.js'


import {setListeners} from './eventListeners.js'


// List of supported routes.
const routes = {
    '': Home,
    '#about': About,
    '#services': Services,
    '#solutions': Solutions,
    '#payment': Payment,
    '#contact': Contact
};


// Router for website
const router = async (options) => {
    const app = $('#app');
    const hash = window.location.hash;
    const page = routes[hash];

    $('body').style.background = 'var(--secondary)';
    // Animation between pages
     if (options && options.animation) {

        if ($('main')) {
            $('main').classList.add('fadeOut');
        }

        await new Promise((resolve)=>setTimeout(() => {
            resolve();
        }, 200));  // time to finish opacity change
    }

    await new Promise((resolve)=>setTimeout(() => {
        resolve();
    }, 30)); 

    // Render page
    app.innerHTML = await page.render();
    await page.afterRender();
    feather.replace();

    setTimeout(() => {
        $('body').style.background = 'var(--white)';
    }, 600);

    AOS.init({
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });

    //   const isHeaderScrolled = JSON.parse(sessionStorage.getItem('header scrolled'));
    //   if (isHeaderScrolled) {
    //       $('#header').classList.add('scrolled');
    //   } else {
    //     $('#header').classList.remove('scrolled');
    //   }
}

// Listen on page load:
window.addEventListener('DOMContentLoaded', async () => {
    await router({animation: true});
    setListeners();
});

// Listen on hash change:
window.addEventListener('hashchange', async () => {
    await router();
    window.scrollTo(0, 0);

    if ($('body').classList.contains('menu-open')) {
        $('body').classList.remove('menu-open');
    }
});


export {
    router
}