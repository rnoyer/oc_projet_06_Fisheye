async function init () {
  // Chemin vers les données json
  const pathToData = './data/photographers.json'

  // Récupère les datas des photographes
  const photographersData = await getPhotographersData(pathToData)

  // Appelle le modele avec les datas
  displayData(photographersData)
}

init()
