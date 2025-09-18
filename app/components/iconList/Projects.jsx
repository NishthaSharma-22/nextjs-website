import AppIconWithWindow from "../AppIconWithWindow";
import projects from "@/app/data/projects";
import styles from "../../styles/Projects.module.css";
import { VscFileCode } from "react-icons/vsc";
import { FaGithub, FaLink } from "react-icons/fa6";

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
              <div className={styles.projName}>
                {project.name}
                <div className={styles.icons}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink size={20} />
                    </a>
                  )}
                </div>
              </div>

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
