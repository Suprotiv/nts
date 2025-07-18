"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  "Pre-Primary",
  "Primary",
  "Middle",
  "Senior",
  "Senior Secondary",
];

const curriculumData = {
  "Pre-Primary": {
    overview: `estled in greenery and equipped with an excellent play area, this section is planned as a home away from home for younger children.Here, in an environment conducive to the development of their creativity, they blossom into individuals.
    Budding minds are enthused through a combination of formal and informal learning, indoor and outdoor activities such as singing and recitation, reading and writing, games and physical education.They have easy access to the Junior Resource Centre containing the latest selection of children’s books to satisfy their curiosity and to build upon their vocabulary.`,
    methodology: `The environment has been created to enable the little ones to discover the world around them, to explore their surroundings and, in the process, gradually unfurl their minds. Various avenues for mental,physical and emotional development are available to them in their playground in the form of swings, see-saws, puzzles, block games and an audio-visual facility where they can watch educational films.`,
    evaluation: `Students are not tested formally but their progress is measured gradually through small fun-filled activities over a three term system.`,
    subjects: [],
    activities: [],
  },
  Primary: {
    overview: `The Primary School consists of Classes I to V. Besides possessing an exclusive Computer Laboratory and Resource Centre, the Junior School also has classrooms individually equipped for art, dance and music. Educational tours and pleasure trips are organised to nurture values and life skills and to develop the personality of the child.`,
    methodology: `At one of the most impressionable stages in their lives, the Juniors are encouraged to seek knowledge through exploration and discovery.The activity rooms and the playgrounds provide adequate avenues for them to engage in a wide range of activities to learn,engage and develop mentally.`,
    evaluation: `While Classes I and II continue to be assessed informally through year-long assessment modules spaced out across three terms,Classes III to V have formal assessment schemes over a three term system.`,
    subjects: [
      "Languages",
      "Science",
      "Mathematics",
      "Social Studies",
      "Computer Science",
    ],
    activities: [
      "Art and Craft",
      "Dance",
      "Music",
      "Yoga",
      "Gymnastics",
      "Sculpture",
      "Swimming",
      "Robotics",
      "3D Printing",
      "iPad Lab",
      "iTheatre",
      "P.E",
    ],
  },
  Middle: {
    overview: `Teachers employ audio-visual aids to turn the delivery process into an interactive session. Subjects are subdivided further, leading to increased complexity and hence the need for creative methods to drive the concept home. As per the norms of CBSE, the School follows a two-term assessment format and aims at improving the child’s performance at every step by identifying his/her learning difficulties right from the beginning.`,
    methodology: `Teachers employ audio-visual aids to turn delivery interactive...`,
    evaluation: `Evaluation is based on a two-term format as per the present CBSE norms.`,
    subjects: [
      "Languages",
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Computer Science",
      "History",
      "Civics",
      "Geography",
    ],
    activities: [
      "Art and Craft",
      "Dance",
      "Music",
      "Yoga",
      "Robotics",
      "3D Printing",
      "P.E",
    ],
  },
  Senior: {
    overview: `While the curriculum is CBSE-aligned, more emphasis is laid on...`,
    methodology: `While the curriculum has been designed as per the CBSE guidelines, more emphasis is laid on the teaching/learning process through continuous assessments, doubt solving, practice and mock tests and science and math practical classes; with experienced and specialised faculty members guiding the students towards academic excellence.
    Students are encouraged to participate in various science and technology fairs and competitions to help them achieve conceptual confidence in all subjects, thus gradually paving the way for the Class X board examinations.`,
    evaluation: `Two-term format evaluation per CBSE guidelines.`,
    subjects: [
      "Languages",
      "Math",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
      "Civics",
      "Economics",
      "IT",
    ],
    activities: ["Art and Craft", "Dance", "Music", "Sculpture", "Yoga", "P.E"],
  },
  "Senior Secondary": {
    overview: `CBSE curriculum aligned with prep for Boards + competitive exams...`,
    methodology: `While the curriculum has been planned as per the CBSE guidelines, emphasis is laid on preparing students both for the CBSE Board Exams and for the greater challenges on the various competitive platforms. The School had regular Career Guidance and Counselling workshops and career fairs with sessions by representatives from internationally acclaimed universities, both in India and abroad, which prepare the students to take up the right opportunities for their future, in alignment with their interests and skill sets.`,
    evaluation: `Two-term format evaluation as per CBSE norms.`,
    streams: {
      Science: {
        A: [
          "English Core",
          "Physics",
          "Chemistry",
          "Mathematics",
          "Biology / Computer Science / Physical Education / Commercial Art",
        ],
        B: [
          "English Core",
          "Physics",
          "Chemistry",
          "Biology",
          "Psychology / Physical Education / Commercial Art",
        ],
      },
      Commerce: {
        C: [
          "English Core",
          "Accountancy",
          "Business Studies",
          "Economics",
          "Applied Mathematics / Entrepreneurship / Physical Education / Commercial Art",
        ],
      },
      Humanities: {
        D: [
          "English Core",
          "History",
          "Political Science",
          "Sociology",
          "Psychology / Physical Education / Commercial Art",
        ],
        E: [
          "English Core",
          "Geography",
          "Psychology",
          "Political Science",
          "Sociology / Physical Education / Commercial Art",
        ],
      },
    },
    activities: ["Sports", "Dance", "Music", "Work Experience"],
  },
};

