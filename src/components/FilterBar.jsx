import { useRef, useState } from "react";
import { NumberInput, Select, Box, Group, rem } from "@mantine/core";
import { useWindowEvent } from "@mantine/hooks";
import { IconX } from '@tabler/icons-react';
import { umamiEventTypes, umamiTrack } from "../utils.js";
import useFilter from "../hooks/useFilter.js";
import IconButton from "./IconButton.jsx";
import ShortcutKey from "./ShortcutKey.jsx";
import classes from '../styles/filterBar.module.scss';

export default function FilterBar() {
  const searchRef = useRef();
  const {state, dispatch} = useFilter();  
  const [filterValue, setFilterValue] = useState('');
  const scaleNumbers = [2, 4, 8, 10];
  const scaleValues = scaleNumbers.map((number) => ({
    value: number.toString(), label: `${number}pt Scale`,
  }));

  const SlashKeyShortcut = <ShortcutKey
    style={{marginRight: rem(14)}}
    title='Press slash key to focus.'
  >/</ShortcutKey>;
  const EscKeyShortcut = <ShortcutKey
    title='Press ESC key to clear input.'
  >ESC</ShortcutKey>;
  const ClearButton = <Group wrap='nowrap' gap={4} 
    style={{marginRight: rem(48)}}>
    {EscKeyShortcut}
    <IconButton 
      style={{border: 'transparent'}} 
      icon={IconX} label='Clear Input' size='lg'
      onClick={(e) => {
        setFilterValue('');
        dispatch({type: 'filter', value: ''});
        e.currentTarget.blur();
      }}
    />
  </Group>;

  // Add keypress event listener to focus search input.
  useWindowEvent('keypress', (e) => {
    if (e.key === '/' || e.key === 's') {
      e.preventDefault();
      searchRef.current.focus();
      umamiTrack(`${umamiEventTypes.key}: Focus Search Number`, {pressed: e.key});
    }
  });

  return (
    <Box className={classes.filterBar}>
      <NumberInput
        className={classes.search}
        placeholder='Search Number'
        data-umami-event={`${umamiEventTypes.filter}: Search Number`}
        title='Search for a number to check if it matches the scale.'
        size='md'
        radius='md'
        value={filterValue}
        ref={searchRef}
        onChange={(value) => {
          setFilterValue(value);
          dispatch({type: 'filter', value});
        }}
        onKeyUp={(e) => {
          if (e.key === 'Escape') {
            setFilterValue('');
            dispatch({type: 'filter', value: ''});
            e.currentTarget.blur();
            umamiTrack(`${umamiEventTypes.key}: Blur Search Number`, {pressed: e.key});
          }
        }}
        rightSection={filterValue !== '' ? ClearButton : SlashKeyShortcut}
        hideControls
      />
      <Select
        className={classes.selector}
        data-umami-event={`${umamiEventTypes.filter}: Scale Selector`}
        title='Change the scale at which numbers are generated.'
        size='md'
        radius='md'
        data={scaleValues}
        defaultValue={scaleValues[1].value.toString()}
        onChange={(value) => dispatch({type: 'scale', value})}
        withCheckIcon={false}
        allowDeselect={false}
      />
      <NumberInput
        className={classes.size}
        data-umami-event={`${umamiEventTypes.filter}: Numbers Amount`}
        title='Change the amount of numbers from which to generate the scale.'
        size='md'
        radius='md'
        defaultValue={state.size}
        min={0}
        max={1000000}
        onChange={(value) => dispatch({type: 'size', value})}
      />
    </Box>
  );
}
