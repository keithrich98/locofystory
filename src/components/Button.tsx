import { FunctionComponent } from "react";
import styles from "./Button.module.css";

const Button: FunctionComponent = () => {
  return (
    <div className={styles.button}>
      <div className={styles.frameParent}>
        <div className={styles.buttonParent}>
          <div className={styles.button1}>
            <div className={styles.cancel}>Cancel</div>
          </div>
          <div className={styles.fillHsl27625922StrokContainer}>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>Fill:</b>
              <span className={styles.hsl27625922}> hsl(276,25%,92.2%)</span>
            </p>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>Stroke/Outline</b>
              <span className={styles.hsl27625922}>
                {" "}
                hsl(273.5,23.3%,28.6%)
              </span>
            </p>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>{`Text: `}</b>
              <span className={styles.fill}>{`Plus Jakarta Sans `}</span>
              <span className={styles.hsl27625922}>hsl(273.5,23.3%,28.6%)</span>
            </p>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button2}>
            <div className={styles.cancel}>Continue</div>
          </div>
          <div className={styles.fillHsl270132475TexContainer}>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>Fill:</b>
              <span className={styles.hsl}> hsl(</span>
              <span>270,13.2%,47.5%</span>
              <span className={styles.hsl}>)</span>
            </p>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>{`Text: `}</b>
              <span className={styles.fill}>Plus Jakarta Sans</span>
              <b className={styles.fill}>{` `}</b>
              <span>hsl(270,13.2%,47.5%)</span>
            </p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button3}>
            <div className={styles.cancel}>Continue</div>
          </div>
          <div className={styles.fillHsl305450248TexContainer}>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>Fill:</b>
              <span className={styles.hsl27625922}> hsl(305.4,50.2%,48%)</span>
            </p>
            <p className={styles.fillHsl27625922}>
              <b>{`Text: Plus Jakarta Sans `}</b>
              <span className={styles.hsl}>hsl(0,0%,100%))</span>
            </p>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.button4}>
            <div className={styles.cancel}>Cancel</div>
          </div>
          <div className={styles.fillHsl27625922StrokContainer}>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>Fill</b>
              <span className={styles.hsl27625922}> hsl(0,0%,100%)</span>
            </p>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>Stroke/Outline</b>
              <span className={styles.hsl27625922}>
                {" "}
                hsl(273.5,23.3%,28.6%)
              </span>
            </p>
            <p className={styles.fillHsl27625922}>
              <b className={styles.fill}>{`Text: `}</b>
              <span className={styles.fill}>Plus Jakarta Sans</span>
              <b className={styles.fill}>{` `}</b>
              <span className={styles.hsl27625922}>hsl(273.5,23.3%,28.6%)</span>
            </p>
          </div>
        </div>
        <img className={styles.groupChild} alt="" src="/group-11.svg" />
      </div>
      <b className={styles.stateDefault}>State Default</b>
      <b className={styles.stateHover}>State Hover</b>
      <b className={styles.defaultButton}>Default Button</b>
      <b className={styles.secondaryButton}>Secondary Button</b>
    </div>
  );
};

export default Button;
