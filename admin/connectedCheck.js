let AGRICO = [];

function getAdmin() {
    const token = sessionStorage.getItem('befree');
    if (token) {
        const splo = token.split("°");
        const name = splo[1];
        const phone = splo[2];
        document.getElementById('userna').innerHTML = `<i class="lnr lnr-user"></i> ${name}`;
        document.getElementById('userph').innerHTML = `<i class="lnr lnr-lock"></i> ${phone}`;
        const diconnector = document.getElementById('diconnector');
        diconnector.setAttribute("onclick", `Disconnect('diconnect')`);

        diconnector.innerHTML = `
        <i class="lnr lnr-power-switch" style="color: red;"></i>Déconnecter
        `;

        Executa()
    } else {
        document.getElementById('userna').innerHTML = `<i class="lnr lnr-user"></i> Visiteur`;
        document.getElementById('userph').innerHTML = `<i class="lnr lnr-lock"></i> 457000`;
    }
};

const Executa = async () => {
    const main_contaner = document.getElementById('main');
    main_contaner.classList.add('otherstym');
    main_contaner.innerHTML = headers_html;
    const render_agriculter = document.getElementById('render_agriculter');
    render_agriculter.innerHTML = `
        <div style="width: 100%; padding: 10px; border-radius: 10px; background: #ffffff; text-align: center; margin-top: 20px">
            <div style="width: 100%; height: 250px;">
                    <img src="admin/loadingc.gif" style="height: 80%; width: 200px;" alt="">
                    <p>En cours ...</p>
            </div>
        </div>
        `;


    document.getElementById('data_to_load').addEventListener('change', function () {
        const selectedValue = this.value;
        FilterRender(selectedValue);

        if (selectedValue === 'getAllBefreePays') {
            document.getElementById('loaded_data').innerText = "Pays";

        } else if (selectedValue === 'getAllBefreeCategorie') {
            document.getElementById('loaded_data').innerText = "Catégories";
        } else if (selectedValue === 'getAllBefreeCooperative') {
            document.getElementById('loaded_data').innerText = "Coopérative";
        }
    });

    const agriculteurb = await requesttoBackend('GET', `BefreeAgriculter/getAllBefreePays`);

    if (agriculteurb && agriculteurb.length) {
        console.log(agriculteurb);
        document.getElementById('agri_lenthg').innerText = `Total: ${agriculteurb.length}`;
        AGRICO = agriculteurb;
        render_agriculter.innerHTML = "";
        agriculteurb.forEach((agricul) => {
            const agriculHtml = `
         <a class="products-row clicbleclass" href="editable#${agricul._id}"  target="_blank">
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
                         <img src="${agricul.document ? agricul.document : "./asserts/flage.png"}" alt="product">
                         <span>${agricul.nom}</span>
                     </div>
                     <div class="product-cell category">
                         <span class="cell-label">Nom Englais:</span>
                         ${!agricul.nomen ? "Vide" : agricul.nomen}
                     </div>
                     <div class="product-cell status-cell">
                         <span class="cell-label">Extension:</span>
                         <span class="status ${agricul.telcode === "225" ? "active" : "disabled"}">${!agricul.telcode ? "000" : agricul.telcode}</span>
                     </div>
                 </a>

         `;
            render_agriculter.innerHTML += agriculHtml;
        });
    }
    style_Beheviors_init()
}

