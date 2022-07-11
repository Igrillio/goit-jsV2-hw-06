const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galaryListEl = document.querySelector(".gallery")

// const makeGalaryCard = ({url, alt} = {}) => {
//   const galagyLiEl = document.createElement("Li");
//   galagyLiEl.classList.add("gelery-item");
  
//   const geleryImgEl = document.createElement("img");
//   geleryImgEl.classList.add("img");

//   geleryImgEl.src = url;
//   geleryImgEl.alt = alt;

//   galagyLiEl.append(geleryImgEl);

//   return galagyLiEl;
// } 

// const galaryCardArr = images.map((el => makeGalaryCard(el)))

// galaryListEl.append(...galaryCardArr);
// console.log(galaryListEl)

// const galagyLiEl = document.querySelector(".galary")

//-------------------


const makeGalaryCard = ({url, alt} = {}) => {
 return `<li>
 <img src="${url}" alt="${alt}" class="gellaryCss">
</li>`
}

const galaryCardArr = images.map(el => {
  return makeGalaryCard(el);
});

galaryListEl.insertAdjacentHTML("afterbegin", galaryCardArr)

