/* UPPDATERA constUKORGEN SOM SEPARAT ARRAY
const products = [
	{
		name: 'produkt 1',
		price: 10,
		amount: 0,
	},
	{
		name: 'produkt 2',
		price: 10,
		amount: 8,
	},
	{
		name: 'produkt 3',
		price: 10,
		amount: 5,
	},
];
let cart = [];
 
function increase() {
	// övrig kod här för att öka antal… plussknapp
	updateCart();
}
function decrease() {
	// övrig kod här för att minska antal… minusknapp
	updateCart();
}
function updateCart() {
	cart = products.filter(product => product.amount > 0);
	console.log(cart);
}
updateCart();
*/
/* HUR MAN LÄGGER 2 BILDER I SAMMA ARRAY
const products = [
	{
		images: [
			{
				src: 'bild1.jpg
			},

			{
				src: 'bild2.jpg'
			},
		],
	},
];
products.forEach(product => {

	const innerHTML = '';
	const images = '';
 
	for (let i = 0; i < product.images.length; i++) {
		images += `<img src="${product.images[i]}">`;
	}
	innerHTML += images;
});
*/
// --------------------------------Här börjar JS filen----------------------------------------------

/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */

// All the different products. Can add or remove products as needed.
const products = [
  // Add category!!
  {
    image: {
      src: 'assets/product_img/gryphon.webp', // Path to img
      alt: 'Green and white crocheted gryphon with yellow beak.', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'gryphon',
    category: 'medium',
    rating: 4,
    price: 75,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/Ariendale_terrier.webp', // Path to img
      alt: 'Ariendale terrier plushie, brown and black dog with fluffy beard and moustache', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'ariendale terrier',
    category: 'medium',
    rating: 3.5,
    price: 100,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/Brian_the_Brain.webp', // Path to img
      alt: 'Blue crocheted man with exposed pink brain, a bone arm and green pants', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'brian the brain',
    category: 'medium',
    rating: 4.7,
    price: 95,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/cacti_buddy.webp', // Path to img
      alt: 'Crocheted green cacti with rounded ears in brown pot.', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'cacti carl',
    category: 'small',
    rating: 3.6,
    price: 40,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/mushroom_buddy.webp', // Path to img
      alt: 'Crocheted white and blue mushroom with four legs', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'mushroom buddy',
    category: 'small',
    rating: 4.2,
    price: 25,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/Flail_dogtoy.webp', // Path to img
      alt: 'Crocheted dogtoy of mass destruction. Gray and brown flail.', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'flail',
    category: 'large',
    rating: 3.9,
    price: 120,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/Gobbo.webp', // Path to img
      alt: 'Light green crocheted goblin with his tongue out, wearing a blue vest', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'gobbo',
    category: 'small',
    rating: 4.3,
    price: 20,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/Wiley_WitnessMyMinies.webp', // Path to img
      alt: 'Crocheted one eyed, green monster with yellow and purple details, and a pink butterfly', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'wiley',
    category: 'large',
    rating: 5,
    price: 600,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/Super_Mario.webp', // Path to img
      alt: 'crocheted Super Mario plushie. Caucasian male plumber with red and blue clothes and brown hair and mousatche.', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'super mario',
    category: 'medium',
    rating: 4.8,
    price: 250,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/Shirley_the_Skull.webp', // Path to img
      alt: 'Crocheted light blue figure wearing a white skull mask, black pants and a black buckethat.', // Alt text
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'shirley the skull',
    category: 'medium',
    rating: 4.9,
    price: 95,
    amount: 0,
  },
];
// Targets the id of the <section> I made for the products.
const productsContainer = document.querySelector('#productsContainer');
loopProductsToHTML(); // Initiates function once to get the products to the page. 

// For loop to clear section and then create HTML elements + loop to the HTML structure inside an <article> each. Re-used post sorting.
function loopProductsToHTML() {
  productsContainer.innerHTML = ''; // Clears container. 
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML +=
    `<article>
    <img src='${products[i].image.src}' alt='${products[i].image.alt}' height='${products[i].image.height} width='${products[i].image.width}' loading='lazy'>
    <h2>${products[i].name}</h2>
    <p class='fade capitalize'> ${products[i].category} </p>
    <p>Rating: ${products[i].rating} / 5</p>
    <p>${products[i].price} kr/st</p>
    <div>
      <button class='addBtn' id='${i}'>+</button>
      <p>${products[i].amount}</p>
      <button class='subtractBtn' id='${i}'>-</button>
    </div>
    </article>`;
  }
  remakeButtons();
  updateCart();
}
// Increases the amount of product in the product list
function addProductAmount(e) {
  const i = e.currentTarget.id;
  products[i].amount += 1;
  loopProductsToHTML();
}
// Decreases the amount of product in the product list, but not bellow 0.
function reduceProductAmount(e) {
  const i = e.currentTarget.id;
  if (products[i].amount > 0) {
    products[i].amount -= 1;
    loopProductsToHTML();
  }
}
// Makes sure the buttons keep up with changes in product list.
function remakeButtons() {
  const addBtn = document.querySelectorAll('.addBtn');
  const reduceBtn = document.querySelectorAll('.subtractBtn');
  addBtn.forEach(btn => {
    btn.addEventListener('click', addProductAmount);
  });
  reduceBtn.forEach(btn => {
    btn.addEventListener('click', reduceProductAmount);
  });
}
/*
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const startAmount = document.querySelector('#amount');
let newAmount = Number(startAmount.value); 
const price = document.querySelector('#price');

increaseBtn.addEventListener('click', increaseAmount); 
function increaseAmount() {
  startAmount.value = newAmount += 1; 
  updatePrice(); 
}

decreaseBtn.addEventListener('click', decreaseAmount); 
function decreaseAmount() {
  if (startAmount.value > 0) {
    startAmount.value = newAmount -= 1; 
  }
  updatePrice(); 
}

function updatePrice() { 
  price.innerHTML = newAmount * 15; 
}

startAmount.onchange = manualChange;
function manualChange(e) {
  newAmount= Number(e.target.value)
  startAmount.value = newAmount;
  updatePrice(); 
}
*/

