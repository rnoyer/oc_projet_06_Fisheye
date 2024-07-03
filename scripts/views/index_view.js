function photographerCardTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
      const url = `./photographer.html?id=${id}`;
      const article = document.createElement( 'article' );
      const labelAria = `Visiter le portfolio de ${name}`;
      const profileLink = document.createElement('a');
      profileLink.setAttribute("href",url);
      profileLink.setAttribute("aria-label",labelAria)
      const img = document.createElement( 'img' );
      img.setAttribute("src", picture);
      img.setAttribute("alt", name)
      const photographerName = document.createElement( 'h2' );
      photographerName.textContent = name;
      const location = document.createElement('p');
      location.className = "location"
      location.textContent = `${city}, ${country}` ;
      const catchphrase = document.createElement('p');
      catchphrase.className = "tagline"
      catchphrase.textContent = tagline;
      const pricing = document.createElement('p');
      pricing.className = "pricing"
      pricing.textContent = `${price} €/jour`;

      profileLink.append(img,photographerName)
      article.append(profileLink,location,catchphrase,pricing);
      return (article);
    }
    return { getUserCardDOM }
}

async function displayData(photographersList) {
  const photographersSection = document.querySelector(".photographer_section");

  photographersList.forEach((photographer) => {
      const photographerCard = photographerCardTemplate(photographer);
      const userCardDOM = photographerCard.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
  });
}