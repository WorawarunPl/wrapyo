const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 0,
        "name": "tortilla",
        "image":"w2.png",
        "price": 20,
        "desc":"Tortilla wrap fragrant from the oven"
    },
    {
        "id": 1,
        "name": "Whole wheat",
        "image":"w1.jpg",
        "price": 20,
        "desc" : "Whole wheat wrap fragrant from the oven"
    },
   
    {
        "id": 2,
        "name": "meatball",
        "image":"Meat5.png",
        "price": 30,
        "desc":"Meatball chewy fragrant delicious and rich sauce"
    },
    {
        "id": 3,
        "name": "spicy chicken",
        "image":"Meat7.png",
        "price": 30,
        "desc":"Spicy chicken chewy fragrant delicious and rich sauce"
    },

    {
        "id": 4,
        "name": "chicken teriyaki",
        "image":"Meat1.png",
        "price": 30,
        "desc":"Chicken teriyaki chewy fragrant delicious and rich sauce"
    },
    {
        "id": 5,
        "name": "dolly",
        "image":"Meat10.png",
        "price": 30,
        "desc":"Dolly chewy fragrant delicious and rich sauce"
    },

    {
        "id": 6,
        "name": "shrimp",
        "image":"Meat6.png",
        "price": 30,
        "desc":"Shrimp chewy fragrant delicious and rich sauce"
    },
    {
        "id": 7,
        "name": "ham",
        "image":"Meat4.png",
        "price": 30,
        "desc":"Ham chewy fragrant delicious"
    },
    {
        "id": 8,
        "name": "smoke pork",
        "image":"Meat2.png",
        "price": 30,
        "desc":"Smoke pork chewy fragrant delicious and rich sauce"
    },
    {
        "id": 9,
        "name": "roast beef",
        "image":"Meat3.png",
        "price": 30,
        "desc":"Roast beef chewy fragrant delicious and rich sauce"
    },
    {
        "id": 10,
        "name": "tuna",
        "image":"Meat8.png",
        "price": 30,
        "desc":"Tuna chewy fragrant delicious and rich sauce"
    },
    {
        "id": 11,
        "name": "Vegetarian",
        "image":"Meat9.png",
        "price": 25,
        "desc":"Vegetarian fresh and crispy from New Zealand farms"
    },
    {
        "id": 12,
        "name": "lettuce",
        "image":"veg5.png",
        "price": 10,
        "desc":"Lettuce fresh and crispy from the farm in Sicily"
    },
    {
        "id": 13,
        "name": "tomato",
        "image":"veg9.png",
        "price": 10,
        "desc":"Tomato fresh and crispy from the farm in Sicily"
    },
    {
        "id": 14,
        "name": "Cucumber",
        "image":"veg3.png",
        "price": 10,
        "desc":"Cucumber fresh and crispy from the farm in Sicily"
    },
    {
        "id": 15,
        "name": "pickle",
        "image":"veg7.png",
        "price": 10,
        "desc":"Pickle fresh and crispy from the farm in Sicily"
    },
    {
        "id": 16,
        "name": "pepper green",
        "image":"veg6.png",
        "price": 10,
        "desc":"Pepper green fresh and crispy from the farm in Sicily"
    },
    {
        "id": 17,
        "name": "red onion",
        "image":"veg8.png",
        "price": 10,
        "desc":"Red onion fresh and crispy from the farm in Sicily"
    },
    {
        "id": 18,
        "name": "Jalapeno",
        "image":"veg4.png",
        "price": 10,
        "desc":"Jalapeno fresh and crispy from the farm in Sicily"
    },
    {
        "id": 19,
        "name": "Carrot",
        "image":"veg2.png",
        "price": 10,
        "desc":"Carrot fresh and crispy from the farm in Sicily"
    },
    
    {
        "id": 20,
        "name": "Black Olive",
        "image":"veg1.png",
        "price": 10,
        "desc":"Black Olive fresh and crispy from the farm in Sicily"
    },
    
    {
        "id": 21,
        "name": "BBQ",
        "image":"s1.png",
        "price": 5,
        "desc":"Special recipe BBQ sauce from Wrapyo especially"
    },
    {
        "id": 22,
        "name": "cheddar cheese",
        "image":"s2.png",
        "price": 5,
        "desc":"Special recipe Cheddar cheese sauce from Wrapyo especially"
    },
    {
        "id": 23,
        "name": "chilli",
        "image":"s3.png",
        "price": 5,
        "desc":"Special recipe Chilli sauce from Wrapyo especially"
    },
    {
        "id": 24,
        "name": "Honey Mastard",
        "image":"s4.png",
        "price": 5,
        "desc":"Special recipe Honey Mastard sauce from Wrapyo especially"
    },
    {
        "id": 25,
        "name": "Ketchup",
        "image":"s5.png",
        "price": 5,
        "desc":"Special recipe Ketchup sauce from Wrapyo especially"
    },
    {
        "id": 26,
        "name": "mayonnaise",
        "image":"s6.png",
        "price": 5,
        "desc":"Special recipe Mayonnaise sauce from Wrapyo especially"
    },
    {
        "id": 27,
        "name": "spicy mayo",
        "image":"s7.png",
        "price": 5,
        "desc":"Special recipe Spicy Mayo sauce from Wrapyo especially"
    },
    {
        "id": 28,
        "name": "Thousand Island",
        "image":"s8.png",
        "price": 5,
        "desc":"Special recipe Thousand Island sauce from Wrapyo especially"
    },
    {
        "id": 29,
        "name": "Mozzarella Cheese",
        "image":"top5.png",
        "price": 20,
        "desc":"Add deliciousness to your wrap with Mozzarella Cheese"
    },
    {
        "id": 30,
        "name": "Cheddar Cheese",
        "image":"top2.png",
        "price": 20,
        "desc":"Add deliciousness to your wrap with Cheddar Cheese"
    },
    {
        "id": 31,
        "name": "bacon",
        "image":"top1.png",
        "price": 20,
        "desc":"Add deliciousness to your wrap with Bacon"
    },
    
    {
        "id": 32,
        "name": "Scrambled eggs",
        "image":"top4.png",
        "price": 20,
        "desc":"Add deliciousness to your wrap with Scrambled eggs"
    },
    {
        "id": 33,
        "name": "Double meat",
        "image":"top3.png",
        "price": 20,
        "desc":"Add deliciousness to your wrap with Double meat"
    },
    {
        "id": 34,
        "name": "Buy 3 Get 1! Chicken Wrap",
        "image":"pro1.PNG",
        "price": 285,
        "desc":"Promotion"
    },
    {
        "id": 35,
        "name": "Sale! Ham Cheese Wrap",
        "image":"pro2.PNG",
        "price": 90,
        "desc":"Promotion"
    },
    {
        "id": 36,
        "name": "Sale! Smoked Pork Wrap",
        "image":"pro3.PNG",
        "price": 120,
        "desc":"Promotion"
    },
    {
        "id": 37,
        "name": "Buy 1 Get 1! Tuna Wrap",
        "image":"Pro4.PNG",
        "price": 100,
        "desc":"Promotion"
    }
    

]
 
