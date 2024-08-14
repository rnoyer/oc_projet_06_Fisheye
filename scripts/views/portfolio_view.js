function portfolioCardTemplate (mediaData, photographerName) {
  const mediaObject = new MediaFactory(mediaData)
  const mediaPath = `assets/Sample Photos/${photographerName}/${mediaObject.media}`

  function getMediaCardDOM () {
    const media = document.createElement(mediaObject.element)
    media.className = mediaObject.class
    media.setAttribute('src', mediaPath)

    const mediaName = document.createElement('p')
    mediaName.setAttribute('tabindex', '0')
    mediaName.setAttribute('aria-label', 'Title')
    mediaName.innerText = mediaObject.title

    const likesNumber = document.createElement('p')
    likesNumber.className = 'likes'
    likesNumber.setAttribute('aria-label', 'Number of likes')
    likesNumber.setAttribute('tabindex', '0')
    likesNumber.setAttribute('liked', 'false')
    likesNumber.append(mediaObject.likes)

    const heartShape = document.createElement('span')
    heartShape.className = 'fa-solid fa-heart'

    const likesButton = document.createElement('button')
    likesButton.className = 'like-button'
    likesButton.setAttribute('type', 'button')
    likesButton.setAttribute('aria-label', 'Like button')
    likesButton.setAttribute('onclick', 'toggleLike()')
    likesButton.append(heartShape)

    const likeSection = document.createElement('div')
    likeSection.className = 'like-section'
    likeSection.append(likesNumber, likesButton)

    const card = document.createElement('article')
    card.setAttribute('id', mediaObject.mediaId)
    card.className = 'card'

    const anchor = document.createElement('a')
    anchor.setAttribute('tabindex', '0')
    anchor.className = 'card-media'
    anchor.setAttribute('aria-label', `${mediaObject.ariaDescription} title: ${mediaObject.title}`)
    anchor.append(media)

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    cardBody.append(mediaName, likeSection)

    card.append(anchor, cardBody)
    return card
  }
  return { getMediaCardDOM }
}

async function displayPortfolio (photographerName, mediasList) {
  const mediaSection = document.querySelector('.photograph-portfolio')
  mediaSection.replaceChildren()

  mediasList.forEach((media) => {
    const mediaCard = portfolioCardTemplate(media, photographerName)
    const mediaCardDOM = mediaCard.getMediaCardDOM()
    mediaSection.appendChild(mediaCardDOM)
    mediaCardDOM.firstChild.addEventListener('click', (event) => {
      currentPhotoID = parseInt(mediaCardDOM.getAttribute('id'), 10)
      displayLightboxModal()
    })
  })
}

// Gère l'ajout d'un like par l'utilisateur.
function toggleLike () {
  const likesElement = document.activeElement.previousSibling
  const totalLikesElement = document.querySelector('.total-likes-number')
  const LikesElementAttribute = likesElement.getAttribute('liked')
  let likeNumber = parseInt(document.activeElement.previousSibling.innerText, 10)

  if (LikesElementAttribute === 'false') {
    likeNumber++
    extraLikesdAdded++
    likesElement.innerText = likeNumber
    totalLikesElement.innerText = totalLikes + extraLikesdAdded
    likesElement.setAttribute('liked', 'true')
    document.activeElement.classList.add('liked-button')
  } else {
    likeNumber--
    extraLikesdAdded--
    likesElement.innerText = likeNumber
    totalLikesElement.innerText = totalLikes + extraLikesdAdded
    likesElement.setAttribute('liked', 'false')
    document.activeElement.classList.remove('liked-button')
  };
}
