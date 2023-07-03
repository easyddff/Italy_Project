document.addEventListener("DOMContentLoaded", ()=>{

  // alert("test")
  const rightContent=document.querySelector("#docent_right_content")
  const docentRightList=document.querySelectorAll("#docent_right_list>li")
  const chapterNum=document.querySelector(".docent_chapter_num")
  const chapterTitle=document.querySelector(".docent_chapter_title")

  gsap.set(docentRightList, {x:-500, opacity:0})

 
  gsap.to(docentRightList[0], {x:0, opacity:1, duration:2, ease:"power1.out", scrollTrigger:{
    trigger:rightContent,
    // markers:true,
    start:"top 0%",
    end:"0% 0%",
    scrub:5,
  }})
  gsap.to(docentRightList[1], {x:0, opacity:1, duration:2, ease:"power1.out", scrollTrigger:{
    trigger:rightContent,
    // markers:true,
    start:"top -30%",
    end:"20% 0%",
    scrub:5,
  }})
  gsap.to(docentRightList[2], {x:0, opacity:1, duration:2, ease:"power1.out", scrollTrigger:{
    trigger:rightContent,
    // markers:true,
    start:"top -60%",
    end:"40% 0%",
    scrub:5,
  }})
  

  
})