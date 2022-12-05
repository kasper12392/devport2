import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faUser} from '@fortawesome/free-solid-svg-icons'
import {Menu, Transition} from '@headlessui/react'
import {Link} from "react-router-dom";


const NavBar = () => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <header className="bg-[#20232a]">
            <div className="flex h-14 mx-auto items-center max-w-screen-xl text-lg text-gray-100">
                {/*<header className="bg-neutral-100">*/}
                {/*    <div className="flex h-14 mx-auto items-center max-w-screen-xl text-lg text-gray-700">*/}

                <div className="">
                    <ul className="flex flex-row space-x-16">
                        {/*<li className="px-6 rounded"><a href="default" className="text-cyan-400">Home</a><div className="bg-cyan-400 h-1"></div></li>*/}
                        {/*<li className="px-6 rounded"><a href="default" className="text-orange-500"><FontAwesomeIcon icon={faHome}/></a></li>*/}
                        <Link to="/home">
                            <button className="rounded hover:text-sky-200 px-1">Home</button>
                        </Link>
                        <Link to="/getting-started">
                            <button className="rounded hover:text-sky-200 px-1">Getting started <FontAwesomeIcon icon={faCaretDown}/></button>
                        </Link>
                        <Link to="/docs">
                            <button className="rounded hover:text-sky-200 px-1">Docs <FontAwesomeIcon icon={faCaretDown}/></button>
                        </Link>
                        <Link to="/release-notes">
                            <button className="rounded hover:text-sky-200 px-1">Release notes</button>
                        </Link>
                        <Link to="/contact">
                            <button className="rounded hover:text-sky-200 px-1">Contact</button>
                        </Link>
                    </ul>
                </div>

                <div className="grow"></div>

                <Menu as="div" className="relative inline-block text-left pr-2">
                    <div>
                        <Menu.Button
                            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <p>Options <FontAwesomeIcon icon={faCaretDown}/></p>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-150"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({active}) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Support
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            License
                                        </a>
                                    )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                    <Menu.Item>
                                        {({active}) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block w-full px-4 py-2 text-left text-sm'
                                                )}
                                            >
                                                Sign out
                                            </button>
                                        )}
                                    </Menu.Item>
                                </form>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                <Link to="/profile">
                    <button className="rounded hover:text-sky-200 px-2"><FontAwesomeIcon icon={faUser}/></button>
                </Link>

            </div>
        </header>


    );
};

export default NavBar;