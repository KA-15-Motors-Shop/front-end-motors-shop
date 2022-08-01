import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";

function RouterPages () {
    return (
        <Routes >
            <Route path="/login" element={<Login />} />
        </Routes>
    )
};

export default RouterPages;