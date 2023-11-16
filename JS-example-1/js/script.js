let btn = document.querySelector(".icon-menu");
let menu = document.querySelector(".menu__body");
const body = document.body;

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("body-active");
    body.classList.toggle("lock")
})

//========================================================================================================================================================

const items = document.querySelectorAll('.spoller__item');

items.forEach((item) => {
    item.addEventListener("click", () => {
        const currentlyActive = document.querySelectorAll(".spoller__item.active");
        if(currentlyActive) {
            currentlyActive.forEach((active) => {
                if(active!==item){
                    active.lastElementChild.style.
                    maxHeight = 0;
                    active.classList.toggle("active");
                }
            });
        }
        item.classList.toggle("active");

        const elementBody = item.querySelector(".spoller__body");
        if(item.classList.contains("active")){
            elementBody.style.maxHeight = elementBody.
            scrollHeight + "px";
        } else {
            elementBody.style.maxHeight = 0;
        }
    });
});

//========================================================================================================================================================
let btnInp = document.querySelector(".button");
let input = document.querySelector(".input");
let txt = document.querySelector(".txt");

btnInp.addEventListener("click", () => {
    txt.textContent = input.value;
})

//========================================================================================================================================================

