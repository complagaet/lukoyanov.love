document.addEventListener('DOMContentLoaded', () => {
    bobatron.scanner()
    setTimeout(() => {
        bobatron.scanner()
    }, 200)
})

window.addEventListener('resize', () => {
    bobatron.scanner()
})