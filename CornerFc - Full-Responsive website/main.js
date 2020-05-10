$('#slider').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  autoplay:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
  
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.nxtBtn').click(function() {
  owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prvBtn').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
});
        


        var slides = document.querySelector('.slider-items').children;
        var nextSlide = document.querySelector('.right-slide');
        var prevwSlide = document.querySelector('.left-slide');
        var totalSlide = slides.length;
        var index = 0;

        nextSlide.onclick=function(){
            nextbtn("nextbtn");
        }
        prevwSlide.onclick=function(){
            nextbtn("prevw");
        };


        function nextbtn(direction) {
            if (direction == "nextbtn") {
                index++;
                if (index == totalSlide) {
                    index = 0;                    
                }
            }
            else{
                if (index == 0) {
                    index = totalSlide -1;
                }else{
                    index--;
                }
            }

            for(i = 0; i < slides.length; i++){
                slides[i].classList.remove("active");
            }
            slides[index].classList.add("active");
        }