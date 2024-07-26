async function displayPortfolioFooter (likes, price) {
  // Append template to page DOM
  const totalLikes = document.querySelector('.total-likes-number')
  const priceTag = document.querySelector('.pricetag-footer')
  totalLikes.append(likes)
  priceTag.insertAdjacentText('afterbegin', price)
}
