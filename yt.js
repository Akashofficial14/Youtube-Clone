var icon=document.querySelector("nav i")
var old=document.querySelector("#part1")
var naya=document.querySelector("#part3")
var center=document.querySelector("#sec1 #part2b")
var flag=0
icon.addEventListener("click",function(){
    if(flag==0){
        old.style.display=`none`
        naya.style.left=`10px`
    // center.style.left=`10%`
    flag=1
    }
    else{
     old.style.display=`flex`
    naya.style.left=`-180px`
    // center.style.left=`1%`
    flag=0
    }
})
var navp3=document.querySelector("#navp3")
var h4=document.createElement("h4")
h4.setAttribute("id","search")
h4.innerHTML=`<i class="ri-search-line"></i>`
navp3.appendChild(h4)
console.log(h4)