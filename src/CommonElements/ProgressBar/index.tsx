import { Progress } from 'reactstrap';
import { ProgressBarProps } from '../../Types/CommonElement.type';

function ProgressBar (props: ProgressBarProps) {
  return <Progress {...props}>{props.children}</Progress>;
};

export default ProgressBar;
