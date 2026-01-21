import "./Button.css";

export const CreateButton = ({ text, type, onClick }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};
