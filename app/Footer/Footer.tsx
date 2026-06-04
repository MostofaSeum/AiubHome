"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-16 pb-8 border-t-[5px] border-[#0f4a8a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 relative">
            <img src="images/footer/AIUB_Glob_Vector_white_opt.svg" alt="AIUB Globe" className="absolute h-[400px] -left-30" />
            <img src="images/footer/logo.svg" alt="aiub logo" className='pl-50' />
          </div>
          <h3 className="text-white text-xl font-bold mb-5 font-serif pl-50 pt-3">American International University-Bangladesh</h3>
          <p className="text-sm leading-relaxed max-w-md pl-50 pt-3">
            404/3, Kuratoli, Khilkhet,<br />
            Dhaka 1229, Bangladesh<br />
            <br />
            <strong>Email:</strong> info@aiub.edu<br />
            <strong>Phone:</strong> +88 02 841 4046-9; +88 02 841 4050
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Become AIUBian</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Future Students</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">On Campus</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Admission</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Tution Fees</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Scholarships</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Apply Now</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Academic</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Academic Calender</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Academic Regulations</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Faculty of Arts & Social Science</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Faculty of Business Administration</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Faculty of Science and Technlogoy</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Faculty of Engineering</Link></li>
            <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Faculty of Health and Life Sciences</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} American International University-Bangladesh. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
          </div>
          <p>Developed by <Link href="https://brainicontech.com/" target="_blank" className="hover:text-[#0f4a8a] transition-colors">Brainicon Technology</Link></p>
        </div>
      </div>
    </footer>
  );
}
