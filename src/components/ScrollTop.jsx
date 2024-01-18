import { Affix, Transition, useMantineColorScheme } from '@mantine/core';
import { useWindowScroll, useMediaQuery, useWindowEvent } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { umamiEventTypes, umamiTrack } from '../utils';
import IconButton from './IconButton';

export default function ScrollTop() {
  const {colorScheme} = useMantineColorScheme();
  const [scroll, scrollTo] = useWindowScroll();
  const matchesMediaQuery = useMediaQuery(`(min-width: 480px)`);
  const buttonMargin = matchesMediaQuery ? 40 : 28;
  const buttonSize = matchesMediaQuery ? 42 : 48;

  useWindowEvent('keyup', (e) => {
    if (e.key === 'u') {
      scrollTo({y: 0});
      umamiTrack(`${umamiEventTypes.key}: Scroll to Top`);
    }
  });

  return (
    <Affix position={{bottom: buttonMargin, right: buttonMargin}}>
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <IconButton 
            icon={IconArrowUp} 
            label='Scroll to Top' 
            onClick={() => scrollTo({y: 0})}
            size={buttonSize}
            style={(theme) => ({
              backgroundColor: colorScheme === 'light' ? theme.white : theme.colors.gray[9],
              border: `calc(0.0625rem * 1) solid ${
                colorScheme === 'light' ? theme.colors.gray[4] : theme.colors.gray[7]
              }`,
              boxShadow: theme.shadows.sm,
              ...transitionStyles,
            })} 
          />
        )}
      </Transition>
    </Affix>
  );
}
