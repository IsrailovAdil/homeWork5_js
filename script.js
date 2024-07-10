
const title=document.querySelector('#h2')
const color=document.querySelector('#color')
const birth=document.querySelector('#birth')
const height=document.querySelector('#height')
const  mass=document.querySelector('#mass')


fetch('https://swapi.dev/api/people/11')
.then(res=>res.json())
.then(data => {
    title.innerHTML='Name:' + data['name']
    color.innerHTML='Color:' + data['skin_color']
    birth.innerHTML='Birth:' + data['birth_year']
    height.innerHTML='Height:' + data['height']
    mass.innerHTML='Mass:' + data['mass']

})


const  homePlanet=document.querySelector('#home-planet')

fetch('https://swapi.dev/api/planets/1/')
    .then(res=>res.json())
    .then(data => {
        homePlanet.innerHTML='Homeplanet: '+data['name']
    })


const model=document.querySelector('#model')
const cost=document.querySelector('#cost')
const titl=document.querySelector('#h3')
const max_speed=document.querySelector('#max_speed')

fetch('https://swapi.dev/api/starships/39')
    .then(res=>res.json())
    .then(data => {
        titl.innerHTML='Starship: ' + data['name']
        model.innerHTML='model: '+data['model']
        cost.innerHTML='Cost: ' + data['cost_in_credits']
        max_speed.innerHTML='Max speed: '+data['max_atmosphering_speed']

    })