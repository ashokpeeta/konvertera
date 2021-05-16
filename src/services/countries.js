const countries_API_URL = "https://restcountries.eu/rest/v2/"
const byName = "name/"
const all = "all"
export const getAllCountries = async () => {
    const response = await fetch(`${countries_API_URL}${all}`, {
        method: 'GET',
    });
    return response.json();
}

export const getCountryByName = async (countryName, fullText = false) => {
    const response = await fetch(`${countries_API_URL}${byName}${countryName}?fullText=${fullText}`, {
        method: 'GET',
    });
    return response.json();
}