async function displayPortfolioFooter (likes, price) {
  // Append template to page DOM
  const totalLikes = document.querySelector('.total-likes-number')
  totalLikes.append(likes)
  const priceTag = document.querySelector('.pricetag-footer')
  priceTag.insertAdjacentText('afterbegin', price)
  const footer = document.getElementById("footer")
  footer.setAttribute("aria-label",`${likes} likes. ${price} euros per day.`)
}
