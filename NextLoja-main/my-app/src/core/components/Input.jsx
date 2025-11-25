import React from "react";

export default function Input(props) {
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2">{props.label}</label>

            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder={props.placeholder} type={props.tipo} onChange={props.funcaoI} />
        </>

    );
}