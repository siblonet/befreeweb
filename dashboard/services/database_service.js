async function PostCountries(Countries) {
    const Countriesdb = await openCountryDatabase();
    const PHTransation = Countriesdb.transaction(["CountryStore"], "readwrite");
    const PHStore = PHTransation.objectStore("CountryStore");

    let added = false;
    Countries.map(Country => {
        const adding = PHStore.add(Country);

        adding.onsuccess = () => {
            added = true;
        };

        adding.onerror = (event) => {
            console.log("PostCountries", event.target.error);
        };

    });

    return added
}

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ adding systme as post end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ adding systme as post end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ adding systme as post end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ adding systme as post end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */



/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getting systme as get start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getting systme as get start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getting systme as get start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

async function GetAllCountries() {
    const Countriesdb = await openCountryDatabase();
    const GHTransation = Countriesdb.transaction(["CountryStore"], "readonly");
    const GHStore = GHTransation.objectStore("CountryStore");

    return new Promise((resolve, reject) => {
        const Countries = [];

        GHStore.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                Countries.push(cursor.value);
                cursor.continue();
            } else {
                resolve(Countries.sort((a, b) => new Date(b.created) - new Date(a.created)));
            }
        };
        GHTransation.onerror = (event) => {
            reject("Transaction error: " + event.target.errorCode);
        };
    });

}



async function GetCountryByID(id) {
    return new Promise(async (resolve, reject) => {
        const Countriesdb = await openCountryDatabase();
        const GATransation = Countriesdb.transaction(["CountryStore"], "readonly");
        const GAStore = GATransation.objectStore("CountryStore");

        const requestingByID = GAStore.get(id);

        requestingByID.onsuccess = (event) => {
            const article = event.target.result;
            resolve(article);
        };

        requestingByID.onerror = (event) => {
            console.error("Error accessing object GetHouseByID store:", event.target.error);
            reject(event.target.error);
        };
    });
}

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getting systme as get end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ update systme as put start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

async function PutCountry(Country) {
    return new Promise(async (resolve, reject) => {
        const Countriesdb = await openCountryDatabase();
        const PuHTransation = Countriesdb.transaction(["CountryStore"], "readwrite");
        const PuHStore = PuHTransation.objectStore("CountryStore");

        const update = PuHStore.put(Country);

        update.onsuccess = () => {
            resolve(true);
        };

        update.onerror = (event) => {
            console.error("Error accessing object PutHouse store:", event.target.error);
            reject(false);
        };
    });
}


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ update systme as put ends @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ deleting systme as delete start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

async function clearCountries() {
    const articldb = await openCountryDatabase();
    const CHTransation = articldb.transaction(["CountryStore"], "readwrite");
    const CHStore = CHTransation.objectStore("CountryStore");

    const clearHouse = CHStore.clear();

    let cleared = false;
    clearHouse.onsuccess = () => {
        cleared = true;
    };

    clearHouse.onerror = (event) => {
        console.error("Error accessing object clearHouses store:", event.target.error);
    };

    return cleared
}