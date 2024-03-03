import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: { control: "select" },
    handleClick: { action: "click on button" }, //by default if you have onClick event, you don't need to provide this setting,
    //otherwise you have to set it like this
  },
};

//option 1
export const Red = {
  args: {
    label: "press me",
    backgroundColor: "red",
    size: "sm",
  },
};

//option 2
export const Blue = ({ ...props }) => {
  return <Button {...props} />;
};

Blue.args = {
  label: "about me",
  backgroundColor: "blue",
  size: "lg",
  color: "white",
  borderRadius: 10,
};
