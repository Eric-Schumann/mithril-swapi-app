const m = require('mithril')
const Species = require('../model/Species')

module.exports = {
    oninit: Species.loadList,
    view() {
        return m("ul.list-group", Species.list.map(specie => {
            return m("li.list-group-item.text-center", specie.name)
        }))
    }
}