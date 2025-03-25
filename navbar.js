let btn=document.querySelector(".togle-btn");
let home=document.querySelector("#home2");
let projects=document.querySelector("#projects2");
let contact=document.querySelector("#contact-us2");
let about=document.querySelector("#about-us2");
home.classList.add("menu-hide");
projects.classList.add("menu-hide");
contact.classList.add("menu-hide");
about.classList.add("menu-hide");
btn.addEventListener("click",()=>{
    if (home.classList.contains("menu-hide")){
        setTimeout(()=>{
            home.classList.remove("menu-hide");
            home.classList.add("menu-show");
        },0)
    }
    else{
        home.classList.remove("menu-show");
        home.classList.add("menu-hide");
    }
    if (projects.classList.contains("menu-hide")){
        setTimeout(()=>{
            projects.classList.remove("menu-hide");
            projects.classList.add("menu-show");
        },100)
    }
    else{
        projects.classList.remove("menu-show");
        projects.classList.add("menu-hide");
    }
    if (contact.classList.contains("menu-hide")){
        setTimeout(()=>{
            contact.classList.remove("menu-hide");
            contact.classList.add("menu-show");
        },200)
    }
    else{
        contact.classList.remove("menu-show");
        contact.classList.add("menu-hide");
    }
    if (about.classList.contains("menu-hide")){
        setTimeout(()=>{
            about.classList.remove("menu-hide");
            about.classList.add("menu-show");
        },300)
    }
    else{
        about.classList.remove("menu-show");
        about.classList.add("menu-hide");
    }
})
