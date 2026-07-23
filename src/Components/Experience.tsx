import styles from "../Style/Experience.module.css";

const experiences = [
  {
    role: "IT Application Development Intern",
    organization: "Magnetar Capital LLC · Evanston, IL",
    start_date: "May 2025",
    end_date: "Aug 2025",
    bullets: [
      "Developed and deployed a NuGet library with over 260 installs across various repositories.",
      "Developed and maintained internal reporting tools in C#, including enhancements to MIR, a proprietary back-office application using the .NET framework.",
      "Diagnosed and resolved a production-critical bug impacting live financial reporting, restoring full functionality within thirty minutes.",
      "Collaborated with IT colleagues to troubleshoot and optimize performance in production systems, improving startup times by up to 25%.",
    ],
    technologies: ["C#", ".NET", "NuGet"],
  },
  {
    role: "LAS IT Student Systems Specialist",
    organization: "Iowa State University Math Department · Ames, IA",
    start_date: "Nov 2023",
    end_date: "May 2026",
    bullets: [
      "Provided Tier-1/Tier-2 technical support to faculty, staff, and students, resolving hardware, software, and network issues with over a 90% satisfaction rate.",
      "Managed equipment rentals and tracked inventory to ensure availability and accountability.",
      "Utilized ServiceNow to log, prioritize, and track support tickets through resolution.",
    ],
    technologies: ["ServiceNow"],
  },
];

function Experience() {
  return (
    <div className={styles.container}>
      <h1>Experience</h1>

      <p className={styles.subtitle}>
        A timeline of roles and projects that have shaped how I build
        software.
      </p>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div className={styles.entry} key={`${exp.role}-${index}`}>
            <div className={styles.entryHeader}>
              <div className={styles.roleGroup}>
                <h2 className={styles.role}>{exp.role}</h2>
                <p className={styles.org}>{exp.organization}</p>
              </div>

              <span className={styles.dates}>
                {exp.start_date} – {exp.end_date}
              </span>
            </div>

            <ul className={styles.bullets}>
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            <ul className={styles.techList}>
              {exp.technologies.map((tech) => (
                <li className={styles.techTag} key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
