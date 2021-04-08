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


export {calculation}