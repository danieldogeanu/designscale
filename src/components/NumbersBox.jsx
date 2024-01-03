import { Box } from '@mantine/core';
import NumberCell from './NumberCell';
import classes from '../styles/numbersBox.module.scss';

function generateNumbers(number) {
  let numbers = [];

  for (let i=0; i<number; i++) {
    numbers.push(i);
  }

  return numbers;
}

export default function NumbersBox() {
  const numbers = generateNumbers(10000).filter((number) => (number % 4 === 0));

  return (
    <Box className={classes.numbersBox}>
      {numbers && numbers.map((number, index) => {
        return <NumberCell key={index}>{number}</NumberCell>;
      })}
    </Box>
  );
}
