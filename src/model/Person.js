const m = require('mithril')

const Person = {
    result: {},
    species: null,
    speciesLoaded: false,
    homeworld: null,
    homeworldLoaded: false,
    films: [],
    loaded: false,
    getPerson: (name) => {
        Person.loaded = false
        Person.homeworldLoaded = false
        Person.speciesLoaded
        Person.films = []

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
                url: Person.result.species
            }).then(res => {
                Person.species = res
                Person.speciesLoaded = true
            })

            Person.result.films.map(film => {
                m.request({
                    method: "GET",
                    url: film
                }).then(res => {
                    Person.films.push(res)
                })
            })
        })
    }
}

module.exports = Person