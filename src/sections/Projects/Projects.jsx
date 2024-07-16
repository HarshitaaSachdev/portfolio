import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/HarshitaaSachdev/Multiplayer-tictactoe"
          h3="Multiplayer TicTacToe"
          p="Game"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/HarshitaaSachdev/tab-manager-chromeextension"
          h3="Tab Manager"
          p="Chrome Extension"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/HarshitaaSachdev/crypto-verse"
          h3="Crypto-verse"
          p="Cryptography website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/HarshitaaSachdev/Personal-Finance-Tracker"
          h3="SmartSpend"
          p="Finance Tracker"
        />
      </div>
    </section>
  );
}

export default Projects;
