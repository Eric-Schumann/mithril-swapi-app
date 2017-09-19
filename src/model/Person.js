const m = require('mithril')

const Person = {
    result: {},
    homeworld: null,
    homeworldLoaded: false,
    films: null,
    loaded: false,
    getPerson: (name) => {
        Person.loaded = false
        Person.homeworldLoaded = false

        m.request({
            method: "GET",
            url: "https://swapi.co/api/people/?search=" + name
        }).then(res => {
            Person.result = res.results[0]
            Person.loaded = true

            m.request({
                method: "GET",
                url: Person.result.homeworld
            }).then(res => {
                Person.homeworld = res
                Person.homeworldLoaded = true
            })

            m.request({
                method: "GET",
                url: Person.result.films
            }).then(res => {
                Person.films = res
            })

        })
    }
}

module.exports = Person