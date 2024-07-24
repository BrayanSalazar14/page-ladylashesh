"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 z-50 flex flex-col justify-between items-center bg-white bg-opacity-40 backdrop-blur-md p-4 gap-2 shadow-lg w-full'>
                <Image src="/logo.png" alt='Logo' width={100} height={100} />
                <button className='inline-flex p-3 hover:bg-pink-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className={`${
                    active ? 'block' : 'hidden'
                }  w-full lg:static lg:flex lg:items-center lg:w-auto lg:mt-0 mt-2`}>
                    <ul className='flex flex-col lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center'>
                        <li className='lg:inline-flex flex justify-center lg:w-auto w-full px-3 py-2 rounded text-gray-700 hover:text-pink-400 hover:bg-pink-200'>
                            <a href="#home">Inicio</a>
                        </li>
                        <li className='lg:inline-flex flex justify-center lg:w-auto w-full px-3 py-2 rounded text-gray-700 hover:text-pink-400 hover:bg-pink-200'>
                            <a href="#servicios">Servicios</a>
                        </li>
                        <li className='lg:inline-flex flex justify-center lg:w-auto w-full px-3 py-2 rounded text-gray-700 hover:text-pink-400 hover:bg-pink-200'>
                            <a href="#contacto">Contactame</a>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}
