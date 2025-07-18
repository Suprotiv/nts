"use client";

import Image from "next/image";
import CarouselSmall from "../components/CarouselSmall";
import { Collapse } from "@geist-ui/react";
import { useState } from "react";

// Level Coordinators
const levelCoordinators = [
  {
    url: "teachers/level-coordinators/Sarita-Singh.jpg",
    title: "Sarita Singh",
    description: "Level Coordinator",
  },
  {
    url: "teachers/level-coordinators/Sohini-Majumder.jpg",
    title: "Sohini Majumder",
    description: "Level Coordinator",
  },
  {
    url: "teachers/level-coordinators/Sonali-Khastagir.jpg",
    title: "Sonali Khastagir",
    description: "Level Coordinator",
  },
  {
    url: "teachers/level-coordinators/Sunayana-Dasgupta.jpg",
    title: "Sunayana Dasgupta",
    description: "Level Coordinator",
  },
  {
    url: "teachers/level-coordinators/Varsha-Choudhary.jpg",
    title: "Varsha Choudhary",
    description: "Level Coordinator",
  },
];

// Counsellors
const counsellors = [
  {
    url: "teachers/counsellors/Ria-Das.jpg",
    title: "Dr. Ria Das",
    description: "Senior School Counsellor",
  },
  {
    url: "teachers/counsellors/sajeela-khan.jpg",
    title: "Sajeela Khan",
    description: "Career Counsellor",
  },
  {
    url: "teachers/counsellors/uravi-agarwal.jpg",
    title: "Uravi Agarwal",
    description: "Primary School Counsellor",
  },
];

// English Department
const englishTeachers = [
  {
    url: "teachers/english/Aayesha-Haider.jpg",
    title: "Aayesha Haider",
    description: "HOD English",
  },
  {
    url: "teachers/english/Sonali-Chakraborty.jpg",
    title: "Sonali Chakraborty",
    description: "PGT English",
  },
  {
    url: "teachers/english/BHAWNA-AGARWAL.jpg",
    title: "Bhawna Agarwal",
    description: "TGT English",
  },
  {
    url: "teachers/english/Georgian-Cecilia-Thomas.jpg",
    title: "Georgiana Cecilia Thomas",
    description: "TGT English",
  },
  {
    url: "teachers/english/kadambari-singh.jpg",
    title: "Kadambari Singh",
    description: "PRT English",
  },
  {
    url: "teachers/english/Kalpana-Mishra.png",
    title: "Kalpana Mishra",
    description: "PRT English",
  },
  {
    url: "teachers/english/Kankatika-Dutta.jpg",
    title: "Kankatika Dutta",
    description: "TGT English",
  },
  {
    url: "teachers/english/Kojagori-Mitra-Dutta.jpg",
    title: "Kojagori Mitra Dutta",
    description: "TGT English",
  },
  {
    url: "teachers/english/nupur-mukherjee.jpg",
    title: "Nupur Mukherjee",
    description: "PRT English",
  },
  {
    url: "teachers/english/Prerona-Ghosh-Dastidar.jpg",
    title: "Prerona Ghosh Dastidar",
    description: "TGT English",
  },
  {
    url: "teachers/english/Puja-bhagat.jpg",
    title: "Puja Bhagat",
    description: "TGT English",
  },
  {
    url: "teachers/english/Rama-Chattaraj.jpg",
    title: "Rama Chattaraj",
    description: "TGT English",
  },
  {
    url: "teachers/english/Reshmi-Ali.jpg",
    title: "Reshmi Ali",
    description: "PRT English & SST",
  },
  {
    url: "teachers/english/Ritu-Mondal.jpg",
    title: "Ritu Mondal",
    description: "TGT English",
  },
  {
    url: "teachers/english/riya-dey.jpg",
    title: "Riya Dey",
    description: "PRT English",
  },
  {
    url: "teachers/english/Saswati-Banerjee.jpg",
    title: "Saswati Banerjee",
    description: "PRT English",
  },
  {
    url: "teachers/english/SAWLI-CHAKRABORTY.jpg",
    title: "Sawli Chakraborty",
    description: "PRT English",
  },
  {
    url: "teachers/english/Shreemoyee-Das.jpg",
    title: "Shreemoyee Das",
    description: "PRT English",
  },
];

