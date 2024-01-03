import { Box } from '@mantine/core';
import classes from '../styles/numberCell.module.scss';

export default function NumberCell({children}) {
  return <Box className={classes.numberCell}>{children}</Box>;
}
