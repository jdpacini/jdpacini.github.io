const component = {
    render() {
        return( /*html*/`
        <div id='menu'>
            <a href='#'><img src='./assets/img/logo.png' class='mobile-logo' alt='SWAT Energy Systems'/></a>
            <i data-feather='menu' class='menu' data-target='menu'></i>
        </div>
        `);
    },
    afterRender() {}
}

export {component as Menu}