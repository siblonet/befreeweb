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

    const latitute = document.getElementById('latitute');
    const longitude = document.getElementById('longitude');
    const map = document.getElementById('map');





    const photo = document.getElementById('photo');
    const qrcode = document.getElementById('qrcode');

    const agriculteurb = await requesttoBackend('GET', `BefreeAgriculter/ByIdItergetBefreeAgrulter/${id}`);

    if (agriculteurb.agriculter) {
        //console.log(agriculteurb);
        nom.value = agriculteurb.agriculter.nom;
        prenom.value = agriculteurb.agriculter.prenom;
        genre.value = agriculteurb.agriculter.genre === "h" ? "Homme" : agriculteurb.agriculter.genre === "H" ? "Homme" : "Femme";
        annee_naissance.value = agriculteurb.agriculter.annee_naissance;
        phone.value = agriculteurb.agriculter.numero_telephone;
        identifant_interne_exploitaion.value = agriculteurb.agriculter.identifant_interne_exploitaion;

        numero_etat_civil.value = agriculteurb.agriculter.numero_etat_civil;
        numero_piece_identite.value = agriculteurb.agriculter.numero_piece_identite;
        numero_securite_sociale.value = agriculteurb.agriculter.numero_securite_sociale;
        localite.value = agriculteurb.agriculter.localite.name;
        district.value = agriculteurb.agriculter.district.name;

        photo.src = agriculteurb.agriculter.document ? agriculteurb.agriculter.document : "dashboard/asserts/avatay.png";
        qrcode.innerHTML = '';
        new QRCode(qrcode, {
            text: agriculteurb.agriculter.qrcode ? agriculteurb.agriculter.qrcode : 'Vide',
            width: 128,
            height: 128
        });
    }

    if (agriculteurb.agriculture) {

        superficie_exploitation.value = agriculteurb.agriculture.superficie_exploitation;
        type_exploitation_agricole.value = agriculteurb.agriculture.type_exploitation_agricole;
        nombre_unite_agricole.value = agriculteurb.agriculture.nombre_unite_agricole;
        nombre_culture_certifiees.value = agriculteurb.agriculture.nombre_culture_certifiees;
        inspecteur.value = agriculteurb.agriculture.inspecteur.name;
        nom_proprietaire_exploitation.value = agriculteurb.agriculture.nom_proprietaire_exploitation;
        prenom_proprietaire_exploitation.value = agriculteurb.agriculture.prenom_proprietaire_exploitation;
        numero_telephone_proprietaire_exploitation.value = agriculteurb.agriculture.numero_telephone_proprietaire_exploitation;
        latitute.value = agriculteurb.agriculture.latitute;
        longitude.value = agriculteurb.agriculture.longitude;
        map.href = `https://www.google.com/maps?q=${agriculteurb.agriculture.latitute},${agriculteurb.agriculture.longitude}`;;

    }

}

const retriva = getUrlParameter();

if (!retriva || retriva.length < 5) {
    console.log(retriva);
    //window.location.href = "/";
} else {
    populateReal(retriva);
}
