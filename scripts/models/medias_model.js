// recuperer les infos de tous les medias
async function getMediasData(path) {
    const response = await fetch(path);
    const { media } = await response.json();
    return media;
}

// Retourne tous les medias d'un photographe (En utilisant son ID)
async function getMediasDataById(path, id) {
    const mediasData = await getMediasData(path)
    const mediasDataById = mediasData.filter((media) => media.photographerId === id);
    // TO DO : gérer les erreurs > find ne trouve pas l'ID
    return mediasDataById
}



// Retourne la somme de tous les likes d'un photographe (En utilisant son ID)
async function getSumOfLikesById(path, id) {
    const mediasData = await getMediasData(path)
    const mediasDataById = mediasData.filter((media) => media.photographerId === id);
    const listOfLikes = mediasDataById.map(likeNb => likeNb.likes);
    const sumOfLikes = listOfLikes.reduce((accumulator, currentValue) => accumulator + currentValue)
    // TO DO : gérer les erreurs > find ne trouve pas l'ID
    return sumOfLikes
}




// Trier les photos par popularité
// Trier les photos par Date
// Trier les photos par Titre

