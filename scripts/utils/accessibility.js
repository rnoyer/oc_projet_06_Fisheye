// Keys to navigate and close modals
document.addEventListener('keydown', (event) => {
  const keyName = event.key

  if (formModal.getAttribute('aria-hidden') === 'false' && keyName === 'Escape') {
    closeContactModal()
  }
  if (lightboxModal.getAttribute('aria-hidden') === 'false' && keyName === 'Escape') {
    closeLightboxModal()
  }
  if (lightboxModal.getAttribute('aria-hidden') === 'false' && keyName === 'ArrowLeft') {
    previousMedia()
  }
  if (lightboxModal.getAttribute('aria-hidden') === 'false' && keyName === 'ArrowRight') {
    nextMedia()
  }
  if (document.activeElement.getAttribute('class') === 'card-media' && keyName === 'Enter') {
    currentPhotoID = parseInt(document.activeElement.parentElement.getAttribute('id'), 10)
    displayLightboxModal()
  }
}, false)

// function keepFocusInModal() {
//     console.log('keepit!')
// }

// contentElements.forEach( (element) => {
//     element.addEventListener("focus", keepFocusInModal(), false)
// })

function toggleAriaHidden (modalID) {
  const elementToDisable = [
    ...document.querySelectorAll('.content'),
    document.getElementById(modalID)
  ]
  elementToDisable.forEach((element) => {
    element.getAttribute('aria-hidden') === 'false'
      ? element.setAttribute('aria-hidden', 'true')
      : element.setAttribute('aria-hidden', 'false')
  })
}
