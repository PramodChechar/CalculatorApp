import "./ButtonsContainer.css";

function ButtonsContainer({ onButtonClick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    ,
    "0",
    ".",
  ];

  return (
    <div className="buttonsContainer">
      {buttonNames.map((buttonName) => (
        <button className="buttons" onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}
export default ButtonsContainer;
