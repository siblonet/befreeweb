let steps = "Country";
let categoriesServed;
let cooperativeServed;

let pays;
let categoryb;
let cooperativeb;

const inputElement = document.getElementById('nni');
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const displayCharacter = (str, length = 10) => {
    if (str.length > length) {
        return str.substring(0, length) + '...';
    }
    return str;
};

const Search = (typed_in) => {
    switch (steps) {
        case "Country":
            CountrySearch(typed_in)
            break;

        case "Category":
            CategorySearch(typed_in)
            break;

        default:
            CooperativeSearch(typed_in)
            break;
    }
}


const CountrySearch = async (nni) => {
    if (nni && nni.length) {
        const countries = await GetAllCountries();

        const country = countries.filter((eds) => {
            // Check if 'eds' object and its properties exist
            if (!eds || !eds.nomen || !eds.telcode) {
                return false; // Skip this element if any property is missing
            }

            // Perform filtering
            return (
                eds.nomen.startsWith(nni.toUpperCase()) ||
                eds.nomen.startsWith(nni.toLowerCase()) ||
                eds.nomen.startsWith(capitalize(nni)) ||
                eds.telcode.startsWith(nni) ||
                eds.nomen.startsWith(nni)
            );
        });


        const countriesid = document.getElementById('countriesid');

        if (country.length) {
            countriesid.innerHTML = "";

            country.forEach((pays) => {
                const encodedId = encodeURIComponent(pays._id);
                countriesid.innerHTML += `<a class="fingerprin" onclick="SelectedCounty('${encodedId}')">${pays.nomen}</a>`;
            });
        } else if (nni.length > 3) {
            countriesid.innerHTML = `<a class="fingerprin" style="color: red">${nni} No longer available!</a>`;
        }

    }
};



// Helper function to capitalize the first letter of a string

const CategorySearch = async (nni) => {
    const countriesid = document.getElementById('countriesid');
    if (nni && nni.length && categoriesServed.length > 0) {
        const categors = categoriesServed.filter((eds) =>
            eds.nomen.startsWith(nni.toUpperCase()) ||
            eds.nomen.startsWith(nni.toLowerCase()) ||
            eds.nomen.startsWith(capitalize(nni)) ||
            eds.nomen.startsWith(nni)
        );

        if (categors.length) {
            countriesid.innerHTML = "";

            categors.forEach((categ) => {
                const encodedId = encodeURIComponent(categ._id);
                countriesid.innerHTML += `<a class="fingerprin" onclick="SelectedCategory('${encodedId}')">${categ.nomen}</a>`;
            });
        } else if (nni.length > 3) {
            countriesid.innerHTML = `<a class="fingerprin" style="color: red">${nni} No longer available!</a>`;
        }
    } else if (nni.length > 3) {
        countriesid.innerHTML = `<a class="fingerprin" style="color: red">${nni} No longer available!</a>`;
    } else {
        countriesid.innerHTML = "";
        categoriesServed.slice(0, 5).forEach((categor) => {
            countriesid.innerHTML += `<a class="fingerprin">${categor.nomen}</a>`;
        });
    }
};


//cooperative

const CooperativeSearch = async (nni) => {
    const countriesid = document.getElementById('countriesid');
    if (nni && nni.length && cooperativeServed.length > 0) {
        const categors = cooperativeServed.filter((eds) =>
            eds.nomen.startsWith(nni.toUpperCase()) ||
            eds.nomen.startsWith(nni.toLowerCase()) ||
            eds.nomen.startsWith(capitalize(nni)) ||
            eds.nomen.startsWith(nni)
        );


        if (categors.length) {
            countriesid.innerHTML = "";

            categors.forEach((categ) => {
                const encodedId = encodeURIComponent(categ._id);
                countriesid.innerHTML += `<a class="fingerprin" onclick="SelectedCooperative('${encodedId}')">${categ.nomen}</a>`;
            });
        } else if (nni.length > 3) {
            countriesid.innerHTML = `<a class="fingerprin" style="color: red">${nni} No longer available!</a>`;
        }
    } else if (nni.length > 3) {
        countriesid.innerHTML = `<a class="fingerprin" style="color: red">${nni} No longer available!</a>`;
    } else {
        countriesid.innerHTML = "";
        cooperativeServed.slice(0, 5).forEach((categor) => {
            countriesid.innerHTML += `<a class="fingerprin">${categor.nomen}</a>`;
        });
    }
};


