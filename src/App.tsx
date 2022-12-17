import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Connecting from "./pages/Connecting";
import Connecting2 from "./pages/Connecting2";
import Connecting3 from "./pages/Connecting3";
import Postman from "./pages/Postman";
import Swagger from "./pages/Swagger";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/*<Banner/>*/}

                <NavBar/>
                {/*<NavBar2/>*/}

                {/*<div className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 w-full"></div>*/}
                {/*<div className="bg-stone-100 h-screen">*/}
                    <Routes>
                        <Route path="/">
                            {/*<Route index element={<NavBar/>}/>*/}
                            <Route path="/" element={<Navigate replace to="/home" />} />
                            <Route path="home" element={<><Banner2/><Home2/></>}/>
                            <Route path="connecting" element={<Connecting/>}/>
                            <Route path="connecting2" element={<Connecting3/>}/>
                            <Route path="postman" element={<Postman/>}/>
                            <Route path="swagger" element={<Swagger/>}/>
                            <Route path="" element={<Home/>}/>
                            {/*<Route path="*" element={<NoPage/>}/>*/}
                        </Route>
                    </Routes>
                {/*</div>*/}
            </BrowserRouter>
        </div>
    );
}

export default App;
