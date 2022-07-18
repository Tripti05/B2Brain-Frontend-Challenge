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
