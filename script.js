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
    name: 'Gryphon',
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
    name: 'Ariendale Terrier',
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
    name: 'Brian the Brain',
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
    name: 'Cacti Carl',
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
    name: 'Mushroom Buddy',
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
    name: 'Flail',
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
    name: 'Gobbo',
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
    name: 'Wiley',
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
    name: 'Super Mario',
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
    name: 'Shirley the Skull',
    rating: 4.9,
    price: 95,
    amount: 0,
  },
];
const productsContainer = document.querySelector('.productList'); // Targets the <section> I made for the products.
// For loop för att skapa HTML element av min array + loopa ut i HTML strukturen inuti en <article>
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
