document.addEventListener("DOMContentLoaded", ()=>{

  const rolling=document.querySelector("#rolling")
  const rollingBox=document.querySelector("#rolling_list_01")
  let rollingWidth=rollingBox.offsetWidth //1903

  const nationalFlag=document.querySelector("#national_flag")

  const content="Western Civilization"
  const subTitle=document.querySelector("#sub_title")
  let i=0
  // alert(content.length)
  
  flag() //국기 투명도 효과 함수
  setInterval(typing, 200) //서브타이틀 타이핑 효과 함수
  rollingEvent() //롤링 이벤트 효과 함수
  rollingEventReset() //롤링 이벤트 리셋 함수

  window.addEventListener("resize", rollingEventReset) //리사이즈 이벤트 함수

  function flag (){
    gsap.set(nationalFlag, {opacity:0})
    gsap.to(nationalFlag, {opacity:1, duration:5, ease:"power1.out"})
  }

  function typing(){ 
    //무한반복
    // let text=content[i++]
    // subTitle.innerHTML+=text
    // if(i> content.length){
    //   subTitle.innerHTML=""
    //   i=0
    // }

    //한번만 타이핑 반복
    if(i<content.length){  //content의 문자열개수
      let text=content.charAt(i) //content의 문자열 순번 i
      subTitle.innerHTML+=text 
      i=i+1
    }
  }
  function rollingEvent(){
    gsap.set(rolling, {left:rolling.offsetLeft-1})
    if(rolling.offsetLeft<=-rollingWidth){
      gsap.set(rolling, {left:0})
    }
    requestAnimationFrame(rollingEvent, 20)
  }
  function rollingEventReset(){
    rollingWidth=rollingBox.offsetWidth
  }

 // function rollingEvent(){

  //   gsap.to(rolling, {
  //     left:-rollingWidth, 
  //     duration:5,
  //     repeat:-1,
  //     ease:'none'
  // })
   // setInterval(rollingEvent, 20)

})


