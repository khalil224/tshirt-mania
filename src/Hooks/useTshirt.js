import { useEffect, useState } from "react"

const useTshirt = () => {
    const [tShirts, setTShirts] = useState([]);
    useEffect(() => {
        fetch('tshirt.json')
            .then(res => res.json())
            .then(data => setTShirts(data))
    }, [])

    return [tShirts, setTShirts]
}

export default useTshirt;