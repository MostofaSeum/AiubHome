"use client";

import { motion } from "framer-motion";

export default function Apply() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[40rem] md:h-screen min-h-[500px] bg-zinc-900 select-none overflow-hidden font-sans text-white [clip-path:inset(0px)]">
        {/* Background Image*/}
        <div className="absolute inset-0 w-full h-full">
          <div className="fixed inset-0 w-full h-full pointer-events-none">
            <img
              src="/images/apply/AKA02504.webp"
              alt="Admission Banner"
              className="w-full h-full object-cover opacity-85"
            />
            {/* Dark Ambient */}
            <div className="absolute inset-0 bg-black/55 z-10" />
          </div>
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
          <motion.div
            className="w-full flex flex-col gap-12 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Title Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="w-full"
            >
              <h1 className="text-[3.5rem] md:text-[5.5rem] font-bold tracking-tight leading-none text-white opacity-95">
                We are eager to meet you
              </h1>
            </motion.div>

            {/* Details & Button Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8"
            >
              <div className="lg:col-span-8 flex flex-col gap-4 md:gap-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wider text-white/90">
                    Admission Application Open For
                  </h2>
                </div>

                <div className="flex flex-col gap-2 md:gap-3">
                  <p className="text-lg md:text-2xl font-bold tracking-wide text-white flex flex-wrap items-center gap-x-2">
                    <span>FALL 2026-27 (SLOT-2) [ONLY B.PHARM. & LL.B]</span>
                  </p>
                  <p className="text-lg md:text-2xl font-bold tracking-wide text-white flex flex-wrap items-center gap-x-2">
                    <span>
                      SUMMER 2025-26 (SLOT-2) [EXCEPT B.PHARM. & LL.B]
                    </span>
                  </p>
                </div>
              </div>

              {/*Button */}
              <div className="lg:col-span-4 flex lg:justify-end items-center">
                <button className="w-full lg:w-auto px-8 py-4 text-xl font-bold bg-[#0f4a8a] hover:bg-[#0c3c70] active:scale-95 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform cursor-pointer">
                  Apply Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
