import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Connecting from "./pages/Connecting";
import Postman from "./pages/Postman";
import Swagger from "./pages/Swagger";
import ReleaseNotes from "./pages/ReleaseNotes";

function App() {
    return (
        // <div className="App dark:bg-[#0e0e10] text-gray-700 dark:text-gray-50 ">
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/">
                            <Route path="/" element={<Navigate replace to="/home" />} />
                            <Route path="/devport2" element={<Navigate replace to="/home" />} />
                            <Route path="home" element={<><Banner/><Home/></>}/>
                            <Route path="connecting" element={<Connecting/>}/>
                            <Route path="postman" element={<Postman/>}/>
                            <Route path="swagger" element={<Swagger/>}/>
                            <Route path="functional-description" element={null}/>
                            <Route path="errors" element={null}/>
                            <Route path="release-notes" element={<ReleaseNotes/>}/>
                            <Route path="" element={<Home/>}/>
                        </Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
