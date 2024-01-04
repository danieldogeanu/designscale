import { useState } from "react";
import { NumberInput, Select, Box } from "@mantine/core";
import useFilter from "../hooks/useFilter.js";
import classes from '../styles/filterBar.module.scss';

export default function FilterBar() {
  const {state, dispatch} = useFilter();  
  const [filterValue, setFilterValue] = useState('');
  const scaleNumbers = [2, 4, 8, 10];
  const scaleValues = scaleNumbers.map((number) => ({
    value: number.toString(), label: `${number}pt Scale`,
  }));

  return (
    <Box className={classes.filterBar}>
      <NumberInput
        className={classes.search}
        size='md'
        radius='md'
        placeholder='Search Number'
        hideControls
        value={filterValue}
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
