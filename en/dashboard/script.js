const FilterRequest = async (coop_id) => {
  const readyToFilter = document.getElementById("ready_tofilter");
  readyToFilter.style.display = "none";
  document.querySelector(".filter-menu").classList.toggle("active");
  const render_agriculter = document.getElementById('render_agriculter');
  render_agriculter.innerHTML = `
     <div style="width: 100%; padding: 10px; border-radius: 10px; background: #ffffff; text-align: center; margin-top: 20px">
        <div style="width: 100%; height: 250px;">
                <img src="en/dashboard/loadingc.gif" style="height: 80%; width: 200px;" alt="">
                <p>En cours ...</p>
        </div>
    </div>
    `;

  const agriculteurb = await requesttoBackend('GET', `BefreeAgriculter/ByIdgetBefreeAgrulter/${coop_id}/0/100`);

  if (agriculteurb.agriculter && agriculteurb.agriculter.length) {
    document.getElementById('agri_lenthg').innerText = `Total: ${agriculteurb.agrilength}`;
    render_agriculter.innerHTML = "";
    agriculteurb.agriculter.forEach((agricul) => {
      const agriculHtml = `
            <a class="products-row clicbleclass" href="details_view#${agricul.identifiant_interne_exploitation}"  target="_blank">
                        <button class="cell-more-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                        <div class="product-cell image">
                     <img src="${agricul.document ? agricul.document : "./asserts/avatay.png"}" alt="product">
                            <span>${agricul.identifiant_interne_exploitation}</span>
                        </div>
                        <div class="product-cell category">
                            <span class="cell-label">Year of Birth:</span>
                            ${agricul.annee_naissance}
                        </div>
                        <div class="product-cell status-cell">
                            <span class="cell-label">Gender:</span>
                         <span class="status ${agricul.genre === "HOMME" ? "active" : "disabled"}">${agricul.genre}</span>
                        </div>
                        <div class="product-cell sales">
                            <span class="cell-label">First Name:</span>
                            ${agricul.prenom}
                        </div>
                        <div class="product-cell stock">
                            <span class="cell-label">Last Name:</span>
                            ${agricul.nom}
                        </div>
                        <div class="product-cell price">
                            <span class="cell-label">First Name:</span>
                            ${agricul.numero_telephone}
                        </div>
                    </a>

            `;
      render_agriculter.innerHTML += agriculHtml;
    });
  } else {
    render_agriculter.innerHTML = `
     <div style="width: 100%; padding: 10px; border-radius: 10px; background: #ffffff; text-align: center; margin-top: 20px">
        <div style="width: 100%; height: 250px;">
          <div style="height: 40%; width: 200px;">
          </div>
                <p>Empty (0)</p>
          
        </div>
    </div>
    `;
  }

}

const ResetFilter = async () => {
  const categori_listing = document.getElementById("categori_listing");
  const coop_listing = document.getElementById("coop_listing");
  categori_listing.innerHTML = "<option>Loading please wait ...</option>";
  coop_listing.innerHTML = "<option>Loading please wait ...</option>";
  const ready_tofilter = document.getElementById("ready_tofilter");
  ready_tofilter.style.display = "none";

  document.querySelector(".filter-menu").classList.toggle("active");
  const render_agriculter = document.getElementById('render_agriculter');
  render_agriculter.innerHTML = `
     <div style="width: 100%; padding: 10px; border-radius: 10px; background: #ffffff; text-align: center; margin-top: 20px">
        <div style="width: 100%; height: 250px;">
                <img src="en/dashboard/loadingc.gif" style="height: 80%; width: 200px;" alt="">
                <p>Loading ...</p>
        </div>
    </div>
    `;

  const agriculteurb = await requesttoBackend('GET', `BefreeAgriculter/getAllBefreeAgrulter/0/100`);

  if (agriculteurb.agriculter && agriculteurb.agriculter.length) {
    document.getElementById('agri_lenthg').innerText = `Total: ${agriculteurb.agrilength}`;
    render_agriculter.innerHTML = "";
    agriculteurb.agriculter.forEach((agricul) => {
      const agriculHtml = `
            <a class="products-row clicbleclass" href="details_view#${agricul.identifiant_interne_exploitation}"  target="_blank">
                        <button class="cell-more-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                        <div class="product-cell image">
                     <img src="${agricul.document ? agricul.document : "./asserts/avatay.png"}" alt="product">
                            <span>${agricul.identifiant_interne_exploitation}</span>
                        </div>
                        <div class="product-cell category">
                            <span class="cell-label">Year of Birth:</span>
                            ${agricul.annee_naissance}
                        </div>
                        <div class="product-cell status-cell">
                            <span class="cell-label">Gender:</span>
                         <span class="status ${agricul.genre === "HOMME" ? "active" : "disabled"}">${agricul.genre}</span>
                        </div>
                        <div class="product-cell sales">
                            <span class="cell-label">First Name:</span>
                            ${agricul.prenom}
                        </div>
                        <div class="product-cell stock">
                            <span class="cell-label">Last Name:</span>
                            ${agricul.nom}
                        </div>
                        <div class="product-cell price">
                            <span class="cell-label">First Name:</span>
                            ${agricul.numero_telephone}
                        </div>
                    </a>

            `;
      render_agriculter.innerHTML += agriculHtml;
    });
  } else {
    render_agriculter.innerHTML = `
     <div style="width: 100%; padding: 10px; border-radius: 10px; background: #ffffff; text-align: center; margin-top: 20px">
        <div style="width: 100%; height: 250px;">
          <div style="height: 40%; width: 200px;">
          </div>
                <p>Empty (0)</p>
          
        </div>
    </div>
    `;
  }

}





