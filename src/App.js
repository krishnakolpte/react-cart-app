/** @format */

import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Header from "./components/Header";
import "./styles/app.scss";
import Cart from "./components/Cart";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
