'use client'


export default function Apply() {
    return (
        <section>
        <div className="relative w-full h-screen overflow-hidden">
            <img src="/images/apply/AKA02504.webp" alt="apply" />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold">We are eager to meet you</h2>
            </div>
            <div className='absolute bottom-70 left-0 right-90 z-10 flex flex-col  text-white gap-2'>
                <h3 className='text-xl font-bold'>ADMISSION APPLICATION OPEN FOR</h3>
                <h3 className="text-xl font-bold">FALL 2026-2027 [Only B.Pharm. & LL.B]</h3>
                </div>
        </div>
        </section>
    );
}
