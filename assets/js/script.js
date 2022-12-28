
'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);


var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var matic  = document.getElementById("polygen");
var  sol  = document.getElementById("solana");
var  lite  = document.getElementById("litecoin");
var  ustd = document.getElementById("tether");
var  binance = document.getElementById("binancecoin");




var settings = {
  "async" : true,
  "scrossDomain" : true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Clitecoin%2Cpolygen%2Ctether%2Cbinancecoin%2Cbamboo%2Cdai&vs_currencies=usd",
   "method" : "GET" ,
   "headers" : {}
}
$.ajax(settings).done(function (respones){
 console.log(respones);
btc.innerHTML= respones.bitcoin.usd;
 eth.innerHTML=respones.ethereum.usd;
 doge.innerHTML=respones.dogecoin.usd;
 matic.innerHTML=respones.polygen.usd;
 sol.innerHTML=respones.solana.usd;
 lite.innerHTML=respones.litecoin.usd;
 ustd.innerHTML=respones.tether.usd;
 binance.innerHTML=respones.binancecoin.usd;

 

   
});


