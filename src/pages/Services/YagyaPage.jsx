import React, { useState, useRef } from "react";
import jsPDF from "jspdf";

const YagyaPage = () => {
  const [playingVideo, setPlayingVideo] = useState(null); // "gayatri" | "deep" | null

  const gayatriRef = useRef(null);
  const deepRef = useRef(null);

  const pauseOtherVideo = (current) => {
    if (current === "gayatri" && deepRef.current) {
      deepRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    } else if (current === "deep" && gayatriRef.current) {
      gayatriRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };

  const handleVideoClick = (videoKey) => {
    if (playingVideo === videoKey) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoKey);
      pauseOtherVideo(videoKey);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 25;

    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(180, 80, 0);
    doc.text("Gayatri Yagya and Deep Yagya Seva", pageWidth / 2, y, { align: "center" });
    y += 10;
    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text("Required Materials List • Free Home Puja Service", pageWidth / 2, y, { align: "center" });
    y += 15;

    const addSection = (title, items, color = [194, 83, 0]) => {
      doc.setFillColor(...color);
      doc.rect(10, y - 6, pageWidth - 20, 10, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text(title, 15, y + 1);

      y += 12;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      items.forEach((item, i) => {
        const lines = doc.splitTextToSize(`${i + 1}. ${item}`, pageWidth - 40);
        doc.text(lines, 20, y);
        y += lines.length * 6 + 3;
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
      });
      y += 8;
    };

    addSection("Deep Yagya – Required Materials", [
      "Table (3×2 ft) with clean cotton cloth",
      "Fresh Flowers (decoration & offering)",
      "Water – for Kalash + 1 bowl",
      "Kumkum / Sandalwood powder",
      "Kalash + Fresh Coconut (Shrifal)",
      "5 Mango Leaves + 10 Betel Leaves",
      "Incense Sticks – 1 pack",
      "Pure Ghee – 16 oz minimum",
      "Deepak: 1 main + 5 for aarti + 24 cotton battis",
      "Aluminum Foil – to cover table",
      "Kalawa (Moli), Prasad, Paper Towel, Steel Spoon & Bowl",
      "Big & Small Plates, Rice grains, Matchstick/Lighter",
    ]);

    addSection("Satyanarayan Katha – Required Materials", [
      "Table with clean cloth, Flowers, Water, Kumkum & Chandan",
      "Kalash + Coconut, Mango & Betel leaves",
      "Incense, Pure Ghee, Deepak (1 main + 5 aarti)",
      "Sheera (Prasad) + fruits, Aluminum foil",
      "Kalawa, Rice, Steel utensils, Matchstick",
      "Lord Vishnu / Satyanarayan Photo",
    ], [180, 50, 100]);

    addSection("Shradh Tarpan – Required Materials", [
      "Steel Containers (2–3L) – 2 pcs",
      "Kush Grass Ring, Rice, Flowers",
      "Honey, Ganga Jal, Barley, Black Sesame, Milk",
      "5 Plates with cooked food (Panchbali)",
      "2 Diyas with cotton batti & ghee",
    ], [70, 70, 80]);

    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text("Generated with devotion • Jai Shri Krishna", pageWidth / 2, 290, { align: "center" });

    doc.save("Yagya_Puja_Materials_List.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="p-2 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-red-700 to-amber-700">
            Gayatri Yagya and Deep Yagya Seva
          </h1>
          <p className="text-xl md:text-2xl text-orange-800 mt-4 font-semibold">
            Free Home Yagya Seva • San Antonio, Texas
          </p>
          <p className="text-xl md:text-2xl font-bold text-amber-900 italic mt-6">
            "यज्ञ से बड़ा कोई तप नहीं"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT: Booking Form */}
          <div className="lg:sticky lg:top-6 z-10">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-orange-500">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-800 mb-8">
                Book Your Free Yagya / Katha Today
              </h2>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSewTjnrot82fK3zsTFb247_TkplnpJ0qcmhicIt_KxQj2UEUg/viewform?embedded=true"
                width="100%"
                height="3000"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Yagya Booking Form"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-10">

            {/* Videos – Click to Play + One at a time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Gayatri Yagya */}
              <div
                onClick={() => handleVideoClick("gayatri")}
                className="rounded-3xl overflow-hidden shadow-2xl border-8 border-amber-100 cursor-pointer group"
              >
                {playingVideo === "gayatri" ? (
                  <iframe
                    ref={gayatriRef}
                    src="https://www.youtube-nocookie.com/embed/kYPoV683Ki4?autoplay=1&rel=0&enablejsapi=1"
                    title="Gayatri Yagya"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full aspect-video"
                  ></iframe>
                ) : (
                  <div className="relative aspect-video bg-black">
                    <img
                      src="https://img.youtube.com/vi/kYPoV683Ki4/maxresdefault.jpg"
                      alt="Gayatri Yagya"
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full shadow-2xl group-hover:scale-125 transition-transform">
                        <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Deep Yagya */}
              <div
                onClick={() => handleVideoClick("deep")}
                className="rounded-3xl overflow-hidden shadow-2xl border-8 border-amber-100 cursor-pointer group"
              >
                {playingVideo === "deep" ? (
                  <iframe
                    ref={deepRef}
                    src="https://www.youtube-nocookie.com/embed/r-aC-8tYfA0?autoplay=1&rel=0&enablejsapi=1"
                    title="Deep Yagya"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full aspect-video"
                  ></iframe>
                ) : (
                  <div className="relative aspect-video bg-black">
                    <img
                      src="https://img.youtube.com/vi/r-aC-8tYfA0/maxresdefault.jpg"
                      alt="Deep Yagya"
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-white/90 p-3 rounded-full shadow-2xl group-hover:scale-125 transition-transform">
                        <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Special Occasions */}
            <div className="bg-white rounded-3xl shadow-2xl border border-orange-200">
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-6 rounded-t-3xl">
                <h3 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                  Special Occasions We Serve
                </h3>
              </div>
              <div className="p-6 md:p-8 bg-orange-50">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Birthday", "Anniversary", "Baby Shower", "Griha Pravesh",
                    "Marriage", "Satyanarayan Katha", "Shraddha", "Terahvi",
                    "Tarpan", "Car Puja", "New Business"
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-xl px-4 py-3 text-center shadow hover:shadow-lg hover:scale-105 transition"
                    >
                      <span className="font-semibold text-gray-800 text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Guidelines */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl shadow-2xl border-l-8 border-orange-600">
              <div className="bg-orange-700 text-white px-8 py-6 rounded-t-3xl">
                <h3 className="text-2xl md:text-3xl font-bold">Important Guidelines</h3>
              </div>
              <div className="p-6 md:p-8 space-y-5">
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow">
                  <p className="font-medium text-gray-800">Yagya is <strong>100% FREE</strong> – donations accepted with gratitude</p>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow">
                  <p className="font-medium text-gray-800">Please prepare all samagri (materials) in advance</p>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow">
                  <p className="font-medium text-gray-800">Ensure proper ventilation and fire safety during havan</p>
                </div>
              </div>
            </div>

            {/* Deep Yagya Details */}
            <details open className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-3xl shadow-2xl overflow-hidden">
              <summary className="text-xl md:text-2xl font-bold px-8 py-6 cursor-pointer">
                Deep Yagya (24 दीपक यज्ञ) – Required Materials
              </summary>
              <div className="p-6 md:p-8 bg-amber-50 text-gray-800 text-base md:text-lg">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Table (3×2 ft) with clean cotton cloth</li>
                  <li>Fresh Flowers (decoration & offering)</li>
                  <li>Water – for Kalash + 1 bowl</li>
                  <li>Kumkum / Sandalwood powder</li>
                  <li>Kalash + Fresh Coconut (Shrifal)</li>
                  <li>5 Mango Leaves + 10 Betel Leaves</li>
                  <li>Incense Sticks – 1 pack</li>
                  <li>Pure Ghee – 16 oz minimum</li>
                  <li>Deepak: 1 main + 5 for aarti + <strong>24 cotton battis</strong></li>
                  <li>Aluminum Foil – to cover table</li>
                  <li>Kalawa (Moli), Prasad, Paper Towel, Steel Spoon & Bowl</li>
                  <li>Big & Small Plates, Rice grains, Matchstick/Lighter</li>
                </ol>
              </div>
            </details>

            <details open className="bg-gradient-to-r from-pink-600 to-amber-600 text-white rounded-3xl shadow-2xl overflow-hidden">
              <summary className="text-xl md:text-2xl font-bold px-8 py-6 cursor-pointer">
                Satyanarayan Katha – Required Materials
              </summary>
              <div className="p-6 md:p-8 bg-pink-50 text-gray-800">
                <ol className="space-y-3 list-decimal list-inside text-base md:text-lg">
                  <li>Table with clean cloth, Flowers, Water, Kumkum & Chandan</li>
                  <li>Kalash + Coconut, Mango & Betel leaves</li>
                  <li>Incense, Pure Ghee, Deepak (1 main + 5 aarti)</li>
                  <li>Sheera (Prasad) + fruits, Aluminum foil</li>
                  <li>Kalawa, Rice, Steel utensils, Matchstick</li>
                  <li><strong>Lord Vishnu / Satyanarayan Photo</strong></li>
                </ol>
              </div>
            </details>

            <details open className="bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-3xl shadow-2xl overflow-hidden">
              <summary className="text-xl md:text-2xl font-bold px-8 py-6 cursor-pointer">
                Shradh Tarpan – Required Materials
              </summary>
              <div className="p-6 md:p-8 bg-gray-100 text-gray-800">
                <ol className="space-y-3 list-decimal list-inside text-base md:text-lg">
                  <li>Steel Containers (2–3L) – 2 pcs</li>
                  <li>Kush Grass Ring, Rice, Flowers</li>
                  <li>Honey, Ganga Jal, Barley, Black Sesame, Milk</li>
                  <li>5 Plates with cooked food (Panchbali)</li>
                  <li>2 Diyas with cotton batti & ghee</li>
                </ol>
              </div>
            </details>

            {/* PDF Download Button – पूरी तरह सही है */}
            <div className="text-center py-8">
              <button
                onClick={generatePDF}
                className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download All Puja Materials PDF</span>
              </button>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center py-12 bg-gradient-to-r from-orange-700 to-amber-700 rounded-3xl text-white shadow-2xl">
          <p className="text-3xl md:text-4xl font-bold mb-4">जय गुरुदेव</p>
          <p className="text-xl md:text-2xl">सर्वे भवन्तु सुखिनः | सर्वे सन्तु निरामयाः</p>
        </div>

      </div>
    </div>
  );
};

export default YagyaPage;