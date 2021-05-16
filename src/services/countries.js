const allCountriesData = import('./countries-all.json');
const countries_API_URL = "https://restcountries.eu/rest/v2/name/"
export const getAllCountries = async () => {
    // loaded all countries data from a JSON instead of xhr for brevity
    return (await allCountriesData).default;
}

export const getCountryByName = async (countryName, fullText = false) => {
    /*
        we can use allCountriesData to filter by countryName
        instead we are making an xhr using fetch api to load
        the country data
    */
    const response = await fetch(`${countries_API_URL}${countryName}?fullText=${fullText}`, {
        method: 'GET',
    });
    return response.json();
}