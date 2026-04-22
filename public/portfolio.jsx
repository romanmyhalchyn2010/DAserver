import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter, FaFacebook } from 'react-icons/fa';

const Portfolio = () => {
  // State to hold data fetched from your Express server
  const [serverTime, setServerTime] = useState('');
  const [greeting, setGreeting] = useState('');
  const [nameInput, setNameInput] = useState('');

  // Function to hit your /api/time route
  const fetchTime = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/time'); // Ensure your server port matches
      const data = await response.json();
      setServerTime(`${data.date} at ${data.time}`);
    } catch (error) {
      console.error("Error fetching time:", error);
    }
  };

  // Function to hit your /api/greet route
  const fetchGreeting = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/greet?name=${nameInput}`);
      const text = await response.text();
      setGreeting(text);
    } catch (error) {
      console.error("Error fetching greeting:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F8FF] font-sans text-gray-800">
      {/* --- HEADER --- */}
      <header className="flex justify-between items-center py-6 px-12">
        <div className="text-3xl font-signature text-blue-900 font-bold">
          &lt; Ashutosh Hathidara /&gt;
        </div>
        <nav className="space-x-8 text-gray-600 font-medium hidden md:block">
          <a href="/" className="hover:text-blue-900">Home</a>
          <a href="#education" className="hover:text-blue-900">Education</a>
          <a href="#experience" className="hover:text-blue-900">Experience</a>
          <a href="#projects" className="hover:text-blue-900">Projects</a>
          <a href="#opensource" className="hover:text-blue-900">Open Source</a>
          <a href="#contact" className="hover:text-blue-900">Contact Me</a>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <main className="flex flex-col md:flex-row items-center justify-between px-12 mt-16 max-w-7xl mx-auto">
        
        {/* Left Column: Text & Socials */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-6xl font-bold text-[#0D2444]">
            Ashutosh Hathidara
          </h1>
          <h2 className="text-2xl italic text-[#0D2444]">
            ( layman_brother )
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
            A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a href="#" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"><FaGithub size={20} /></a>
            <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"><FaLinkedin size={20} /></a>
            <a href="#" className="p-3 bg-red-500 text-white rounded-full hover:bg-red-400 transition"><FaGoogle size={20} /></a>
            <a href="#" className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition"><FaTwitter size={20} /></a>
            <a href="#" className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition"><FaFacebook size={20} /></a>
          </div>

          {/* Server Interaction Buttons (Connecting to your Express Backend) */}
          <div className="pt-8 p-6 bg-white rounded-xl shadow-sm border border-blue-100 max-w-md">
            <h3 className="text-lg font-semibold mb-4">Test Your Server</h3>
            
            {/* Time API */}
            <div className="mb-4">
              <button 
                onClick={fetchTime}
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
              >
                Get Server Time
              </button>
              {serverTime && <p className="mt-2 text-sm text-gray-600">Server says: {serverTime}</p>}
            </div>

            {/* Greet API */}
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Enter your name..."
                className="border p-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
              <button 
                onClick={fetchGreeting}
                className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
              >
                Greet Me
              </button>
            </div>
            {greeting && <p className="mt-2 text-sm text-gray-600 font-medium">{greeting}</p>}
          </div>

        </div>

        {/* Right Column: Illustration Placeholder */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          {/* Note: You will need to export the exact vector image from your design tool and replace this placeholder */}
          <div className="w-[500px] h-[500px] bg-gray-200 rounded-full flex items-center justify-center text-gray-400 border-4 border-dashed border-gray-300 relative">
            <span className="absolute">Your Illustration Goes Here</span>
            {/* Example image tag once you have the file: */}
            {/* <img src="/path-to-your-illustration.svg" alt="Desk setup" className="w-full h-auto object-contain" /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;