"use client";
import FadeIn from "@/app/components/FadeIn";
import React from "react";

const eligibilityData = [
  {
    class: "Nursery",
    age: "3 years +",
    dob: "01.04.2021 to 31.03.2022",
  },
  {
    class: "LKG",
    age: "4 years +",
    dob: "01.04.2020 to 31.03.2021",
  },
  {
    class: "UKG",
    age: "5 years +",
    dob: "01.04.2019 to 31.03.2020",
  },
  {
    class: "I",
    age: "6 years +",
    dob: "01.04.2018 to 31.03.2019",
  },
];
const streams = [
  {
    title: "SCIENCE STREAM FEES STRUCTURE",
    data: [
      ["Registration Fee", "₹ 2,000", "₹ 2,000", "One Time"],
      ["Admission Fee", "-", "₹ 50,000", "One Time"],
      ["Administrative Charges", "₹ 50,000", "₹ 50,000", "One Time"],
      ["Annual Session Fee", "₹ 15,000", "₹ 15,000", "Annually"],
      ["Security Deposit", "Pl. refer note 1", "₹ 15,000", "Refundable"],
      [
        "Quarterly Tuition Fees",
        "₹ 27,000",
        "₹ 27,000",
        "Payable in advance for every quarter",
      ],
    ],
  },
  {
    title: "COMMERCE STREAM FEES STRUCTURE",
    data: [
      ["Registration Fee", "₹ 2,000", "₹ 2,000", "One Time"],
      ["Admission Fee", "-", "₹ 50,000", "One Time"],
      ["Administrative Charges", "₹ 50,000", "₹ 50,000", "One Time"],
      ["Annual Session Fee", "₹ 15,000", "₹ 15,000", "Annually"],
      ["Security Deposit", "Pl. refer note 1", "₹ 15,000", "Refundable"],
      [
        "Quarterly Tuition Fees",
        "₹ 27,000",
        "₹ 27,000",
        "Payable in advance for every quarter",
      ],
    ],
  },
  {
    title: "HUMANITIES STREAM FEES STRUCTURE",
    data: [
      ["Registration Fee", "₹ 2,000", "₹ 2,000", "One Time"],
      ["Admission Fee", "-", "₹ 50,000", "One Time"],
      ["Administrative Charges", "₹ 50,000", "₹ 50,000", "One Time"],
      ["Annual Session Fee", "₹ 15,000", "₹ 15,000", "Annually"],
      ["Security Deposit", "Pl. refer note 1", "₹ 15,000", "Refundable"],
      [
        "Quarterly Tuition Fees",
        "₹ 27,000",
        "₹ 27,000",
        "Payable in advance for every quarter",
      ],
    ],
  },
];

