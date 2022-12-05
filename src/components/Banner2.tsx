import React from 'react';
import {faGhost, faVirusCovid, faSkull, faBookSkull, faSkullCrossbones, faPlug, faWifi, faUser, faCircleDown, faCircleUp, faCircleChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Banner = () => {
    return (
        <div className="opacity-100">
            <div className="h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 flex">
                <span className="m-auto text-white font-semibold text-3xl">~ <span className="font-extrabold">API</span> devport ~</span>
                {/*<span className="m-auto text-white font-semibold text-3xl">· <span className="font-extrabold">API</span> devport ·</span>*/}
                {/*<span className="m-auto text-white font-semibold text-3xl"><span className="font-extrabold">API</span> · devport</span>*/}
                {/*<FontAwesomeIcon icon={faGhost} className="m-auto text-white font-bold text-5xl"/>*/}
            </div>
        </div>
    );
};

export default Banner;