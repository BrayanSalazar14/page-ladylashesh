"use client"
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Map from './Map';

export default function ContactSection() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#contacto') {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <section id="contacto" className='flex flex-col lg:flex-row items-center justify-center m-20'>
            <Map />
           <div className='lg:relative flex flex-col bg-white bg-opacity-40 justify-center lg:h-[500px] w-[500px] max-sm:w-auto rounded-md p-10 shadow-2xl gap-2'>
           <h1 className='lg:absolute top-10 left-24 flex justify-center uppercase text-pink-500 font-extrabold mb-5 text-2xl max-sm:text-lg'>Formulario de Contacto</h1>
            <form onSubmit={handleSubmit((data) => {
                console.log("hi", data);
            })} className='relative flex flex-col items-center gap-2'>
                <label>Nombre Completo</label>
                <input {...register("nombre", {required: true})} className='p-1 w-72 rounded-md' placeholder='Nombre'/>
                {errors.nombre && <p className='text-center text-red-700 -mt-2'>Nombre es requerido</p>}
                <label>Email</label>
                <input {...register("email", {required: true})} className='p-1 w-72 rounded-md' type="email" placeholder='Email'/>
                {errors.email && <p className='text-center text-red-700 -mt-2'>Email es requerido</p>}
                <label>Descripción</label>
                <textarea {...register("descripcion", {required: true})} className='p-1 w-72 rounded-md h-28' placeholder='Descripción'></textarea>
                {errors.descripcion && <p className='text-center text-red-700 -mt-2'>Descripción es requerida</p>}
                <div className='lg:absolute flex justify-end w-full top-80'>
                    <button type='submit' className='bg-pink-400 w-28 h-10 rounded-md text-white'>Enviar</button>
                </div>
            </form>
           </div>
        </section>
    );
}