// Bengali Department
const bengaliTeachers = [
  {
    url: "teachers/bengali/Avijit-Banerjee.jpg",
    title: "Avijit Banerjee",
    description: "HOD Bengali",
  },
  {
    url: "teachers/bengali/Piyali-Bhattacharya.jpg",
    title: "Piyali Bhattacharya",
    description: "TGT Bengali",
  },
  {
    url: "teachers/bengali/Puja-Guha.jpg",
    title: "Puja Guha",
    description: "TGT Bengali",
  },
  {
    url: "teachers/bengali/Sanchali-Dasgupta.jpg",
    title: "Sanchali Dasgupta",
    description: "TGT Bengali",
  },
  {
    url: "teachers/bengali/SARANYA-BISWAS.jpg",
    title: "Saranya Biswas",
    description: "PRT Bengali",
  },
];

// Foreign Languages
const foreignLanguageTeachers = [
  {
    url: "teachers/foreign-languages/Samira-Manna.jpg",
    title: "Samira Manna",
    description: "HOD French",
  },
  {
    url: "teachers/foreign-languages/Debanjana-Mondal.jpg",
    title: "Debanjana Mondal",
    description: "TGT German",
  },
  {
    url: "teachers/foreign-languages/Enakshi-Chatterjee.jpg",
    title: "Enakshi Chatterjee",
    description: "TGT French",
  },
  {
    url: "teachers/foreign-languages/joyita-singh.jpg",
    title: "Joyita Singh",
    description: "PRT French",
  },
  {
    url: "teachers/foreign-languages/Saantaanu-Dutta.jpg",
    title: "Saantaanu Dutta",
    description: "TGT German",
  },
  {
    url: "teachers/foreign-languages/Srijita-Dutta.jpg",
    title: "Srijita Dutta",
    description: "PRT French",
  },
  {
    url: "teachers/foreign-languages/Trisha-Das.jpg",
    title: "Trisha Das",
    description: "PRT German",
  },
];

// Biology Department
const biologyTeachers = [
  {
    url: "teachers/biology/Neha-Singh.jpg",
    title: "Neha Singh",
    description: "HOD Biology",
  },
  {
    url: "teachers/biology/Anshita-Shah.jpg",
    title: "Anshita Shah",
    description: "PRT Science",
  },
  {
    url: "teachers/biology/arpita-biswas.jpg",
    title: "Arpita Biswas",
    description: "PGT Botany",
  },
  {
    url: "teachers/biology/Gopa-Mukherjee.jpg",
    title: "Gopa Mukherjee",
    description: "TGT Biology",
  },
  {
    url: "teachers/biology/Meenakshi_Trivedi.jpg",
    title: "Meenakshi Trivedi",
    description: "TGT Science",
  },
  {
    url: "teachers/biology/Preeti-Haque.jpg",
    title: "Preeti Haque",
    description: "PRT Science",
  },
  {
    url: "teachers/biology/Sarita-Singh.jpg",
    title: "Sarita Singh",
    description: "PRT Science",
  },
  {
    url: "teachers/biology/sayan-tikadar.jpg",
    title: "Sayan Tikadar",
    description: "PGT Zoology",
  },
  {
    url: "teachers/biology/Sonadeepa-Basu.jpg",
    title: "Sonadeepa Basu",
    description: "PRT Science",
  },
  {
    url: "teachers/biology/Sujata-Dutta.jpg",
    title: "Sujata Dutta",
    description: "TGT Biology",
  },
];

// Chemistry Department
const chemistryTeachers = [
  {
    url: "teachers/chemistry/Subrata-Roy.jpg",
    title: "Subrata Roy",
    description: "HOD Chemistry",
  },
  {
    url: "teachers/chemistry/namera-shamim.jpg",
    title: "Namera Shamim",
    description: "TGT Chemistry",
  },
  {
    url: "teachers/chemistry/nilanjana-banerjee.jpg",
    title: "Nilanjana Banerjee",
    description: "TGT Chemistry",
  },
  {
    url: "teachers/chemistry/ujjal-roy.jpg",
    title: "Ujjal Roy",
    description: "TGT Chemistry",
  },
  {
    url: "teachers/chemistry/Vishakha-Sharma.jpg",
    title: "Vishakha Sharma",
    description: "PGT Chemistry",
  },
];

