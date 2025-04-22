import React, { useRef } from 'react';
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
    const reform = useRef();

    const handleSubmit = (event) => {
        event.preventDefault(); // Corregido aquí

        const serviceId = "service_71kl3oo";
        const templateId = "template_x2mpwbf";
        const apikey = "C5su1CBmBfXAwtX3S"; // Considera usar variables de entorno

        emailjs.sendForm(serviceId, templateId, reform.current, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.error(error));
    };

    return (
        <form ref={reform} onSubmit={handleSubmit}>
            <div className="header-contact">
                <h2>Contactanos</h2>
                <p>porfavor llene el formulario</p>
            </div>  
            <fieldset className='fieldset-name'>
                <label className='symbol-required'>Nombre</label>
                <input name="userName" type="text" placeholder='ej: sebastian' required />
            </fieldset>
            <fieldset className='fieldset-email'>
                <label className='symbol-required'>Correo</label>
                <input name="email" type="email" placeholder='ej: decode@gmail.com' required />
            </fieldset>
            <fieldset className='fieldset-message'>
                <label className='symbol-required'>Mensaje</label>
                <textarea name="message" placeholder='ingrese el mensaje' cols="30" rows="10" required />
            </fieldset>
            <button type="submit" className='btn-send'>Enviar</button>
        </form>
    );
};