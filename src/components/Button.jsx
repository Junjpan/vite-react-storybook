import PropTypes from "prop-types";

function Button({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
  color = "black",
  borderRadius = 10,
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    color,
    borderRadius: `${borderRadius}px`,
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "white"]),
  borderRadius: PropTypes.number,
};

//the propType here provide the information to storybookk

export default Button;
