import {Header} from '../components/Header.js'
import {Footer} from '../components/Footer.js'
import {SAVINGS, MONTHS_PER_YEAR} from '../global.js';

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
    async afterRender() {
    }
}


const main = {
    render() {
        return( /*html*/`
        <main id='home'>
            <section class='hero'>
                <div class='hero-text'>
                    <h1>
                        Clean energy starts here
                    </h1>
                    <img src='./assets/img/dots.svg' class='dots dots-large' alt='Divider'/>
                    <p>Northern Colorado's premiere solution for solar panel installation and cleaning, electric vehicle chargers and energy monitoring.</p>
                    <button data-target='contact form' class='btn btn-lg btn-primary'>Get a quote</button>
                </div>
                <div class='video-overlay'></div>
                <video autoplay muted loop>
                    <source src="./assets/video/hero.mp4" type="video/mp4">
                </video>
            </section>

            <section class='clients'>  
                <div class='max-width'>
                    <span> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-1.jpg' 
                        />
                    </span>
                    <span> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-2.jpg' 
                        />
                    </span>
                    <span> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-3.jpg' 
                        />
                    </span>
                    <span> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-4.jpg' 
                        />
                    </span>
                    <span> 
                        <img 
                            class='client' 
                            src='./assets/img/clients-5.jpg' 
                        />
                    </span>
                </div>
            </section>

            <section class='about-us'>
                <div class='max-width narrow grid'>
                    <div>
                        <div class='section-header' data-aos="fade-down" data-aos-delay='200'>
                            <div class='row align-center'>
                                <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                                <p class='section-header-pretitle'>About Us</p>
                            </div>
                            <h2 class='section-header-title'>A Team You Can <span class='bold'>Trust</span></h2>
                        </div>
                        <div class='section-body' data-aos="fade-down" data-aos-delay='500'>
                            <p class='text'>
                            Nulla tellus sem, viverra eu, ultricies ac, mattis et, velit. Maecenas quis magna. Ut viverra nisl eu ipsum. Maecenas rhoncus. Duis mattis nisi nec sapien. Nullam eu ante non enim tincidunt fringilla. Integer leo. Duis eget enim.Curabitur felis erat, tempus eu, placerat et, pellentesque sed, purus. Sed sed diam. Nam nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aenean risus est, porttitor vel, placerat sit amet, vestibulum sit amet, nibh. Ut faucibus.
                            </p>
                            <a 
                                href='#about'
                                class='btn btn-lg btn-secondary' 
                            >Find out more</a>

                        </div>

                    </div>

                    <div>
                        <img 
                            class='about-us-img' src='./assets/img/about-us-1.jpg' 
                            alt='A technician installing a solar panel.'
                            data-aos="fade-down" data-aos-delay='1500'
                        >
                        <img 
                            class='about-us-img' 
                            src='./assets/img/about-us-2.jpg' 
                            alt='A clean solar panel.'
                            data-aos="fade-down" data-aos-delay='2000'
                        >

                    </div>

                </div>
            </section>

            <section class='consultation'>
                <div class='wrapper'>
                    <h3 data-aos="fade-down" data-aos-delay='500'>Get a free consultation about your project</h3>
                    <img 
                        src='./assets/img/dots.svg' 
                        class='dots' 
                        alt='Divider'
                        data-aos="fade-down" data-aos-delay='750'
                    />
                    <p 
                        class='text'
                        data-aos="fade-down" data-aos-delay='1000'
                    >
                        Nulla vestibulum eleifend nulla. Suspendisse potenti. Aliquam turpis nisi, venenatis non, accumsan nec, imperdiet laoreet, lacus. In purus est, mattis eget, imperdiet nec.
                    </p>
                    <button 
                        class='btn btn-lg btn-primary'
                        data-aos="fade-down" data-aos-delay='1100'
                        data-target='contact form'
                    >Get a quote</button>
                </div>

            </section>


            <section class='counter'>
                <div class='max-width'>
                    <div class='group' id='counter' data-aos="fade-down">
        
                        <div class='item' data-aos="fade-down" data-aos-delay='0'>
                            <div class='icon'>
                                <img src='./assets/icons/counter-icon-1.svg' alt='File icon' />
                            </div>
                            <div>
                                <p class='title counting' id='counter-1'></p>
                                <p class='subtitle'>Projects Completed</p>
                                <p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
        
                        <div 
                            class='item' 
                            data-aos="fade-down" 
                            data-aos-delay='250'
                        >
                            <div class='icon'>
                                <img src='./assets/icons/counter-icon-2.svg' alt='Check icon' />
                            </div>
                            <div>
                                <p class='title counting' id='counter-2'></p>
                                <p class='subtitle'>Financing</p>
                                <p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
        
                        <div class='item' data-aos="fade-down" data-aos-delay='500'>
                            <div class='icon'>
                                <img src='./assets/icons/counter-icon-3.svg' alt='Calendar icon' />
                            </div>
                            <div>
                                <p class='title counting' id='counter-3'></p>
                                <p class='subtitle'>Warranty</p>
                                <p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
        
                    </div>
                </div>
            </section>

            <section class='why-choose-solar'> 
                <img src='./assets/img/family.jpg' alt='Family holding hands'
                class='family'
                />
                <div class='list'>
                    <div class='row align-center dot-divider' data-aos="fade-down" data-aos-delay='100'> 
                        <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                        <p class='section-header-pretitle'>Why choose solar</p>
                    </div>
                    <div>
                        <div data-aos="fade-down" data-aos-delay='200'>
                            <h2>Clean, Safe Energy</h2>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div data-aos="fade-down" data-aos-delay='500'>
                            <h2>Reduced Utility Rates</h2>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div data-aos="fade-down" data-aos-delay='700'>
                            <h2>Tax Incentives</h2>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section class='services'>  
                <div class='max-width narrow'>
                    <div class='column align-center'  data-aos="fade-down" data-aos-delay='400'>
                        <p class='section-header-pretitle'>Our Services</p>
                        <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                        <h1 class='section-header-title'>Offering <span class='bold'>Unique Solutions</span></h1>
                        <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class='grid'>
                        <div class='service'  data-aos="fade-down" data-aos-delay='200'>
                            <img src='./assets/icons/service-icon-1.svg' alt='Residential icon'/>
                            <h3>Residential</h3>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class='service' data-aos="fade-down" data-aos-delay='400'>
                            <img src='./assets/icons/service-icon-2.svg' alt='Commercial icon'/>
                            <h3>Commercial</h3>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class='service' data-aos="fade-down" data-aos-delay='600'>
                            <img src='./assets/icons/service-icon-3.svg' alt='Solar energy systems icon'/>
                            <h3>Solar Energy Systems</h3>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class='service' data-aos="fade-down" data-aos-delay='800'>
                            <img src='./assets/icons/service-icon-4.svg' alt='Energy storage icon'/>
                            <h3>Energy Storage</h3>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class='service' data-aos="fade-down" data-aos-delay='1000'>
                            <img src='./assets/icons/service-icon-5.svg' alt='Home monitoring icon'/>
                            <h3>Home Monitoring</h3>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class='service' data-aos="fade-down" data-aos-delay='1200'>
                            <img src='./assets/icons/service-icon-6.svg' alt='Solar panel cleaning icon'/>
                            <h3>Solar Panel Cleaning</h3>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <a href='#services' class='btn btn-secondary btn-lg' data-aos="fade-down" data-aos-delay='1000'>See all services</a>
                </div>
            </section>


            <section class='testimonials off-white' id='testimonials'>  
                <div class='max-width narrow'>
                    <div class='section-header' data-aos="fade-down" data-aos-delay='400'>
                        <div class='row align-center'>
                            <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                            <p class='section-header-pretitle'>Testimonials</p>
                        </div>
                        <h2 class='section-header-title'>See Why Others <span class='bold'>Choose Us</span></h2>
                        <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class='grid'>
                        <div class='testimonial' data-aos="fade-down" data-aos-delay='200'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
 
                        <div class='testimonial' data-aos="fade-down" data-aos-delay='400'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
 
                        <div class='testimonial' data-aos="fade-down" data-aos-delay='600'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
 
                        <div class='testimonial' data-aos="fade-down" data-aos-delay='800'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
 
                        <div class='testimonial' data-aos="fade-down" data-aos-delay='1000'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
 
                        <div class='testimonial' data-aos="fade-down" data-aos-delay='1200'>
                            <h3>Tony Stark</h3>
                            <p class='role'>CEO Stark Industries</p>
                            <p class='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
 
                    </div>
                </div>
            </section>

            <section class='save-with-solar'>
                <div class='max-width narrow'>
                    <div class='section-header'>
                        <div class='column align-center' data-aos="fade-down" data-aos-delay='400'>
                            <p class='section-header-pretitle'>Save With Solar</p>
                            <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                        </div>
                        <h2 class='section-header-title'
                        data-aos="fade-down" data-aos-delay='600'
                        >What is your average <span class='bold'>electric bill?</span></h2>

                        <div class="slider-container"
                        data-aos="fade-down" data-aos-delay='800'
                        >
                            <p class='output'>$<span id='slider-output'>100</span></p>
                            <input type="range" min="0" max="200" value="100" class="slider" data-target='slider'>
                        </div>
                    </div>
                    <div class='grid'>
                        <div data-aos="fade-down" data-aos-delay='1000'>
                            <h3>Average Savings</h3>
                            <div class='savings-row'>
                                <div class='savings'>
                                    <p class='text'>Per Month</p>
                                    <p class='amount'>$<span id='slider-output-month'>${Math.floor(100 * SAVINGS)}</span></p>
                                </div>
                                <div>
                                    <p class='text'>Per Year</p>
                                    <p class='amount'>$<span id='slider-output-year'>${Math.floor(100 * SAVINGS * MONTHS_PER_YEAR)}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class='coverage' data-aos="fade-down" data-aos-delay='1200'>
                            <h4>Complete Coverage</h4>
                            <p class='text'>Most solar panels on the market come with a warranty of 10 to 15 years.  We have you covered with a <span class='bold secondary'>25-year warranty.</span></p>
                            <a href='#services' class='btn btn-white btn-lg show-me'>Show me</a>

                        </div>
                    </div>

                </div>

            </section>

            <section class='solar-panel-cleaning'>
                <div class='max-width narrow'>
                    <div class='section-header' data-aos="fade-down" data-aos-delay='400'>
                        <div class='row align-center'>
                            <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                            <p class='section-header-pretitle'>Protect Your Investment</p>
                        </div>
                        <h2 class='section-header-title'>Solar Panel Cleaning</h2>
                    </div>
                    <div data-aos="fade-down" data-aos-delay='600'>
                        <p class='text'
                        
                        >We only use the highest quality pure reverse osmosis deionized water for the most efficient solar panel cleaning. No added contaminants or toxic soaps wearing on your system. Schedule your solar panel cleaning today!</p>
                        <h5>Regular solar panel cleanings can <span class='primary'>increase</span> efficiency by <span class='primary'>20%</span></h5>
                    </div>
                    <a 
                        data-target='contact form' 
                        class='btn btn-lg btn-primary'
                        data-aos="fade-down" data-aos-delay='800'
                    >Get a free estimate</a> 
                </div>
            </section>

            <section class='contact-us off-white' id='contact'>
                <div class='max-width narrow'>
                    <div class='section-header'>
                        <div class='row align-center' data-aos="fade-down" data-aos-delay='400'>
                            <img src='./assets/img/dots.svg' class='dots dots-small' alt='Divider'/>
                            <p class='section-header-pretitle'>Get in touch</p>
                        </div>
                        <div data-aos="fade-down" data-aos-delay='400'>
                            <h2 class='section-header-title'
                            >Contact us for a <span class='bold'>free estimate</span> on all services</h2>
                            <p class='text'>Fill out the form below to schedule a free consultation or if you have any questions about getting solar.</p>
                        </div>
                    </div>

                    <form data-aos="fade-down" data-aos-delay='800'>
                        <div class='inputs'>
                            <input type='text' name='first-name' placeholder='First name'/>
                            <input type='text' name='last-name' placeholder='Last name'/>
                            <input type='email' name='email' placeholder='Email'/>
                            <input type='tel' name='phone' placeholder='Phone' 
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            />
                            <textarea name='message' placeholder='How can we help you?'></textarea>
                        </div>
                        <button class='btn btn-lg btn-secondary' type='submit'>Get a quote</button>
                    </form>
                  
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
        `);
    },
    afterRender() {
    }
}

export {page as Home}