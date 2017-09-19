const m = require('mithril')

const Films = {
    list: [],
    loadList: () => {
        m.request({
            method: "GET",
            url: "https://swapi.co/api/films/"
        }).then(res => {
            Films.list = res.results
        })
    }
}

module.exports = Films