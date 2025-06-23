import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount((count) => {
            return count + 1;
        })
    }

    return (
        <>
            <button className="counter-btn" onClick={increaseCount}>
                {count}
            </button>
        </>
    )
}
export default Counter
