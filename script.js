/*================================
 FLORESBYNICOLE
 Website Effects
================================*/


console.log("Floresbynicole website loaded");



/*===============================
SCROLL FADE ANIMATION
================================*/


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:.15

});



sections.forEach(section=>{


observer.observe(section);


});






/*===============================
FAQ ACCORDION
================================*/


const faqButtons = document.querySelectorAll(".faqItem button");



faqButtons.forEach(button=>{


button.addEventListener("click",()=>{


const answer = button.nextElementSibling;

const icon = button.querySelector("span");



if(answer.style.maxHeight){


answer.style.maxHeight = null;

icon.textContent="+";


}

else{


document.querySelectorAll(".answer").forEach(item=>{


item.style.maxHeight=null;


});



document.querySelectorAll(".faqItem span").forEach(item=>{


item.textContent="+";


});



answer.style.maxHeight = answer.scrollHeight + "px";


icon.textContent="-";


}



});


});






/*===============================
GALLERY IMAGE POPUP
================================*/


const galleryImages = document.querySelectorAll(".galleryItem img");



galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


const popup = document.createElement("div");


popup.className="imagePopup";



popup.innerHTML = `

<img src="${image.src}">

`;



document.body.appendChild(popup);



popup.addEventListener("click",()=>{


popup.remove();


});


});


});







/*===============================
POPUP DESIGN
================================*/


const popupCSS = document.createElement("style");


popupCSS.innerHTML = `


.imagePopup{

position:fixed;

inset:0;

background:rgba(0,0,0,.8);

display:flex;

justify-content:center;

align-items:center;

z-index:9999;

padding:30px;

cursor:pointer;

}



.imagePopup img{

max-width:90%;

max-height:90%;

border-radius:25px;

border:5px solid #ffd4df;

box-shadow:

0 0 50px rgba(255,150,180,.7);

}



`;



document.head.appendChild(popupCSS);







/*===============================
NAVBAR EFFECT
================================*/


const nav = document.querySelector("nav");



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


nav.style.boxShadow =

"0 10px 35px rgba(180,100,130,.2)";


}


else{


nav.style.boxShadow="none";


}


});







/*===============================
INSTAGRAM BUTTON EFFECT
================================*/


const buttons = document.querySelectorAll("a");



buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


button.style.transform="translateY(-2px)";


});



button.addEventListener("mouseleave",()=>{


button.style.transform="translateY(0)";


});


});
