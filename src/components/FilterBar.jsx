import { useRef, useState } from "react";
import { NumberInput, Select, Box } from "@mantine/core";
import { useWindowEvent } from "@mantine/hooks";
import { IconX } from '@tabler/icons-react';
import useFilter from "../hooks/useFilter.js";
import IconButton from "./IconButton.jsx";
import classes from '../styles/filterBar.module.scss';

export default function FilterBar() {
  const searchRef = useRef();
  const {state, dispatch} = useFilter();  
  const [filterValue, setFilterValue] = useState('');
  const scaleNumbers = [2, 4, 8, 10];
  const scaleValues = scaleNumbers.map((number) => ({
    value: number.toString(), label: `${number}pt Scale`,
  }));

  // We also add style object because CSS Modules can't override style object.
  const clearButtonStyle = {border: 'transparent'}; 
  const ClearButton = <IconButton 
    className={classes.clearButton} 
    style={clearButtonStyle} 
    icon={IconX} label='Clear Input' 
    onClick={(e) => {
      setFilterValue('');
      dispatch({type: 'filter', value: ''});
      e.currentTarget.blur();
    }}
  />;

  // Add keypress event listener to focus search input.
  useWindowEvent('keypress', (e) => {
    if (e.key === '/' || e.key === 's') {
      e.preventDefault();
      searchRef.current.focus();
    }
  });

  return (
    <Box className={classes.filterBar}>
      <NumberInput
        className={classes.search}
        size='md'
        radius='md'
        placeholder='Search Number'
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
          }
        }}
        rightSection={filterValue !== '' ? ClearButton : null}
        hideControls
      />
      <Select
        className={classes.selector}
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
