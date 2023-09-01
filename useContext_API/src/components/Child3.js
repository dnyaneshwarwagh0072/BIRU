import { data1 } from "../App";

const Child3 = () => {
    return (
        <data1.Consumer>
            {
                (name) => {
                    return (
                        <>
                            My name is {name}
                        </>
                    )
                }
            }
        </data1.Consumer>
    )
}
export default Child3;