import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,

      slidesPerView: 1, 
     
      loop: true, 
      autoplay: 3000, 
      autoplayDisableOnInteraction: false
};
constructor(private router?:Router) {
    
}

ngOnInit(): void {
 $("#owl-demo").owlCarousel({
   loop:true,
   center: true,
   items: 6,
   margin: 30,
   autoplay: true,
   dots:true,
   nav:true,
   autoplayTimeout: 3500,
   smartSpeed: 600,
   itemsDesktop : [1199,4],
   itemsDesktopSmall : [479,3],
   itemsTablet: [768,2],
   itemsTabletSmall: false,
   itemsMobile : [479,3],
   singleItem : false,
   autoplayHoverPause: true,
   responsiveClass:true,
   responsive:{
       0:{
           items:4,
           
          
       },
       600:{
           items:3,
           
          
       },
       1000:{
           items:6,
           loop:true
       }
   }

 });
 var that=this;
$(".item1").click(function(){
that.nav("gallery");
});
$(".item2").click(function(){
that.nav("doctors");
});
$(".item5").click(function(){
that.nav("events");
});
}
nav(url)
{
  this.router.navigate(['/'+url])
  console.log("click")
}

}
