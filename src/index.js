// import "./css/style.css"; //importing css

import fetch from "node-fetch";

async function convertCurrency(cryptoSymbol, cryptoAmount, currencyCode) {
  let response = await fetch(
    `https://api.coinconvert.net/convert/${cryptoSymbol}/${currencyCode}?amount=${cryptoAmount}`
  );
  let data = await response.json();

  return data;
}

//convertCurrency();// no need to call it here we call it with button eventlistner

/*with hard code like in quetsion , i get status: 'success', BTC: 1, USD: 23137.81 ....(when i  do,npm i then  npm run serve, inspect and console */
//===========================================================

let button = document.getElementById("mybutton"); // i changed the html by adding id to button b/c i coulnt use it for event listner unless i give it id, why??? dont know

button.addEventListener("click", function (e) {
  e.preventDefault(); //prevent the form from refreshing after form submit

  let cryptoSymbol = document.getElementById("dropdown");
  let cryptoAmount = document.getElementById("inputAmount");
  let currencyCode = document.getElementById("dropdown2");
  let convertedResult = document.getElementById("output");

  let upperCaseCurrencyCode = currencyCode.value.toUpperCase();

  convertCurrency(
    cryptoSymbol.value,
    cryptoAmount.value,
    currencyCode.value
  ).then((response) => {
    console.log("response", response); //{status: 'success', BTC: 44, USD: 1020969.125}
    convertedResult.value = response[upperCaseCurrencyCode];
  });
});
