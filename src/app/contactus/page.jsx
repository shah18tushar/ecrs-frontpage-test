'use client';

import {useState} from 'react';
import dynamic from 'next/dynamic';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import ContactCard from '@/components/ui/ContactCard';
import {offices} from '@/data/contactoffices';

// Dynamic import to avoid SSR issue with Leaflet
const Map = dynamic (() => import ('./Map'), {ssr: false});

export default function ContactPage () {
  const [selected, setSelected] = useState (0);
  const [formData, setFormData] = useState ({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData ({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log (formData);
    // Add toast or form reset logic here if needed
  };

  return (
    <div className="text-black">
      {/* Hero Section with Threads */}
      <section className="relative w-full h-[350px] md:h-[270px] mt-20 overflow-hidden flex items-center justify-center bg-white">
        <div className="absolute inset-0 z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <div className="relative z-10 text-center px-4">
          <SplitText
            text="Contact Us"
            className="text-5xl md:text-6xl font-bold text-gray-900"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{opacity: 0, y: 30}}
            to={{opacity: 1, y: 0}}
            threshold={0.1}
          />
          <p className="text-gray-600  max-w-xl mx-auto text-lg">
            Reach out to us for inquiries, bookings, or support.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className=" px-4 md:px-8 lg:px-16 ">
        <div className="max-w-screen-xl mx-auto">
          {/* Office Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
            {offices.map ((office, index) => (
              <ContactCard
                key={index}
                title={office.title}
                address={office.address}
                phones={office.phones}
                emails={office.emails}
                isSelected={selected === index}
                onClick={() => setSelected (index)}
              />
            ))}
          </div>

          {/* Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden mb-12">
            <Map lat={offices[selected].lat} lng={offices[selected].lng} />
          </div>

          {/* Contact Form */}
          <div className="bg-white border rounded-xl shadow-lg p-8 max-w-4xl mx-auto my-5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              Get in Touch
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500 md:col-span-2"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-500 md:col-span-2"
              />
              <div className="md:col-span-2 flex justify-center">
                <button type="submit" className="btn-shadow-red">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