// Commerce Department
const commerceTeachers = [
  {
    url: "teachers/commerce/susmita-dey.jpg",
    title: "Susmita Dey",
    description: "HOD Commerce",
  },
  {
    url: "teachers/commerce/Amariyoti-Burman.jpg",
    title: "Amarjyoti Burman",
    description: "PGT Accountancy",
  },
  {
    url: "teachers/commerce/vanisha-panchanathan.jpg",
    title: "Vanisha Panchanathan",
    description: "PGT Accountancy",
  },
];

// EVS & Social Science
const evsSocialScienceTeachers = [
  {
    url: "teachers/evs-social-science/Priyanka-Roy-Biswas.jpg",
    title: "Priyanka Roy Biswas",
    description: "HOD History",
  },
  {
    url: "teachers/evs-social-science/anantaa-mukherjee.jpg",
    title: "Anantaa Mukherjee",
    description: "TGT History",
  },
  {
    url: "teachers/evs-social-science/Arpita-Chatterjee.jpg",
    title: "Arpita Chatterjee",
    description: "PRT Social Science",
  },
  {
    url: "teachers/evs-social-science/BAITANI-CHAKRABORTY.jpg",
    title: "Baitani Chakraborty",
    description: "TGT History",
  },
  {
    url: "teachers/evs-social-science/Basundhara-Gangopadhyay.jpg",
    title: "Basundhara Gangopadhyay",
    description: "TGT History",
  },
  {
    url: "teachers/evs-social-science/debasree-chakraborty-dutta.jpg",
    title: "Debasree Chakraborty Dutta",
    description: "TGT Geography",
  },
  {
    url: "teachers/evs-social-science/jenny-teresa-mezarello.jpg",
    title: "Jenny Teresa Mazarello",
    description: "TGT History",
  },
  {
    url: "teachers/evs-social-science/Mahasweta-Majumder-Biswas.jpg",
    title: "Mahasweta Majumder Biswas",
    description: "PRT Social Science",
  },
  {
    url: "teachers/evs-social-science/Moumita-Ghosh.jpg",
    title: "Moumita Ghosh",
    description: "TGT Geography",
  },
  {
    url: "teachers/evs-social-science/Moumita-Tewari-Singha.jpg",
    title: "Moumita Tewari Singha",
    description: "TGT Social Science",
  },
  {
    url: "teachers/evs-social-science/ria-banerjee.jpg",
    title: "Ria Banerjee",
    description: "PGT Geography",
  },
  {
    url: "teachers/evs-social-science/Sayanti-Chattopadhyay.png",
    title: "Sayanti Chattopadhyay",
    description: "PGT History",
  },
  {
    url: "teachers/evs-social-science/Sohini-Majumder.jpg",
    title: "Sohini Majumder",
    description: "TGT Social Science",
  },
  {
    url: "teachers/evs-social-science/Srabani-Sengupta.jpg",
    title: "Srabani Sengupta",
    description: "PGT Economics",
  },
  {
    url: "teachers/evs-social-science/Sreetama-Roy.jpg",
    title: "Sreetama Roy",
    description: "PRT Social Science",
  },
  {
    url: "teachers/evs-social-science/Vandana-Saith.jpg",
    title: "Vandana Saith",
    description: "PRT Social Science",
  },
];

// Computer Science & AI
const computerScienceTeachers = [
  {
    url: "teachers/computer-science/Indranath-Singha.jpg",
    title: "Indranath Singha",
    description: "HOD Computer Science",
  },
  {
    url: "teachers/computer-science/debnarayan-debnath.jpg",
    title: "Debnarayan Debnath",
    description: "TGT Computer Science",
  },
  {
    url: "teachers/computer-science/Esna-Nath.jpg",
    title: "Esna Nath",
    description: "TGT Computer Science",
  },
  {
    url: "teachers/computer-science/Kunal-Dasgupta.jpg",
    title: "Kunal Dasgupta",
    description: "TGT Computer Science",
  },
  {
    url: "teachers/computer-science/Payal-Bhattacharyya.jpg",
    title: "Payal Bhattacharyya",
    description: "PRT Computer Science",
  },
  {
    url: "teachers/computer-science/Rinki-Mishra.png",
    title: "Rinki Mishra",
    description: "PRT Computer Science",
  },
  {
    url: "teachers/computer-science/Sujata-Pattanayak.jpg",
    title: "Sujata Pattanayak",
    description: "PRT Computer Science",
  },
  {
    url: "teachers/computer-science/Tamal-Kanti-Ghosh.jpg",
    title: "Tamal Kanti Ghosh",
    description: "TGT Computer Science",
  },
];

