const m = require('mithril')
const Planets = require('../model/Planets')

module.exports = {
    oninit: Planets.loadList,
    view() {
        return m("ul.list-group", Planets.list.map(planet => {
            return m("li.list-group-item.text-center", planet.name)
        }))
    }
}