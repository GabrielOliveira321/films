import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppFilms from "../Components/AppFilms";
import Celebrity from "../Pages/Celebrity/Celebrity";

const ReactApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppFilms />} />
                {/* <Route path="/celebrity" element={<Celebrity person={[]} />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default ReactApp;
