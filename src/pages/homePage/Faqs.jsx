'use client'
import React, { useState } from 'react';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Send } from 'lucide-react';
import Container from '@/components/Container';
import { PlusIcon, MinusIcon } from 'lucide-react'

const Faqs = () => {
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
   const [activeIndex, setActiveIndex] = useState(null)
 const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    const faqs = [
        {
            question: "1. How do I request a quote for construction services?",
            answer: "To request a quote, simply visit our website’s “Contact Us” page and fill out the inquiry form. Alternatively, you can reach out to us via phone or email, and our team will promptly assist you with your request."
        },
        {
            question: "2. What types of construction projects do you specialize in?",
            answer: "We specialize in a wide range of construction projects, including residential, commercial, industrial, and institutional buildings. Our expertise covers new construction, renovations, remodels, and additions to existing structures."
        },
        {
            question: "3. Can you provide references or examples of your past projects?",
            answer: "Absolutely! We have an extensive portfolio showcasing our past projects across various sectors"
        },
    
    ]

    return (
        <div className=" bg-white">
            {/* Left Form Side */}
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-4  bg-white">

                <div className="bg-[#1a0c08] text-white p-16 ">
                    <h2 className="text-[40px] font-bold font-mont mb-2">Request a Quote</h2>
                    <p className="mb-6 font-medium font-open">Ready to Work Together? Build a project with us!</p>
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

                {/* Right FAQ Side */}
                <div className='pl-16 pt-16'>
                    <h3 className="text-[#1A124D] font-bold mb-1 font-mont text-2xl">Learn More From</h3>
                    <h2 className="text-[40px] font-mont font-bold text-[#1C0D0A] mb-6">Frequently Asked Questions</h2>
                 <div  className='flex-1'>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border border-[#d5d8dc] cursor-pointer transition-all duration-300 font-open ${index !== 0 ? 'border-t-0' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className='flex justify-between items-center p-5'>
                                    <h2 className="text-base text-[#1c0d0a] font-bold ">{faq.question}</h2>
                                    {activeIndex === index ? (
                                        <MinusIcon className='w-5 h-5 text-black flex-shrink-0' />
                                    ) : (
                                        <PlusIcon className='w-5 h-5 text-black flex-shrink-0' />
                                    )}
                                </div>

                                <div
                                    className={`overflow-hidden  transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 px-5 py-2 opacity-100 border-t border-[#d5d8dc]' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-[#353535] pr-8">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Faqs;
