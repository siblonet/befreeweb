var wrappera = $("#button-wrapperb");

$(".bb").click(function () {
    if (wrappera.not(".checked")) {
        wrappera.addClass("checked");
        setTimeout(function () {
            wrappera.removeClass("checked");
        }, 8000);
    };

    ajouterCooperative()
});


const categorieListing = document.getElementById("categorie_listing");

const listofcategorie = await requesttoBackend('GET', `BefreeAgriculter/getAllBefreeCategorie`);
if (listofcategorie && listofcategorie.length) {
    categorieListing.innerHTML = "";
    listofcategorie.forEach(catego => {
        categorieListing.innerHTML += `<option value="${catego._id}">${catego.name}</option>`;
    });
}

const ajouterCooperative = async () => {
    var id_categorie = "";
    categorieListing.addEventListener('change', async function () {
        id_categorie = this.value;
    });

    const nomfrench = document.getElementById('nomfrench').value;

    if (nomfrench) {
        const data = {
            nom: nomfrench,
            nomen: nomfrench,
            categorie: id_categorie
        };

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch("https://nuance-doud.adaptable.app/BefreeAgriculter/postBefreeCooperative", options);
        if (!response.ok) {
            alert("Échec, vérifiez votre connexion ou essayez plus tard.");
        } else if (response) {
            //const responseData = await response.json();
        }

    } else {
        alert("Les 2 champes sont obligatoire")
    }

}