let listCards = [];
const page1 = localStorage.getItem("selectedOptions_ingredient_whole");
const JSONPage1 = JSON.parse(page1);

const page2 = localStorage.getItem("selectedOptions_ingredient_meat");
const JSONPage2 = JSON.parse(page2);

const page3 = localStorage.getItem("selectedOptions_ingredient_veget");
const JSONPage3 = JSON.parse(page3);

const page4 = localStorage.getItem("selectedOptions_ingredient_sauce");
const JSONPage4 = JSON.parse(page4);

const page5 = localStorage.getItem("selectedOptions_ingredient_topping");
const JSONPage5 = JSON.parse(page5);



const initApp = () => {

   
   
    products.forEach((value, key) => {
        console.log(value)
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.image}" onclick="handleMixFoods(${value.id})">

            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <div class = "title">${value.desc}</div>
            <div class="control_addcart">
            <button onclick = "addToCard(${key})" style="; z-index: 1; " >Add To Cart</button>
            <div class="redcross_icon" ;">${value.id == 0  ? JSONPage1[0] == "tortilla_out"  ? "<img src='redcross.png' style='max-width:50px;'>" : "" : value.id == 1 ? JSONPage1[1] == "Wheat_out" ?  "<img src='redcross.png' style='max-width:50px'" : "" : ""}</div>
            <div class="redcross_icon" ; ;">${value.id == 2 ? JSONPage2[0] == "meatball_out" ? "<img src='redcross.png' style='max-width:50px;'"  : "" : value.id == 3 ? JSONPage2[1] == "spicychicken_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :
             value.id == 4 ? JSONPage2[2] == "chickenteriyaki_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 5 ? JSONPage2[3] == "dolly_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :
             value.id == 6 ? JSONPage2[4] == "shrimp_out" ? "<img src='redcross.png' style='max-width:50px'" : "" : value.id == 7 ? JSONPage2[5] == "ham_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :
             value.id == 8 ? JSONPage2[6] == "smokepork_out" ? "<img src='redcross.png' style='max-width:50px'" : "" : value.id == 9 ? JSONPage2[7] == "roastbeef_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :
             value.id == 10 ? JSONPage2[8] == "tuna_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 11 ? JSONPage2[9] == "vegetable_out" ? "<img src='redcross.png' style='max-width:50px'" : "" : ""
            }</div>
            <div   class="redcross_icon"  >${value.id == 12 ? JSONPage3[0] == "lettuce_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 13 ? JSONPage3[1] == "tomato_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :
            value.id == 14 ? JSONPage3[2] == "cucumber_out" ? "<img src='redcross.png' style='max-width:50px'" : "" : value.id == 15 ? JSONPage3[3] == "pickle_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :
            value.id == 16 ? JSONPage3[4] == "peppergreen_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 17 ? JSONPage3[5] == "redonion_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :
            value.id == 18 ? JSONPage3[6] == "Jalapeno_out" ? "<img src='redcross.png' style='max-width:50px'" : "" : value.id == 19 ? JSONPage3[7] == "Carrot_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :
            value.id == 20 ? JSONPage3[8] == "BlackOlive_out" ? "<img src='redcross.png' style='max-width:50px'" : "" :""
            }</div>
            <div   class="redcross_icon" >${value.id == 21 ? JSONPage4[0] == "BBQ_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 22 ? JSONPage4[1] == "cheddarcheesesauce_out" ? "<img src='redcross.png' style='max-width:50px '" : "" :
            value.id == 23 ? JSONPage4[2] == "chilli_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 24 ? JSONPage4[3] == "HoneyMastard_out" ? "<img src='redcross.png' style='max-width:50px '" : "" :
            value.id == 25 ? JSONPage4[4] == "Ketchup_out" ? "<img src='redcross.png' style='max-width:50px '" : "" :value.id == 26 ? JSONPage4[5] == "mayonnaise_out" ? "<img src='redcross.png' style='max-width:50px '" : "" :
            value.id == 27 ? JSONPage4[6] == "spicymayo_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 28 ? JSONPage4[7] == "ThousandIsland_out" ? "<img src='redcross.png' style='max-width:50px '" : "" :""
            }</div>
            <div  class="redcross_icon" >${value.id == 29 ? JSONPage5[0] == "MozzarellaCheese_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 30 ? JSONPage5[1] == "CheddarCheese_out" ? "<img src='redcross.png' style='max-width:50px '" : "" :
            value.id == 31 ? JSONPage5[2] == "bacon_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : value.id == 32 ? JSONPage5[3] == "Scrambledeggs_out" ? "<img src='redcross.png' style='max-width:50px '" : "" : ""
            }</div>
            </div>
            `;
        list.appendChild(newDiv)
    })
}

initApp()


const addToCard = key => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        const IngNames = Object.keys(listCards).map(productKey =>  listCards[productKey]);
        const IngNamesJSON = JSON.stringify(IngNames);
        // console.log(IngNames)
        localStorage.setItem('IngNames', IngNamesJSON);
        
    }

    reloadCard()
}

const handleSendOrderAndClearOrderInLocal = async ()=>{
    const updatedListMenu = localStorage.getItem("IngNames");
    const JSONUPdatedListMenu = JSON.parse(updatedListMenu);
    console.log(JSONUPdatedListMenu)
    const howManyOrderTime = sessionStorage.getItem("countOrderTime");

    let countOrder = 1
    if(howManyOrderTime){
        const countOrder = parseInt(howManyOrderTime) + 1;
        const oldData = JSON.parse(localStorage.getItem("OrderConfirm"));
        
        let orderText = `order${countOrder}`;
        let transformData = {};
        transformData[orderText] = oldData;


        oldData.push({[orderText] : JSONUPdatedListMenu})
        localStorage.setItem("OrderConfirm" , JSON.stringify(oldData))
        sessionStorage.setItem("countOrderTime" , countOrder);
        
    }else{
        sessionStorage.setItem("countOrderTime" , countOrder)
        let orderText = `order${countOrder}`
        let transformData = {};
        transformData[orderText] = JSONUPdatedListMenu
        let newStruct = [transformData]
        localStorage.setItem("OrderConfirm" , JSON.stringify(newStruct));
        console.log("this is result" , JSON.parse(localStorage.getItem("OrderConfirm")))
    }
    

     // Clear Order After User Confirm Order
    localStorage.removeItem("IngNames");
    await Swal.fire("Order has been delivered" , "" , "success");
    window.location.reload();

}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "img/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color:#dab0e6;;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#dab0e6;;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
    
}


const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}

var count = 0;
  var counterDisplay = document.getElementById("counter");

  document.getElementById("Onumber").onclick = function() {
    count++;
    counterDisplay.textContent = count; // แสดงค่า count ในส่วนของหน้าเว็บ
  };
