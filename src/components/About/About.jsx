import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a passionate and dedicated software engineer with a strong
                interest in full-stack development and DevOps. I enjoy creating
                efficient, scalable, and user-friendly applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have hands-on experience working with modern web technologies
                such as <strong>React.js</strong>, <strong>Node.js</strong>,
                <strong>Express.js</strong>, and <strong>MongoDB</strong>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/code.png")} alt="version tool" />
            <div className={styles.aboutItemText}>
              <h3>Version Control Tools</h3>
              <p>
                I'm also well-versed in version control tools like{" "}
                <strong>GitHub</strong> and cloud platforms such as{" "}
                <strong>AWS</strong>.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
