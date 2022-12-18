import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner2 from "./components/Banner2";
import Home from "./pages/Home";
import Connecting from "./pages/Connecting";
import Postman from "./pages/Postman";
import Swagger from "./pages/Swagger";
import ReleaseNotes from "./pages/ReleaseNotes";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/">
                            <Route path="/" element={<Navigate replace to="/home" />} />
                            <Route path="home" element={<><Banner2/><Home/></>}/>
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
