async function init() {

//------------------------//
//    PORTFOLIO HEADER    //
//------------------------//

  // Chemin vers les données json
  const pathToData = "./data/photographers.json"
  // Récupère l'ID du photographe
  const photographerId = getPhotographerQueriedId()
  // Récupère les infos du photographe (avec le path vers le json et son ID)
  const photographerInfos = await getPhotographerDataById(pathToData, photographerId);

  // Complète et hydrate le Header du Portfolio
  displayPortfolioHeader(photographerInfos);

//------------------//
//    PORTFOLIO     //
//------------------//
  
  // Récupère le nom du photographe
  const photographerName = await getPhotographerNameById(pathToData, photographerId)
  // Récupère les médias du photographe
  const MediaInfos = await getMediasDataById(pathToData, photographerId);
  
  // Affiche le Portfolio
  displayPortfolio(photographerName, MediaInfos);

//------------------//
//     FOOTER       //
//------------------//

  const likes = await getSumOfLikesById(pathToData, photographerId)
  const price = await getPriceById(pathToData, photographerId)
  displayPortfolioFooter(likes,price)

}

init();
