import styles from "../Style/Welcome.module.css";
import flick from "../Assets/IMG_2321.jpg";
import csharp from "../Assets/CodingLanguages/csharp-devicon.svg";
import java from "../Assets/CodingLanguages/java-devicon.svg";
import python from "../Assets/CodingLanguages/python-devicon.svg";
import javascript from "../Assets/CodingLanguages/javascript-devicon.svg";
import cplusplus from "../Assets/CodingLanguages/cplusplus-devicon.svg";
import mysql from "../Assets/CodingLanguages/mysql-devicon.svg";
import dotnet from "../Assets/CodingLanguages/dotnet-devicon.svg";
import spring from "../Assets/CodingLanguages/spring-devicon.svg";
import react from "../Assets/CodingLanguages/react-devicon.svg";
import nodejs from "../Assets/CodingLanguages/nodejs-devicon.svg";
import git from "../Assets/CodingLanguages/git-devicon.svg";
import docker from "../Assets/CodingLanguages/docker-devicon.svg";

const techStack = [
  { name: "C#", icon: csharp },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "C++", icon: cplusplus },
  { name: "MySQL", icon: mysql },
  { name: ".NET", icon: dotnet },
  { name: "Spring", icon: spring },
  { name: "React", icon: react },
  { name: "Node.js", icon: nodejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

function Welcome() {

    return (
      <div className={styles.outerContainer}>
        <div className={styles.bioContainer}>
          <div className={styles.imgContainer}>
            <img src={flick} alt="Peter Collins" />
          </div>
          <div className={styles.textContainer}>
            <h1>Peter Collins</h1>
            <p className={styles.role}>Software Engineer</p>
            <span className={styles.statusPill}>
              <span className={styles.statusDot} />
              Open to full-time opportunities
            </span>
            <p>
              I'm a Computer Science student at Iowa State University,
              graduating May 2026 with a minor in Cybersecurity. Most
              recently, I interned on the IT Application Development team at
              Magnetar Capital, where I shipped a NuGet library used across
              260+ internal repositories and worked on the firm's .NET
              back-office reporting tools. Outside of coursework, I build
              full-stack projects for fun, from an AI-assisted stock market
              simulator to a habit-tracking app, usually reaching for C#,
              Python, or the JavaScript ecosystem. I'm drawn to backend
              engineering, distributed systems, and applied AI, and I like
              software that stays reliable under real-world load.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.grid}>
            <div className={styles.box}>
              <h2>Education</h2>

              <p>
                <strong>Iowa State University</strong>
              </p>

              <p>B.S. Computer Science</p>

              <p>Cybersecurity Minor</p>
            </div>

            <div className={styles.box}>
              <h2>Interests</h2>

              <ul>
                <li>Backend Engineering</li>
                <li>Distributed Systems</li>
                <li>Cloud Infrastructure</li>
                <li>Artificial Intelligence</li>
                <li>Cybersecurity</li>
              </ul>
            </div>

            <div className={styles.box}>
              <h2>What I Build</h2>

              <ul>
                <li>REST APIs</li>
                <li>AI Applications</li>
                <li>Automation Tools</li>
                <li>Full-Stack Web Apps</li>
                <li>Data-Driven Software</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.toolsContainer}>
          <div className={styles.labelContainer}>
            <h1>The Tools of The Trade</h1>
          </div>
          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <div className={styles.techCard} key={tech.name}>
                <div className={styles.techIcon}>
                  <img src={tech.icon} alt={tech.name} />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Welcome;