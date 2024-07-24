import { OrderedListProps } from "../../Types/CommonElement.type";


function OL(props: OrderedListProps) {
  const { children = "" } = props;
  return <ol {...props}>{children}</ol>;
};

export default OL;