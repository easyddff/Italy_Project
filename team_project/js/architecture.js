window.addEventListener('load',()=>{
  archiStart();
  tour();
  let testSlide1 = new TestSlide('#test_wrap1');
  let testSlide2 = new TestSlide('#test_wrap2');
  let testSlide3 = new TestSlide('#test_wrap3');
  let testSlide4 = new TestSlide('#test_wrap4');
})

function archiStart(){
  gsap.to('.architecture_start_title',{
    fontSize:262,
    duration:0.2,
    scrollTrigger:{
      trigger: '#architecture_start',
      // markers:true,
      start:'top 0%',
      end:'bottom 0%',
      scrub:1,
      pin:true
    }
  })
}

function tour(){
  const tourLi=document.querySelectorAll('#tour_list>li');
  const fake=document.querySelectorAll('.fake_text');
  const tourSlide=document.querySelectorAll('.tour_slide_wrap');
  const tourClose=document.querySelector('#tour_close');
  const tourText=document.querySelectorAll('.tour_text_box')

  let tourClick=false;
  

  init()
  tourEvent()
  // tourInEvent()
  function init(){
    gsap.set(tourSlide,{display:'none'})
  }

  function tourEvent(){
    for(item of tourLi){
      item.addEventListener('click', tourMenu)
    }
    tourClose.addEventListener('click', closeTourMenu)
  }
  

  function tourMenu(){
    let clickIndex=getIndex(this);
    tourOpen(clickIndex);
    // closeTourMenu(clickIndex);
  }


  function getIndex(checkMenu){
    let selectedIndex=0;
    while((checkMenu=checkMenu.previousElementSibling)!=null){
      selectedIndex++;
    }
    return selectedIndex;
  }


  function tourOpen(index){
    if(tourClick==false){
      gsap.set(tourSlide,{display:'block'})
      gsap.to(fake,{opacity:0})
      gsap.to(tourLi,{width:0, duration:1, ease: 'power1.out'})
      gsap.to(tourLi[index],{width:100+'%', duration:1, ease: 'power1.out',onComplete:()=>{
        gsap.to(tourLi[index].children[1],{left:10+'%', opacity:1, duration:1, ease:'power1.out',onComplete:()=>{
          gsap.to(tourLi[index].children[2],{opacity:1, duration:0.5, ease:'power1.out'})
          gsap.to(tourClose,{display:'block'})
        }})
      }})
      tourClick=true;
    }
  }

  function closeTourMenu(){
    if(tourClick==true){
      gsap.to(tourSlide,{opacity:0,onComplete:()=>{gsap.set(tourSlide,{display:'none'})}})
      gsap.to(tourText,{left:30+'%', opacity:0})
      gsap.to(tourClose,{display:'none',onComplete:()=>{
        gsap.to(tourLi,{width:25+'%',duration:1, ease: 'power1.out'})
        gsap.to(fake,{opacity:1})
      }})
      tourClick=false;
    }
  }

}

// function modalShow(){
//   const tourSection = document.querySelector('#tour_section');
//   const modalWrap = document.createElement('div');
//   modalWrap.id = 'modal_wrap';
//   modalWrap.innerHTML = `<div id="modal_img"><img src="#"></div>
//                           <div id="modal_text"></div>
//                           <button id="modal_close">x</button>`
//   tourSection.append(modalWrap)

//   const modalImg = document.querySelector('#modal_img').children[0]
//   const modalClose = document.querySelector('#modal_close');

//   const testWrap1 = document.querySelector('#test_wrap1').children[0];
//   const testWrap2 = document.querySelector('#test_wrap2').children[0];
//   const testWrap3 = document.querySelector('#test_wrap3').children[0];
//   const testWrap4 = document.querySelector('#test_wrap4').children[0];
//   const testWrapLi01 = testWrap1.children;
//   const testWrapLi02 = testWrap2.children;
//   const testWrapLi03 = testWrap3.children;
//   const testWrapLi04 = testWrap4.children;
//   let clickIndex = null;

//   clickEffect();


//   function clickEffect(){
//     for(item of testWrapLi01){
//       item.addEventListener('click', clickOpen01);
//     }
  
//     for(item of testWrapLi02){
//       item.addEventListener('click', clickOpen02);
//     }
  
