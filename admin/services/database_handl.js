function openCountryDatabase() {
    return new Promise((resolve, reject) => {
        const dbName = "Country";
        const dbVersion = 1;

        const request = indexedDB.open(dbName, dbVersion);
        let Countriesdb;

        request.onerror = (event) => {
            reject("Database error: " + event.target.errorCode);
        };

        request.onsuccess = (event) => {
            Countriesdb = event.target.result;
            resolve(Countriesdb);
        };

        request.onupgradeneeded = (event) => {
            Countriesdb = event.target.result;

            if (!Countriesdb.objectStoreNames.contains("CountryStore")) {
                Countriesdb.createObjectStore("CountryStore", { keyPath: "_id" });
            }
        };
    });
};

