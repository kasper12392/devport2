import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Home from "./pages/Home";
import Connecting from "./pages/Connecting";
import Postman from "./pages/Postman";
import Swagger from "./pages/Swagger";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Banner/>
                {/*<Banner2/>*/}
                <NavBar/>
                {/*<div className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2"></div>*/}
                <Routes>
                    <Route path="/">
                        {/*<Route index element={<NavBar/>}/>*/}
                        <Route path="/" element={<Navigate replace to="/home" />} />
                        <Route path="home" element={<Home/>}/>
                        <Route path="connecting" element={<Connecting/>}/>
                        <Route path="postman" element={<Postman/>}/>
                        <Route path="swagger" element={<Swagger/>}/>
                        <Route path="" element={<Home/>}/>
                        {/*<Route path="*" element={<NoPage/>}/>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
