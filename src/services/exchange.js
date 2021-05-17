const exchange_API_URL = "http://data.fixer.io/api/latest"
const ACCESS_KEY = "263c1e782c0c8914e52641ba931d2390"
const FORMAT = 1
export const getExchangeLatest = async (symbols) => {
    const response = await fetch(`${exchange_API_URL}?access_key=${ACCESS_KEY}&format=${FORMAT}&symbols=${symbols}`, {
        method: 'GET',
    });
    return response.json();
}