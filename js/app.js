
	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
        400:{
          items:1
        },
        500:{
          items:1
        },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			  },
        1200:{
          items:1
        },
        1300:{
          items:1
        },
        1400:{
          items:1
        },
			  1600:{
				  items:1
			  }
		  }
	})


// $('.owl-services').owlCarousel({
//     items:3,
//     loop:true,
//     dots: true,
//     nav: false,
//     autoplay: true,
//     margin:5,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:2
//           },
//           1000:{
//               items:3
//           }
//       }
// });


jQuery(document).ready(function($) {
  "use strict";
  $('#customers-testimonials').owlCarousel( {
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      nav:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });
  });



// const containerEl = document.querySelector(".words");
// const careers = ["Inspiration just ahead", "Inspiration just ahead", "Inspiration just ahead"];


// let careerIndex = 0;
// let characterIndex = 0;
// let time = 220;
// updateText();
// function updateText(){
//   characterIndex++;
  
//   containerEl.innerHTML=`${careers[careerIndex]}`
//   containerEl.classList.add("show");
//   if(characterIndex === careers[careerIndex].length){
//     careerIndex++;
//     characterIndex=0;
  
//   }
//   if(careerIndex === careers.length){
//     careerIndex=0;
//     setTimeout(() => {
     
//       containerEl.classList.remove("show")
//     }, 170);
//   }
//   setTimeout(updateText , time);
// }



// close links//
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click' , ()=>{
  navToggle.classList.toggle("rotateIn")
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
    fixed.style.zIndex="-999";

   }
 
})


window.addEventListener("load" , ()=>{
  fixed.style.display = "none";
  fixed.style.transform ="translateY(-900px)";
  fixed.style.background="transparent";
  fixed.style.zIndex="-999";
})


// animated anchor

const list = document.querySelectorAll(".main-header .nav ul li");
console.log(list)
list.forEach(li=>{
  li.addEventListener("mouseover" , ()=>{
    li.classList.add("pulse");
  })
  li.addEventListener("mouseout" , ()=>{
    li.classList.remove("pulse");

  })
})
// fixed nav wow aniamted



// =======preloader=======
// For Live Projects
window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});
