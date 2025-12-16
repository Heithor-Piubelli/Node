import React from "react";
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import { MessageCircleQuestionMark } from 'lucide-react';

export default function Header(props) {
    return (
        <header className="w-full absolute top-0 left-0 bg-transparent z-50">
            <div className="w-full py-5 px-10 flex items-center justify-between bg-black/20">

                {/* Zona Esquerda */}
                <div className="text-white font-bold text-xl flex items-center 1
                space-x-5">
                    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500" href="#">Categoria</a>
                    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500" href="#">Produtos</a>
                </div>

                {/* Logo Central */}
                <div className="text-white font-bold text-3xl">
                    <a href="/">
                        <img src="/logo.png" alt="Logo" className="h-13 w-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                    </a>
                </div>

                {/* Zona Direita */}
                <div className="text-white font-bold text-xl flex items-center space-x-5">
                    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500" href="#"><ShoppingCart /></a>
                    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500" href="#"><User /></a>
                    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500" href="#"><MessageCircleQuestionMark /></a>
                </div>

            </div>
        </header>
    );
}
