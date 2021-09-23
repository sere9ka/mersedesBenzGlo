const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]')

for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')
        if(tabsHandlerElems === tabsFieldElems) {
            tabsFieldElems.forEach(element => element.classList.remove('hidden'));
        }
        else {
            tabsFieldElems.forEach(element => element.classList.add('hidden'));
        }
    })
}