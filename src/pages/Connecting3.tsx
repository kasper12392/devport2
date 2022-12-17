import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesUp, faPersonDigging, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import {faCopy} from "@fortawesome/free-regular-svg-icons";
import {NavLink} from "react-router-dom";

const Connecting = () => {

    // Scrolling
    const doScroll = (elementId:string) => {
        const element = document.getElementById(elementId);
        element !== null && element.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [isScrollerVisible, setIsScrollerVisible] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () =>
            window.removeEventListener("scroll", onScroll);
    })
    const onScroll = () => {
        setIsScrollerVisible((document.body.scrollTop || document.documentElement.scrollTop) > 1)
    }

    return (
        <div className="max-w-screen-lg mx-auto mt-16 text-gray-700">

            {isScrollerVisible && <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} className="fixed opacity-100 bg-gray-200 hover:bg-gray-300 active:border-2 border-gray-200 rounded-full top-20 right-7 h-10 w-10">
                <FontAwesomeIcon icon={faAnglesUp} className="text-gray-700 text-lg font-bold m-auto"></FontAwesomeIcon>
            </button>}

            <section className="">
                <div className="bg-yellow-100 text-sm rounded-lg px-4 py-2 text-yellow-700 inline-flex items-center w-full" role="alert">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="text-base mr-2"/>
                    <span className="font-medium">Please note:&nbsp;</span><span>Connecting to the API requires a Benefits-Plaza user with a client secret and id.</span>
                </div>
            </section>


            <div className="space-y-28 text-justify w-3/4 mt-8">
                <section>
                    <h1 className="text-5xl font-bold mb-6">Connecting to the API</h1>

                    <p className="mt-4">
                        The steps below show how you can quickly setup and make use of the API:
                        <ul className="list-disc ml-12 my-2">
                            <li><button onClick={() => doScroll("e1")} className="bg-sky-100 px-1 mb-1 border-b-2 border-sky-200">Authorization</button></li>
                            <li><button onClick={() => doScroll("e2")} className="bg-sky-100 px-1 mb-1 border-b-2 border-sky-200">Refreshing tokens</button></li>
                            <li><button onClick={() => doScroll("e3")} className="bg-sky-100 px-1 mb-1 border-b-2 border-sky-200">Obtaining data</button></li>
                            <li><button onClick={() => doScroll("e4")} className="bg-sky-100 px-1 mb-1 border-b-2 border-sky-200">Example: Get request</button></li>
                            <li><button onClick={() => doScroll("e5")} className="bg-sky-100 px-1 mb-1 border-b-2 border-sky-200">Example: Post request</button></li>
                        </ul>
                        Each step shows the request the api expects with the corresponding response. All fields shown in the request examples are manditory and must contain their described values.
                        Values shown in curly brackets must be filled with the users data.
                    </p>
                </section>


                <section id="e1" className="scroll-mt-24">
                    <h3 className="text-3xl font-bold">Authorization</h3>
                    <span className="text-base font-medium">[Obtaining a refresh and access token]</span>

                    <p className="mt-4">
                        Before you can obtain data you must authorize as a user by using your <span className="bg-amber-100 px-1">clientId</span> and <span className="bg-amber-100 px-1">clientSecret</span>.
                        All headers shown in the request below are required.
                        After a successful request you obtain a access_token and a refresh_token, make sure to store these to access the other enpoints.
                    </p>

                    <div className="space-y-2 mt-6">
                        <div>
                            <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Request:</div>
                            <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                                <p><span className="font-bold text-rose-400">url </span>: <span className="text-green-300">'https://api.benefits-plaza.nl/bpapi/authorize' </span>
                                    <button onClick={() => navigator.clipboard.writeText("https://api.benefits-plaza.nl/bpapi/authorize")}><FontAwesomeIcon icon={faCopy}/></button>
                                </p>
                                <p><span className="font-bold text-rose-400">method </span>: <span className="font-bold text-orange-300">post</span></p>
                                <p><span className="font-bold text-rose-400">headers </span>: &#123;</p>
                                <p><span className="text-gray-200">&ensp;'Content-Type'</span> : <span className="text-green-300">'application/x-www-form-urlencoded;charset=UTF-8'</span></p>
                                <p>&#125;</p>
                                <p><span className="font-bold text-rose-400">body </span>: &#123;</p>
                                <p><span className="text-gray-200">&ensp;'grant_type'</span> : <span className="text-green-300">'authorization_code'</span></p>
                                <p><span className="text-gray-200">&ensp;'client_id'</span> : <span className="text-blue-300">&#123; clientId:string &#125;</span></p>
                                <p><span className="text-gray-200">&ensp;'client_secret'</span> : <span className="text-blue-300">&#123; clientSecret:string &#125;</span></p>
                                <p>&#125;</p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Response:</div>
                            <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                                <p><span className="font-bold text-rose-400">body </span>: &#123;</p>
                                <p><span className="text-gray-200">&ensp;'access_token'</span> : <span className="text-green-300">'0jd7M03XYcQFwRjTVI91tsGIO'</span></p>
                                <p><span className="text-gray-200">&ensp;'token_type'</span> : <span className="text-green-300">'Bearer'</span></p>
                                <p><span className="text-gray-200">&ensp;'expires_in'</span> : <span className="text-cyan-300">600</span></p>
                                <p><span className="text-gray-200">&ensp;'refresh_token'</span> : <span className="text-green-300">'adanNl0dkl0GRnHjZERGfmWxY'</span></p>
                                <p>&#125;</p>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="e2" className="scroll-mt-24">
                    <h3 className="text-3xl font-bold">Refreshing tokens</h3>
                    <span className="text-base font-medium">[Refreshing your refresh and access token]</span>

                    <p className="mt-4">
                        Both access and refresh token have an expiration time.
                        The <span className="bg-amber-100 px-1">access token expires after 10 minutes</span> and the <span className="bg-amber-100 px-1">refresh token expires after 30 days</span>.
                        You can refresh both access token and refresh token by calling this endpoint with an active refresh token.
                        If both access and refresh tokens are expired you must make an authorization call again to obtain new ones.
                    </p>
                    {/*<p className="bg-amber-100 border-l-4 border-amber-200 px-1 mt-2"><span className="font-semibold">Tip: </span>Refresh your access token before each request that requires one to make sure it is never expired.</p>*/}

                    <div className="space-y-2 mt-6">
                        <div>
                            <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Request:</div>
                            <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                                <p><span className="font-bold text-rose-400">url </span>: <span className="text-green-300">'https://api.benefits-plaza.nl/bpapi/refresh' </span>
                                    <button onClick={() => navigator.clipboard.writeText("https://api.benefits-plaza.nl/bpapi/refresh")}><FontAwesomeIcon icon={faCopy}/></button>
                                </p>
                                <p><span className="font-bold text-rose-400">method </span>: <span className="font-bold text-orange-300">post</span></p>
                                <p><span className="font-bold text-rose-400">headers </span>: &#123;</p>
                                <p><span className="text-gray-200">&ensp;'Content-Type'</span> : <span className="text-green-300">'application/x-www-form-urlencoded;charset=UTF-8'</span></p>
                                <p>&#125;</p>
                                <p><span className="font-bold text-rose-400">body </span>: &#123;</p>
                                <p><span className="text-gray-200">&ensp;'grant_type'</span> : <span className="text-green-300">'refresh_token'</span></p>
                                <p><span className="text-gray-200">&ensp;'refresh_token'</span> : <span className="text-blue-300">&#123; refreshToken:string &#125;</span></p>
                                <p>&#125;</p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Response:</div>
                            <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                                <p><span className="font-bold text-rose-400">body </span>: &#123;</p>
                                <p><span className="text-gray-200">&ensp;'access_token'</span> : <span className="text-green-300">'0jd7M03XYcQFwRjTVI91tsGIO'</span></p>
                                <p><span className="text-gray-200">&ensp;'token_type'</span> : <span className="text-green-300">'Bearer'</span></p>
                                <p><span className="text-gray-200">&ensp;'expires_in'</span> : <span className="text-cyan-300">600</span></p>
                                <p><span className="text-gray-200">&ensp;'refresh_token'</span> : <span className="text-green-300">'adanNl0dkl0GRnHjZERGfmWxY'</span></p>
                                <p>&#125;</p>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="e3" className="scroll-mt-24">
                    <h3 className="text-3xl font-bold">Obtaining data</h3>
                    {/*<span className="text-base font-medium">[Retrieving data from the API]</span>*/}

                    <p className="mt-4">
                        Now that you have obtained an access token you are authorized to retrieve and post data to the API depending on user privileges.
                        Basic examples of a get en post request are shown below.
                        If you are already familiar with basic get and post requests you can skip this part and head straight to the &ensp;
                        <NavLink to="/swagger"><span className="bg-sky-100 px-1 border-b-2 border-sky-200">Swagger documentation</span></NavLink> for a more in depth overview of all our available endpoints.
                    </p>
                </section>


                <section id="e4" className="scroll-mt-24">
                    <h3 className="text-3xl font-bold">Example: Get request</h3>
                    <span className="text-base font-medium">[Retrieve data from the API]</span>

                    <p className="mt-4">
                        In this example we'll take a look at <span className="bg-amber-100 px-1">/employeeGet</span> endpoint.
                        In order to obtain data from the API you must pass your previously obtained access token in the Authorization header.
                        Make sure to <span className="bg-amber-100 px-1">prefix accessToken with "Bearer "</span>.
                        Certain get requests require an externalIdentifier when retrieving employee or employer specific data. You can pass the externalIdentifier as a parameter in the url.
                        The response will be the requested data in JSON format.
                    </p>

                    <div className="space-y-2 mt-6">
                        <div>
                            <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Request:</div>
                            <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                                <p><span className="font-bold text-rose-400">url </span>: <span className="text-green-300">'https://api.benefits-plaza.nl/bpapi/v1/employeeGet/&#123;externalIdentifier&#125;' </span><span className="text-blue-300"></span>
                                    <button onClick={() => navigator.clipboard.writeText("https://api.benefits-plaza.nl/bpapi/v1/employeeGet/{externalIdentifier}")}><FontAwesomeIcon icon={faCopy}/></button>
                                </p>
                                <p><span className="font-bold text-rose-400">method </span>: <span className="font-bold text-sky-300">get</span></p>
                                <p><span className="font-bold text-rose-400">headers </span>: &#123;</p>
                                <p><span className="text-gray-200">&ensp;'Authorization'</span> : <span className="text-green-300">'Bearer ' </span><span className="text-white">+ </span><span className="text-blue-300">&#123; accessToken:string &#125;</span></p>
                                <p>&#125;</p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Response:</div>
                            <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                                <p><span className="font-bold text-rose-400">body </span>: &#123;</p>
                                <p><span className="text-blue-300">&ensp;&#123; data:json &#125;</span></p>
                                <p>&#125;</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="e5" className="scroll-mt-24">
                    <h3 className="text-3xl font-bold">Example: Post request</h3>
                    <span className="text-base font-medium">[Posting data to the API]</span>

                    <p className="mt-4">
                        Comming soon <FontAwesomeIcon icon={faPersonDigging} className="text-red-400"/>
                    </p>
                </section>

                <div className="h-24"></div>
            </div>


        </div>
    );
};

export default Connecting;