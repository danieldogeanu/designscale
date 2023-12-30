import { useMantineColorScheme } from '@mantine/core';
import { IconHelpCircle, IconMoonStars, IconSun } from '@tabler/icons-react';
import IconButton from '../components/IconButton';
import ScaleLogo from '../assets/scale-logo.svg?react';
import classes from '../styles/header.module.scss';

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isLightTheme = colorScheme === 'light' || colorScheme === 'auto';

  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <ScaleLogo className={classes.logo} />
      </div>
      <div className={classes.center}>
        Center
      </div>
      <div className={classes.right}>
        <IconButton
          icon={isLightTheme ? IconMoonStars : IconSun}
          onClick={() => toggleColorScheme()}
          label='Theme Switcher'
        />
        <IconButton icon={IconHelpCircle} label='Help Menu' />
      </div>
    </header>
  );
}
