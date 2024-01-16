import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const Red = {
  args: {
    label: "press me",
    backgroundColor: "red",
  },
};

export const Blue = () => {
  return <Button label="blue" backgroundColor="blue" />;
};
