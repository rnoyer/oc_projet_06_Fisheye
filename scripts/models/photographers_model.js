// recuperer les infos de tous les photographes
async function getPhotographersData(path) {
    const response = await fetch(path);
    const { photographers } = await response.json();
    return photographers;
}

// Retourne l'ID d'un photographe
function getPhotographerQueriedId(){
    const params = new URLSearchParams(document.location.search);
    const userID = parseInt(params.get("id"), 10);
    return userID
}

// Retourne les infos d'un photographe (En utilisant son ID)
async function getPhotographerDataById(path, id) {
    const data = await getPhotographersData(path)
    const photographerDataById = data.find((photographer) => photographer.id === id);
    // TO DO : gérer les erreurs > find ne trouve pas l'ID
    return photographerDataById
}

// Retourne le nom d'un photographe (En utilisant son ID)
async function getPhotographerNameById(path, id) {
    const data = await getPhotographerDataById(path, id)
    const photographerNameById = data.name
    return photographerNameById
}

// Retourne le taux journalier d'un photographe (En utilisant son ID)
async function getPriceById(path, id){
    const data = await getPhotographerDataById(path, id)
    const price = data.price
    return price
}