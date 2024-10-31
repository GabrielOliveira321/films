import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppFilms from "../Components/AppFilms";
import useStore from "../Components/UserStorage";
import CelebrityInformation from "../Pages/Celebrity/Celebrity information";


import Err from "../Pages/Err/Err";
import MovieInformation from "../Pages/MovieInformation/MovieInformation";

const ReactApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppFilms />} />
                <Route path="/Actor=/:name" element={<CelebrityInformation/>} />
                <Route path="/info-movie=/:name" element={<MovieInformation/>} />

                <Route path="*" element={<Err/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default ReactApp;
