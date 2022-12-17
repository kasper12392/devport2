import React, {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight, faBolt, faCaretDown, faEnvelope, faFileLines, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const Home2 = () => {
    return (
        <div className="text-gray-700 space-y-20">

            <div className=""></div>

            <div className="bg-gray-50 -skew-y-1  py-12">
                <div className="flex space-x-24 max-w-screen-lg mx-auto skew-y-1">
                    <section className="">
                        <h3 className="text-3xl font-bold">About</h3>
                        <p className="mt-1">
                            The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can
                            only be accessed by registered users. This documentation describes version 1.0 of the API.
                        </p>
                    </section>

                    <section className="">
                        <h3 className="text-3xl font-bold">Get started!</h3>
                        <p className="mt-1">
                            The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can
                            only be accessed by registered users. This documentation describes version 1.0 of the API.
                        </p>

                        <div className="space-x-6 opacity-90">
                            <Link to="/connecting" className="relative active:top-0.5">
                                <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">
                                    <div className="bg-sky-500 py-2 px-2 rounded-l-lg group-hover:bg-sky-600">
                                        <FontAwesomeIcon icon={faBolt}/> Connecting
                                    </div>
                                    <div className="bg-sky-600 py-2 px-1 rounded-r-full group-hover:bg-sky-700">
                                        <FontAwesomeIcon icon={faAnglesRight}/>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/postman" className="relative active:top-0.5">
                                <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">
                                    <div className="bg-orange-500 py-2 px-2 rounded-l-lg group-hover:bg-orange-600">
                                        <FontAwesomeIcon icon={faPaperPlane}/> Postman
                                    </div>
                                    <div className="bg-orange-600 py-2 px-1 rounded-r-full group-hover:bg-orange-700">
                                        <FontAwesomeIcon icon={faAnglesRight}/>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/swagger" className="relative active:top-0.5">
                                <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">
                                    <div className="bg-green-500 py-2 px-2 rounded-l-lg group-hover:bg-green-600">
                                        <FontAwesomeIcon icon={faFileLines}/> Swagger
                                    </div>
                                    <div className="bg-green-600 py-2 px-1 rounded-r-full group-hover:bg-green-700">
                                        <FontAwesomeIcon icon={faAnglesRight}/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

            <div className=" -skew-y-1  py-12">
                <div className="max-w-screen-lg mx-auto skew-y-1">
                    <section className="col-span-2">
                        <h3 className="text-3xl font-bold">Available services</h3>

                        <div className="mt-4 grid grid-cols-4 gap-2">

                            {/*<button className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">*/}
                            {/*    <span className="font-semibold"><span className="bg-yellow-400 text-white text-sm px-2 ml-2 rounded-full">OAuth</span> /authorize</span>*/}
                            {/*    <div className="grow"></div>*/}
                            {/*    <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>*/}
                            {/*</button>*/}

                            {/*<button className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">*/}
                            {/*    <span className="font-semibold"><span className="bg-yellow-400 text-white text-sm px-2 ml-2 rounded-full">OAuth</span> /refresh</span>*/}
                            {/*    <div className="grow"></div>*/}
                            {/*    <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>*/}
                            {/*</button>*/}

                            <button className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">
                                <span className="font-semibold"><span className="bg-sky-400 text-white text-sm px-2 ml-2 rounded-full">Get</span> /employeeGet</span>
                                <div className="grow"></div>
                                <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>
                            </button>

                            <button className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">
                                <span className="font-semibold"><span className="bg-sky-400 text-white text-sm px-2 ml-2 rounded-full">Get</span> /employeePoliciesGet</span>
                                <div className="grow"></div>
                                <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>
                            </button>

                            <button className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">
                                <span className="font-semibold"><span className="bg-sky-400 text-white text-sm px-2 ml-2 rounded-full">Get</span> /employeesGet</span>
                                <div className="grow"></div>
                                <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>
                            </button>

                            <button className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">
                                <span className="font-semibold"><span className="bg-sky-400 text-white text-sm px-2 ml-2 rounded-full">Get</span> /employeersGet</span>
                                <div className="grow"></div>
                                <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>
                            </button>

                            <button className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">
                                <span className="font-semibold"><span className="bg-orange-400 text-white text-sm px-2 ml-2 rounded-full">Post</span> /employeePost</span>
                                <div className="grow"></div>
                                <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>
                            </button>

                            <button className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">
                                <span className="font-semibold"><span className="bg-orange-400 text-white text-sm px-2 ml-2 rounded-full">Post</span> /asrAovDing</span>
                                <div className="grow"></div>
                                <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>
                            </button>

                        </div>

                        {/*<div className="mt-4 opacity-100 space-x-6 flex">*/}

                        {/*    <div className="rounded-md font-bold text-l inline-flex flex-col w-52">*/}
                        {/*        <div className="bg-gray-700 text-white py-1 rounded-md">*/}
                        {/*            <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployeeGet</span>*/}
                        {/*        </div>*/}
                        {/*        /!*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*!/*/}
                        {/*        /!*    <div className="text-sm grow font-medium flex">*!/*/}
                        {/*        /!*        <span className="m-auto p-1">Retrieves an employee by external identifier</span>*!/*/}
                        {/*        /!*    </div>*!/*/}
                        {/*        /!*</div>*!/*/}
                        {/*    </div>*/}

                        {/*    <div className="rounded-md font-bold text-l inline-flex flex-col w-52">*/}
                        {/*        <div className="bg-gray-700 text-white py-1 rounded-md">*/}
                        {/*            <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployeePoliciesGet</span>*/}
                        {/*        </div>*/}
                        {/*        /!*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*!/*/}
                        {/*        /!*    <div className="text-sm grow font-medium flex">*!/*/}
                        {/*        /!*        <span className="m-auto p-1">Retrieves an employee with policy details by external identifier</span>*!/*/}
                        {/*        /!*    </div>*!/*/}
                        {/*        /!*</div>*!/*/}
                        {/*    </div>*/}

                        {/*    /!*<div className="rounded-md font-bold text-l inline-flex flex-col w-52">*!/*/}
                        {/*    /!*    <div className="bg-gray-700 text-white py-1 rounded-md">*!/*/}
                        {/*    /!*        <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployersGet</span>*!/*/}
                        {/*    /!*    </div>*!/*/}
                        {/*    /!*    /!*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*!/*!/*/}
                        {/*    /!*    /!*    <div className="text-sm grow font-medium flex">*!/*!/*/}
                        {/*    /!*    /!*        <span className="m-auto p-1">Retrieves all the users employers</span>*!/*!/*/}
                        {/*    /!*    /!*    </div>*!/*!/*/}
                        {/*    /!*    /!*</div>*!/*!/*/}
                        {/*    /!*</div>*!/*/}

                        {/*    <div className="rounded-md font-bold text-l inline-flex flex-col w-52">*/}
                        {/*        <div className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">*/}
                        {/*            <span className="ml-2"><span className="bg-sky-400 text-white text-sm font-semibold px-2 mr-1 rounded-full">Get</span>/employeeGet</span>*/}
                        {/*            <div className="grow"></div>*/}
                        {/*            <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>*/}
                        {/*        </div>*/}
                        {/*        /!*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*!/*/}
                        {/*        /!*    <div className="text-sm grow font-medium flex">*!/*/}
                        {/*        /!*        <span className="m-auto p-1">Updates an employee by external identifier</span>*!/*/}
                        {/*        /!*    </div>*!/*/}
                        {/*        /!*</div>*!/*/}
                        {/*    </div>*/}

                        {/*    <div className="rounded-md font-bold text-l inline-flex flex-col w-52">*/}
                        {/*        <div className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">*/}
                        {/*            <span className="ml-2"><span className="bg-orange-400 text-white text-sm font-semibold px-2 mr-1 rounded-full">Post</span>/employeePost</span>*/}
                        {/*            <div className="grow"></div>*/}
                        {/*            <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>*/}
                        {/*        </div>*/}
                        {/*        /!*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*!/*/}
                        {/*        /!*    <div className="text-sm grow font-medium flex">*!/*/}
                        {/*        /!*        <span className="m-auto p-1">Updates an employee by external identifier</span>*!/*/}
                        {/*        /!*    </div>*!/*/}
                        {/*        /!*</div>*!/*/}
                        {/*    </div>*/}

                        {/*</div>*/}

                    </section>
                </div>
            </div>

            <div className="bg-gray-50 skew-y-1  py-12">
                <div className="flex space-x-24 max-w-screen-lg mx-auto -skew-y-1">

                    <section className="col-span-1">
                        <h3 className="text-3xl font-bold">Obtaining access</h3>
                        <p className="mt-1">
                            In time the API, and policies regarding the API can change. These changes are subject to the following guidelines.
                            The following states hold true for the change policy for this API.
                        </p>
                        <button className="relative active:top-0.5 opacity-90">
                            <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">
                                <div className="bg-slate-500 py-2 px-2 rounded-l-lg group-hover:bg-slate-600">
                                    <FontAwesomeIcon icon={faEnvelope}/> Request access
                                </div>
                                <div className="bg-slate-600 py-2 px-1 rounded-r-full group-hover:bg-slate-700">
                                    <FontAwesomeIcon icon={faAnglesRight}/>
                                </div>
                            </div>
                        </button>
                    </section>

                    <section className="col-span-1">
                        <h3 className="text-3xl font-bold">Iets anders</h3>
                        <p className="mt-1">
                            In time the API, and policies regarding the API can change. These changes are subject to the following guidelines.
                            The following states hold true for the change policy for this API.
                        </p>
                    </section>
                </div>
            </div>


            <div className=" skew-y-1 py-12">
                <div className="max-w-screen-lg mx-auto -skew-y-1">
                    <section className="col-span-2">
                        <h3 className="text-3xl font-bold">Change policy</h3>
                        <p className="mt-1">
                            In time the API, and policies regarding the API can change. These changes are subject to the following guidelines.
                            The following states hold true for the change policy for this API:
                        </p>
                        <ul className="list-disc ml-6 mt-1">
                            <li>Keylane may sometimes introduce changes to the Benefits-Plaza API and policies without advance notice.</li>
                            <li>Keylane will try to inform users of any (breaking) change in advance.</li>
                            <li>Keylane will not be liable to you or any third party for such modifications or any adverse effects resulting from such modifications.</li>
                            <li>Keylane will try to avoid breaking changes as much as possible.</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className=""></div>

        </div>

    );
};

export default Home2;