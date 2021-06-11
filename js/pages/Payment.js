import {Header} from '../components/Header.js'
import {Footer} from '../components/Footer.js'

const page = {
    async render() {
        let markup = '';
        markup += /*html*/
        `
        ${Header.render()}
        <div class='column space-between'>
        ${main.render()}
        ${Footer.render()}
        </div>
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
        <main id='payment'>
            <section class='hero'>
                <div class='hero-text'>
                    <h1>
                        Make A Payment
                    </h1>
                    <img src='./assets/img/dots.svg' class='dots dots-large' alt='Divider'/>
                </div>
            </section>

            <section class='payment'>
                <div class='wrapper'>
                    <div class='column align-center'>
                        <p class='section-header-pretitle'>Payment</p>
                        <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                        <h1 class='section-header-title'>How much is <span class='bold'>Your Bill?</span></h1>
               
                    </div>
        

                    <div class='payment-buttons'>
                        <div>
                            <p class='text'>Add $100</p>
                            <div class='buttons'>
                                <button><i data-feather='plus'></i></button>
                                <button><i data-feather='minus'></i></button>
                            </div>
                        </div>
                        <div>
                            <p class='text'>Add $10</p>
                            <div class='buttons'>
                                <button><i data-feather='plus'></i></button>
                                <button><i data-feather='minus'></i></button>
                            </div>
                        </div>
                        <div>
                            <p class='text'>Add $1</p>
                            <div class='buttons'>
                                <button><i data-feather='plus'></i></button>
                                <button><i data-feather='minus'></i></button>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h3 class='total'>Total</h3>
                        <span class="snipcart-total-price"></span>
                    </div>

                    <button class="btn btn-lg btn-secondary snipcart-checkout">Proceed to payment</button>
                </div>
            </section>
   
 

        </main>
        `;
        return markup;
    },
}


export {page as Payment}