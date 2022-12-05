import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fa1, fa2, fa3, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

const Connecting = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-16 text-gray-700 flex">



            <div className="w-1/2 border-r-2 mr-10">
                <ul className="truncate pr-2">
                    <li className=""><p className="font-bold">Content</p></li>
                    <li className=""><a href="default.asp" className="hover:text-sky-600">Step 1: Authorization</a></li>
                    <li className=""><a href="default.asp" className="hover:text-sky-600">Step 2: Refresh</a></li>
                    <li className=""><a href="default.asp" className="hover:text-sky-600">Step 3: Obtaining data</a></li>
                    <li className=""><a href="default.asp" className="hover:text-sky-600">Step 4: Posting data</a></li>
                </ul>
            </div>

            <div className="space-y-12">

                <div className="bg-yellow-100 text-sm rounded-lg p-4 text-yellow-700 inline-flex items-center w-full" role="alert">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" className="w-4 h-4 mr-2 fill-current" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                    </svg>
                    <span className="font-medium">Attention:&nbsp;</span><span>Connecting to the API requires a Benefits-Plaza user with a client secret and id. Requesting those can be done <a className="text-sky-600 underline" href="/eyyyyy">here</a>.</span>
                </div>

                <section>
                    <h3 className="text-3xl font-bold">Step 1: Authorization</h3><span className="text-base font-medium">(Obtaining a refresh and access token)</span>
                    <br/><br/>
                    Requirements:
                    {/*https://stackoverflow.com/questions/6260457/using-headers-with-the-python-requests-librarys-get-method*/}
                    Header:
                    <li>access token</li>
                    Example request:
                    Example response:
                    Endpoint:
                    <p className="mt-1">
                        The Benefits-Plaza API is a RESTfull API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can
                        only be accessed by registered users. This documentation describes version 1.0 of the API.
                    </p>
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