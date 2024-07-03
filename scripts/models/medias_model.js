// recuperer les infos de tous les medias
async function getMediasData(path) {
    const response = await fetch(path);
    const { media } = await response.json();
    return media;
}

// Récupère tous les medias d'un photographe avec son ID
async function getMediasDataById(path, id) {
    const mediasData = await getMediasData(path)
    const mediasDataById = mediasData.filter((media) => media.photographerId === id);
    // TO DO : gérer les erreurs > find ne trouve pas l'ID
    return mediasDataById
}

// Récupère la somme de tous les likes




// User sur le front qui clic sur un lien
// Ca vient dans le "router" --> Controller

// Je controle le formulaire ou les query params (?id=1)
// Je récupère les datas via les models
// Je prepare ma reponse grace aux views



// Model       --> En charge de récuperer/filtrer/update la données
// View
// Controller







// récuperer les infos d'un photographe
// récupérer toutes les photos d'un photographe

// Trier les photos par popularité
// Trier les photos par Date
// Trier les photos par Titre

