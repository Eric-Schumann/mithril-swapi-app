const m = require('mithril')
const Navbar = require('./Navbar')

module.exports = {
    view(vnode) {
        return [
            m(Navbar),
            m('.container', [
                m("header", [
                    m('h1.text-center', 'Welcome to the SWAPI App!'),
                ]),
                
                m("section", vnode.children)
            ]) 
        ]
    }
}