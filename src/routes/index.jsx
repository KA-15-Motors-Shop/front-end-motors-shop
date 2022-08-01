import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login/login";

function RouterPages () {
    return (
        <Routes >
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
};

export default RouterPages;