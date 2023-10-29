export const getSearchResults = async ({ page }) => {
    const query = "cat";
    const perPage = 6;
    const fetchUrl = `/api/search?query=${query}&page=${page}&perPage=${perPage}`
    const response = await fetch(fetchUrl);
    return response.json();
}
