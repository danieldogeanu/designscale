import { Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import IconButton from './IconButton';

export default function ScrollTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{bottom: 40, right: 40}}>
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <IconButton 
            icon={IconArrowUp} 
            label='Scroll to Top' 
            style={transitionStyles} 
            onClick={() => scrollTo({y: 0})}
            size={40}
          />
        )}
      </Transition>
    </Affix>
  );
}
