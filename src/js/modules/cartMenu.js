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


    // const getResurses = async(url)=>{
    //     const res = await fetch(url)

    //     if(!res.ok){
    //         throw new Error (`Coud not fetch ${url}, status ${res.status}`);
    //         }
    //     return await res.json()
    // }

       
    // getResurses( `http://localhost:3000/menu`)
    // .then(data =>{
    //     data.forEach(({img,altimg,title,descr,price}) =>{
    //         new ClassMenu (img,altimg,title,descr,price, ".menu .container").render()
    //     })
    // })


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


export {cartMenu}