inputElement.addEventListener('input', function () {
    Search(this.value);
});



const SelectedCounty = async (encodedId) => {
    const id = decodeURIComponent(encodedId);

    steps = steps === "Country" ? "Category" : steps === "Category" ? "Cooperative" : "Country";

    const name = await GetCountryByID(id);

    const selectedcount = document.getElementById('selectedcount');
    if (!selectedcount.classList.contains('selectedcount')) {
        selectedcount.classList.add('selectedcount');
    }
    selectedcount.innerHTML += `<a class="" style="color: #03b07c"> ${name.nomen}:</a>`;

    const nni = document.getElementById('nni');
    nni.value = "";
    nni.placeholder = "Select or search for a category";
    nni.blur();

    const categories = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreeCategorie');
    const countriesid = document.getElementById('countriesid');
    countriesid.innerHTML = "";

    if (categories && categories.length) {
        categoriesServed = categories.filter((de) => de.pays._id === id);
        if (categoriesServed.length) {

            categoriesServed.slice(0, 5).forEach((categor) => {
                const encodedId = encodeURIComponent(categor._id);
                countriesid.innerHTML += `<a class="fingerprin" onclick="SelectedCategory('${encodedId}')">${categor.nomen}</a>`;
            });
        } else {
            categoriesServed = [];
            countriesid.innerHTML = `<a class="fingerprin" style="color: red">No categories for ${name.nomen}</a>`;
        }
    } else {
        countriesid.innerHTML = `<a class="fingerprin" style="color: red">Categories Empty</a>`;
    }
    pays = name.nomen;
    document.getElementById('idpays').innerText = `${displayCharacter(name.nomen)}`;
    document.getElementById('idcategory').innerText = `${categoriesServed.length}`;


    if (name.nomen === "Côte d'Ivoire" || name.telcode === "225") {
        document.getElementById('codivorea').style.display = "block"
    } else {
        console.log(name.nomen);
        document.getElementById('codivorea').style.display = "none"
    }
};



//Category
const SelectedCategory = async (encodedId) => {
    const id = decodeURIComponent(encodedId);

    steps = steps === "Country" ? "Category" : steps === "Category" ? "Cooperative" : "Country";

    const nacategorme = categoriesServed.find((ed) => ed._id === id);

    const selectedcount = document.getElementById('selectedcount');
    if (!selectedcount.classList.contains('selectedcount')) {
        selectedcount.classList.add('selectedcount');
    }
    selectedcount.innerHTML += `<a class="" style="color: #03c98e"> ${nacategorme.nomen}:</a>`;

    const nni = document.getElementById('nni');
    nni.value = "";
    nni.placeholder = "Select or search a cooperative";
    nni.blur();

    const cooperatives = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreeCooperative');
    const countriesid = document.getElementById('countriesid');


    if (cooperatives && cooperatives.length) {
        cooperativeServed = cooperatives.filter((de) => de.categorie._id === id);
        if (cooperativeServed.length) {
            countriesid.innerHTML = "";

            cooperativeServed.slice(0, 5).forEach((coop) => {
                const encodedId = encodeURIComponent(coop._id);
                countriesid.innerHTML += `<a class="fingerprin" onclick="SelectedCooperative('${encodedId}')">${coop.nomen}</a>`;
            });
        } else {
            cooperativeServed = [];
            countriesid.innerHTML = `<a class="fingerprin" style="color: red">No cooperative for ${nacategorme.nomen}</a>`;
        }
    } else {
        countriesid.innerHTML = `<a class="fingerprin" style="color: red">Cooperative Empty</a>`;
    };
    categoryb = nacategorme.nomen;
    document.getElementById('idcategory').innerText = `${displayCharacter(nacategorme.nomen)}`;
    document.getElementById('idcooperative').innerText = `${cooperativeServed.length}`;

    /* document.getElementById('idpays').innerText = `${name.nomen}`;
     document.getElementById('idcategory').innerText = `${categoriesServed.length}`;
     document.getElementById('idcooperative').innerText = `${cooperaa.length}`;
     document.getElementById('idagriculture').innerText = `${agriculteura.length}`;*/
};



