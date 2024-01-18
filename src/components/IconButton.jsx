import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { umamiTrack } from '../utils';

/**
 * @param {{icon: JSX.Element, label: string}} props The element props.
 */
export default function IconButton({icon, label, onClick, ...otherProps}) {
  const {colorScheme} = useMantineColorScheme();
  const TablerIcon = icon;

  return (
    <ActionIcon
      variant='outline'
      color='gray'
      size={42}
      radius='md'
      aria-label={label}
      title={label}
      onClick={(e) => {
        onClick(e);
        umamiTrack(`Button: ${label}`);
      }}
      style={(theme) => ({
        border: `calc(0.0625rem * 1) solid ${
          colorScheme === 'light' ? theme.colors.gray[4] : theme.colors.gray[7]
        }`
      })}
      {...otherProps}>
      <TablerIcon style={{width: '60%', height: '60%'}} stroke={1.5} />
    </ActionIcon>
  );
}
