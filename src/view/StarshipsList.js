const m = require('mithril')
const Starships = require('../model/Starships')

module.exports = {
    oninit: Starships.loadList,
    view() {
        return m("ul.list-group", Starships.list.map(ship => {
            return m("li.list-group-item.text-center", ship.name)
        }))
    }
}