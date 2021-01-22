import React, {useState} from 'react';
import './css/style.css';

function HookCounter() {

    const [number,count] = useState(0);

    const addingByOne = () => count(number + 1);
    return (
        <div>
            <h1>Hook App</h1>
            <button className="btn" onClick={() => addingByOne()}>Click {number}</button>
        </div>
    )
}

export default HookCounter;
