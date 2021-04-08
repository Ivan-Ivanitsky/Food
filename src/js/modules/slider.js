//slider 

function slider(triggerSel) {

  const sliders = document.querySelectorAll(triggerSel),
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

  const sliderWhith =  sliderIneer.style.width;

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


  const sliderWidth = sliders.length;
  //btnNextClick
  btnNext.addEventListener('click', () => {

    console.log(sliderWhith)
    if (sliderWidth === index) {
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

export {slider}