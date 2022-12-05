import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Connecting from "./pages/Connecting";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";

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
                        <Route path="home" element={<Home/>}/>
                        <Route path="getting-started" element={<Connecting/>}/>
                        <Route path="" element={<Home/>}/>
                        {/*<Route path="*" element={<NoPage/>}/>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
