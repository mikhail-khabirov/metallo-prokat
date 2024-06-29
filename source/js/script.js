const menuButton = document.querySelector('.header__toggle-button');
const header = document.querySelector('.header');
const modalOverlay = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal__window');
const modalCloseButton = document.querySelector('.modal__close-button');
const pageBody = document.querySelector('.page__body');
const buttons = document.querySelectorAll('.button[type="button"]');

// show/hide mobile menu

const showHideMenu = () => {
  header.classList.toggle('header--menu-is-opened');
}

const hideMenuOnOuterClick = (e) => {
  if (!header.contains(e.target)) {
    header.classList.remove('header--menu-is-opened');
  }
}

// show/hide modal window

const showModal = () => {

  modalOverlay.classList.add('modal--modal-is-opened');
  pageBody.classList.add('page__body--blocked');


}
const hideModal = () => {

  modalOverlay.classList.remove('modal--modal-is-opened');
  pageBody.classList.remove('page__body--blocked');

}

// Events


console.log(document.body);

menuButton.addEventListener('click', showHideMenu);

document.addEventListener('click', hideMenuOnOuterClick);

buttons.forEach((item) => {
  item.addEventListener('click', showModal);
})
modalCloseButton.addEventListener('click', hideModal);

// Owl Carousel

if (window.innerWidth <= 766) {

  $(document).ready(function () {
    $('.slide-one').owlCarousel({
      items: 2,
    });

    $('.slide-two').owlCarousel({
      items: 1,
    });
  })

}



