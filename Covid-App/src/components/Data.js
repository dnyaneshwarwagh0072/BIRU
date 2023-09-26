// import { useEffect, useState } from 'react';

// const Data = () => {

//     const [data, setData] = useState([]);

//     const covidData = async () => {
//         const data = await fetch("https://data.covid19india.org/data.json");
//         const actualData = await data.json();
//         console.log(actualData.statewise);
//         setData(actualData.statewise);
//     }
//     useEffect(() => {
//         covidData();
//     }, []);

//     return (
//         <>
//             <h1>Covid-19 Data Statewise </h1>
//             <table border='1'>
//                 <tr>
//                     <th>State name</th>
//                     <th>Confirmed</th>
//                     <th>Recovered</th>
//                     <th>Deaths</th>
//                     <th>Active</th>
//                     <th>Updated</th>
//                 </tr>
//                 <tbody>
//                     {
//                         data.map((e, i) => {
//                             return (
//                                 <tr>
//                                     <td>{e.state}</td>
//                                     <td>{e.confirmed}</td>
//                                     <td>{e.recovered}</td>
//                                     <td>{e.deaths}</td>
//                                     <td>{e.active}</td>
//                                     <td>{e.lastupdatedtime}</td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </>
//     )
// }
// export default Data;




import { useEffect, useState } from 'react';

const Data = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const fetchedData = await fetch("https://data.covid19india.org/data.json");
        const finaleData = await fetchedData.json();
        setData(finaleData.statewise);
        console.log(finaleData.statewise);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <table border='1'>
                <th>
                    <td>State {
                        data.map((ele, idx) => {
                            return (
                                <tr>
                                    <td>{ele.state}</td>
                                </tr>
                            )
                        })
                    }</td>
                    <td>Active {
                        data.map((ele, idx) => {
                            return (
                                <tr>
                                    <td>{ele.active}</td>
                                </tr>
                            )
                        })
                    }</td>
                    <td>Confirmed {
                        data.map((ele, idx) => {
                            return (
                                <tr>
                                    <td>{ele.confirmed}</td>
                                </tr>
                            )
                        })
                    }</td>
                    <td>Recovered {
                        data.map((ele, idx) => {
                            return (
                                <tr>
                                    <td>{ele.recovered}</td>
                                </tr>
                            )
                        })
                    }</td>
                    <td>Death {
                        data.map((ele, idx) => {
                            return (
                                <tr>
                                    <td>{ele.deaths}</td>
                                </tr>
                            )
                        })
                    }</td>
                </th>

            </table>
        </>
    )
}
export default Data;






