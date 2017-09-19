const m = require('mithril')

module.exports = {
    view() {
        return m("nav", [
            m('ul.nav.justify-content-center', [
                m("li.nav-item[role=presentation]", [
                    m("a.nav-link[href=/]", { oncreate: m.route.link }, "Home")
                ]),
                m("li[role=presentation].nav-item", [
                    m("a.nav-link[href=/people]", { oncreate: m.route.link }, "People")
                ]),
                m("li[role=presentation].nav-item", [
                    m("a.nav-link[href=/films]", { oncreate: m.route.link }, "Films")
                ]),
                m("li[role=presentation].nav-item", [
                    m("a.nav-link[href=/starships]", { oncreate: m.route.link }, "Starships")
                ]),
                m("li[role=presentation].nav-item", [
                    m("a.nav-link[href=/vehicles]", { oncreate: m.route.link }, "Vehicles")
                ]),
                m("li[role=presentation].nav-item", [
                    m("a.nav-link[href=/species]", { oncreate: m.route.link }, "Species")
                ]),
                m("li[role=presentation].nav-item", [
                    m("a.nav-link[href=/planets]", { oncreate: m.route.link }, "Planets")
                ])
            ])
        ])
    }
}

