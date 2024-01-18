import { Box, useMantineColorScheme } from '@mantine/core';
import { IconHelpCircle, IconMoonStars, IconSun } from '@tabler/icons-react';
import { useDisclosure, useWindowEvent } from '@mantine/hooks';
import { umamiTrack } from '../utils';
import IconButton from '../components/IconButton';
import HelpDrawer from './HelpDrawer';
import classes from '../styles/actionMenu.module.scss';

export default function ActionMenu() {
  const [opened, {open, close}] = useDisclosure(false);
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const isLightTheme = colorScheme === 'light' || colorScheme === 'auto';

  useWindowEvent('keyup', (e) => {
    if (e.key === 't') {
      toggleColorScheme();
      umamiTrack('Key Event: Theme Switcher');
    }
    if (e.key === 'h') {
      opened ? close() : open();
      umamiTrack('Key Event: Help Menu');
    }
  });

  return (
    <>
      <Box className={classes.actionMenu}>
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
