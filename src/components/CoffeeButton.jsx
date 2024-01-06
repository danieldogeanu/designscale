import classes from '../styles/coffeeButton.module.scss';
import CoffeeLogo from '../assets/bmc-logo.svg?react';

export default function CoffeeButton() {
  return (
    <div className={classes.coffeeButton}>
      <a href="https://www.buymeacoffee.com/danieldogeanu" target="_blank" rel="noreferrer">
        <CoffeeLogo className={classes.coffeeLogo} /> Buy Me a Coffee
      </a>
    </div>
  );
}
