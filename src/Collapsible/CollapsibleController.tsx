import { useCallback, useState } from "react";

export interface RenderProps {
  isExpanded: boolean;
  toggle: () => void;
}

export interface CollapsibleControllerProps {
  render: (props: RenderProps) => JSX.Element;
}

const CollapsibleController = ({
  render,
}: CollapsibleControllerProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = useCallback(
    () => setIsExpanded((current) => !current),
    [setIsExpanded]
  );
  return render({ isExpanded, toggle });
};

export default CollapsibleController;
