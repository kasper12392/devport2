import React from 'react';
import {faGhost, faVirusCovid, faSkull, faBookSkull, faSkullCrossbones, faPlug, faEarth, faUser, faCircleDown, faCircleUp, faCircleChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Banner = () => {
    return (
        <div className="opacity-90 relative w-screen h-20">
            {/*<div className="h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 flex">*/}
                {/*<span className="m-auto text-white font-semibold text-3xl">~ <span className="font-extrabold">API</span> devport ~</span>*/}
                {/*<span className="m-auto text-white font-semibold text-3xl">· <span className="font-extrabold">API</span> devport ·</span>*/}
                {/*<span className="m-auto text-white font-semibold text-3xl"><span className="font-extrabold">API</span> · devport</span>*/}
                {/*<FontAwesomeIcon icon={faGhost} className="m-auto text-white font-bold text-5xl"/>*/}
            {/*</div>*/}
            <img className="w-full h-full object-cover object-top" src={require('../resources/dinges.jpg')}/>
            <span className="opacity-90 absolute top-1/2 left-36 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-4xl"><span className="font-extrabold">API</span> · devport</span>
        </div>
    );
};

export default Banner;