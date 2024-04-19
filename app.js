const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menuwrap");
let click = true
menuBtn.addEventListener("click", () => {
    if(click){
      menu.classList.remove("notClicked");
      menu.classList.add("clicked");
      menu.style.display = "flex"
      menu.style.border = "2px solid black"
      document.getElementById("first").style.marginTop = "50px"
    }else{
        menu.classList.remove("clicked");
        menu.classList.add("notClicked");       
        menu.style.border = "none"
        document.getElementById("first").style.marginTop = "145px"
        setTimeout(() => {
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