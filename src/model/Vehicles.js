const m = require('mithril')

const Vehicles = {
    list: [],
    loadList: () => {
        m.request({
            method: "GET",
            url: "https://swapi.co/api/vehicles/"
        }).then(res => {
            Vehicles.list = res.results
        })
    }
}

module.exports = Vehicles