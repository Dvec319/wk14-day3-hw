import { useState } from "react";

const Score = () => {
    let [score, setScore] = useState(0)

    const increaseScore = () =>
    setScore(score + 100)

    const decreaseScore = () => {
        setScore(score - 100)
    }

    const resetScore = () => {
        setScore(score = 0)
    }

    return (
        <div>
            <h1>Score: {score}</h1>
            <button onClick={decreaseScore}>Decrease</button>
            <button onClick={increaseScore}>Increase</button>
            <button onClick={resetScore}>Reset</button>
        </div>
    )
}

export default Score