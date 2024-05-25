import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonName) => {
   
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonName;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayVal={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
