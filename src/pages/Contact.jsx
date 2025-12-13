import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-2 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-orange-700 py-2 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-700 mb-6">
          Contact Us
        </h1>

        {/* Google Form Embed */}
        <div className="w-full flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfQqbVSjMX2RVLYK5dqIReMIuzo7eEY_dEQ314icKpCQ1l3NA/viewform?embedded=true"
            width="640"
            height="1527"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>

        </div>
      </div>
    </div>
  );
};

export default Contact;
