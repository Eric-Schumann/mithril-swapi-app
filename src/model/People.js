const m = require('mithril')

const People = {
    list: [],
    loadList: () => {
        m.request({
            method: "GET",
            url: "https://swapi.co/api/people/"
        }).then(res => {
            People.list = res.results
        })
    }
}

module.exports = People