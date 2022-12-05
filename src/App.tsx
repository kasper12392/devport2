import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Connecting from "./pages/Connecting";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/">
                        {/*<Route index element={<NavBar/>}/>*/}
                        <Route path="home" element={<Home/>}/>
                        <Route path="getting-started" element={<Connecting/>}/>
                        {/*<Route path="*" element={<NoPage/>}/>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
