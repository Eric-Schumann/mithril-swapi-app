const m = require('mithril')
const Film = require('../model/Film')

module.exports = {
    oninit: (vnode) => {
        let id = vnode.attrs.id
        Film.getFilm(id)
    },
    view() {
        if (!Film.loaded) {
            return m("h5.text-center", "Loading....")
        } else {
            return m(".panel.panel-default", [
                m(".panel-heading", [
                    m(".panel-title", Film.result.title)
                ]),
                m(".panel-body", [
                    m("p", Film.result.director)
                ])
            ])
        }
    }
}