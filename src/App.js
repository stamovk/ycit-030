import { Link, Route, Routes } from "react-router-dom"
import { About } from "./About"
import { Cart } from "./Cart"
import { MyLocation } from "./Location"
import { navbarItems } from "./navItems"
import { Products } from "./Products"
import { useBobsCounter } from "./useBobsCounter"

// Assignment #1

// Refer to https://reactrouter.com/docs/en/v6/components

// Incorporate one of the following API endpoints from the doc mentioned above:

// some suggestions:  Outlet, useLocation, useNavigate, useResolvedPath

export function App() {
    const num = useBobsCounter()

    const theNavItems = navbarItems.map((el) => {
        return (
            <li key={el.key}>
                <Link to={el.name}>{el.label}</Link>
            </li>
        )
    })

    return (
        <>
            <nav>
                <span>Tacomania {num}</span>
                <ul>{theNavItems}</ul>
            </nav>
            <div>
                <MyLocation />
            </div>
            <div id="app-body">
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="products" element={<Products />} />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </div>
        </>
    )
}
