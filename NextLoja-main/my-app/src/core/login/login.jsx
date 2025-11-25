"use client"

import React from "react";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import Botao from "../components/Botao";

export default function Login() {
    
    return(
        <div class="flex items-center justify-center h-screen bg-gray-100">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex items-center justify-center mb-4 text-xl font-bold">LOGIN</div>
                <div class="mb-4">
                    <Input label="Email" tipo="email" placeholder="Digite seu email"  />
                </div>
                <div class="mb-6">
                    <Input label="Senha" tipo="password" placeholder="Digite sua senha" />//
                </div>
                <div class="flex items-center justify-between">
                   <Botao botaoTexto="Entrar" funcao={handleLogin} /> 
                </div>
            </form>
        </div>
    );
}