import reactTaco from "react-dom"
import { App } from "./App"
// import { App as AppNoGoodReloads } from "./App-no-good-reloads"

import "./styles.css"

const theDiv = document.createElement("div")
document.body.appendChild(theDiv)

// const MyComponent = () => {
//     return <div>Hello world</div>
// }

reactTaco.render(<App />, theDiv)
// reactTaco.render(<AppNoGoodReloads />, theDiv)
