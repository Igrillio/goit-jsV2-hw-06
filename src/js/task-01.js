
const categoryNumberOfEl = document.querySelectorAll(".item")
console.log('Number of categories:', categoryNumberOfEl.length);


categoryNumberOfEl.forEach(el => {
    const saerchTitle = el.querySelector("h2")
    console.log('Category:', saerchTitle.textContent)

    const lenthOfLiEl = el.querySelectorAll("li")
    console.log('Elements:',lenthOfLiEl.length)
});