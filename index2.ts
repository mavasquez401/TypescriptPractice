import products from "./products";

const productName: string = "fanny pack";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = "575 Broadway, New York City, New York";

const product = products.filter((product) => product.name === productName)[0];

console.log(product);
let preOrder: boolean;

function stringToBoolean(value: string): boolean {
  return value === "true";
}
if (stringToBoolean(product.preOrder) === true) {
  console.log("We will send you a message when your product is on its way.");
} else {
  console.log("This item is not available to pre-order.");
}

if (Number(product.price) > 25) {
  shipping = 0;
  console.log(`Shipping is Free`);
} else {
  shipping = 5;
  console.log(`Shipping is $${shipping}.00`);
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(`Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
