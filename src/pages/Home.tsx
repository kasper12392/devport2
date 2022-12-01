import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookSkull, faVirusCovid, faSkull, faCode, faPaperPlane, faGear, faWifiStrong, faCertificate, faPersonDigging, faPlug, faHammer} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div className="text-gray-700 max-w-full flex">
            <div className="w-1/2 border-r-2 mr-10">
                <ul>
                    <li className=""><p className="font-bold">Content</p></li>
                    <li className=""><a href="default.asp" className="hover:text-sky-600">About</a></li>
                    <li className=""><a href="default.asp" className="hover:text-sky-600">Change policy</a></li>
                    <li className=""><a href="default.asp" className="hover:text-sky-600">Available services</a></li>
                </ul>
            </div>

            <div className="space-y-8">
                <section>
                    <h3 className="text-3xl font-bold">About</h3>
                    <p className="mt-1">
                        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can
                        only be accessed by registered users. This documentation describes version 1.0 of the API.
                    </p>
                </section>
                <section>
                    <h3 className="text-3xl font-bold">Change policy</h3>
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
                    <h3 className="text-3xl font-bold">Available services</h3>

                    <div className="flex space-x-6">

                        {/*<div className="w-52 h-32 border-4 border-cyan-600 rounded-xl mt-4">*/}
                        {/*    <div className="bg-cyan-600 text-white font-bold text-l m-auto pb-1 px-1 flex">*/}
                        {/*        <p className="grow"><FontAwesomeIcon icon={faSatelliteDish}/> EmployeeGet</p>*/}
                        {/*        <p className="text-xs">[get]</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="m-1 text-sm">*/}
                        {/*        <p>Retrieves employee data from a specific employee by external identifier</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="w-52 h-32 border-4 border-cyan-600 rounded-xl mt-4">*/}
                        {/*    <div className="bg-cyan-600 text-white font-bold text-l m-auto pb-1 px-1 flex">*/}
                        {/*        <p className="grow"><FontAwesomeIcon icon={faPaperPlane}/> EmployeesPost</p>*/}
                        {/*        <p className="text-xs">[post]</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="m-1 text-sm">*/}
                        {/*        <p>Retrieves employee data from a specific employee by external identifier</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="w-52 h-32 border-4 border-gray-700 rounded-xl mt-4">
                            <div className="bg-gray-700 text-white font-bold text-l m-auto pb-1 px-1 flex">
                                <p className="text-sky-400">[get]&nbsp;</p>
                                <p className="">EmployeeGet</p>
                            </div>
                            <div className="m-1 text-sm">
                                <p>Retrieves employee data from a specific employee by external identifier.</p>
                            </div>
                        </div>

                        <div className="w-52 h-32 border-4 border-gray-700 rounded-xl mt-4">
                            <div className="bg-gray-700 text-white font-bold text-l m-auto pb-1 px-1 flex">
                                <p className="text-orange-400">[post]&nbsp;</p>
                                <p className="">EmployeesPost</p>
                            </div>
                            <div className="m-1 text-sm">
                                <p>Retrieves employee data from a specific employee by external identifier.</p>
                            </div>
                        </div>

                        <div className="w-56 h-32 border-4 border-gray-700 rounded-xl mt-4">
                            <div className="bg-gray-700 text-white font-bold text-l m-auto pb-1 px-1 flex">
                                <p className="text-sky-400">[post]&nbsp;</p>
                                <p className="grow">EmployeeGet</p>
                                <p className="text-base text-red-400"><FontAwesomeIcon icon={faPersonDigging}/></p>
                            </div>
                            <div className="m-1 text-sm">
                                <p>Retrieves employee data from a specific employee by external identifier.</p>
                            </div>
                        </div>

                        <div className="w-64 h-32 border-4 border-gray-700 rounded-xl mt-4">
                            <div className="bg-gray-700 text-white font-bold text-l m-auto pb-1 px-1 flex">
                                <p className="text-orange-400"><FontAwesomeIcon icon={faPaperPlane}/>&nbsp;</p>
                                <p className="grow">EmployeesPost</p>
                                <p className="text-xs text-red-400">[coming soon]</p>
                            </div>
                            <div className="m-1 text-sm">
                                <p>Retrieves employee data from a specific employee by external identifier. hihi</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </div>

    );
};

export default Home;