import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: "Stack",
  argTypes: {
    direction: { control: "select", options: ["row", "column"] },
    //right now it only provide textarea. by default it's checkbox, it worked on the button component, but not for this one
    numberOfChildren: { type: "number", defaultValue: 4 }, //the defaultValue doesn't look like it's working
  },
};
// eslint-disable-next-line react/prop-types
export const Playground = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n, i) => {
      return (
        <div
          key={i}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {n + 1}
        </div>
      );
    })}
  </Stack>
);

Playground.args = {
  spacing: 2,
  wrap: false,
  direction: "row",
  numberOfChildren: 10,
};