// Class I
const classITeachers = [
  {
    url: "teachers/class-i/Ankana-Sarangi.jpg",
    title: "Ankana Sarangi",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Cecilia-Massey.jpg",
    title: "Cecilia Massey",
    description: "Class Lead",
  },
  {
    url: "teachers/class-i/Harsha-Malhotra.jpg",
    title: "Harsha Malhotra",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Prachi-Kothari.jpg",
    title: "Prachi Kothari",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Ritika-Nijhawan.jpg",
    title: "Ritika Nijhawan",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Rituparna-Mukherjee-Saha.jpg",
    title: "Rituparna Mukherjee",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Sanskriti-Chhajer.png",
    title: "Sanskriti Chhajer",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Shalini_Khandelwal.jpg",
    title: "Shalini Khandelwal",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Shalini-Dey.jpg",
    title: "Shalini Dey",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Soni-Prasad.jpg",
    title: "Soni Prasad",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Sreyashi-Mukherjee.png",
    title: "Sreyashi Mukherjee",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-i/Varsha-Bhagwan-Dansingani.jpg",
    title: "Varsha Dansingani",
    description: "Primary Teacher",
  },
];

// Class II
const classIITeachers = [
  {
    url: "teachers/class-ii/Anujaa-Saraf.jpg",
    title: "Anujaa Saraf",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Atiyaba-Ahmed.jpg",
    title: "Atiyaba Ahmed",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Ayesha-Hossain.jpg",
    title: "Ayesha Hossain",
    description: "Class Lead",
  },
  {
    url: "teachers/class-ii/Chandni-Rupani.jpg",
    title: "Chandni Rupani",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Darshana-Banerjee.jpg",
    title: "Darshana Banerjee",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Gunja-Sikder.png",
    title: "Gunja Sikder",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Jayshree-Sarkar-Dey.png",
    title: "Jayshree Sarkar Dey",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Priyanka-Naskar.jpg",
    title: "Priyanka Nasker",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Punam-Kharbanda.jpg",
    title: "Punam Kharbanda",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Ritu-Sharma.jpg",
    title: "Ritu Sharma",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Shobha-Khilani.jpg",
    title: "Shobha Khilani",
    description: "Primary Teacher",
  },
  {
    url: "teachers/class-ii/Varsha-Choudhary.jpg",
    title: "Varsha Choudhary",
    description: "Primary Teacher",
  },
];

// Add to Hindi & Sanskrit Department
const hindiSanskritTeachers = [
  {
    url: "teachers/hindi-sanskrit/Anima-Shaw.jpg",
    title: "Anima Shaw",
    description: "HOD Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Anjali-Mishra.jpg",
    title: "Anjali Mishra",
    description: "TGT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Anjani-Singh.jpg",
    title: "Anjani Singh",
    description: "TGT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Jyoti-Nahata.jpg",
    title: "Jyoti Nahata",
    description: "PRT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Kanya-Kumari-Saha.jpg",
    title: "Kanya Kumari Saha",
    description: "TGT Sanskrit",
  },
  {
    url: "teachers/hindi-sanskrit/Khushboo-Sharma.png",
    title: "Khushboo Sharma",
    description: "PRT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Madhu-Singh.png",
    title: "Madhu Singh",
    description: "TGT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Manoj-Kumar-Yadav.jpg",
    title: "Manoj Kumar Yadav",
    description: "TGT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Masoom-Mittal.jpg",
    title: "Masoom Mittal",
    description: "PRT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/ranjana-sharma.jpg",
    title: "Ranjana Sharma",
    description: "PRT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Rita-Pandey.jpg",
    title: "Rita Pandey",
    description: "TGT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Smita-Gupta.jpg",
    title: "Smita Gupta",
    description: "TGT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/soni-kapoor.jpg",
    title: "Soni Kapoor",
    description: "TGT Hindi",
  },
  {
    url: "teachers/hindi-sanskrit/Swapna-Singh.jpg",
    title: "Swapna Singh",
    description: "TGT Hindi",
  },
];

