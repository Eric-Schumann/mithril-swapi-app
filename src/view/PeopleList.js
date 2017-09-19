const m = require('mithril')
const People = require('../model/People')

module.exports = {
    oninit: People.loadList,
    view() {
        return m("ul.list-group", People.list.map(person => {
            return m("li.list-group-item.text-center", [
                m("a[href=/person/" + person.name + "]", { oncreate: m.route.link }, person.name)
            ])
        }))
    }
}