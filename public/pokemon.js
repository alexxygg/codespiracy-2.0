//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const urlNoNumber =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 906; i++) {
  const pokemonImg = document.createElement("img");
  pokemonImg.src = `${urlNoNumber}${i}.png`;
  pokemonImg.classList.add("newImg");
  const singleDiv = document.createElement("span");
  singleDiv.classList.add("border12", "radial-repeating");

  singleDiv.appendChild(pokemonImg);

  const singleSpan = document.createElement("span");
  singleDiv.appendChild(singleSpan);
  singleSpan.innerText = `${i}`;
  container.appendChild(singleDiv);
}
