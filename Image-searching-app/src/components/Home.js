import React from 'react'
import { useState } from 'react';

function Home() {
    const [inp, setInp] = useState("");
    const [img, setImg] = useState();

    const data = `https://source.unsplash.com/540x360/?${img}`;
    // const data = `https://source.wallpaperflare.com/search?wallpaper=tiger`;

    const onSearch = () => {
        setImg(inp);
    }
    return (
        <div>
            <h1>This is HOME Page</h1>
            <input
                type="text"
                placeholder='Search Image'
                value={inp}
                onChange={(e) => setInp(e.target.value)}
            />
            <br />
            <br />
            <button onClick={onSearch}>Search</button>
            <h2>Searched Image : {img}</h2>
            {inp === "" ? null : <img src={data} alt="TiGER" />}
        </div>
    )
}

export default Home;
