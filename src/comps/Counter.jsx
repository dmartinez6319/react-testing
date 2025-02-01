import { useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(0)

    const updateCounter = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button className="counter-btn" onClick={updateCounter}>Counter: {count}</button>
        </>
    )

}

export default Counter;