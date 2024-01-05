import { Affix, Transition } from '@mantine/core';
import { useWindowScroll, useMediaQuery } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import IconButton from './IconButton';

export default function ScrollTop() {
  const [scroll, scrollTo] = useWindowScroll();
  const matchesMediaQuery = useMediaQuery(`(min-width: 480px)`);
  const buttonMargin = matchesMediaQuery ? 40 : 28;
  const buttonSize = matchesMediaQuery ? 40 : 48;

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
              backgroundColor: theme.white,
              boxShadow: theme.shadows.sm,
              ...transitionStyles,
            })} 
          />
        )}
      </Transition>
    </Affix>
  );
}
