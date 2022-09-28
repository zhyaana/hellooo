let filterProducts = [...products]


const productContainer = document.querySelector('.products-container');
const btnContainer = document.querySelector('.btn-container')
const displayProducts = (products)=>{

    productContainer.innerHTML = products.map(product=>{
      const {id ,title , image , background , color } =product;

        return `
         <article class="product wow fadeInUp" data-id="${id}">
            <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <div class="foot">
            <h5 class="product-name wow zoomIn" data-wow-delay="0.6s" style="background: ${background}; color:${color};">${title}</h5>
          </div>
        </article>`
    }).join('')

}


// paginate

const peginate =(followers)=>{
    const itemsPerPage = 6;
    const numberofPages = Math.ceil(followers.length / itemsPerPage);
    // 100/10 =10 page 
    const newFollowers =Array.from({length:numberofPages},(_, index)=>{
        // 0*10 = 0  slice(0 , 10)
        // 1*10 = 10 slice(10 , 20)
        // 2*10 = 20 slice(20, 30)
        // 3*10 = 30 slice(30, 40)
        const start = index *itemsPerPage;
        return followers.slice(start , start + itemsPerPage)
    })
    console.log(newFollowers)
    return newFollowers
//   display(newFollowers)
}


const form = document.querySelector('.input-form')
const searchInput = document.querySelector('.search-input');
form.addEventListener('keyup' , (e)=>{

 const searchValue = searchInput.value;
 filterProducts = products.filter(product=>{
    return product.title.toLowerCase().includes(searchValue);
 })
 displayProducts(filterProducts);
})

const companiesDOM = document.querySelector('.category');

const showButtons=()=>{

    const buttons = products.reduce((acc , product)=>{
      if(!acc.includes(product.company)){
        acc.push(product.company)
      }
       return acc;
    } , ['all'])
    // return buttons
    

    companiesDOM.innerHTML= buttons.map((btn, index)=>{
       let delay = index;
       if(index ==1){
        delay= 0.5;
       }
        if(index== 2){
            delay= 0.7;
        }
        if(index ==3){
            delay = 0.9;
        }
        if(index==4){
            delay=1.3;
        }
        return `<button class="category-btn wow fadeInDown" data-wow-delay="${delay}s" data-id="${btn}">${btn} Designs</button>`
    }).join('')

}

showButtons();


// display buttons
const displayButtons =(container , pages , activeIndex)=>{
let btns = pages.map((_,pageIndex)=>{
    return `<button class="page-btn ${activeIndex===pageIndex ? 'active-btn' : 'null'}" data-index="${pageIndex}">
        ${pageIndex+1}
    </button>`
})
btns.push(`<button class="next-btn wow zoomIn"><span class="fas fa-arrow-right"></span></button>`)
btns.unshift(`<button class="prev-btn wow zoomIn"><span class="fas fa-arrow-left"></span></button>`)
container.innerHTML=btns.join('')
}


let index= 0;
let pages=[];

const setupUI =()=>{
    displayProducts(pages[index])
    displayButtons(btnContainer , pages , index)
}

const start =()=>{
   pages = peginate(filterProducts)
   setupUI()
//  pages.forEach((item , index)=>{
//    display(page[0])
//  })
}
start();

companiesDOM.addEventListener('click' , e=>{
    if(e.target.dataset.id =='all'){
     filterProducts= pages[0];
    //  displayProducts(pages[0])
    }
   else{
    filterProducts= products.filter(product=>{
     return product.company === e.target.dataset.id
    })
   }
 
    displayProducts(filterProducts);
 })
 
 const allBtns = document.querySelectorAll(".category-btn");
 allBtns.forEach(btn=>{
       btn.addEventListener("click" ,()=>{
        allBtns.forEach(btn=>{
            btn.classList.remove("active");
        })
        btn.classList.add("active");
    } )
 })
 
 


btnContainer.addEventListener('click' , e=>{
    if(e.target.classList.contains('btn-container')) return;
    if(e.target.classList.contains('page-btn')){
        index=parseInt(e.target.dataset.index);
    }
    if(e.target.classList.contains('next-btn')){
        index++;
        if(index > pages.length-1){
            return
            // index=0;
        }
    }
    if(e.target.classList.contains('prev-btn')){
        index--;
        if(index < 0){
            return
            // index=index.length-1
        }
    }
    setupUI();
    })
    
    
    