
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

  const infoIcon = document.querySelector('#infoIcon');
  const overlay = document.querySelector('#clickArea');
  // infoIcon.addEventListener("click", () => {
  //   const infoModal = document.querySelector('#infoModal');
  //   infoModal.style.display = 'block';
  // } );
  // overlay.addEventListener("click", ()=>{
  //   const infoModal = document.querySelector('#infoModal');
  //   infoModal.style.display = 'none';
  // });

}