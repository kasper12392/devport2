import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {faPaste, faImage} from "@fortawesome/free-regular-svg-icons";

const Connecting = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-16 text-gray-700 flex">

            <div className="border-r-2 pr-2 mr-10">
                <ul className="truncate">
                    <li className=""><p className="font-bold">Postman</p></li>
                    <li className=""><a href="default.asp" className="hover:text-orange-600">Generate Postman</a></li>
                    <li className=""><a href="default.asp" className="hover:text-orange-600">Update Postman</a></li>
                    <li className=""><a href="default.asp" className="hover:text-orange-600">Importing Postman</a></li>
                </ul>
            </div>

            {/*<div className="flex-col">*/}
            {/*    <div className="rounded bg-gray-100 p-2 mr-10 text-sm opacity-90">*/}
            {/*        <ul className="truncate">*/}
            {/*            <li className=""><p className="font-bold text-base">Content</p></li>*/}
            {/*            <li className=""><a href="default.asp" className="hover:text-sky-600">· Generate Postman files</a></li>*/}
            {/*            <li className=""><a href="default.asp" className="hover:text-sky-600">· Using files in Postman</a></li>*/}
            {/*        </ul>*/}
            {/*        <div className="flex-grow"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="space-y-12">

                {/*<div className="bg-yellow-100 text-sm rounded-lg p-4 text-yellow-700 inline-flex items-center w-full" role="alert">*/}
                {/*    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" className="w-4 h-4 mr-2 fill-current" role="img"*/}
                {/*         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">*/}
                {/*        <path fill="currentColor"*/}
                {/*              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>*/}
                {/*    </svg>*/}
                {/*    <span className="font-medium">Please note:&nbsp;</span><span>Connecting to the API requires a Benefits-Plaza user with a client secret and id. Requesting those can be done <a className="text-sky-600 underline" href="/eyyyyy">here</a>.</span>*/}
                {/*</div>*/}

                <section>
                    <h1 className="text-3xl font-bold">Generate Postman files</h1>
                    {/*<br/>*/}
                    {/*<h1 className="text-lg font-medium">Generate environment</h1>*/}
                    <p className="font-medium text-gray-500 mb-1">(last updated: 11-12-2022)</p>
                    <h1>ClientId:</h1>
                    <input className="border-2 w-2/5 p-1 text-sm outline-gray-300 rounded" type="text" placeholder="Rd0QC4qH1lZFn0QOpKufLIDkbbrO3NQB12WYMCXP+rs="/>
                    {/*<button className="rounded px-1 border-2 text-red-600 border-red-600 ml-1 bg-red-100"><FontAwesomeIcon icon={faCircleExclamation}/></button>*/}
                    <button className="rounded px-1 border-2 border-gray-300 ml-1 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-800"><FontAwesomeIcon icon={faPaste}/></button>
                    <h1>ClientSecret:</h1>
                    <input className="border-2 w-2/5 p-1 text-sm outline-gray-300 rounded" type="text" placeholder="Rd0QC4qH1lZFn0QOpKufLIDkbbrO3NQB12WYMCXP+rs="/>
                    <button className="rounded px-1 border-2 border-gray-300 ml-1 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-800"><FontAwesomeIcon icon={faPaste}/></button>
                    <br/>
                    <button className="bg-orange-500 text-white font-bold rounded py-1 px-2 mt-2 text-base hover:opacity-100 opacity-90">Generate files <FontAwesomeIcon icon={faDownload}/></button>
                </section>

                <section>
                    <h3 className="text-3xl font-bold">Update Postman files</h3>
                    <p className="font-medium text-gray-500 mb-1">(last updated: 11-12-2022)</p>

                    <div>
                        {/*<label className="block text-sm font-medium text-gray-700">Cover photo</label>*/}
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload"
                                           className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">JSON up to 10MB</p>
                            </div>
                        </div>
                        <button className="bg-orange-500 text-white font-bold rounded py-1 px-2 mt-2 text-base hover:opacity-100 opacity-90">Update files <FontAwesomeIcon icon={faDownload}/></button>
                    </div>
                </section>

                <section>
                    <h3 className="text-3xl font-bold">Importing Postman files</h3>
                    {/*<span className="text-base font-medium">(Obtaining a refresh and access token)</span>*/}
                    <p className="mt-1">
                        Now you have a collection.json and an environment.json you can import them into Postman. Select Import in the left navigation menu. etc. etc.
                    </p>
                    <p>[plaatje]</p>
                </section>

            </div>

        </div>
    );
};

export default Connecting;