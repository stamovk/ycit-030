import { About } from "./About"
import { Cart } from "./Cart"
import { Products } from "./Products"

export function App() {
    console.log("URL", window.location.pathname)

    let theComponent
    // let TheComponent
    switch (window.location.pathname) {
        case "/about":
            theComponent = <About />
            // TheComponent = About
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

    // Alternatively you could use if-if-else
    // if (window.location.pathname === "/about") {
    //     theComponent = <About />
    // } else if (window.location.pathname === "/products") {
    //     theComponent = <Products />
    // } else if (window.location.pathname === "/cart") {
    //     theComponent = <Cart />
    // } else {
    //     theComponent = <div>fail..</div>
    // }

    return (
        <>
            <nav>
                <span>Tacomania</span>

                <ul>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
            <div id="app-body">{theComponent}</div>
            {/* <div id="app-body"><TheComponent /></div> */}
        </>
    )
}
