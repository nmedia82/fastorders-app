import { Media } from "reactstrap";
import { ImageProps } from "../../Types/CommonElement.type";

function Image(props: ImageProps) {
  return (
    <Media {...props} />
  )
};

export default Image;