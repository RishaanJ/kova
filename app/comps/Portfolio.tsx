"use client"


let projects = [
    {
        alt : "Boba1",
        image : "/strawberry.png"
    },
    {
        alt : "Boba1",
        image : "/taro.png"
    },
    {
        alt : "Boba1",
        image : "/normal.png"
    },
    {
        alt:  "Boba1",
        image : "/matcha.png"
    },
    {
        alt: "Item5",
        image: "/Creative5.png"
    },
    {
        alt: "Item6",
        image: "/Creative6.png"
    },
    {
        alt: "Item7",
        image: "/canyon.png"
    }
]
export default function Portfolio(){
    const carouselItems = [...projects, ...projects, ...projects, ...projects];

    return (
        <section className="py-24 relative overflow-hidden bg-background" id="portfolio">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 50s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
            
            <div className="max-w-5xl mx-auto px-4 relative">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mt-4 leading-tight tracking-tight">
                        Our Work
                    </h2>
                    <p className="text-sm text-gray-500">Spec Work/Concept Ads</p>
                </div>
            </div>

            {/* Carousel Wrapper with fade edges */}
            <div className="relative w-full overflow-hidden flex flex-col group">
                {/* Left/Right Fades to make the images smoothly appear/disappear */}
                <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                {/* Carousel Track */}
                <div className="flex w-max animate-marquee items-center py-6">
                    {carouselItems.map((project, i) => (
                        <div 
                            key={i} 
                            className="mx-3 md:mx-4 flex-shrink-0 w-[260px] sm:w-[320px] md:w-[400px] group/item cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ease-out ">
                                <img 
                                    src={project.image} 
                                    alt={project.alt} 
                                    className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 ease-out" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}