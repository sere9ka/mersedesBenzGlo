const linksMenu = document.querySelectorAll('.menu-list__link')
const linkScroll = document.querySelector('.main__scroll')
const newArray = [...linksMenu, linkScroll]

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const ID = event.target.getAttribute('href').substr(1)
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })
})