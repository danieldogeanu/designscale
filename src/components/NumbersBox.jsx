import { Box } from '@mantine/core';
import NumberCell from './NumberCell';
import classes from '../styles/numbersBox.module.scss';
import useNumbersScale from '../hooks/useNumbersScale';

export default function NumbersBox() {
  const numbers = useNumbersScale(1000, 4);

  return (
    <Box className={classes.numbersBox}>
      {numbers && numbers.map((number, index) => {
        return <NumberCell key={index}>{number}</NumberCell>;
      })}
    </Box>
  );
}
