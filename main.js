
const tabletBreakPoint = 768
const pcBreakPoint = 1200

const buttonFirst = document.querySelector('#first-img')
const buttonSecond = document.querySelector('#second-img')
const buttonThird = document.querySelector('#third-img')
const carouselContainer = document.getElementById("carousel")

window.addEventListener('resize', () => addEvents());
addEvents();

function addEvents() {
  const width = window.innerWidth

  if (width < pcBreakPoint) {
    buttonFirst.addEventListener('click', () => changePhoto(buttonFirst))
    buttonSecond.addEventListener('click', () => changePhoto(buttonSecond))
    buttonThird.addEventListener('click', () => changePhoto(buttonThird))
  } else {
    buttonFirst.removeEventListener('click', changePhoto)
    buttonSecond.removeEventListener('click', changePhoto)
    buttonThird.removeEventListener('click', changePhoto)
    carouselContainer.style.transform = `translateX(0px)`
  }
}


function changePhoto(button) {
  const width = window.innerWidth

  let position = 0
  const pixelToMove = width > tabletBreakPoint ? 150 : 300

  if (button.id === "second-img") {
    position = - pixelToMove
  } else if (button.id === "third-img") {
    position = - (pixelToMove * 2)
  }

  carouselContainer.style.transform = `translateX(${position}px)`

  changeActive(button)
}


function changeActive(button) {
  const activeButton = document.getElementsByClassName("active");
  activeButton[0].classList.remove('active')
  button.classList.add('active')
}

