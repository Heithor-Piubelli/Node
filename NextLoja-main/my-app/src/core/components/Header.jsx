import React from "react";

export default function Header(props){
    return(
        <div className="w-full h-25 bg-blue-500 flex intems-center">
            <div className="align-left ml-10 mt-6 text-white font-bold text-3xl">
                <h1>{props.logo}</h1>
            </div>
            <div className="align-right ml-auto mr-10 mt-10 text-white font-bold text-xl flex justify-end space-x-5">
                <h1>aluno</h1>
                <h1>aluno</h1>
                <h1>aluno</h1>
            </div>
        </div>
    );
}