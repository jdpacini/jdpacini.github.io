const component = {
    render() {
        let markup = '';
        markup += /*html*/
        `
        <footer id='footer'>
            <div class='max-width narrow'>
                <div class='footer-links'>
                    <div class='copyright'>
                        <img src='./assets/img/logo-dark.png' class='logo' alt='SWAT Energy Systems'/>
                        <p class='text'>Copyright © ${new Date().getFullYear()} S.W.A.T. Energy Systems, LLC</p> 
                    </div>
                    <div class='footer-link'>
                        <h5>Explore</h5>
                        <a href='#services' class='text'>Services</a>
                        <a href='#make-a-payment' class='text'>Make a payment</a>
                        <a data-target='go to reviews' class='text'>Reviews</a>
                    </div>
                    <div class='footer-link'>
                        <h5>About</h5>
                        <a href='#about' class='text'>Company</a>
                        <a href='#investors' class='text'>Investors</a>
                        <a href='#careers' class='text'>Careers</a>
                    </div>
                    <div class='footer-link'>
                        <h5>Contact</h5>
                        <a href='#services' class='text'>(970) 236 - 6177</a>
                        <a href='#make-a-payment' class='text'>contact@swatenergysystems.com</a>
                        <a href='#reviews' class='text'>3718 Bald Eagle Ln, Fort Collins, CO 80528</a>
                    </div>
                </div>
            </div>
            <div class='bumper max-width'>
                Built with ♥ by&nbsp;<a href="https://nocodesignworks.com" target="_blank">Northern Colorado DesignWorks</a></p>
            </div>
        
        </footer>
        `;
        return markup;
    },
    afterRender() {}
}

export {component as Footer}