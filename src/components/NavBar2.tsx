import React, {Fragment, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faUser, faGear} from '@fortawesome/free-solid-svg-icons'
import {Menu, Transition} from '@headlessui/react'
import {Link, NavLink} from "react-router-dom";


const NavBar = () => {

    const [isShowingStart, setIsShowingStart] = useState(false)
    const [isShowingDocs, setIsShowingDocs] = useState(false)
    const [selected, setSelected] = useState("homeyf")

    return (
        <header className="bg-white sticky top-0">
            <div className="flex h-14 mx-auto items-center max-w-screen-lg text-lg text-gray-700">
                {/*<header className="bg-neutral-100">*/}
                {/*    <div className="flex h-14 mx-auto items-center max-w-screen-xl text-lg text-gray-700">*/}

                <div className="">
                    <ul className="flex flex-row space-x-16">
                        {/*<li className="px-6 rounded"><a href="default" className="text-cyan-400">Home</a><div className="bg-cyan-400 h-1"></div></li>*/}
                        {/*<li className="px-6 rounded"><a href="default" className="text-orange-500"><FontAwesomeIcon icon={faHome}/></a></li>*/}

                        <NavLink to="/home" onClick={() => setSelected("home")} className="relative">
                            <button className="rounded hover:text-orange-300 active:text-orange-400 px-1">Home</button>
                            <div className={selected === "home2" ? "absolute border-b-4 border-orange-400 h-3.5 w-full" : undefined}></div>
                        </NavLink>

                        <div className="relative">
                            <button onClick={() => {setIsShowingStart((isShowing) => !isShowing); setIsShowingDocs(false)}}
                                    className="rounded hover:text-orange-300 active:text-orange-400 px-1">Getting started <FontAwesomeIcon icon={faCaretDown}/>
                            </button>
                            <div className={selected === "getting-started2" ? "absolute border-b-4 border-orange-400 h-3.5 w-full" : undefined}></div>
                            <Transition show={isShowingStart} enter="transition-opacity duration-250" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-125" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <div className="absolute bg-navbar w-full rounded shadow-xl p-2 opacity-90 hover:[&>*]:text-orange-300 text-base" onClick={() => setIsShowingStart(false)}>
                                    <div className="py-1"></div>
                                    <NavLink to="/connecting" onClick={() => setSelected("getting-started")}>
                                        <div className="py-1">Connecting</div>
                                    </NavLink>
                                    <NavLink to="/connecting2" onClick={() => setSelected("getting-started")}>
                                        <div className="py-1">Connecting2</div>
                                    </NavLink>
                                    <NavLink to="/postman" onClick={() => setSelected("getting-started")}>
                                        <div className="py-1">Postman</div>
                                    </NavLink>
                                    <NavLink to="/getting-started" onClick={() => setSelected("getting-started")}>
                                        <div className="py-1">Nog iets</div>
                                    </NavLink>
                                    <div className="h-0.5 bg-white opacity-10 mt-0.5"></div>
                                    <NavLink to="/getting-started" onClick={() => setSelected("getting-started")}>
                                        <div className="py-1">Dinges</div>
                                    </NavLink>
                                </div>
                            </Transition>
                        </div>

                        <div className="relative">
                            <button onClick={() => {setIsShowingDocs((isShowing) => !isShowing); setIsShowingStart(false)}}
                                    className="relative rounded hover:text-orange-300 active:text-orange-400 px-1">Docs <FontAwesomeIcon icon={faCaretDown}/>
                            </button>
                            <div className={selected === "docs" ? "absolute border-b-4 border-orange-400 h-3.5 w-full" : undefined}></div>
                            <Transition show={isShowingDocs} enter="transition-opacity duration-250" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-125" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <div className="absolute bg-navbar w-32 rounded shadow-xl p-2 opacity-90 hover:[&>*]:text-orange-300 text-base" onClick={() => setIsShowingDocs(false)}>
                                    <div className="py-1"></div>
                                    <NavLink to="/swagger" onClick={() => setSelected("docs")}>
                                        <div className="py-1">Swagger</div>
                                    </NavLink>
                                    <NavLink to="/functional-description" onClick={() => setSelected("docs")}>
                                        <div className="py-1">FO</div>
                                    </NavLink>
                                </div>
                            </Transition>
                        </div>

                        {/*<Link to="/docs">*/}
                        {/*    <button className="rounded hover:text-orange-200 active:text-orange-300 px-1">Docs <FontAwesomeIcon icon={faCaretDown}/></button>*/}
                        {/*</Link>*/}

                        <NavLink to="/release-notes" onClick={() => setSelected("release-notes")}>
                            <div className="relative">
                                <button className="rounded hover:text-orange-300 active:text-orange-400 px-1">Release notes</button>
                                <div className={selected === "release-notes" ? "absolute border-b-4 border-orange-400 h-3.5 w-full" : undefined}></div>
                            </div>
                        </NavLink>

                        <NavLink to="/contact" onClick={() => setSelected("contact")}>
                            <div className="relative">
                                <button className="rounded hover:text-orange-300 active:text-orange-400 px-1">Contact</button>
                                <div className={selected === "contact" ? "absolute border-b-4 border-orange-400 h-3.5 w-full" : undefined}></div>
                            </div>
                        </NavLink>

                    </ul>
                </div>

                <div className="grow"></div>

                <NavLink to="/profile">
                    <button className="rounded px-2 py-0.5 hover:bg-navbar90"><FontAwesomeIcon icon={faUser}/></button>
                </NavLink>
                <button className="rounded px-2 py-0.5 hover:bg-navbar90"><FontAwesomeIcon icon={faGear}/></button>

            </div>
        </header>


    );
};

export default NavBar;