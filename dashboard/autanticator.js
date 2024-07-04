async function Inscription() {

    const fname = document.getElementById('first_name').value;
    const lname = document.getElementById('last_name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('passwordconfir').value;

    if (fname != "" && lname != "" && password != "") {

        if (password === confirm) {
            document.getElementById('connexion').innerHTML = "En cours ...";


            const person = {
                prenom: fname,
                nom: lname,
                motdepass: password,
                phone: phone,
                owner: "instapay"
            };


            const response = await requesttoBackendJson('POST', `${baseurl}instapay`, person);
            if (response && response.ee) {
                const focusedElement = document.activeElement;

                if (focusedElement && ['INPUT', 'TEXTAREA'].includes(focusedElement.tagName)) {
                    focusedElement.blur();
                }
                window.scrollTo(0, 0);

                document.getElementById('messago').innerHTML = `<p style="color: red; font-weight: bold;">Le ${phone} est déjà associé un compte</p>`;

                setTimeout(() => {
                    document.getElementById('messago').innerHTML = ``;
                }, 17000);
                document.getElementById('connexion').innerHTML = "S'inscrire";

            } else if (response && response.token) {

                sessionStorage.setItem('tibule', response.token);
                sessionStorage.setItem('oneci', response.instapaytoken);


                const splo = response.token.split("°");
                const admin = splo[4];
                window.location.href = admin == "GIFV" ? "dashboard" : "/"

            } else if (!response) {
                const focusedElement = document.activeElement;

                if (focusedElement && ['INPUT', 'TEXTAREA'].includes(focusedElement.tagName)) {
                    focusedElement.blur();
                }
                window.scrollTo(0, 0);

                document.getElementById('messago').innerHTML = `<p style="color: red; font-weight: bold;">Erreur incconnu, Veuillez re-essayer plus tard</p>`;

                setTimeout(() => {
                    document.getElementById('messago').innerHTML = ``;
                }, 17000);
                document.getElementById('connexion').innerHTML = "S'inscrire";

            }
        } else {
            const focusedElement = document.activeElement;

            if (focusedElement && ['INPUT', 'TEXTAREA'].includes(focusedElement.tagName)) {
                focusedElement.blur();
            }
            window.scrollTo(0, 0);

            document.getElementById('messago').innerHTML = `<p style="color: red; font-weight: bold;">Mot de passe n'est pas conform a la confirmation</p>`;

            setTimeout(() => {
                document.getElementById('messago').innerHTML = ``;
            }, 17000);
            document.getElementById('connexion').innerHTML = "S'inscrire";

        }
    }
};


async function loGin() {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    if (phone != "" && password != "") {
        document.getElementById('connexion').innerHTML = "En cours ...";

        const person = {
            phone: phone,
            motdepass: password,
        };

        const response = await requesttoBackendJson('POST', `${baseurl}instapay/login/instapay`, person);

        if (response && response.ee) {
            const focusedElement = document.activeElement;

            if (focusedElement && ['INPUT', 'TEXTAREA'].includes(focusedElement.tagName)) {
                focusedElement.blur();
            }
            window.scrollTo(0, 0);

            document.getElementById('messago').innerHTML = `<p style="color: red; font-weight: bold;">Identifiants Incorrect !</p>`;

            setTimeout(() => {
                document.getElementById('messago').innerHTML = ``;
            }, 17000);

        } else if (response && response.token) {
            sessionStorage.setItem('tibule', response.token);
            sessionStorage.setItem('oneci', response.instapaytoken);


            const splo = response.token.split("°");
            const admin = splo[4];
            window.location.href = admin == "GIFV" ? "dashboard" : "/"

        } else if (!response) {
            const focusedElement = document.activeElement;

            if (focusedElement && ['INPUT', 'TEXTAREA'].includes(focusedElement.tagName)) {
                focusedElement.blur();
            }
            window.scrollTo(0, 0);

            document.getElementById('messago').innerHTML = `<p style="color: red; font-weight: bold;">Erreur incconnu, Veuillez re-essayer plus tard</p>`;

            setTimeout(() => {
                document.getElementById('messago').innerHTML = ``;
            }, 17000);
            document.getElementById('connexion').innerHTML = "Connexion";

        }
    }

}

const Disconnect = () => {
    sessionStorage.clear();
    window.location.href = "/";
}