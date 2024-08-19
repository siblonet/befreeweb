function getUrlParameter() {
    const hash = window.location.hash.substring(1);
    return hash;
}



const populateReal = async (id) => {
    alert(id);
    /*const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const genre = document.getElementById('genre');



    if (agriculteurb.nom) {
        const agricu = await requesttoBackend('GET', `BefreeAgriculter/getByIdBefreeAgrulter/${agriculteurb._id}`);
        nom.value = agricu.operateur.nom;
        prenom.value = agricu.operateur.prenom;
        genre.value = agricu.operateur.genre;
    }*/

}


const retriva = getUrlParameter();

if (!retriva || retriva.length < 5) {
    console.log(retriva);
    //window.location.href = "/";
} else {
    populateReal(retriva);
}
