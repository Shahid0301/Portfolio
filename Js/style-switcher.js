const styleSwitcherToggle=document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click',()=>{
    if(document.querySelector('.style-switcher').classList.contains("open")){
        document.querySelector('.style-switcher').classList.add("close");
        document.querySelector('.style-switcher').classList.remove("open");
        console.log(document.querySelector('.style-switcher').classList)
    }
    else{
        document.querySelector('.style-switcher').classList.add("open");
        document.querySelector('.style-switcher').classList.remove("close");
        console.log(document.querySelector(".style-switcher").classList);
    }
   
});
document.addEventListener('scroll',()=>{
    if(document.querySelector('.style-switcher').classList.contains("open")){
        document.querySelector('.style-switcher').classList.remove("open");
        document.querySelector('.style-switcher').classList.add("close");
        console.log(document.querySelector('.style-switcher'));

    }
    console.log("done");
});
// MEthod
const alternateStyle=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
}