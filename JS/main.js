window.addEventListener('load', () => {
    bobatron.scanner()
    setTimeout(() => {
        bobatron.scanner()
    }, 1111)
})

window.addEventListener('resize', () => {
    bobatron.scanner()
})