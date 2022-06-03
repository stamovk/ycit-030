import dayjs from "dayjs"
import { useState } from "react"
import { About } from "./About"
import { Cart } from "./Cart"
import { Products } from "./Products"

export function App() {
    console.log("URL", window.location.pathname)

    const [_, setState] = useState(0)

    const { pathname } = window.location

    let theComponent
    switch (pathname) {
        case "/about":
            theComponent = <About />
            break
        case "/products":
            theComponent = <Products />
            break
        case "/cart":
            theComponent = <Cart />
            break
        default:
            break
    }

    // roll your own implementation
    function handleClick(e) {
        // console.log("taco", e.target.name)

        // This is a hack
        // This purpose of this is simply to trigger <App /> to rerender
        // setState( (currentState) => ++currentState  )
        // setState(e) <--- bad, does not work
        // setState(new Date())
        setState({})
        // setState([])

        window.history.replaceState(undefined, "", `/${e.target.name}`)
    }

    // See the better implementation below
    // let productsClassname
    // const cartClassname = pathname === "/cart" ? "bold" : ""
    // const aboutClassname = pathname === "/about" ? "bold" : ""

    const navbarItems = [
        {
            key: "navbar-item-product",
            name: "products",
            label: "Products",
        },
        {
            key: "navbar-item-cart",
            name: "cart",
            label: "Cart",
        },
        {
            key: "navbar-item-about",
            name: "about",
            label: "About",
        },
    ]

    // map loops through all the elements of the array and
    // returns a new array with the same number of elements but transformed
    const theItems = navbarItems.map((el) => {
        let className = `/${el.name}` === pathname ? "bold" : ""

        if (pathname === "/products" && el.name === "products") {
            if (dayjs().day() === 4) {
                className += " thursday-promo"
            }
        }

        return (
            <li key={el.key}>
                <a className={className} name={el.name} onClick={handleClick}>
                    {el.label}
                </a>
            </li>
        )
    })

    return (
        <>
            <nav>
                <span>Tacomania</span>
                <ul>{theItems}</ul>
            </nav>
            <div id="app-body">{theComponent}</div>
        </>
    )
}
