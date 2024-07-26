function setLightboxContent (currentMediaObject) {
    const mediaObject = new MediaFactory(currentMediaObject)
  
    const imageSource = `assets/Sample%20Photos/${photographerName}/${mediaObject.media}`
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