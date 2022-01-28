import CollapsibleView, { CollapsibleViewProps } from "./CollapsibleView";
import { ComponentStory } from "@storybook/react";
import LoremIpsum from "../test/LoremIpsum";

export default {
  title: "Collapsible/View Component",
  component: CollapsibleView,
};

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
