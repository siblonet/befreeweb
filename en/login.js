const Conneter = async () => {
    const invphone = document.getElementById('invphone').value;
    const loading = document.getElementById('loading');

    if (invphone) {
        loading.removeAttribute("onclick");
        loading.innerText = "loading ...";
        const data = {
            access: invphone,
        };

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch("https://nuance-doud.adaptable.app/BefreeAccess/login/", options);
        const responseData = await response.json();
        const messages = document.getElementById('messageslogin');
        messages.classList.add("form-style-5");
        messages.innerHTML = `
                <form>
                    <fieldset id="linkmessa"></fieldset>
                </form>
            `;

        if (!response.ok) {
            document.getElementById('linkmessa').innerHTML = `
                    <legend style="color: #bc1a42;">
                        <span class="erro">1</span>
                        Échec, vérifiez votre connexion ou essayez plus tard.
                    </legend>
                `;
            setTimeout(() => {
                messages.innerHTML = "";
                messages.classList.remove("form-style-5");
            }, 3000);

            loading.setAttribute("onclick", "Conneter()");
            loading.innerText = "Envoyez";
        } else if (responseData._id) {

            const tosave = `${responseData._id}°${responseData.name}°${responseData.access}`;
            sessionStorage.setItem('befree', tosave);
            window.location.href = "dashboarden";

        } else {
            document.getElementById('linkmessa').innerHTML = `
            <legend style="color: #bc1a42;">
                <span class="erro">1</span>
                Information inccorrect.
            </legend>
        `;

            setTimeout(() => {
                messages.innerHTML = "";
                messages.classList.remove("form-style-5");
            }, 3000);
            loading.setAttribute("onclick", "Conneter()");
            loading.innerText = "Envoyez";
        }

    } else {
        const messages = document.getElementById('messageslogin');
        messages.classList.add("form-style-5");
        messages.innerHTML = `
                <form>
                    <fieldset id="linkmessa">
                        <legend style="color: #bc1a42;">
                            <span class="erro">2</span>
                            Veuillez renseigner le champ.
                        </legend>
                    </fieldset>
                </form>
            `;

        setTimeout(() => {
            messages.innerHTML = "";
            messages.classList.remove("form-style-5");
        }, 3000);
    }
};
