


function openBurger(selectorHamb,selectorMenu,active,activeMenu){
 const  hamb = document.querySelector(selectorHamb),
        menu = document.querySelector(selectorMenu),
        body = document.querySelector('body');

        hamb.addEventListener('click',()=>{
            console.log(hamb.classList.contains(active) && !menu.classList.contains(activeMenu))
            if(!hamb.classList.contains(active)){
                hamb.classList.add(active)
                menu.classList.add(activeMenu)
                body.classList.add('hideOverflow')

            }
            else if(hamb.classList.contains(active) && menu.classList.contains(activeMenu)){
                hamb.classList.remove(active)
                menu.classList.remove(activeMenu)
                body.classList.remove('hideOverflow')
            }
            
        })
        
       menu.addEventListener('click',(e)=>{
           const target = e.target;
           if(menu===target){
               console.log('ok')
               hamb.classList.remove(active)
               menu.classList.remove(activeMenu)
               body.classList.remove('hideOverflow') 
           }
       })
}



export {openBurger}