const m = require('mithril')
const Person = require('../model/Person')

module.exports = {
    oninit: (vnode) => {
        let id = vnode.attrs.id
        Person.getPerson(id)
    },
    view() {
        if(!Person.loaded) {
            return m("h5.text-center", "Loading....")
        } else {
            return m("#page", [
                        m("table.table.table-bordered", [
                            m("thead", [
                                m("tr", [
                                    m("th[colspan=8]", [
                                        m("h3.text-center", Person.result.name)
                                    ])
                                ]),
                                m("tr", [
                                    m("th", "Gender"),
                                    m("th", "Birth Year"),
                                    m("th", "Height"),                        
                                    m("th", "Eye Color"),
                                    m("th", "Hair Color"),
                                    m("th", "Skin Color"),
                                    m("th", "Mass"),                                    
                                    m("th", "Homeworld"),
                                    m("th", "Species")
                                ])
                            ]),
                            m("tbody", [
                                ("tr", [
                                    m("td", Person.result.gender),
                                    m("td", Person.result.birth_year),
                                    m("td", Person.result.height),
                                    m("td", Person.result.eye_color),
                                    m("td", Person.result.hair_color),
                                    m("td", Person.result.skin_color),
                                    m("td", Person.result.mass),
                                    m("td.text-center", !Person.homeworldLoaded ? "Loading...." : [
                                        m("a[href=#!/].btn.btn-primary.btn-sm", Person.homeworld.name)
                                    ]),
                                    m("td.text-center", !Person.speciesLoaded ? "Loading...." : [
                                        m("a[href=#!/].btn.btn-primary.btn-sm", Person.species.name)
                                    ]),
                                ])
                            ])
                        ]),
                        m("section", Person.films === Person.result.films.length ? "" : [
                            m("h2.text-center", Person.result.name + " has been in the following films: "),
                            m("ul.list-group", [
                                Person.films.map(film => {
                                    return m("li.list-group-item.text-center", film.title)
                                })
                            ])
                        ])
                      ])
                    }
    }
}