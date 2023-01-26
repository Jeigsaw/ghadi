// prolly not needed
const infoMenu = document.querySelector('#infoMenu');
let isMenuOpen = false;

// prolly not needed
const closeIcon = document.querySelector('#closeInfo');
closeIcon.addEventListener("click", ()=>{
  modal.style.display = 'none';
})


// open menu as a bottom sheet

export function handleMenu (){

  // const infoIcon = document.querySelector('#infoIcon');
  // const overlay = document.querySelector('#clickArea');

  const sheet = document.querySelector("#modal");
  const sheetContents = sheet.querySelector("#container");
  const draggableArea = sheet.querySelector(".controls");

  const setSheetPosition = (value) => {
    sheetContents.style.top = `${value}px`;
  }

  const setIsSheetShown = (value) => {
    sheet.setAttribute("aria-hidden", String(!value));
  };

  sheet.querySelector("#overlay").addEventListener("click", () => {
    setIsSheetShown(false);
    document.querySelector(".viewbox").classList.remove('menuOpened');
    setSheetPosition(1000);
  });

  document.querySelector("#infoIcon").addEventListener("click", () => {
    document.querySelector(".viewbox").classList.add("menuOpened");
    
    const screenHeight = document.querySelector('.screen').clientHeight;
    const sheetHeight = sheetContents.clientHeight;
    let topValue;
    if (screenHeight <= sheetHeight) {
      topValue = 0;
    } else{
      topValue = screenHeight - sheetHeight;
    }
    setSheetPosition(topValue);

    setIsSheetShown(true);
  });





}