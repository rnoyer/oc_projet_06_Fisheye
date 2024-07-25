






// function lightboxTemplate(photographer, data, arrayId){
//     const pathToPhoto = `assets/Sample Photos/${photographer}/${data[arrayId].image}`
//     const photoTitle = data[arrayId].title
//     console.log(photographer)
//     console.log(data)


//     function getLightboxDOM() {
//         const media = document.createElement("img");
//         media.setAttribute("src",pathToPhoto)
//         const mediaTitle = document.createElement("p")
//         mediaTitle.innerText=photoTitle
    
//         const lightboxContent = document.createElement("div");
//         lightboxContent.className="lightbox-content"
//         lightboxContent.append(media,mediaTitle)

//         return(lightboxContent)
//     }
//     return { getLightboxDOM }
// }

// function displayLightboxContent(photographerName, MediaInfos, arrayId){
//     const elementToAppendAfterend = document.querySelector(".previous-media");
//     const lightbox = lightboxTemplate(photographerName, MediaInfos, arrayId)
//     const lightboxContent = lightbox.getLightboxDOM()
//     elementToAppendAfterend.insertAdjacentElement("afterend", lightboxContent)
// }