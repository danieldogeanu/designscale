import { Box } from '@mantine/core';
import NumberCell from './NumberCell';
import useNumbersScale from '../hooks/useNumbersScale';
import useFilter from '../hooks/useFilter';
import classes from '../styles/numbersBox.module.scss';

export default function NumbersBox() {
  const {state} = useFilter();
  const numbers = useNumbersScale(state.size, state.scale);
  const filteredNumbers = numbers.filter((value) => {
    return state.filter !== null ? value.toString().includes(state.filter) : true;
  }).map((number, index) => {
    return <NumberCell key={index}>{number}</NumberCell>;
  });
  const NumberNotFound = <Box className={classes.notFound}>Number not found.</Box>;

  return (
    <Box className={classes.numbersBox}>
      {(filteredNumbers && filteredNumbers.length > 0) ? filteredNumbers : NumberNotFound}
    </Box>
  );
}
