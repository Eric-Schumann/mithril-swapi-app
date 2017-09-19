const m = require('mithril')
const Layout = require('./view/Layout')
const PeopleList = require('./view/PeopleList')
const FilmsList = require('./view/FilmsList')
const StarshipsList = require('./view/StarshipsList')
const VehiclesList = require('./view/VehiclesList')
const SpeciesList = require('./view/SpeciesList')
const PlanetsList = require('./view/PlanetsList')
const Person = require('./view/Person')
const Film = require('./view/Film')

m.route(document.body, "/", {
    "/": {
        render: () => {
            return m(Layout, "Home")
        }
    },
    "/people": {
        render: () => {
            return m(Layout, m(PeopleList))
        }
    },
    "/films": {
        render: () => {
            return m(Layout, m(FilmsList))
        }
    },
    "/starships": {
        render: () => {
            return m(Layout, m(StarshipsList))
        }
    },
    "/vehicles": {
        render: () => {
            return m(Layout, m(VehiclesList))
        }
    },
    "/species": {
        render: () => {
            return m(Layout, m(SpeciesList))
        }
    },
    "/planets": {
        render: () => {
            return m(Layout, m(PlanetsList))
        }
    },
    "/person/:id": {
        render: () => {
            return m(Layout, m(Person, { id: m.route.param("id")}))
        }
    },
    "/film/:id": {
        render: () => {
            return m(Layout, m(Film, { id: m.route.param("id")}))
        }
    }
})