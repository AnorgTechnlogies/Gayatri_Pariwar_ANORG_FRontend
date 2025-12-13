import React from 'react';

const YogaNaturopathyPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-white">
            {/* Header */}
            <header className="text-orange-700 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Pragya Yog & Naturopathy Classes
                    </h1>
                    <p className="text-lg md:text-xl">
                        By All World Gayatri Pariwar • Pt. Shriram Sharma Acharya
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* ========================= LEFT: Google Form ========================= */}
                    <div className="order-1 lg:order-none lg:sticky lg:top-6 lg:self-start">
                        <div className="bg-white rounded-3xl shadow-2xl border-4 border-teal-400 overflow-hidden">
                            <div className="bg-orange-600 text-white text-center py-8 px-6">
                                <h2 className="text-3xl md:text-4xl font-bold">Register Now</h2>
                                <p className="mt-3 text-lg opacity-95">
                                    Join our weekly online Yoga & Naturopathy session
                                </p>
                            </div>

                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSeJnWKaVlavQ8yHI5DBKqu3sthTr25LEqGWtzPpGyWxM7R1gg/viewform?embedded=true"
                                width="100%"
                                height="1200"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                title="Registration Form"
                                className="w-full"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>

                    {/* ========================= RIGHT: Program Details ========================= */}
                    <div className="space-y-10 order-2">

                        {/* Introduction */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-teal-100">
                            <p className="text-2xl md:text-3xl text-orange-400 mb-6 font-bold">
                                Disease prevention through Yoga,<br />
                                healthy living through Naturopathy
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Pragya Yog Aasan & Pragya Sadhana — specially designed by Yug Rishi Pandit Shriram Sharma Acharya —
                                combine ancient wisdom with modern science to relieve stress, boost immunity, and awaken the natural healing power within.
                            </p>
                        </div>

                        {/* When & Where */}
                        <details open className="bg-orange-600 text-white rounded-3xl shadow-2xl overflow-hidden">
                            <summary className="text-2xl font-bold px-8 py-6 cursor-pointer hover:bg-orange-700 transition">
                                When & Where?
                            </summary>
                            <div className="p-8 bg-teal-50 text-lg text-gray-800 space-y-6">
                                <div className="flex items-center gap-5 bg-white rounded-2xl px-6 py-4 shadow-md">
                                    <span className="text-4xl">Calendar</span>
                                    <div>
                                        <p className="font-bold text-xl">Every Saturday</p>
                                        <p className="text-teal-700">7:00 AM – 8:00 AM US Central Time</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 bg-white rounded-2xl px-6 py-4 shadow-md">
                                    <span className="text-4xl">Adult</span>
                                    <div>
                                        <p className="font-bold text-xl">Age Group</p>
                                        <p className="text-teal-700">16 years and above</p>
                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* What We Practice */}
                        <details open className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <summary className="bg-orange-600 text-white text-2xl font-bold px-8 py-6 cursor-pointer hover:bg-orange-700 transition">
                                What We Practice Every Week
                            </summary>
                            <div className="p-8 space-y-6 bg-cyan-50 text-gray-800">
                                <div><strong>Yoga:</strong> Pragya Yog Asanas • Pranayama • Dhyan</div>
                                <div><strong>Naturopathy:</strong> Diet guidance • Jal Chikitsa • Mitti Chikitsa • Fasting tips</div>
                                <div><strong>Relaxation:</strong> Yoga Nidra • Mindfulness • Shanti Path</div>
                                <div><strong>Special:</strong> Solutions for back pain, diabetes, BP, stress, insomnia, etc.</div>
                            </div>
                        </details>

                        {/* Special Features */}
                        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-3xl p-10 text-center shadow-xl">
                            <p className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">Special Features</p>
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                                Beginner-friendly • Modified asanas for all body types • Personal guidance • 
                                Recording available for 24 hrs • <strong>Completely FREE</strong> (donations welcome)
                            </p>
                        </div>

                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center mt-16 bg-orange-600 text-white py-12 rounded-3xl shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        स्वास्थ्य ही धन है – आइए योग अपनाएं
                    </h2>
                    <p className="text-2xl md:text-3xl">
                        One hour every Saturday can change your entire life
                    </p>
                </div>
            </div>
        </div>
    );
};

export default YogaNaturopathyPage;