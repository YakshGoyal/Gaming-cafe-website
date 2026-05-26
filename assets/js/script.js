

  // GSAP HERO

  gsap.from(".hero-left h1",{
    y:80,
    opacity:0,
    duration:1.2
  });

  gsap.from(".hero-left p",{
    y:40,
    opacity:0,
    delay:.3,
    duration:1
  });

  gsap.from(".hero-btns",{
    y:40,
    opacity:0,
    delay:.6,
    duration:1
  });

  gsap.from(".hero-right img",{
    x:100,
    opacity:0,
    duration:1.5
  });

  // SCROLL REVEAL

  ScrollReveal().reveal('.card,.price-card,.gallery img,.banner,.stat',{
    distance:'60px',
    duration:1200,
    easing:'ease',
    origin:'bottom',
    interval:200
  });

  // COUNTER

  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;

      const increment = target / 100;

      if(c < target){

        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter,20);

      }else{

        counter.innerText = target + '+';

      }

    }

    updateCounter();

  });



    // SWIPER

    var swiper = new Swiper(".mySwiper", {
      loop:true,
      autoplay:{
        delay:3000,
        disableOnInteraction:false,
      },
      speed:1200,
    });

    // GSAP

    gsap.from(".logo",{
      y:-40,
      opacity:0,
      duration:1
    });

    gsap.from(".hero-left .tag",{
      x:-60,
      opacity:0,
      duration:1
    });

    gsap.from(".hero-left h1",{
      x:-80,
      opacity:0,
      duration:1.2
    });

    gsap.from(".hero-left p",{
      x:-50,
      opacity:0,
      delay:.2,
      duration:1
    });

    gsap.from(".hero-btns",{
      y:40,
      opacity:0,
      delay:.4,
      duration:1
    });

    gsap.from(".hero-right",{
      x:100,
      opacity:0,
      duration:1.5
    });





// ABOUT SECTION ANIMATION

gsap.from(".about-left",{
    x:-100,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:".about-section",
        start:"top 70%"
    }
});

gsap.from(".about-right",{
    x:100,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:".about-section",
        start:"top 70%"
    }
});
  

/* =========================
   POPUP OPEN CLOSE
========================= */

const popup =
document.getElementById("contactPopup");

const openBtn =
document.getElementById("openPopup");

const closeBtn =
document.getElementById("closePopupBtn");

const overlay =
document.querySelector(".popup-overlay");

openBtn.onclick = () => {
    popup.classList.add("active");
}

closeBtn.onclick = () => {
    popup.classList.remove("active");
}

overlay.onclick = () => {
    popup.classList.remove("active");
}
