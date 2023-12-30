import { NumberInput, Select, Box } from "@mantine/core";
import classes from '../styles/filterBar.module.scss';

export default function FilterBar() {
  return (
    <Box className={classes.filterBar}>
      <NumberInput
        className={classes.search}
        size='md'
        radius='md'
        placeholder='Search Number'
        hideControls
      />
      <Select
        className={classes.selector}
        size='md'
        radius='md'
        data={['2pt Scale', '4pt Scale', '8pt Scale', '10pt Scale']}
        defaultValue='4pt Scale'
        withCheckIcon={false}
        allowDeselect={false}
      />
      <NumberInput
        className={classes.size}
        size='md'
        radius='md'
        defaultValue={10000}
        min={0}
        max={1000000}
      />
    </Box>
  );
}
