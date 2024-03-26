// document.querySelector("h1").innerHTML = "Good Bye";
/* 
DOM (Document Object Model)--------------------------------------------------
-----------------------------------------------------------------------------
*/

var firstChild = document.firstElementChild;
// console.log(firstChild) // everything in this case

firstChild = document.firstElementChild.firstElementChild;
// console.log(firstChild) // only head tag

firstChild = document.firstElementChild.lastElementChild.firstElementChild
console.log(firstChild) // h1 in this case
firstChild.innerHTML = "Good bye by DOM";

// checkbox by DOM
document.querySelector("input").click();

// Different methods--------------------------------

// document.getElementByTagName("li")
// document.getElementByClassName("btn")
// document.getElementById("title")
// document.querySelector("h1")
// document.querySelector("#wayToSelectId")
// document.querySelector(".wayToSelectClass")
//documnet.wuerySelectorAll();

document.querySelector("h1").style.backgroundColor="yellow";

// Separation concerns- IMPORTANT one's---------------

document.querySelector("button").classList.add("invisible"); // class invisible is now added to it
// document.querySelector("button").classList.remove("invisible"); // also remove the class 
document.querySelector("button").classList.toggle("invisible");  // add if there not such class or remove if there is such class

// Text Manipulation and Text Content-----------------

// This is a HTML
// <h1> <strong>Hello</strong> </h1>

document.querySelector("h1").innerHTML;
// This will give <strong>Hello</strong>

document.querySelector("h1").textContent;
//But with textContent it will still give Hello

// Manipulating the HTML attributes

document.querySelector("a");
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","https://www.bing.com")