const EligibilityCriteria = () => {
  return (
    <section className="bg-[#fefdf8] mt-20 min-h-screen my-auto flex flex-col justify-center ">
      <FadeIn>
        <div className="my-auto flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mt-10">
            Eligibility Criteria{" "}
          </h2>
          <div className="max-w-[80vw]   py-20  mx-auto px-2">
            <p className="text-blue-900 text-sm md:text-base mb-6">
              For admission in the academic session 2025–26, eligibility of a
              candidate to a particular class will be based on the age of the
              candidate as on <strong>31.03.2025</strong>. Classwise age
              criteria is as mentioned below:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-green-600 text-sm md:text-base text-left">
                <thead className="bg-green-100 text-green-800 font-semibold">
                  <tr>
                    <th className="border border-green-600 p-3">CLASS</th>
                    <th className="border border-green-600 p-3">AGE</th>
                    <th className="border border-green-600 p-3">
                      ELIGIBLE DATE OF BIRTH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eligibilityData.map((item, index) => (
                    <tr key={index}>
                      <td className="border text-blue-900 border-green-600 p-3">
                        {item.class}
                      </td>
                      <td className="border text-blue-900 border-green-600 p-3">
                        {item.age}
                      </td>
                      <td className="border text-blue-900 border-green-600 p-3">
                        {item.dob}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 border border-green-600 bg-green-50 text-blue-900 text-sm md:text-base">
              For eligibility in class II and above, the student must have
              studied in class I and above respectively in a formal school in
              the previous academic year.
            </div>
          </div>
        </div>

        <div className="max-w-[80vw] py-20 mx-auto px-4 mt-10 text-blue-900 ">
          <h1 className="text-4xl font-bold text-center mb-8">
            FEES & BILLING (Nursery to Class XI)
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Fees Payable at the Time of Admission
          </h2>

          {/* Admission Fee Table */}
          <div className="overflow-x-auto border border-green-700 rounded-md">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-green-100 text-green-700">
                  <th className="border border-green-700 px-4 py-3 text-left">
                    Nursery to Class IX
                  </th>
                  <th className="border border-green-700 px-4 py-3 text-left">
                    Class XI - Non NTS Student
                  </th>
                  <th className="border border-green-700 px-4 py-3 text-left">
                    Class XI - NTS Students
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-600 px-4 py-2">
                    Admission Fees
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    Admission Fees
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    Administrative Charges
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-600 px-4 py-2">
                    First Quarter Tuition Fee
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    Administrative Charges
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    First Quarter Tuition Fee
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-600 px-4 py-2">
                    First Quarter Transport Fee (If Applicable)
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    First Quarter Tuition Fee
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    First Quarter Transport Fee (If Applicable)
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-600 px-4 py-2">
                    Annual Fee
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    First Quarter Transport Fee (If Applicable)
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    Annual Fee
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-600 px-4 py-2">
                    Security Deposit
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    Annual Fee
                  </td>
                  <td className="border border-green-600 px-4 py-2">-</td>
                </tr>
                <tr>
                  <td className="border border-green-600 px-4 py-2">-</td>
                  <td className="border border-green-600 px-4 py-2">
                    Security Deposit
                  </td>
                  <td className="border border-green-600 px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-blue-800">
            Note: For NTS students, the existing security deposit will be
            transferred for admission to Class XI.
          </p>

          {/* Fee Payment Info */}
          <div className="mt-8 space-y-4 text-sm">
            <p>
              The Tuition Fees, Transport Fees and Annual Fees are subject to
              revision on an annual basis.
            </p>
            <p>
              Please ensure payment of full fee for the relevant quarter. All
              quarterly fees must be paid on or before the 10th of the first
              month of the relevant quarter.
            </p>
            <p>
              The Annual Fees for the next academic session must be paid before
              the 10th of the first month of the 4th quarter of the ongoing
              academic session.
            </p>
            <p>
              For students studying in Class XI, annual session fees for the
              second year has to be paid by 31st March of the year in which the
              student will study in Class XI.
            </p>
            <p>Payments are to be made in either of the following methods:</p>
            <ul className="list-disc pl-6">
              <li>
                Through A/c payee cheque drawn in favour of ‘The Newtown School’
                or by Debit/Credit Card in person at the School Office.
              </li>
              <li>
                Online via our website using the integrated payment gateway.
              </li>
              <li>
                Unique payment ID will be sent to parents for first-time fee
                payment after selection.
              </li>
              <li>
                Regular fee payments can also be made online post admission
                formalities.
              </li>
            </ul>
            <p>
              In case of withdrawal of admission post completion of formalities,
              refunds will be processed per the refund policy at{" "}
              <a
                className="text-blue-600 underline"
                href="https://www.ntskolkata.org"
              >
                www.ntskolkata.org
              </a>
              .
            </p>
          </div>

          {/* Late Fee Table */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Schedule of Late Fine Charges:
          </h2>
          <div className="overflow-x-auto border border-green-600 rounded-md">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-green-100 text-green-800">
                  <th className="border border-green-600 px-4 py-3 text-left">
                    Type of Late Fine
                  </th>
                  <th className="border border-green-600 px-4 py-3 text-left">
                    Fine Amount
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-green-600 px-4 py-3">
                    Post-Dated Cheque dated 1st July, 2023 submitted against
                    Admission Fee II (Not Applicable for Class XI)
                  </td>
                  <td className="border border-green-600 px-4 py-3">
                    Rs 200/day until due clearance if cheque is dishonored
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-600 px-4 py-3">
                    Quarterly Tuition/Transport Fee payment delay beyond 10th of
                    first month of quarter
                  </td>
                  <td className="border border-green-600 px-4 py-3">
                    Rs 25/day each until clearance
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-600 px-4 py-3">
                    Annual fee unpaid before 10th of first month of 4th quarter
                  </td>
                  <td className="border border-green-600 px-4 py-3">
                    Rs 100/day until clearance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-700">
            Kindly note: A fine of Rs 200 will be charged as bank processing
            fees for every bounced cheque.
          </p>
        </div>
        <div className="max-w-[80vw] py-20 mx-auto px-4 mt-10 text-[#111010] ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            FEES STRUCTURE FOR CLASS XI – XII
          </h2>
          <p className="text-center text-xl font-semibold mb-10 text-blue-900">
            SESSION 2025–2026
          </p>

          {streams.map((stream, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                {stream.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-green-700 text-left text-sm md:text-base">
                  <thead className="bg-green-100 text-green-800 font-semibold">
                    <tr>
                      <th className="border border-green-700 p-3">
                        Particulars
                      </th>
                      <th className="border border-green-700 p-3">
                        NTS Students
                      </th>
                      <th className="border border-green-700 p-3">Others</th>
                      <th className="border border-green-700 p-3">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stream.data.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="border border-green-700 p-3">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="mt-8 text-[#111] space-y-3 text-sm md:text-base">
            <h4 className="text-xl font-bold text-blue-900">NOTES:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>
                The existing deposit of the students of The Newtown School will
                be transferred to Class XI, if they rejoin.
              </li>
              <li>
                Transport Service is optional and the fee shall be payable as
                per the route. More details are available in the Admission Menu
                on the website.
              </li>
              <li>
                Cost of books, stationery, uniform, shoes and school bag is
                additional.
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default EligibilityCriteria;
