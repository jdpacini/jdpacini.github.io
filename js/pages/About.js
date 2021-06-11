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
        <main id='about'>
            <section class='hero'>
                <div class='hero-text'>
                    <h1>
                        About Us
                    </h1>
                    <img src='./assets/img/dots.svg' class='dots dots-large' alt='Divider'/>
                </div>
            </section>
            <section class='what-we-offer'>
                <div class='grid'>
                    <div class='description'>
                        <div class='section-header' 
                        data-aos="fade-down" data-aos-delay='100'
                        >
                            <div class='row align-center'>
                                <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                                <p class='section-header-pretitle'
                                
                                >What we offer</p>
                            </div>
                            <h2 class='section-header-title'><span class='bold'>Unique Solutions</span> for Every Project</h2>
                        </div>
                        <div class='section-body' data-aos="fade-down" data-aos-delay='200'>
                            <p class='text'>
                            S.W.A.T. (Sustainability We All Treasure) aims to present tactical efficiency when offering clean energy solutions. We do not offer a one-size-fits-all option for our customers; instead, each project is tailored to fit the specific needs by offering an array of product types and sizes. We educate customers on tax incentives and assist with any local rebates that may be available.
                            </p>
                            <a 
                            href='#services'
                            class='btn btn-lg btn-white'
                            data-aos="fade-down" data-aos-delay='300'
                            >Find out more</a>

                        </div>
                    </div>
                    <img 
                        src='./assets/img/about-1.jpg' 
                        alt='Home with solar panels' 
                        class='what-we-offer-img' 
                    />

                </div>
            </section>

            <section class='meet-the-team'>
                <div class='max-width narrow grid'>
                    <img data-aos="fade-down" data-aos-delay='100' src='./assets/img/about-2.jpg' alt='SWAT founders and family' class='meet-the-team-img' />
                    <div class='description'>
                        <div class='section-header' data-aos="fade-down" data-aos-delay='200'>
                            <div class='row align-center'>
                                <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                                <p class='section-header-pretitle'>Meet the team</p>
                            </div>
                            <h2 class='section-header-title'>Family Values at <span class='bold'>Our Core</span></h2>
                        </div>
                        <div class='section-body' data-aos="fade-down" data-aos-delay='300'>
                            <p class='text'>
                            We are a husband and wife team. We have three baby boys under four years of age. We deeply care about the future of our planet and family. We like the technology aspect of the business as well as being a part of something that genuinely impacts our community and our future. We are learning constantly and focusing on the "relationship" aspect of this industry. We are self-taught and self-started; tenacious about competing and contributing in this arena.
                            </p>
                        </div>
                    </div>
                </div>

                <section class='our-vision'>
                    <div class='section-header' data-aos="fade-down" data-aos-delay='600'>
                        <div class='column align-center'>
                            <p class='section-header-pretitle'>Our Vision</p>
                            <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                            <h2 class='section-header-title'><span class='bold'>Clean, Safe</span> Energy</h2>
                            <p class='text'>S.W.A.T. aims to efficiently connect all of the intricate components in this green-energy revolution, from homeowners, realtors, engineers and installers to banks, appraisers, utility companies and governmental entities.</p>
                        </div>
                    </div>
                    <img src='./assets/img/about-3.jpg' alt='Home with solar panels' class='about-3' />
                </section>
            </section>

            <section class='testimonials off-white'>  
                <div class='max-width narrow'>
                    <div class='section-header' data-aos="fade-down" data-aos-delay='100'>
                        <div class='row align-center'>
                            <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                            <p class='section-header-pretitle'>Testimonials</p>
                        </div>
                        <h2 class='section-header-title'>A Few More Reasons Why Others <span class='bold'>Choose Us</span></h2>
                        <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class='grid'>
                        <div class='testimonial' data-aos="fade-down" data-aos-delay='200'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div class='testimonial' data-aos="fade-down" data-aos-delay='300'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div class='testimonial' data-aos="fade-down" data-aos-delay='400'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div class='testimonial' data-aos="fade-down" data-aos-delay='500'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div class='testimonial' data-aos="fade-down" data-aos-delay='600'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div class='testimonial' data-aos="fade-down" data-aos-delay='700'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section class='clients'>  
                <div class='max-width'>
                    <span data-aos="fade-down" data-aos-delay='200'> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-1.jpg' 
                        />
                    </span>
                    <span data-aos="fade-down" data-aos-delay='300'> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-2.jpg' 
                        />
                    </span>
                    <span data-aos="fade-down" data-aos-delay='400'> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-3.jpg' 
                        />
                    </span>
                    <span data-aos="fade-down" data-aos-delay='500'> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-4.jpg' 
                        />
                    </span>
                    <span data-aos="fade-down" data-aos-delay='600'> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-5.jpg' 
                        />
                    </span>
                </div>
            </section>

 

        </main>
        `;
        return markup;
    },
}


export {page as About}