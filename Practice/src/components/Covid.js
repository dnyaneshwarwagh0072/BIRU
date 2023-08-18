import React, { useEffect, useState } from "react";

const Covid = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const response = await fetch('https://data.covid19india.org/data.json');
            // console.log(response);
            const realData = await response.json();
            // console.log(realData.statewise[0]);
            setData(realData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <h2>🔴LIVE</h2>
            <h3>COVID 19 : CoronaVirus Tracker</h3>
            <p>recovered</p>
            <h2>{data.recovered}</h2>
            <p>Death</p>
            <h2>{data.deaths}</h2>
            <p>Last Update</p>
            <h2>{data.lastupdatedtime}</h2>
        </>
    )
}
export default Covid;