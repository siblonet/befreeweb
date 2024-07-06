async function style_Beheviors_init() {
  document.querySelector(".jsFilter").addEventListener("click", function () {
    document.querySelector(".filter-menu").classList.toggle("active");
  });

 /* document.querySelector(".grid").addEventListener("click", function () {
    document.querySelector(".list").classList.remove("active");
    document.querySelector(".grid").classList.add("active");
    document.querySelector(".products-area-wrapper").classList.add("gridView");
    document
      .querySelector(".products-area-wrapper")
      .classList.remove("tableView");
  });

  document.querySelector(".list").addEventListener("click", function () {
    document.querySelector(".list").classList.add("active");
    document.querySelector(".grid").classList.remove("active");
    document.querySelector(".products-area-wrapper").classList.remove("gridView");
    document.querySelector(".products-area-wrapper").classList.add("tableView");
  });
*/

  var modeSwitch = document.querySelector('.mode-switch');
  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('light');
    modeSwitch.classList.toggle('active');
  });

  modeSwitch.click()


  document.getElementById("gricul-search-bar").addEventListener('input', function () {
    if (this.value.length > 7) {
      document.querySelector('.search-bar-close').style.display = "block";

      ChercheAgriculters(this.value);
    } else if (this.value.length < 1) {
      ChercheAgriculters("00");
    }
  });

}

function close_reload() {
  ChercheAgriculters("00");
  document.querySelector('.search-bar-close').style.display = "none";
}