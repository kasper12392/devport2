import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faAnglesRight,
    faFileLines,
    faPaperPlane,
    faBook,
    faPlug,
    faSeedling,
    faHandcuffs,
    faPencil,
    faFile,
    faRunning,
    faPersonRunning,
    faQuestionCircle,
    faGear,
    faFire,
    faEye,
    faBolt,
    faEnvelope,
    faCircleUp,
    faCircleDown,
    faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const Home2 = () => {
    return (
        <div className="max-w-screen-lg mx-auto mt-16 text-gray-700">

            <div className="grid grid-cols-2 gap-x-24 gap-y-24">

                <section className="pt-8">
                    <h3 className="text-3xl font-bold">About</h3>
                    <p className="mt-1">
                        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can
                        only be accessed by registered users. This documentation describes version 1.0 of the API.
                    </p>
                </section>

                <section className="pt-8">
                    <h3 className="text-3xl font-bold">Get started!</h3>
                    <p className="mt-1">
                        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can
                        only be accessed by registered users. This documentation describes version 1.0 of the API.
                    </p>

                    <div className="space-x-6 opacity-80">
                        <Link to="/connecting">
                            <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">
                                <div className="bg-sky-500 py-2 px-2 rounded-l-lg group-hover:bg-sky-600">
                                    <FontAwesomeIcon icon={faBolt}/> Connecting
                                </div>
                                <div className="bg-sky-600 py-2 px-1 rounded-r-full group-hover:bg-sky-700">
                                    <FontAwesomeIcon icon={faAnglesRight}/>
                                </div>
                            </div>
                        </Link>

                        <Link to="/postman">
                            <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">
                                <div className="bg-orange-500 py-2 px-2 rounded-l-lg group-hover:bg-orange-600">
                                    <FontAwesomeIcon icon={faPaperPlane}/> Postman
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


                <section className="col-span-2">
                    <h3 className="text-3xl font-bold">Available services</h3>

                    {/*<div className="my-2">*/}
                    {/*    <p>*/}
                    {/*        <span className="bg-sky-400 text-white text-sm font-semibold px-2.5 py-0.5 rounded-full">Get</span><span className="font-bold"> employeeGet</span> Retrieves an employee by external identifier*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <span className="bg-sky-400 text-white text-sm font-semibold px-2.5 py-0.5 rounded-full">Get</span><span className="font-bold"> employeePoliciesGet</span> Retrieves an employee with policy details by external identifier*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <span className="bg-orange-400 text-white text-sm font-semibold px-2.5 py-0.5 rounded-full">Post</span><span className="font-bold"> employeePost</span> Updates an employee by external identifier*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    <div className="mt-4 opacity-100 space-x-6 flex">

                        <div className="rounded-md font-bold text-l inline-flex flex-col w-52">
                            <div className="bg-gray-700 text-white py-1 rounded-md">
                                <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployeeGet</span>
                            </div>
                            {/*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*/}
                            {/*    <div className="text-sm grow font-medium flex">*/}
                            {/*        <span className="m-auto p-1">Retrieves an employee by external identifier</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                        <div className="rounded-md font-bold text-l inline-flex flex-col w-52">
                            <div className="bg-gray-700 text-white py-1 rounded-md">
                                <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployeePoliciesGet</span>
                            </div>
                            {/*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*/}
                            {/*    <div className="text-sm grow font-medium flex">*/}
                            {/*        <span className="m-auto p-1">Retrieves an employee with policy details by external identifier</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                        {/*<div className="rounded-md font-bold text-l inline-flex flex-col w-52">*/}
                        {/*    <div className="bg-gray-700 text-white py-1 rounded-md">*/}
                        {/*        <span className="ml-2">{<FontAwesomeIcon icon={faBolt} className="text-sky-400 pr-2"/>}EmployersGet</span>*/}
                        {/*    </div>*/}
                        {/*    /!*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*!/*/}
                        {/*    /!*    <div className="text-sm grow font-medium flex">*!/*/}
                        {/*    /!*        <span className="m-auto p-1">Retrieves all the users employers</span>*!/*/}
                        {/*    /!*    </div>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}

                        <div className="rounded-md font-bold text-l inline-flex flex-col w-52">
                            <div className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">
                                <span className="ml-2"><span className="bg-sky-400 text-white text-sm font-semibold px-2 mr-1 rounded-full">Get</span>/employeeGet</span>
                                <div className="grow"></div>
                                <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>
                            </div>
                            {/*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*/}
                            {/*    <div className="text-sm grow font-medium flex">*/}
                            {/*        <span className="m-auto p-1">Updates an employee by external identifier</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                        <div className="rounded-md font-bold text-l inline-flex flex-col w-52">
                            <div className="bg-gray-700 text-white pt-0.5 pb-1 rounded-md flex">
                                <span className="ml-2"><span className="bg-orange-400 text-white text-sm font-semibold px-2 mr-1 rounded-full">Post</span>/employeePost</span>
                                <div className="grow"></div>
                                <button className="mr-2"><FontAwesomeIcon icon={faCaretDown}/></button>
                            </div>
                            {/*<div className="rounded-b-md border-2 border-t-0 border-gray-700 grow">*/}
                            {/*    <div className="text-sm grow font-medium flex">*/}
                            {/*        <span className="m-auto p-1">Updates an employee by external identifier</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                    </div>

                </section>
                {/*<div className="bg-gray-50 absolute w-screen h-screen left-0 top-0 -z-50"></div>*/}
                <div className="bg-gray-50 -skew-y-1 absolute h-64 w-full left-0 -z-50"></div>


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

                <section className="col-span-1">
                    <h3 className="text-3xl font-bold">Requesting access</h3>
                    <p className="mt-1">
                        In time the API, and policies regarding the API can change. These changes are subject to the following guidelines.
                        The following states hold true for the change policy for this API.
                    </p>
                </section>

                <section className="col-span-1">
                    <h3 className="text-3xl font-bold">Iets anders</h3>
                    <p className="mt-1">
                        In time the API, and policies regarding the API can change. These changes are subject to the following guidelines.
                        The following states hold true for the change policy for this API.
                    </p>
                </section>
















                {/*<div className="">*/}
                {/*    <h3 className="text-3xl font-bold">About</h3>*/}
                {/*    <p className="mt-1">*/}
                {/*        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can*/}
                {/*        only be accessed by registered users. This documentation describes version 1.0 of the API.*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/*<div className="">*/}
                {/*    <h3 className="text-3xl font-bold">Services</h3>*/}
                {/*    <p className="mt-1">*/}
                {/*        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can*/}
                {/*        only be accessed by registered users. This documentation describes version 1.0 of the API.*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/*<div className="">*/}
                {/*    <h3 className="text-3xl font-bold">Tools</h3>*/}
                {/*    <p className="mt-1">*/}
                {/*        Explore the API further with external tools like Postman and Swagger.*/}
                {/*    </p>*/}

                {/*    <div className="space-x-6 opacity-80">*/}
                {/*        /!*<Link to="/connecting">*!/*/}
                {/*        /!*    <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">*!/*/}
                {/*        /!*        <div className="bg-sky-500 py-2 px-2 rounded-l-lg group-hover:bg-sky-600">*!/*/}
                {/*        /!*            <FontAwesomeIcon icon={faPlug}/> Connecting*!/*/}
                {/*        /!*        </div>*!/*/}
                {/*        /!*        <div className="bg-sky-600 py-2 px-1 rounded-r-full group-hover:bg-sky-700">*!/*/}
                {/*        /!*            <FontAwesomeIcon icon={faAnglesRight}/>*!/*/}
                {/*        /!*        </div>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*</Link>*!/*/}

                {/*        <Link to="/postman">*/}
                {/*            <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">*/}
                {/*                <div className="bg-orange-500 py-2 px-2 rounded-l-lg group-hover:bg-orange-600">*/}
                {/*                    <FontAwesomeIcon icon={faEnvelope}/> Postman*/}
                {/*                </div>*/}
                {/*                <div className="bg-orange-600 py-2 px-1 rounded-r-full group-hover:bg-orange-700">*/}
                {/*                    <FontAwesomeIcon icon={faAnglesRight}/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </Link>*/}

                {/*        <Link to="/swagger">*/}
                {/*            <div className="group rounded-xl text-white font-bold text-l inline-flex mt-2">*/}
                {/*                <div className="bg-green-500 py-2 px-2 rounded-l-lg group-hover:bg-green-600">*/}
                {/*                    <FontAwesomeIcon icon={faFileLines}/> Swagger*/}
                {/*                </div>*/}
                {/*                <div className="bg-green-600 py-2 px-1 rounded-r-full group-hover:bg-green-700">*/}
                {/*                    <FontAwesomeIcon icon={faAnglesRight}/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="">*/}
                {/*    <h3 className="text-3xl font-bold">Secure</h3>*/}
                {/*    <p className="mt-1">*/}
                {/*        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can*/}
                {/*        only be accessed by registered users. This documentation describes version 1.0 of the API.*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/*<div className="">*/}
                {/*    <h3 className="text-3xl font-bold">Requesting access</h3>*/}
                {/*    <p className="mt-1">*/}
                {/*        The Benefits-Plaza API is a RESTful API that facilitates retrieving data from the Benefits-Plaza SaaS-platform. The API accepts and returns JSON and can*/}
                {/*        only be accessed by registered users. This documentation describes version 1.0 of the API.*/}
                {/*    </p>*/}
                {/*</div>*/}

            </div>

            {/* beetje ruimte */}
            <div className="h-32"></div>


        </div>

    );
};

export default Home2;