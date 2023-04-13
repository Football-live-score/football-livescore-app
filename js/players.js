const PlayerContainer = document.querySelector('#players-section');
const Form = document.querySelector('.Form');
const SearchPlayerInput = document.querySelector('.Search-text');
const loader = document.querySelector('.custom-loader');
const Api_url = `https://football-live-score.onrender.com/Players`;


const FetchPlayers = async () => {
  loader.style.display = 'block'
  const request = await fetch(Api_url);
  const resonse = await request.json();
  const players = await resonse;
  const data = players;
  let allprayers = data;
  loader.style.display = 'none'
  allprayers.map((player) => {
    PlayerContainer.innerHTML += `
    <div class="player-info">
        <img class="player-photo" src='${player.img}' alt="">
         <h3 class='player-name'>${player.name}</h3>
         <p>${player.desc}</p>
     </div>
        `
  });

  SearchPlayerInput.addEventListener('keyup', (e) => {
    const TextInput = e.target.value.toLowerCase();
    const t = document.querySelectorAll('.player-name');
    t.forEach((player) => {
      const item = player.firstChild;
      if (item.textContent.toLowerCase().indexOf(TextInput) !== -1) {
        player.style.display = 'block'
      } else {
        item.parentElement.parentElement.style.display = 'none'
      }
    })

  });

}


FetchPlayers();
// HandleText()






