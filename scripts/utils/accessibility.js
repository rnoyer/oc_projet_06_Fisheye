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
  if (document.activeElement.getAttribute('onclick') === 'fetchForm()' && keyName === 'Tab') {
    document.getElementById("contact-modal-container").focus();
  }
  if (document.activeElement.getAttribute('onclick') === 'nextMedia()' && keyName === 'Tab') {
    document.getElementById("lightbox-modal-container").focus();
  }
}, false)

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
