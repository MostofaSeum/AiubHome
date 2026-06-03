"use client";

import TypingText from '../TypingText/page';

export default function TalentsGotSparked() {
  return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto flex justify-left items-center py-12">
                <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
                    <TypingText
                        text="Talents"
                        className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a]"
                    />
                    <TypingText
                        text="Got Sparked"
                        className="text-[1.5rem] md:text-[2rem] font-bold text-black uppercase ml-4 tracking-wider"
                    />
                </div>
            </div>
            <div className='max-w-3xl flex flex-row items-center gap-6 sticky top-[300px]'>
                <img src="/images/TalentsGotSparked/winningchapter-(8).webp" alt="winning-image" /> 
                <span className='w-1/2 text-zinc-900 text-[2rem] font-bold leading-tight'>AIUB Writes a Winning Chapter at Inter University Table Tennis 2026</span>
            </div>
    </section>
  );
}