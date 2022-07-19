// SIDEBAR DROPDOWN BTN
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through all dropdown elements
dropdowns.forEach(dropdown => {
  // Get inner elements from each dropdown
  const upBtn = dropdown.querySelector(".sidebar__dropdown");
  const navSubMenu = dropdown.querySelector(".nav__sub__menu");
  const downBtn = dropdown.querySelector(".downbutton");

  /* We are using this method in order to have
   multiple dropdown menus on page */

  // Add a click event to the upBtn elements
  upBtn.addEventListener("click", () => {
    navSubMenu.classList.toggle("show");
    downBtn.classList.toggle("rotate__btn");
  });
});

// track handler
function handleTrackEvent(e, OrgName, org_slug) {
  e.style.borderColor = '#1AAB2B'
  e.style.color = '#1AAB2B'
  console.log(OrgName + ' (' + org_slug + ') tracked at ' + new Date());
}

// handle search input
var searchInput = document.querySelector('#searchInput');

function activeSearch() {
  // Change the searchbar icon and clear text when click on cross icon
  document.querySelector(".search__icon").style.display = "none";
  document.querySelector(".close__btn").style.display = "block";
  document.querySelector(".hero__container").style.display = "none";
  document.querySelector("#search-result").style.display = "block";
}

function deactiveSearch() {
  searchInput.value = ""
  // Change the searchbar icon and clear text when click on cross icon
  document.querySelector(".close__btn").style.display = "none";
  document.querySelector(".search__icon").style.display = "block";
  document.querySelector(".hero__container").style.display = "block";
  document.querySelector("#search-result").style.display = "none";
}

document.querySelector(".search__icon").addEventListener('click', function() {
  activeSearch()
})

document.querySelector(".close__btn").addEventListener('click', function() {
  deactiveSearch()
})

searchInput.onkeydown = function(e) {
  activeSearch()

  if (e.keyCode == 13) {

    // loading
    document.querySelector("#search-result").innerHTML = `
      <div class="loading">
        Loading...
      </div>
    `

    let value = searchInput.value;
    let target = document.querySelector('search-result');
    // search api call
    let url = `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${value}`
    fetch(url, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data.length)
        var html = ""
        if (data.length > 0) {
          html += `
        <div class="search__content">
          <div class="search__page__left">
            <h3 class="nav__text search__heading">Similar accounts</h3>
            <div class="accounts__contents">`;

          data.forEach((obj) => {
            html += `
            <div class="account__content">
              <div class="account__content__left">`
            if (obj.logo.length > 0) {
              html += `<img src="${obj.logo}" alt="logo-img">`
            } else {
              html += ` <div class="org_logo" style="background: ${obj.color};">
                    ${obj.company[0].toUpperCase()}
                  </div>`
            }
            html += `<div class="">
                  <h4 class="nav__text heading">${obj.company}</h4>
                  <p class="nav__text text">${obj.website}</p>
                </div>
              </div>
              <div class="account__content__right" onclick="handleTrackEvent(this,'${obj.company}','${obj.slug}')">
                <p>Track</p>
              </div>
            </div>`
          })
          html += `
          </div>
        </div>
        <div class="search__page__right">
          <h3 class="nav__text search__heading">Quick Actions</h3>

          <div class="quick__action__content">
            <p class="nav__text text">Track new account</p>
            <p class="nav__text text">Bulk track accounts</p>
            <p class="nav__text text">Manage Account</p>
          </div>

        </div>
      </div>`
        }

        // add html content to search result
        document.querySelector("#search-result").innerHTML = html;
      })
  }
}
