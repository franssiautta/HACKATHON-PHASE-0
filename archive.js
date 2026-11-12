const archiveList = document.getElementById('archive-list')

archivedHeroes.forEach(function (hero) {
    const card = document.createElement('article')
    card.classList.add('archive-card')

    const image = document.createElement('img')
    image.src = hero.image
    image.alt = `Ilustrasi ${hero.name}`
    image.loading = 'lazy'

    const heading = document.createElement('h2')
    heading.textContent = hero.name

    const description = document.createElement('p')
    description.textContent = hero.description

    card.append(image, heading, description)
    archiveList.appendChild(card)
})
