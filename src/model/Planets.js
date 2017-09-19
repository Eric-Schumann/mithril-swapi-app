const m = require('mithril')

const Planets = {
    list: [],
    loadList: () => {
        m.request({
            method: "GET",
            url: "https://swapi.co/api/planets/"
        }).then(res => {
            Planets.list = res.results
        })
    }
}

module.exports = Planets