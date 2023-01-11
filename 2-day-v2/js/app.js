const burger = document.querySelector(".container__burger")
const lines  = document.querySelectorAll(".line")

let conterClicks = 0;
const translates =["translate-1", "translate-2", "translate-3"]

burger.addEventListener("click", (event)=>{
    conterClicks++;
    if(conterClicks%2===0){
        lines.forEach((element, i)=>{
            lines[i].classList.add(translates[i])
        })
    }else{
        lines.forEach((element, i)=>{
            lines[i].classList.remove(translates[i])
        })
    }
})

