function getUrlParameter() {
    const hash = window.location.hash.substring(1);
    return hash;
}



const populateReal = async (id) => {
    const nom = document.getElementById('nom');
    const birth = document.getElementById('birth');
    const social_security = document.getElementById('social_security');
    const phone = document.getElementById('phone');
    const id_proof = document.getElementById('id_proof');
    const expo_nation_id = document.getElementById('expo_nation_id');
    const place_ville = document.getElementById('place_ville');
    const districk = document.getElementById('districk');
    const operatin_area = document.getElementById('operatin_area');
    const number_certified_crop = document.getElementById('number_certified_crop');
    const inspector = document.getElementById('inspector');
    const agrocal_pro = document.getElementById('agrocal_pro');
    const variety_agricul = document.getElementById('variety_agricul');
    const total_es = document.getElementById('total_es');
    const volie = document.getElementById('volie');
    const photo = document.getElementById('photo');
    const qrcode = document.getElementById('qrcode');

    const agriculteurb = await requesttoBackend('GET', `BefreeAgriculter/ByIdItergetBefreeAgrulter/${id}`);
    if (agriculteurb) {
        nom.innerText = agriculteurb.prenom + " " + agriculteurb.nom;
        phone.innerText = agriculteurb.numero_telephone;
        place_ville.innerText = agriculteurb.localite.name;
        districk.innerText = agriculteurb.district.name;
        photo.innerText = agriculteurb.document ? agriculteurb.document : "dashboard/asserts/avatay.png";

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
