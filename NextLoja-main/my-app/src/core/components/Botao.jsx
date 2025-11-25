import React from "react";

export default function Botao(props){
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onPress={props.funcao}>{props.botaoTexto}</button>
    );
}

