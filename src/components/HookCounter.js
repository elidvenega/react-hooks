import React, {useState} from 'react';
import counter from './counter.css';

function HookCounter() {

    const [even,countByTwo] = useState(2);

    return (
        <div>
            <button className="btn" onClick={() => countByTwo(even + 2)}>Add by two {even}</button>
        </div>
    )
}

export default HookCounter;
