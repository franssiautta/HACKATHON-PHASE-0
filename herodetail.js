// global heroes
const parameter = new URLSearchParams(window.location.search);
const heroName = parameter.get("name");

const detailContainer = document.getElementById("detail-card");

const hero = heroes.find(function (h) {
    // console.log(h);
    return h.name.toLowerCase() === (heroName || "").toLowerCase();
})

function getHeroSkills(hero) {
    const fileName = hero.name.replace(/[ ']/g, '_')
    if (!hero.skills || typeof hero.skills !== 'object') {
        throw new Error(`Data skill tidak ditemukan untuk ${hero.name}`)
    }

    return Object.entries(hero.skills).map(function ([key, name]) {
        let fileNameForSkill

        if (/^skill[1-3]$/.test(key)) {
            fileNameForSkill = `${key}-${fileName}.png`
        } else if (key === 'ultimate') {
            fileNameForSkill = `ultimate-${fileName}.png`
        } else if (/^ulti[1-4]$/.test(key)) {
            fileNameForSkill = `ultimate-${fileName}-${key.slice(4)}.png`
        } else {
            throw new Error(`Key skill tidak dikenal untuk ${hero.name}: ${key}`)
        }

        return {
            name,
            src: `skill-icons/${fileName}/${fileNameForSkill}`
        }
    })
}

function renderDetail() {

    if (!hero) {
        // detailContainer.innerHTML = `
        //     <div class="empty">
        //         <h2>Hero tidak ditemukan</h2>
        //         <p>Data hero "${heroName || 'Tidak diketahui'}" tidak ditemukan.</p>
        //     </div>
        // `
        const emptyMessage = document.createElement('div')
        emptyMessage.classList.add('empty')
        // console.log(emptyMessage);

        const heading = document.createElement('h2')
        heading.textContent = 'Hero tidak ditemukan'

        const message = document.createElement('p')
        message.textContent = `Data hero "${heroName}" tidak ditemukan`

        emptyMessage.append(heading, message)
        detailContainer.replaceChildren(emptyMessage)

        return
    }

    document.title = `${hero.name} - Detail Hero`

    const description = document.createElement('description')
    description.classList.add('detail-card')
    // console.log(description);

    const imageBox = document.createElement('div')
    imageBox.classList.add('detail-image-box')
    // console.log(imageBox);

    const image = document.createElement('img')
    image.src = `full-image/${hero.name}.png`
    image.alt = hero.name
    imageBox.appendChild(image)
    // console.log(image);

    const info = document.createElement('div')
    info.classList.add('detail-info')
    // console.log(info);

    const name = document.createElement('h2')
    name.textContent = hero.name
    // console.log(name);
    
    const nickname = document.createElement('p')
    nickname.classList.add('hero-nickname')
    nickname.textContent = hero.nickname
    // console.log(nickname);

    const roles = document.createElement('div')
    roles.classList.add('hero-roles')


    hero.role.forEach(function (heroRole) {
        const role = document.createElement('span')
        role.classList.add('hero-role')
        role.textContent = heroRole
        roles.appendChild(role)
    })

    const loreSection = document.createElement('section')
    loreSection.textContent = ''
    // console.log(loreSection);

    const loreHeading = document.createElement('h3')
    loreHeading.textContent = 'Lore'
    // console.log(loreHeading);

    const lore = document.createElement('p')
    lore.classList.add('description-text')
    lore.textContent = hero.lore || `Lore belum tersedia`
    // console.log(lore);

    loreSection.append(loreHeading, lore)

    const skillsSection = document.createElement('section')
    skillsSection.classList.add('hero-skills')

    const skillsHeading = document.createElement('h3')
    skillsHeading.textContent = 'Skill Hero'

    const skillList = document.createElement('div')
    skillList.classList.add('skill-list')

    getHeroSkills(hero).forEach(function (skill) {
        const skillItem = document.createElement('figure')
        // console.log(skillItem);
        skillItem.classList.add('skill-item')

        const icon = document.createElement('img')
        icon.src = skill.src
        icon.alt = `${hero.name} ${skill.name}`
        icon.title = skill.name
        icon.loading = 'lazy'
        icon.addEventListener('error', function () {
            skillItem.classList.add('skill-item-error')
            icon.alt = `${hero.name} ${skill.name} (ikon tidak ditemukan)`
            console.error(`Ikon skill tidak ditemukan: ${skill.src}`)
        })

        const skillName = document.createElement('p')
        // console.log(skillName);
        skillName.classList.add('skill-name')
        skillName.textContent = skill.name

        skillItem.append(icon, skillName)
        skillList.appendChild(skillItem)
    })

    skillsSection.append(skillsHeading, skillList)
    info.append(name, nickname, roles, loreSection, skillsSection)
    description.append(imageBox, info)

    detailContainer.replaceChildren(description)
}

renderDetail()
