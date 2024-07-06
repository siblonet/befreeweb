const coop = "66888184673362ed6bf8cd0e";

const Conneter = async () => {
    const invphone = document.getElementById('invphone').value;
    const loading = document.getElementById('loading');
    if (invphone) {
        loading.removeAttribute("onclick");
        loading.innerText = "En cours ...";
        for (const AGRI of AGRICULTERS) {
            const data = {
                prenom: AGRI.prenom,
                nom: AGRI.nom,
                numero_telephone: AGRI.numero_telephone,
                identifiant_interne_exploitation: AGRI.identifiant_interne_exploitation,
                numero_etat_civil: AGRI.numero_etat_civil,
                numero_piece_identite: AGRI.numero_piece_identite,
                numero_securite_sociale: AGRI.numero_securite_sociale,
                numero_identification_national: AGRI.numero_identification_national,
                genre: AGRI.genre,
                annee_naissance: AGRI.annee_naissance,
                localite: AGRI.localite,
                district: AGRI.district,
                region_inspection: AGRI.region_inspection,
                cooperative: coop,
                document: AGRI.document,
                qrcode: AGRI.qrcode,
            };

            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            await fetch("https://nuance-doud.adaptable.app/BefreeAgriculter//", options);
            //const responseData = await response.json();
        }
        loading.innerText = "EXECUTE";
        document.getElementById('linkmessa').innerHTML = `
                    <legend style="color: #1abc9c;">
                        <span class="erro">1</span>
                        Successfull
                    </legend>
                `;

        /*
        
                const messages = document.getElementById('messageslogin');
                messages.classList.add("form-style-5");
                messages.innerHTML = `
                        <form>
                            <fieldset id="linkmessa"></fieldset>
                        </form>
                    `;
        
                if (!response.ok) {
                    document.getElementById('linkmessa').innerHTML = `
                            <legend style="color: #bc1a42;">
                                <span class="erro">1</span>
                                Échec, vérifiez votre connexion ou essayez plus tard.
                            </legend>
                        `;
                    setTimeout(() => {
                        messages.innerHTML = "";
                        messages.classList.remove("form-style-5");
                    }, 3000);
        
                    loading.setAttribute("onclick", "Conneter()");
                    loading.innerText = "EXECUTE";
                } else if (responseData._id) {
                    loading.setAttribute("onclick", "Conneter()");
                    loading.innerText = "EXECUTE";
                    document.getElementById('linkmessa').innerHTML = `
                                <legend style="color: #1abc9c;">
                                    <span class="erro">1</span>
                                    Successfull
                                </legend>
                            `;
        
                    setTimeout(() => {
                        messages.innerHTML = "";
                        messages.classList.remove("form-style-5");
                    }, 3000);
        
                } else {
                    document.getElementById('linkmessa').innerHTML = `
                    <legend style="color: #bc1a42;">
                        <span class="erro">1</span>
                        Information inccorrect.
                    </legend>
                `;
        
                    setTimeout(() => {
                        messages.innerHTML = "";
                        messages.classList.remove("form-style-5");
                    }, 3000);
                    loading.setAttribute("onclick", "Conneter()");
                    loading.innerText = "EXECUTE";
                }
        */
    }
};