export default function CurriculumPage() {
  const [active, setActive] = useState("Pre-Primary");

  return (
    <div className="bg-[#fefdf8] pb-20">
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url("/NTS_Interiors_2.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">CURRICULUM</h1>
          <p className="text-xl font-medium text-blue-400">
            Learning from the best minds in education and industry
          </p>
        </div>
      </section>

      <div className="px-6 py-12 max-w-[80vw] mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActive(section)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                active === section
                  ? "bg-[#051c39] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <Section title="Overview" content={curriculumData[active].overview} />
          <Section
            title="Teaching Methodology"
            content={curriculumData[active].methodology}
          />
          <Section
            title="Evaluation"
            content={curriculumData[active].evaluation}
          />

          {curriculumData[active].subjects?.length > 0 && (
            <ListSection
              title="Subjects"
              items={curriculumData[active].subjects}
            />
          )}

          {curriculumData[active].activities?.length > 0 && (
            <ListSection
              title="Co-Curricular Activities"
              items={curriculumData[active].activities}
            />
          )}

          {active === "Senior Secondary" && (
            <div className="space-y-10">
              <h3 className="text-xl font-semibold text-[#111010]">
                Streams & Subject Combinations
              </h3>

              {Object.entries(curriculumData[active].streams).map(
                ([streamName, groups]) => (
                  <div key={streamName}>
                    <h4 className="font-bold text-lg mt-4 mb-2 text-[#111010]">
                      {streamName} Stream
                    </h4>
                    <table className="w-full border border-green-600 text-sm md:text-base text-left">
                      <thead className="bg-green-100 text-green-800 font-semibold">
                        <tr>
                          <th className="border border-green-600 p-3">
                            Subject
                          </th>
                          {Object.keys(groups).map((group) => (
                            <th
                              key={group}
                              className="border border-green-600 p-3 font-bold"
                            >
                              Group {group}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({
                          length: Math.max(
                            ...Object.values(groups).map((g) => g.length)
                          ),
                        }).map((_, rowIndex) => (
                          <tr key={rowIndex}>
                            <td className="border text-blue-900 border-green-600 p-3">
                              {groups[Object.keys(groups)[0]][rowIndex] || ""}
                            </td>
                            {Object.keys(groups).map((group) => (
                              <td
                                key={group}
                                className="border text-blue-900 border-green-600 p-3"
                              >
                                {groups[group][rowIndex] || ""}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

const Section = ({ title, content }) => (
  <div className="">
    <h2 className="text-2xl font-semibold mb-2 text-[#111010]">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

const ListSection = ({ title, items }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-2 text-[#111010]">{title}</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 list-disc list-inside">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);
