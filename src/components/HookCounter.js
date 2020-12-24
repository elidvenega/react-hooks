import React, {useState} from 'react';
import './css/style.css';

function HookCounter() {

    const [number,count] = useState(0);

   function addingByOne() {
        count(number + 1)
    }

    return (
        <div>
            <h1>Hook App</h1>
            <button className="btn" onClick={() => addingByOne()}>Add by two {number}</button>
            <p>Clicks {number}</p>
        </div>
    )
}

export default HookCounter;
