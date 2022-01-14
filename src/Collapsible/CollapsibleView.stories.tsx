import CollapsibleView, { CollapsibleViewProps } from "./CollapsibleView";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Collapsible View",
  component: CollapsibleView,
};

const LoremIpsum = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

const Template: ComponentStory<typeof CollapsibleView> = (
  args: CollapsibleViewProps
) => <CollapsibleView {...args} />;

const staticArgs = {
  title: "A collapsible box",
  children: <LoremIpsum />,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  ...staticArgs,
  isExpanded: false,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...staticArgs,
  isExpanded: true,
};
