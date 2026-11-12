const filterButtons = document.querySelectorAll('.filter-btn')
const heroList = document.getElementById('hero-list')
const searchInput = document.getElementById('Search')

let selectedRole = 'All'

function showHeroes(list) {

    // console.log(list);
    heroList.innerHTML = "";

    if (list.length === 0) {
        const emptyMessage = document.createElement("p")
        emptyMessage.className = "empty";
        emptyMessage.textContent = "Tidak ada Hero yang ditemukan";
        heroList.appendChild(emptyMessage);
        return;
    }

    heroList.replaceChildren()

    list.forEach(hero => {
        const card = document.createElement('div')
        card.classList.add('hero-card')

        const image = document.createElement('img')
        image.src = hero.image
        image.alt = hero.name
        card.appendChild(image)

        const description = document.createElement('div')
        description.classList.add('hero-desc')

        const name = document.createElement('h3')
        name.textContent = hero.name

        const nickname = document.createElement('p')
        nickname.textContent = hero.nickname

        const roles = document.createElement('p')
        roles.textContent = hero.role.join(', ')

        description.append(name, nickname, roles)
        card.appendChild(description)
        heroList.appendChild(card)
    });



    //      <div class="hero-card"><img src="images/Aamon.png" alt="Aamon">
    //          <div class="hero-desc">
    //         <h3>Aamon</h3>
    //         <p>Duke of Shards</p>
    //         <p>Assassin</p>
    //          </div>
    //      </div>
}

function filterAndRender() {
    const keyword = searchInput.value.toLowerCase().trim();
    // console.log(keyword);
    const filtered = heroes.filter(function (hero) {
        // console.log(hero);
        const f = hero.role.some(el => el.toLowerCase() === selectedRole.toLowerCase())
        // console.log(f);

        // console.log(hero.role.toString());

        const matchName = hero.name.toLocaleLowerCase().includes(keyword);

        // console.log(matchRole);
        // console.log(matchName);

        return (selectedRole === 'All' || f) && matchName
    })
    // console.log(filtered);
    showHeroes(filtered)
}
// filterAndRender


filterButtons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function () {
        // console.log(button);
        filterButtons.forEach(function (btn) {
            // console.log(btn);
            btn.classList.remove('active')
        })
        button.classList.add("active");
        selectedRole = button.dataset.role

        console.log(selectedRole);
        filterAndRender();
    })
})


searchInput.addEventListener('input', function () {
    filterAndRender()
})


showHeroes(heroes)

