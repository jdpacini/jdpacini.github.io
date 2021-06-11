const component = {
    render() {
        return( /*html*/`
        <nav class='row space-between' id='navbar'
        >
            <a href='#'><img src='./assets/img/logo.png' class='logo' alt='SWAT Energy Systems'/></a>

            <div class='row links'>
                <a href='#about'>About</a>
                <a href='#services'>Services</a>
                <a href='#solutions'>Efficiency Solutions</a>
                <a href='#payment'>Make A Payment</a>
            </div>

            <div class='row'>
                <a class='btn btn-lg btn-primary' href='tel:9702366177'>(970) 236-6177</a>
            </div>
        </nav>
        `);
    },
    afterRender() {}
}

export {component as Navbar}