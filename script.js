const bar=document.querySelector('#bar');
const nav=document.querySelector('#navbar');
if(bar){
    bar.addEventListener('click',()=>{
        console.log("hii");
        nav.classList.add('active');
    })
}