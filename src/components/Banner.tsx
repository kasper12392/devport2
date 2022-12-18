import React, {useEffect, useRef} from 'react';
import {faGhost, faVirusCovid, faSkull, faBookSkull, faSkullCrossbones, faPlug, faWifi, faUser, faCircleDown, faCircleUp, faArrowRight, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";


const Banner = () => {

    // Scrolling
    const myRef = useRef<null | HTMLDivElement>(null);
    const doScroll = () => {
        myRef.current !== null && myRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="">
            <div className=" bg-gradient-to-r from-indigo-500 to-cyan-500 flex skew-y-1 relative -top-6">

                <section className="mx-auto my-44 text-white max-w-screen-md -skew-y-1">
                    <h3 className="text-6xl font-bold">BenefitsPlaza API</h3>
                    <p className="mt-1 text-xl">
                        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform.
                    </p>

                    <span>
                        <button onClick={doScroll} className="bg-navbar90 rounded py-2 px-3 mt-3 mr-2 bg-opacity-70 hover:bg-opacity-80 relative active:top-0.5"><span className="opacity-100 font-bold text-lg">Learn more</span></button>
                        <NavLink to="/connecting">
                            <button className="bg-navbar90 rounded py-2 px-3 mt-3 mr-2 bg-opacity-70 hover:bg-opacity-80 relative active:top-0.5"><span className="opacity-100 font-bold text-lg">Get started <FontAwesomeIcon icon={faArrowRight}/></span></button>
                        </NavLink>
                    </span>

                </section>

            </div>
            <div ref={myRef}></div>
        </div>
    );
};

export default Banner;