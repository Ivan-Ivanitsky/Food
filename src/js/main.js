window.addEventListener(`DOMContentLoaded`, () => {
           //Tabs
function tabs(){
    const tabs = document.querySelectorAll(`.tabheader__item`),
    tabsContent = document.querySelectorAll(`.tabcontent`),
    tabsParents = document.querySelector(`.tabheader__items`),
    gender = document.querySelector(`#gender`),
    genderItem = document.querySelectorAll(`.calculating__choose-item`);
 
 function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add(`hide`);
        item.classList.remove(`show`, `fade`);
    });
 
    tabs.forEach(item => {
        item.classList.remove(`tabheader__item_active`);
    });
 };
 
 function tabsShowContent(i = 0) {
    tabsContent[i].classList.add(`show`, `fade`);
    tabsContent[i].classList.remove(`hide`);
 
    tabs[i].classList.add(`tabheader__item_active`);
 
 };
 
 hideTabContent();
 tabsShowContent();
 
 
 tabsParents.addEventListener(`click`, (event) => {
    const target = event.target;
    if (target && tabs) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                tabsShowContent(i);
            }
        });
    };
 });
}


 // Timer

 function timer(){
    const deadLine = `2020-12-28`;
  
    function getTimeRemaining(endTime) {
      const t = Date.parse(endTime) - Date.parse(new Date()),
        total = Math.floor(t),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / 1000 % 60);
      return {
        'total': total,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    };
   
    function getZero(num) {
      if (num >= 0 && num < 10) {
        return `0 ${num}`
      } else return num
    }
   
   
   
   
    function setClock(selector, endTime) {
      const timer = document.querySelector(selector),
        days = timer.querySelector(`#days`),
        hours = timer.querySelector(`#hours`),
        minutes = timer.querySelector(`#minutes`),
        seconds = timer.querySelector(`#seconds`),
        timeInterval = setInterval(updateClock, 1000);
   
      updateClock();
   
      function updateClock() {
        const t = getTimeRemaining(endTime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
        console.log(t.total)
        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }
    }
   
    setClock(`.timer`, deadLine); // getTimeRemaining();
   
   }


   //slider 

function slider() {

    const sliders = document.querySelectorAll('.offer__slide'),
      btnPrev = document.querySelector('.offer__slider-prev'),
      btnNext = document.querySelector('.offer__slider-next'),
      current = document.querySelector('#current'),
      total = document.querySelector('#total'),
      slidersWrapper = document.querySelector('.offer__slider-wrapper'),
      sliderIneer = document.querySelector('.offer__slider-inner'),
      width = window.getComputedStyle(slidersWrapper).width;
  
  
    let index = 1;
    let offset = 0;
  
  
  
    sliderIneer.style.width = 100 * sliders.length + '%'
    sliderIneer.style.display = 'flex'
    sliderIneer.style.transition = '0.5s all'
    slidersWrapper.style.overflow = 'hidden'
  
  
    const dots = [];
    const offerSlider = document.querySelector('.offer__slider');
    const dotsSlider = document.createElement('ol');
    dotsSlider.classList.add('carosel-dots')
    dotsSlider.style.cssText = `
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
  `
    offerSlider.style.position = 'relative'
    offerSlider.appendChild(dotsSlider)
  
    for (let i = 0; i < sliders.length; i++) {
      const dot = document.createElement('li')
      dot.setAttribute('data-carosel', i + 1)
  
      dot.style.cssText = `
     box-sizing: content-box;
     flex: 0 1 auto;
     width: 30px;
     height: 6px;
     margin-right: 3px;
     margin-left: 3px;
     cursor: pointer;
     background-color: #fff;
     background-clip: padding-box;
     border-top: 10px solid transparent;
     border-bottom: 10px solid transparent;
     opacity: .5;
     transition: opacity .6s ease;
     `
  
      dotsSlider.appendChild(dot)
      dots.push(dot)
    }
  
    dotsActive()
  
    function dotsActive() {
      dots.forEach(dot => {
        dot.style.opacity = '.5'
        dots[index - 1].style.opacity = '1'
      })
    }
    // Hard Slider 
  
    sliders.forEach(item => {
      item.style.width = width
    })
  
    if (index === 1) {
      current.textContent = `0${index}`
    }
  
  
  
    //btnNextClick
    btnNext.addEventListener('click', () => {
      if (offset == 1950) {
        offset = 0
        index = 1
      } else {
        offset += +width.slice(0, width.length - 2);
        console.log(offset)
        index++
      }
      sliderIneer.style.transform = `translateX(-${offset}px)`
      current.textContent = `0${index}`
  
      dotsActive();
    })
    //
  
  
    //btnPrevClick
    btnPrev.addEventListener('click', () => {
      if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (sliders.length - 1)
        console.log(offset)
        current.textContent = `0${sliders.length}`
        index = sliders.length
      } else {
        offset -= +width.slice(0, width.length - 2)
        index--
        current.textContent = `0${index}`
      }
      sliderIneer.style.transform = `translateX(-${offset}px)`
      dotsActive()
    })
    //
  
  
    //dots active
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        const target = e.target
        if (target && i == i) {
          console.log(dot)
          dots.forEach(dot => {
            dot.style.opacity = '.5'
          })
  
          offset = +width.slice(0, width.length - 2) * (i)
          console.log(offset)
          sliderIneer.style.transform = `translateX(-${offset}px)`
          current.textContent = `0${i+1}`
          dots[i].style.opacity = '1'
        }
      })
    })
    //
  
  
  
  
    //SLIDER Izy
    // showSlider(index)
  
  
    // if(sliders.length < 10){
    //     total.textContent = `0${sliders.length}`
    // }
    // else{
    //     total.textContent = sliders.length
    // }
  
    // function showSlider(n){
  
    //   if(n > sliders.length){
    //      index = 1
    //   }
  
    //   if(n < 1){
    //      index = sliders.length
    //   }
  
    //   sliders.forEach(item =>{
    //       item.style.display = 'none'
    //       sliders[index-1].style.display = 'block'
    //   })
  
    //   if(sliders.length < 10){
    //     current.textContent = `0${index}`
    //   }
    //  else{
    //     current.textContent = index
    //   }
  
    // }
  
  
    // function plusSlide(n){
    //     showSlider(index = index + n)
    // }
  
    // btnNext.addEventListener('click',()=>{
    //   plusSlide(1)
    // })
    // btnPrev.addEventListener('click',()=>{
    //   plusSlide(-1)
    // })
  
  }
  

   //scrollModalOpen 


 function scrollModal() {

    function scrollModalOpen() {
      if (window.pageYOffset + document.documentElement.clientHeight + 1 >= document.documentElement.scrollHeight) {
        console.log(`Hello`);
        // openModal();
        window.removeEventListener(`scroll`, scrollModalOpen);
      };
    };
 
    window.addEventListener(`scroll`, scrollModalOpen);
 
    function bodyLock() {
      const body = document.querySelector(`body`);
      const lock = document.querySelector(`.modal__content`);
      const paddigRight = window.innerWidth - lock.offsetWidth + `px`;
    }
    bodyLock();
 
 
  }


  function modals() {

    //Modal
    const modal = document.querySelector(`.modal`),
      btnModalOpen = document.querySelectorAll(`[data-modal]`);

    //Open
    function openModal() {
      modal.classList.add(`show`);
      modal.classList.remove(`hide`);
      // document.body.style.overflow = `hidden`;
      // document.body.style.paddingRight = `17px`;
      // clearInterval(modalTimeID);
    }


    btnModalOpen.forEach(e => {
      e.addEventListener(`click`, openModal);
    });
    //close
    function closeModal() {
      modal.classList.remove(`show`);
      modal.classList.add(`hide`);
      document.body.style.paddingRight = `0px`;
      document.body.style.overflow = ``;
    }



    modal.addEventListener(`click`, (e) => {
      if (e.target === modal || e.target.getAttribute('modal-close') == "") { // закрытие модалки на крестик с помощью динамически полученного
        closeModal();
      }
    });
    document.addEventListener(`keydown`, function (e) {
      if (e.code === "Escape" && modal.classList.contains(`show`)) {
        closeModal();
      }
    });

    //  const modalTimeID = setTimeout(openModal,9000);


  }


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
      postData(item);
    })
  
    function postData(form) {
  
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
  
        const object = {}
  
        formData.forEach(function (value, key) {
          object[key] = value;
        });
  
        const json = JSON.stringify(object)
  
        fetch(`server.php`, {
            method: "POST",
            // headers: {
            //         'Content-type':'aplication/json' // раскрментируй для отправки в JSON формате 
            // },
            body: formData // добавь в body: json.stryngify(object)
          }).then(data => data.text())
          .then(data => {
            console.log(data)
            form.reset();
            showModalDialog(messages.succesfull)
            statusMessages.remove();
          })
          .catch(() => {
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
  
      openModal();
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
        closeModal()
      }, 1000)
    }
  }

  function cartMenu() {

    class ClassMenu {
        constructor(src, alt, title, text, price, parentBlock, ...classes) {
            this.scr = src
            this.alt = alt
            this.title = title
            this.text = text
            this.price = price
            this.classes = classes
            this.parentBlock = document.querySelector(parentBlock)
            this.event = 9
            this.showUAH();
        }
        showUAH() {
            this.price = this.price * this.event
        }
        render() {
            const ItemBlock = document.createElement(`itemBlock`);
            if (this.classes.length === 0) {
                this.ItemBlock = `menu__item`
                ItemBlock.classList.add(this.ItemBlock)
            } else {
                this.classes.forEach(className => ItemBlock.classList.add(className));
            }

            ItemBlock.innerHTML =
                `
          <img src=${this.scr} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.text}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
       `

            this.parentBlock.append(ItemBlock);
        }

    }

    new ClassMenu(
        "img/tabs/vegy.jpg",
        "vegy",
        `Меню "Фитнес"`,
        `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
                             овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной
                             ценой и высоким качеством!`,
        14,
        `.menu .container`,

    ).render()

    new ClassMenu(
        "img/tabs/elite.jpg",
        "elite",
        `Меню “Премиум”"`,
        `В меню “Премиум” мы используем не только красивый дизайн упаковки, но
        и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без
        похода в ресторан!`,
        20,
        `.menu .container`,
        `menu__item`
    ).render()

    new ClassMenu(
        "img/tabs/post.jpg",
        "post",
        `Меню "Постное"`,
        `Меню “Постное” - это тщательный подбор ингредиентов: полное
        отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки,
        правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
        25,
        `.menu .container`,
        `menu__item`
    ).render()
}


function calculation() {

    // Calculator call
  
    const calculatingResult = document.querySelector('.calculating__result span');
    const calculatingTotal = document.querySelector('.calculating__total');
  
    calculatingTotal.style.cssText = `align-items: baseline; justify-content: space-around;`
    let height, weight, sex, ratio, age;
  
  
  
    if (localStorage.getItem('id')) {
      sex = localStorage.getItem('sex')
  
    } else {
      sex = 'female'
      localStorage.setItem('id', 'female')
      console.log('sex')
    }
  
    //ratio
    if (localStorage.getItem('ratio')) {
      ratio = localStorage.getItem('ratio')
    } else {
      ratio = 1.55
      localStorage.setItem('ratio', 1.55)
    }
  
  
    function uselocalStorage(selector, active) {
  
      const element = document.querySelectorAll(selector);
  
      element.forEach(item => {
  
        item.classList.remove(active)
        if (item.getAttribute('id') === localStorage.getItem('id')) {
          item.classList.add(active)
        }
        if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
          item.classList.add(active)
          console.log('ok')
        }
      })
  
  
    }
  
    uselocalStorage('#gender>div', 'calculating__choose-item_active')
    uselocalStorage('.calculating__choose_big>div', 'calculating__choose-item_active')
  
    function calcTotal() {
      if (!sex || !height || !weight || !age || !ratio) {
        calculatingResult.textContent = '___'
        return;
      }
  
      if (sex === 'female') {
        calculatingResult.textContent = Math.round(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ratio)
      } else {
        calculatingResult.textContent = Math.round(88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ratio)
      }
  
    }
  
  
  
    function clickGenderAndActiv(selector, activeClass) {
      const gender = document.querySelectorAll(selector)
  
      function removeActiveClass() {
        gender.forEach(i => {
          i.classList.remove(activeClass)
        })
      }
  
  
      gender.forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target.getAttribute('data-ratio')) {
            ratio = +e.target.getAttribute('data-ratio')
            localStorage.setItem('ratio', e.target.getAttribute('data-ratio'))
          } else {
            sex = e.target.getAttribute('id')
            localStorage.setItem('id', e.target.getAttribute('id'))
          }
          removeActiveClass()
          item.classList.add(activeClass)
          calcTotal()
        })
      })
    }
  
    clickGenderAndActiv('#gender>div', 'calculating__choose-item_active')
    clickGenderAndActiv('.calculating__choose_big>div', 'calculating__choose-item_active')
  
    function calcChose(selector) {
      const input = document.querySelector(selector)
      input.addEventListener('input', (e) => {
  
        if (input.value.match(/\D/g)) {
          console.log('ok')
          input.style.border = '1px solid red'
        } else {
          input.style.border = 'none'
        }
        // Первый Вариант Условия 
        // if(e.target.getAttribute('id')=='height'){
        //   height = + input.value
        //   console.log(height)
        // }
        // if(e.target.getAttribute('id')=='weight'){
        //     weight = + input.value
        //     console.log(weight)
        // }
        // if(e.target.getAttribute('id')=='age'){
        //   age = +input.value
        //   console.log(age)
        // }
  
        //Второй вариант через switch case
  
        switch (e.target.getAttribute('id')) {
          case 'height':
            height = +input.value
            break;
          case 'weight':
            weight = +input.value
            break;
          case 'age':
            age = +input.value
            break;
        }
        calcTotal()
      })
    }
    calcChose('#height')
    calcChose('#weight')
    calcChose('#age')
    calcTotal()
  
  }
  
  cartMenu()
  calculation()
  forms()
  modals()
  scrollModal()
  slider()
  tabs()
  timer()
      
  });