const topMenu = document.getElementById('top-menu')
const toggleTopMenuIcon = document.getElementById('toggle-top-menu-icon')

document.addEventListener('click', (e) => {

    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('topmenu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        if (topMenu.classList.contains('topmenu-expanded')) {
            topMenu.classList.remove('topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})