import { useState } from "react";

const Greeting = () => {
    const [hour, setHour] = useState(new Date());
    const curTime = new Date().getHours();

    let greeting = "";
    let greetColor = {};

    if (curTime > 1 && curTime < 12) {
        greeting = 'Good Morning';
        greetColor.color = 'green';
    } else if (curTime >= 12 && curTime <= 15) {
        greeting = 'Good Afternoon';
        greetColor.color = 'red';
    } else if (curTime > 15 && curTime <= 19) {
        greeting = 'Good Evening';
        greetColor.color = 'yellow';
    } else {
        greeting = 'Good Night';
        greetColor.color = 'gray';
    }


    const name = 'TiGER';
    return (
        <>
            <h1>Hello {name} <span style={greetColor}>{greeting}</span></h1>
        </>
    )
}
export default Greeting;