async function filteringDataRendering() {
  const paysListing = document.getElementById("pays_listing");
  const categoriListing = document.getElementById("categori_listing");
  const coopListing = document.getElementById("coop_listing");
  let categoFiltro = [];
  let cooperaFiltro = [];
  const countries = await GetAllCountries();

  paysListing.innerHTML = "<option>Select Country</option>";
  categoriListing.innerHTML = "<option>Country First</option>";
  coopListing.innerHTML = "<option>Category First</option>";

  paysListing.addEventListener('change', async function () {
    categoriListing.innerHTML = "<option>Choose Category</option>";
    coopListing.innerHTML = "<option>Choose Category First</option>";
    const paysId = countries.find(co => co.nomen === this.value);
    if (paysId) {
      categoFiltro = await requesttoBackend('GET', `BefreeAgriculter/getAllBefreePayCategorie/${paysId._id}`);
      if (categoFiltro && categoFiltro.length) {
        categoFiltro.forEach(cat => {
          categoriListing.innerHTML += `<option value="${cat.nomen}">${cat.nomen}</option>`;
        });
      } else {
        categoriListing.innerHTML = "<option>Category empty (0)</option>";
        coopListing.innerHTML = "<option>Depends on Category</option>";
      }
    }
  });

  categoriListing.addEventListener('change', async function () {
    coopListing.innerHTML = "<option>Choose Cooperative</option>";
    const categoId = categoFiltro.find(co => co.nomen === this.value);
    if (categoId) {
      cooperaFiltro = await requesttoBackend('GET', `BefreeAgriculter/getAllBefreePayCooperative/${categoId._id}`);
      if (cooperaFiltro && cooperaFiltro.length) {
        cooperaFiltro.forEach(coop => {
          coopListing.innerHTML += `<option value="${coop.nomen}">${coop.nomen}</option>`;
        });
      } else {
        categoriListing.innerHTML = "<option>Cooperative empty (0)</option>";
      }
    }
  });

  coopListing.addEventListener('change', function () {
    const cooperaId = cooperaFiltro.find(co => co.nomen === this.value);
    if (cooperaId) {
      const applyFilter = document.getElementById("applay_filter");
      applyFilter.setAttribute("onclick", `FilterRequest('${cooperaId._id}')`);

      const readyToFilter = document.getElementById("ready_tofilter");
      readyToFilter.style.display = "flex";
    }
  });

  if (countries && countries.length) {
    countries.forEach(country => {
      paysListing.innerHTML += `<option value="${country.nomen}">${country.nomen}</option>`;
    });
  }
}








async function style_Beheviors_init() {
  document.querySelector(".jsFilter").addEventListener("click", function () {
    document.querySelector(".filter-menu").classList.toggle("active");
  });

  filteringDataRendering()

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
  document.getElementById("gricul-search-bar").value = "";
}