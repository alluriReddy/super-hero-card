var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);



const SUPERHERO_TOKEN = '1518470878982022';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById('newHeroButton');

const heroImageDiv = document.getElementById('heroImage');

const searchButton = document.getElementById('searchButton');

const searchInput = document.getElementById('searchInput');

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.powerstats)
      const serHero = json
      console.log(superHero);
      showHeroInfo(superHero) 
    })
};

const getSearchSuperHero = (name) => {
  console.log(searchInput.value)
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      console.log(hero);
      showHeroInfo(hero) ;
    })
};

const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
};

newHeroButton.onclick = () => getSuperHero(randomHero());

searchButton.onclick = () => getSearchSuperHero(searchInput.value);


const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`

  const img = `<img src="${character.image.url}" height=200 width=200/>`
  
  heroImageDiv.innerHTML = `
                            <div class="hero-detail">
                            ${name}
                            ${img}
                            <p>🧠 <span>intelligence</span>: ${character.powerstats.intelligence}</p>
                            <p>💪 <span>strength</shan>: ${character.powerstats.strength}</p>
                            <p>⚡ <span>speed</span>: ${character.powerstats.speed}</p>
                            <p>🏋️‍♂️ <span>durability</span>: ${character.powerstats.durability}</p>
                            <p>📊 <span>power</span>: ${character.powerstats.power}</p>
                            <p>⚔️ <span>combat</span>: ${character.powerstats.combat}</p>
                            <div/>

                            `
};








 