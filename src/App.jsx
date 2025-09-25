import React from 'react';
import './App.css';
import profilePic from '/profile.jpg';

// --- Reusable Sub-Component for Job History ---
const JobEntry = ({ job }) => (
  <div className="experience-entry">
    <p className="dates">{job.dates}</p>
    <div className="details">
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
      <ul>
        {job.responsibilities.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

// --- Modular Section Components ---

const Sidebar = ({ name, contact, skills }) => (
  <aside className="sidebar">
    <div className="sidebar-content">
      <img src={profilePic} alt="Profile" className="profile-image" />
      <h1 className="name">{name}</h1>
      <section className="contact-info">
        <h2 className="sidebar-title">Contact</h2>
        <div className="contact-item">
          <h3>Address</h3>
          <p>{contact.address}</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>{contact.phone}</p>
        </div>
        <div className="contact-item">
          <h3>E-mail</h3>
          <p>{contact.email}</p>
        </div>
      </section>
      <section className="skills-info">
        <h2 className="sidebar-title">Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  </aside>
);

const Summary = ({ text }) => (
  <section className="summary-section">
    <p>{text}</p>
  </section>
);

const Education = ({ educationList }) => (
  <section className="main-section">
    <h2 className="main-title">Education</h2>
    {educationList.map((edu, index) => (
      <div className="education-entry" key={index}>
        <p className="dates">{edu.dates}</p>
        <div className="details">
          <h3>{edu.degree}</h3>
          { }
          <p className="university">{edu.university}</p>
        </div>
      </div>
    ))}
  </section>
);

const Experience = ({ jobs }) => (
  <section className="main-section">
    <h2 className="main-title">Experience / Projects</h2>
    {jobs.map((job, index) => (
      <JobEntry key={index} job={job} />
    ))}
  </section>
);


// --- Main App Component ---

function App() {
  const resumeData = {
    name: "Rancis Santos",
    contact: {
      address: "Santa Ana, Pampanga",
      phone: "+639193230083",
      email: "santosrancis04@gmail.com",
    },
    skills: [
      "Knowledge of Java, Python, and C++ and object-oriented principles.",
      "Familiar with front-end technologies including HTML, CSS, and JavaScript.",
      "Familiar with collaborative development using Git and GitHub.",
      "Strong analytical and critical-thinking skills.",
      "Proven team player with experience in collaborative projects.",
      "Adaptable and eager to embrace new technologies.",
    ],
    summary: "Aspiring IT professional with a solid foundation in programming and web development. Eager to contribute technical skills and a strong work ethic to a dynamic team. Committed to continuous learning and growth in the ever-evolving field of technology.",
    education: [
      {
        dates: "2023 - \nCurrent",
        degree: "Bachelor of Science in Information Technology",
        university: "University Of The Assumption - City of San Fernando, Pampanga",
      },
      {
        dates: "2021 - 2023",
        degree: "Senior High School: Academic Track - Accountancy, Business and Management (ABM)",
        university: "University Of The Assumption - City of San Fernando, Pampanga",
      },
    ],
    experience: [
      {
        dates: "2025",
        title: "UA Nursing Student Council Website",
        company: "Integrative Programming and Technologies 1",
        responsibilities: [
          "Developed a responsive website for the UA Nursing Student Council using HTML, CSS, and JavaScript.",
          "Implemented user authentication and registration features.",
          "Collaborated with team members to ensure timely project completion.",
        ],
      },
      {
        dates: "2024",
        title: " Hospital Patient Management System",
        company: "Fundamentals of Database Systems",
        responsibilities: [
          "Leader of a team that designed and implemented a patient management system using SQL and database design principles.",
          "Created database schemas, tables, and queries to manage patient records efficiently.",
          "Ensured data integrity and security through proper database management practices.",
        ],
      },
      {
        dates: "2023",
        title: "Length Conversion",
        company: "Programming 1",
        responsibilities: [
          "Project Manager",
          "Reviewed the integrated project and documentation",
          "Ensured the project met all requirements and standards",
        ],
      },
    ],
  };

  return (
    <div className="resume-wrapper">
      <Sidebar
        name={resumeData.name}
        contact={resumeData.contact}
        skills={resumeData.skills}
      />
      <main className="main-content">
        <Summary text={resumeData.summary} />
        <Education educationList={resumeData.education} />
        <Experience jobs={resumeData.experience} />
      </main>
    </div>
  );
}

export default App;