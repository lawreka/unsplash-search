export const getSearchResults = async ({ page, query }) => {
    const perPage = 6;
    const orderBy = "relevant";
    const color = "";
    const fetchUrl = `/api/search?query=${query}&page=${page}&perPage=${perPage}&orderBy=${orderBy}&color=${color}`
    const response = await fetch(fetchUrl);
    return response.json();
}
