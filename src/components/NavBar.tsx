import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookSkull, faVirusCovid, faSkull, faCode, faLayerGroup, faGear, faEarth, faHome, faSortDown, faCaretDown, faUser} from '@fortawesome/free-solid-svg-icons'
// import {faUser} from '@fortawesome/free-regular-svg-icons'

const NavBar = () => {
    return (
        <header className="bg-neutral-100">
            <div className="flex h-14 mx-auto items-center max-w-screen-xl text-lg text-gray-700">

                <div className="">
                    <ul className="flex flex-row space-x-6">
                        {/*<li className="px-6 rounded"><a href="default.asp" className="text-cyan-400">Home</a><div className="bg-cyan-400 h-1"></div></li>*/}
                        {/*<li className="px-6 rounded"><a href="default.asp" className="text-orange-500"><FontAwesomeIcon icon={faHome}/></a></li>*/}
                        <li className="px-6 rounded"><a href="default.asp" className="hover:text-sky-600">Home</a></li>
                        <li className="px-6 rounded"><a href="news.asp" className="hover:text-sky-600">Getting started <FontAwesomeIcon icon={faCaretDown}/></a></li>
                        <li className="px-6 rounded"><a href="contact.asp" className="hover:text-sky-600">Docs <FontAwesomeIcon icon={faCaretDown}/></a></li>
                        <li className="px-6 rounded"><a href="about.asp" className="hover:text-sky-600">Release notes</a></li>
                        <li className="px-6 rounded"><a href="about.asp" className="hover:text-sky-600">Contact</a></li>
                    </ul>
                </div>

                <div className="grow"></div>

                <div className="space-x-2">
                    {/*<a href="about.asp" className="hover:text-cyan-400"><FontAwesomeIcon icon={faGear}/></a>*/}
                    <a href="about.asp" className="hover:text-sky-600"><FontAwesomeIcon icon={faUser}/></a>
                </div>

            </div>
        </header>


    );
};

export default NavBar;