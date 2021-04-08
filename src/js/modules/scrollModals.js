 //scrollModalOpen 

 'use strict'
 import{openModal} from './modals'
 
 

 function scrollModal() {
    function scrollModalOpen() {
     if (window.pageYOffset + document.documentElement.clientHeight + 1 >= document.documentElement.scrollHeight) {
        openModal(`.modal`,'show','hide',true)
        window.removeEventListener(`scroll`, scrollModalOpen) ;
      }
   };
     
   window.addEventListener(`scroll`, scrollModalOpen);

   function bodyLock() {
     const body = document.querySelector(`body`);
     const lock = document.querySelector(`.modal__content`);
     const paddigRight = window.innerWidth - lock.offsetWidth + `px`;
   }
   bodyLock();

 }

 
 export{scrollModal}
