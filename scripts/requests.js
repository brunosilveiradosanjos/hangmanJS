/**********************************************************************/
/*********************************Fetch********************************/
/**********************************************************************/

const getPuzzle = async () => {

    const response = await fetch('https://retoolapi.dev/Yh49Sr/puzzle');

    if (response.status === 200) {
        let data = await response.json();
        data = data[Math.round(Math.random() * data.length, 2)]
        console.log(data);
        return data.Name;
    } else {
        throw new Error('Unable to get puzzle');
    }
}


const getCountryDetails = async (countryCode) => {

    const response = await fetch('https://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        let data = await response.json();
        const country = data.find((country) => {
            if (country.alpha2Code === countryCode) {
                return country;
            }
        })
        return country.name;
    } else {
        throw new Error('Unable to fetch data')
    }
}


const apiLocation = async () => {

    const response = await fetch('http://ipinfo.io/191.8.38.177/?token=b737baf239a20d');

    if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        return data
    } else {
        throw new Error('Unable to fetch data')
    }

}

const getCurrentCountry = async () => {
    const location = await apiLocation()
    const country = await getCountryDetails(location.country)
    return country
}