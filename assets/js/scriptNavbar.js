let basketCard = [];
let modalContainer = document.querySelector('#modalContainer'); 
let addBtns = document.querySelectorAll('.addBtns');
let lessBtns = document.querySelectorAll('.lessBtns');

let modal = (product) => {

    modalContainer.innerHTML += `<div class="property-card text-center mb-5 active">
    <div class="property-image-title" ><h2>${product.title}</h2></div>
    <img class="property-image pb-3" src="./assets/img/${product.photo}">
    <div type="button" class= "addBtns"> + </div>
    <div class="property-social-icons mb-3">${product.qtity} </div>
    <div type="button" class= "lessBtns"> - </div>
    <div class="property-social-icons mb-3">${product.price} €</div>
    
    </div>`                                   
};



// addBtns.forEach(addBtn => {
//         addBtn.addEventListener('click', ((addBtn, i)) =>{
//         product[i].qtity++
//         product[i].price = dataPrice * basketCard[i].qtity    
//         })
// });
    


            
                

burger.addEventListener ('click',(eCommerceObj)=> {
        
    fetch('./assets/datas/datas.json')
    .then((response)=>{
        return response.json();
    })
    .then((datas)=>{
        
        titles.innerHTML = ""
        datas.burgers.forEach(eCommerceObj => {
            titles.innerHTML +=`<div class="property-card text-center mb-5 active">
            <div class="property-image-title" ><h2>${eCommerceObj.title}</h2></div>
            <img 
                class="property-image pb-3" 
                src="./assets/img/${eCommerceObj.photo}">
            s${eCommerceObj.overview}
            <div class="property-social-icons mb-3">${eCommerceObj.price}</div>
            <i class="btns fas fa-shopping-cart"
                data-price= "${eCommerceObj.price}"
                data-ref= "${eCommerceObj.id}"
                data-img="${eCommerceObj.photo}"
                data-title= "${eCommerceObj.title}"
                data-qtity= "${eCommerceObj.qtity}"></i>
        </div>`                                   
        });
    }).finally(()=>{
    let btns = document.querySelectorAll('.btns');
    console.log(btns)
    
        
    btns.forEach(btn => {
        btn.addEventListener('click', (event) =>{
            
            let dataRef = event.target.dataset.ref
            let dataTitle = event.target.dataset.title
            let dataImg = event.target.dataset.img
            let dataPrice = event.target.dataset.price
            let product =   {
                                id: dataRef, 
                                photo: dataImg, 
                                title: dataTitle, 
                                price: dataPrice, 
                                qtity:1
                            }
            
            if(basketCard.length==0) {
                basketCard.push(product)
            } else {
                let foundProduct = false;
                basketCard.forEach((card, i) => {
                    if(card.id == product.id) {
                        basketCard[i].qtity++
                        basketCard[i].price = dataPrice * basketCard[i].qtity;
                        foundProduct = true;
                    }
                })
                if(foundProduct == false){
                    basketCard.push(product)
                    modal(product)
                }
                
            }  

            console.log(basketCard)       
        })

    })


snack.addEventListener ('click',(eCommerceObj)=> {

    fetch('./assets/datas/datas.json')
    .then((response)=>{
        return response.json();
    })
    .then((datas)=>{

        titles.innerHTML = ""
        datas.snacks.forEach(eCommerceObj => {
            titles.innerHTML +=`<div class="property-card text-center mb-5">
            <div class="property-image-title"><h2>${eCommerceObj.title}</h2></div>
            <img class="property-image pb-3"src="./assets/img/${eCommerceObj.photo}"property-description">${eCommerceObj.overview}
            <div class="property-social-icons mb-3">${eCommerceObj.price}</div>
            <i class="btns fas fa-shopping-cart"
                data-price= "${eCommerceObj.price}"
                data-ref= "${eCommerceObj.id}"
                data-img="${eCommerceObj.photo}"
                data-title= "${eCommerceObj.title}"></i>
        </div>`                                   
        });
    }) .finally(()=>{
        let btns = document.querySelectorAll('.btns');
        
        btns.forEach(btn => {
            btn.addEventListener('click', (event) =>{
                
                let dataRef = event.target.dataset.ref
                let dataTitle = event.target.dataset.title
                let dataImg = event.target.dataset.img
                let dataPrice = event.target.dataset.price
                let product =   {
                                    id: dataRef, 
                                    photo: dataImg, 
                                    title: dataTitle, 
                                    price: dataPrice, 
                                    qtity:1
                                }
                
                if(basketCard.length==0) {
                    basketCard.push(product)
                } else {
                    let foundProduct = false;
                    basketCard.forEach((card, i) => {
                        if(card.id == product.id) {
                            basketCard[i].qtity++
                            basketCard[i].price = dataPrice * basketCard[i].qtity;
                            foundProduct = true;
                        }
                    })
                    if(foundProduct == false){
                        basketCard.push(product)
                        modal(product)
                    }
                    
                }  
    
                console.log(basketCard)       
            })
    
        })
    })
});

drink.addEventListener ('click',(eCommerceObj)=> {
    
    fetch('./assets/datas/datas.json')
    .then((response)=>{
        return response.json();
    })
    .then((datas)=>{

        titles.innerHTML = ""
        datas.drink.forEach(eCommerceObj => {
            titles.innerHTML +=`<div class="property-card text-center mb-5">
            <div class="property-image-title"><h2>${eCommerceObj.title}</h2></div>
            <img class="property-image pb-3"src="./assets/img/${eCommerceObj.photo}"property-description">${eCommerceObj.overview}
            <div class="property-social-icons mb-3">${eCommerceObj.price}</div>
            <i class="btns fas fa-shopping-cart"
                data-price= "${eCommerceObj.price}"
                data-ref= "${eCommerceObj.id}"
                data-img="${eCommerceObj.photo}"
                data-title= "${eCommerceObj.title}"></i>
        </div>`                                   
        });
    })
    .finally(()=>{
        let btns = document.querySelectorAll('.btns');
        btns.forEach(btn => {
            btn.addEventListener('click', (event) =>{
                
                let dataRef = event.target.dataset.ref
                let dataTitle = event.target.dataset.title
                let dataImg = event.target.dataset.img
                let dataPrice = event.target.dataset.price
                let product =   {
                                    id: dataRef, 
                                    photo: dataImg, 
                                    title: dataTitle, 
                                    price: dataPrice, 
                                    qtity:1
                                }
                
                if(basketCard.length==0) {
                    basketCard.push(product)
                } else {
                    let foundProduct = false;
                    basketCard.forEach((card, i) => {
                        if(card.id == product.id) {
                            basketCard[i].qtity++
                            basketCard[i].price = dataPrice * basketCard[i].qtity;
                            foundProduct = true;
                        }
                    })
                    if(foundProduct == false){
                        basketCard.push(product)
                        modal(product)
                    }
                    
                }  
    
                console.log(basketCard)       
            })
    
        })
    })
})
    })
});

