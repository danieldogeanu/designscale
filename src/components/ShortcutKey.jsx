import { Kbd, rem } from "@mantine/core";

export default function ShortcutKey({children, style, ...otherProps}) {
  return (<Kbd style={{
    minWidth: rem(28),
    borderBottomWidth: 'calc(.0625rem*var(--mantine-scale))',
    ...style,
  }} {...otherProps}>{children}</Kbd>);
}
