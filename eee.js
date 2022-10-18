
let sidebar = document.querySelector(".sidebar" )
let btn =document.querySelector(".btn")
let position=0;
let count=1;
function open(){
    count++;
    position+=sidebar.offsetWidth;
    if(count%2!=0){
        position=0;
    }

sidebar.style.left=position-200+"px";
}
btn.addEventListener("click", open)