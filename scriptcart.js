product = [
    {
      "id": "pd1",
      "data-price": 20,
      "data-name": "Whole wheat",
      "image": "ingredients_projweb\w1.jpg"
    },
    {
      "id": "pd2",
      "data-price": 20,
      "data-name": "tortilla",
      "image": "ingredients_projweb\w2.jpg"
    },
    {
      "id": "pd3",
      "data-price": 30,
      "data-name": "chicken teriyaki",
      "image": "ingredients_projweb\Meat1.png"
    },
    {
      "id": "pd4",
      "data-price": 30,
      "data-name": "smoke-pork",
      "image": "ingredients_projweb\Meat2.png"
    },
    {
      "id": "pd5",
      "data-price": 30,
      "data-name": "roast beef",
      "image": "ingredients_projweb\Meat3.png"
    },
    {
      "id": "pd6",
      "data-price": 30,
      "data-name": "ham",
      "image": "ingredients_projweb\Meat4.png"
    },
    {
      "id": "pd7",
      "data-price": 30,
      "data-name": "meatball",
      "image": "ingredients_projweb\Meat5.png"
    },
    {
      "id": "pd8",
      "data-price": 30,
      "data-name": "shrimp",
      "image": "ingredients_projweb\Meat6.png"
    },
    {
      "id": "pd9",
      "data-price": 30,
      "data-name": "spicy chicken",
      "image": "ingredients_projweb\Meat7.png"
    },
    {
      "id": "pd10",
      "data-price": 30,
      "data-name": "tuna",
      "image": "ingredients_projweb\Meat8.png"
    },
    {
      "id": "pd11",
      "data-price": 25,
      "data-name": "Vegetarian",
      "image": "ingredients_projweb\Meat9.png"
    },
    {
      "id": "pd12",
      "data-price": 30,
      "data-name": "dolly",
      "image": "ingredients_projweb\Meat10.png"
    },
    {
      "id": "pd13",
      "data-price": 10,
      "data-name": "Black Olive",
      "image": "ingredients_projweb\veg1.png"
    },
    {
      "id": "pd14",
      "data-price": 10,
      "data-name": "Carrot",
      "image": "ingredients_projweb\veg2.png"
    },
    {
      "id": "pd15",
      "data-price": 10,
      "data-name": "cucumber",
      "image": "ingredients_projweb\veg3.png"
    },
    {
      "id": "pd16",
      "data-price": 10,
      "data-name": "Jalapeno",
      "image": "ingredients_projweb\veg4.png"
    },
    {
      "id": "pd17",
      "data-price": 10,
      "data-name": "lettuce",
      "image": "ingredients_projweb\veg5.png"
    },
    {
      "id": "pd18",
      "data-price": 10,
      "data-name": "pepper green",
      "image": "ingredients_projweb\veg6.png"
    },
    {
      "id": "pd19",
      "data-price": 10,
      "data-name": "pickle",
      "image": "ingredients_projweb\veg7.png"
    },
    {
      "id": "pd20",
      "data-price": 10,
      "data-name": "red onion",
      "image": "ingredients_projweb\veg8.png"
    },
    {
      "id": "pd21",
      "data-price": 10,
      "data-name": "tomato",
      "image": "ingredients_projweb\veg9.png"
    },
    {
      "id": "pd22",
      "data-price": 5,
      "data-name": "BBQ",
      "image": "ingredients_projweb\s1.png"
    },
    {
      "id": "pd23",
      "data-price": 5,
      "data-name": "cheddar cheese",
      "image": "ingredients_projweb\s2.png"
    },
    {
      "id": "pd24",
      "data-price": 5,
      "data-name": "chilli",
      "image": "ingredients_projweb\s3.png"
    },
    {
      "id": "pd25",
      "data-price": 5,
      "data-name": "Honey Mastard",
      "image": "ingredients_projweb\s4.png"
    },
    {
      "id": "pd26",
      "data-price": 5,
      "data-name": "Ketchup",
      "image": "ingredients_projweb\s5.png"
    },
    {
      "id": "pd27",
      "data-price": 5,
      "data-name": "mayonnaise",
      "image": "ingredients_projweb\s6.png"
    },
    {
      "id": "pd29",
      "data-price": 5,
      "data-name": "spicy mayo",
      "image": "ingredients_projweb\s7.png"
    },
    {
      "id": "pd30",
      "data-price": 20,
      "data-name": "Thousand Island",
      "image": "ingredients_projweb\s8.png"
    },
    {
      "id": "pd31",
      "data-price": 20,
      "data-name": "bacon",
      "image": "ingredients_projweb\top1.png"
    },
    {
      "id": "pd32",
      "data-price": 20,
      "data-name": "Cheddar Cheese",
      "image": "ingredients_projweb\top2.png"
    },
    {
      "id": "pd33",
      "data-price": 20,
      "data-name": "Double meat",
      "image": "ingredients_projweb\top3.png"
    },
    {
      "id": "pd34",
      "data-price": 20,
      "data-name": "Scrambled eggs",
      "image": "ingredients_projweb\top4.png"
    },
    {
      "id": "pd35",
      "data-price": 20,
      "data-name": "Mozzarella Cheese",
      "image": "ingredients_projweb\top5.png"
    },
  
  ];

