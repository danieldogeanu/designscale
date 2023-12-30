import { IconHelpCircle, IconMoonStars } from '@tabler/icons-react';
import IconButton from '../components/IconButton';
import ScaleLogo from '../assets/scale-logo.svg?react';
import classes from '../styles/header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <ScaleLogo className={classes.logo} />
      </div>
      <div className={classes.center}>
        Center
      </div>
      <div className={classes.right}>
        <IconButton icon={IconMoonStars} label='Theme Switcher' />
        <IconButton icon={IconHelpCircle} label='Help Menu' />
      </div>
    </header>
  );
}