//     for(item of testWrapLi03){
//       item.addEventListener('click', clickOpen03);
//     }
  
//     for(item of testWrapLi04){
//       item.addEventListener('click', clickOpen04);
//     }

//     modalClose.addEventListener('click', closeBtn);
//   }

//   function clickOpen01(){
//     clickIndex = getIndex(this);
//     // console.log(clickIndex)
//     modalOpen(clickIndex);
//   }

//   function clickOpen02(){
//     clickIndex = getIndex(this);
//     // console.log(clickIndex)
//   }

//   function clickOpen03(){
//     clickIndex = getIndex(this);
//     // console.log(clickIndex)
//   }

//   function clickOpen04(){
//     clickIndex = getIndex(this);
//     // console.log(clickIndex)
//   }


//   function getIndex(checkMenu){
//     let selectedIndex = 0;
//     while((checkMenu=checkMenu.previousElementSibling) != null){
//       selectedIndex++;
//     }

//     return selectedIndex;
//   }

//   function modalOpen(index){
//     gsap.set('#modal_wrap',{display:'flex'})
//     console.log(index)
//     console.log(testWrapLi01[index])
//   }

//   function closeBtn(){
//     gsap.set('#modal_wrap',{display:'none'})
//   }
// }





// =====================================================================


class TestSlide{
  constructor(selectTest){
    this.tourInSlideWrapName = document.querySelector(selectTest);

    this.textData = selectTest.substr(1);
    // console.log(selectTest.substr(1))
    // console.log(this.textData)

    //axios.get(`${}/data${clickIndex}.html`)
    
    this.tourInWrap = this.tourInSlideWrapName;
    this.tourInSlide = this.tourInSlideWrapName.children[0];
    this.tourInSlideLi = this.tourInSlide.children;
    
    this.tourInDotWrap = this.tourInSlideWrapName.children[1];
    this.tourInPrev = this.tourInDotWrap.children[0];
    this.tourInNext = this.tourInDotWrap.children[2];
    this.tourInAuto = this.tourInDotWrap.children[1];
    
    // this.selectedDot = this.tourInDotLi[0];
    this.slideWidth = this.tourInSlide.offsetWidth;
    this.timer=null;
    this.isStop=false;
    this.isSlide=false;
    
    // this.currentIndex = 0;
    // this.clickIndex = null;//이게 nextIndex

    this.currentX=[10+'%', 40+'%', 100+'%',-250 ];
    this.a=0;
    this.b=1;
    this.c=2;
    this.d=3;

    this.modalClose = document.querySelector('#modal_close');
    this.modalImg = document.querySelector('#modal_img');
    this.modalText = document.querySelector('#modal_text');

    this.init();
    this.autoPlay();
    this.stopPlay();

    this.tourInNextSlide();
    this.tourInPrevSlide();
    //this.autoPlay();
    // this.modalSlidePlay();
    this.tourShow();
  }
// ===

// ---
  tourShow(){
    for(item of this.tourInSlideLi){
      item.addEventListener('click',(e)=>{
        this.clickIndex=this.getIndex(e.currentTarget)

        this.tourShowText(this.clickIndex)
        this.modalOpen(this.clickIndex)

        this.modalSlideStop()
      })
    }

    this.modalClose.addEventListener('click',()=>{
      gsap.set('#modal_wrap',{display:'none'})

      if(this.isSlide==true){
          this.autoPlay()
          this.isSlide=false;
      }
    })
  }

  
  tourShowText(index){
    const grayLayer=document.createElement('div');
    const overLayer=document.createElement('div');

    grayLayer.id='grayLayer';
    grayLayer.style.display='block';

    gsap.to(grayLayer,{opacity:0.9, duration:0.3, ease:'power1.out'})
  }

  modalOpen(index){
    gsap.set('#modal_wrap',{display:'flex'});
    this.modalImg.children[0].src = this.tourInSlideLi[index].children[1].src;

    console.log(this.modalText)
    axios.get(`/team_project/text_data/${this.textData}/text_data0${index}.html`).then((response)=>{
      this.modalText.innerHTML = response.data;
    })
  }

  getIndex(checkIndex){
    let selectedIndex=0;
    while((checkIndex=checkIndex.previousElementSibling)!=null){
      selectedIndex++
    }
    return selectedIndex;
  }

