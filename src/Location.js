import { useLocation } from "react-router-dom"

const MyLocation = () => {
    const location = useLocation()

    return location.pathname.substring(1)
}

export { MyLocation }
