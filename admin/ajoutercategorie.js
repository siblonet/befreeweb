var wrappera = $("#button-wrapperb");

$(".bb").click(function () {
    if (wrappera.not(".checked")) {
        wrappera.addClass("checked");
        setTimeout(function () {
            wrappera.removeClass("checked");
        }, 8000);
    };

    ajouterCategorie()
});


const paysListing = document.getElementById("pays_listing");
async function Loada1() {
    const listofpay = await requesttoBackend('GET', `BefreeAgriculter/getAllBefreePays`);

    if (listofpay && listofpay.length) {
        paysListing.innerHTML = "";
        listofpay.forEach(pays => {
            paysListing.innerHTML += `<option value="${pays._id}">${pays.nom}</option>`;
        });
    }
}

Loada1()
const ajouterCategorie = async () => {
    var id_pays = "";
    paysListing.addEventListener('change', async function () {
        id_pays = this.value;
    });

    const nomfrench = document.getElementById('nomfrench').value;
    const nomenglish = document.getElementById('nomenglish').value;

    if (nomfrench, nomenglish) {
        const data = {
            name: nomfrench,
            nomen: nomenglish,
            pays: id_pays
        };

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch("https://nuance-doud.adaptable.app/BefreeAgriculter/postBefreeCategorie", options);
        if (!response.ok) {
            alert("Échec, vérifiez votre connexion ou essayez plus tard.");
        } else if (response) {
            //const responseData = await response.json();
        }

    } else {
        alert("Les champes sont obligatoire")
    }

}

