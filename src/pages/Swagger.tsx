import React, {useState} from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Transition} from "@headlessui/react";

const Swagger = () => {

    const urls = [
        { name: 'petstore', url: 'https://petstore.swagger.io/v2/swagger.json' },
        { name: 'v1', url: 'https://api.benefits-plaza.nl/bpapi/openapi/openapi.json' },
        { name: 'v2', url: '' }
    ]

    const [isShowing, setIsShowing] = useState(false)
    const [selected, setSelected] = useState(urls[0].name)
    const [selectedUrl, setSelectedUrl] = useState(urls[0].url)

    return (
        <div className="max-w-screen-lg mx-auto mt-8 text-gray-700">

            <div className="pb-8">
                <h1>version:</h1>
                <button onClick={() => setIsShowing((isShowing) => !isShowing)} className="w-28 rounded border-navbar border-2 hover:text-navbar px-3 shadow-lg">{selected} <FontAwesomeIcon icon={faCaretDown}/></button>
                <Transition show={isShowing} enter="transition-opacity duration-250" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-125" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="w-36 absolute mt-1 rounded shadow-lg hover:[&>*]:font-bold border-2 border-gray-100 text-base flex-col" onClick={() => setIsShowing(false)}>
                        <button className="flex w-full hover:bg-gray-100" onClick={() => {setSelected(urls[0].name); setSelectedUrl(urls[0].url)}}>
                            <div className="m-1 ml-2">petstore</div>
                        </button>
                        <button className="flex w-full hover:bg-gray-100" onClick={() => {setSelected(urls[1].name); setSelectedUrl(urls[1].url)}}>
                            <div className="m-1 ml-2">v1</div>
                        </button>
                        {/*<button className="flex w-full hover:bg-gray-100" onClick={() => {setSelected(urls[2].name); setSelectedUrl(urls[2].url)}}>*/}
                        {/*    <div className="m-1 ml-2">v2</div>*/}
                        {/*</button>*/}
                    </div>
                </Transition>
            </div>

            {/*<div className="relative -z-50">*/}
                <SwaggerUI url={selectedUrl}/>
            {/*</div>*/}

        </div>
    );
};

export default Swagger;