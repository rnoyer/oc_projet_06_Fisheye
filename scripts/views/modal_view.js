function displayNameInModal(name){
    const formTitle = document.querySelector("#modal-title");
    formTitle.insertAdjacentText("beforeend",name)

    const dialogElement = document.querySelector("#contact-modal");
    dialogElement.setAttribute("name",`Contactez-moi ${name}`);
}