// Add to Lab Assistants
const labAssistants = [
  {
    url: "teachers/lab-assistants/Aditi-Mukherjee.jpg",
    title: "Aditi Mukherjee",
    description: "STEM Lab Assistant",
  },
  {
    url: "teachers/lab-assistants/Aniruddha-Koner.jpg",
    title: "Aniruddha Koner",
    description: "Laboratory Assistant - Chemistry",
  },
  {
    url: "teachers/lab-assistants/Raju-jana.jpg",
    title: "Raju Jana",
    description: "Laboratory Assistant - Physics",
  },
  {
    url: "teachers/lab-assistants/Runki-Ghosh.jpg",
    title: "Runki Ghosh",
    description: "STEM Lab Assistant",
  },
  {
    url: "teachers/lab-assistants/Shekhar-Kapoor.jpg",
    title: "Shekhar Kapoor",
    description: "STEM Lab Assistant",
  },
  {
    url: "teachers/lab-assistants/Sourav-Thakur.jpg",
    title: "Sourav Thakur",
    description: "Laboratory Assistant - Biology",
  },
  {
    url: "teachers/lab-assistants/Swaraj-Kumar-Paul.jpg",
    title: "Swaraj Kumar Paul",
    description: "Laboratory Assistant - Biology",
  },
];

// Add to Sports section
const sportsTeachers = [
  {
    url: "teachers/sports/Ransdale-Manuel.jpg",
    title: "Ransdale Manuel",
    description: "HOD Physical Education",
  },
  {
    url: "teachers/sports/Sankhadeep-Upadhyaya.jpg",
    title: "Sankhadeep Upadhyaya",
    description: "TGT Physical Education",
  },
  {
    url: "teachers/sports/Nirmal-Kaur.jpg",
    title: "Nirmal Kaur",
    description: "PRT Physical Education",
  },
  {
    url: "teachers/sports/Manidipa-Dey.jpg",
    title: "Manidipa Dey",
    description: "Badminton Coach",
  },
  {
    url: "teachers/sports/Manzil-Darnal.jpg",
    title: "Manzil Darnal",
    description: "Badminton Coach",
  },
  {
    url: "teachers/sports/diya-hazra.jpg",
    title: "Diya Hazra",
    description: "Basket Ball Coach",
  },
  {
    url: "teachers/sports/soumya-roy.jpg",
    title: "Soumya Roy",
    description: "Basket Ball Coach",
  },
  {
    url: "teachers/sports/Bijoy-Das.jpg",
    title: "Bijoy Das",
    description: "Football Coach",
  },
  {
    url: "teachers/sports/Surajit-Biswas.jpg",
    title: "Surajit Biswas",
    description: "Squash Coach",
  },
  {
    url: "teachers/sports/Chhoton-Debnath.jpg",
    title: "Chhoton Debnath",
    description: "Swimming Coach",
  },
  {
    url: "teachers/sports/Sananda-Adhikary-Hore.jpg",
    title: "Sananda Adhikary Hore",
    description: "Swimming Coach",
  },
  {
    url: "teachers/sports/Santosh-Kumar-Gupta.jpg",
    title: "Santosh Kumar Gupta",
    description: "Swimming Coach",
  },
  {
    url: "teachers/sports/Tanasi-Das-Dutta.jpg",
    title: "Tanasi Das Dutta",
    description: "Swimming Coach",
  },
  {
    url: "teachers/sports/madhuparna-chakraborty.jpg",
    title: "Madhuparna Chakraborty",
    description: "Table Tennis Coach",
  },
  {
    url: "teachers/sports/Sayan-Das.jpg",
    title: "Sayan Das",
    description: "Table Tennis Coach",
  },
  {
    url: "teachers/sports/ananta-kumar-mukherjee.jpg",
    title: "Ananta Kumar Mukherjee",
    description: "Volleyball Coach",
  },
];

// Add to Visual Arts section
const visualArtsTeachers = [
  {
    url: "teachers/visual-arts/Tuhin-Suvra-Pradhan.jpg",
    title: "Tuhin Suvra Pradhan",
    description: "HOD Art & Craft",
  },
  {
    url: "teachers/visual-arts/Jhuma-Kundu.jpg",
    title: "Jhuma Kundu",
    description: "TGT Art & Craft",
  },
  {
    url: "teachers/visual-arts/Pappu-Debnath.jpg",
    title: "Pappu Debnath",
    description: "PRT Art & Craft",
  },
  {
    url: "teachers/visual-arts/Sandip-Ghosh.jpg",
    title: "Sandip Ghosh",
    description: "TGT Art & Craft",
  },
  {
    url: "teachers/visual-arts/Subasish-Biswas.jpg",
    title: "Subasish Biswas",
    description: "TGT Art & Craft",
  },
  {
    url: "teachers/visual-arts/Suvonil-Saha.jpg",
    title: "Suvonil Saha",
    description: "TGT Art & Craft",
  },
];

