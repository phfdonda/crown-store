import { Route, Routes } from "react-router-dom"
import Navigation from "./routes/navigation/Navigation"
import Home from "./routes/home/Home"
import Shop from "./routes/home/Shop"
import SignIn from "./routes/home/SignIn"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
        </Routes>
    )
}

export default App
