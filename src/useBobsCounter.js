import { useState, useEffect } from "react"

export function useBobsCounter() {
    const [num, setNum] = useState(0)

    // Try commenting-out the useEffect to see things horribly wrong
    useEffect(() => {
        const handleId = setInterval(() => {
            setNum((previousNum) => ++previousNum)
        }, 1000)

        return () => clearInterval(handleId)
    }, []) // The empty array means that there are no conditions to run the effect a 2nd time (or more). It will always run the effect when the component first mounts

    return num
}
