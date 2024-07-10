function displayContactModal() {
    const modal = document.getElementById("contact-modal");
    const form = document.getElementById("contact-modal-container");
    console.log(form)
	modal.style.display = "block";
    toggleAriaHidden()
    form.focus()
    // TODO :  Close modal when escape key is pressed
}

function closeContactModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "none";
    toggleAriaHidden()
}

function displaySubmittedContactModal(){
    const form = document.querySelectorAll(".form");
    const submittedMessage = document.querySelector(".submission-success");
    const modalHeader = document.querySelector("#contact-modal-container header")
    form.forEach((bit) => {bit.style.display = "none";})
    submittedMessage.style.display = "block";
    modalHeader.style.padding = "0 0";
    submittedMessage.focus();

}

function fetchForm() {
    const form = document.querySelector('form');
    form.addEventListener("submit", (event) => {event.preventDefault()})

    const formFields = document.querySelectorAll("input,textarea")
    formFields.forEach((input) => {console.log(`${input.name}: ${input.value}`) })

    displaySubmittedContactModal()
}

function toggleAriaHidden() {
    const elementToDisable = document.querySelectorAll(".content")
    elementToDisable.forEach((bit) => {
        bit.getAttribute("aria-hidden") === "false" ? bit.setAttribute("aria-hidden","true") : bit.setAttribute("aria-hidden","false");
    })
}