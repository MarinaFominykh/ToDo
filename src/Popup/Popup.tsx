import { FC, ReactNode } from 'react';
import './Popup.scss';

interface PopupProps {
  isOpen: boolean;
  children: ReactNode;
}

const Popup: FC<PopupProps> = ({ isOpen, children }) => {
  return (
    <aside className={`popup ${isOpen && 'popup_opened'}`}>
      {children}
    </aside>
  );
};

export default Popup;
