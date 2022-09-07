const cards = document.querySelectorAll('.card')

cards.forEach(card => {
  card.addEventListener('click', () => {
    removeClass();
    card.classList.add('active')
    console.log(card);
  })
})

function removeClass() {
  cards.forEach(value => {
    value.classList.remove('active')
  })
}