// Opens menu for sorting products.
const sortMenu = document.querySelector('#sortPopDownMenu');
const sortMenuBtn = document.querySelector('#sortBtnOpenMenu');
function openSortMenu() {
  sortMenu.classList.toggle('hidden');
}
sortMenuBtn.addEventListener('click', openSortMenu);
// SORTING ALL THE PRODUCTS
// Sorting function for all properties A->Z or 0 -> >0
function sortProducts(property) {
  products.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
  loopProductsToHTML();
}
// Sorting function for all properties Z->A or >0 -> 0
function sortProductsBackwards(property) {
  products.sort((a, b) => {
    if (a[property] > b[property]) {
      return -1;
    }
    if (a[property] < b[property]) {
      return 1;
    }
    return 0;
  });
  loopProductsToHTML();
}
// Sorting by name A -> Z
function sortProductsByName() {
  sortProducts('name');
}
const nameSortUpBtn = document.querySelector('#nameSortUp');
nameSortUpBtn.addEventListener('click', sortProductsByName);
// Sorting by name Z -> A
function sortProductsByNameDown() {
  sortProductsBackwards('name');
}
const nameSortDownBtn = document.querySelector('#nameSortDown');
nameSortDownBtn.addEventListener('click', sortProductsByNameDown);
// Sorting by category A -> Z
function sortProductsByCategory() {
  sortProducts('category');
}
const categorySortUpBtn = document.querySelector('#categorySortUp');
categorySortUpBtn.addEventListener('click', sortProductsByCategory);
// Sorting by category Z -> A
function sortProductsByCategoryDown() {
  sortProductsBackwards('category');
}
const categorySortDownBtn = document.querySelector('#categorySortDown');
categorySortDownBtn.addEventListener('click', sortProductsByCategoryDown);

// Sort by rating
function sortProductsByRating() {
  sortProducts('rating');
}
const ratingSortUpBtn = document.querySelector('#ratingSortUp');
ratingSortUpBtn.addEventListener('click', sortProductsByRating);
// Sort by rating backwards
function sortProductsByRatingDown() {
  sortProductsBackwards('rating');
}
const ratingSortDownBtn = document.querySelector('#ratingSortDown');
ratingSortDownBtn.addEventListener('click', sortProductsByRatingDown);

// Sort by price
function sortProductsByPrice() {
  sortProducts('price');
}
const priceSortUpBtn = document.querySelector('#priceSortUp');
priceSortUpBtn.addEventListener('click', sortProductsByPrice);
// Sort by price backwards
function sortProductsByPriceDown() {
  sortProductsBackwards('price');
}
const priceSortDownBtn = document.querySelector('#priceSortDown');
priceSortDownBtn.addEventListener('click', sortProductsByPriceDown);

