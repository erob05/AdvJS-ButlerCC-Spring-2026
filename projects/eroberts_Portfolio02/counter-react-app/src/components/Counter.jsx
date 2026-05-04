import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{count}</h2>

            <p>{count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"}</p>

            <button aria-label="Decrease count" onClick={() => setCount(count - 1)}>-</button>
            <button aria-label="Reset count" onClick={() => setCount(0)}>Reset</button>
            <button aria-label="Increase count" onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Counter;