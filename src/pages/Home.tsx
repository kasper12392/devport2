import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight, faFileLines, faPaperPlane, faPersonDigging, faPlug, faSeedling, faHandcuffs, faPencil, faFile, faRunning, faPersonRunning, faCloud, faGear, faFire, faEye, faBolt, faEnvelope, faCircleUp, faCircleDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-screen-lg mx-auto mt-16 text-gray-700 flex">

            <div className="space-y-24">
                <section>
                    <h3 className="text-3xl font-bold">About</h3>
                    <p className="mt-1">
                        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can
                        only be accessed by registered users. This documentation describes version 1.0 of the API.
                    </p>
                </section>

                <section>
                    <h3 className="text-3xl font-bold">Get started!</h3>
                    <p className="mt-1">
                        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can
                        only be accessed by registered users. This documentation describes version 1.0 of the API.
                    </p>

                    <div className="space-x-6 opacity-90">
                        <Link to="/connecting">
                            <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">
                                <div className="bg-sky-500 py-2 px-2 rounded-l-lg group-hover:bg-sky-600">
                                    <FontAwesomeIcon icon={faPlug}/> Connecting
                                </div>
                                <div className="bg-sky-600 py-2 px-1 rounded-r-full group-hover:bg-sky-700">
                                    <FontAwesomeIcon icon={faAnglesRight}/>
                                </div>
                            </div>
                        </Link>

                        <Link to="/postman">
                            <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">
                                <div className="bg-orange-500 py-2 px-2 rounded-l-lg group-hover:bg-orange-600">
                                    <FontAwesomeIcon icon={faEnvelope}/> Postman
                                </div>
                                <div className="bg-orange-600 py-2 px-1 rounded-r-full group-hover:bg-orange-700">
                                    <FontAwesomeIcon icon={faAnglesRight}/>
                                </div>
                            </div>
                        </Link>

                        <Link to="/swagger">
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

                <section>
                    <h3 className="text-3xl font-bold"> Change policy</h3>
                    <p className="mt-1">
                        In time the API, and policies regarding the API can change. These changes are subject to the following guidelines.
                        The following states hold true for the change policy for this API:

                        Keylane may sometimes introduce changes to the Benefits-Plaza API and policies without advance notice.
                        Keylane will try to inform users of any (breaking) change in advance.
                        Keylane will not be liable to you or any third party for such modifications or any adverse effects resulting from such modifications.
                        Keylane will try to avoid breaking changes as much as possible.
                    </p>
                </section>

                {/*<section>*/}
                {/*    <h3 className="text-3xl font-bold">Available services</h3>*/}

                {/*    <div className="flex space-x-6 opacity-90">*/}

                {/*        /!*<div className="w-52 h-32 border-4 border-cyan-600 rounded-xl mt-4">*!/*/}
                {/*        /!*    <div className="bg-cyan-600 text-white font-bold text-l m-auto pb-1 px-1 flex">*!/*/}
                {/*        /!*        <p className="grow"><FontAwesomeIcon icon={faSatelliteDish}/> EmployeeGet</p>*!/*/}
                {/*        /!*        <p className="text-xs">[get]</p>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*    <div className="m-1 text-sm">*!/*/}
                {/*        /!*        <p>Retrieves employee data from a specific employee by external identifier</p>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*</div>*!/*/}

                {/*        /!*<div className="w-52 h-32 border-4 border-cyan-600 rounded-xl mt-4">*!/*/}
                {/*        /!*    <div className="bg-cyan-600 text-white font-bold text-l m-auto pb-1 px-1 flex">*!/*/}
                {/*        /!*        <p className="grow"><FontAwesomeIcon icon={faPaperPlane}/> EmployeesPost</p>*!/*/}
                {/*        /!*        <p className="text-xs">[post]</p>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*    <div className="m-1 text-sm">*!/*/}
                {/*        /!*        <p>Retrieves employee data from a specific employee by external identifier</p>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*</div>*!/*/}

                {/*        <div className="w-52 h-32 border-4 border-gray-700 rounded-xl mt-4 flex-col bg-zinc-50">*/}
                {/*            <div className="bg-gray-700 text-white font-bold text-l m-auto pb-1 px-1">*/}
                {/*                <span><span className="text-sky-400">[get] </span>EmployeeGet</span>*/}
                {/*            </div>*/}
                {/*            <div className="text-sm grow font-medium m-auto m-1">*/}
                {/*                <span>Retrieves employee data from a specific employee by external identifier.</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="w-52 h-32 border-4 border-gray-700 rounded-xl mt-4 bg-zinc-50">*/}
                {/*            <div className="bg-gray-700 text-white font-bold text-l m-auto pb-1 px-1 flex">*/}
                {/*                <span><span className="text-orange-400">[post] </span>EmployeesPost</span>*/}
                {/*            </div>*/}
                {/*            <div className="m-1 text-sm font-medium">*/}
                {/*                <span>Retrieves employee data from a specific employee by external identifier.</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="w-56 h-32 border-4 border-gray-700 rounded-xl mt-4 bg-zinc-50">*/}
                {/*            <div className="bg-gray-700 text-white font-bold text-l m-auto pb-1 px-1 flex">*/}
                {/*                <p className="text-orange-400">[post]&nbsp;</p>*/}
                {/*                <p className="grow">EmployeeGet</p>*/}
                {/*                <p className="text-base text-red-400"><FontAwesomeIcon icon={faPersonDigging}/></p>*/}
                {/*            </div>*/}
                {/*            <div className="m-1 text-sm font-medium">*/}
                {/*                <p>Retrieves employee data from a specific employee by external identifier.</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        /!*<div className="w-64 h-32 border-4 border-gray-700 rounded-xl mt-4">*!/*/}
                {/*        /!*    <div className="bg-gray-700 text-white font-bold text-l m-auto pb-1 px-1 flex">*!/*/}
                {/*        /!*        <p className="text-orange-400"><FontAwesomeIcon icon={faPaperPlane}/>&nbsp;</p>*!/*/}
                {/*        /!*        <p className="grow">EmployeesPost</p>*!/*/}
                {/*        /!*        <p className="text-xs text-red-400">[coming soon]</p>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*    <div className="m-1 text-sm">*!/*/}
                {/*        /!*        <p>Retrieves employee data from a specific employee by external identifier. hihi</p>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*</div>*!/*/}

                {/*    </div>*/}
                {/*</section>*/}

                <section>
                    <h3 className="text-3xl font-bold">Available services</h3>
                    {/*<p className="font-medium text-gray-500 mb-1">(GET requests)</p>*/}

                    <div className="mt-4 opacity-100 space-x-6 flex">

                        {/*<div className="rounded-xl font-bold text-l inline-flex flex-col w-48">*/}
                        {/*    <div className="bg-gray-50 py-2 rounded-t-lg border-4 border-b-0 border-gray-800 flex">*/}
                        {/*        <FontAwesomeIcon icon={faBolt} className="text-4xl text-sky-500 m-auto"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="bg-gray-800 text-white py-2 rounded-b-lg flex">*/}
                        {/*        <span className="m-auto"><span className="text-sky-400">[get] </span>EmployeeGet</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="rounded-xl font-bold text-l inline-flex flex-col w-52 shadow-lg">
                            <div className="bg-gray-700 text-white py-1 rounded-t-lg">
                                <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployeeGet</span>
                            </div>
                            <div className="bg-gray-50 rounded-b-lg border-4 border-t-0 border-gray-800 grow">
                                <div className="text-sm grow font-medium flex">
                                    <span className="m-auto p-1">Retrieves an employee by external identifier</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl font-bold text-l inline-flex flex-col w-52 shadow-lg">
                            <div className="bg-gray-700 text-white py-1 rounded-t-lg">
                                <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployeePoliciesGet</span>
                            </div>
                            <div className="bg-gray-50 rounded-b-lg border-4 border-t-0 border-gray-800 grow">
                                <div className="text-sm grow font-medium flex">
                                    <span className="m-auto p-1">Retrieves an employee with policy details by external identifier</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl font-bold text-l inline-flex flex-col w-52 shadow-lg">
                            <div className="bg-gray-700 text-white py-1 rounded-t-lg">
                                <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployersGet</span>
                            </div>
                            <div className="bg-gray-50 rounded-b-lg border-4 border-t-0 border-gray-800 grow">
                                <div className="text-sm grow font-medium flex">
                                    <span className="m-auto p-1">Retrieves all the users employers</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl font-bold text-l inline-flex flex-col w-52 shadow-lg">
                            <div className="bg-gray-700 text-white py-1 rounded-t-lg">
                                <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-orange-400 pr-2"/>}EmployeePost</span>
                            </div>
                            <div className="bg-gray-50 rounded-b-lg border-4 border-t-0 border-gray-800 grow">
                                <div className="text-sm grow font-medium flex">
                                    <span className="m-auto p-1">Updates an employee by external identifier</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>

        </div>

    );
};

export default Home;