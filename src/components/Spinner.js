import "./Spinner.scss";

function Spinner({ classname, inlineStyle }) {
  return (
    <div className={`spinner ${classname}`} style={inlineStyle}>
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
}

export default Spinner;
