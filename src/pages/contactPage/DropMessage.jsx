'use client'
import Container from '@/components/Container'
import React, { useState } from 'react'

const DropMessage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted', formData);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({});
        }
    };
    return (
        <div>
            <div className='bg-white'>
                <Container>
                    <h2 className='text-[#1c0d0a] text-[40px] font-bold font-mont'>Drop Message</h2>
                </Container>
            </div>
            <div className='bg-[#1A124D] flex justify-center items-center'>

                <div className="bg-[#1A124D] text-white p-16 max-w-[756px]">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-3 rounded bg-gray-100 text-black outline-none"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full p-3 rounded bg-gray-100 text-black outline-none"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full p-3 rounded bg-gray-100 text-black outline-none"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}

                        <textarea
                            name="message"
                            placeholder="Message"

                            className="w-full p-3 rounded bg-gray-100 text-black resize-none outline-none"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

                        <button type="submit" className="w-max border border-white py-3 px-10 font-bold rounded-xs hover:bg-white hover:text-black cursor-pointer flex items-center justify-center gap-2 font-roboto">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>



            </div>
        </div>
    )
}

export default DropMessage