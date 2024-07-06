let AGRICO = [];

function getAdmin() {
    const token = sessionStorage.getItem('befree');
    if (token) {
        const splo = token.split("°");
        const name = splo[1];
        const phone = splo[2];

        document.getElementById('userna').innerHTML = `<i class="lnr lnr-user"></i> ${name}`;
        document.getElementById('userph').innerHTML = `<i class="lnr lnr-phone-handset"></i> ${phone}`;
        LoadFromBackend();
        Executa()
    } else {
        document.getElementById('userna').innerHTML = `<i class="lnr lnr-user"></i> Visiteur`;
        document.getElementById('userph').innerHTML = `<i class="lnr lnr-phone-handset"></i> 457000`;
        LoadFromBackend()
    }
};

const Executa = async () => {
    const main_contaner = document.getElementById('main');
    main_contaner.classList.add('otherstym');
    main_contaner.innerHTML = headers_html;
    const render_agriculter = document.getElementById('render_agriculter');
    render_agriculter.innerHTML = `
        <div style="width: 100%; padding: 10px; border-radius: 10px; background: #ffffff; text-align: center;">
            <div style="width: 100%; height: 250px;">
                    <img src="dashboard/loadingc.gif" style="height: 80%; width: 200px;" alt="">
                    <p>En cours ...</p>
            </div>
        </div>
        `;
    const agriculteurb = await requesttoBackend('GET', `BefreeAgriculter/getAllBefreeAgrulter`);
    if (agriculteurb && agriculteurb.length) {
        AGRICO = agriculteurb;
        document.getElementById('agri_lenthg').innerText = agriculteurb.length;
        render_agriculter.innerHTML = "";
        agriculteurb.forEach((agricul) => {
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
                         <span class="cell-label">Année de naissance:</span>
                         ${agricul.annee_naissance}
                     </div>
                     <div class="product-cell status-cell">
                         <span class="cell-label">Genre:</span>
                         <span class="status ${agricul.genre === "h" ? "active" : agricul.genre === "H" ? "active" : "disabled"}">${agricul.genre === "h" ? "Homme" : agricul.genre === "H" ? "Homme" : "Femme"}</span>
                     </div>
                     <div class="product-cell sales">
                         <span class="cell-label">Prénom:</span>
                         ${agricul.prenom}
                     </div>
                     <div class="product-cell stock">
                         <span class="cell-label">Nom:</span>
                         ${agricul.nom}
                     </div>
                     <div class="product-cell price">
                         <span class="cell-label">Prenom:</span>
                         ${agricul.numero_telephone}
                     </div>
                 </a>

         `;
            render_agriculter.innerHTML += agriculHtml;
        });
    }
    style_Beheviors_init()
}



function ChercheAgriculters(coop_id = "0") {
    const render_agriculter = document.getElementById('render_agriculter');
    const agriculteurb = AGRICO.filter((eds) =>
        eds.identifiant_interne_exploitation.startsWith(coop_id.toUpperCase()) ||
        eds.identifiant_interne_exploitation.startsWith(coop_id.toLowerCase()) ||
        eds.identifiant_interne_exploitation.startsWith(capitalize(coop_id)) ||
        eds.identifiant_interne_exploitation.startsWith(coop_id)
    );

    if (agriculteurb && agriculteurb.length) {
        render_agriculter.innerHTML = "";
        agriculteurb.forEach((agricul) => {
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
                                <span class="cell-label">Année de naissance:</span>
                                ${agricul.annee_naissance}
                            </div>
                            <div class="product-cell status-cell">
                                <span class="cell-label">Genre:</span>
                         <span class="status ${agricul.genre === "h" ? "active" : agricul.genre === "H" ? "active" : "disabled"}">${agricul.genre === "h" ? "Homme" : agricul.genre === "H" ? "Homme" : "Femme"}</span>
                            </div>
                            <div class="product-cell sales">
                                <span class="cell-label">Prénom:</span>
                                ${agricul.prenom}
                            </div>
                            <div class="product-cell stock">
                                <span class="cell-label">Nom:</span>
                                ${agricul.nom}
                            </div>
                            <div class="product-cell price">
                                <span class="cell-label">Prenom:</span>
                                ${agricul.numero_telephone}
                            </div>
                        </a>

                `;
            render_agriculter.innerHTML += agriculHtml;
        });
    } else if (coop_id.length < 2 && AGRICO.length > 0) {
        render_agriculter.innerHTML = "";
        AGRICO.forEach((agricul) => {
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
                                <span class="cell-label">Année de naissance:</span>
                                ${agricul.annee_naissance}
                            </div>
                            <div class="product-cell status-cell">
                                <span class="cell-label">Genre:</span>
                         <span class="status ${agricul.genre === "h" ? "active" : "disabled"}">${agricul.genre === "h" ? "Homme" : "Femme"}</span>
                            </div>
                            <div class="product-cell sales">
                                <span class="cell-label">Prénom:</span>
                                ${agricul.prenom}
                            </div>
                            <div class="product-cell stock">
                                <span class="cell-label">Nom:</span>
                                ${agricul.nom}
                            </div>
                            <div class="product-cell price">
                                <span class="cell-label">Prenom:</span>
                                ${agricul.numero_telephone}
                            </div>
                        </a>

                `;
            render_agriculter.innerHTML += agriculHtml;
        });
    }

}

function Disconnect() {
    sessionStorage.clear();
    window.location.reload()
}
getAdmin();