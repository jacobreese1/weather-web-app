import styles from "./RadioButton.module.css";

const RadioButton = (props) => {
  return (
    <div className="RadioButton">
      <input
        id={props.id}
        onChange={props.changed}
        value={props.value}
        type="radio"
        // checked={props.isSelected}
        name={props.name}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButton;
