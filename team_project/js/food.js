document.addEventListener('DOMContentLoaded',()=>{
  const foodWrap=document.querySelector('#food_horizon_wrap')
  const topTitle=document.querySelector('#food_horizon_01')
  const bottomTitle=document.querySelector('#food_horizon_02')
  const infoWrap=document.querySelector('#food_info_wrap')
  
  const scrollWrap=document.querySelector('#food_scroll_wrap')
  const scrollList=document.querySelector('#food_scroll_list')
  
  let endX=scrollWrap.offsetWidth-document.documentElement.clientWidth
  

  gsap.to(topTitle, {top:-60+"%", duration:3, ease:"power1.out", scrollTrigger:{
      trigger:foodWrap,
      start:"top 0%",
      end:"bottom 0%",
      scrub:1,
  }})

  gsap.to(bottomTitle, {top:60+"%", duration:3, ease:"power1.out", scrollTrigger:{
      trigger:foodWrap,
      start:"top 0%",
      end:"bottom 0%",
      scrub:1,
  }})

  gsap.to(infoWrap, {top:-25+"vh", duration:3, ease:"power1.out", scrollTrigger:{
      trigger:foodWrap,
      start:"top 0%",
      end:"bottom 0%",
      scrub:1,
      pin:true,
  }})



  gsap.to(scrollList, {x:-endX, duration:3, ease:"power1.out", scrollTrigger:{
      trigger:scrollWrap,
      start:'top 0%',
      end:`${endX} 0%`,
      scrub:1,
      pin:true,
  }})
  

})