//Cooperative
const SelectedCooperative = async (encodedId) => {
    const id = decodeURIComponent(encodedId);

    steps = steps === "Country" ? "Category" : steps === "Category" ? "Cooperative" : "Country";

    const nacategorme = cooperativeServed.find((ed) => ed._id === id);

    const selectedcount = document.getElementById('selectedcount');
    if (!selectedcount.classList.contains('selectedcount')) {
        selectedcount.classList.add('selectedcount');
    }
    if (nacategorme.nom === "RIA-ASCA") {
        document.getElementById('codivorea').style.display = "block"
    } else {
        document.getElementById('codivorea').style.display = "none"
        document.getElementById('codivorea').style.display = "none"
        document.getElementById('codivorea').style.display = "none"
    }

    selectedcount.innerHTML += `<a class="" style="color: #03c98e"> ${nacategorme.nomen}:</a>`;

    document.getElementById('respond').innerHTML = `
                    <div class="odeaaa" id="">   
                        <a  style="height: 50%; width: 50%;" class="" id="" href="en/dashboard/asserts/ESTATIO.pdf"  target="_blank">
                            <img src="en/dashboard/asserts/cafecaca.png"
                            style="height: 50%; width: 50%;" alt="">
                        </a>

                        <a style="height: 50%; width: 30%;" class="" id="" href="en/dashboard/asserts/ascapdd.JPEG"  target="_blank">
                            <img src="en/dashboard/asserts/ascap.png"
                            style="height: 50%; width: 50%;" alt="">
                        </a>
                    </div>



                    <div class="valideuserpar">
                        <div class="guidmessage">
                            <p style="color: #087752;">Click "Validate" to see the farmers</p>
                        </div>
                         <br>
                        <div class="valideuser" id="valideuser">
                            <div id="userface">
                                <img src="../../logo.png" style="height: 85%; width: 85%;" alt="User Face">
                            </div>

                            <div id="countriesdata">
                                <br>
                                <div>
                                    <p>Country: </p>
                                    <p style="color: #ED7D31; font-weight: bold;" id="idpays">${displayCharacter(pays)}</p>
                                </div>

                                <div>
                                    <p>Categories: </p>
                                    <p style="color: #ED7D31; font-weight: bold;" id="idcategory">${displayCharacter(categoryb)}</p>
                                </div>

                                <div>
                                    <p>Coop: </p>
                                    <p style="color: #ED7D31; font-weight: bold;" id="idcooperative">${displayCharacter(nacategorme.nomen)}</p>
                                </div>

                                <div>
                                    <p>Farmers: </p>
                                    <p style="color: #ED7D31; font-weight: bold;" id="idagriculture">1311</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn_older">
                            <a class="btno vali" onclick="LoadAgriculters('${id}')">
                                Validate
                            </a>

                            <a class="btno anul" onclick="CancellAll()">
                                Reset
                            </a>
                        </div>
                    </div>
    
    `;

    //document.getElementById('idagriculture').innerText = `${agriculteura.length}`;

    /* document.getElementById('idpays').innerText = `${name.nomen}`;
     document.getElementById('idcategory').innerText = `${categoriesServed.length}`;
     document.getElementById('idcooperative').innerText = `${cooperaa.length}`;
     document.getElementById('idagriculture').innerText = `${agriculteura.length}`;
     */
};


async function LoadAgriculters(coop_id) {
    const access = sessionStorage.getItem("befree");
    if (access) {
        const main_contaner = document.getElementById('main');
        main_contaner.classList.add('otherstym');
        main_contaner.innerHTML = headers_html;
        const render_agriculter = document.getElementById('render_agriculter');
        render_agriculter.innerHTML = `
         <div style="width: 100%; padding: 10px; border-radius: 10px; background: #ffffff; text-align: center; margin-top: 20px">
            <div style="width: 100%; height: 250px;">
                    <img src="dashboard/loadingc.gif" style="height: 80%; width: 200px;" alt="">
                    <p>Loading ...</p>
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
                         <img src="${agricul.document ? agricul.document : "en/dashboard/asserts/avatay.png"}" alt="product">
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
        }
        style_Beheviors_init()
    } else {
        window.location.href = "en/Autorisation.html"
    }

}


const CancellAll = () => {
    window.location.reload()
}