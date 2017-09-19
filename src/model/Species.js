const m = require('mithril')

const Species = {
    list: [],
    loadList: () => {
        m.request({
            method: "GET",
            url: "https://swapi.co/api/species/"
        }).then(res => {
            Species.list = res.results
        })
    }
}

module.exports = Species