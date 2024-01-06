import { ActionIcon, Anchor, useMantineTheme } from '@mantine/core';

/**
 * @param {{icon: JSX.Element, label: string, href: string}} props The element props.
 */
export default function SocialIcon({icon, label, href, ...otherProps}) {
  const theme = useMantineTheme();
  const TablerIcon = icon;

  return (
    <Anchor href={href} target='_blank'>
      <ActionIcon
        variant='subtle'
        color={theme.colors.gray[6]}
        size={42}
        radius='md'
        aria-label={label}
        title={label}
        {...otherProps}>
        <TablerIcon style={{width: '60%', height: '60%'}} stroke={1.5} />
      </ActionIcon>
    </Anchor>
  );
}
