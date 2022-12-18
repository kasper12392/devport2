import React, {Fragment, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faUser, faGear} from '@fortawesome/free-solid-svg-icons'
import {Menu, Transition} from '@headlessui/react'
import {Link, NavLink} from "react-router-dom";


const NavBar = () => {

    const [isShowingStart, setIsShowingStart] = useState(false)
    const [isShowingDocs, setIsShowingDocs] = useState(false)
    const [selected, setSelected] = useState("home")

    return (
        <header className="bg-navbar shadow-xl sticky top-0 z-50">
            <div className="flex h-14 mx-auto items-center max-w-screen-lg text-lg text-gray-100">
                {/*<header className="bg-neutral-100">*/}
                {/*    <div className="flex h-14 mx-auto items-center max-w-screen-xl text-lg text-gray-700">*/}

                <div className="">
                    <ul className="flex flex-row space-x-16">
                        {/*<li className="px-6 rounded"><a href="default" className="text-cyan-400">Home</a><div className="bg-cyan-400 h-1"></div></li>*/}
                        {/*<li className="px-6 rounded"><a href="default" className="text-orange-500"><FontAwesomeIcon icon={faHome}/></a></li>*/}

                        <NavLink to="/home" onClick={() => setSelected("home")} className="relative">
                            <button className="rounded hover:text-blue-300 active:text-blue-400 px-1">Home</button>
                            <div className={selected === "home" ? "absolute border-b-4 border-blue-400 h-3.5 w-full" : undefined}></div>
                        </NavLink>

                        <NavLink to="/connecting" onClick={() => setSelected("connecting")} className="relative">
                            <button className="rounded hover:text-blue-300 active:text-blue-400 px-1">Connecting</button>
                            <div className={selected === "connecting" ? "absolute border-b-4 border-blue-400 h-3.5 w-full" : undefined}></div>
                        </NavLink>

                        <NavLink to="/postman" onClick={() => setSelected("postman")} className="relative">
                            <button className="rounded hover:text-blue-300 active:text-blue-400 px-1">Postman</button>
                            <div className={selected === "postman" ? "absolute border-b-4 border-blue-400 h-3.5 w-full" : undefined}></div>
                        </NavLink>

                        {/*<div className="relative">*/}
                        {/*    <button onClick={() => {setIsShowingStart((isShowing) => !isShowing); setIsShowingDocs(false)}}*/}
                        {/*            className="rounded hover:text-blue-300 active:text-blue-400 px-1">Getting started <FontAwesomeIcon icon={faCaretDown}/>*/}
                        {/*    </button>*/}
                        {/*    <div className={selected === "getting-started" ? "absolute border-b-4 border-blue-400 h-3.5 w-full" : undefined}></div>*/}
                        {/*    <Transition show={isShowingStart} enter="transition-opacity duration-250" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-125" leaveFrom="opacity-100" leaveTo="opacity-0">*/}
                        {/*        <div className="absolute bg-navbar w-full rounded shadow-xl p-2 opacity-90 text-base hover:[&>*]:text-blue-300 active:[&>*]:text-blue-400" onClick={() => setIsShowingStart(false)}>*/}
                        {/*            <div className="py-1"></div>*/}
                        {/*            <NavLink to="/connecting" onClick={() => setSelected("getting-started")}>*/}
                        {/*                <div className="py-1">Connecting</div>*/}
                        {/*            </NavLink>*/}
                        {/*            <NavLink to="/connecting2" onClick={() => setSelected("getting-started")}>*/}
                        {/*                <div className="py-1">Connecting2</div>*/}
                        {/*            </NavLink>*/}
                        {/*            <NavLink to="/postman" onClick={() => setSelected("getting-started")}>*/}
                        {/*                <div className="py-1">Postman</div>*/}
                        {/*            </NavLink>*/}
                        {/*            <NavLink to="/getting-started" onClick={() => setSelected("getting-started")}>*/}
                        {/*                <div className="py-1">Nog iets</div>*/}
                        {/*            </NavLink>*/}
                        {/*            <div className="h-0.5 bg-white opacity-10 mt-0.5"></div>*/}
                        {/*            <NavLink to="/getting-started" onClick={() => setSelected("getting-started")}>*/}
                        {/*                <div className="py-1">Dinges</div>*/}
                        {/*            </NavLink>*/}
                        {/*        </div>*/}
                        {/*    </Transition>*/}
                        {/*</div>*/}

                        <div className="relative">
                            <button onClick={() => {setIsShowingDocs((isShowing) => !isShowing); setIsShowingStart(false)}}
                                    className="relative rounded hover:text-blue-300 active:text-blue-400 px-1">Docs <FontAwesomeIcon icon={faCaretDown}/>
                            </button>
                            <div className={selected === "docs" ? "absolute border-b-4 border-blue-400 h-3.5 w-full" : undefined}></div>
                            <Transition show={isShowingDocs} enter="transition-opacity duration-250" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-125" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <div className="absolute bg-navbar -left-1 rounded shadow-xl p-2 pr-8 bg-opacity-90 text-base hover:[&>*]:text-blue-300 active:[&>*]:text-blue-400" onClick={() => setIsShowingDocs(false)}>
                                    <div className="py-1"></div>
                                    <NavLink to="/swagger" onClick={() => setSelected("docs")}>
                                        <div className="py-1">Swagger</div>
                                    </NavLink>
                                    <NavLink to="/functional-description" onClick={() => setSelected("docs")}>
                                        <div className="py-1">FO</div>
                                    </NavLink>
                                    <NavLink to="/errors" onClick={() => setSelected("docs")}>
                                        <div className="py-1">Errors</div>
                                    </NavLink>
                                </div>
                            </Transition>
                        </div>

                        <NavLink to="/release-notes" onClick={() => setSelected("release-notes")}>
                            <div className="relative">
                                <button className="rounded hover:text-blue-300 active:text-blue-400 px-1">Release notes</button>
                                <div className={selected === "release-notes" ? "absolute border-b-4 border-blue-400 h-3.5 w-full" : undefined}></div>
                            </div>
                        </NavLink>

                    </ul>
                </div>

                <div className="grow"></div>

                <button className="rounded px-2 py-0.5 hover:bg-navbar90"><FontAwesomeIcon icon={faUser}/></button>
                <button className="rounded px-2 py-0.5 hover:bg-navbar90"><FontAwesomeIcon icon={faGear}/></button>

            </div>
        </header>


    );
};

export default NavBar;