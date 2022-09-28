// close links//
const navToggle = document.querySelector('.mobile-header .nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener("click" , ()=>{
    console.log("hey")
})


console.log(navToggle)
navToggle.addEventListener('click' , ()=>{
    navToggle.classList.toggle("rotateIn");
    // linksContainer.classList.toggle('show-links')
    const containerHeight= linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight===0){
        linksContainer.style.height=`${linksHeight}px`
    }else{
        linksContainer.style.height=0
    }

})



// fixed nav

const navBar =document.querySelector(".mobile-header")
const main =document.querySelector(".main-header")
const fixed =document.querySelector(".main-fixed");

window.addEventListener('scroll' , ()=>{
   const scrollHeight = window.pageYOffset;
  
   const navHeight = navBar.getBoundingClientRect().height;
   const mainHight = main.getBoundingClientRect().height;
  
   if(scrollHeight > navHeight){
       navBar.classList.add('fixed-nav')
   }
   else{
       navBar.classList.remove('fixed-nav')
   }

   if(scrollHeight > mainHight +100){
  
    fixed.style.display="block";
    fixed.classList.add("fadeInDownBig")
    fixed.style.transform ="translateY(0)";
    fixed.style.zIndex="999";
    }
   else{
    fixed.style.display= "none";
    fixed.style.transform ="translateY(-900px)"

   }
 
})


window.addEventListener("DOMContentLoaded" , ()=>{
    fixed.style.display = "none";
    fixed.style.transform ="translateY(-900px)";
    fixed.style.background="transparent";
    fixed.style.zIndex="-999";
})


// animated anchor

const list = document.querySelectorAll(" .nav ul li");
const listMobile = document.querySelectorAll(".links-container ul li");


list.forEach(li=>{
  li.addEventListener("mouseover" , ()=>{
    li.classList.add("pulse");
  })
  li.addEventListener("mouseout" , ()=>{
    li.classList.remove("pulse");

  })
});

listMobile.forEach(li=>{
    li.addEventListener("mouseenter" , ()=>{
      li.classList.add("pulse");
    })
    li.addEventListener("mouseout" , ()=>{
      li.classList.remove("pulse");
  
    })
  })
  
