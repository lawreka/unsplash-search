export const getSearchResults = async ({ query, orderBy, color }) => {
    const perPage = 30;
    const fetchUrl = `/api/search?query=${query}&perPage=${perPage}&orderBy=${orderBy}&color=${color}`
    const response = await fetch(fetchUrl);
    return response.json();
}
