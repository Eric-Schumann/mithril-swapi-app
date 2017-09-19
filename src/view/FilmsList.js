const m = require('mithril')
const Films = require('../model/Films')

module.exports = {
    oninit: Films.loadList,
    view() {
        return m("ul.list-group", Films.list.map(film => {
            return m("li.list-group-item.text-center", [
                m("a[href=/film/" + film.title + "]", { oncreate: m.route.link }, film.title)
            ])
        }))
    }
}