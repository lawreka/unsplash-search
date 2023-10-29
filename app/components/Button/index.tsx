"use client"

const getSearchResults = async () => {
    const query = "cat";
    const page = 1;
    const perPage = 6;
    const fetchUrl = `/api/search?query=${query}&page=${1}&perPage=${perPage}`
    const response = await fetch(fetchUrl);
    return response.json();
}

export const Button = () => {
    const handleClick = async () => {
        getSearchResults().then((data) => {
            console.log(data);
        })
    }
    return <button onClick={handleClick}>Click</button>
}
