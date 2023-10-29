"use client"

const getSearchResults = async () => {
    const response = await fetch("/api/search?query=dog", {
    });
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
