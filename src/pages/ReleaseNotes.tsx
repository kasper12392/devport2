import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBug, faStar, faPencil} from '@fortawesome/free-solid-svg-icons'

const ReleaseNotes = () => {
    return (
        <div className="max-w-screen-lg mx-auto mt-24 text-gray-700">

            <h1 className="text-5xl font-bold">Release notes</h1>

            <div className="space-y-20 mt-14">
                <section className="w-3/4">
                    {/*<div className="bg-gray-100 rounded p-4 shadow-lg">*/}
                    <h1 className="bg-sky-100 px-1 w-fit font-bold text-3xl">2022_09</h1>
                    <p className="bg-amber-100 px-1 w-fit mt-2 text-lg">11-12-2022</p>
                    <div className="border-b-2 mt-2"></div>
                    <br/>

                    <h1 className="font-semibold text-lg"><FontAwesomeIcon icon={faStar}/> New features:</h1>
                    <ul className="list-disc ml-8">
                        <li>New endpoint employeePost.</li>
                    </ul>
                    <br/>

                    <h1 className="font-semibold text-lg"><FontAwesomeIcon icon={faPencil}/> Changes:</h1>
                    <ul className="list-disc ml-8">
                        <li>Middlename added to personDetails in employeeGet response.</li>
                        <li>Date of birth added to personDetails in employeeGet response.</li>
                    </ul>
                    <br/>

                    <h1 className="font-semibold text-lg"><FontAwesomeIcon icon={faBug}/> Bug fixes:</h1>
                    <ul className="list-disc ml-8">
                        <li>Server error response on missing tokens authorize request is now a "400 Bad Request".</li>
                        <li>Nulllpointer on employees with no policies on endpoint employeePoliciesGet fixed.</li>
                    </ul>
                    {/*</div>*/}
                </section>

                <section className="w-3/4">
                    {/*<div className="bg-gray-100 rounded p-4 shadow-lg">*/}
                    <h1 className="bg-sky-100 px-1 w-fit font-bold text-3xl">2022_08</h1>
                    <p className="bg-amber-100 px-1 w-fit mt-2 text-lg">23-09-2022</p>
                    <div className="border-b-2 mt-2"></div>
                    <br/>

                    <h1 className="font-semibold text-lg"><FontAwesomeIcon icon={faStar}/> New features:</h1>
                    <ul className="list-disc ml-8">
                        <li>Benefits-Plaza API is now live</li>
                    </ul>

                    {/*</div>*/}
                </section>
            </div>



            
        </div>
    );
};

export default ReleaseNotes;