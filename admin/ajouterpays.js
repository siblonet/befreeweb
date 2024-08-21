var wrappera = $("#button-wrapperb");


$(".bb").click(function () {
    if (wrappera.not(".checked")) {
        wrappera.addClass("checked");
        setTimeout(function () {
            wrappera.removeClass("checked");
        }, 8000);
    };

    ajouterPays()
});

const ajouterPays = async () => {
    const nomfrench = document.getElementById('nomfrench').value;
    const nomenglish = document.getElementById('nomenglish').value;
    const extension_pays = document.getElementById('extension_pays').value;

    if (nomfrench, nomenglish) {
        const data = {
            nom: nomfrench,
            nomen: nomenglish,
            telcode: extension_pays
        };

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch("https://nuance-doud.adaptable.app/BefreeAgriculter/postBefreePays", options);
        if (!response.ok) {
            alert("Échec, vérifiez votre connexion ou essayez plus tard.");
        } else if (response) {
            //const responseData = await response.json();
        }

    } else {
        alert("Les 2 premier champe sont obligatoire")
    }

}

