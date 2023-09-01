import Comp3 from "./Comp3";

const Comp2 = ({ user }) => {
    // console.log(user)
    return (
        <>
            <h2>comp 2</h2>
            <h2>{`Im ${user} from comp 2`}</h2>
            <Comp3 user={user} />
        </>
    )
}
export default Comp2;