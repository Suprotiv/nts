"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const registrationForms = {
  "Nursery – IX": {
    iframeSrc:
      "https://forms.zohopublic.com/angshunbsite24x71/form/NTSRegistrationNurseryIX/formperma/1FLhPy-MR44Eo2_07L4PUS7_T-8PnBv2uU2P9WMZSxU?zf_enablecamera=true",
  },
  "Class XI": {
    iframeSrc:
      "https://forms.zohopublic.com/angshunbsite24x71/form/NTSRegistrationXI/formperma/Pbi81CLQ3zCFBUjWEtzwsEOZ9bJe1p-sK0yZPoWHPag?zf_enablecamera=true",
  },
};

const RegistrationPage = () => {
  const [activeTab, setActiveTab] = useState("Nursery – IX");

  return (
    <div className="bg-[#fefdf8] pb-20 min-h-screen">
      {/* Header Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url("/NTS_Interiors_2.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ADMISSIONS</h1>
          <p className="text-xl font-medium text-blue-400">
            Choose the appropriate class to begin registration
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="md:px-6 py-12 md:max-w-[80vw] mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(registrationForms).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-[#051c39] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <iframe
            aria-label={`Registration Form for ${activeTab}`}
            frameBorder="0"
            allow="camera;"
            className="h-[1200px] w-full rounded-md shadow-xl"
            src={registrationForms[activeTab].iframeSrc}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationPage;
