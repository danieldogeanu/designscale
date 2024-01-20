import { Drawer, Stack, rem, useMantineColorScheme } from "@mantine/core";
import HelpEntry from "./HelpEntry";

export default function HelpDrawer(props) {
  const {colorScheme} = useMantineColorScheme();

  return (
    <Drawer title='Keyboard Shortcuts'
      position='right' size={580} 
      overlayProps={{backgroundOpacity: 0.6, blur: 4}}
      styles={{
        title: {
          fontWeight: '600',
          fontSize: rem(18),
        },
        content: {
          padding: rem(24),
        },
      }} {...props}>
      <Stack gap='lg' style={(theme) => ({
        marginTop: rem(12), paddingTop: rem(32),
        borderTop: `1px solid ${colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.gray[8]}`,
      })}>
        <HelpEntry shortcut='/' description='Focuses search input from main window.' />
        <HelpEntry shortcut='S' description='Focuses search input from main window.' />
        <HelpEntry shortcut='ESC' description='Clears search input and removes focus.' />
        <HelpEntry shortcut='T' description='Toggles the theme from light to dark mode.' />
        <HelpEntry shortcut='U' description='Scrolls back to the top of the page.' />
        <HelpEntry shortcut='R' description='Resets all filter values to default ones.' />
        <HelpEntry shortcut='H' description='Opens and closes the Keyboards Shortcuts help menu.' />
        <HelpEntry shortcut='ESC' description='Also closes the Keyboards Shortcuts help menu.' />
      </Stack>
    </Drawer>
  );
}
