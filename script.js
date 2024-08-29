let seeMoreBtn = document.querySelector(".see-more");
let seeLessBtn = document.querySelector(".see-less");
let products2 = document.querySelector(".products2");
let subBtn = document.querySelector(".sub-btn");
let msg = document.querySelector(".msg");
let msg2 = document.querySelector(".msg2");
let form = document.querySelector(".form");
let form2 = document.querySelector(".form2");
let form3 = document.querySelector(".form3");
let testCmnt1 = document.querySelector("#test-cmnt1");
let testCmnt2 = document.querySelector("#test-cmnt2");
let arr1 = document.querySelector(".arr1");
let arr2 = document.querySelector(".arr2");

seeMoreBtn.addEventListener("click", ()=>{
    products2.classList.remove("hide");
    seeMoreBtn.classList.add("hide");
    seeLessBtn.classList.remove("hide");
})

seeLessBtn.addEventListener("click", ()=>{
    products2.classList.add("hide");
    seeMoreBtn.classList.remove("hide");
    seeLessBtn.classList.add("hide");
})

function subscribed(event){
    event.preventDefault();
    msg.classList.remove("hide");
    form.classList.add("hide");
}
function msgbtn(event){
    event.preventDefault();
    form3.classList.remove("hide");
    form2.classList.add("hide");
}
function showmsg(event){
    event.preventDefault();
    msg2.classList.remove("hide");
    form3.classList.add("hide");
    // form2.classList.add("hide");
}

// subBtn.addEventListener("submit", (event)=>{
//     msg.classList.remove("hide");
//     form.addEventListener.add("hide");
// }).preventDefault();

arr2.addEventListener("click", ()=>{
    testCmnt2.classList.remove("hide");
    testCmnt1.classList.add("hide");
})

arr1.addEventListener("click", ()=>{
    testCmnt1.classList.remove("hide");
    testCmnt2.classList.add("hide");
})