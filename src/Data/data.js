import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

// Certificates
import RDMBS_Spoken_Tutorial from "../images/Certificates/RDMBS_Spoken_Tutorial.jpg";
import SQL_HarckerRank from "../images/Certificates/SQL_HarckerRank.png";
import Database_Design from "../images/Certificates/Database_Design.jpg";
import SQL_SERVER_FOR_DBA from "../images/Certificates/SQL_SERVER_FOR_DBA.jpg";
import Foundation_Data_Analytics from "../images/Certificates/Foundation_Data_Analytics.jpg";
import MySQlL_Indexing_For_performance from "../images/Certificates/MySQlL_Indexing_For_performance.jpg";
import Designing_and_Implementing_SQL_Server_Database_Indexes from "../images/Certificates/Designing_and_Implementing_SQL_Server_Database_Indexes.jpg";
import Designing_and_Implementing_SQL_Server_Tables_and_Views from "../images/Certificates/Designing_and_Implementing_SQL_Server_Tables_and_Views.jpg";
import Programming_SQL_Server_Database_Stored_Procedures from "../images/Certificates/Programming_SQL_Server_Database_Stored_Procedures.jpg";
import Ask_Questions_to_Make_Data_Driven_Decisions from "../images/Certificates/Ask Questions to Make Data-Driven Decisions.jpg";
// Projects
import Personal_Portfolio from "../images/Projects/Personal Portfolio.png";
import Personal_Portfolio_2 from "../images/Projects/Personal Portfolio HTML CSS & JavaScript.png";
import DatAlgo from "../images/Projects/DatAlgo.png";
import Google_Search_Clone from "../images/Projects/Google Search Clone.png";
import IIoT_Labz_Nagpur from "../images/Projects/IIoT Labz Nagpur.png";
import The_Wall_Street_Journal from "../images/Projects/The Wall Street Journal.png";
import HIXAA from "../images/Projects/HIXAA.png";

// -------------------
export const info = [
  {
    name: "Name",
    text: "Surendra Jangid",
  },
  {
    name: "Date of birth",
    text: "December 15, 1999",
  },
  {
    name: "Address",
    text: "Nagpur, Maharashtra, India",
  },
  {
    name: "Zip code",
    text: "440024",
  },
  {
    name: "Email",
    text: "surendraj454@gmail.com",
  },
  {
    name: "Phone",
    text: "+91-7447365644",
  },
];

export const education = [
  {
    year: "2018-2022",
    degree: "B.E Computer Science Engineering",
    college:
      "S. B. Jain Institute Of Technology. Management & Research, Nagpur",
  },
  {
    year: "2016-2018",
    degree: "HSC (Science)",
    college: "ST Paul Jr College Hudkeshwar, Nagpur",
  },
  {
    year: "2016-2018",
    degree: "SSC",
    college: "Central Provincial School, Nagpur",
  },
];

export const experience = [
  {
    duration: "Mar 2022 - May 2022",
    organization: "Mindtree Ltd",
    rolw: "Software Developement Intern",
  },
  {
    duration: "Sep 2020 - Dec 2020",
    organization: "IIoT Labz",
    rolw: "Web Developement Intern",
  },
  {
    duration: "Jul 2020 - Sep 2020",
    organization: "Savitar Incorporation",
    rolw: "Web Developement Intern",
  },
];
export const skills = [
  {
    skill: "HTML",
    progress: "80%",
  },
  {
    skill: "CSS",
    progress: "80%",
  },
  {
    skill: "Bootstrap",
    progress: "80%",
  },
  {
    skill: "JavaScript",
    progress: "60%",
  },
  {
    skill: "React.js",
    progress: "50%",
  },
  {
    skill: "C / C++",
    progress: "70%",
  },
  {
    skill: "Wordpress",
    progress: "70%",
  },
  {
    skill: "Git",
    progress: "60%",
  },
  {
    skill: "GitHub",
    progress: "60%",
  },
  {
    skill: "SQL",
    progress: "70%",
  },
  {
    skill: "MySQL",
    progress: "70%",
  },
  {
    skill: "Self-directed Learning",
    progress: "70%",
  },
  {
    skill: "Leadership",
    progress: "70%",
  },
  {
    skill: "Microsoft Visual Studio Code",
    progress: "80%",
  },
];

export const socialInfo = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/cse-surendra-jangid/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/surendrajngp",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/isurendra_jangid",
  },
];

export const certificates = [
  {
    id: 1,
    src: RDMBS_Spoken_Tutorial,
    alt: "Spoken tutorial RDBMS Certificate",
  },
  {
    id: 2,
    src: SQL_HarckerRank,
  },
  {
    id: 3,
    src: Database_Design,
    alt: "Database Design",
  },
  {
    id: 4,
    src: SQL_SERVER_FOR_DBA,
    alt: "SQl Server For Database Administrators",
  },
  {
    id: 5,
    src: Foundation_Data_Analytics,
    alt: " ",
  },
  {
    id: 6,
    src: Ask_Questions_to_Make_Data_Driven_Decisions,
    alt: "Ask Questions to Make Data-Driven Decisions ",
  },
  {
    id: 7,
    src: MySQlL_Indexing_For_performance,
    alt: "MySql Indexing For Performance",
  },
  {
    id: 8,
    src: Designing_and_Implementing_SQL_Server_Database_Indexes,
    alt: "Designing and Implementing SQL Server Database Indexes",
  },
  {
    id: 9,
    src: Designing_and_Implementing_SQL_Server_Tables_and_Views,
    alt: "Designing and Implementing SQL Server Tables and Views",
  },
  {
    id: 10,
    src: Programming_SQL_Server_Database_Stored_Procedures,
    alt: "Programming SQL Server Database Stored Procedures",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "React",
    src: Personal_Portfolio,
  },
  {
    id: 2,
    title: "DatAlgo",
    category: "React",
    src: DatAlgo,
  },
  {
    id: 3,
    title: "IIoTLabz.com",
    category: "WordPress",
    src: IIoT_Labz_Nagpur,
  },
  {
    id: 4,
    title: "Google Search Clone",
    category: "React",
    src: Google_Search_Clone,
  },
  {
    id: 5,
    title: "Personal Portfolio HTML CSS & JavaScript",
    category: "Static",
    src: Personal_Portfolio_2,
  },
  {
    id: 6,
    title: "The Wall Street Journal Clone",
    category: "React",
    src: The_Wall_Street_Journal,
  },
  {
    id: 7,
    title: "HIXAA Automation and IoT",
    category: "WordPress",
    src: HIXAA,
  },
];
