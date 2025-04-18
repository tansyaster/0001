import { useState } from 'react';

export default function HomePage() {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <div className="font-['Courier_New'] text-gray-900">
      {/* Header */}
      <header className="bg-[#4B2E2E] p-6 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4"><div>
            <h1 className="text-3xl font-bold leading-tight text-[#FFDB58]">UNRULY MOP</h1>
            <p className="text-lg tracking-wide text-[#FFDB58]">CLEANING COMPANY</p>
          </div>
        </div>
      </header>

      <hr className="border-t-4 border-[#D8C9A9]" />

{/* Hero Section */}
      <section
        className="bg-gradient-to-br from-[#A8A05A] via-[#8E9C4E] to-[#5C7120] py-20 text-center px-4 relative overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#5E3023] font-['Courier_New']">Simple, Reliable Cleaning Services.</h2>
        <p className="text-xl mb-6 text-[#6B4226] font-['Courier_New']">Locally owned in Highlands Ranch. Fully insured. And <em>never</em> unruly.</p>
        <button onClick={() => setShowEmail(true)} className="bg-[#B3471A] hover:bg-[#8B3C17] text-[#D8C9A9] font-bold py-3 px-6 rounded-full transition shadow-md inline-block">Contact</button>
        {showEmail && (
          <div className="mt-4 text-[#FFDB58] font-bold bg-[#4B2E2E] p-4 rounded shadow-md inline-block">
            caitlin@unrulymop.com
            <button onClick={() => setShowEmail(false)} className="ml-4 text-white text-lg font-bold">×</button>
          </div>
        )}
      </section>

      <hr className="border-t-4 border-[#4B2E2E]" />

{/* About Section */}
      <section id="about" className="bg-[#D8C9A9] py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-[#5E3023]">About Us</h3>
        <p className="max-w-3xl mx-auto text-lg text-[#6B4226]">
          We are a family-owned and operated business. You'll always be dealing with me, the owner, directly. I charge a flat rate of $65 per hour. I'm on time (every time) and provide my own equipment and supplies. I have over eight years experience as a successful, professional cleaner, and I look forward to working with you! <span className="block mt-4 font-semibold italic">-Caitlin</span>
        </p>
      </section>

      <hr className="border-t-4 border-[#8E9C4E]" />

{/* Footer */}
      <footer className="bg-[#4B2E2E] py-4 text-center text-sm text-[#FFDB58]">
        &copy; {new Date().getFullYear()} Unruly Mop Cleaning Co. | All rights reserved.
      </footer>
    </div>
  );
} 
