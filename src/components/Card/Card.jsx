import { useEffect, useRef, useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import classes from "./style.module.css";

export const Card = () => {
  const rangeRef = useRef();

  let minVal = 1;
  let maxVal = 100;
  let value = 10;
  const [val, setVal] = useState(10);

  const checkbox = [
    "Include uppercase letters",
    "Include lowercase letters",
    "Include Numbers",
    "Include Symbols"
  ];

  useEffect(() => {
    rangeRef.current.style.background = `linear-gradient(to right,#2a8b8a 0%, #2a8b8a ${
      ((value - minVal) / (maxVal - minVal)) * 100
    }%, #DEE2E6 ${
      ((value - minVal) / (maxVal - minVal)) * 100
    }%, #DEE2E6 100%)`;
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.card}>
        <h2 className={classes.mainHeading}> PS3&SVBIA</h2>
        <div>
          <p className={classes.characterText}>Character Length</p>
          <input
            ref={rangeRef}
            type="range"
            min={minVal}
            max={maxVal}
            value={val}
            className={classes.rangeInput}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            onInput={({ currentTarget }) => {
              const value = currentTarget.value;
              const min = currentTarget.min;
              const max = currentTarget.max;
              currentTarget.style.background = `linear-gradient(to right, #2a8b8a 0%, #2a8b8a ${
                ((value - min) / (max - min)) * 100
              }%, #DEE2E6 ${
                ((value - min) / (max - min)) * 100
              }%, #DEE2E6 100%)`;
            }}
          />
        </div>

        {checkbox.map((each, _idx) => {
          return <Checkbox key={_idx} title={each} />;
        })}

        <div className={classes.strength}>
          <p className={classes.strengthText}>Strength</p>
          <div className={classes.flex}></div>
          <div className={classes.status}>
            <p>Poor</p>
            <div className={classes.statusBar}>
              {[1, 2, 3].map((each, _idx) => {
                return <div key={_idx} className={classes.bar}></div>;
              })}
            </div>
          </div>
        </div>

        <button className={classes.generateBtn}>Generate</button>
      </div>
    </div>
  );
};
