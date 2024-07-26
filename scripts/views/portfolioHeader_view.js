function headerTemplate (data) {
  const { name, tagline, city, country, portrait } = data

  function getUserPictureDOM () {
    const picture = `assets/photographers/${portrait}`
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('aria-label', name)
    img.setAttribute('tabindex', '0')

    return (img)
  }

  function getUserInfosDOM () {
    const h1 = document.createElement('h1')
    h1.className = 'header-name'
    h1.textContent = name

    const location = document.createElement('p')
    location.className = 'header-location'
    location.textContent = `${city}, ${country}`

    const pTagline = document.createElement('p')
    pTagline.textContent = tagline
    pTagline.className = 'header-tagline'

    const infoDiv = document.createElement('div')
    infoDiv.className = 'photographer-infos'
    infoDiv.setAttribute('tabindex', '0')
    infoDiv.append(h1, location, pTagline)
    return (infoDiv)
  }
  return { getUserPictureDOM, getUserInfosDOM }
}

// Mettre le code JavaScript lié à la page photographer.html
function displayPortfolioHeader (photographInfosHeader) {
  const photographersSection = document.querySelector('.photograph-header')

  const photographerModel = headerTemplate(photographInfosHeader)

  const userImgDOM = photographerModel.getUserPictureDOM()
  photographersSection.append(userImgDOM)
  const userCardDOM = photographerModel.getUserInfosDOM()
  photographersSection.prepend(userCardDOM)
}
