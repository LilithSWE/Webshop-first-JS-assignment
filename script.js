/* MALL FÖR IMAGES 
<img src="images/XXX.wbpg"
     alt="Crocheted ...."
     loading="lazy"
     width="4rem"
     height= "4rem"> */

/* UPPDATERA VARUKORGEN SOM SEPARAT ARRAY
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
const productsContainer = document.querySelector('.productList'); // Targets the <section> I made for the products.
// For loop to create HTML elements + loop to the HTML structure inside an <article>
for (let i = 0; i < products.length; i++) {
  const productIndividualContainer = document.createElement('article');
  productsContainer.appendChild(productIndividualContainer);
  // For the image
  const productImage = products[i].image;
  const productImageImg = document.createElement('img');
  productImageImg.setAttribute('src', productImage.src);
  productImageImg.setAttribute('alt', productImage.alt);
  productImageImg.setAttribute('height', productImage.height);
  productImageImg.setAttribute('width', productImage.width);
  productImageImg.setAttribute('loading', productImage.loading);
  productIndividualContainer.appendChild(productImageImg);
  // For the h2 - product name
  const productName = products[i].name;
  const productNameH2 = document.createElement('h2');
  const productNameTextNode = document.createTextNode(productName);
  productNameH2.appendChild(productNameTextNode);
  productIndividualContainer.appendChild(productNameH2);
  productNameH2.classList.add('capitalize'); // Adding css-made class to make text capitalized, incase font doesn't work.
  // For the category
  const productCategory = products[i].category;
  const productCategoryP = document.createElement('p');
  const productCategoryTextNode = document.createTextNode(productCategory);
  productCategoryP.appendChild(productCategoryTextNode);
  productIndividualContainer.appendChild(productCategoryP);
  productCategoryP.classList.add('fade'); // Adding css-made class to make text faded.
  productCategoryP.classList.add('capitalize'); // Adding css-made class to make text capitalized
  // For the rating
  const productRating = 'Rating: ' + products[i].rating + ' / 5';
  const productRatingP = document.createElement('p');
  const productRatingTextNode = document.createTextNode(productRating);
  productRatingP.appendChild(productRatingTextNode);
  productIndividualContainer.appendChild(productRatingP);
  // For the price
  const productPrice = products[i].price + ' kr/st';
  const productPriceP = document.createElement('p');
  const productPriceTextNode = document.createTextNode(productPrice);
  productPriceP.appendChild(productPriceTextNode);
  productIndividualContainer.appendChild(productPriceP);
  // Div for easier styling of elements in <article>
  const productAmountDiv = document.createElement('div');
  productIndividualContainer.appendChild(productAmountDiv);
  // Button 1 for adding products
  const addButton = document.createElement('button');
  addButton.innerHTML = '+';
  productAmountDiv.appendChild(addButton);
  // For the amount
  const productAmount = products[i].amount;
  const productAmountP = document.createElement('p');
  const productAmountTextNode = document.createTextNode(productAmount);
  productAmountP.appendChild(productAmountTextNode);
  productAmountDiv.appendChild(productAmountP);
  // Button 2
  const subtractButton = document.createElement('button');
  subtractButton.innerHTML = '-';
  productAmountDiv.appendChild(subtractButton);
}

// Opens menu for sorting products.
const sortMenu = document.querySelector('#sortPopDownMenu');
const sortMenuBtn = document.querySelector('#sortBtnOpenMenu');
function openSortMenu() {
  sortMenu.classList.toggle('hidden');
}
sortMenuBtn.addEventListener('click', openSortMenu);

/*
Namn på id för sortering: 
nameSortUp, nameSortDown, 
categorySortUp, categorySortDown, 
ratingSortUp, ratingSortDown, 
priceSortUp, priceSortDown
*/

// A function to sort the product on name
// A function to sort the product on category
// A function to sort the product on rating
// A function to sort the product on price

// A function to increase the amount of product using + button
// A function to decrease the amount of product using - button
// A function that adds the product to the cart (without adding 0 products) when "add to cart" is pressed.

// CART
// Add img + name + buttons + amount of product + total cost of X products + 'X' button for clear
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
