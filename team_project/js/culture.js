document.addEventListener('DOMContentLoaded',()=>{
  const cultureImg01 = document.querySelector('#culture_sub01>.culture_img');
  const cultureImg02 = document.querySelector('#culture_sub02>.culture_img');
  const cultureImg03 = document.querySelector('#culture_sub03>.culture_img');




  gsap.to('#culture_main_textbox',{
    top: -200,
    opacity:0,
    duration:0.2,
    scrollTrigger:{
      trigger: '#culture_main',
      // markers:true,
      start:'top 0%',
      end:'bottom 0%',
      scrub:3,
    }
  })

  gsap.to('.culture_main_title',{
    top: -400,
    duration:0.2,
    scrollTrigger:{
      trigger: '#culture_main',
      // markers:true,
      start:'top 0%',
      end:'bottom 0%',
      scrub:1,
      // pin:true
    }
  })

  gsap.to(cultureImg01,{
    backgroundSize:`150%`,
    duration:0.2,
    scrollTrigger:{
      trigger: '#culture_sub01',
      // markers:true,
      start:'top 0%',
      end:'bottom 0%',
      scrub:1,
      // pin:true
    }
  })

  gsap.to(cultureImg02,{
    backgroundSize:`150%`,
    duration:0.2,
    scrollTrigger:{
      trigger: '#culture_sub02',
      // markers:true,
      start:'top 0%',
      end:'bottom 0%',
      scrub:1,
      // pin:true
    }
  })

  gsap.to(cultureImg03,{
    backgroundSize:`150%`,
    duration:0.2,
    scrollTrigger:{
      trigger: '#culture_sub03',
      // markers:true,
      start:'top 0%',
      end:'bottom 0%',
      scrub:1,
      // pin:true
    }
  })

})