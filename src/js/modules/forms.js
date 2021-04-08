import {openModal,closeModal} from './modals'
// import {modalTimeID} from './modals'
function forms() {


  //AJAX FORM - постим форму принимаем данные в обычном формате

  // const form = document.querySelectorAll('form');

  // const messages = {
  //   load: 'Загрузка',
  //   succesfull: 'Отправлено',
  //   false: 'Что-то пошло не так'
  // }


  // form.forEach(item =>{
  //   postData(item);
  // })

  // function postData(form) {

  //   form.addEventListener(`submit`, (e) => {
  //     e.preventDefault();

  //     const request = new XMLHttpRequest()
  //     request.open('POST', 'server.php')


  //     const statusMessages = document.createElement('div')
  //     statusMessages.textContent = messages.load;
  //     form.append(statusMessages);


  //     const formData = new FormData(form);

  //     request.send(formData);

  //     request.addEventListener('load', () => {
  //       if (request.status == 200) {
  //         console.log(request.response)
  //         formData.reset();
  //         statusMessages.textContent = messages.succesfull
  //         setInterval(()=>{
  //           statusMessages.remove();
  //         },2000)
  //       }
  //       else{
  //         statusMessages.textContent = messages.false;
  //       }

  //     })
  //   })

  // }
  //


  //AJAX FORM - постим форму принимаем данные в JSON


  //  const form = document.querySelectorAll('form');

  // const messages = {
  //   load: './icons/spinner/spinner.svg',
  //   succesfull: 'Отправлено',
  //   false: 'Что-то пошло не так'
  // }


  // form.forEach(item =>{
  //   postData(item);
  // })

  // function postData(form) {

  //   form.addEventListener(`submit`, (e) => {
  //     e.preventDefault();

  //     const request = new XMLHttpRequest()
  //     request.open('POST', 'server.php')
  //     request.setRequestHeader('Content-type','application/json')

  //     const statusMessages = document.createElement('img')
  //     // statusMessages.textContent = messages.load;
  //     // statusMessages.src = messages.load
  //     statusMessages.setAttribute('src',messages.load)
  //     statusMessages.style.cssText = "display:block; margin:0 auto";
  //     // form.append(statusMessages);
  //     form.insertAdjacentElement('afterend',statusMessages)


  //     const formData = new FormData(form);

  //     const object = {}

  //     formData.forEach(function(value , key){
  //       object[key] = value;
  //     });

  //     const json = JSON.stringify(object)

  //     request.send(json);

  //     request.addEventListener('load', () => {
  //       if (request.status == 200) {
  //         console.log(request.response)
  //         form.reset();
  //         showModalDialog(messages.succesfull)
  //         statusMessages.remove();
  //       }
  //       else{
  //         showModalDialog(messages.false)
  //       }

  //     })
  //   })

  // }//


  // function showModalDialog(messages){

  //   const  modalDialog = document.querySelector('.modal__dialog')
  //   modalDialog.classList.add('hide')

  //   openModal();
  //   const  newModalDialog = document.createElement('div') 
  //   newModalDialog.classList.add('modal__dialog')

  //   newModalDialog.innerHTML = ` 
  //   <div class="modal__content">
  //   <div class = "modal__close" data-close>x</div>
  //   <div class = "modal__title">${messages}</div>
  //   </div>`

  //   document.querySelector('.modal').append(newModalDialog)

  //   setTimeout(()=>{
  //     newModalDialog.remove()
  //     modalDialog.classList.remove('hide')
  //     closeModal()
  //   },1000)

  // }
  //работа с сервером с помощью Fetch запросов 
  const form = document.querySelectorAll('form');

  const messages = {
    load: './icons/spinner/spinner.svg',
    succesfull: 'Отправлено',
    false: 'Что-то пошло не так'
  }


  form.forEach(item => {
    bindpostData(item);
  })



  const postData = async(url,data)=>{
    let res = await fetch(url,{
        method : 'POST',
        headers : {'Content-type': 'application/json'},
        body : data
    })
    return await res.json();
  } 

  function bindpostData(form) {

    form.addEventListener(`submit`, (e) => {
      e.preventDefault();


      const statusMessages = document.createElement('img')
      // statusMessages.textContent = messages.load;
      // statusMessages.src = messages.load
      statusMessages.setAttribute('src', messages.load)
      statusMessages.style.cssText = "display:block; margin:0 auto";
      // form.append(statusMessages);
      form.insertAdjacentElement('afterend', statusMessages)

      //  трансформация formData в JSON формат
      const formData = new FormData(form);

      // const object = {}

      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });                            // функция ниже преобразует более элегантно обьект 

      const json = JSON.stringify(Object.fromEntries(Object.entries(formData)))

      // fetch(`server.php`, {
      //     method: "POST",
      //     // headers: {
      //     //         'Content-type':'aplication/json' // раскоментируй для отправки в JSON формате 
      //     // },
      //     body: formData // добавь в body: json.stryngify(object)
      //   })
        
      postData('http://localhost:3000/requests',json)
        // .then(data => data.text())
        .then(data => {
          console.log(data)
          form.reset();
          showModalDialog(messages.succesfull)
          statusMessages.remove();
        })
        .catch(() => {
          console.log(data)
          showModalDialog(messages.false)
        })
        .finally(() => {
          form.reset();
        })

      // request.addEventListener('load', () => {
      //   if (request.status == 200) {
      //     console.log(request.response)
      //     form.reset();
      //     showModalDialog(messages.succesfull)
      //     statusMessages.remove();
      //   }
      //   else{
      //     showModalDialog(messages.false)
      //   }

      // })
    })

  } //


  function showModalDialog(messages) {

    const modalDialog = document.querySelector('.modal__dialog')
    modalDialog.classList.add('hide')

    openModal(`.modal`,'show','hide',);
    const newModalDialog = document.createElement('div')
    newModalDialog.classList.add('modal__dialog')

    newModalDialog.innerHTML = ` 
       <div class="modal__content">
       <div class = "modal__close" data-close>x</div>
       <div class = "modal__title">${messages}</div>
       </div>`

    document.querySelector('.modal').append(newModalDialog)

    setTimeout(() => {
      newModalDialog.remove()
      modalDialog.classList.remove('hide')
      closeModal('.modal','show','hide');
    }, 1000)
  }
}


export {forms}