// A function that adds the product to the cart (without adding 0 products) when "add to cart" is pressed?. (updateCart koppla till knapp?)


// For loop to clear section and then create HTML elements + loop to the HTML structure inside an <article> each. Re-used post sorting.
function updateCart() {
  const cartContainer = document.querySelector('.cart');
  cartContainer.innerHTML = '';
  const cart = products.filter(product => product.amount > 0);
  /* 
  Add constant for total price , make = 0 
  + loop + add individualProductPrice to total pric
  Loop out AFTER for loop

  Make clear button 
  Make it clar cart

  Make individual clear buttons
  Make them clear indicidual products
  */
  for (let i = 0; i < cart.length; i++) {
    const individualCartPrice = Number(cart[i].amount)*Number(cart[i].price); // Calculates the price of each product in cart
      cartContainer.innerHTML +=
      `<article>
      <img src='${cart[i].image.src}' alt='${cart[i].image.alt}' height='${cart[i].image.height} width='${cart[i].image.width}' loading='lazy'>
      <h2>${cart[i].name}</h2>
      <p class='individualCartPrice'>${individualCartPrice}kr</p>
      <div>
        <button class='addBtnCart' id='${i}'>+</button>
        <p>${cart[i].amount}</p>
        <button class='subtractBtnCart' id='${i}'>-</button>
      </div>
      <div class='bottomCartContainer'></div>
      </article>`;
  }
  remakeCartButtons();
}


function remakeCartButtons() {
  const addBtnCart = document.querySelectorAll('.addBtnCart');
  const reduceBtnCart = document.querySelectorAll('.subtractBtnCart');
  addBtnCart.forEach(btn => {
    btn.addEventListener('click', addCartAmount);
  });
  reduceBtnCart.forEach(btn => {
    btn.addEventListener('click', reduceCartAmount);
  });
}
// Increases the amount of product in the cart list
function addCartAmount(e) {
  const cart = products.filter(product => product.amount > 0);
  const i = e.currentTarget.id;
  cart[i].amount += 1;
  loopProductsToHTML();
}
// Decreases the amount of product in the cart list, but not below 0.
function reduceCartAmount(e) {
  const cart = products.filter(product => product.amount > 0);
  const i = e.currentTarget.id;
  if (cart[i].amount > 0) {
    cart[i].amount -= 1;
    loopProductsToHTML();
  }
}


// For loop to clear section and then create HTML elements + loop to the HTML structure inside an <article> each. Re-used post sorting.

// CART
// Add img + name + buttons + amount of cart + total cost of X productss + 'X' button for clear
// Add 'clear cart' button at bottom
// Add 'total price' for entire cart
// Add animation to total price whenever it changes

// ORDERFORM
// Add summary of products - name, category, price total (ind.price * amount of product) + price total for purchases.
// Add orderform - firstName, lastName, adress, postcode, town, optional: door code, phonenumber, e-mail.
// Card as payment option -> cardnumber, date/year, CVC (don't validate these at this point in time)
// Bill as payment option -> swedishPersonalNumber, (validate on length and starting with either '20' or '19' IF 12 numbers long)
// Add checkbox 'Collecting of personal information' - not checked
// Add checkbox 'News and updates email list' - checked
// Add send button that activates only IF checkbox 'personal info' is ticked + form is validated. Otherwise = gray
// Add clear form button - clears all the information AND the cart
// When order is accepted -> send off + clear cart + announce summary + time until delivery + thank customer.
// Add field to put in discount code

// SPECIAL RULES FUNCTION
// IF Monday 00.00 -> 10.00 = 10% discount, tell customer somehow
// IF Friday 15.00 -> Monday 3.00 = +15% price, don't tell customer
// IF customer total order price > 800kr, don't allow bill as payment option
// IF the order contains at least 10 of one kind, lower the total price for that individual item by 10%
// IF customer orders more than 15 products, shipping is free
// IF customer orders less than 15 products, shipping is 25kr + 10% of total amount for cart.
// If the customer hasn't ordered withni 15 min, clear the cart and announce that the customer was too slow.
// The whole order should be able to be performed using only the keyboard.
// The whole thing should be a one-pager.

// BEFORE SUBMITTING
// Publish page live
// README containging screenshots + names of ppl whom have been a part of the project
// Validate HTML
// Validate CSS - but don't put too much thought into it.

// AMANDAS EXTRA PLANS, ONLY IF THERE IS TIME
// Add menu for navigation attached to either side of screen or header
// Add a 'back to top' button
// Add
