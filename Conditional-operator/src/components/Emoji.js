
const Emoji = (props) => {
    // let x = '😍';
    // let y = '😍';
    // let z = '😍';

    // OR

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    // OR

    let { x, y, z } = props;

    if (x === y && y === z) {
        return (
            <>
                <div className='slot_inner'>
                    <h3>
                        {x} {y} {z}
                    </h3>
                    <h3>Matching</h3>
                    <hr />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='slot_inner'>
                    <h3>
                        {x} {y} {z}
                    </h3>
                    <h3>Not Matching </h3>
                    <hr />
                </div>
            </>
        )
    };

    // (x === y && y === z) ? <h3>{x}{y}{z} matching</h3> : <h3> {x}{y}{z} not matching</h3>
};

export default Emoji;