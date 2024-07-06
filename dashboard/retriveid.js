function getUrlParameter() {
    const hash = window.location.hash.substring(1);
    return hash;
}



const populateReal = async (id) => {
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const genre = document.getElementById('genre');
    const annee_naissance = document.getElementById('annee_naissance');
    const phone = document.getElementById('phone');
    const identifant_interne_exploitaion = document.getElementById('identifant_interne_exploitaion');
    const numero_etat_civil = document.getElementById('numero_etat_civil');
    const numero_piece_identite = document.getElementById('numero_piece_identite');
    const numero_securite_sociale = document.getElementById('numero_securite_sociale');
    const localite = document.getElementById('localite');
    const district = document.getElementById('district');


    const superficie_exploitation = document.getElementById('superficie_exploitation');
    const type_exploitation_agricole = document.getElementById('type_exploitation_agricole');
    const nombre_unite_agricole = document.getElementById('nombre_unite_agricole');
    const nombre_culture_certifiees = document.getElementById('nombre_culture_certifiees');
    const inspecteur = document.getElementById('inspecteur');
    const nom_proprietaire_exploitation = document.getElementById('nom_proprietaire_exploitation');
    const prenom_proprietaire_exploitation = document.getElementById('prenom_proprietaire_exploitation');
    const numero_telephone_proprietaire_exploitation = document.getElementById('numero_telephone_proprietaire_exploitation');





    const photo = document.getElementById('photo');
    const qrcode = document.getElementById('qrcode');

    const agriculteurb = await requesttoBackend('GET', `BefreeAgriculter/ByIdItergetBefreeAgrulter/${id}`);
    if (agriculteurb) {
        //console.log(agriculteurb);
        nom.value = agriculteurb.nom;
        prenom.value = agriculteurb.prenom;
        genre.value = agriculteurb.genre === "h" ? "Homme" : agriculteurb.genre === "H" ? "Homme" : "Femme";
        annee_naissance.value = agriculteurb.annee_naissance;
        phone.value = agriculteurb.numero_telephone;
        identifant_interne_exploitaion.value = agriculteurb.identifant_interne_exploitaion;

        numero_etat_civil.value = agriculteurb.numero_etat_civil;
        numero_piece_identite.value = agriculteurb.numero_piece_identite;
        localite.value = agriculteurb.localite.name;
        district.value = agriculteurb.district.name;



        photo.src = agriculteurb.document ? agriculteurb.document : "./asserts/avatay.png";
        qrcode.innerHTML = '';
        new QRCode(qrcode, {
            text: agriculteurb.qrcode ? agriculteurb.qrcode : 'Vide',
            width: 128,
            height: 128
        });

    }

}

const retriva = getUrlParameter();

if (!retriva || retriva.length < 5) {
    console.log(retriva);
    //window.location.href = "/";
} else {
    populateReal(retriva);
}
