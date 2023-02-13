const navTrg = document.querySelector(".nav-trigger")
const navList = document.querySelector(".main_list")
navTrg.addEventListener("click",navExpandHandler)
function navExpandHandler(e){
    navList.classList.toggle("expand")
    navTrg.classList.toggle("clicked")
}