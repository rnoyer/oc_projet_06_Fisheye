function portfolioCardTemplate(mediaData, photographerName){
    const mediaObject = new MediaFactory(mediaData)
    const mediaURL = `assets/Sample Photos/${photographerName}/${mediaObject.media}`

    function getMediaCardDOM(){
        // mediaObject.display()
        const media = document.createElement(mediaObject.element)
        media.className = mediaObject.class
        media.setAttribute('src', mediaURL)

        const mediaName = document.createElement('p');
        mediaName.innerText = mediaObject.title;

        const likesNumber = document.createElement('p');
        likesNumber.className = 'likes'
        const heartShape = document.createElement('i')
        heartShape.className = 'fa-solid fa-heart'
        likesNumber.append(mediaObject.likes,heartShape)

        const card = document.createElement('article')
        card.className = 'card';

        const anchor = document.createElement('a')
        anchor.setAttribute('href',mediaURL)
        anchor.append(media)

        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        cardBody.append(mediaName, likesNumber)

        card.append(anchor, cardBody)
        return card
    }
    return { getMediaCardDOM }
}

async function displayPortfolio(photographerName, mediasList) {
    const mediaSection = document.querySelector(".photograph-portfolio");
    mediaSection.replaceChildren();
  
    mediasList.forEach((media) => {
        const mediaCard = portfolioCardTemplate(media, photographerName);
        const mediaCardDOM = mediaCard.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
  }
