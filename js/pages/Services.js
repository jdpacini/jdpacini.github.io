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
        <main id='services'>
            <section class='hero'>
                <div class='hero-text'>
                    <h1>
                        Our Services
                    </h1>
                    <img src='./assets/img/dots.svg' class='dots dots-large' alt='Divider'/>
                </div>
            </section>

            <section class='service-grid-left'>
                <div class='grid'>
                    <div class='description'
                    data-aos="fade-down" data-aos-delay='100'
                    >
                        <div class='section-header'
                        
                        >
                            <div class='row align-center'>
                                <img src='./assets/icons/service-icon-3.svg' alt='Solar energy systems' class='icon'/>
                                <h2 class='section-header-title'><span class='bold'>Solar Energy Systems</span></h2>
                            </div>
                        </div>
                        <div class='section-body'>
                            <p class='text'>
                            Every year, more and more Coloradans are taking control of their energy costs by switching to solar. Colorado is ranked 12th in the nation for solar projects today, and solar capacity is projected to grow immensely thanks to our favorable geography, solar-friendly policies, and hefty incentives. In 2019, the 30% Federal Tax Credit for switching to solar expired. 2020 offered a 26% Federal Tax Credit. 2021 is the last year the Federal Government offers a tax credit towards residential projects sitting at 22%. Beat the 2021 rush and schedule your clean energy consultation today!
                            </p>
                            <button 
                            data-target='contact form'
                            class='btn btn-lg btn-white'>Get a quote</button>

                        </div>
                    </div>
                    <img src='./assets/img/services-1.jpg' alt='Home with solar panels' class='service-grid-left-img' />

                </div>
            </section>

            <section class='service-grid-right'>
                <div class='grid'>
                    <img src='./assets/img/services-2.jpg' alt='Dirty vs clean solar panel' class='service-grid-right-img' />
                    <div class='description'>
                        <div class='section-header'>
                            <div class='row align-center'>
                                <img src='./assets/icons/service-icon-6.svg' alt='Solar energy systems' class='icon'/>
                                <h2 class='section-header-title'><span class='bold'>Solar Panel Cleaning</span></h2>
                            </div>
                        </div>
                        <div class='section-body'>
                            <p class='text'>
                            Panels out in the open are exposed to a variety of contaminants, which block sunlight, reduce their efficiency and ultimately cost you money. Dirt, dust, leaves, bird poop and other airborne particles like pollen can reduce panel performance by up to 30 percent, according to the National Renewable Energy Laboratory. We offer several packages to keep your panels clean and performing at full capacity year round!
                            </p>
                        </div>
                        <div class='faq'>
                            <button class='faq-link' data-target='go to faq'>Won't the rain clean my panels?</button>
                            <button class='faq-link' data-target='go to faq'>Why can't I just hose them off?</button>
                            <button class='faq-link' data-target='go to faq'>What happens if I don't clean them?</button>
                            <button class='btn btn-lg btn-white' data-target='go to faq'>View FAQs</button>

                        </div>
                    </div>
                </div>
            </section>
            
            <section class='service-grid-left'>
                <div class='grid'>
                    <div class='description'>
                        <div class='section-header'>
                            <div class='row align-center'>
                                <img src='./assets/icons/service-icon-7.svg' alt='Electric vehicle charging stations' class='icon'/>
                                <h2 class='section-header-title'><span class='bold'>Electric Vehicle Charging Stations</span></h2>
                            </div>
                        </div>
                        <div class='section-body'>
                            <p class='text'>
                            Fueling your electric vehicle with energy produced by your home's solar system sets you up to drastically reduce or completely eliminate gas costs! Our clean energy packages come with a variety of options to conveniently integrate solar energy into any current or future electric vehicles you may own. We also assist commercial properties in implementing public charging stations where they can offer employees or visitors network-connected payment stations.
                            </p>
                            <button data-target='contact form' class='btn btn-lg btn-white'>Get started</button>

                        </div>
                    </div>
                    <img src='./assets/img/services-3.jpg' alt='Electric vehicle charging stations' class='service-grid-left-img' />

                </div>
            </section>

            <section class='service-grid-right'>
                <div class='grid'>
                    <img src='./assets/img/services-4.jpg' alt='Dirty vs clean solar panel' class='service-grid-right-img' />
                    <div class='description'>
                        <div class='section-header'>
                            <div class='row align-center'>
                                <img src='./assets/icons/service-icon-4.svg' alt='Solar energy systems' class='icon'/>
                                <h2 class='section-header-title'><span class='bold'>Battery Storage Backup</span></h2>
                            </div>
                        </div>
                        <div class='section-body'>
                            <p class='text'>
                            Storing the energy created by your solar system is a key piece towards taking control of your energy needs. The international rise in interest for backup storage is being driven by a desire for peace of mind, typically in response to rolling blackouts, natural disasters, and the potential of emergencies. Battery storage products qualify for the Federal Tax Credit and are approved under our zero-down financing options! There has never been a better time to look into battery storage backup.
                            </p>
                            <button class='btn btn-lg btn-white'
                            data-target='contact form'
                            >Discover options</button>
                        </div>

                    </div>
                </div>
            </section>

            <section class='service-grid-left last-service'>
                <div class='max-width narrow grid'>
                    <div class='description'>
                        <div class='section-header'>
                            <div class='row align-center'>
                                <img src='./assets/icons/service-icon-5.svg' alt='Home monitoring' class='icon'/>
                                <h2 class='section-header-title'><span class='bold'>Home Monitoring</span></h2>
                            </div>
                        </div>
                        <div class='section-body'>
                            <p class='text'>
                            S.W.A.T.  provides live home monitors to track energy production and usage, accessible through any device with an app. Extremely useful to pinpoint areas where home/business energy usage can be reduced without altering day-to-day habits!
                            </p>
                            <button data-target='contact form' class='btn btn-lg btn-white'>Start saving today</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class='home'>
                <img src='./assets/img/services-5.jpg' alt='Home with solar panels' class='services-5' />
            </section>

            <section class='warranty'>
                <div class='wrapper' data-aos="fade-down">
                    <h3>We offer extended warranties with every install</h3>
                    <img src='./assets/img/dots.svg' class='dots' alt='Divider'/>
                    <p class='text'>Most solar panels on the market come with a warranty of 10 to 15 years. Not only do the solar panels from SWAT include a 25-year warranty, but we also provide a 25-year warranty on the inverter, the "workhorse" of the solar system! Not many providers mention this very important piece of the project.</p>
                    <button data-target='contact form' class='btn btn-lg btn-primary'>Get a quote</button>
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


export {page as Services}