const FilterRender = async (url) => {
    const render_agriculter = document.getElementById('render_agriculter');
    render_agriculter.innerHTML = `
        <div style="width: 100%; padding: 10px; border-radius: 10px; background: #ffffff; text-align: center; margin-top: 20px">
            <div style="width: 100%; height: 250px;">
                    <img src="admin/loadingc.gif" style="height: 80%; width: 200px;" alt="">
                    <p>En cours ...</p>
            </div>
        </div>
        `;

    const agriculteurb = await requesttoBackend('GET', `BefreeAgriculter/${url}`);

    if (agriculteurb && agriculteurb.length) {
        console.log(agriculteurb);
        document.getElementById('agri_lenthg').innerText = `Total: ${agriculteurb.length}`;
        AGRICO = agriculteurb;
        render_agriculter.innerHTML = "";
        agriculteurb.forEach((agricul) => {
            const agriculHtml = `
         <a class="products-row clicbleclass" href="editable#${agricul._id}"  target="_blank">
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
                         <img src="${agricul.document ? agricul.document : "./asserts/flage.png"}" alt="product">
                         <span>${agricul.nom ? agricul.nom : agricul.name}</span>
                     </div>
                     <div class="product-cell category">
                         <span class="cell-label">Nom Englais:</span>
                         ${!agricul.nomen ? "Vide" : agricul.nomen}
                     </div>
                     <div class="product-cell status-cell">
                         <span class="cell-label">${url === "getAllBefreePays" ? "Extension" : "Id du Pays"}</span>
                         <span class="status ${agricul.telcode === "225" ? "active" : "disabled"}">${!agricul.telcode ? agricul.pays ? agricul.pays : agricul.categorie ? agricul.categorie : "000" : agricul.telcode}</span>
                     </div>
                 </a>

         `;
            render_agriculter.innerHTML += agriculHtml;
        });
    }
}


function ChercheAgriculters(coop_id = "0") {
    const render_agriculter = document.getElementById('render_agriculter');
    const agriculteurb = AGRICO.filter((eds) =>
        eds.nom.startsWith(coop_id.toUpperCase()) ||
        eds.telcode.startsWith(coop_id.toLowerCase()) ||
        eds.nomen.startsWith(capitalize(coop_id)) ||
        eds.nom.startsWith(coop_id) ||
        eds.nomen.startsWith(coop_id)
    );

    if (agriculteurb && agriculteurb.length) {
        render_agriculter.innerHTML = "";
        agriculteurb.forEach((agricul) => {
            const agriculHtml = `
                <a class="products-row clicbleclass" href="editable#${agricul._id}"  target="_blank">
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
                         <img src="${agricul.document ? agricul.document : "./asserts/flage.png"}" alt="product">
                         <span>${agricul.nom}</span>
                     </div>
                     <div class="product-cell category">
                         <span class="cell-label">Nom Englais:</span>
                         ${!agricul.nomen ? "Vide" : agricul.nomen}
                     </div>
                     <div class="product-cell status-cell">
                         <span class="cell-label">Extension:</span>
                         <span class="status ${agricul.telcode === "225" ? "active" : "disabled"}">${!agricul.telcode ? "000" : agricul.telcode}</span>
                     </div>
                 </a>

                `;
            render_agriculter.innerHTML += agriculHtml;
        });
    } else if (coop_id.length < 2 && AGRICO.length > 0) {
        render_agriculter.innerHTML = "";
        AGRICO.forEach((agricul) => {
            const agriculHtml = `
                <a class="products-row clicbleclass" href="editable#${agricul._id}"  target="_blank">
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
                         <img src="${agricul.document ? agricul.document : "./asserts/flage.png"}" alt="product">
                         <span>${agricul.nom}</span>
                     </div>
                     <div class="product-cell category">
                         <span class="cell-label">Nom Englais:</span>
                         ${!agricul.nomen ? "Vide" : agricul.nomen}
                     </div>
                     <div class="product-cell status-cell">
                         <span class="cell-label">Extension:</span>
                         <span class="status ${agricul.telcode === "225" ? "active" : "disabled"}">${!agricul.telcode ? "000" : agricul.telcode}</span>
                     </div>
                 </a>

                `;
            render_agriculter.innerHTML += agriculHtml;
        });
    }

}

function Disconnect(what) {
    if (what === "connecter") {
        window.location.href = "../fr/Autorisation.html"
    } else {
        sessionStorage.clear();
        window.location.reload();
        const diconnector = document.getElementById('diconnector');
        diconnector.setAttribute("onclick", `Disconnect('connecter')`);

        diconnector.innerHTML = `
        <i class="lnr lnr-enter" style="color: red;"></i>Connecter
        `;

    }
}


getAdmin();