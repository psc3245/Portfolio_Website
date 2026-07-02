import styles from "../Style/Welcome.module.css";
import flick from "../Assets/IMG_2321.jpg";
import csharp from "../Assets/CodingLanguages/Csharp_Logo.png";
import java from "../Assets/CodingLanguages/java.png";
import python from "../Assets/CodingLanguages/Python-logo.png";
import react from "../Assets/CodingLanguages/react.svg";


function Welcome() {

    return (
      <div className={styles.outerContainer}>
        <div className={styles.bioContainer}>
          <div className={styles.imgContainer}>
            <img src={flick} alt="me asf" />
          </div>
          <div className={styles.textContainer}>
            <h1>Peter Collins</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              interdum sapien libero, vitae molestie risus semper ut. Quisque
              dui massa, tincidunt et euismod in, ornare id odio. Mauris
              molestie id libero sed ultrices. Aenean posuere enim sed orci
              ultrices, eget efficitur ligula dapibus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Etiam ac leo facilisis, interdum orci eu, consequat tortor.
              Suspendisse porta leo justo, pulvinar mattis quam laoreet in.
              Suspendisse semper vehicula vehicula.
            </p>
          </div>
        </div>
        <div className={styles.toolsContainer}>
          <div className={styles.labelContainer}>
            <h1>The Tools of The Trade</h1>
          </div>
          <div className={styles.orbsContainer}>
            <div className={styles.orb}>
              <img src={csharp} alt="C#" />
            </div>

            <div className={styles.orb}>
              <img src={java} alt="Java" />
            </div>

            <div className={styles.orb}>
              <img src={python} alt="Python" />
            </div>

            <div className={styles.orb}>
              <img src={react} alt="React" />
            </div>

            <div className={styles.orb}>
              <img src={csharp} alt="C#" />
            </div>

            <div className={styles.orb}>
              <img src={java} alt="Java" />
            </div>

            <div className={styles.orb}>
              <img src={python} alt="Python" />
            </div>

            <div className={styles.orb}>
              <img src={react} alt="React" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Welcome;