// Add to UKG section
const ukgTeachers = [
  {
    url: "teachers/ukg/Areya-Bagaria.jpg",
    title: "Areya Bagaria",
    description: "Pre-Primary Teacher",
  },
  {
    url: "teachers/ukg/Noor-E-Darakhshan.png",
    title: "Noor E Darakhshan",
    description: "Pre-Primary Teacher",
  },
  {
    url: "teachers/ukg/Priya-Agarwala.png",
    title: "Priya Agarwala",
    description: "Pre-Primary Teacher",
  },
  {
    url: "teachers/ukg/Shilpi-Khattry.jpg",
    title: "Shilpi Khattry",
    description: "Class Lead",
  },
  {
    url: "teachers/ukg/Tanushree-Ghosh.jpg",
    title: "Tanushree Ghosh",
    description: "Pre-Primary Teacher",
  },
  {
    url: "teachers/ukg/Yashika-Digga.jpg",
    title: "Yashika Digga",
    description: "Pre-Primary Teacher",
  },
];
const nurses = [
  {
    url: "teachers/nurses/Amrita-Chatterjee.jpg",
    title: "Amrita Chatterjee",
    description: "School Nurse",
  },
  {
    url: "teachers/nurses/Esther-Chinneihat-Haokip.jpg",
    title: "Esther Chinneihat Haokip",
    description: "School Nurse",
  },
];

// Other Resource Persons
const resourcePersons = [
  {
    url: "teachers/resource-persons/Kousani-Ghosh.jpg",
    title: "Kousani Ghosh",
    description: "Pre-Primary Teacher",
  },
  {
    url: "teachers/resource-persons/Ruma-Agarwal.jpg",
    title: "Ruma Agarwal",
    description: "Pre-Primary Teacher",
  },
  // Add all other Resource Persons...
];

