import React from 'react';
import '../../css/introduction.css'
interface Props {
  visible: boolean;
  text: string;
}

export default function NotificationBox({visible,  text}: Props): React.ReactElement | null {

  if (!visible) {
    return null;
  }

  return <div className="notification">{text}</div>;
}