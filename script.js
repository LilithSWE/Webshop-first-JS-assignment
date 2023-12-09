/* eslint-disable consistent-return */
/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */



// PRODUCT LIST
// All the different products. Can add or remove products as needed.
const products = [
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
      src: 'assets/product_img/Ariendale_terrier.webp',
      alt: 'Ariendale terrier plushie, brown and black dog with fluffy beard and moustache',
      width: 250,
      height: 250,
      loading: 'lazy',
    },
    name: 'airedale terrier',
    category: 'medium',
    rating: 3.5,
    price: 100,
    amount: 0,
  },
  {
    image: {
      src: 'assets/product_img/Brian_the_Brain.webp',
      alt: 'Blue crocheted man with exposed pink brain, a bone arm and green pants',
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
      src: 'assets/product_img/cacti_buddy.webp',
      alt: 'Crocheted green cacti with rounded ears in brown pot.',
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
      src: 'assets/product_img/mushroom_buddy.webp',
      alt: 'Crocheted white and blue mushroom with four legs',
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
      src: 'assets/product_img/Flail_dogtoy.webp',
      alt: 'Crocheted dogtoy of mass destruction. Gray and brown flail.',
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
      src: 'assets/product_img/Gobbo.webp',
      alt: 'Light green crocheted goblin with his tongue out, wearing a blue vest',
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
      src: 'assets/product_img/Wiley_WitnessMyMinies.webp',
      alt: 'Crocheted one eyed, green monster with yellow and purple details, and a pink butterfly',
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
      src: 'assets/product_img/Super_Mario.webp',
      alt: 'crocheted Super Mario plushie. Caucasian male plumber with red and blue clothes and brown hair and mousatche.',
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
      src: 'assets/product_img/Shirley_the_Skull.webp',
      alt: 'Crocheted light blue figure wearing a white skull mask, black pants and a black buckethat.',
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
const productsContainer = document.querySelector('#productsContainer');
loopProductsToHTML(); // Initiates function once to get the products to the page.
// Clear <section> and create HTML elements + loop to the HTML structure inside an <article> each. Re-used whenever something changes.
function loopProductsToHTML() {
  productsContainer.innerHTML = ''; // Clears container.
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML += `<article>
    <img src='${products[i].image.src}' alt='${products[i].image.alt}' height='${products[i].image.height} width='${products[i].image.width}' loading='lazy'>
    <h2 class='capitalize'>${products[i].name}</h2>
    <p class='fade capitalize'> ${products[i].category} </p>
    <p>Rating: ${products[i].rating} / 5</p>
    <p>${products[i].price} kr/st</p>
    <div>
      <button class='subtractBtn' id='${i}'>-</button>
      <p>${products[i].amount}</p>
      <button class='addBtn' id='${i}'>+</button>
    </div>
    </article>`;
  }
  remakeButtons();
  updateCart();
}
// SORTING
// Open menu for sorting
const sortMenu = document.querySelector('#sortPopDownMenu');
const sortMenuBtn = document.querySelector('#sortBtnOpenMenu');
sortMenuBtn.addEventListener('click', openSortMenu);
function openSortMenu() {
  sortMenu.classList.toggle('hidden');
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
// Generic sorting
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
  setTimeout(loopProductsToHTML, 200);
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
  setTimeout(loopProductsToHTML, 200);
}
// Const and click events for pop-down menu
const nameSortUpBtn = document.querySelector('#nameSortUp');
const nameSortDownBtn = document.querySelector('#nameSortDown');
const categorySortUpBtn = document.querySelector('#categorySortUp');
const categorySortDownBtn = document.querySelector('#categorySortDown');
const ratingSortUpBtn = document.querySelector('#ratingSortUp');
const ratingSortDownBtn = document.querySelector('#ratingSortDown');
const priceSortUpBtn = document.querySelector('#priceSortUp');
const priceSortDownBtn = document.querySelector('#priceSortDown');
nameSortUpBtn.addEventListener('click', sortProductsByName);
nameSortDownBtn.addEventListener('click', sortProductsByNameDown);
categorySortUpBtn.addEventListener('click', sortProductsByCategory);
categorySortDownBtn.addEventListener('click', sortProductsByCategoryDown);
ratingSortUpBtn.addEventListener('click', sortProductsByRating);
ratingSortDownBtn.addEventListener('click', sortProductsByRatingDown);
priceSortUpBtn.addEventListener('click', sortProductsByPrice);
priceSortDownBtn.addEventListener('click', sortProductsByPriceDown);
// Specific properties used when calling on the generic functions above
function sortProductsByName() {
  sortProducts('name');
}
function sortProductsByNameDown() {
  sortProductsBackwards('name');
}
function sortProductsByCategory() {
  sortProducts('category');
}
function sortProductsByCategoryDown() {
  sortProductsBackwards('category');
}
function sortProductsByRating() {
  sortProducts('rating');
}
function sortProductsByRatingDown() {
  sortProductsBackwards('rating');
}
function sortProductsByPrice() {
  sortProducts('price');
}
function sortProductsByPriceDown() {
  sortProductsBackwards('price');
}
// Changes in products amount
// Increases the amount of product in the product list
function addProductAmount(e) {
  const i = e.currentTarget.id;
  products[i].amount += 1;
  setTimeout(loopProductsToHTML, 200);
}
// Decreases the amount of product in the product list, but not bellow 0.
function reduceProductAmount(e) {
  const i = e.currentTarget.id;
  if (products[i].amount > 0) {
    products[i].amount -= 1;
    setTimeout(loopProductsToHTML, 200);
  }
}



// CART
// For loop to clear section and then create HTML elements + loop to the HTML structure inside an <article> each. Re-used post sorting.
function updateCart() {
  const cartContainer = document.querySelector('.cart');
  const cart = products.filter(product => product.amount > 0);
  let sum = 0;
  let cartAmountTotal = 0;
  cartContainer.innerHTML = '';
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].amount * cart[i].price;
    cartAmountTotal += cart[i].amount;
    const individualCartPrice = Number(cart[i].amount) * Number(cart[i].price); // Calculates the price of each product in cart
    cartContainer.innerHTML += `<article>
      <img src='${cart[i].image.src}' alt='${cart[i].image.alt}' height='${cart[i].image.height} width='${cart[i].image.width}' loading='lazy'>
      <h2>${cart[i].name}</h2>
      <p class='individualCartPrice fade''>${individualCartPrice}kr</p>
      <button class='clearOneBtn' id='${i}'>X</button>
      <div class= 'cartAmountContainer'>
        <button class='subtractBtnCart' id='${i}'>-</button>
        <p class='fade'>${cart[i].amount}</p>
        <button class='addBtnCart' id='${i}'>+</button>
      </div>
      </article>`;
  }
  cartContainer.innerHTML += `
  <div class= 'bottomCartContainer'>
    <p>Total order price: ${sum}</p>
    <div class= 'bottomCartBtnContainer'>
      <button class="clearCartBtn">Clear</button>
      <button class="orderBtn">Order</button>
    </div>
  </div>`;
  updateCartCounter(cartAmountTotal);
  remakeCartButtons();
}
// Update the counter number on the shopping cart button.
function updateCartCounter(e) {
  const productCounter = document.querySelector('#productCounter');
  productCounter.innerHTML = e;
  if (productCounter.classList.contains('hidden')) {
    // Se om products amount > 0
    if (e > 0) {
      // Om ja toggla bort 'hidden
      productCounter.classList.toggle('hidden');
    }
  } else {
    productCounter.innerHTML = e;
    if (e === 0) {
      productCounter.classList.toggle('hidden');
    }
  }
}
// Makes sure the buttons keep up with changes in cart list.
function remakeCartButtons() {
  const addBtnCart = document.querySelectorAll('.addBtnCart');
  const reduceBtnCart = document.querySelectorAll('.subtractBtnCart');
  const clearOneBtn = document.querySelectorAll('.clearOneBtn');
  const clearCartBtn = document.querySelector('.clearCartBtn');
  clearCartBtn.addEventListener('click', clearCart);
  addBtnCart.forEach(btn => {
    btn.addEventListener('click', addCartAmount);
  });
  reduceBtnCart.forEach(btn => {
    btn.addEventListener('click', reduceCartAmount);
  });
  clearOneBtn.forEach(btn => {
    btn.addEventListener('click', clearOneProduct);
  });
}
// CHANGES IN PRODUCT AMOUNTS - VIA CART
// Increases the amount of product in the cart list
function addCartAmount(e) {
  const cart = products.filter(product => product.amount > 0);
  const i = e.currentTarget.id;
  cart[i].amount += 1;
  setTimeout(loopProductsToHTML, 200);
}
// Decreases the amount of product in the cart list, but not below 0.
function reduceCartAmount(e) {
  const cart = products.filter(product => product.amount > 0);
  const i = e.currentTarget.id;
  if (cart[i].amount > 0) {
    cart[i].amount -= 1;
    setTimeout(loopProductsToHTML, 200);
  }
}
// Clear one items 'total amount' in cart
function clearOneProduct(e) {
  const cart = products.filter(product => product.amount > 0);
  const i = e.currentTarget.id;
  cart[i].amount = 0;
  setTimeout(loopProductsToHTML, 200);
}
// Clear entire cart from products
function clearCart() {
  for (let i = 0; i < products.length; i++) {
    products[i].amount = 0;
  }
  setTimeout(loopProductsToHTML, 200);
}
// Add animation to total price whenever the product amount changes, calculation is already done.
// Add animation to updateCartCounter whenever the product amount changes.




