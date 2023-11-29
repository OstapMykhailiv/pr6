const header = document.querySelector('header')
const section = document.querySelector('section')

const requestURL = 'https://semegenkep.github.io/json/example.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()
request.onload = function () {
    const superHeroes = request.response
    console.log(superHeroes.members)
    populateHeader(superHeroes)
    showHeroes(superHeroes.members)
}

function populateHeader(superHeroes){
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.innerText = superHeroes.squadName
    p.innerText = `Hometown: ${superHeroes.homeTown} // Formed: ${superHeroes.formed}`

    header.append(h1, p)
}

function showHeroes(members){
    for(let i = 0; i<members.length; i++){
        let article = document.createElement('article')
        let name = document.createElement('h2')
        let secretIdentity = document.createElement('p')
        let age = document.createElement('p')
        let superpowers = document.createElement('p')
        let powers = document.createElement('ul')

        name.innerText = members[i].name
        secretIdentity.innerText = `Secret identity: ${members[i].secretIdentity}`
        age.innerText = `Age: ${members[i].age}`
        superpowers.innerText = 'Superpowers'

        for(let j=0; j<members[i].powers.length; j++){
            let li = document.createElement('li')
            li.innerText = members[i].powers[j]
            powers.appendChild(li)
        }

        article.append(name, secretIdentity, age, superpowers, powers)
        section.appendChild(article)
    }
}
