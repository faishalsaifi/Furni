const btns=[
    {
        id: 1,
        name : 'Chair',
       
    },
    {
        id: 2,
        name : 'Armchair',
  
    },
    {
        id: 3,
        name : 'Sofa',
        
    },
]

const filters = [...new Set(btns.map((btn) =>
   {return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
    var {name, id} = btn;
    return(
        "<button class='fill-p' onclick='filterItems("+(id)+`)'>${name}</button>`
    )
}).join('');

const product = [
    {
        id: 1,
        image: 'product-1.png',
        title: 'Nordic Chair',
        price: 50.00,
        category: 'Chair'
    },
    {
        id: 1,
        image: 'product-2.png',
        title: 'Kruzo Aero Chair',
        price: 78.00,
        category: 'Chair'
    },
    {
        id: 1,
        image: 'product-3.png',
        title: 'Ergonomic Chair',
        price: 43.00,
        category: 'Chair'
    },
    {
        id: 2,
        image: 'product4.png',
        title: 'Tranquil Lounger',
        price: 50.00,
        category: 'Armchair'
    },
    {
        id: 2,
        image: 'product5.png',
        title: 'Cosmo Chaise',
        price: 78.00,
        category: 'Armchair'
    },
    {
        id: 2,
        image: 'product6.png',
        title: 'Zenith Seat',
        price: 43.00,
        category: 'Armchair'
    },
    {
        id: 3,
        image: 'product7.png',
        title: 'Lounge Lux',
        price: 50.00,
        category: 'Sofa'
    },
    {
        id: 3,
        image: 'product8.png',
        title: 'Elegi Sofa',
        price: 78.00,
        category: 'Sofa'
    },
    {
        id: 3,
        image: 'product9.png',
        title: 'Cosmic Couch',
        price: 43.00,
        category: 'Sofa'
    },
];

const categories = [...new Set(product.map((item) =>
   {return item}))]

const filterItems = (a)=>{
    const filterCategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
                )
        }
    }
    displayItem(filterCategories)
}

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var{image, title, price} = item;
        return(
            `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class="banner"> 40% off</div>
                <div class='bottom'>
                    <h2>$ ${price}.00</h2>
                    <button class="Buy">$ ${price}.00 Only</button>
                    <button class="cart"><i class="fa-solid fa-cart-shopping"></i> Add to cart </button>
                </div>
            </div>`)
 }).join('');
 }
 displayItem(categories);


const divcontainer = document.querySelector('#btns');
let isclicked = true;

let hideShow = function(){
    if(isclicked){
    divcontainer.style.display = 'flex';
    isclicked = false;
}
else{
    divcontainer.style.display = 'none';
    isclicked = true;
}
}

function validation(){

    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
  
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email is Valid";
        text.style.color = "#00ff00";
            
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your Email is Invalid";
        text.style.color = "#ff0000";
        
    }
    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
  }