// ORDERFORM 
// VALIDATION
// All RegEx for validation of user information
const nameRegEx = /^[a-zäöå,.'-]+$/i; // Used for both names
const emailRegEx = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
const phoneNumberRegEx = /^(0)(7[0236])(\d{4})*(\d{3})$/; // Matches a classic Swedish number (without country code)
const streetAdressRegEx = /^([A-zäöåÄÖÅ.'-]{2,40}?\s)+([0-9]{1,5}[A-z]{0,3}?)(\s[A-z]{0,2})?$/;
const zipCodeRegEx = /^[1-9]\d{2}\s?\d{2}/;
const cityRegEx = /^([A-zåäöÅÄÖ.'-]{2,})+(\s[A-zåäöÅÄÖ.'-]{0,})?$/;
const personalIdRegEx = /^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/;

// All the variables targeting the input fields that needs to validated
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const streetAdress = document.querySelector('#streetAdress');
const zipCode = document.querySelector('#zipCode');
const city = document.querySelector('#city');
const personalId = document.querySelector('#personalId');
const personalInfoCheck = document.getElementById('termsAndConditions');
const invoiceRadioButton = document.querySelector('#invoice');
const cardRadioButton = document.querySelector('#card');
const invoiceContainer = document.querySelector('#invoiceContainer');
const cardContainer = document.querySelector('#cardContainer');

// Calls functions to validate the input from user when they change the value
firstName.addEventListener('blur', checkInput); 
lastName.addEventListener('blur', checkInput);
email.addEventListener('blur', checkInput);
phoneNumber.addEventListener('blur', checkInput);
streetAdress.addEventListener('blur', checkInput);
zipCode.addEventListener('blur', checkInput);
city.addEventListener('blur', checkInput);
personalId.addEventListener('blur', checkInput);
personalInfoCheck.addEventListener('change', checkInput);
// Radio btns to change divs
const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]'));
cardInvoiceRadios.forEach(radioBtn => {
  radioBtn.addEventListener('change', switchPaymentMethod);
  radioBtn.addEventListener('change', checkInput);
});


// Switch PAYMENT OPTIONS
function switchPaymentMethod() {
  invoiceContainer.classList.toggle('hidden');
  cardContainer.classList.toggle('hidden');
}

// VALIDATION 
// Running all of the RegEx for the different fields + see if option for radio/ checkbox is checked. 
function validateFirstName (){
  return nameRegEx.exec(firstName.value); 
}
function validateLastName (){
  return nameRegEx.exec(lastName.value); 
}
function validateEmail (){
  return emailRegEx.exec(email.value); 
}
function validatePhoneNumber (){
  return phoneNumberRegEx.exec(phoneNumber.value);
}
function validateStreet (){
  return streetAdressRegEx.exec(streetAdress.value); 
}
function validateZipCode (){
  return zipCodeRegEx.exec(zipCode.value);  
}
function validateCity (){
  return cityRegEx.exec(city.value);
}
function validatePersonalId (){
  return personalIdRegEx.exec(personalId.value);  
}
function validatePersonalInfoCheck (){
  return personalInfoCheck.checked;
}


// Checks for error msg. Adds a new one if one isn't currently present and RegEx is invalid. Removes if valid.  
function displayInputError(spanName, isValid) {  // Fel säger att alla är valid. Gör om gör rätt ..... InputField
  const span = document.querySelector(spanName);
  if (!isValid) {
    span.classList.add('error'); 
  }
  else {
    span.classList.remove('error'); 
    return true;
  }
}
// Calls all possible error mrg functions.
function allDisplayInputErrors (){
  if (firstName.value.length > 1){
    displayInputError('#firstNameSpan', validateFirstName());
  }
  if (lastName.value.length > 1){
    displayInputError('#lastNameSpan', validateLastName());
  }
  if (email.value.length > 1){
    displayInputError('#emailSpan', validateEmail());
  }
  if (phoneNumber.value.length > 1){
    displayInputError('#phoneNumberSpan', validatePhoneNumber());
  }
  if (streetAdress.value.length > 1){
    displayInputError('#streetAdressSpan', validateStreet());
  }
  if (zipCode.value.length > 1){
    displayInputError('#zipCodeSpan', validateZipCode());
  }
  if (city.value.length > 1){
    displayInputError('#citySpan', validateCity()); 
  }
  if (personalId.value.length > 1){
    displayInputError('#personalIdSpan', validatePersonalId());
  }
  displayInputError('#termsAndConditionsSpan', validatePersonalInfoCheck());
}
// Runs a check to see if the entire form is valid. If yes, activate order btn. 
function checkInput() {
allDisplayInputErrors();
  if (cardRadioButton.checked) {
    if (
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validatePhoneNumber() &&
      validateStreet() &&
      validateZipCode() &&
      validateCity() &&
      validatePersonalInfoCheck()) {
      activateOrderBtn();
    } else {
      deactivateOrderBtn();
    }
  } else if (invoiceRadioButton.checked) {
    if (
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validatePhoneNumber() &&
      validateStreet() &&
      validateZipCode() &&
      validateCity() &&
      validatePersonalInfoCheck() &&
      validatePersonalId()) {
      activateOrderBtn();
    } else {
      deactivateOrderBtn();
    }
  }
};

// SEND ORDER BTN
// Send order button variable from HTML + eventlistener
const orderBtn = document.querySelector('#sendOrderBtn');
orderBtn.addEventListener('click', summaryPopUp); // change to -> sendOrder(); when made!!!! 

// Activate order BTN
function activateOrderBtn() {
  orderBtn.removeAttribute('disabled');
  console.log('Activating orderBtn');
};
// Deactivate order BTN
function deactivateOrderBtn() {
  orderBtn.setAttribute('disabled', 'disabled');
};

// Targets the container in which we will loop our order summary.
const summaryPopUpContainer = document.querySelector('#summaryPopUpContainer');
// Function that generates and displays the thank you, order summary and the estimated deliverytime + removes class ='hidden'. 
function summaryPopUp() {
  // Resets inner HTML from previous run with a personalised thank you. 
  summaryPopUpContainer.innerHTML = `
  <h2>Thank you for your purchase ${firstName.value} ${lastName.value}!</h2>
  <p> We appreciate your patronage. 
  Should you have any questions or need any further assistance, feel free to reach out. 
  We look forward to serving you again in the future.</p> 
  <h4 class='orderSummaryTitle'>Order Summary:</h4>`;
  // Loops out the same summary that cart has, with some edits to amount of information and without the buttons. 
  let sum = 0;
  const cart = products.filter(product => product.amount > 0);
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].amount * cart[i].price;
    const individualCartPrice = Number(cart[i].amount) * Number(cart[i].price); // Calculates the price of each product in cart
    summaryPopUpContainer.innerHTML += `<article>
      <img src='${cart[i].image.src}' alt='${cart[i].image.alt}' height='${cart[i].image.height} width='${cart[i].image.width}' loading='lazy'>
      <h3 class= 'capitalize'>${cart[i].name}</h3>
      <p class='fade'>Amount: ${cart[i].amount}</p>
      <p class='individualCartPrice fade''>${individualCartPrice}kr</p>
      </article>`;
  }
  // Adds the total price and an estimated delivery time
  summaryPopUpContainer.innerHTML+=`
  <p>Total price: ${sum}kr.</p>
  <p class= 'delivery'>Estimated delivery: </p>
  <p>3-4 buissness days.</p>
  <button class= 'closeSummaryBtn' id='closeSummaryBtn'>Close</button>`;
  // Makes the "popup" <article> visible on the page
  summaryPopUpContainer.classList.remove('hidden');
  makeCloseBtnSummary();
}
// Adds eventlistener to the close btn made in the summaryPopUp function.
function makeCloseBtnSummary(){
  const closeSummaryBtn = document.querySelector('#closeSummaryBtn');
  closeSummaryBtn.addEventListener('click', closeSummaryPopUpContainer);
}
// Puts class hidden on oder summary to hide it away + runs function to clear orderform + all products.amount. 
function closeSummaryPopUpContainer (){
  summaryPopUpContainer.classList.add('hidden');
  clearAllChoices(); 
}

