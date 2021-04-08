   //Tabs
function tabs(selectorTabs){
    const tabs = document.querySelectorAll(selectorTabs),
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
 
export{tabs}