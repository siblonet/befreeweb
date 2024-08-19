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

    if (agriculteurb.nom) {
        const agricu = await requesttoBackend('GET', `BefreeAgriculter/getByIdBefreeAgrulter/${agriculteurb._id}`);
    
        nom.value = agricu.operateur.nom;
        prenom.value = agricu.operateur.prenom;
        genre.value = agricu.operateur.genre;
        annee_naissance.value = agricu.operateur.annee_naissance;
        phone.value = agricu.operateur.numero_telephone;
        numero_etat_civil.value = agricu.operateur.numero_etat_civil;
        numero_piece_identite.value = agricu.operateur.numero_piece_identite;
        numero_securite_sociale.value = agricu.operateur.numero_securite_sociale;
        identifant_interne_exploitaion.value = agricu.operateur.identifant_interne_exploitaion;

        photo.src = agricu.operateur.document ? agricu.operateur.document : "dashboard/asserts/avatay.png";
        qrcode.innerHTML = '';
        new QRCode(qrcode, {
            text: agricu.operateur.qrcode ? agricu.operateur.qrcode : 'Vide',
            width: 128,
            height: 128
        });

        if (agricu.agricole.localite.name) {
            localite.value = agricu.agricole.localite.name;
            district.value = agricu.agricole.district.name;
            superficie_exploitation.value = agricu.agricole.superficie_exploitation;
            type_exploitation_agricole.value = agricu.agricole.type_exploitation_agricole;
            nombre_unite_agricole.value = agricu.agricole.nombre_unite_agricole;
            nombre_culture_certifiees.value = agricu.agricole.nombre_culture_certifiees;
            latitute.value = agricu.agricole.latitute;
            longitude.value = agricu.agricole.longitude;
            map.href = `https://www.google.com/maps?q=${agricu.agricole.latitute},${agricu.agricole.longitude}`;
        }


        if (agricu.proprierteur.nom) {
            nom_proprietaire_exploitation.value = agricu.proprierteur.nom;
            prenom_proprietaire_exploitation.value = agricu.proprierteur.prenom;
            numero_telephone_proprietaire_exploitation.value = agricu.proprierteur.numero_telephone;
        }

        if (agricu.inspecteur.prenom) {
            inspecteur.value = agricu.inspecteur.prenom + " " + agricu.inspecteur.nom;
            //identifant_interne_exploitaion.value = agricu.inspecteur.identifant_interne_exploitaion;
        }
    }

}

const retriva = getUrlParameter();

if (!retriva || retriva.length < 5) {
    console.log(retriva);
    //window.location.href = "/";
} else {
    populateReal(retriva);
}
