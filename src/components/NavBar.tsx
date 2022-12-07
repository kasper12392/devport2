import React, {Fragment, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faUser, faGear} from '@fortawesome/free-solid-svg-icons'
import {Menu, Transition} from '@headlessui/react'
import {Link, NavLink} from "react-router-dom";


const NavBar = () => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    const [isShowing, setIsShowing] = useState(false)

    return (
        <header className="bg-navbar shadow-xl">
            <div className="flex h-14 mx-auto items-center max-w-screen-xl text-lg text-gray-100">
                {/*<header className="bg-neutral-100">*/}
                {/*    <div className="flex h-14 mx-auto items-center max-w-screen-xl text-lg text-gray-700">*/}

                <div className="">
                    <ul className="flex flex-row space-x-16">
                        {/*<li className="px-6 rounded"><a href="default" className="text-cyan-400">Home</a><div className="bg-cyan-400 h-1"></div></li>*/}
                        {/*<li className="px-6 rounded"><a href="default" className="text-orange-500"><FontAwesomeIcon icon={faHome}/></a></li>*/}
                        <NavLink to="/home" className={({ isActive }) => isActive ? "text-indigo-300" : undefined}>
                            <button className="rounded hover:text-orange-200 px-1">Home</button>
                        </NavLink>
                        {/*<Link to="/getting-started">*/}
                        <div>
                            <button onClick={() => setIsShowing((isShowing) => !isShowing)} className="rounded hover:text-orange-200 px-1">Getting started <FontAwesomeIcon icon={faCaretDown}/></button>
                            <Transition show={isShowing} enter="transition-opacity duration-250" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-125" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <div className="absolute bg-navbar w-40 rounded shadow-xl p-2 opacity-90 hover:[&>*]:text-orange-200 transition-transform text-base" onClick={() => setIsShowing(false)}>
                                    <div className="py-1"></div>
                                    <Link to="/getting-started">
                                        <div className="py-1">Connecting</div>
                                    </Link>
                                    <Link to="/postman">
                                        <div className="py-1">Postman</div>
                                    </Link>
                                    <Link to="/getting-started">
                                        <div className="py-1">Nog iets</div>
                                    </Link>
                                    <div className="h-0.5 bg-white opacity-10 mt-0.5"></div>
                                    <Link to="/getting-started">
                                        <div className="py-1">Dinges</div>
                                    </Link>
                                </div>
                            </Transition>
                        </div>
                        {/*</Link>*/}
                        <Link to="/docs">
                            <button className="rounded hover:text-orange-200 px-1">Docs <FontAwesomeIcon icon={faCaretDown}/></button>
                        </Link>
                        <Link to="/release-notes">
                            <button className="rounded hover:text-orange-200 px-1">Release notes</button>
                        </Link>
                        <Link to="/contact">
                            <button className="rounded hover:text-orange-200 px-1">Contact</button>
                        </Link>
                    </ul>
                </div>

                <div className="grow"></div>

                {/*<Menu as="div" className="relative inline-block text-left pr-2">*/}
                {/*    <div>*/}
                {/*        <Menu.Button*/}
                {/*            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">*/}
                {/*            <p>Options <FontAwesomeIcon icon={faCaretDown}/></p>*/}
                {/*        </Menu.Button>*/}
                {/*    </div>*/}

                {/*    <Transition*/}
                {/*        as={Fragment}*/}
                {/*        enter="transition ease-out duration-150"*/}
                {/*        enterFrom="transform opacity-0 scale-95"*/}
                {/*        enterTo="transform opacity-100 scale-100"*/}
                {/*        leave="transition ease-in duration-75"*/}
                {/*        leaveFrom="transform opacity-100 scale-100"*/}
                {/*        leaveTo="transform opacity-0 scale-95"*/}
                {/*    >*/}
                {/*        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                {/*            <div className="py-1">*/}
                {/*                <Menu.Item>*/}
                {/*                    {({active}) => (*/}
                {/*                        <a*/}
                {/*                            href="#"*/}
                {/*                            className={classNames(*/}
                {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                {/*                                'block px-4 py-2 text-sm'*/}
                {/*                            )}*/}
                {/*                        >*/}
                {/*                            Account settings*/}
                {/*                        </a>*/}
                {/*                    )}*/}
                {/*                </Menu.Item>*/}
                {/*                <Menu.Item>*/}
                {/*                    {({active}) => (*/}
                {/*                        <a*/}
                {/*                            href="#"*/}
                {/*                            className={classNames(*/}
                {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                {/*                                'block px-4 py-2 text-sm'*/}
                {/*                            )}*/}
                {/*                        >*/}
                {/*                            Support*/}
                {/*                        </a>*/}
                {/*                    )}*/}
                {/*                </Menu.Item>*/}
                {/*                <Menu.Item>*/}
                {/*                    {({active}) => (*/}
                {/*                        <a*/}
                {/*                            href="#"*/}
                {/*                            className={classNames(*/}
                {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                {/*                                'block px-4 py-2 text-sm'*/}
                {/*                            )}*/}
                {/*                        >*/}
                {/*                            License*/}
                {/*                        </a>*/}
                {/*                    )}*/}
                {/*                </Menu.Item>*/}
                {/*                <form method="POST" action="#">*/}
                {/*                    <Menu.Item>*/}
                {/*                        {({active}) => (*/}
                {/*                            <button*/}
                {/*                                type="submit"*/}
                {/*                                className={classNames(*/}
                {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                {/*                                    'block w-full px-4 py-2 text-left text-sm'*/}
                {/*                                )}*/}
                {/*                            >*/}
                {/*                                Sign out*/}
                {/*                            </button>*/}
                {/*                        )}*/}
                {/*                    </Menu.Item>*/}
                {/*                </form>*/}
                {/*            </div>*/}
                {/*        </Menu.Items>*/}
                {/*    </Transition>*/}
                {/*</Menu>*/}

                <Link to="/profile">
                    <button className="rounded px-2 py-0.5 hover:bg-navbar90"><FontAwesomeIcon icon={faUser}/></button>
                </Link>
                <button className="rounded px-2 py-0.5 hover:bg-navbar90"><FontAwesomeIcon icon={faGear}/></button>

            </div>
        </header>


    );
};

export default NavBar;