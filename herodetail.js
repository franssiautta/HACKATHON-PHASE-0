// global heroes
const parameter = new URLSearchParams(window.location.search);
const heroName = parameter.get("name");

const detailContainer = document.getElementById("detail-card");

const hero = heroes.find(function(h) {
    // console.log(h);
    return h.name.toLowerCase() === (heroName || "").toLowerCase();
})

function renderDetail(){

    if(!hero){
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
    image.src = hero.image
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
    
    const role = document.createElement('p')
    role.classList.add('hero-role')
    role.textContent = hero.role.join(', ')
    // console.log(role);
    
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
    info.append(name, nickname, role, loreSection)
    description.append(imageBox, info)
    
    detailContainer.replaceChildren(description)
}    

renderDetail()