export default function TeamPage() {
  // State for main sections
  const [teachersOpen, setTeachersOpen] = useState(true);
  const [earlyYearsOpen, setEarlyYearsOpen] = useState(false);
  const [supportStaffOpen, setSupportStaffOpen] = useState(false);
  const [expandedBio, setExpandedBio] = useState({
    founder: false,
    principal: false,
  });

  // State for nested sections
  const [activeSubject, setActiveSubject] = useState(null);
  const [activeEarlyYear, setActiveEarlyYear] = useState(null);
  const [activeSupport, setActiveSupport] = useState(null);

  return (
    <div className="bg-white text-neutral-800">
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url("/NTS_Interiors_4.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">THE TEAM</h1>
          <p className="text-xl font-medium text-yellow-400">
            Learning from the best minds in education and industry
          </p>
        </div>
      </section>

      {/* Founder & Principal */}
      <section className="bg-[#031b3c] text-white">
        <div className="grid md:grid-cols-1 items-center">
          {/* Founder */}
          <div className="flex px-[10vw] py-30 flex-col md:flex-row items-center gap-10 bg-[#fefdf8]">
            <Image
              src="/sunil-agarwal.jpg"
              alt="Founder"
              width={300}
              height={300}
              className="rounded-lg object-cover w-full md:w-1/2"
            />
            <div>
              <h3 className="text-[#fbb414] text-xl font-bold">FOUNDER</h3>
              <h2 className="text-3xl font-bold text-[#111010] mb-3">
                Sunil Agarwal
              </h2>
              <p className="text-[#111010] text-lg mb-4">
                {expandedBio.founder ? (
                  <>
                    After having established his credentials during his 10 long
                    years of practice as a Chartered Accountant, Sunil Agarwal
                    brought Aakash Institute to West Bengal as a co-franchisee
                    in 2005. Under his visionary leadership, The Newtown School
                    was established with a mission to provide holistic education
                    that combines academic excellence with character
                    development. His innovative approach to education has
                    transformed the learning landscape in the region.
                  </>
                ) : (
                  "After having established his credentials during his 10 long years of practice as a Chartered Accountant, Sunil Agarwal brought Aakash Institute to West Bengal as a co-franchisee in 2005..."
                )}
              </p>
              <button
                onClick={() =>
                  setExpandedBio((prev) => ({
                    ...prev,
                    founder: !prev.founder,
                  }))
                }
                className="top-1 relative group mb-8 text-[#111010] py-2 px-4 border-none bg-transparent tracking-wide transition-all duration-500"
              >
                {expandedBio.founder ? "READ LESS" : "READ MORE"}
                <span className="absolute top-0 left-0 w-full md:w-5 h-0.5 bg-[#fbb414] transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute top-0 left-0 w-0.5 h-full md:h-5 bg-[#fbb414] transition-all duration-500 group-hover:h-full"></span>
                <span className="absolute bottom-0 right-0 w-full md:w-5 h-0.5 bg-[#fbb414] transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute bottom-0 right-0 w-0.5 h-full md:h-5 bg-[#fbb414] transition-all duration-500 group-hover:h-full"></span>
              </button>
            </div>
          </div>

          <div className="flex flex-col px-[10vw] py-30 md:flex-row items-center gap-10">
            <div>
              <h3 className="text-[#fbb414] text-xl font-bold">PRINCIPAL</h3>
              <h2 className="text-3xl font-bold mb-3">Satabdi Bhatacharjee</h2>
              <p className="text-white text-lg mb-4">
                {expandedBio.principal ? (
                  <>
                    At The Newtown School, our commitment to fostering an
                    environment where every student has the opportunity to excel
                    academically, socially, and emotionally is at the heart of
                    everything we do. As the Principal, I am deeply committed to
                    creating a positive, inclusive, and enriching learning
                    environment where every student is encouraged to reach their
                    full potential. We believe that excellence in education is
                    not just about high grades or test scores, but about
                    creating well-rounded individuals who are prepared for the
                    challenges of tomorrow. Excellence means fostering
                    curiosity, encouraging critical thinking, and instilling a
                    sense of responsibility and respect for one another.
                  </>
                ) : (
                  "At The Newtown School, our commitment to fostering an environment where every student has the opportunity to excel..."
                )}
              </p>
              <button
                onClick={() =>
                  setExpandedBio((prev) => ({
                    ...prev,
                    principal: !prev.principal,
                  }))
                }
                className="top-1 relative group mb-8 text-white py-2 px-4 border-none bg-transparent tracking-wide transition-all duration-500"
              >
                {expandedBio.principal ? "READ LESS" : "READ MORE"}
                <span className="absolute top-0 left-0 w-full md:w-5 h-0.5 bg-[#fbb414] transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute top-0 left-0 w-0.5 h-full md:h-5 bg-[#fbb414] transition-all duration-500 group-hover:h-full"></span>
                <span className="absolute bottom-0 right-0 w-full md:w-5 h-0.5 bg-[#fbb414] transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute bottom-0 right-0 w-0.5 h-full md:h-5 bg-[#fbb414] transition-all duration-500 group-hover:h-full"></span>
              </button>
            </div>
            <Image
              src="/Nts-Principal.jpg"
              alt="Principal"
              width={300}
              height={300}
              className="rounded-lg object-cover w-full md:w-1/2"
            />
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-[#fefdf8] py-16">
        <div className="w-[80vw] mx-auto">
          <h1 className="font-bold text-4xl text-[#fbb414] mb-8">
            Our Faculty
          </h1>

          <div className="space-y-4">
            {/* Level Coordinators */}
            <Collapse title="Level Coordinators">
              <CarouselSmall
                cards={levelCoordinators}
                text_color="text-[#111010]"
              />
            </Collapse>

            {/* Counsellors */}
            <Collapse title="Counsellors">
              <CarouselSmall cards={counsellors} text_color="text-[#111010]" />
            </Collapse>

            {/* Main Teachers Dropdown */}
            <Collapse
              title="Teachers"
              expanded={teachersOpen}
              onChange={setTeachersOpen}
            >
              <div className="space-y-4 pl-4">
                {/* English Department */}
                <Collapse
                  title="English Department"
                  expanded={activeSubject === "english"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "english" : null)
                  }
                >
                  <CarouselSmall
                    cards={englishTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Bengali Department */}
                <Collapse
                  title="Bengali"
                  expanded={activeSubject === "bengali"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "bengali" : null)
                  }
                >
                  <CarouselSmall
                    cards={bengaliTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Foreign Languages */}
                <Collapse
                  title="Foreign Languages"
                  expanded={activeSubject === "foreign"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "foreign" : null)
                  }
                >
                  <CarouselSmall
                    cards={foreignLanguageTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Biology Department */}
                <Collapse
                  title="Biology"
                  expanded={activeSubject === "biology"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "biology" : null)
                  }
                >
                  <CarouselSmall
                    cards={biologyTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Chemistry Department */}
                <Collapse
                  title="Chemistry"
                  expanded={activeSubject === "chemistry"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "chemistry" : null)
                  }
                >
                  <CarouselSmall
                    cards={chemistryTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Commerce Department */}
                <Collapse
                  title="Commerce"
                  expanded={activeSubject === "commerce"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "commerce" : null)
                  }
                >
                  <CarouselSmall
                    cards={commerceTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* EVS & Social Science */}
                <Collapse
                  title="EVS & Social Science"
                  expanded={activeSubject === "evs"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "evs" : null)
                  }
                >
                  <CarouselSmall
                    cards={evsSocialScienceTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Computer Science & AI */}
                <Collapse
                  title="Computer Science & AI"
                  expanded={activeSubject === "cs"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "cs" : null)
                  }
                >
                  <CarouselSmall
                    cards={computerScienceTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Hindi & Sanskrit */}
                <Collapse
                  title="Hindi & Sanskrit"
                  expanded={activeSubject === "hindi"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "hindi" : null)
                  }
                >
                  <CarouselSmall
                    cards={hindiSanskritTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Visual Arts */}
                <Collapse
                  title="Visual Arts"
                  expanded={activeSubject === "arts"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "arts" : null)
                  }
                >
                  <CarouselSmall
                    cards={visualArtsTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Sports */}
                <Collapse
                  title="Sports"
                  expanded={activeSubject === "sports"}
                  onChange={(expanded) =>
                    setActiveSubject(expanded ? "sports" : null)
                  }
                >
                  <CarouselSmall
                    cards={sportsTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>
                <Collapse
                  title="UKG"
                  expanded={activeEarlyYear === "ukg"}
                  onChange={(expanded) =>
                    setActiveEarlyYear(expanded ? "ukg" : null)
                  }
                >
                  <CarouselSmall
                    cards={ukgTeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Class I */}
                <Collapse
                  title="Class I"
                  expanded={activeEarlyYear === "class1"}
                  onChange={(expanded) =>
                    setActiveEarlyYear(expanded ? "class1" : null)
                  }
                >
                  <CarouselSmall
                    cards={classITeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Class II */}
                <Collapse
                  title="Class II"
                  expanded={activeEarlyYear === "class2"}
                  onChange={(expanded) =>
                    setActiveEarlyYear(expanded ? "class2" : null)
                  }
                >
                  <CarouselSmall
                    cards={classIITeachers}
                    text_color="text-[#111010]"
                  />
                </Collapse>
              </div>
            </Collapse>

            {/* Early Years Section */}

            {/* Support Staff */}
            <Collapse
              title="Support Staff"
              expanded={supportStaffOpen}
              onChange={setSupportStaffOpen}
            >
              <div className="space-y-4 pl-4">
                {/* Lab Assistants */}
                <Collapse
                  title="Lab Assistants"
                  expanded={activeSupport === "lab"}
                  onChange={(expanded) =>
                    setActiveSupport(expanded ? "lab" : null)
                  }
                >
                  <CarouselSmall
                    cards={labAssistants}
                    text_color="text-[#111010]"
                  />
                </Collapse>

                {/* Nurses */}
                <Collapse
                  title="Nurses"
                  expanded={activeSupport === "nurses"}
                  onChange={(expanded) =>
                    setActiveSupport(expanded ? "nurses" : null)
                  }
                >
                  <CarouselSmall cards={nurses} text_color="text-[#111010]" />
                </Collapse>

                {/* Other Resource Persons */}
                <Collapse
                  title="Other Resource Persons"
                  expanded={activeSupport === "resources"}
                  onChange={(expanded) =>
                    setActiveSupport(expanded ? "resources" : null)
                  }
                >
                  <CarouselSmall
                    cards={resourcePersons}
                    text_color="text-[#111010]"
                  />
                </Collapse>
              </div>
            </Collapse>
          </div>
        </div>
      </section>
    </div>
  );
}
