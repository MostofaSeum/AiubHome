import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <nav
      className={`transition-all duration-300 relative z-50 border-b ${isScrolled ? "bg-[#0f4a8a] border-transparent" : "bg-transparent border-white/10"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-[60px] gap-8">
          <div className="hidden lg:flex space-x-8 text-[15px] font-bold text-white uppercase tracking-wider items-center">
            {/* ABOUT */}
            <div className="relative group h-[60px] flex items-center ">
              <Link
                href="#"
                className="hover:text-gray-300 transition-colors h-full flex items-center"
              >
                About
              </Link>
              <div
                className={`absolute top-[60px] left-0 w-64 border border-slate-700/40 shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50 ${
                  isScrolled
                    ? "bg-[#0f4a8a] border-transparent"
                    : "bg-black/40 backdrop-blur-sm border-white/10"
                }`}
              >
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Overview
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  General Information
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Rules of Campus Entry
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Why Study Here
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Resources
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Career
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Convocation
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors last:border-none"
                >
                  Video
                </Link>
              </div>
            </div>

            {/* ACADEMICS MENU */}
            <div className="group h-[60px] flex items-center">
              <Link
                href="#"
                className="hover:text-gray-300 transition-colors h-full flex items-center"
              >
                Academics
              </Link>
              <div
                className={`absolute top-[60px] left-0 right-0 w-full border-t border-blue-800 shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 py-10 px-4 sm:px-6 lg:px-8 text-left normal-case tracking-normal font-normal 
                ${isScrolled ? "bg-[#0f4a8a] border-transparent" : "bg-black/40 backdrop-blur-sm border-white/10"}`}
              >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                  {/* Faculties */}
                  <div>
                    <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                      Faculties
                    </h3>
                    <div className="flex flex-col space-y-3 text-[14px]">
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Faculty of Arts and Social Sciences
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Faculty of Business Administration
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Faculty of Engineering
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Faculty of Health and Life Sciences
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Faculty of Science and Technology
                      </Link>
                    </div>
                  </div>

                  {/* Information */}
                  <div>
                    <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                      Information
                    </h3>
                    <div className="flex flex-col space-y-3 text-[14px]">
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Academic Calendar
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Academic Regulations
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Course Catalog
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Tuition Fee
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Faculty List
                      </Link>
                    </div>
                  </div>

                  {/* Partnerships */}
                  <div>
                    <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                      Partnerships
                    </h3>
                    <div className="flex flex-col space-y-3 text-[14px]">
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Internationalization
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Academic Partners
                      </Link>
                      <Link
                        href="#"
                        className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                      >
                        Strategic Partners
                      </Link>
                    </div>
                  </div>

                  {/* Institutes & Accreditations */}
                  <div className="flex flex-col space-y-6">
                    <div>
                      <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                        Institutes
                      </h3>
                      <div className="flex flex-col space-y-3 text-[14px]">
                        <Link
                          href="#"
                          className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                        >
                          Institute of Continuing Education
                        </Link>
                        <Link
                          href="#"
                          className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                        >
                          Dr. Anwarul Abedin Institute of Innovation (D2A2I)
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                        Accreditations
                      </h3>
                      <div className="flex flex-col space-y-3 text-[14px]">
                        <Link
                          href="#"
                          className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                        >
                          IQAC
                        </Link>
                        <Link
                          href="#"
                          className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                        >
                          CETL
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="#" className="hover:text-gray-300 transition-colors">
              Admission
            </Link>
          </div>

          <div className="flex-shrink-0 flex justify-center items-center relative h-[60px] w-24">
            <div className="absolute top-1/2 -translate-y-1/4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-[3px] border-white z-10 overflow-hidden">
              <Image
                src="/images/aiub-logo.png"
                alt="AIUB Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Links */}
          <div className="hidden lg:flex space-x-8 text-[15px] font-bold text-white uppercase tracking-wider items-center">
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors h-full flex items-center"
            >
              On Campus
            </Link>

            {/* ADMINISTRATION */}
            <div className="relative group h-[60px] flex items-center">
              <Link
                href="#"
                className="hover:text-gray-300 transition-colors h-full flex items-center"
              >
                Administration
              </Link>

              <div
                className={`absolute top-[60px] left-0 w-64 border border-slate-700/40 shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50 ${
                  isScrolled
                    ? "bg-[#0f4a8a] border-transparent"
                    : "bg-black/40 backdrop-blur-sm border-white/10"
                }`}
              >
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  The Vice Chancellor
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  The Pro Vice Chancellor
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  The Chairman
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  The Founders
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Institutional Policy
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Offices
                </Link>
              </div>
            </div>

            {/* RESEARCH */}
            <div className="relative group h-[60px] flex items-center">
              <Link
                href="#"
                className="hover:text-gray-300 transition-colors h-full flex items-center"
              >
                Research
              </Link>
              <div
                className={`absolute top-[60px] left-0 w-64 border border-slate-700/40 shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50 ${
                  isScrolled
                    ? "bg-[#0f4a8a] border-transparent"
                    : "bg-black/40 backdrop-blur-sm border-white/10"
                }`}
              >
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Research Overview
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Publications
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Journals
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Research Groups
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Research Labs
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  IRB
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Research Center
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Conferences
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Library
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Collaborating Institutes
                </Link>
                <Link
                  href="#"
                  className="px-5 py-3.5 text-gray-100 hover:bg-black/40 hover:text-white transition-colors border-b border-slate-700/20"
                >
                  Innovations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
