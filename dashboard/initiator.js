async function LoadFromBackend() {
    const countries = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreePays');
    if (countries) {
        await PostCountries(countries);
        const coopera = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreeCooperative');
        const agriculteur = await requesttoBackend('GET', 'BefreeAgriculter/getAllBefreeAgrulter');
        document.getElementById('idpays').innerText = `${countries.length}`;
        document.getElementById('idcooperative').innerText = `${coopera.length}`;
        document.getElementById('idagriculture').innerText = `${agriculteur.length}`;

    } else {
        document.getElementById('idpays').innerText = `0`;
        document.getElementById('idcooperative').innerText = `0`;
        document.getElementById('idagriculture').innerText = `0`;
    }
}
