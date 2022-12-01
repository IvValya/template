// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let imgs = document.getElementsByClassName("slide");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");


for (let img of imgs) {
    img.addEventListener('click', (e) => {
        modal.style.display = "block";
        modalImg.src = e.currentTarget.querySelector("img").src;
        captionText.innerHTML = e.currentTarget.querySelector("img").alt;
    });
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Галлерея
let slideIndex = 1;
let divDots = document.querySelector(".dots");
let slides = document.getElementsByClassName("slide");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  let dot = document.createElement("span");
  dot.className = "dot";
  dot.tabIndex = i;
  divDots.append(dot);
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dots_active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dots_active";
 
}

let prev = document.querySelector(".slider__wrapper");
prev.addEventListener("click", (e) => {
    if (e.target.className === "prev") {
        plusSlides(-1);
    }
    if (e.target.className === "next") {
        plusSlides(1);
    }
    if (e.target.className === "dot") {
      let index = Number(e.target.tabIndex)+1;
      currentSlide(index);
    }
})

let burger = document.querySelector(".burgerMenu");
burger.addEventListener("click", () => {
  document.querySelector(".mobileNav").style.display = "block";
  burger.style.display = "none";
})

// height for buttons "prev" and "next"
/*
let h = document.querySelector(".slide__img").clientHeight;
let hBtn = document.querySelector(".prev").clientHeight;
h = Number(h)/2-Number(hBtn)/2;
let next = document.querySelector(".next");
next.style.top = h+"px";
let previ = document.querySelector(".prev");
previ.style.top = h+"px";*/