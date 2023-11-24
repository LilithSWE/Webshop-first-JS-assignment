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
