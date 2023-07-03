document.addEventListener('DOMContentLoaded',()=>{
  mouseEffect();
  sideMenuEffect();
})

// 마우스 커서
function mouseEffect(){
  const mouseCursor = document.querySelector('#mouse_cursor');

  document.addEventListener('mousemove', cursorMove)

  function cursorMove(e){
    gsap.to(mouseCursor,{
      left:e.pageX - mouseCursor.clientWidth/2,
      top:e.pageY - mouseCursor.clientWidth/2,
      duration: 0.3, 
      ease:'power1.out'
    })
  }
}

function sideMenuEffect(){
  const sideMenu = document.querySelector('#side_menu>p');
  const sideMenuList = document.querySelector('#side_menu_list');
  const sideMenuLi = document.querySelectorAll('#side_menu_list>li');
  let isClick = false;

  
  initEffect();

  function initEffect(){
    sideMenu.addEventListener('click', clickMenu);

    for(item of sideMenuLi){
      item.addEventListener('click', sideLiClick);
    }
  }

  function clickMenu(){
    if(isClick == false){
      gsap.to(sideMenu,{
        width:75,
        height:75,
        duration: 0.3,
        ease: "back.inOut(1.7)",
        onComplete:()=>{
          isClick = true;
        }
      })

      gsap.to(sideMenuList,{
        width:610
      })
    }else if(isClick == true){
      gsap.to(sideMenu,{
        width:60,
        height:60,
        duration: 0.3,
        ease: "back.inOut(1.7)",
        onComplete:()=>{
          isClick = false;
        }
      })

      gsap.to(sideMenuList,{
        width:60
      })
    }
  }

  function sideLiClick(){
    let clickIndex = getIndex(this);
    
    clickMove(clickIndex);
  }

  function getIndex(checkMenu){
    let selectedIndex = 0;
    while((checkMenu=checkMenu.previousElementSibling) != null){
      selectedIndex++;
    }

    return selectedIndex;
  }

  function clickMove(index){
    gsap.to('body,html', 0.01, {
    	scrollTo: `.move_menu_0${index}`
    });
  }
}