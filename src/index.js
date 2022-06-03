import reactTaco from "react-dom"
import { App } from "./App"
// import { App as AppNoGoodReloads } from "./App-no-good-reloads"
import { BrowserRouter } from "react-router-dom"

import "./styles.css"

const theDiv = document.createElement("div")
document.body.appendChild(theDiv)

// const MyComponent = () => {
//     return <div>Hello world</div>
// }

reactTaco.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    theDiv
)
// reactTaco.render(<AppNoGoodReloads />, theDiv)
