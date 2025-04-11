const images = [
  'https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/seamless-pattern-waves-various-shades-blue-vector-underwater-design-96891651_aSd5pmbaM.webp',
  'https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/battleship-image_e6bWCZ1w4.png'
]

const gridItems = document.querySelectorAll('.grid-items');
const gridContainer = document.querySelector('.grid-container')
const resetButton = document.querySelector('.reset-button')

const max = 1;
const min = 0;
let clickCounter = 0;
let shipCounter = 0;

const findIndex = () => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const checkWinOrLoose = () => {
  if(clickCounter <= 8 && shipCounter === 5) {
    alert("You Won!");
    gridContainer.removeEventListener('click', showImage);
  } else {
    alert("You Lost!");
    gridContainer.removeEventListener('click', showImage);
  }
}

const showImage = (event) => {
  if(event.target.classList.contains('grid-items')) {
    const index = findIndex();
    clickCounter++;
    event.target.innerHTML = `<img src=${images[index]}>`
    if(index === 1) shipCounter++;
    if(shipCounter === 5) {
      checkWinOrLoose();
    }
    if(clickCounter >= 8) {
      checkWinOrLoose();
    }
  }
}

gridContainer.addEventListener('click', showImage)

const reset = () => {
  gridItems.forEach(item => item.innerHTML = "");
  clickCounter = 0;
  shipCounter = 0;
  gridContainer.addEventListener('click', showImage)
}

resetButton.addEventListener('click', reset);
