console.log("hi!")


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

// Get the elements
const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const slides = Array.from(document.querySelectorAll('div.slide'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Set the initial slide
let currentSlide = 0;
console.log(slides)
console.log(slides[currentSlide])
slides[currentSlide].classList.add('active-slide');

// Add event listeners for the buttons
prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
            // Fade in paragraph elements of active slide
            slides[currentSlide].querySelectorAll('h1').forEach(h1 => {
                h1.style.opacity = 0;
                h1.style.transition = 'opacity 0.5s ease-in-out', 'transform 0.5s ease-out';
                setTimeout(() => {
                  h1.style.opacity = 1;
                }, 1000);

                setTimeout(() => {
                    h1.style.transform = 'translateY(-40px)';
                  }, 1000);
              });
    sliderInner.style.transform = 'translateX(-' + (currentSlide * 16.66) + '%)';
    console.log(sliderInner.style.transform)
    slides[currentSlide + 1].classList.remove('active-slide');
    slides[currentSlide].classList.add('active-slide');
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
        // Fade in paragraph elements of active slide
        slides[currentSlide].querySelectorAll('h1').forEach(h1 => {
            h1.style.opacity = 0;
            h1.style.transition = 'opacity 0.5s ease-in-out', 'transform 0.5s ease-out';
            setTimeout(() => {
              h1.style.opacity = 1;
            }, 1000);

            setTimeout(() => {
                h1.style.transform = 'translateY(-40px)';
              }, 1000);
          });
    sliderInner.style.transform = `translateX(-${currentSlide * 16.66}%)`;
    console.log(sliderInner.style.transform)
    slides[currentSlide - 1].classList.remove('active-slide');
    slides[currentSlide].classList.add('active-slide');


  }
});

// for second slider

// Get the elements
const slider2 = document.querySelector('.slider-2');
const sliderInner2 = document.querySelector('.slider-inner-2');
const slides2 = Array.from(document.querySelectorAll('.slide-articles'));
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');

// Set the initial slide
let currentSlide2 = 0;
slides2[currentSlide2].classList.add('active-slide');

// Add event listeners for the buttons
prevButton2.addEventListener('click', () => {
  if (currentSlide2 > 0) {
    currentSlide2--;
    sliderInner2.style.transform = 'translateX(-' + (currentSlide2 * 8) + '%)';
    console.log(sliderInner2.style.transform)
    slides2[currentSlide2 + 1].classList.remove('active-slide');
    slides2[currentSlide2].classList.add('active-slide');
  }
});

nextButton2.addEventListener('click', () => {
  if (currentSlide2 < slides2.length - 1) {
    currentSlide2++;
    sliderInner2.style.transform = `translateX(-${currentSlide2 * 8}%)`;
    console.log(sliderInner2.style.transform)
    slides2[currentSlide2 - 1].classList.remove('active-slide');
    slides2[currentSlide2].classList.add('active-slide');
  }
});


//selecting buttons

const buttons = document.querySelectorAll('.button-icon');
const contents = document.querySelectorAll('.content');
console.log(contents)

for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener('click', function() {
 
    const target = this.dataset.target;
    const temp_div = target.substring(4);
    const temp_string = "btn" + temp_div ;
    console.log(temp_string);
    const target_btn = document.getElementById(temp_string);
    console.log(target_btn);

    for (let j = 0; j < contents.length; j++) {
      if (contents[j].getAttribute('id') === target.substring(1)) {
        contents[j].classList.add('active');
        target_btn.classList.add('clicked');
    
        console.log("in the if")
      } else {
        contents[j].classList.remove('active');
        buttons[j].classList.remove('clicked');
      }
    
    }
    
  });
}