/*document.addEventListener('DOMContentLoaded', function () {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const productElements = document.querySelectorAll('#product-list li');

    let cart = [];

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent;
            cartItemsElement.appendChild(li);
            total += item.price;
        }
        );

        cartTotalElement.textContent = total.toFixed(0);
    }

    function addToCart(name, price) {
        cart.push({name, price });
        updateCart();
    }


    productElements.forEach(productElement => {
        const img = productElement.getAttribute('img');
        const name = productElement.getAttribute('data-name');
        const price = parseFloat(productElement.getAttribute('data-price'));

        const addToCartButton = productElement.querySelector('.btn');
        addToCartButton.addEventListener('click', () => {
            addToCart(name, price);
        });
    }
    
    );

});*/


// const display =()=> {
//     let listHTML = document.querySelector('.listCart');
//     let totalHTML = document.querySelector('.ican-cart span');
//     let totalQuantity = 0;
//     listHTML.innerHTML = null;
//     cart.forEach(item => {
//         totalQuantity = totalQuantity + item.quantity;
//         let newItem = document.createElement('div');
//         newItem.classList.add('item');
//         newItem.innerHTML =
//         `
//             <div class="image">
//                 <img src="${image}" />
//             </div>
//             <div class="name">Name</div>
//             <div class="totalPrice">${price}</div>
//             <div class="quantity">
//                 <span class="minus">-</span>
//                 <span>1</span>
//                 <span class="plus">-</span>
//             </div>
//         `;

