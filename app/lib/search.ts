export const getSearchResults = async ({ page, query, orderBy, color }) => {
    const perPage = 6;
    const fetchUrl = `/api/search?query=${query}&page=${page}&perPage=${perPage}&orderBy=${orderBy}&color=${color}`
    const response = await fetch(fetchUrl);
    return response.json();
}
