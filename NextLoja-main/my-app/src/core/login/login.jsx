"use client"

import React from "react";
import {  useState } from "react";
import Input from "../components/Input";
import Botao from "../components/Botao";

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin(e) {
        e.preventDefault(); //previne o reload da página ao enviar o form

        try {
            const resposta = await fetch(`http://localhost:8080/usuario/${email}/${senha}`);
            const data = await resposta.json();

            // SE VOLTAR VAZIO = email/senha errados
            if (data.length === 0) {
                alert("Email ou senha incorretos");
                return;
            }

            // SE VOLTAR ALGO = login OK
            alert("Login realizado com sucesso!");
            console.log("Usuário logado:", data[0]);

        } catch (erro) {
            console.error("Erro ao fazer login:", erro);
            alert("Erro ao conectar com o servidor");
        }
    }


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex items-center justify-center mb-4 text-xl font-bold">LOGIN</div>
                <div className="mb-4">
                    <Input label="Email"
                        tipo="email"
                        placeholder="Digite seu email"
                        funcaoI={(e) => setEmail(e.target.value)}
                        valor={email} />
                </div>
                <div className="mb-6">
                    <Input label="Senha"
                        tipo="password"
                        placeholder="Digite sua senha"
                        funcaoI={(e) => setSenha(e.target.value)}
                        valor={senha} />
                </div>
                <div className="flex items-center justify-between">
                    <Botao botaoTexto="Entrar"
                        funcao={handleLogin}
                        tipoB="button"
                        />
                </div>
            </form>
        </div>
    );
}