  autoPlay(){
    this.timer=setInterval(() => {
      this.a=this.a-1
      if(this.a<=-1){
        this.a=3
      }
      if(this.a==0){
        gsap.to(this.tourInSlideLi[0],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[0],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.a<=1){
        gsap.to(this.tourInSlideLi[0],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[0],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[0],{left:this.currentX[this.a]})

      this.b=this.b-1
      if(this.b<=-1){
        this.b=3
      }
      if(this.b==0){
        gsap.to(this.tourInSlideLi[1],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[1],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.b<=1){
        gsap.to(this.tourInSlideLi[1],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[1],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[1],{left:this.currentX[this.b]})

      this.c=this.c-1
      if(this.c<=-1){
        this.c=3
      }
      if(this.c==0){
        gsap.to(this.tourInSlideLi[2],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[2],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.c<=1){
        gsap.to(this.tourInSlideLi[2],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[2],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[2],{left:this.currentX[this.c]})


      this.d=this.d-1
      if(this.d<=-1){
        this.d=3
      }
      if(this.d==0){
        gsap.to(this.tourInSlideLi[3],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[3],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.d<=1){
        gsap.to(this.tourInSlideLi[3],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[3],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[3],{left:this.currentX[this.d]})
    }, 4000);
    
  }
  stopPlay(){
    this.tourInAuto.addEventListener('click',()=>{
      if(this.isStop==false){
        clearInterval(this.timer)
        this.isStop=true;
        console.log(this.isStop)
      }else if(this.isStop==true){
        this.autoPlay();
        this.isStop=false;
      }
    })
  }

  modalSlideStop(){
    if(this.isSlide==false){
      clearInterval(this.timer)

      this.isSlide=true;
    }
  }
  
  init(){
    gsap.set(this.tourInSlideLi,{left:100+'%', zIndex:3})
    gsap.set(this.tourInSlideLi[0],{left:10+'%', scale:1.3, zIndex:5})
    gsap.set(this.tourInSlideLi[1],{left:40+'%', zIndex:3})
  }

  tourInNextSlide(){
    // let currentX=[10+'%', 40+'%', 100+'%',-250 ]
    // let a=0
    // let b=1
    // let c=2
    // let d=3

    this.tourInNext.addEventListener('click',()=>{
      this.a=this.a-1
      if(this.a<=-1){
        this.a=3
      }
      if(this.a==0){
        gsap.to(this.tourInSlideLi[0],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[0],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.a<=1){
        gsap.to(this.tourInSlideLi[0],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[0],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[0],{left:this.currentX[this.a]})

      this.b=this.b-1
      if(this.b<=-1){
        this.b=3
      }
      if(this.b==0){
        gsap.to(this.tourInSlideLi[1],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[1],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.b<=1){
        gsap.to(this.tourInSlideLi[1],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[1],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[1],{left:this.currentX[this.b]})

      this.c=this.c-1
      if(this.c<=-1){
        this.c=3
      }
      if(this.c==0){
        gsap.to(this.tourInSlideLi[2],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[2],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.c<=1){
        gsap.to(this.tourInSlideLi[2],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[2],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[2],{left:this.currentX[this.c]})


      this.d=this.d-1
      if(this.d<=-1){
        this.d=3
      }
      if(this.d==0){
        gsap.to(this.tourInSlideLi[3],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[3],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.d<=1){
        gsap.to(this.tourInSlideLi[3],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[3],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[3],{left:this.currentX[this.d]})
    })
  }


// prev==========================================================


  tourInPrevSlide(){
    // let currentX=[10+'%', 40+'%', 100+'%',-250 ]
    // let a=0
    // let b=1
    // let c=2
    // let d=3
    this.tourInPrev.addEventListener('click',()=>{
      console.log('test')
      this.a=this.a+1
      if(this.a>=4){
        this.a=0
      }
      if(this.a==0){
        gsap.to(this.tourInSlideLi[0],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[0],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.a<=1){
        gsap.to(this.tourInSlideLi[0],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[0],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[0],{left:this.currentX[this.a]})
      // console.log(this.tourInSlideLi[0])


      this.b=this.b+1
      if(this.b>=4){
        this.b=0
      }
      if(this.b==0){
        gsap.to(this.tourInSlideLi[1],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[1],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.b<=1){
        gsap.to(this.tourInSlideLi[1],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[1],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[1],{left:this.currentX[this.b]})

      this.c=this.c+1
      if(this.c>=4){
        this.c=0
      }
      if(this.c==0){
        gsap.to(this.tourInSlideLi[2],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[2],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.c<=1){
        gsap.to(this.tourInSlideLi[2],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[2],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[2],{left:this.currentX[this.c]})



      this.d=this.d+1
      if(this.d>=4){
        this.d=0
      }
      if(this.d==0){
        gsap.to(this.tourInSlideLi[3],{opacity:1, duration:0.7, zIndex:5, scale:1.3, ease:'power1.out'})
      }else{
        gsap.to(this.tourInSlideLi[3],{duration:0.7, zIndex:3, scale:1, ease:'power1.out'})
      }
      if(this.d<=1){
        gsap.to(this.tourInSlideLi[3],{opacity:1})
      }else{
        gsap.to(this.tourInSlideLi[3],{opacity:0})
      }
      gsap.to(this.tourInSlideLi[3],{left:this.currentX[this.d]})
    })
  }


  // nextVisualSlide(index){
  
  //   // gsap.to(this.tourInSlideLi[this.currentIndex],{
  //   //   left:-250,
  //   //   zIndex:3,
  //   //   scale:1,
  //   //   opacity:0
  //   // })

  //   // gsap.set(this.tourInSlideLi[index],{
  //   //   left:40+'%',
  //   //   zIndex:3,
  //   //   opacity:1
  //   // })

  //   // gsap.to(this.tourInSlideLi[index],{
  //   //   left:10+'%',
  //   //   zIndex:5,
  //   //   scale:1.3
  //   // })

  //   // gsap.set(this.tourInSlideLi[index+1],{
  //   //   left:this.slideWidth,
  //   //   zIndex:3
  //   // })
  //   // gsap.to(this.tourInSlideLi[index+1],{
  //   //   left:40+'%',
  //   //   zIndex:3,
  //   //   opacity:1
  //   // })

  //   // if(index>=this.tourInDotLi.length-1){
  //   //   gsap.set(this.tourInSlideLi[0],{
  //   //     left:this.slideWidth,
  //   //     zIndex:3,
  //   //     opacity:0
  //   //   })
  //   //   gsap.to(this.tourInSlideLi[0],{
  //   //     left:40+'%',
  //   //     zIndex:3,
  //   //     opacity:1
  //   //   })

  //   //   console.log(this.tourInSlideLi[0])
  //   // }

  //   // this.currentIndex = index;
  // }




  // prevVisualSlide(index){
  //   gsap.to(this.tourInSlideLi[this.currentIndex],{
  //     left:40+'%',
  //     zIndex:3,
  //     scale:1
  //   })

  //   gsap.set(this.tourInSlideLi[index],{
  //     left:-250,
  //     zIndex:3,
  //     opacity:0
  //   })

  //   gsap.to(this.tourInSlideLi[index],{
  //     left:10+'%',
  //     zIndex:5,
  //     scale:1.3,
  //     opacity:1
  //   })

  //   gsap.set(this.tourInSlideLi[index-1],{
  //     left:40+'%',
  //     zIndex:3,
  //     scale:1,
  //     opacity:1
  //   })
  //   gsap.to(this.tourInSlideLi[index-1],{
  //     left:this.slideWidth,
  //     zIndex:3,
  //     opacity:0
  //   })
  //   // gsap.to(this.tourInSlideLi[index+2],{
  //   //   left:this.slideWidth,
  //   //   zIndex:3,
  //   //   opacity:0
  //   // })

  //   if(index<=0){
  //     gsap.set(this.tourInSlideLi[this.tourInDotLi.length],{
  //       left:-250,
  //       zIndex:5,
  //       scale:1,
  //       opacity:0
  //     })
  //     gsap.to(this.tourInSlideLi[this.tourInDotLi.length],{
  //       left:10+'%',
  //       zIndex:5,
  //       scale:1.3,
  //       opacity:1
  //     })

  //     console.log(this.tourInSlideLi[0])
  //   }

  //   this.currentIndex = index;
  // }
}


//100
//10
//40