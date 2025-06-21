import React from 'react'

const FeaturesBlock = () => {
    return (
        
            <div className=' pb-10 pt-2 flex-col bg-slate-100 shadow-[0_-4px_12px_rgba(0,0,0,0.55)] rounded-[60px]'>
                <section className="mt-14 px-6 md:px-16">
                    <h2 className="text-4xl font-bold mb-12  text-center text-gray-800">
                        Features That Make You Shine
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Speed",
                                desc: "Fast & secure product delivery",
                                color: "from-green-400 to-blue-500",
                            },
                            {
                                title: "Availability",
                                desc: "Real-time tracking and updates",
                                color: "from-purple-400 to-pink-500",
                            },
                            {
                                title: "Trust",
                                desc: "Verified transporters only",
                                color: "from-yellow-400 to-red-500",
                            },
                            {
                                title: "Support",
                                desc: "24/7 customer support",
                                color: "from-indigo-400 to-blue-600",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.55)] p-6 rounded-3xl  border-lg hover:shadow-[0_-4px_12px_rgba(0,0,0,1)] transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02]`}
                            >
                                <div
                                    className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center text-white text-lg font-bold`}
                                >
                                    {item.title[0]}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        
    )
}

export default FeaturesBlock
