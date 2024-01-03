import { ActionIcon, useMantineColorScheme } from '@mantine/core';

/**
 * @param {{icon: JSX.Element, label: string}} props The element props.
 */
export default function IconButton({icon, label, onClick}) {
  const {colorScheme} = useMantineColorScheme();
  const TablerIcon = icon;

  return (
    <ActionIcon
      variant='outline'
      color='gray'
      size='lg'
      radius='md'
      aria-label={label}
      title={label}
      onClick={onClick}
      style={(theme) => ({
        border: `calc(0.0625rem * 1) solid ${
          colorScheme === 'light' ? theme.colors.gray[4] : theme.colors.gray[7]
        }`
      })}>
      <TablerIcon style={{width: '70%', height: '70%'}} stroke={1.5} />
    </ActionIcon>
  );
}
