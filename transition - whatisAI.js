// Fetch a random image from Unsplash

// let apiName = 
// let apiEndpoint = 
// let apiKey = 

// fetchfunction(apiName+apiEndpoint + apiKey)

// async function fetchfunction(url) {
//   const response = await fetch(url);
//   if (response.ok) {
//     let jsonData = await response.json();
//     console.log(jsonData);
//   }
//   const data = await response.json();
//   console.log(data)
//   const image = document.querySelector('.image');
//   image.setAttribute('src', data.urls.regular);
//   console.log(image)
// }

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}









