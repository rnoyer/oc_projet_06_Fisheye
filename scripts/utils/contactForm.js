const formModal = document.getElementById("contact-modal");

function displayContactModal() {
  const form = document.getElementById("contact-modal-container");
  formModal.style.display = "block";
  toggleAriaHidden("contact-modal");
  form.focus();
}

function closeContactModal() {
  formModal.style.display = "none";
  toggleAriaHidden("contact-modal");
}

function displaySubmittedContactModal() {
  const form = document.querySelectorAll(".form");
  const submittedMessage = document.querySelector(".submission-success");
  const modalHeader = document.querySelector("#contact-modal-container header");
  form.forEach((bit) => {
    bit.style.display = "none";
  });
  submittedMessage.style.display = "block";
  modalHeader.style.padding = "0 0";
  submittedMessage.focus();
}

function fetchForm() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const formFields = document.querySelectorAll("input,textarea");
  formFields.forEach((input) => {
    console.log(`${input.name}: ${input.value}`);
  });

  displaySubmittedContactModal();
}

function toggleAriaHidden(modalID) {
  const elementToDisable = [
    ...document.querySelectorAll(".content"),
    document.getElementById(modalID),
  ];
  elementToDisable.forEach((element) => {
    element.getAttribute("aria-hidden") === "false"
      ? element.setAttribute("aria-hidden", "true")
      : element.setAttribute("aria-hidden", "false");
  });
}

document.addEventListener("keydown",(event) => {
      const keyName = event.key;
      const ariaAttribute = formModal.getAttribute("aria-hidden");
  
      if (ariaAttribute ==="false" && keyName === "Escape") {
        closeContactModal();
      }
    },
    false,
  );