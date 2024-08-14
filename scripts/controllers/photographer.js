/* eslint-disable prefer-const */
const formModal = document.getElementById('contact-modal')
const lightboxModal = document.getElementById('lightbox-modal')
const lightboxContent = document.querySelector('.lightbox-content')
const contentElements = document.querySelectorAll('.content')
let MediaInfos = []
let photographerName = ''
let currentPhotoID = 0
let extraLikesdAdded = 0
let totalLikes

async function init () {
// ------------------------//
//    PORTFOLIO HEADER    //
// ------------------------//

  // Chemin vers les données json
  const pathToData = './data/photographers.json'

  // Récupère l'ID du photographe
  const photographerId = getPhotographerQueriedId()

  // Récupère les infos du photographe (avec le path vers le json et son ID)
  const photographerInfos = await getPhotographerDataById(pathToData, photographerId)

  // Complète et hydrate le Header du Portfolio
  displayPortfolioHeader(photographerInfos)

  // ------------------//
  //    PORTFOLIO     //
  // ------------------//

  // Récupère le nom du photographe
  photographerName = await getPhotographerNameById(pathToData, photographerId)

  // Récupère les médias du photographe
  MediaInfos = await getMediasDataByIdFilteredByPopularity(pathToData, photographerId)

  // Affiche le Portfolio
  displayPortfolio(photographerName, MediaInfos)

  // Ecoute le TRI et Update les MEDIAS du photographe
  async function updatePortfolio (filterSelected) {
    switch (filterSelected) {
      case 'Popularité':
        MediaInfos = await getMediasDataByIdFilteredByPopularity(pathToData, photographerId)
        displayPortfolio(photographerName, MediaInfos)
        break
      case 'Date':
        MediaInfos = await getMediasDataByIdFilteredByDate(pathToData, photographerId)
        displayPortfolio(photographerName, MediaInfos)
        break
      case 'Titre':
        MediaInfos = await getMediasDataByIdFilteredByTitle(pathToData, photographerId)
        displayPortfolio(photographerName, MediaInfos)
        break
    }
  }

  const filterDOM = document.querySelector('.order-by')
  filterDOM.addEventListener('change', (event) => {
    updatePortfolio(event.target.value)
  })

  // --------------------//
  //     LIGHTBOX       //
  // --------------------//

  // ------------------//
  //     FOOTER       //
  // ------------------//

  totalLikes = await getSumOfLikesById(pathToData, photographerId)
  const price = await getPriceById(pathToData, photographerId)
  displayPortfolioFooter(totalLikes, price)

  // ------------------//
  //   FORMULAIRE     //
  // ------------------//
  displayNameInModal(photographerName)
}

init()
