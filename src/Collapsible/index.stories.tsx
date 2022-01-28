import { default as CollapsibleComponent } from ".";

import LoremIpsum from "../test/LoremIpsum";

export default {
  title: "Collapsible/Integration",
  component: CollapsibleComponent,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Integration = () => (
  <CollapsibleComponent title="A collapsible box">
    <LoremIpsum />
  </CollapsibleComponent>
);
