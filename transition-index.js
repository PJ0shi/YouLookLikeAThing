console.log("hi!");


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

//rotating elements

var elems = document.querySelectorAll('.even');
console.log(elems);
window.addEventListener('scroll', function() {
  var value = window.scrollY * 0.55;
  elems.forEach(function(elem) {
    elem.style.transform = `translateX(-50%) translateY(-50%) rotate(${value}deg)`;
  });
});

var elems1 = document.querySelectorAll('.odd');
console.log(elems1);
window.addEventListener('scroll', function() {
  var value = window.scrollY * -0.55;
  elems1.forEach(function(elem1) {
    elem1.style.transform = `translateX(-50%) translateY(-50%) rotate(${value}deg)`;
  });
});




//giraffe photo reveal



var container = document.querySelector('.container1');
var imagePaths = ["images/giraffe1.jpg", "images/giraffe2.jpg", "images/giraffe3.jpg", "images/giraffe4.jpg"]; // Add your image paths here
var currentImagePathIndex = 0;

container.addEventListener('click', function(event) {
  console.log("hi!")

    var addedImage = document.createElement('img');
    addedImage.src = imagePaths[currentImagePathIndex];
    addedImage.classList.add('addedImage');

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY)
    
    addedImage.style.left = posX + 'px';
    addedImage.style.top = posY + 'px';
    container.appendChild(addedImage);

    currentImagePathIndex = (currentImagePathIndex + 1) % imagePaths.length;
});


