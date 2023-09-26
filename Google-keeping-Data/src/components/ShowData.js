import React from 'react'
import { useState } from 'react'

function ShowData({ id, name }) {
    const [state, setState] = useState(false);

    return (
        <div>
            <button onClick={() => setState(true)}>{id}</button>
            <span>
                {
                    state && <span>-{name}</span>
                }
            </span>
        </div>
    )
}

export default ShowData
