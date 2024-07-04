//import { requesttoBackendFormat } from './httpsRequester.js';

const VerificatingAuthen = async () => {
    let token = sessionStorage.getItem('oneci');

    const nni = document.getElementById('nni').value; // = "0";
    const FIRST_NAME = document.getElementById('first_name').value; // = "0";
    const LAST_NAME = document.getElementById('last_name').value; // = "0";
    const BIRTH_DATE = document.getElementById('date').value; // = "0";
    const GENDER = document.getElementById('gender').value; // = "";

    if (FIRST_NAME, LAST_NAME, BIRTH_DATE, GENDER, token) {
        const formData = new FormData();
        formData.append('FIRST_NAME', FIRST_NAME);
        formData.append('LAST_NAME', LAST_NAME);
        formData.append('BIRTH_DATE', BIRTH_DATE);
        formData.append('GENDER', GENDER);
        formData.append('BIRTH_TOWN', '');
        formData.append('BIRTH_COUNTRY', '');
        formData.append('NATIONALITY', '');
        formData.append('RESIDENCE_ADR_1', '');
        formData.append('RESIDENCE_ADR_2', '');
        formData.append('RESIDENCE_TOWN', '');
        formData.append('MOTHER_UIN', '');
        formData.append('FATHER_UIN', '');
        formData.append('ID_CARD_NUMBER', '');
        formData.append('SPOUSE_NAME', '');
        formData.append('FATHER_FIRST_NAME', '');
        formData.append('FATHER_LAST_NAME', '');
        formData.append('FATHER_BIRTH_DATE', '');
        formData.append('MOTHER_FIRST_NAME', '');
        formData.append('MOTHER_LAST_NAME', '');
        formData.append('MOTHER_BIRTH_DATE', '');


        const response = await requesttoBackendFormat('POST', `${rnppUrl}/oneci/persons/${nni}/match`, token, formData);
        //const response = await requesttoBackendAtrubi('GET', `${rnppUrl}/oneci/persons/${nni}?attributeNames=FIRST_NAME&attributeNames=LAST_NAME&attributeNames=BIRTH_DATE&attributeNames=GENDER&attributeNames=BIRTH_COUNTRY`, token);
        const focusedElement = document.activeElement;

        if (focusedElement && ['INPUT', 'TEXTAREA'].includes(focusedElement.tagName)) {
            focusedElement.blur();
        }
        window.scrollTo(0, 0);

        if (response) {
            document.getElementById('messago').innerHTML = `<p style="color: #028a61; font-weight: bold;">${nni} est valide !</p>`;

            setTimeout(() => {
                document.getElementById('messago').innerHTML = ``;
            }, 7000);
        } else {
            document.getElementById('messago').innerHTML = `<p style="color: red; font-weight: bold;">${nni} Introuvable!</p>`;

            setTimeout(() => {
                document.getElementById('messago').innerHTML = ``;
            }, 7000);

        }
    }
}


