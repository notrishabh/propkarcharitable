//slideshow WITH ARROWS
// var prevArrow = document.getElementsByClassName("prev");
// var nextArrow = document.getElementsByClassName("next");
// var totalSlides = document.getElementsByClassName("slides");
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n)
// {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n)
// {
//     showSlides(slideIndex = n);
// }

// function showSlides(n)
// {   
//     var i;
//     if(n < 0)
//     {
//         slideIndex = totalSlides.length-1;
//     }
//     if(n > totalSlides.length-1)
//     {
//         slideIndex = 0;
//     }
//     for(i=0;i<totalSlides.length;i++)
//     {
//         totalSlides[i].style.display = "none";
//     }
//     totalSlides[slideIndex].style.display = "block";
// }

// SLIDESHOW AUTOMATIC
var slideIndex = 0;
showSlides();
var slides = document.getElementsByClassName("slides");
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

