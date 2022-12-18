import React, {useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fa1, fa2, fa3, faAnglesRight, faEnvelope, faTriangleExclamation, faAnglesLeft, faAnglesDown, faAnglesUp} from "@fortawesome/free-solid-svg-icons";
import {faCopy, faImage, faPaste} from "@fortawesome/free-regular-svg-icons";

const Connecting = () => {

    const myRef = useRef<HTMLDivElement>(null);
    const doScroll = () => {
        if (myRef !== null && myRef.current !== null)  {
            myRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="max-w-screen-lg mx-auto mt-16 text-gray-700 flex">

            <div className="mr-8 rounded h-fit p-2 sticky top-20">
                <p className="font-bold text-base border-b-2">Steps</p>
                <ol className="truncate pr-4">
                    {/*<li className=""><p className="font-bold">Content</p></li>*/}
                    {/*<li className=""><a href="default.asp" className="hover:text-sky-600">Step 1: Authorization</a></li>*/}
                    {/*<li className=""><a href="default.asp" className="hover:text-sky-600">Step 2: Refresh</a></li>*/}
                    {/*<li className=""><a href="default.asp" className="hover:text-sky-600">Step 3: Obtaining data</a></li>*/}
                    {/*<li className=""><a href="default.asp" className="hover:text-sky-600">Step 4: Posting data</a></li>*/}

                    <li><button onClick={doScroll} className="hover:text-orange-600">1. Authorization</button></li>
                    <li><button onClick={doScroll} className="hover:text-orange-600">2. Refresh</button></li>
                    <li><button onClick={doScroll} className="hover:text-orange-600">3. Obtaining data</button></li>
                    <li><button onClick={doScroll} className="hover:text-orange-600">4. Posting data</button></li>
                </ol>
            </div>

            {/*<div className="flex-col">*/}
            {/*    <div className="">*/}
            {/*        <ul className="truncate">*/}
            {/*            <li className=""><p className="font-bold text-base">Steps</p></li>*/}
            {/*            <li className=""><a href="default.asp" className="hover:text-sky-600">1. Authorization</a></li>*/}
            {/*            <li className=""><a href="default.asp" className="hover:text-sky-600">2. Refresh</a></li>*/}
            {/*            <li className=""><a href="default.asp" className="hover:text-sky-600">3. Obtaining data</a></li>*/}
            {/*            <li className=""><a href="default.asp" className="hover:text-sky-600">4. Posting data</a></li>*/}
            {/*        </ul>*/}
            {/*        <div className="flex-grow"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="space-y-12 max-w-screen-md mx-auto">

                {/*<div className="bg-yellow-100 text-sm rounded-lg px-4 py-2 text-yellow-700 inline-flex items-center w-full" role="alert">*/}
                {/*    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" className="w-4 h-4 mr-2 fill-current" role="img"*/}
                {/*         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">*/}
                {/*        <path fill="currentColor"*/}
                {/*              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>*/}
                {/*    </svg>*/}
                {/*    /!*<span className="font-medium">Please note:&nbsp;</span><span>Connecting to the API requires a Benefits-Plaza user with a client secret and id. Requesting those can be done <a className="text-sky-600 underline" href="/eyyyyy">here</a>.</span>*!/*/}
                {/*    <span className="font-medium">Please note:&nbsp;</span><span>Connecting to the API requires a Benefits-Plaza user with a client secret and id.</span>*/}
                {/*</div>*/}

                <section>

                    {/*todo col 2-1-1*/}
                    {/*<div className="grid grid-rows-2 grid-flow-col gap-4">*/}
                    {/*    <div className="row-span-2">*/}
                    {/*        <h3 ref={myRef} className="text-3xl font-bold mb-6">Step 1: Authorization</h3><span className="text-base font-medium">(Obtaining a refresh and access token)</span>*/}
                    {/*        <p>*/}
                    {/*            Before you can obtain data you must authorize as a user by using your <span className="font-bold">clientId</span> and <span className="font-bold">clientSecret</span>.*/}
                    {/*            Make sure to use the all headers shown below.*/}
                    {/*            After a successful request you obtain a <span className="font-bold">access_token</span> and <span className="font-bold">refresh_token</span> make sure to save these.*/}
                    {/*            The <span className="font-bold">expires_in</span> field refers to the expiration of the <span className="font-bold">access_token</span> in seconds.*/}
                    {/*            The <span className="font-bold">expires_in</span> has an expiration time of 30 days.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}

                    {/*    <div className="">*/}
                    {/*        <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Request:</div>*/}
                    {/*        <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">*/}
                    {/*            <p><span className="font-bold text-rose-400">url </span>: <span className="text-green-300">'https://api.benefits-plaza.nl/bpapi/authorize'</span>*/}
                    {/*                <button><FontAwesomeIcon icon={faCopy}/></button>*/}
                    {/*            </p>*/}
                    {/*            <p><span className="font-bold text-rose-400">method </span>: <span className="font-bold text-orange-300">post</span></p>*/}
                    {/*            <p><span className="font-bold text-rose-400">headers </span>: &#123;</p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'content_type'</span> : <span className="text-green-300">'application/x-www-form-urlencoded;charset=UTF-8'</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'grant_type'</span> : <span className="text-green-300">'authorization'</span></p>*/}
                    {/*            /!*<p><span className="text-gray-200">&ensp;'client_id'</span> : <span className="text-green-300">'12345'</span></p>*!/*/}
                    {/*            /!*<p><span className="text-gray-200">&ensp;'client_secret'</span> : <span className="text-green-300">'hjsrrhtshrtsdgr'</span></p>*!/*/}
                    {/*            <p><span className="text-gray-200">&ensp;'client_id'</span> : <span className="text-blue-300">&#123; clientId: string &#125;</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'client_secret'</span> : <span className="text-blue-300">&#123; clientSecret: string &#125;</span></p>*/}
                    {/*            <p>&#125;</p>*/}
                    {/*            <p><span className="font-bold text-rose-400">body </span>: &#123;&#125;</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="">*/}
                    {/*        <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Response:</div>*/}
                    {/*        <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">*/}
                    {/*            <p><span className="font-bold text-rose-400">body </span>: &#123;</p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'access_token'</span> : <span className="text-green-300">'0jd7M03XYcQFwRjTVI91tsGIO'</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'token_type'</span> : <span className="text-green-300">'Bearer'</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'expires_in'</span> : <span className="text-cyan-300">600</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'refresh_token'</span> : <span className="text-green-300">'adanNl0dkl0GRnHjZERGfmWxY'</span></p>*/}
                    {/*            <p>&#125;</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*todo 1-1-1*/}
                    <div className="">
                        <h3 className="text-3xl font-bold mb-6">Step 1: Authorization</h3><span className="text-base font-medium">(Obtaining a refresh and access token)</span>
                        <p>
                            Before you can obtain data you must authorize as a user by using your <span className="font-bold">clientId</span> and <span className="font-bold">clientSecret</span>.
                            Make sure to use the all headers shown below.
                            After a successful request you obtain a <span className="font-bold">access_token</span> and <span className="font-bold">refresh_token</span> make sure to save these.
                            The <span className="font-bold">expires_in</span> field refers to the expiration of the <span className="font-bold">access_token</span> in seconds.
                            The <span className="font-bold">expires_in</span> has an expiration time of 30 days.
                        </p>
                    </div>

                    <div className="h-6"></div>

                    <div className="">
                        <div className="bg-gray-700  rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Request:</div>
                        <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                            <p><span className="font-bold text-rose-400">url </span>: <span className="text-green-300">'https://api.benefits-plaza.nl/bpapi/authorize'</span>
                                <button><FontAwesomeIcon icon={faCopy}/></button>
                            </p>
                            <p><span className="font-bold text-rose-400">method </span>: <span className="font-bold text-orange-300">post</span></p>
                            <p><span className="font-bold text-rose-400">headers </span>: &#123;</p>
                            <p><span className="text-gray-200">&ensp;'content_type'</span> : <span className="text-green-300">'application/x-www-form-urlencoded;charset=UTF-8'</span></p>
                            <p><span className="text-gray-200">&ensp;'grant_type'</span> : <span className="text-green-300">'authorization'</span></p>
                            {/*<p><span className="text-gray-200">&ensp;'client_id'</span> : <span className="text-green-300">'12345'</span></p>*/}
                            {/*<p><span className="text-gray-200">&ensp;'client_secret'</span> : <span className="text-green-300">'hjsrrhtshrtsdgr'</span></p>*/}
                            <p><span className="text-gray-200">&ensp;'client_id'</span> : <span className="text-blue-300">&#123; clientId: string &#125;</span></p>
                            <p><span className="text-gray-200">&ensp;'client_secret'</span> : <span className="text-blue-300">&#123; clientSecret: string &#125;</span></p>
                            <p>&#125;</p>
                            <p><span className="font-bold text-rose-400">body </span>: &#123;&#125;</p>
                        </div>

                        <div className="h-4"></div>

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


                    {/*todo 2-1-1*/}
                    {/*<div className="flex">*/}
                    {/*    <div className="w-1/2">*/}
                    {/*        <div className="bg-gray-700 rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Request:</div>*/}
                    {/*        <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code h-60">*/}
                    {/*            <p><span className="font-bold text-rose-400">url </span>: <span className="text-green-300">'https://api.benefits-plaza.nl/bpapi/authorize'</span>*/}
                    {/*                <button><FontAwesomeIcon icon={faCopy}/></button>*/}
                    {/*            </p>*/}
                    {/*            <p><span className="font-bold text-rose-400">method </span>: <span className="font-bold text-orange-300">post</span></p>*/}
                    {/*            <p><span className="font-bold text-rose-400">headers </span>: &#123;</p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'content_type'</span> : <span className="text-green-300">'application/x-www-form-urlencoded;charset=UTF-8'</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'grant_type'</span> : <span className="text-green-300">'authorization'</span></p>*/}
                    {/*            /!*<p><span className="text-gray-200">&ensp;'client_id'</span> : <span className="text-green-300">'12345'</span></p>*!/*/}
                    {/*            /!*<p><span className="text-gray-200">&ensp;'client_secret'</span> : <span className="text-green-300">'hjsrrhtshrtsdgr'</span></p>*!/*/}
                    {/*            <p><span className="text-gray-200">&ensp;'client_id'</span> : <span className="text-blue-300">&#123; clientId: string &#125;</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'client_secret'</span> : <span className="text-blue-300">&#123; clientSecret: string &#125;</span></p>*/}
                    {/*            <p>&#125;</p>*/}
                    {/*            <p><span className="font-bold text-rose-400">body </span>: &#123;&#125;</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="h-full bg-red-500 w-1"></div>*/}

                    {/*    <div className="grow ">*/}
                    {/*        <div className="bg-gray-700 rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Response:</div>*/}
                    {/*        <div className="rounded-lg rounded-t-none  bg-gray-800 p-3 pt-2 text-sm text-white font-code h-60">*/}
                    {/*            <p><span className="font-bold text-rose-400">body </span>: &#123;</p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'access_token'</span> : <span className="text-green-300">'0jd7M03XYcQFwRjTVI91tsGIO'</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'token_type'</span> : <span className="text-green-300">'Bearer'</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'expires_in'</span> : <span className="text-cyan-300">600</span></p>*/}
                    {/*            <p><span className="text-gray-200">&ensp;'refresh_token'</span> : <span className="text-green-300">'adanNl0dkl0GRnHjZERGfmWxY'</span></p>*/}
                    {/*            <p>&#125;</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="h-8"></div>

                    {/*Requirements:*/}
                    {/*/!*https://stackoverflow.com/questions/6260457/using-headers-with-the-python-requests-librarys-get-method*!/*/}
                    {/*Header:*/}
                    {/*<li>access token</li>*/}
                    {/*Example request:*/}
                    {/*Example response:*/}
                    {/*Endpoint:*/}
                    {/*<p className="mt-1">*/}
                    {/*    The Benefits-Plaza API is a RESTfull API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can*/}
                    {/*    only be accessed by registered users. This documentation describes version 1.0 of the API.*/}
                    {/*</p>*/}
                </section>
                <section>
                    <h3 className="text-3xl font-bold">Step 2: Refresh</h3><span className="text-base font-medium">(Refreshing the refresh and access token)</span>

                    <p className="mt-1">
                        In time the API, and policies regarding the API can change. These changes are subject to the following guidelines.
                        The following states hold true for the change policy for this API:

                        Keylane may sometimes introduce changes to the Benefits-Plaza API and policies without advance notice.
                        Keylane will try to inform users of any (breaking) change in advance.
                        Keylane will not be liable to you or any third party for such modifications or any adverse effects resulting from such modifications.
                        Keylane will try to avoid breaking changes as much as possible.
                    </p>

                    <div className="h-6"></div>

                    <div className="bg-gray-700   rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Request:</div>
                    <div className="rounded-lg rounded-t-none   bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                        <p><span className="font-bold text-rose-400">url </span>: <span className="text-green-300">'https://api.benefits-plaza.nl/bpapi/refresh'</span>
                            <button><FontAwesomeIcon icon={faCopy}/></button>
                        </p>
                        <p><span className="font-bold text-rose-400">method </span>: <span className="font-bold text-orange-300">post</span></p>
                        <p><span className="font-bold text-rose-400">headers </span>: &#123;</p>
                        <p><span className="text-gray-200">&ensp;'content_type'</span> : <span className="text-green-300">'application/x-www-form-urlencoded;charset=UTF-8'</span></p>
                        <p><span className="text-gray-200">&ensp;'grant_type'</span> : <span className="text-green-300">'refresh'</span></p>
                        <p><span className="text-gray-200">&ensp;'refresh_token'</span> : <span className="text-blue-300">&#123; refreshToken: string &#125;</span></p>
                        <p>&#125;</p>
                        <p><span className="font-bold text-rose-400">body </span>: &#123;&#125;</p>
                    </div>

                    <br/>

                    <div className="bg-gray-700   rounded-lg rounded-b-none pl-2 py-1 font-bold text-white">Response:</div>
                    <div className="rounded-lg rounded-t-none   bg-gray-800 p-3 pt-2 text-sm text-white font-code">
                        <p><span className="font-bold text-rose-400">body </span>: &#123;</p>
                        <p><span className="text-gray-200">&ensp;'access_token'</span> : <span className="text-green-300">'0jd7M03XYcQFwRjTVI91tsGIO'</span></p>
                        <p><span className="text-gray-200">&ensp;'token_type'</span> : <span className="text-green-300">'Bearer'</span></p>
                        <p><span className="text-gray-200">&ensp;'expires_in'</span> : <span className="text-cyan-300">600</span></p>
                        <p><span className="text-gray-200">&ensp;'refresh_token'</span> : <span className="text-green-300">'adanNl0dkl0GRnHjZERGfmWxY'</span></p>
                        <p>&#125;</p>
                    </div>

                </section>
                <section>
                    <h3 className="text-3xl font-bold">3. Get requests</h3>


                </section>
                <section>
                    <h3 className="text-3xl font-bold">4. Post requests (comming soon)</h3>


                </section>
            </div>

        </div>
    );
};

export default Connecting;