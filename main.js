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

  // Change the searchbar icon and clear text when click on cross icon
  document.querySelector(".search__icon").style.display="none";
  const clearText= document.querySelector(".header__icon").classList.add("close__btn");



  document.querySelector(".hero__container").style.display="none";
  document.querySelector("#search-result").style.display="block";

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
