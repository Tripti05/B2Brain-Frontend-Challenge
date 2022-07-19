// SIDEBAR DROPDOWN BTN
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through all dropdown elements
dropdowns.forEach(dropdown => {
  // Get inner elements from each dropdown
  const upBtn =  dropdown.querySelector(".sidebar__dropdown");
  const navSubMenu =  dropdown.querySelector(".nav__sub__menu");
  const downBtn = dropdown.querySelector(".downbutton");

  /* We are using this method in order to have
   multiple dropdown menus on page */

   // Add a click event to the upBtn elements
   upBtn.addEventListener("click", () => {
    navSubMenu.classList.toggle("show");
    downBtn.classList.toggle("rotate__btn");
  });
});


// handle search input
var searchInput = document.querySelector('#searchInput');
searchInput.onkeydown = function(e){

  if(e.keyCode == 13){
    let value = searchInput.value;
    let target = document.querySelector('search-result');
    // search api call
    let url = `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${value}`
    fetch(url,{
      method: 'GET'
    })
    .then(res=>res.json())
    .then(data=>{
      // data

    })
  }
}
