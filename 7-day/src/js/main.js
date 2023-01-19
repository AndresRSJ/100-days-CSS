const burger__icon     = document.getElementById("burger")
const menu = document.getElementById("icon__menu")
const options    = document.getElementById("options")
const notifi     = document.getElementById("notifications")


burger__icon.addEventListener("click", ()=>{
        notifi.classList.toggle("translate-1")
        options.classList.toggle("translate-2")
        menu.classList.toggle("bx-menu-alt-right")
})