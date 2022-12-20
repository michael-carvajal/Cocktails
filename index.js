/*const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dc7819c2b8mshebad27cdce2062bp1f7da1jsne943fb95701a',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};

fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', options)
    .then(response => response.json())
    .then(response => console.log(response.drinks[0]))
    .catch(err => console.error(err));
*/


import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://my-api.com/endpoint');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);

    if (!data) {
        return <p>Loading data...</p>;
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    );
}
