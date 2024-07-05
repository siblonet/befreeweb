function getAdmin() {
    const token = sessionStorage.getItem('befree');
    if (token) {
        const splo = token.split("°");
        const name = splo[1];
        const phone = splo[2];

        document.getElementById('userna').innerHTML = `<i class="lnr lnr-user"></i> ${name}`;
        document.getElementById('userph').innerHTML = `<i class="lnr lnr-phone-handset"></i> ${phone}`;
        LoadFromBackend()
        const main_contaner = document.getElementById('main');
        main_contaner.classList.add('otherstym');
        main_contaner.innerHTML = headers_html;
        style_Beheviors_init()
    } else {
        document.getElementById('userna').innerHTML = `<i class="lnr lnr-user"></i> Visiteur`;
        document.getElementById('userph').innerHTML = `<i class="lnr lnr-phone-handset"></i> 457000`;
        LoadFromBackend()
    }
};
getAdmin();