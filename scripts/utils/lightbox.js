function displayLightboxModal () {
  const clickedMediaObject = MediaInfos.find(({ id }) => id === currentPhotoID)

  setLightboxContent(clickedMediaObject)
  lightboxModal.style.display = 'block'
  toggleAriaHidden('lightbox-modal')
  lightboxModal.focus()
}

function closeLightboxModal () {
  unsetLightboxContent()
  lightboxModal.style.display = 'none'
  toggleAriaHidden('lightbox-modal')
}

function setLightboxContent (currentMediaObject) {
  const mediaObject = new MediaFactory(currentMediaObject)

  const imageSource = `/assets/Sample%20Photos/${photographerName}/${mediaObject.media}`
  const titleText = `${mediaObject.title}`
  const imageElement = document.createElement(mediaObject.element)
  imageElement.setAttribute('src', imageSource)
  imageElement.setAttribute("tabindex","0")  
  imageElement.setAttribute("aria-label",mediaObject.title)     
  mediaObject.element === "video" ? imageElement.controls = "controls" : imageElement.controls = ""
  const titleElement = document.createElement('p')
  titleElement.setAttribute("tabindex","0")
  titleElement.innerText = titleText
  lightboxContent.append(imageElement, titleElement)
}

function unsetLightboxContent () {
  lightboxContent.innerHTML = ''
}

function nextMedia () {
  const maxIndex = MediaInfos.length
  const currentIndex = MediaInfos.findIndex(media => media.id === currentPhotoID)
  const nextIndex = currentIndex + 1

  const nextMediaObject = nextIndex < maxIndex ? MediaInfos[nextIndex] : MediaInfos[0]
  unsetLightboxContent()
  setLightboxContent(nextMediaObject)
  currentPhotoID = nextMediaObject.id
}

function previousMedia () {
  const maxIndex = MediaInfos.length
  const currentIndex = MediaInfos.findIndex(media => media.id === currentPhotoID)
  const previousIndex = currentIndex - 1

  const previousMediaObject = currentIndex !== 0 ? MediaInfos[previousIndex] : MediaInfos[maxIndex - 1]
  unsetLightboxContent()
  setLightboxContent(previousMediaObject)
  currentPhotoID = previousMediaObject.id
}
