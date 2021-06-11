import {Header} from '../components/Header.js'
import {Footer} from '../components/Footer.js'

const page = {
    async render() {
        let markup = '';
        markup += /*html*/
        `
        ${Header.render()}
        ${main.render()}
        ${Footer.render()}
        `;
        return markup;
    },
    async afterRender() {}
}

const main = {
    render() {
        let markup = '';
        markup += /*html*/
        `
        <main id='solutions'>
            <section class='hero'>
                <div class='hero-text'>
                    <h1>
                        System Efficiency Solutions
                    </h1>
                    <img src='./assets/img/dots.svg' class='dots dots-large' alt='Divider'/>
                </div>
            </section>

            <section class='solar-panel-cleaning'>
                <div class='max-width'>
                    <div class='grid'>
                        <div class='description'>
                            <div class='section-header'>
                                <div class='row align-center'>
                                    <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                                    <p class='section-header-pretitle'>Protect your investment</p>
                                </div>
                                <h2 class='section-header-title'><span class='bold'>Solar Panel Cleaning</span></h2>
                            </div>
                            <div class='section-body'>
                                <p class='text' id='faq'>
                                Panels out in the open are exposed to a variety of contaminants, which block sunlight, reduce their efficiency and ultimately cost you money. Dirt, dust, leaves, bird poop and other airborne particles like pollen can reduce panel performance by up to 30 percent, according to the National Renewable Energy Laboratory. We offer several packages to keep your panels clean and performing at full capacity year round!
                                </p>
                                <div class='faq'>
                                    <p class='question'>Won't the rain clean my panels?</p>
                                    <p class='answer'>Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.</p>
                                    <p class='question'>Why can't I just hose them off?</p>
                                    <p class='answer'>Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.</p>
                                    <p class='question'>What happens if I don't clean them?</p>
                                    <p class='answer'>Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio.</p>
                                </div>
                            </div>
                        </div>
                    
                        <div class='panels'>
                            <img src='./assets/img/solutions-dirty.jpg' alt='Dirty solar panel'/>
                            <img src='./assets/img/solutions-clean.jpg' alt='Clean solar panel'/>
                        </div>
                    </div>
                    <button data-target='contact form' class='btn btn-lg btn-primary'>Get a quote</button>

                </div>
            </section>

            <section class='nanoscopic'>
                <div class='max-width'>
                     <div class='row align-center'>
                        <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                        <p class='section-header-pretitle'>What sets us apart</p>
                    </div>
                    <h2 class='section-header-title'>Cleaning on a <span class='bold'>Nanoscopic Scale</span></h2>
                    <p class='text'>
                    Quisque malesuada volutpat enim. Vestibulum leo sem, molestie a, mattis bibendum, feugiat facilisis, nisl. Nam scelerisque odio. Suspendisse fermentum faucibus felis. Praesent pharetra. In consequat felis in tellus. In mi enim, rhoncus ullamcorper, sagittis at, placerat eget, mauris. Suspendisse auctor erat at ipsum. Aliquam vitae tortor id massa tincidunt eleifend.In hac habitasse platea dictumst. Mauris rutrum enim vitae mauris. Proin mattis eleifend pede. Sed pretium ante sit amet elit. Quisque pede tellus, dictum eget, dapibus ac, sodales dictum, lectus. Pellentesque mi dui, molestie sit amet, adipiscing id, iaculis quis, arcu. Nulla tellus sem, viverra.
                    </p>
                </div>
            </section>

           

 

        </main>
        `;
        return markup;
    },
}


export {page as Solutions}