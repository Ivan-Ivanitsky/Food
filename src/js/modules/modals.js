'use strict'

import{scrollModal}from './scrollModals';
 //Open



 function openModal(selector,activeOn,activeOff,modalTimeID) {
   
  const modal = document.querySelector(selector);
  modal.classList.add(activeOn),
  modal.classList.remove(activeOff);
  // document.body.style.overflow = `hidden`;
  // document.body.style.paddingRight = `17px`;

  if(modalTimeID){
    console.log(modalTimeID)
    clearInterval(modalTimeID);
    window.clearInterval('scroll',scrollModal);
    // scrollModal(closeModal())
  }
}





    //close
    function closeModal(selector,activeOn,activeOff) {
      const modal = document.querySelector(selector);
      modal.classList.remove(activeOn),
      modal.classList.add(activeOff);
      document.body.style.paddingRight = `0px`;
      document.body.style.overflow = ``;
    }




function modal(selector,selectorBtnOpen,modalTimeID) {

    //Modal
    const modal = document.querySelector(selector),
      btnModalOpen = document.querySelectorAll(selectorBtnOpen);
  
   

    btnModalOpen.forEach(e => {
      e.addEventListener(`click`,()=> openModal(selector,'show','hide',modalTimeID));
    });


    modal.addEventListener(`click`,(e) => {
      if (e.target === modal || e.target.getAttribute('modal-close') == "") { // закрытие модалки на крестик с помощью динамически полученного
        closeModal(selector,'show','hide');
      }
    });
    document.addEventListener(`keydown`, function (e) {
      if (e.code === "Escape" && modal.classList.contains(`show`)) {
        closeModal(selector,'show','hide');
      }
    });



  }

  //Open
  // module.exports = closeModal();
  export {modal,openModal,closeModal}