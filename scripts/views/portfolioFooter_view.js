    async function displayPortfolioFooter(likes,price) {
        // Append template to page DOM
        const totalLikes = document.querySelector(".likes-footer")
        const priceTag = document.querySelector(".pricetag-footer")
        totalLikes.insertAdjacentText("afterbegin",likes)
        priceTag.insertAdjacentText("afterbegin",price)
      }
    