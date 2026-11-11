
const filterButtons = document.querySelectorAll('.filter-btn')
let selectedElement = 'All'

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedElement = button.dataset.element;
        console.log(selectedElement);

    });
});

const listHero = document.querySelector('#hero-list')

heroes.forEach(function (hero) {
    const card = document.createElement('div')
    card.classList.add('hero-card')
    // console.log(hero);
    const heroImage = document.createElement('img')
    heroImage.src = hero.image
    card.appendChild(heroImage)

    const heroName = document.createElement('h3')
    heroName.textContent = hero.name
    card.appendChild(heroName)

    const heroNickname = document.createElement('p')
    heroNickname.textContent = hero.nickname
    card.appendChild(heroNickname)

    const heroRole = document.createElement('p')
    heroRole.textContent = hero.role
    card.appendChild(heroRole)

    listHero.appendChild(card)
})