salads.addEventListener ('click',(eCommerceObj)=> {
    
    fetch('./assets/datas/datas.json')
    .then((response)=>{
        return response.json();
    })
    .then((datas)=>{

        titles.innerHTML = ""
        datas.salads.forEach(eCommerceObj => {
            titles.innerHTML +=`<div class="property-card text-center mb-5">
            <div class="property-image-title"><h2>${eCommerceObj.title}</h2></div>
            <img class="property-image pb-3"src="./assets/img/${eCommerceObj.photo}"property-description">${eCommerceObj.overview}
            <div class="property-social-icons mb-1">${eCommerceObj.price}</div>
            <i class="btns fas fa-shopping-cart"
                data-price= "${eCommerceObj.price}"
                data-ref= "${eCommerceObj.id}"
                data-img="${eCommerceObj.photo}"
                data-title= "${eCommerceObj.title}"></i>
        </div>`                                   
        });
    })
    .finally(()=>{
        let btns = document.querySelectorAll('.btns');
        
        btns.forEach(btn => {
            btn.addEventListener('click', (event) =>{
                
                let dataRef = event.target.dataset.ref
                let dataTitle = event.target.dataset.title
                let dataImg = event.target.dataset.img
                let dataPrice = event.target.dataset.price
                let product =   {
                                    id: dataRef, 
                                    photo: dataImg, 
                                    title: dataTitle, 
                                    price: dataPrice, 
                                    qtity:1
                                }
                
                if(basketCard.length==0) {
                    basketCard.push(product)
                } else {
                    let foundProduct = false;
                    basketCard.forEach((card, i) => {
                        if(card.id == product.id) {
                            basketCard[i].qtity++
                            basketCard[i].price = dataPrice * basketCard[i].qtity;
                            foundProduct = true;
                        }
                    })
                    if(foundProduct == false){
                        basketCard.push(product)
                        modal(product)
                    }
                    
                }  
    
                console.log(basketCard)       
            })
    
        })
    })
});

dessert.addEventListener ('click',(eCommerceObj)=> {
    
    fetch('./assets/datas/datas.json')
    .then((response)=>{
        return response.json();
    })
    .then((datas)=>{

        titles.innerHTML = ""
        datas.desserts.forEach(eCommerceObj => {
            titles.innerHTML +=`<div class="property-card text-center mb-5">
            <div class="property-image-title"><h2>${eCommerceObj.title}</h2></div>
            <img class="property-image pb-3"src="./assets/img/${eCommerceObj.photo}"property-description">${eCommerceObj.overview}
            <div class="property-social-icons mb-3">${eCommerceObj.price}</div>
            <i class="btns fas fa-shopping-cart"
                data-price= "${eCommerceObj.price}"
                data-ref= "${eCommerceObj.id}"
                data-img="${eCommerceObj.photo}"
                data-title= "${eCommerceObj.title}"></i>
        </div>`                                   
        });
    })
    .finally(()=>{
        let btns = document.querySelectorAll('.btns');
        btns.forEach(btn => {
            btn.addEventListener('click', (event) =>{
                
                let dataRef = event.target.dataset.ref
                let dataTitle = event.target.dataset.title
                let dataImg = event.target.dataset.img
                let dataPrice = event.target.dataset.price
                let product =   {
                                    id: dataRef, 
                                    photo: dataImg, 
                                    title: dataTitle, 
                                    price: dataPrice, 
                                    qtity:1
                                }
                
                if(basketCard.length==0) {
                    basketCard.push(product)
                } else {
                    let foundProduct = false;
                    basketCard.forEach((card, i) => {
                        if(card.id == product.id) {
                            basketCard[i].qtity++
                            basketCard[i].price = dataPrice * basketCard[i].qtity;
                            foundProduct = true;
                        }
                    })
                    if(foundProduct == false){
                        basketCard.push(product)
                        modal(product)
                    }
                    
                }  
    
                console.log(basketCard)       
            })
    
        })
    })
});
