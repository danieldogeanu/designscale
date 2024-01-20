import { Box, useMantineColorScheme } from '@mantine/core';
import { IconEraser, IconHelpCircle, IconMoonStars, IconSun } from '@tabler/icons-react';
import { useDisclosure, useWindowEvent } from '@mantine/hooks';
import { umamiEventTypes, umamiTrack } from '../utils';
import useFilter from '../hooks/useFilter';
import IconButton from '../components/IconButton';
import HelpDrawer from './HelpDrawer';
import classes from '../styles/actionMenu.module.scss';

export default function ActionMenu() {
  const {dispatch} = useFilter();
  const [opened, {open, close}] = useDisclosure(false);
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const isLightTheme = colorScheme === 'light' || colorScheme === 'auto';

  useWindowEvent('keyup', (e) => {
    if (e.key === 't') {
      toggleColorScheme();
      umamiTrack(`${umamiEventTypes.key}: Theme Switcher`);
    }
    if (e.key === 'h') {
      opened ? close() : open();
      umamiTrack(`${umamiEventTypes.key}: Help Menu`);
    }
  });

  return (
    <>
      <Box className={classes.actionMenu}>
        <IconButton 
          icon={IconEraser}
          label='Reset Filter'
          onClick={() => dispatch({type: 'reset'})}
        />
        <IconButton
          icon={isLightTheme ? IconMoonStars : IconSun}
          onClick={() => toggleColorScheme()}
          label='Theme Switcher'
        />
        <IconButton icon={IconHelpCircle} label='Help Menu' onClick={open} />
      </Box>
      <HelpDrawer opened={opened} onClose={close} />
    </>
  );
}
