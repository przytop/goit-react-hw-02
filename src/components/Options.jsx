import PropTypes from "prop-types";
import css from "./Options.module.css";

export default function Options({ total, onUpdate }) {
  return (
    <div className={css.options}>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {total > 0 && <button onClick={() => onUpdate("reset")}>Reset</button>}
    </div>
  );
}

Options.propTypes = {
  total: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
