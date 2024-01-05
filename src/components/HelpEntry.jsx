import { Group, Text, rem } from "@mantine/core";
import ShortcutKey from "./ShortcutKey";

export default function HelpEntry({shortcut, description}) {
  return (
    <Group gap={12} wrap='nowrap' align='flex-start' justify='flex-start'>
      <Text>
        <ShortcutKey title='Keyboard Shortcut' style={{
          display: 'inline-block',
          textAlign: 'right',
          padding: `${rem(6)} ${rem(12)}`,
          minWidth: rem(50),
        }}>{shortcut}</ShortcutKey> 
      </Text>
      <Text>&ndash;</Text>
      <Text>{description}</Text>
    </Group>
  );
}
