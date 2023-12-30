import { ActionIcon } from '@mantine/core';

/**
 * @param {{icon: JSX.Element, label: string}} props The element props.
 */
export default function IconButton({icon, label}) {
  const TablerIcon = icon;
  return (
    <ActionIcon
      variant='outline'
      color='gray'
      size='lg'
      radius='md'
      aria-label={label}
      title={label}>
      <TablerIcon style={{width: '70%', height: '70%'}} stroke={1.5} />
    </ActionIcon>
  );
}
