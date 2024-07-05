
const inputElement = document.getElementById('nni');

const Search = async (nni) => {
    if (nni && nni.length) {
        const countries = await GetAllCountries();

        const country = countries.filter((eds) => eds.nom.startsWith(nni) || eds.telcode.startsWith(nni));
        const countriesid = document.getElementById('countriesid');

        if (country.length) {
            countriesid.innerHTML = "";

            country.forEach((pays, index) => {
                countriesid.innerHTML += `<a class="fingerprin">${pays.nom}</a>`;
            });

        } else if(nni.length > 3){
            countriesid.innerHTML = `<a class="fingerprin" style="color: red">${nni} N'y est pas!</a>`;

        }
    } else if (inputElement.value) {
        const nnia = inputElement.value;
        const countries = await GetAllCountries();

        const country = countries.filter((eds) => eds.nom.startsWith(nnia) || eds.telcode.startsWith(nnia));
        if (country.length) {
            document.getElementById('nni').blur();


            const countriesid = document.getElementById('countriesid');
            countriesid.innerHTML = "";

            country.forEach((pays, index) => {
                countriesid.innerHTML += `<a class="fingerprin">${pays.nom}</a>`;
            });

        } else {
            const countriesid = document.getElementById('countriesid');
            countriesid.innerHTML = `<a class="fingerprin" style="color: red>${nnia} N'y est pas!</a>`;
        }
    };
}



inputElement.addEventListener('input', function () {
    Search(this.value);
});




