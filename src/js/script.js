"use strict"
import  {tabs} from './modules/tabs'
import  {slider} from './modules/slider'
import  {timer} from './modules/timer'
import  {scrollModal} from './modules/scrollModals'
import  {modal} from './modules/modals'
import  {forms} from './modules/forms'
import  {cartMenu} from './modules/cartMenu'
import  {calculation} from './modules/calculation'
import  {openModal} from './modules/modals'
import {openBurger} from './modules/hamburger'


window.addEventListener(`DOMContentLoaded`, () => {

  const modalTimeID = setTimeout(()=>openModal(`.modal`,'show','hide',modalTimeID),100000);

  tabs(`.tabheader__item`);
  modal(`.modal`, `[data-modal]`,modalTimeID);
  slider('.offer__slide');
  timer();
  scrollModal();
  forms();
  cartMenu();
  calculation();
  openBurger('.hamburger','.nav-menu__wrapper','active','menuActive')
});

