function getUrlParameter() {
    const hash = window.location.hash.substring(1);
    return hash;
}

function decodeUrlData(encodedData) {
    const decodedData = decodeURIComponent(encodedData);
    return decodedData;
}



var wrappera = $("#button-wrappera");
var wrapperb = $("#button-wrapperb");


async function Deleteitem(what, id) {
    var result = window.confirm("Voulez vous vraiment supprimer?");

    if (result) {
        const response = await requesttoBackend('DELETE', `BefreeAgriculter/${what}/${id}`);
        if (!response) {
            alert("Échec, vérifiez votre connexion ou essayez plus tard.");
        } else if (response) {

        }
    }
}

async function Updateitem(what, id, data) {
    var result = window.confirm("Voulez vous vraiment modifier?");

    if (result) {
        var datoo;
        if (data.what === "Pays") {
            datoo = {
                nom: data.name1,
                nomen: data.name2,
                telcode: data.lastdata
            }
        } else if (data.what === "Cooperative") {
            datoo = {
                nom: data.name1,
                nomen: data.name2,
            }
        } else {
            datoo = {
                name: data.name1,
                nomen: data.name2,
            }
        };

        const response = await requesttoBackend('PUT', `BefreeAgriculter/${what}/${id}`, datoo);
        if (!response) {
            alert("Échec, vérifiez votre connexion ou essayez plus tard.");
        } else if (response) {


        }
    }
}

function removeFirstThreeChars(str) {
    return str.slice(6);
}


const populateReal = async (doo) => {
    const decodedString = decodeUrlData(doo);

    const dato = decodedString.split(":");
    const y_id = dato[0];
    const y_nom = dato[1];
    const y_prenom = dato[2];
    const y_extension_pays_categorie = dato[3];
    const catego = dato[4];
    const extension = dato[5];

    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const extension_pays_categorie = document.getElementById('genre');
    nom.value = y_nom;
    prenom.value = y_prenom;
    extension_pays_categorie.value = y_extension_pays_categorie;


    document.getElementById('catego').innerText = catego;
    document.getElementById('extension').innerText = `${extension === 'getAllBefreePays' ? 'Extension' : extension === 'getAllBefreeCooperative' ? 'Catégories' : 'Pays'}`;


    $(".bb").click(function () {
        if (wrapperb.not(".checked")) {
            wrapperb.addClass("checked");
            setTimeout(function () {
                wrapperb.removeClass("checked");
            }, 8000);
        };

        const fram = {
            name1: nom.value,
            name2: prenom.value,
            lastdata: extension_pays_categorie.value,
            what: `${extension === 'getAllBefreePays' ? 'Pays' : extension === 'getAllBefreeCooperative' ? 'Cooperative' : 'Categorie'}`
        };

        Updateitem(`update${removeFirstThreeChars(extension)}`, y_id, fram)
    });


    $(".aa").click(function () {
        if (wrappera.not(".checked")) {
            wrappera.addClass("checked");
            setTimeout(function () {
                wrappera.removeClass("checked");
            }, 8000);
        };
        Deleteitem(`delete${removeFirstThreeChars(extension)}`, y_id)
    });

}


const retriva = getUrlParameter();

if (!retriva || retriva.length < 5) {
    console.log(retriva);
    //window.location.href = "/";
} else {
    populateReal(retriva);
}

