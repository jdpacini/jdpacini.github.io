import {Navbar} from '../components/Navbar.js'
import {Menu} from '../components/Menu.js'

const component = {
    render() {
        return( /*html*/`
        ${Menu.render()}
        <header id='header' class='scrolled'>
            ${Navbar.render()}
        </header>
        `);
    },
    afterRender() {}
}

export {component as Header}