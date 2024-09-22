$('.div37').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	
	responsive: [
		{
			breakpoint: 1400,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			},
		  },
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		},
	  },
	  {
		breakpoint: 1008,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  arrows: false,
		},
	  },
	  {
		breakpoint: 800,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
		  },
	  },
	  {
		breakpoint: 550,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
		  },
	  },
	],
  })





  $('.div43').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			
			},
		  },
	  {
		breakpoint: 1000,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		},
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		},
	  },
	  
	],
  })





  $('.div51').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	
	responsive: [
		{
			breakpoint: 1400,
			settings: {
			  slidesToShow: 5,
			  slidesToScroll: 1,
			},
		  },
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		},
	  },
	  {
		breakpoint: 1008,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows: false,
		},
	  },
	  {
		breakpoint: 800,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
		  },
	  },
	  {
		breakpoint: 550,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
		  },
	  },
	],
  })




  
  $('.div53').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1000,
  arrows: false,
  pauseOnHover: true,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			
			},
		  },
	
	 
	  
	],
  })





  $('.div70').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
 
	
	
	 
	  
	
  })









  

  $('.div80').slick({
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
	
	
	 
	  
	
  })





  const head = document.getElementById("head");
  const nav = document.getElementById("nav");

  window.addEventListener("scroll", () => {
	
	  if(head.getBoundingClientRect().bottom < 0){
		nav.style.top="0";
		nav.style.position="fixed"
		nav.style.transitionDuration="0.5s"
	  }
	  

	  else{
		nav.style.top="100px";
	  }
	  
  });



  const home = document.getElementById("Home");
  const fix = document.getElementById("fix");


  window.addEventListener("scroll", () => {
	

if(home.getBoundingClientRect().bottom < 0){
	fix.classList.remove("d-none")
}

	  else{
		fix.classList.add("d-none");
	  }
	  
  });




 const fex = document.getElementById("home-tab");
 const sal = document.getElementById("profile-tab");
 const best = document.getElementById("contact-tab");

 fex.addEventListener("click",function(){
	fex.style.borderBottom="3.5px solid #0099cc"
	best.style.borderBottom="3.5px solid white"
	sal.style.borderBottom="3.5px solid white"
 })

 sal.addEventListener("click",function(){
	sal.style.borderBottom="3.5px solid #0099cc"
	fex.style.borderBottom="3.5px solid white"
	best.style.borderBottom="3.5px solid white"
 })


 best.addEventListener("click",function(){
	best.style.borderBottom="3.5px solid #0099cc"
	fex.style.borderBottom="3.5px solid white"
	sal.style.borderBottom="3.5px solid white"
 })




 const fexe = document.getElementById("home-tabb");
 const sale = document.getElementById("profile-tabb");
 const beste = document.getElementById("contact-tabb");

 fexe.addEventListener("click",function(){
	fexe.style.borderBottom="3.5px solid #0099cc"
	beste.style.borderBottom="3.5px solid white"
	sale.style.borderBottom="3.5px solid white"
 })

 sale.addEventListener("click",function(){
	sale.style.borderBottom="3.5px solid #0099cc"
	fexe.style.borderBottom="3.5px solid white"
	beste.style.borderBottom="3.5px solid white"
 })


 beste.addEventListener("click",function(){
	beste.style.borderBottom="3.5px solid #0099cc"
	fexe.style.borderBottom="3.5px solid white"
	sale.style.borderBottom="3.5px solid white"
 })










const offerTime = Array.from(document.querySelectorAll(".time-end"));
let nowTime = new Date();
let endTime = new Date("Sep 16, 2024 16:35:00");

let timer = setInterval(() => {
  nowTime = new Date();
  let timeDifference = endTime.getTime() - nowTime.getTime();
  if (timeDifference > 0) {
    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    days < 10 ? (days = "0" + days) : "";

    hours = hours % 24;
    hours < 10 ? (hours = "0" + hours) : "";
    minutes = minutes % 60;
    minutes < 10 ? (minutes = "0" + minutes) : "";
    seconds = seconds % 60;
    seconds < 10 ? (seconds = "0" + seconds) : "";

    offerTime.forEach((time) => {
      time.innerHTML = `<b> ${days} :  ${hours} : ${minutes} : ${seconds}</b>`;
    });
  } else {
    offerTime.forEach((time) => {
      time.innerHTML = "This Offer ends";
    });
    clearInterval(timer);
  }
}, 1000);


let fog = document.querySelector(".loader-f");

setInterval(()=>{
	fog.style.opacity="0";
	fog.style.zIndex="-1";
},1500 )


