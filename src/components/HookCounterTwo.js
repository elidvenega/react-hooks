import React, {useState} from 'react'

function HookCounterTwo() {
    const initial = 0
    const [count,setCount] = useState(initial);
    return (
        <div>
            Count: {count}
            <br></br>
            <button onClick={() => setCount(initial)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment </button>
            <button onClick={() => setCount(count - 1)} >Decrement</button>
        </div>
    )
}

export default HookCounterTwo;
