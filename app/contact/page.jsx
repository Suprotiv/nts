"use client";
import FadeIn from "@/app/components/FadeIn";
import React from "react";

const ContactPage = () => {
  const contactData = [
    {
      department: "Admission Office",
      email: "admission@ntskolkata.org",
      phone: "+91 98765 43210",
      extension: "101",
    },
    {
      department: "Principal's Office",
      email: "principal@ntskolkata.org",
      phone: "+91 98765 43211",
      extension: "102",
    },
    {
      department: "Accounts Department",
      email: "accounts@ntskolkata.org",
      phone: "+91 98765 43212",
      extension: "103",
    },
    {
      department: "Transport Incharge",
      email: "transport@ntskolkata.org",
      phone: "+91 98765 43213",
      extension: "104",
    },
  ];

  return (
    <section className="bg-[#fefdf8] min-h-screen py-30">
      <FadeIn>
        <div className="max-w-[80vw] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
            Contact Information
          </h1>

          {/* Contact Table */}
          <div className="overflow-x-auto my-10">
            <table className="w-full border border-green-600 text-left text-sm md:text-base">
              <thead className="bg-green-100 text-green-800 font-semibold">
                <tr>
                  <th className="border border-green-600 p-3">Department</th>
                  <th className="border border-green-600 p-3">Email</th>
                  <th className="border border-green-600 p-3">Phone</th>
                  <th className="border border-green-600 p-3">Extension</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((item, index) => (
                  <tr key={index}>
                    <td className="border text-blue-900 border-green-600 p-3">
                      {item.department}
                    </td>
                    <td className="border text-blue-900 border-green-600 p-3">
                      <a
                        href={`mailto:${item.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {item.email}
                      </a>
                    </td>
                    <td className="border text-blue-900 border-green-600 p-3">
                      <a
                        href={`tel:${item.phone.replace(/\D/g, "")}`}
                        className="hover:underline"
                      >
                        {item.phone}
                      </a>
                    </td>
                    <td className="border text-blue-900 border-green-600 p-3">
                      {item.extension}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Information Box */}
          <div className="mt-4 p-4 border border-green-600 bg-green-50 text-blue-900 text-sm md:text-base">
            <h3 className="font-bold mb-2">Office Hours:</h3>
            <p>Monday to Friday: 8:00 AM to 4:00 PM</p>
            <p>Saturday: 8:00 AM to 1:00 PM</p>
            <p className="mt-2">Closed on Sundays and public holidays</p>
          </div>

          {/* Campus Address */}
          <div className="mt-8 p-6 bg-white border border-green-600 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Campus Address
            </h2>
            <address className="not-italic text-blue-900">
              The Newtown School
              <br />
              Action Area III, Newtown
              <br />
              Kolkata - 700135
              <br />
              West Bengal, India
            </address>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactPage;
