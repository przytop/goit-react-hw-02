import PropTypes from "prop-types";

export default function Feedback({ value, total }) {
  const positivePercentage =
    total > 0 ? Math.round(((value.good + value.neutral) / total) * 100) : 0;

  return (
    <div>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

Feedback.propTypes = {
  value: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};
