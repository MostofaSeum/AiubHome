"use client";
import TypingText from "../TypingText/TypingText";
import CountUp from "react-countup";

export default function FactsAndFigures() {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-xl mx-auto flex justify-start items-center pt-20 pb-20">
        <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
          <TypingText
            text="Facts"
            className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a]"
          />
          <TypingText
            text="And Figures"
            className="text-[1.5rem] md:text-[2rem] font-bold text-black uppercase ml-4 tracking-wider"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#ffffffff",
          color: "black",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 className="text-4xl font-bold hover:text-[#6cbafc] transition-all duration-300">
            <CountUp end={5} duration={2} enableScrollSpy scrollSpyOnce />
          </h2>
          <p className="text-2xl font-bold">Faculties</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 className="text-4xl font-bold hover:text-[#6cbafc] transition-all duration-300">
            <CountUp end={21} duration={2} enableScrollSpy scrollSpyOnce />
          </h2>
          <p className="text-2xl font-bold">Academic Programs</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 className="text-4xl font-bold hover:text-[#6cbafc] transition-all duration-300">
            <CountUp
              end={41226}
              separator=","
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
          </h2>
          <p className="text-2xl font-bold">Total Graduates</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 className="text-4xl font-bold hover:text-[#6cbafc] transition-all duration-300">
            <CountUp
              end={23}
              separator=","
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
          </h2>
          <p className="text-2xl font-bold">Convocations</p>
        </div>
      </div>
    </section>
  );
}
