import Comp2 from "./Comp2";

const Comp1 = ({ user }) => {
    // console.log({user})
    return (
        <>
        <h2>comp 1</h2>
            <h2>{`Im ${user} from comp 1`}</h2>
            <Comp2  user={user}/>
            
        </>
    )
}
export default Comp1;