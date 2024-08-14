function displayContactModal () {
  const form = document.getElementById('contact-modal-container')
  formModal.style.display = 'block'
  toggleAriaHidden('contact-modal')
  form.focus()
}

function closeContactModal () {
  formModal.style.display = 'none'
  toggleAriaHidden('contact-modal')
}

function displaySubmittedContactModal () {
  const form = document.querySelectorAll('.form')
  const submittedMessage = document.querySelector('.submission-success')
  const modalHeader = document.querySelector('#contact-modal-container header')
  form.forEach((bit) => {
    bit.style.display = 'none'
  })
  submittedMessage.style.display = 'block'
  modalHeader.style.padding = '0 0'
  submittedMessage.focus()
}

// Listener pour empêcher l'execution par default de l'instruction 'submit'
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
})

function fetchForm () {
  const formFields = document.querySelectorAll('input,textarea')
  formFields.forEach((input) => {
    console.log(`${input.name}: ${input.value}`)
  })

  displaySubmittedContactModal()
}
