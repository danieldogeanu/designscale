import { Box } from '@mantine/core';
import NumberCell from './NumberCell';
import useNumbersScale from '../hooks/useNumbersScale';
import useFilter from '../hooks/useFilter';
import classes from '../styles/numbersBox.module.scss';

export default function NumbersBox() {
  const {state} = useFilter();
  const numbers = useNumbersScale(state.size, state.scale);

  return (
    <Box className={classes.numbersBox}>
      {numbers && numbers.filter((value) => {
        return state.filter !== null ? value.toString().includes(state.filter) : true;
      }).map((number, index) => {
        return <NumberCell key={index}>{number}</NumberCell>;
      })}
    </Box>
  );
}
