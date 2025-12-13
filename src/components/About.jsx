import React from 'react';
import About_Image from '../assets/About_Image2.jpg';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-pink-50">

            {/* Hero Banner */}
            <div className="relative text-red-800 py-5 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0  bg-cover bg-center"></div>
                </div>
                <div className="relative max-w-6xl mx-auto text-center px-2">
                    <h1 className="text-2xl md:text-5xl font-bold mb-4 tracking-wide">About Us</h1>
                    <p className="text-2xl md:text-3xl opacity-95">All World Gayatri Pariwar</p>
                    <p className="text-xl mt-3">Yug Nirman Mission • Vasudhaiva Kutumbakam • One World, One Family</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

                {/* ==================== MAIN CONTENT ==================== */}
                <div className="lg:col-span-2 space-y-14">

                    {/* Vision */}
                    <section className="bg-white rounded-3xl shadow-2xl p-10 border-t-8 border-orange-500">
                        <h2 className="text-4xl font-bold text-orange-700 mb-6 flex items-center gap-4">
                            <span className="text-5xl">Vision</span>
                        </h2>
                        <p className="text-xl leading-relaxed text-gray-800">
                            To awaken the divine consciousness in every human heart and establish a golden era of truth, love, and harmony on earth — where humanity lives as one global family, free from hatred, violence, and division. A world where the ancient Vedic prayer <strong>“Vasudhaiva Kutumbakam”</strong> is not just a dream, but a living reality.
                        </p>
                    </section>

                    {/* Mission */}
                    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-3xl shadow-2xl p-10 border-t-8 border-blue-600">
                        <h2 className="text-4xl font-bold text-blue-900 mb-8">Mission</h2>
                        <div className="space-y-8 text-lg">
                            <div className="flex gap-5">
                                <div className="text-4xl text-blue-600"></div>
                                <div>
                                    <strong className="text-xl block mb-2">Vichar Kranti (Thought Revolution)</strong>
                                    <p className="text-gray-700">Transforming individual and collective mindset through wisdom, meditation, and righteous living.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="text-4xl text-blue-600"></div>
                                <div>
                                    <strong className="text-xl block mb-2">Social Reformation</strong>
                                    <p className="text-gray-700">Eradicating blind faith, dowry, addiction, casteism, and all forms of social evil through awareness and selfless service.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="text-4xl text-blue-600"></div>
                                <div>
                                    <strong className="text-xl block mb-2">Character & Personality Development</strong>
                                    <p className="text-gray-700">Building strong moral character through self-discipline, simplicity, satsang, and spiritual education.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="text-4xl text-blue-600"></div>
                                <div>
                                    <strong className="text-xl block mb-2">Scientific Spirituality</strong>
                                    <p className="text-gray-700">Reviving Gayatri Sadhana, Yagya, Yoga, and meditation for complete physical, mental, and spiritual health.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="text-4xl text-blue-600"></div>
                                <div>
                                    <strong className="text-xl block mb-2">Yug Nirman (Era Transformation)</strong>
                                    <p className="text-gray-700">Laying the foundation of a new divine civilization based on truth, compassion, and collective progress.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Shantikunj */}
                    <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-10 border-t-8 border-green-600">
                        <h2 className="text-4xl font-bold text-green-800 mb-6">Gayatri Teerth Shantikunj – The Spiritual Heart</h2>
                        <p className="text-xl text-gray-800 leading-relaxed mb-6">
                            Established in 1971 by <strong>Pandit Shriram Sharma Acharya</strong> on the holy banks of Mother Ganga in Haridwar, Shantikunj is the global headquarters and spiritual birthplace of the Yug Nirman Mission. It is a sacred sanctuary where millions come to experience divine peace, perform deep sadhana, and get trained in the art of divine living.
                        </p>
                        <p className="text-lg text-gray-700">
                            With the eternal flame of Akhand Jyoti, the majestic Gayatri Mata Temple, and the divine presence of Himalayan sages, Shantikunj radiates purity, power, and transformation. Over <strong>50 million devotees</strong> have been spiritually renewed here through training camps, mass yagyas, and selfless service.
                        </p>
                    </section>

                    {/* Global Organization */}
                    <section className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl shadow-2xl p-10">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Global Family</h2>
                        <div className="grid md:grid-cols-2 gap-10 text-lg">
                            <div className="space-y-4">
                                <p><strong>100 Million+</strong> Devotees across 100+ countries</p>
                                <p><strong>5,000+</strong> Pragyapeeths & Shaktipeeths</p>
                                <p><strong>20,000+</strong> Active centers worldwide</p>
                                <p><strong>300+</strong> Registered trusts and organizations</p>
                            </div>
                            <div className="space-y-4 font-medium">
                                <p>Dev Sanskriti Vishwavidyalaya (DSVV), Haridwar</p>
                                <p>Brahmavarchas Shodh Sansthan (Research Wing)</p>
                                <p>Akhand Jyoti Magazine (14 languages)</p>
                                <p>Thousands of schools, hospitals, gaushalas, and de-addiction centers</p>
                            </div>
                        </div>
                    </section>

                </div>

                {/* ==================== SIDEBAR ==================== */}
                <div className="space-y-10">

                    {/* Daily Spiritual Update */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="text-center py-6">
                            {/* <h3 className="text-2xl font-bold">Daily Spiritual Update</h3> */}
                            <img src={About_Image} alt="Daily Update" className="w-full" />
                        </div>
                        {/* <img src={About_Image}alt="Daily Update" className="w-full h-64 object-cover" /> */}
                    </div>

                    {/* More Articles */}
                    {/* More Articles Section – Clickable */}
                    <div className="bg-gradient-to-b from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow">
                        <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                            More Articles
                        </h3>
                        <ul className="space-y-5 text-lg">
                            {[
                                { text: "Origin of Mission", url: "https://www.awgp.org/en/about_us/mission_vision/origin_of_mission" },
                

                                { text: "Social Reforms", url: "https://www.awgp.org/en/about_us/mission_vision/social_reforms" },
                                { text: "Vichar Kranti Abhiyan", url: "https://www.awgp.org/en/about_us/mission_vision/vichar_kranti_abhiyan" },
                                { text: "Philosophy", url: "https://www.awgp.org/en/about_us/mission_vision/philosophy" },
                            ].map((item, index) => (
                                <li key={index} className="group">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-blue-700 hover:text-blue-900 font-medium 
                                                    transform transition-all duration-300 hover:translate-x-2 
                                                    group-hover:drop-shadow-lg"
                                    >
                                        <span className="text-2xl text-blue-500 group-hover:text-yellow-500 transition">
                                            →
                                        </span>
                                        <span className="border-b-2 border-transparent group-hover:border-blue-600 pb-1 transition">
                                            {item.text}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Related Links Section – Clickable */}
                    <div className="bg-gradient-to-b from-purple-50 to-pink-100 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow">
                        <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">
                            Related Links
                        </h3>
                        <ul className="space-y-5 text-lg">
                            {[
                                { text: "Mission Vision", url: "https://awgpdfw.org/" },
                                { text: "Gayatri Teerth Shantikunj", url: "https://www.awgp.org/" },
                                { text: "Patron Founder – Pt. Shriram Sharma Acharya", url: "https://www.awgp.org/en/patron_founder" },
                            
                                { text: "DSVV (Dev Sanskriti Vishwavidyalaya)", url: "https://www.dsvv.ac.in" },
                               
                                { text: "Dr. Chinmay Pandya – Our Pioneering Youthful Representative", url: "https://www.awgp.org/en/about_us/dr_chinmay_pandya" },
                            ].map((item, index) => (
                                <li key={index} className="group">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-purple-700 hover:text-purple-900 font-semibold 
                                        transform transition-all duration-300 hover:translate-x-2 
                                        group-hover:drop-shadow-lg"
                                                        >
                                        <span className="text-2xl text-purple-500 group-hover:text-yellow-400 transition">
                                            →
                                        </span>
                                        <span className="border-b-2 border-transparent group-hover:border-purple-600 pb-1 transition">
                                            {item.text}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Inspirational Quote */}
                    <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white text-center rounded-3xl p-5 shadow-xl">
                        <p className="text-2xl font-bold italic leading-relaxed">
                            "यह युग परिवर्तन का युग है...<br />नया दौर अवश्य आएगा।"
                        </p>
                        <p className="text-xl mt-8 font-semibold">— युगऋषि पंडित श्रीराम शर्मा आचार्य</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;