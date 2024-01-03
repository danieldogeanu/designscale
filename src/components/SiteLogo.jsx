import { useMantineColorScheme } from '@mantine/core';
import ScaleLogo from '../assets/scale-logo.svg?react';
import ScaleLogoDark from '../assets/scale-logo-dark.svg?react';
import classes from '../styles/siteLogo.module.scss';

export default function SiteLogo() {
  const {colorScheme} = useMantineColorScheme();

  return (
    colorScheme === 'light' ?
      <ScaleLogo className={classes.siteLogo} /> :
      <ScaleLogoDark className={classes.siteLogo} />
  );
}
