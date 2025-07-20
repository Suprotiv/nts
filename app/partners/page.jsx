import React from "react";
import {
  faLaptopCode, // For Websites & Web Apps
  faMobileAlt, // For Mobile Applications
  faCogs, // For Custom Software
  faServer, // For DevOps Consulting
  faBullhorn, // For Digital Marketing
  faSearch, // For SEO
} from "@fortawesome/free-solid-svg-icons";
import Service from "../components/Service";

const Servicepage = () => {
  const services = [
    {
      title: "Futurite",
      description:
        "To take the essence of hands on learning a step further and to engage children into learning and discovery, a 3-D Printing Lab has been set up with the state of the art Ultimaker Pro machine being installed in it, for students of classes III-VIII. The students have two dedicated periods over a week to know and experience the excitement of 3-D Printing.Futurite has provided with an age appropriate curriculum along with the resource persons for the Lab.",
      icon: faLaptopCode,
      backgroundImage: "/partners/futurite.jpg",
      orientation: "left", // Image on the left
    },
    {
      title: "Apple",
      description:
        "With the objective of making learning fun and innovative, and to build a strong technology driven generation, we have set up two i-Pad labs, with 42 i-Pads in each for the children of classes LKG-II. The teachers trained on the Ipads plan, create and deliver lessons on the i-Pads which are projected over the Smart Board for children to understand and comprehend better.",
      icon: faMobileAlt,
      backgroundImage: "/partners/apple-logo.jpg",
      orientation: "right", // Image on the right
    },
    {
      title: "School Cinema",
      description:
        "School Cinema is an innovative concept developed by EduMedia and adopted by The Newtown School. Developed through research and taught using short films, thought-provoking workbooks and activities, this learning module for children, teachers and parents, helps them understand and reaffirm values, attitudes, morals and essential life lessons or life skills. The School Cinema Programme enhances learning in a mode that is enjoyable, memorable and educative. The key message in every film is reinforced by age appropriate activities that are designed with the objective to help children use their senses, build healthy relationships and express themselves in a secure space. This is another tool to help in the development of their multiple intelligence capabilities.",
      icon: faCogs,
      backgroundImage: "/partners/schoolCinema_200.jpg",
      orientation: "left",
    },
    {
      title: "Vedic Maths India",
      description:
        "The Maths Club is being run by the Vedic Maths Forum India in order to make Maths fun, interesting and engaging for the students at The Newtown School. Students not only become effortless and quick in their calculations but also develop a solid foundation in Mathematics. Students learn Vedic Maths skills along with solving the Rubik’s cube, Celebrating National Maths Days or a Pi day or simply watching Maths oriented movies and prepare for competitive examinations like Maths Olympiads etc.",
      icon: faServer,
      backgroundImage: "/partners/VedicMathsindialogo.jpg",
      orientation: "right",
    },
    {
      title: "Future Fit Gymnastics",
      description:
        "Future Fit Gymnastics is India’s largest privately owned Gymnastics Coaching Academy for children. Gymnastics – “mother of all sports” is the best way to put children on path to lifelong fitness. Hence, partnering with The New Town School, Future Fit’s qualified and safety-certified team ensures that children are learning in a fun and safe environment, challenging both their mind and their physical fitness.",
      icon: faBullhorn,
      backgroundImage: "/partners/fit-future-gymnastics.jpg",
      orientation: "left",
    },
    {
      title: "Energywin Technologies",
      description:
        "Our unique RFID based smart attendance system for students tracking, bus tracking and automated attendance monitoring for the students has been provided by this Bangalore based company.",
      icon: faSearch,
      backgroundImage: "/partners/energywin.jpg",
      orientation: "right",
    },
  ];

  return (
    <>
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url("/NTS_Interiors_2.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">PARTNERS</h1>
          <p className="text-xl font-medium text-red-400">
            Learning from the best minds in education and industry
          </p>
        </div>
      </section>
      <div className="text-white py-12 w-full bg-[#F0F0F0]">
        {/* Service List with Alternating Layout */}
        <div className="flex flex-col animate-fadeIn">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              backgroundImage={service.backgroundImage}
              orientation={service.orientation}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Servicepage;