// CLEAR ALL BTN
// Clear all info button. 
const clearAllBtn = document.querySelector('#clearAllBtn');
clearAllBtn.addEventListener('click', clearAllChoices);
// A function to clear orderform + all products.amount. 
function clearAllChoices() {
  // Calls prev function to clear all pruducts. 
  clearCart();
  // Runs functions with all divs in the oderFormContainer. 
  clearInputValues('orderFormContainer');  
}
// Clears all values from the inputs in the div Ids that we send in. 
function clearInputValues(divId) {
  const div = document.getElementById(divId);
  if (div) {
      // Get all input elements within the div
      const inputs = div.getElementsByTagName('input');
      for (let i = 0; i < inputs.length; i++) {
          inputs[i].value = '';
      }
  } else {
      console.error('Div not found with id:', divId);
  }
}


// SPECIAL RULES FUNCTION (3 days)
/* const today = new Date();
console.log(today.getHours());

if (today.getDay() === 0) {
  console.log('Idag är det söndag.');
}
else{
  console.log('Idag är det INTE söndag.'); 
  }
  */
/* WEBSITE: https://www.w3schools.com/js/js_dates.asp */

// IF Monday 00.00 -> 10.00 = 10% discount, tell customer somehow
// IF Friday 15.00 -> Monday 3.00 = +15% price, don't tell customer
// IF customer total order price > 800kr, don't allow bill as payment option
// IF the order contains at least 10 of one kind, lower the total price for that individual item by 10%
// IF customer orders more than 15 products, shipping is free
// IF customer orders less than 15 products, shipping is 25kr + 10% of total amount for cart.
// If the customer hasn't ordered withni 15 min, clear the cart and announce that the customer was too slow.
// The whole order should be able to be performed using only the keyboard.
// The whole thing should be a one-pager.
// Mörk tema

// BEFORE SUBMITTING
// README containging screenshots + names of ppl whom have been a part of the project
// Validate HTML
// Validate CSS - but don't put too much thought into it.

// AMANDAS EXTRA PLANS, ONLY IF THERE IS TIME
// Add menu for navigation attached to either side of screen or header
// Add a 'back to top' button
// Add pop-down cart menu
// Change checkbox + radio btn color!
// Change colorVariable names to more semantic names like "Primary, Backgroundcolor, ImageBoxes".
