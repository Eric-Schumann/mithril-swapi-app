const m = require('mithril')

const Film = {
    result: {},
    loaded: false,
    getFilm: (name) => {
        Film.loaded = false;
        m.request({
            method: "GET",
            url: "https://swapi.co/api/films/?search=" + name
        }).then(res => {
            Film.result = res.results[0]
            Film.loaded = true;
        })
    }
}

module.exports = Film