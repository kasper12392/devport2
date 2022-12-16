import React from 'react';
import {faGhost, faVirusCovid, faSkull, faBookSkull, faSkullCrossbones, faPlug, faWifi, faUser, faCircleDown, faCircleUp, faArrowRight, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Banner = () => {
    return (
        <div className="">
            <div className=" bg-gradient-to-r from-indigo-500 to-cyan-500 flex">
                {/*<span className="m-auto text-white font-semibold text-3xl">~ <span className="font-extrabold">API</span> devport ~</span>*/}
                {/*<span className="m-auto text-white font-semibold text-3xl">· <span className="font-extrabold">API</span> devport ·</span>*/}
                {/*<span className="m-auto text-white font-semibold text-3xl"><span className="font-extrabold">API</span> · devport</span>*/}
                {/*<FontAwesomeIcon icon={faGhost} className="m-auto text-white font-bold text-5xl"/>*/}

                <section className="mx-auto my-36 pb-6 text-white max-w-screen-md">
                    {/*<h3 className="text-3xl font-bold">About</h3>*/}
                    <h3 className="text-6xl font-bold">BenefitsPlaza API</h3>
                    <p className="mt-1 text-xl">
                        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform.
                    </p>

                    <span>
                        <button className="bg-navbar90 rounded py-2 px-3 bg-opacity-70 mt-3 mr-2 hover:bg-opacity-80"><span className="opacity-100 font-bold text-lg">Learn more</span></button>
                        <button className="bg-navbar90 rounded py-2 px-3 bg-opacity-70 mt-3 mr-2 hover:bg-opacity-80"><span className="opacity-100 font-bold text-lg">Get started <FontAwesomeIcon icon={faArrowRight}/></span></button>
                    </span>

                </section>

            </div>
            <div className="h-12 skew-y-1 bg-white relative -top-6"></div>
        </div>
    );
};

export default Banner;