//         listHTML.appendChild(newItem);
//     })
//     totalHTML.innerText = totalQuantity;
// }

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, name, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${name}</p>
        <h2>฿ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "฿ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "฿ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>฿ ${price}.00</h2>`+
                "<i class='bx bxs-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }


}






const pd1 = document.querySelector("#pd1");
const im1 = document.querySelector("#im1");
pd1.addEventListener("click", () =>{

    if( im1.style.display == "none"){
        im1.style.display = "block";
    } else {
        im1.style.display = "none";
    }
})


const pd2 = document.querySelector("#pd2");
const im2 = document.querySelector("#im2");
pd2.addEventListener("click", () =>{

    if( im2.style.display == "none"){
        im2.style.display = "block";
    } else {
        im2.style.display = "none";
    }
})


const pd3 = document.querySelector("#pd3");
const im3 = document.querySelector("#im3");
pd3.addEventListener("click", () =>{

    if( im3.style.display == "none"){
        im3.style.display = "block";
    } else {
        im3.style.display = "none";
    }
})

const pd4 = document.querySelector("#pd4");
const im4 = document.querySelector("#im4");
pd4.addEventListener("click", () =>{

    if( im4.style.display == "none"){
        im4.style.display = "block";
    } else {
        im4.style.display = "none";
    }
})

const pd5 = document.querySelector("#pd5");
const im5 = document.querySelector("#im5");
pd5.addEventListener("click", () =>{

    if( im5.style.display == "none"){
        im5.style.display = "block";
    } else {
        im5.style.display = "none";
    }
})

const pd6 = document.querySelector("#pd6");
const im6 = document.querySelector("#im6");
pd6.addEventListener("click", () =>{

    if( im6.style.display == "none"){
        im6.style.display = "block";
    } else {
        im6.style.display = "none";
    }
})

const pd7 = document.querySelector("#pd7");
const im7 = document.querySelector("#im7");
pd7.addEventListener("click", () =>{

    if( im7.style.display == "none"){
        im7.style.display = "block";
    } else {
        im7.style.display = "none";
    }
})

const pd8 = document.querySelector("#pd8");
const im8 = document.querySelector("#im8");
pd8.addEventListener("click", () =>{

    if( im8.style.display == "none"){
        im8.style.display = "block";
    } else {
        im8.style.display = "none";
    }
})


const pd9 = document.querySelector("#pd9");
const im9 = document.querySelector("#im9");
pd9.addEventListener("click", () =>{

    if( im9.style.display == "none"){
        im9.style.display = "block";
    } else {
        im9.style.display = "none";
    }
})


const pd10 = document.querySelector("#pd10");
const im10= document.querySelector("#im10");
pd10.addEventListener("click", () =>{

    if( im10.style.display == "none"){
        im10.style.display = "block";
    } else {
        im10.style.display = "none";
    }
})

const pd11 = document.querySelector("#pd11");
const im11 = document.querySelector("#im11");
pd11.addEventListener("click", () =>{

    if( im11.style.display == "none"){
        im11.style.display = "block";
    } else {
        im11.style.display = "none";
    }
})

const pd12 = document.querySelector("#pd12");
const im12 = document.querySelector("#im12");
pd12.addEventListener("click", () =>{

    if( im12.style.display == "none"){
        im12.style.display = "block";
    } else {
        im12.style.display = "none";
    }
})

const pd13 = document.querySelector("#pd13");
const im13 = document.querySelector("#im13");
pd13.addEventListener("click", () =>{

    if( im13.style.display == "none"){
        im13.style.display = "block";
    } else {
        im13.style.display = "none";
    }
})

const pd14 = document.querySelector("#pd14");
const im14 = document.querySelector("#im14");
pd14.addEventListener("click", () =>{

    if( im14.style.display == "none"){
        im14.style.display = "block";
    } else {
        im14.style.display = "none";
    }
})

const pd15 = document.querySelector("#pd15");
const im15 = document.querySelector("#im15");
pd15.addEventListener("click", () =>{

    if( im15.style.display == "none"){
        im15.style.display = "block";
    } else {
        im15.style.display = "none";
    }
})


const pd16 = document.querySelector("#pd16");
const im16 = document.querySelector("#im16");
pd16.addEventListener("click", () =>{

    if( im16.style.display == "none"){
        im16.style.display = "block";
    } else {
        im16.style.display = "none";
    }
})


const pd17 = document.querySelector("#pd17");
const im17 = document.querySelector("#im17");
pd17.addEventListener("click", () =>{

    if( im17.style.display == "none"){
        im17.style.display = "block";
    } else {
        im17.style.display = "none";
    }
})

const pd18 = document.querySelector("#pd18");
const im18 = document.querySelector("#im18");
pd18.addEventListener("click", () =>{

    if( im18.style.display == "none"){
        im18.style.display = "block";
    } else {
        im18.style.display = "none";
    }
})

const pd19 = document.querySelector("#pd19");
const im19 = document.querySelector("#im19");
pd19.addEventListener("click", () =>{

    if( im19.style.display == "none"){
        im19.style.display = "block";
    } else {
        im19.style.display = "none";
    }
})

const pd20 = document.querySelector("#pd20");
const im20 = document.querySelector("#im20");
pd20.addEventListener("click", () =>{

    if( im20.style.display == "none"){
        im20.style.display = "block";
    } else {
        im20.style.display = "none";
    }
})

const pd21 = document.querySelector("#pd21");
const im21 = document.querySelector("#im21");
pd21.addEventListener("click", () =>{

    if( im21.style.display == "none"){
        im21.style.display = "block";
    } else {
        im21.style.display = "none";
    }
})

const pd22 = document.querySelector("#pd22");
const im22 = document.querySelector("#im22");
pd22.addEventListener("click", () =>{

    if( im22.style.display == "none"){
        im22.style.display = "block";
    } else {
        im22.style.display = "none";
    }
})


const pd23 = document.querySelector("#pd23");
const im23 = document.querySelector("#im23");
pd23.addEventListener("click", () =>{

    if( im23.style.display == "none"){
        im23.style.display = "block";
    } else {
        im23.style.display = "none";
    }
})


const pd24 = document.querySelector("#pd24");
const im24= document.querySelector("#im24");
pd24.addEventListener("click", () =>{

    if( im24.style.display == "none"){
        im24.style.display = "block";
    } else {
        im24.style.display = "none";
    }
})

const pd25 = document.querySelector("#pd25");
const im25 = document.querySelector("#im25");
pd25.addEventListener("click", () =>{

    if( im25.style.display == "none"){
        im25.style.display = "block";
    } else {
        im25.style.display = "none";
    }
})

const pd26 = document.querySelector("#pd26");
const im26 = document.querySelector("#im26");
pd26.addEventListener("click", () =>{

    if( im26.style.display == "none"){
        im26.style.display = "block";
    } else {
        im26.style.display = "none";
    }
})

const pd27 = document.querySelector("#pd27");
const im27 = document.querySelector("#im27");
pd27.addEventListener("click", () =>{

    if( im27.style.display == "none"){
        im27.style.display = "block";
    } else {
        im27.style.display = "none";
    }
})

const pd29 = document.querySelector("#pd29");
const im29 = document.querySelector("#im29");
pd29.addEventListener("click", () =>{

    if( im29.style.display == "none"){
        im29.style.display = "block";
    } else {
        im29.style.display = "none";
    }
})

const pd30 = document.querySelector("#pd30");
const im30 = document.querySelector("#im30");
pd30.addEventListener("click", () =>{

    if( im30.style.display == "none"){
        im30.style.display = "block";
    } else {
        im30.style.display = "none";
    }
})


const pd31 = document.querySelector("#pd31");
const im31 = document.querySelector("#im31");
pd31.addEventListener("click", () =>{

    if( im31.style.display == "none"){
        im31.style.display = "block";
    } else {
        im31.style.display = "none";
    }
})


const pd32 = document.querySelector("#pd32");
const im32= document.querySelector("#im32");
pd32.addEventListener("click", () =>{

    if( im32.style.display == "none"){
        im32.style.display = "block";
    } else {
        im32.style.display = "none";
    }
})

const pd33 = document.querySelector("#pd33");
const im33 = document.querySelector("#im33");
pd33.addEventListener("click", () =>{

    if( im33.style.display == "none"){
        im33.style.display = "block";
    } else {
        im33.style.display = "none";
    }
})

const pd34 = document.querySelector("#pd34");
const im34 = document.querySelector("#im34");
pd34.addEventListener("click", () =>{

    if( im34.style.display == "none"){
        im34.style.display = "block";
    } else {
        im34.style.display = "none";
    }
})

const pd35 = document.querySelector("#pd35");
const im35 = document.querySelector("#im35");
pd35.addEventListener("click", () =>{

    if( im35.style.display == "none"){
        im35.style.display = "block";
    } else {
        im35.style.display = "none";
    }
})
