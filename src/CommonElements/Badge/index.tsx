import React from 'react';
import { Badge } from 'reactstrap';
import { BadgesProps } from '../../Types/CommonElement.type';

function Badges (props : BadgesProps) {
  const { children = '' } = props;
  return <Badge {...props}>{children}</Badge>;
};

export default Badges;
