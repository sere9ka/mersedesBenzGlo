const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link') //множество значений

// цикл по перебору кнопок с классом фьючелинк
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach((btnItem, idx) => {
            if (btnItem === btn) {
                btnItem.classList.toggle('feature__link_active')
                lists[idx].classList.toggle('hidden')
            } else {
                btnItem.classList.remove('feature__link_active')
                lists[idx].classList.add('hidden')
            }
        })
    })
})
