const m = require('mithril')
const Vehicles = require('../model/Vehicles')

module.exports = {
    oninit: Vehicles.loadList,
    view() {
        return m("ul.list-group", Vehicles.list.map(vehicle => {
            return m("li.list-group-item.text-center", vehicle.name)
        }))
    }
}