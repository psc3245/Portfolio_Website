import styles from "../Style/Skills.module.css";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "Java", "Python", "SQL/MySQL", "C/C++", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: [".NET", "Spring Boot", "React.js", "Node.js", "Express"],
  },
  {
    title: "Tools",
    skills: ["CI/CD", "NuGet", "Docker", "Git/GitHub", "Visual Studio"],
  },
];

function Skills() {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>

      <p className={styles.subtitle}>
        A snapshot of the languages, frameworks, and tools I work with most.
      </p>

      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <div className={styles.box} key={category.title}>
            <h2>{category.title}</h2>

            <ul className={styles.pillList}>
              {category.skills.map((skill) => (
                <li className={styles.pill} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
