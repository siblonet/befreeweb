let countries = 0;
let category = 0;
let coopera = 0;
let agriculteur = 0;

async function LoadFromBackend() {
    const tokena = sessionStorage.getItem('befree');

    if (!tokena) {
        const countriesa = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreePays');

        if (countriesa) {
            await clearCountries();
            await PostCountries(countriesa);
            const categorya = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreeCategorie');
            const cooperaa = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreeCooperative');
            const agriculteura = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreeAgrulter');
            //console.log(cooperaa);

            countries = countriesa.length;
            category = categorya.length;
            coopera = cooperaa.length0;
            agriculteur = agriculteura.length;

            document.getElementById('idpays').innerText = `${countriesa.length}`;
            document.getElementById('idcategory').innerText = `${categorya.length}`;
            document.getElementById('idcooperative').innerText = `${cooperaa.length}`;
            document.getElementById('idagriculture').innerText = `${agriculteura.length}`;

        } else {
            countries = 0;
            category = 0;
            coopera = 0;
            agriculteur = 0;
            document.getElementById('idpays').innerText = `0`;
            document.getElementById('idcategory').innerText = `0`;
            document.getElementById('idcooperative').innerText = `0`;
            document.getElementById('idagriculture').innerText = `0`;
        }
    }

}
