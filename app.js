const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menuwrap");
const search = document.getElementById("search")
const container = document.querySelector(".input-container")
let click = true
menuBtn.addEventListener("click", () => {
    if(click){
      menu.classList.remove("notClicked");
      menu.classList.add("clicked");
      menu.style.display = "flex"
      menu.style.border = "4px solid black"
      container.style.marginTop = "50px"
    }else{
        menu.classList.remove("clicked");
        menu.classList.add("notClicked");       
        menu.style.border = "none"
        
        setTimeout(() => {
            container.style.marginTop = "145px"
            menu.style.display = "none"

        },1450)
    }
    click = !click
});

const refresh = document.getElementById("ref")

refresh.addEventListener("click",(e) => {
    e.preventDefault();
    window.location.href = window.location.pathname;
    window.location.reload();
})


const paragraph = document.querySelector(".paragraph")

search.addEventListener("click",() => {
  
   paragraph.style.display = "block"
   setTimeout(() => {
     paragraph.style.display = "none"
   },6000)
})