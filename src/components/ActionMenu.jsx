import { Box, useMantineColorScheme } from '@mantine/core';
import { IconHelpCircle, IconMoonStars, IconSun } from '@tabler/icons-react';
import IconButton from '../components/IconButton';
import classes from '../styles/actionMenu.module.scss';

export default function ActionMenu() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isLightTheme = colorScheme === 'light' || colorScheme === 'auto';

  return (
    <Box className={classes.actionMenu}>
      <IconButton
        icon={isLightTheme ? IconMoonStars : IconSun}
        onClick={() => toggleColorScheme()}
        label='Theme Switcher'
      />
      <IconButton icon={IconHelpCircle} label='Help Menu' />
    </Box>
  );
}
