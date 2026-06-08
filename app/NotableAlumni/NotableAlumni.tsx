"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import TypingText from '../TypingText/TypingText';  

// Faculty filter buttons
const FACULTIES = [
    { id: 'FASS', name: 'FASS', color: 'bg-red-700', ring: 'ring-red-500', x: 24, y: 28, size: 24 },
    { id: 'FBA', name: 'FBA', color: 'bg-green-700', ring: 'ring-green-500', x: 35, y: 20, size: 28 },
    { id: 'FST', name: 'FST', color: 'bg-blue-700', ring: 'ring-blue-500', x: 61, y: 22, size: 24 },
    { id: 'FE', name: 'FE', color: 'bg-amber-600', ring: 'ring-amber-500', x: 76, y: 46, size: 24 },
];

// Alumni Data 
const PEOPLE = [
    {
        id: 1,
        name: 'Sadiya Tabassum',
        designation: 'Specialist, Customer Experience Strategy & Analytics, Therap BD',
        faculty: 'FASS',
        img: '/images/notablealmuni/alumni1.webp',
        x: 69, y: 35, size: 32
    },
    {
        id: 2,
        name: 'Arif-Uz-Zaman',
        designation: 'Head of Technology, Transcom LTD',
        faculty: 'FST',
        img: '/images/notablealmuni/alumni12(1).webp',
        x: 46, y: 24, size: 24
    },
    {
        id: 3,
        name: 'Kazi Emran Mahaboob',
        designation: 'Deputy Director, Head of Service Strategy & Analytics, Grameenphone LTD',
        faculty: 'FBA',
        img: '/images/notablealmuni/image9.webp',
        x: 54, y: 42, size: 48
    },
    {
        id: 4,
        name: 'Mr. Akhteruddin Mahmood',
        designation: 'DMD & Chief HR Officer, Bank Asia LTD',
        faculty: 'FBA',
        img: '/images/notablealmuni/akhteruddin-mahmood.jpg',
        x: 28, y: 58, size: 40
    },
    {
        id: 5,
        name: 'MS M Zia-ul-Azim',
        designation: 'Chairman of BREB',
        faculty: 'FE',
        img: '/images/notablealmuni/notablealumni3.webp',
        x: 41, y: 50, size: 28
    },
    {
        id: 6,
        name: 'Moon Sadia Dipthee',
        designation: 'Director of Analog Layout Design, Ulkasemi',
        faculty: 'FST',
        img: '/images/notablealmuni/notablealumni6.webp',
        x: 65, y: 60, size: 32
    }
];

export default function NotableAlumni() {
    const [activeFaculty, setActiveFaculty] = useState<string | null>(null);
    const [activePerson, setActivePerson] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [useDelay, setUseDelay] = useState(true);
    const [delays, setDelays] = useState<number[]>([]);

    useEffect(() => {
        // Generate delays only on the client after mount to prevent SSR hydration mismatch
        setDelays([
            ...FACULTIES.map(() => Math.random()),
            ...PEOPLE.map(() => Math.random() )
        ]);
        setIsMounted(true);
        // Clear delay after initial fade-in completes
        const timer = setTimeout(() => {
            setUseDelay(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleBackgroundClick = () => {
        setActiveFaculty(null);
        setActivePerson(null);
    };

    return (
        <div className="relative w-full bg-white border-t border-zinc-200 overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
                <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
                    <TypingText
                        text="Notable"
                        className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a] opacity-75 leading-none tracking-normal"
                    />
                    <TypingText
                        text="Alumni"
                        className="text-[#0f4a8a] font-black tracking-[0.25em] text-sm md:text-base uppercase ml-3 relative z-10"
                    />
                </div>
            </div>
            <div
                className="relative w-full h-[600px] bg-transparent overflow-hidden cursor-default border border-zinc-100 rounded-2xl"
                onClick={handleBackgroundClick}
            >
                {/* FACULTY NODES */}
                {FACULTIES.map((faculty, facultyIndex) => {
                    const isSelected = activeFaculty === faculty.id;
                    const isDimmed = (activeFaculty && !isSelected && !activePerson) || (activePerson);
                    const delay = delays[facultyIndex] || 0;

                    return (
                        <div
                            key={faculty.id}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveFaculty(isSelected ? null : faculty.id);
                                setActivePerson(null);
                            }}
                            className={`absolute flex flex-col items-center justify-center rounded-full text-white cursor-pointer transition-all duration-700 ease-in-out shadow-lg
              ${faculty.color} 
              ${isDimmed ? 'opacity-10 scale-90' : 'opacity-100 scale-100 hover:scale-105'}
            `}
                            style={{
                                left: `${faculty.x}%`,
                                top: `${faculty.y}%`,
                                width: `${faculty.size / 4}rem`,
                                height: `${faculty.size / 4}rem`,
                                transform: isMounted ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(0.3)',
                                opacity: isMounted ? undefined : 0,
                                transitionDelay: useDelay ? `${delay}s` : '0s',
                            }}
                        >
                            <span className="text-sm tracking-wider font-medium">{faculty.name}</span>

                            {isSelected && (
                                <div className="absolute bottom-2 flex items-center justify-center w-5 h-5 bg-black/40 rounded-full">
                                    <X size={12} strokeWidth={3} />
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* PEOPLE NODES */}
                {PEOPLE.map((person, personIndex) => {
                    const isPersonActive = activePerson === person.id;
                    const isFacultyActive = activeFaculty === person.faculty;

                    let isDimmed = false;
                    if (activePerson && !isPersonActive) isDimmed = true;
                    if (!activePerson && activeFaculty && !isFacultyActive) isDimmed = true;

                    const facultyData = FACULTIES.find(f => f.id === person.faculty);
                    const ringColor = facultyData ? facultyData.ring : 'ring-gray-500';
                    const delay = delays[FACULTIES.length + personIndex] || 0;

                    return (
                        <div
                            key={person.id}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActivePerson(isPersonActive ? null : person.id);
                            }}
                            className={`absolute cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isDimmed ? 'opacity-10 scale-75' : 'opacity-100'} 
              ${isPersonActive ? 'z-50' : 'z-10 hover:z-20'}
            `}
                            style={{
                                left: `${person.x}%`,
                                top: `${person.y}%`,
                                transform: isMounted ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(0.3)',
                                opacity: isMounted ? undefined : 0,
                                transitionDelay: useDelay ? `${delay}s` : '0s',
                            }}
                        >
                            <div
                                className={`rounded-full overflow-hidden transition-all duration-700 mx-auto
                ${isPersonActive ? `scale-150 grayscale-0 ring-4 ${ringColor} ring-offset-4 ring-offset-white shadow-2xl` : 'grayscale hover:grayscale-0'}
              `}
                                style={{
                                    width: `${person.size / 4}rem`,
                                    height: `${person.size / 4}rem`,
                                }}
                            >
                                <img
                                    src={person.img}
                                    alt={person.name}
                                    className="w-full h-full object-cover object-top"
                                    style={{ backgroundColor: '#27272a' }}
                                />
                            </div>

                            <div
                                className={`absolute left-1/2 -translate-x-1/2 mt-12 w-72 text-center transition-all duration-500 delay-100
                ${isPersonActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
              `}
                            >
                                <h3 className="text-slate-800 font-bold text-lg">{person.name}</h3>
                                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{person.designation}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}