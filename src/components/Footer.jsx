import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // or your icon set
import Container from './Container';

const Footer = () => {
    const icons =[Facebook ,Twitter, Instagram ,Linkedin]
  return (
    <footer className="bg-[#1c0d0a] text-white text-sm ">
      <Container className="pt-[100px] pb-[45px]  grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-mont leading-[1.2] font-bold">Build With Pacific Sunshine Estimating, LLC</h3>
          <p className="mt-4 text-base  font-open">
            Building with Pacific Sunshine: Where Quality Meets Coastal Elegance and Innovation.
          </p>
          <p className="mt-4 font-open">Mon - Sat 8:00 - 17:30,<br />Sunday - CLOSED</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-mont leading-[1.2] font-bold">Our Services</h3>
          <ul className="mt-4 space-y-2 text-base font-open">
            <li>Architectural Services</li>
            <li>Architectural 3D Rendering Services</li>
            <li>Structural Services</li>
            <li>MEP Services</li>
            <li>Consulting Services</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-mont leading-[1.2] font-bold">Main Office</h3>
          <p className="mt-4 text-base">USA</p>
          <p className="mt-2 text-base">727 497 7285</p>
          <p className="mt-1 text-base">info@bemsolution.com</p>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-mont leading-[1.2] font-bold">Our Locations</h3>
          <p className="mt-4 text-base">5900 Balcones Drive STE 100</p>
          <p className="mt-1 text-base">Austin TX 78731</p>
        </div>

      </Container>
<hr className="border-[rgba(195,193,193,0.27)]" />


      {/* Bottom Bar */}
      <Container className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className='text-base font-open'>Copyright © 2025 Bem Solution</p>
        <ul className="flex space-x-4">
          {icons.map((Icon, index)=>(
            <li href="#" key={index}><Icon className="w-5 h-5" /></li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
