import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div className="max-w-screen-xl mx-auto mt-16">
                <Home/>
            </div>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<Layout/>}>*/}
            {/*            <Route index element={<Home/>}/>*/}
            {/*            <Route path="blogs" element={<Blogs/>}/>*/}
            {/*            <Route path="contact" element={<Contact/>}/>*/}
            {/*            <Route path="*" element={<NoPage/>}/>*/}
            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
