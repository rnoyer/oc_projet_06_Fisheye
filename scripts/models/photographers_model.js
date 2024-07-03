// recuperer les infos de tous les photographes
async function getPhotographersData(path) {
    const response = await fetch(path);
    const { photographers } = await response.json();
    return photographers;
}

// Récupère l'ID d'un photographe
function getPhotographerQueriedId(){
    const params = new URLSearchParams(document.location.search);
    const userID = parseInt(params.get("id"), 10);
    return userID
}

// Récupère les infos d'un photographe avec son ID
async function getPhotographerDataById(path, id) {
    const data = await getPhotographersData(path)
    const photographerDataById = data.find((photographer) => photographer.id === id);
    // TO DO : gérer les erreurs > find ne trouve pas l'ID
    return photographerDataById
}

// Récupère le nom d'un photographe avec son ID
async function getPhotographerNameById(path, id) {
    const data = await getPhotographerDataById(path, id)
    const photographerNameById = data.name
    return photographerNameById
}
