const m = require('mithril')

const Starships = {
    list: [],
    loadList: () => {
        m.request({
            method: "GET",
            url: "https://swapi.co/api/starships/"
        }).then(res => {
            Starships.list = res.results
            console.log(Starships.list)
        })
    }
}

module.exports = Starships