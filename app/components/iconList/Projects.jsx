import AppIconWithWindow from "../AppIconWithWindow";
import projects from "@/app/data/projects";
import styles from "../../styles/Projects.module.css";
import { VscFileCode } from "react-icons/vsc";

export default function Project() {
  return (
    <AppIconWithWindow
      iconSrc={<VscFileCode size={64} color="#e5e7e8ff" />}
      label="Projects"
      windowTitle="Projects"
      windowContent={
        <div className={styles.projsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img
                src={project.icon}
                alt={project.name}
                className={styles.projIcon}
              />
              <a href={project.url} className={styles.link}>
                <h3>{project.name}</h3>
              </a>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags?.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}
