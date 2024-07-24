import { Button } from "reactstrap";
import { BtnProps } from "../../Types/CommonElement.type";

function Btn(props: BtnProps) {
  return <Button {...props}>{props.children}</Button>;
};

export default Btn;